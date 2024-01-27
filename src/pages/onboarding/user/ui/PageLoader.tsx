import styles from "@/pages/onboarding/user/ui/styles.module.css";

export const PageLoader = () => {
  return (
    <main className={styles.root}>
      <section className={styles.section}>
        <h1 className={styles.headline}>Session loading…</h1>
      </section>
    </main>
  );
};
