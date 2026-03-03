import { Accordion } from "@/shared/ui/Accordion";
import { Badge } from "@/shared/ui/Badge";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
import { Icon } from "@/shared/ui/Icon";

import type { Question } from "../../model/question.types";
import { QuestionAnswer } from "../QuestionAnswer/QuestionAnswer";

import styles from "./QuestionCard.module.css";
import { QuestionCardMenu } from "./QuestionCardMenu";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const questionTitle = (
    <>
      <Icon name="ellipse" />
      <span>{question.title}</span>
    </>
  );

  const questionContent = (
    <>
      <div className={styles["question-card__meta"]}>
        <div className={styles["question-card__badges"]}>
          <div className={styles["question-card__badge"]}>
            Рейтинг: <Badge variant="rating">{question.rate}</Badge>
          </div>

          <div className={styles["question-card__badge"]}>
            Сложность:<Badge variant="complexity">{question.complexity}</Badge>
          </div>
        </div>

        <Dropdown
          trigger={
            <button className={styles["question-card__menu-button"]}>
              <Icon name="kebab-menu" />
            </button>
          }
        >
          <QuestionCardMenu questionId={question.id} />
        </Dropdown>
      </div>

      <QuestionAnswer
        content={question.shortAnswer}
        emptyMessage="В данном вопросе нет короткого описания"
      />
    </>
  );

  return <Accordion title={questionTitle}>{questionContent}</Accordion>;
}
