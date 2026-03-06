import { Skeleton } from "@/shared/ui/Skeleton";

import styles from "./QuestionDetail.module.css";

export function QuestionDetailSkeleton() {
  return (
    <>
      <section className={styles["question-detail"]}>
        <div className={styles["question-detail__header"]}>
          <div className={styles["question-detail__header-content"]}>
            <Skeleton width={160} height={160} borderRadius={12} />
          </div>

          <div className={styles["question-detail__header-content"]}>
            {[...Array(12)].map((_, index) => (
              <Skeleton
                key={index}
                width="80%"
                height={32}
                style={{ marginBottom: "12px" }}
                borderRadius={12}
              />
            ))}
          </div>
        </div>
      </section>
      </>
  )
}