import { FC } from "react";
import { Button, FeaturedIcon } from "@/shared/ui";
import { IconArrowLeft, IconMail01 } from "@/shared/assets/icons";
import styles from "./styles.module.css";
import { useUnit } from "effector-react/effector-react.mjs";
import { $email, backToLoginPressed } from "@/pages/auth/sign-in/model";

export const LoginSucceeded: FC = () => {
  const [email, handleBackClick] = useUnit([$email, backToLoginPressed]);
  return (
    <>
      <FeaturedIcon
        className={styles["featured-icon"]}
        color="primary"
        Icon={IconMail01}
      />
      <h1 className={styles.headline}>Check your email</h1>
      <p className={styles.description}>
        We sent a login link to{" "}
        <span className={styles["description-accent"]}>{email}</span>
      </p>
      <Button
        variant="link-gray"
        className={styles["button-back"]}
        onClick={() => {
          handleBackClick();
        }}
      >
        <IconArrowLeft className={styles["back-icon"]} />
        Back to login
      </Button>
    </>
  );
};
