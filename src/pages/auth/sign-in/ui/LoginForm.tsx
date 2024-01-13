import { FC } from "react";
import styles from "./styles.module.css";
import { Button, Input } from "@/shared/ui";
import {
  $email,
  $error,
  $pending,
  emailChanged,
  formSubmitted,
} from "../model";
import { useUnit } from "effector-react";
import { errorText } from "@/pages/auth/sign-in/model/errorText.ts";

export const LoginForm: FC = () => {
  const [email, pending, error, handleEmail, handleSubmit] = useUnit([
    $email,
    $pending,
    $error,
    emailChanged,
    formSubmitted,
  ]);
  return (
    <>
      <h1 className={styles.headline}>Sign in</h1>
      <p className={styles.description}>Start your 30-day free trial.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          className={styles.input}
          name="email"
          disabled={pending}
          value={email}
          error={error ? errorText[error] : null}
          label="Email"
          placeholder="Enter your email"
          onValue={({ value }) => {
            handleEmail(value);
          }}
          type={"email"}
        />
        <Button loading={pending} className={styles.button} type="submit">
          Get started
        </Button>
      </form>
    </>
  );
};
