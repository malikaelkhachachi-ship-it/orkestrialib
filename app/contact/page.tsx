import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export default function Page() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="contact" title="Entrer dans l’univers OrkestriaLib" text="Page premium OrkestriaLib prête à enrichir." primaryHref="/bibliotheque" primaryLabel="Explorer" secondaryHref="/" secondaryLabel="Retour accueil" />
      <Footer />
    </main>
  )
}
