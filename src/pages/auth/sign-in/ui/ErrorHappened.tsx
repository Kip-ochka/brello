import { FC } from "react";
import { Button, FeaturedIcon } from "@/shared/ui";
import { IconAlertCircle, IconArrowLeft } from "@/shared/assets/icons";
import styles from "./styles.module.css";
import { useUnit } from "effector-react/effector-react.mjs";
import { $error, backToLoginPressed } from "@/pages/auth/sign-in/model";
import { errorText } from "@/pages/auth/sign-in/model/errorText.ts";

export const ErrorHappened: FC = () => {
  const [error, handleBackClick] = useUnit([$error, backToLoginPressed]);
  return (
    <>
      <FeaturedIcon
        className={styles["featured-icon"]}
        color="error"
        Icon={IconAlertCircle}
      />
      <h1 className={styles.headline}>Some error happened</h1>
      <p className={styles.description}>
        With description:{" "}
        <span className={styles["description-accent"]}>
          {error && errorText[error]}
        </span>
      </p>
      <Button
        variant="link-gray"
        className={styles["button-back"]}
        onClick={() => {
          handleBackClick();
        }}
      >
        <IconArrowLeft className={styles["back-icon"]} />
        Try again
      </Button>
    </>
  );
};
