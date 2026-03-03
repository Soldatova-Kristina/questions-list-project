import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { QuestionAnswer } from "@/entities/question/ui/QuestionAnswer/QuestionAnswer";
import defaultImage from "@/shared/assets/images/defaultSpecPhoto.png";
import { Icon } from "@/shared/ui/Icon";
import { Image } from "@/shared/ui/Image/Image";

import styles from "./QuestionDetail.module.css";
import { QuestionDetailSkeleton } from "./QuestionDetail.skeleton";

interface QuestionDetailProps {
  questionId: number;
}

export function QuestionDetail({ questionId }: QuestionDetailProps) {
  const { data, isLoading } = useGetQuestionByIdQuery(questionId);

  if (isLoading) {
    return <QuestionDetailSkeleton />;
  }

  if (!data) {
    return <div>Вопрос не найден</div>;
  }

  const question = data;
  const specialization = question.questionSpecializations[0];

  const imageSrc = specialization?.imageSrc ?? defaultImage;
  const imageAlt = specialization?.title ?? "Специализация";

  return (
    <>
      <section className={styles["question-detail"]}>
        <div className={styles["question-detail__header"]}>
          <div className={styles["question-detail__header-content"]}>
            <Image
              imageSrc={imageSrc}
              alt={imageAlt}
              width={160}
              height={160}
              className={styles["question-detail__image"]}
            />
          </div>

          <div className={styles["question-detail__header-content"]}>
            <h1 className={styles["question-detail__title"]}>{question.title}</h1>
            <p className={styles["question-detail__description"]}>{question.description}</p>
          </div>
        </div>
      </section>

      <section className={styles["question-detail"]}>
        <div className={styles["question-detail__navigation"]}>
          <button className={styles["question-detail__nav-button"]}>
            <Icon name="arrow-left" />
            Предыдущий
          </button>

          <button className={styles["question-detail__nav-button"]}>
            Следующий
            <Icon name="arrow-right" />
          </button>
        </div>
      </section>

      <section className={styles["question-detail"]}>
        <h2 className={styles["question-detail__section-title"]}>Краткий ответ</h2>
        <QuestionAnswer content={question.shortAnswer} emptyMessage="Нет короткого ответа" />
      </section>

      <section className={styles["question-detail"]}>
        <h2 className={styles["question-detail__section-title"]}>Развёрнутый ответ</h2>
        <QuestionAnswer
          content={question.longAnswer}
          emptyMessage="Нет полного ответа"
          expandable
          maxHeight={250}
        />
      </section>
    </>
  );
}
