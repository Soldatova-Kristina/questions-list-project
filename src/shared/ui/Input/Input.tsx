import clsx from "clsx";

import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export function Input({ className, ...props }: InputProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <input className={styles.input} {...props} />
    </div>
  );
}
