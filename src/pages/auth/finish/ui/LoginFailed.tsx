import { useUnit } from "effector-react";
import { FC } from "react";

import { tryAgainClicked } from "@/pages/auth/finish/model";

import { IconAlertCircle, IconArrowLeft } from "@/shared/assets/icons";
import { Button, FeaturedIcon } from "@/shared/ui";

import styles from "./styles.module.css";

export const LoginFailed: FC = () => {
  const handleTryAgain = useUnit(tryAgainClicked);

  return (
    <>
      <FeaturedIcon
        className={styles["featured-icon"]}
        color="error"
        Icon={IconAlertCircle}
      />
      <h1 className={styles.headline}>Sign In Failed</h1>
      <p className={styles.description}>
        We encountered an issue validating your sign-in link. Please ensure the
        link hasn't expired or been used before.
      </p>
      <Button
        variant="link-gray"
        className={styles["button-back"]}
        onClick={handleTryAgain}
      >
        <IconArrowLeft className={styles["back-icon"]} />
        Try again
      </Button>
    </>
  );
};
