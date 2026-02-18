import clsx from "clsx";

import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  variant = "primary",
  isDisabled = false,
  isSelected = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        isSelected && variant === "filter" && styles.filterActive,
        isDisabled && styles.disabled,
        className,
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-pressed={isSelected}
      {...props}
    >
      {children}
    </button>
  );
}
