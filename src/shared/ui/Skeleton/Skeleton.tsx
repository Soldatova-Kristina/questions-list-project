import clsx from "clsx";

import styles from "./Skeleton.module.css";
import type { SkeletonProps } from "./Skeleton.types";

export function Skeleton({ width, height, borderRadius, style = {}, className }: SkeletonProps) {
  return (
    <div
      className={clsx(styles.skeleton, className)}
      style={{ width, height, borderRadius, ...style }}
    />
  );
}
