-- Lemon Squeezy webhook: table for subscription_created / subscription_updated
-- Idempotency: upsert on subscription_id (Lemon Squeezy subscription ID)

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

-- Index for upsert conflict target (optional; unique constraint already creates one)
-- create unique index if not exists subscriptions_subscription_id_key on public.subscriptions (subscription_id);

alter table public.subscriptions enable row level security;

-- Service role can do everything (used by Edge Function)
create policy "Service role full access to subscriptions"
  on public.subscriptions
  for all
  to service_role
  using (true)
  with check (true);

comment on table public.subscriptions is 'Lemon Squeezy subscription_created / subscription_updated webhook data';
