import cn from "classnames";
import styles from "./styles.module.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "primary" | "secondary-gray" | "link-gray" | "link-color";
  loading?: boolean;
  isDestructive?: boolean;
  children?: ReactNode;
}

export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, Props>(
  (
    {
      className,
      size = "lg",
      variant = "primary",
      loading = false,
      disabled,
      isDestructive = false,
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    const classList = cn(
      styles.root,
      styles[`size-${size}`],
      styles[`variant-${variant}`],
      {
        [styles.desctuctive]: isDestructive,
      },
      className
    );

    return (
      <button
        ref={ref}
        disabled={loading ?? disabled}
        className={classList}
        onClick={loading ? undefined : onClick}
        aria-disabled={loading ?? disabled}
        {...rest}
      >
        {loading ? "Loading…" : children}
      </button>
    );
  }
);
