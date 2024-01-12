import { Props } from "./types.ts";
import cn from "classnames";
import styles from "./styles.module.css";

export const Loading = ({ className }: Props): JSX.Element => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.part} />
      <div className={styles.part} />
      <div className={styles.part} />
      <div className={styles.part} />
    </div>
  );
};
