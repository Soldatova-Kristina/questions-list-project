import clsx from "clsx";

import styles from "./Badge.module.css";
import type { BadgeProps } from "./Badge.types";

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles.variant, className)}>
      {variant === "hashtag" && "#"}
      {children}
    </span>
  );
}
