import { FC } from "react";
import styles from "./styles.module.css";
import { Button, Input } from "@/shared/ui";
import { $email, emailChanged } from "../model";
import { useUnit } from "effector-react";

export const LoginForm: FC = () => {
  const [emai, handleEmail] = useUnit([$email, emailChanged]);
  return (
    <>
      <h1 className={styles.headline}>Sign in</h1>
      <p className={styles.description}>Start your 30-day free trial.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input
          className={styles.input}
          name="email"
          disabled={false}
          value={emai}
          error={undefined}
          label="Email"
          placeholder="Enter your email"
          onValue={({ value }) => {
            handleEmail(value);
          }}
        />
        <Button loading={false} className={styles.button} type="submit">
          Get started
        </Button>
      </form>
    </>
  );
};
