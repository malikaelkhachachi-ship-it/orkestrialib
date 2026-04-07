import styles from "./auth-card.module.css"
export function AuthCard() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.eyebrow}>Connexion</div>
        <h1 className={styles.title}>Entrez dans votre espace OrkestriaLib</h1>
        <form className={styles.form}>
          <label className={styles.label}>Adresse email<input className={styles.input} type="email" placeholder="vous@exemple.com" /></label>
          <label className={styles.label}>Mot de passe<input className={styles.input} type="password" placeholder="••••••••" /></label>
          <button className={styles.button} type="submit">Se connecter</button>
        </form>
      </div>
    </section>
  )
}
