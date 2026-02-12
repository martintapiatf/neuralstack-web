-- Fix: ensure subscription_id has a UNIQUE constraint so ON CONFLICT (subscription_id) works.
-- Safe to run on existing table.

-- 1) Add column if it doesn't exist
alter table public.subscriptions
  add column if not exists subscription_id text;

-- 2) Backfill existing rows with null/empty subscription_id (unique placeholder each)
update public.subscriptions s
  set subscription_id = 'legacy-' || gen_random_uuid()::text
  where subscription_id is null or trim(subscription_id) = '';

-- 3) Drop existing constraint/index if present (in case of re-run)
alter table public.subscriptions drop constraint if exists subscriptions_subscription_id_key;
drop index if exists public.subscriptions_subscription_id_key;

-- 4) UNIQUE index: non-null subscription_id only (allows nulls in DB; our webhook always sends a value)
create unique index subscriptions_subscription_id_key
  on public.subscriptions (subscription_id)
  where subscription_id is not null and trim(subscription_id) <> '';
