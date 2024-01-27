import { Loading } from "@/shared/ui";

import styles from "./styles.module.css";

export const LoginValidating = () => {
  return (
    <>
      <Loading className={styles.loader} />
      <h1 className={styles.headline}>Signing You In</h1>
      <p className={styles.description}>
        Validating your credentials. This may take a few seconds…
      </p>
    </>
  );
};
