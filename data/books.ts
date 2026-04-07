import { createClient } from "@/lib/supabase/server"

export type Book = {
  id: string
  slug: string
  title: string
  category: string
  author: string
  excerpt: string
  description: string
  cover_url?: string | null
}

export async function getBooks(): Promise<Book[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("books")
    .select("id, slug, title, category, author, excerpt, description, cover_url")
    .eq("is_published", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error(error.message)
    return []
  }

  return data ?? []
}

export async function getBookBySlug(slug: string): Promise<Book | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("books")
    .select("id, slug, title, category, author, excerpt, description, cover_url")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (error) {
    console.error(error.message)
    return null
  }

  return data
}
