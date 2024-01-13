import styles from "./styles.module.css";
import { ImageLogomark } from "@/shared/assets/images";
import { IconMail01 } from "@/shared/assets/icons";
import { Logo } from "@/shared/ui";
import { LoginForm } from "./LoginForm.tsx";
import { useUnit } from "effector-react";
import { $error, $finished } from "@/pages/auth/sign-in/model";
import { LoginSucceeded } from "@/pages/auth/sign-in/ui/LoginSucceeded.tsx";
import { ErrorHappened } from "@/pages/auth/sign-in/ui/ErrorHappened.tsx";

export const SignInPage = () => {
  const [finished, error] = useUnit([$finished, $error]);
  return (
    <>
      <main className={styles.root}>
        <div className={styles.content}>
          <header className={styles.header}>
            <Logo />
          </header>
          <section className={styles.form}>
            <img
              className={styles.logomark}
              src={ImageLogomark}
              alt="Brello logomark"
            />
            {finished ? (
              <LoginSucceeded />
            ) : error === "UnknownError" ? (
              <ErrorHappened />
            ) : (
              <LoginForm />
            )}
          </section>
          <footer className={styles.footer}>
            <p className={styles.info}>&copy; Brello 2023</p>
            <p className={styles.info}>
              <IconMail01 className={styles.mail} /> help@brello.io
            </p>
          </footer>
        </div>
        <div className={styles.geometric} />
      </main>
    </>
  );
};
