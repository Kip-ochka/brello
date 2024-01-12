import type { ChangeEvent } from "react";
import type { Props } from "./types.ts";
import cn from "classnames";
import styles from "./styles.module.css";

export const Input = <T extends string>({
  className,
  onValue,
  name,
  value,
  label,
  hint,
  type = "text",
  variant = "sm",
  error,
  ...rest
}: Props<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    onValue({ value, name: name as T });
  };

  return label ? (
    <label className={cn(styles["label-only"], className)}>
      <span className={styles.label}>{label}</span>
      <input
        type={type}
        name={name}
        className={cn(styles.root, styles[`variant-${variant}`], {
          [styles.hasError]: Boolean(error),
        })}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </label>
  ) : (
    <>
      <input
        type={type}
        name={name}
        className={cn(
          styles.root,
          styles[`variant-${variant}`],
          {
            [styles.hasError]: Boolean(error),
          },
          className
        )}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </>
  );
};
