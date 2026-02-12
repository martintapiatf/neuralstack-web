import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  )

  try {
    const body = await req.json()
    const data = body.data
    const attributes = data?.attributes ?? {}

    const userName = (attributes.user_name ?? "").trim()
    const orgName = userName || attributes.user_email || `Cliente ${data?.id ?? "unknown"}`

    // 1. Crear la organización primero (multi-tenant); nombre = user_name o fallback
    const { data: org, error: orgError } = await supabase
      .from("organizations")
      .insert({ name: orgName })
      .select("id")
      .single()

    if (orgError) {
      console.error("[webhook] organización FAIL:", orgError.message, orgError.code)
      return new Response(
        JSON.stringify({ error: "Error creando organización", details: orgError.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    const organizationId = org?.id
    if (!organizationId) {
      console.error("[webhook] organización creada pero sin id")
      return new Response(
        JSON.stringify({ error: "No se obtuvo id de organización" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    // 2. Solo si la organización existe: guardar suscripción con organization_id (no huérfanos)
    const subscriptionData = {
      subscription_id: String(data?.id ?? ""),
      order_id: String(attributes.order_id ?? data?.id ?? ""),
      customer_id: String(attributes.customer_id ?? ""),
      email: attributes.user_email ?? "",
      status: attributes.status ?? "active",
      license_key: (attributes.license_key ?? "").trim() || `LIC-${data?.id}`,
      organization_id: organizationId,
      updated_at: new Date().toISOString(),
    }

    const { error: subError } = await supabase
      .from("subscriptions")
      .upsert(subscriptionData, { onConflict: "subscription_id" })

    if (subError) {
      console.error("[webhook] suscripción FAIL:", subError.message, subError.code)
      return new Response(
        JSON.stringify({ error: "Error guardando suscripción", details: subError.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    console.log("[webhook] OK organización:", organizationId, "suscripción:", subscriptionData.subscription_id)
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("[webhook] ERROR:", err?.message ?? err)
    return new Response(JSON.stringify({ error: err?.message ?? "Error interno" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
})