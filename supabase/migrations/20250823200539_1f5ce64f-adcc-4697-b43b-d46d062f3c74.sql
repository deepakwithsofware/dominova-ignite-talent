-- Create extension for UUID generation (safe if already exists)
create extension if not exists pgcrypto;

-- Create internship registrations table
create table if not exists public.internship_registrations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  college_name text,
  email text not null,
  phone text not null,
  domains text[] not null,
  introduction text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.internship_registrations enable row level security;

-- Allow public inserts (form submissions) without exposing data via SELECT
drop policy if exists "Anyone can create internship registration" on public.internship_registrations;
create policy "Anyone can create internship registration"
  on public.internship_registrations
  for insert
  to anon, authenticated
  with check (true);

-- No SELECT policy is created, so reads are denied by default

-- Timestamp maintenance trigger
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Attach trigger to the table
drop trigger if exists update_internship_registrations_updated_at on public.internship_registrations;
create trigger update_internship_registrations_updated_at
before update on public.internship_registrations
for each row
execute function public.update_updated_at_column();