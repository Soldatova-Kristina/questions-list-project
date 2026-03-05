import { Accordion } from "@/shared/ui/Accordion";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
import { Icon } from "@/shared/ui/Icon";

import type { Question } from "../../model/question.types";
import { QuestionAnswer } from "../QuestionAnswer/QuestionAnswer";
import { QuestionMeta } from "../QuestionMeta/QuestionMeta";

import styles from "./QuestionItem.module.css";
import { QuestionItemMenu } from "./QuestionItemMenu";

interface QuestionItemProps {
  question: Question;
}

export function QuestionItem({ question }: QuestionItemProps) {
  const questionTitle = (
    <>
      <Icon name="ellipse" />
      <span>{question.title}</span>
    </>
  );

  const questionContent = (
    <>
      <div className={styles["question-item_meta-info"]}>
        <QuestionMeta rate={question.rate} complexity={question.complexity} />

        <Dropdown
          trigger={
            <button className={styles["question-item__menu-button"]}>
              <Icon name="kebab-menu" />
            </button>
          }
        >
          <QuestionItemMenu questionId={question.id} />
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
