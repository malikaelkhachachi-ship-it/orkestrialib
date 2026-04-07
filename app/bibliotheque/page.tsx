import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { SectionCard } from "@/components/section-card"
import { getBooks } from "@/data/books"

export const revalidate = 60

export default async function Page() {
  const books = await getBooks()
  return (
    <main>
      <Header />
      <PageHero eyebrow="Bibliothèque" title="Bibliothèque" text="Classiques enrichis, contenus originaux, savoirs et parcours éditoriaux conçus pour lire, comprendre et transmettre." primaryHref="/bibliotheque" primaryLabel="Explorer les collections" secondaryHref="/univers" secondaryLabel="Découvrir les univers" />
      <section className="page-section">
        <div className="page-container">
          <SectionHeader eyebrow="Catalogue" title="Parcours éditoriaux" text="Une sélection de contenus et de parcours déjà structurés." />
          <div className="grid-3">
            {books.map((book) => (
              <SectionCard key={book.slug} category={book.category} title={book.title} text={book.excerpt} href={`/bibliotheque/${book.slug}`} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
