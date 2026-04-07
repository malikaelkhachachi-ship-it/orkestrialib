import { OrkestriaLibHero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { SectionCard } from "@/components/section-card"

export default function HomePage() {
  return (
    <main>
      <OrkestriaLibHero />
      <section className="page-section" id="decouvrir">
        <div className="page-container">
          <SectionHeader
            eyebrow="Découvrir"
            title="Une marque éditoriale, pas un simple catalogue"
            text="OrkestriaLib sélectionne, produit, enrichit et publie des contenus avec une même exigence : donner accès à des lectures de qualité, cohérentes, durables et profondément incarnées."
          />
          <div className="grid-3">
            <SectionCard category="Sélectionner" title="Une ligne éditoriale forte" text="Choisir des œuvres et des sujets avec discernement." href="/bibliotheque" />
            <SectionCard category="Enrichir" title="Une lecture augmentée" text="Ajouter du contexte, de la clarté et de la valeur." href="/univers" />
            <SectionCard category="Déployer" title="Un système exploitable" text="Diffuser des contenus lisibles, beaux et standards." href="/a-propos" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
