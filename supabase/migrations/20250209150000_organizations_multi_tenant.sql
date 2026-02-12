-- Multi-tenant: organizations table and organization_id on subscriptions

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.organizations enable row level security;

create policy "Service role full access to organizations"
  on public.organizations for all to service_role
  using (true) with check (true);

-- Link subscriptions to an organization
alter table public.subscriptions
  add column if not exists organization_id uuid references public.organizations (id) on delete set null;

create index if not exists subscriptions_organization_id_idx on public.subscriptions (organization_id);

comment on table public.organizations is 'Tenant organization; one created per subscription_created (name = user_name)';
