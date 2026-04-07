import Link from "next/link"
import styles from "./section-card.module.css"

export function SectionCard({ category, title, text, href }: { category: string; title: string; text: string; href: string }) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.cover} />
      <div className={styles.body}>
        <div className={styles.category}>{category}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </Link>
  )
}
