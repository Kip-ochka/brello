import { FC } from "react";

import { IconMail01 } from "@/shared/assets/icons";
import { FeaturedIcon } from "@/shared/ui";

import styles from "./styles.module.css";

export const LoginFinished: FC = () => {
  return (
    <>
      <FeaturedIcon
        className={styles["featured-icon"]}
        color="primary"
        Icon={IconMail01}
      />
      <h1 className={styles.headline}>Sign In Successful</h1>
      <p className={styles.description}>
        Your credentials have been verified. Welcome back!
      </p>
      <p className={styles.description}>You'll be redirected shortly…</p>
    </>
  );
};
