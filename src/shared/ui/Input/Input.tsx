import clsx from "clsx";

import { Icon } from "../Icon/Icon";

import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export function Input({ className, ...props }: InputProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <input className={styles.input} {...props}></input>
      <Icon name="search_input" className={styles.icon} />
    </div>
  );
}
