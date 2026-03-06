import type { Question } from "@/entities/question/model/question.types";
import { QuestionMeta } from "@/entities/question/ui/QuestionMeta/QuestionMeta";
import defaultSkills from "@/shared/assets/images/default_skills.svg";
import { Badge } from "@/shared/ui/Badge";
import { Image } from "@/shared/ui/Image/Image";
import SidebarSection from "@/shared/ui/SidebarSection/SidebarSection";

import styles from "./QuestionDetailSidebar.module.css";

interface QuestionDetailSidebarProps {
  question: Question;
}

export function QuestionDetailSidebar({ question }: QuestionDetailSidebarProps) {
  return (
    <aside className={styles["question-detail-sidebar"]}>
      <SidebarSection title="Уровень">
        <QuestionMeta rate={question.rate} complexity={question.complexity} />
      </SidebarSection>

      {question.questionSkills.length > 0 && (
        <SidebarSection title="Навыки" variant="column">
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
        </SidebarSection>
      )}

      {question.keywords.length > 0 && (
        <SidebarSection title="Ключевые слова" variant="column">
          {question.keywords.map((keyword) => (
            <Badge key={keyword} variant="hashtag">
              {keyword}
            </Badge>
          ))}
        </SidebarSection>
      )}
    </aside>
  );
}
