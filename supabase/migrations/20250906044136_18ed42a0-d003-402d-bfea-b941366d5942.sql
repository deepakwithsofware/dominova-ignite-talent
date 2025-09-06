-- Create contacts table for contact form submissions
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null
);

-- Enable Row Level Security
alter table public.contacts enable row level security;

-- Allow public-facing form to insert messages
create policy "Anyone can create contact message"
  on public.contacts
  for insert
  to public
  with check (true);

-- Keep updated_at fresh
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

create trigger trg_contacts_updated_at
before update on public.contacts
for each row
execute function public.update_updated_at_column();

-- Helpful indexes
create index if not exists idx_contacts_email on public.contacts (email);
create index if not exists idx_contacts_created_at on public.contacts (created_at);