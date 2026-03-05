import { useNavigate } from "react-router-dom";

import type { Question } from "@/entities/question/model/question.types";
import { QuestionAnswer } from "@/entities/question/ui/QuestionAnswer/QuestionAnswer";
import defaultImage from "@/shared/assets/images/defaultSpecPhoto.png";
import { Button } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import { Image } from "@/shared/ui/Image/Image";

import styles from "./QuestionDetail.module.css";
interface QuestionDetailProps {
  question: Question;
}

export function QuestionDetail({ question }: QuestionDetailProps) {
  const navigate = useNavigate();

  const specialization = question.questionSpecializations[0];
  const imageSrc = specialization?.imageSrc ?? defaultImage;
  const imageAlt = specialization?.title ?? "Специализация";

  const handlePrevious = () => navigate(`/question/${question.id - 1}`); /* Доработать навигацию */
  const handleNext = () => navigate(`/question/${question.id + 1}`);

  return (
    <div>
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
          <Button
            variant="text"
            className={styles["question-detail__nav-button"]}
            onClick={handlePrevious}
          >
            <Icon name="arrow-left" />
            Предыдущий
          </Button>
          <Button
            variant="text"
            className={styles["question-detail__nav-button"]}
            onClick={handleNext}
          >
            Следующий
            <Icon name="arrow-right" />
          </Button>
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
    </div>
  );
}
