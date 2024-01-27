import { FC, PropsWithChildren } from "react";

import { IconMail01 } from "@/shared/assets/icons";
import { ImageLogomark } from "@/shared/assets/images";
import { Logo } from "@/shared/ui";

import styles from "./styles.module.css";

export type AuthnLayoutProps = {
  test?: string;
};

export const AuthnLayout: FC<PropsWithChildren<AuthnLayoutProps>> = ({
  children,
}) => {
  return (
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
          {children}
        </section>
        <footer className={styles.footer}>
          <p className={styles.info}>&copy; Brello 2024</p>
          <p className={styles.info}>
            <IconMail01 className={styles.mail} /> kartman1900@gmail.com
          </p>
        </footer>
      </div>
      <div className={styles.geometric} />
    </main>
  );
};
