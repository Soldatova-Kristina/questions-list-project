import type { ReactNode } from "react";

export type BadgeVariant = "complexity" | "rating" | "hashtag";

export interface BadgeProps {
  variant?: BadgeVariant;
  children?: ReactNode;
  className?: string;
}
