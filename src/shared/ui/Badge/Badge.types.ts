import type { ReactNode } from "react";

export type BadgeVariant = "difficulty" | "raiting" | "hashtag";

export interface BadgeProps {
  variant?: BadgeVariant;
  children?: ReactNode;
  className?: string;
}
