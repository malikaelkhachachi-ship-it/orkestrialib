import styles from "./section-header.module.css"
export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className={styles.wrap}><div className={styles.eyebrow}>{eyebrow}</div><h2 className={styles.title}>{title}</h2><p className={styles.text}>{text}</p></div>
}
