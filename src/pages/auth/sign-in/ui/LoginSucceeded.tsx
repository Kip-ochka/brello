import { FC } from "react";
import { Button, FeaturedIcon } from "@/shared/ui";
import { IconArrowLeft, IconMail01 } from "@/shared/assets/icons";
import styles from "./styles.module.css";

export const LoginSucceeded: FC = () => {
  return (
    <>
      <FeaturedIcon
        className={styles.featuredIcon}
        color="primary"
        Icon={IconMail01}
      />
      <h1 className={styles.headline}>Check your email</h1>
      <p className={styles.description}>
        We sent a login link to{" "}
        <span className={styles.descriptionAccent}>{""}</span>
      </p>
      <Button
        variant="link-gray"
        className={styles.buttonBack}
        onClick={() => {}}
      >
        <IconArrowLeft className={styles.backIcon} />
        Back to login
      </Button>
    </>
  );
};
