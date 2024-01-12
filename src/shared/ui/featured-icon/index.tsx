import type { FC } from "react";
import type { Props } from "./types.ts";
import cn from "classnames";
import styles from "./styles.module.css";

export const FeaturedIcon: FC<Props> = ({
  className,
  color = "primary",
  Icon,
}) => {
  const classList = cn(styles.root, styles[`color-${color}`], className);

  return (
    <div className={classList}>
      <Icon className={styles.container} />
    </div>
  );
};
