import { AuthnLayout } from "@/shared/ui/layouts/authn/AuthnLayout.tsx";

import styles from "./styles.module.css";

export const PageLoader = () => {
  return (
    <AuthnLayout>
      <h1 className={styles.headline}>Session loading…</h1>
    </AuthnLayout>
  );
};
