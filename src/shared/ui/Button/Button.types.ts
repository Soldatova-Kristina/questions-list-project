import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "text" | "filter";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isDisabled?: boolean;
  isSelected?: boolean;
  className?: string;
  children?: ReactNode;
}
