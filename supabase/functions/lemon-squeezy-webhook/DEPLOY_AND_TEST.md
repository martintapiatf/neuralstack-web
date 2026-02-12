# Deploy y prueba del webhook Lemon Squeezy

## 1) SQL exacto (Supabase SQL Editor o CLI)

Ejecutar en **Supabase → SQL Editor** (o `supabase db push` si usas migraciones):

```sql
-- Asegurar columna subscription_id
alter table public.subscriptions
  add column if not exists subscription_id text;

-- Rellenar filas sin subscription_id
update public.subscriptions s
  set subscription_id = 'legacy-' || gen_random_uuid()::text
  where subscription_id is null or trim(subscription_id) = '';

-- Quitar constraint/índice previo si existe
alter table public.subscriptions drop constraint if exists subscriptions_subscription_id_key;
drop index if exists public.subscriptions_subscription_id_key;

-- Índice UNIQUE para ON CONFLICT (subscription_id)
create unique index subscriptions_subscription_id_key
  on public.subscriptions (subscription_id)
  where subscription_id is not null and trim(subscription_id) <> '';
```

## 2) Aplicar migración (alternativa)

```bash
cd /Users/martintapia/neuralstack-web
supabase db push
```

## 3) Re-deploy de la Edge Function

```bash
cd /Users/martintapia/neuralstack-web
supabase functions deploy lemon-squeezy-webhook
```

## 4) Probar con Resend en Lemon

1. Lemon Squeezy → **Settings** → **Webhooks** → tu webhook → **Recent deliveries**.
2. En un envío que esté en "Pending", pulsar **Resend**.
3. Comprobar:
   - El envío pasa a **Delivered** (ya no Pending).
   - En Supabase: **Edge Functions** → `lemon-squeezy-webhook` → **Logs**: ver `[webhook] signature OK`, `event: subscription_created` (o `subscription_updated`), `insert/upsert OK subscription_id: ...`.
   - En **Table Editor** → `public.subscriptions`: aparece (o se actualiza) una fila con ese `subscription_id`.

Si sigue en Pending: revisar que el **Signing secret** del webhook en Lemon coincida con el secret `LEMON_SQUEEZY_SIGNING_SECRET` en Supabase (Edge Functions → Secrets).
