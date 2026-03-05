import type { Question } from "@/entities/question/model/question.types";
import { QuestionMeta } from "@/entities/question/ui/QuestionMeta/QuestionMeta";
import defaultSkills from "@/shared/assets/images/default_skills.svg";
import { Badge } from "@/shared/ui/Badge";
import { Image } from "@/shared/ui/Image/Image";

import styles from "./QuestionDetailSidebar.module.css";

interface QuestionDetailSidebarProps {
  question: Question;
}

export function QuestionDetailSidebar({ question }: QuestionDetailSidebarProps) {
  return (
    <aside className={styles["question-detail-sidebar"]}>
      <p className={styles["question-detail-sidebar__label"]}>Уровень:</p>
      <QuestionMeta rate={question.rate} complexity={question.complexity} />

      {question.questionSkills.length > 0 && (
        <div className={styles["question-detail-sidebar__section"]}>
          <p className={styles["question-detail-sidebar__label"]}>Навыки:</p>
          <div className={styles["question-detail-sidebar__list"]}>
            {question.questionSkills.map((skill) => (
              <div key={skill.id} className={styles["question-detail-sidebar__skill"]}>
                <Image
                  imageSrc={skill.imageSrc ?? defaultSkills}
                  fallbackSrc={defaultSkills}
                  width={20}
                  height={20}
                />
                {skill.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {question.keywords.length > 0 && (
        <div className={styles["question-detail-sidebar__section"]}>
          <p className={styles["question-detail-sidebar__label"]}>Ключевые слова:</p>
          <div className={styles["question-detail-sidebar__keywords"]}>
            {question.keywords.map((keyword) => (
              <Badge key={keyword} variant="hashtag">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
