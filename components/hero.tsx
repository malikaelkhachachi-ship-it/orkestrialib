import Image from "next/image"
import Link from "next/link"
import styles from "./hero.module.css"

export function OrkestriaLibHero() {
  return (
    <section className={styles.wrap}>
      <div className={styles.desktop}>
        <Image src="/hero-reference.jpg" alt="Hero OrkestriaLib" fill priority className={styles.img} />
        <Link href="/bibliotheque" className={styles.primary} aria-label="Explorer la bibliothèque" />
        <Link href="/univers" className={styles.secondary} aria-label="Découvrir nos univers" />
      </div>
    </section>
  )
}
