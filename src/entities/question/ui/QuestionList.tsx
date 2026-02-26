import { Accordion } from "@/shared/ui/Accordion";
import { Badge } from "@/shared/ui/Badge";
import { Icon } from "@/shared/ui/Icon";

import type { Question } from "../model/question.types";

import styles from "./QuestionList.module.css";

interface QuestionListProps {
  question: Question;
}

export function QuestionList({ question }: QuestionListProps) {
  const fallBackContent = "В данном вопросе нет короткого описания";

  const questionTitle = (
    <>
      <Icon name="ellipse" />
      <span>{question.title}</span>
    </>
  );

  const questionContent = (
    <>
      <div className={styles.metaData}>
        <div className={styles.badges}>
          <div className={styles.badge}>
            Рейтинг: <Badge variant="rating">{question.rate}</Badge>
          </div>

          <div className={styles.badge}>
            Сложность:<Badge variant="complexity">{question.complexity}</Badge>
          </div>
        </div>

        <button className={styles.menuButton}>
          <Icon name="kebab-menu" />
        </button>
      </div>

      {question.shortAnswer ? (
        <div className={styles.answer} dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
      ) : (
        <p className={styles.answer}>{fallBackContent}</p>
      )}
    </>
  );

  return <Accordion title={questionTitle}>{questionContent}</Accordion>;
}
