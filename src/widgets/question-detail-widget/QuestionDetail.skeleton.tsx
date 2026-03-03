import { Skeleton } from "@/shared/ui/Skeleton";

import styles from "./QuestionDetail.module.css";

export function QuestionDetailSkeleton() {
  return (
    <div className={styles["question-detail"]}>
      <Skeleton
        width="300px"
        height={40}
        borderRadius={12}
        className={styles["question-detail__title-skeleton"]}
      />

      <div className={styles["question-detail__list"]}>
        {[...Array(12)].map((_, index) => (
          <Skeleton key={index} width="100%" height={60} borderRadius={12} />
        ))}
      </div>
    </div>
  );
}
