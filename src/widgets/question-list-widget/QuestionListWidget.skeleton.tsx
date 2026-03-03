import { Skeleton } from "@/shared/ui/Skeleton";

import styles from "./QuestionListWidget.module.css";

export function QuestionListSkeleton() {
  return (
    <div className={styles["question-list"]}>
      <Skeleton
        width="300px"
        height={40}
        borderRadius={12}
        className={styles["question-list__title-skeleton"]}
      />

      <div className={styles["question-list__list"]}>
        {[...Array(12)].map((_, index) => (
          <Skeleton key={index} width="100%" height={60} borderRadius={12} />
        ))}
      </div>
    </div>
  );
}
