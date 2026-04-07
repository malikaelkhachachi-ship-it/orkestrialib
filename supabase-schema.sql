create extension if not exists pgcrypto;

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  author text not null,
  excerpt text not null,
  description text not null,
  cover_url text,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

insert into public.books (slug, title, category, author, excerpt, description)
values
('patrimoine-vivant','Patrimoine vivant','Classiques enrichis','OrkestriaLib','Des œuvres du domaine public remises en circulation avec exigence.','Une collection pensée pour rendre les grandes œuvres plus lisibles, mieux contextualisées et plus désirables.'),
('univers-de-marque','Univers de marque','Créations originales','Maison OrkestriaLib','Des textes et collections capables de faire émerger un imaginaire distinctif.','Cette ligne rassemble les créations originales, les signatures éditoriales et les mondes narratifs conçus pour faire exister la marque.'),
('transmission-active','Transmission active','Jeunesse & pédagogie','Studio OrkestriaLib','Des contenus conçus pour éveiller la curiosité et transmettre des savoirs.','Une approche jeunesse et pédagogique qui relie lecture, compréhension, découverte et plaisir narratif.')
on conflict (slug) do nothing;

alter table public.books enable row level security;
drop policy if exists "public can read published books" on public.books;
create policy "public can read published books"
on public.books for select
using (is_published = true);
