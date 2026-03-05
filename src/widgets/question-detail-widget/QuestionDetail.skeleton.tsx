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
            {[...Array(3)].map((_, index) => (
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

      <section className={styles["question-detail"]}>
        <div className={styles["question-detail__navigation"]}>
          {[...Array(2)].map((_, index) => (
            <Skeleton key={index} width={140} height={40} borderRadius={12} />
          ))}
        </div>
      </section>

      <section className={styles["question-detail"]}>
        {[...Array(4)].map((_, index) => (
          <Skeleton
            key={index}
            width="95%"
            height={20}
            style={{ marginBottom: "16px" }}
            borderRadius={12}
          />
        ))}
      </section>

      <section className={styles["question-detail"]}>
        <Skeleton width={250} height={28} style={{ marginBottom: "16px" }} borderRadius={12} />
        {[...Array(5)].map((_, index) => (
          <Skeleton
            key={index}
            width="95%"
            height={20}
            style={{ marginBottom: "16px" }}
            borderRadius={12}
          />
        ))}
      </section>
    </>
  );
}
