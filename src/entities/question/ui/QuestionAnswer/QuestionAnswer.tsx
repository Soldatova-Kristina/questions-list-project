import { ExpandableContent } from "@/shared/ui/ExpandableContent/ExpandableContent";

import styles from "./QuestionAnswer.module.css";
interface QuestionAnswerProps {
  content?: string | null;
  emptyMessage?: string;
  className?: string;
  expandable?: boolean;
  maxHeight?: number;
}

export function QuestionAnswer({
  content,
  emptyMessage = "Ответ отсутствует",
  expandable = false,
  maxHeight = 400,
}: QuestionAnswerProps) {
  if (!content) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  const contentElement = (
    <div
      className={styles["question-card__answer"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );

  if (expandable) {
    return <ExpandableContent maxHeight={maxHeight}>{contentElement}</ExpandableContent>;
  }

  return contentElement;
}
