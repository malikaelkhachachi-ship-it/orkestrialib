import Link from "next/link"
import styles from "./page-hero.module.css"

export function PageHero({ eyebrow, title, text, primaryHref, primaryLabel, secondaryHref, secondaryLabel }:
{ eyebrow: string; title: string; text: string; primaryHref: string; primaryLabel: string; secondaryHref?: string; secondaryLabel?: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.badge}>{eyebrow}</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <Link href={primaryHref} className={styles.primary}>{primaryLabel}</Link>
          {secondaryHref && secondaryLabel ? <Link href={secondaryHref} className={styles.secondary}>{secondaryLabel}</Link> : null}
        </div>
      </div>
    </section>
  )
}
