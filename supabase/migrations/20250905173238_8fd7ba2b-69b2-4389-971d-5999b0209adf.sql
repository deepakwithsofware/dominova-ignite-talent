-- Create trainer_registrations table
create table if not exists public.trainer_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  expertise text[],
  experience_years int,
  portfolio_url text,
  introduction text,
  city text
);

-- Enable RLS
alter table public.trainer_registrations enable row level security;

-- Allow anyone (anon/authenticated) to insert via public form
create policy "Anyone can create trainer registration"
  on public.trainer_registrations
  for insert
  to public
  with check (true);

-- Trigger to keep updated_at fresh
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trg_trainer_registrations_updated_at
before update on public.trainer_registrations
for each row
execute function public.update_updated_at_column();

-- Indexes for common lookups
create index if not exists idx_trainer_registrations_email on public.trainer_registrations (email);
create index if not exists idx_trainer_registrations_created_at on public.trainer_registrations (created_at);
