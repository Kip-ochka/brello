import styles from "./styles.module.css";
import { FC } from "react";
import { Button, Input } from "@/shared/ui";

export const LoginForm: FC = () => {
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
          value={""}
          error={undefined}
          label="Email"
          placeholder="Enter your email"
          onValue={() => {}}
        />
        <Button loading={false} className={styles.button} type="submit">
          Get started
        </Button>
      </form>
    </>
  );
};
