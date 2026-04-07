# OrkestriaLib — Next.js V4 + Supabase

Cette version ajoute un backend réel avec Supabase pour les contenus de la bibliothèque.

## Installation
1. Dézippe le projet
2. Ouvre un terminal dans le dossier
3. Lance `npm install`
4. Copie `.env.example` en `.env.local`
5. Mets tes clés Supabase
6. Lance `npm run dev`

## Ce qui est branché
- `/bibliotheque` lit depuis la table `books`
- `/bibliotheque/[slug]` lit la fiche détaillée
- `/api/books` expose les livres publiés
- `supabase-schema.sql` crée la table et les données de départ
