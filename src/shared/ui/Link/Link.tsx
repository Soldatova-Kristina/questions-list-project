import clsx from "clsx";
import { NavLink } from "react-router-dom";

import styles from "./Link.module.css";
import type { LinkProps } from "./Link.types";

export function Link({ className, ...props }: LinkProps) {
  return (
    <NavLink
      className={({ isActive }) => clsx(styles.link, isActive && styles.active, className)}
      {...props}
    />
  );
}
