import Link from "next/link"
import { navItems } from "@/data/site"
import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>OrkestriaLib</Link>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={styles.link}>{item.label}</Link>
        ))}
      </nav>
      <div className={styles.actions}>
        <Link href="/connexion" className={styles.ghost}>Se connecter</Link>
        <Link href="/bibliotheque" className={styles.primary}>Commencer</Link>
      </div>
    </header>
  )
}
