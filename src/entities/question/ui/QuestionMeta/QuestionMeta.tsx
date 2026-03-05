import { Badge } from "@/shared/ui/Badge";

import styles from "./QuestionMeta.module.css";

interface QuestionMetaProps {
  rate: number;
  complexity: number;
}

export function QuestionMeta({ rate, complexity }: QuestionMetaProps) {
  return (
    <div className={styles["question-meta"]}>
      <div className={styles["question-meta__item"]}>
        Рейтинг: <Badge variant="rating">{rate}</Badge>
      </div>
      <div className={styles["question-meta__item"]}>
        Сложность: <Badge variant="complexity">{complexity}</Badge>
      </div>
    </div>
  );
}
