# Lemon Squeezy webhook (Edge Function)

Respuesta rápida (200/4xx/5xx), verificación HMAC del body raw, upsert idempotente en `public.subscriptions` con Service Role.

## Secrets (nombres exactos)

Configurar en **Supabase**:

| Secret | Descripción |
|--------|-------------|
| `LEMON_SQUEEZY_SIGNING_SECRET` | Signing secret del webhook en Lemon Squeezy (6–40 caracteres). |
| `SUPABASE_URL` | Ya existe por defecto en Edge Functions. |
| `SUPABASE_SERVICE_ROLE_KEY` | Ya existe por defecto en Edge Functions. |

### Dónde setearlos

- **Dashboard:** Project Settings → Edge Functions → Secrets (o Project Settings → API para ver URL y service_role key; los secrets de funciones se configuran en Edge Functions).
- **CLI:**
  ```bash
  supabase secrets set LEMON_SQUEEZY_SIGNING_SECRET="tu-signing-secret"
  ```
  `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` no hace falta setearlos; Supabase los inyecta automáticamente en las funciones.

El **Signing secret** lo ves (solo una vez) al crear el webhook en Lemon Squeezy: Dashboard → Settings → Webhooks → [tu webhook] → Signing secret.

---

## Migración SQL (tabla e idempotencia)

La tabla debe tener una columna **única** para el upsert (p. ej. `subscription_id`). Si la tabla ya existe con otro esquema, ajusta la migración o aplica solo lo que falte.

Ejemplo de migración (ya incluida en `supabase/migrations/`):

```sql
-- supabase/migrations/20250209120000_create_subscriptions_webhook.sql
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  subscription_id text not null unique,
  order_id text not null default '',
  customer_id text not null default '',
  email text not null,
  license_key text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.subscriptions enable row level security;

create policy "Service role full access to subscriptions"
  on public.subscriptions for all to service_role
  using (true) with check (true);
```

Aplicar migraciones:

```bash
supabase db push
# o en local:
supabase migration up
```

---

## Deploy

1. Enlazar proyecto (si no lo está):
   ```bash
   supabase link --project-ref <tu-project-ref>
   ```

2. Desplegar la función:
   ```bash
   supabase functions deploy lemon-squeezy-webhook
   ```

3. URL del webhook (para configurarla en Lemon Squeezy):
   ```
   https://<project-ref>.supabase.co/functions/v1/lemon-squeezy-webhook
   ```

---

## Verificación

### 1) Logs en Supabase

- Dashboard → Edge Functions → `lemon-squeezy-webhook` → Logs.
- Deberías ver líneas como: `[webhook] signature OK`, `[webhook] event: subscription_created`, `[webhook] insert/upsert OK subscription_id: ...`.

### 2) Resend en Lemon Squeezy

- Dashboard Lemon Squeezy → Settings → Webhooks → [tu webhook] → “Recent deliveries”.
- Usar **Resend** en un envío fallido; tras el cambio, debería pasar a “Delivered” (respuesta 200) y en logs: firma OK, evento, upsert OK.

### 3) Prueba con curl (firma inválida → 401)

```bash
curl -i -X POST 'https://<project-ref>.supabase.co/functions/v1/lemon-squeezy-webhook' \
  -H 'Content-Type: application/json' \
  -H 'X-Signature: invalid' \
  -d '{"meta":{"event_name":"subscription_created"},"data":{"id":"123","attributes":{"user_email":"test@example.com","order_id":1,"customer_id":1,"status":"active"}}}'
```

Esperado: **401 Unauthorized** (firma incorrecta). En logs: `[webhook] signature verification FAIL`.

### 4) Prueba con firma válida (local)

Para probar 200 con firma correcta necesitas generar el HMAC con el mismo secret que tiene la función. Ejemplo en Node:

```bash
node -e "
const crypto = require('crypto');
const secret = process.env.LEMON_SQUEEZY_SIGNING_SECRET || 'tu-secret';
const body = JSON.stringify({ meta: { event_name: 'subscription_created' }, data: { id: '999', attributes: { user_email: 'test@example.com', order_id: 1, customer_id: 1, status: 'active' } } });
const sig = crypto.createHmac('sha256', secret).update(body).digest('hex');
console.log(sig);
"
```

Luego:

```bash
export BODY='{"meta":{"event_name":"subscription_created"},"data":{"id":"999","attributes":{"user_email":"test@example.com","order_id":1,"customer_id":1,"status":"active"}}}'
export SIG=$(node -e "const c=require('crypto'); const s=process.env.LEMON_SQUEEZY_SIGNING_SECRET||'TU_SECRET'; console.log(c.createHmac('sha256',s).update(process.env.BODY).digest('hex'))")
curl -i -X POST 'https://<project-ref>.supabase.co/functions/v1/lemon-squeezy-webhook' \
  -H 'Content-Type: application/json' \
  -H "X-Signature: $SIG" \
  -d "$BODY"
```

Esperado: **200** y en logs: signature OK, event, insert/upsert OK. En la base, una fila en `public.subscriptions` con `subscription_id = '999'`.

---

## Comportamiento resumido

- Responde siempre (200, 4xx o 5xx); no deja el webhook en “Pending” por falta de respuesta.
- Verifica firma con el **body raw** (lectura una sola vez) y `X-Signature`.
- Solo procesa `subscription_created` y `subscription_updated`; el resto devuelve 200 y se loguea como “ignored”.
- Upsert en `public.subscriptions` por `subscription_id` (idempotente ante reintentos).
- Usa `SUPABASE_SERVICE_ROLE_KEY` (RLS no aplica para la función).
- Funciona igual en test mode y production (Lemon envía el mismo formato).
