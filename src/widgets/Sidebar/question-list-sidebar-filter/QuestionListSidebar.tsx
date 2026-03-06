import FilterByComplexity from "@/features/filter-by-complexity/FilterByComplexity";
import FilterByRating from "@/features/filter-by-rating/FilterByRating";
import FilterBySkills from "@/features/filter-by-skills/FilterBySkills";
import FilterBySpecialization from "@/features/filter-by-specialization/FilterBySpecialization";
import FilterByStatus from "@/features/filter-by-status/FilterByStatus";
import SearchByKeywords from "@/features/search-by-keywords/ui/SearchByKeywords";
import SidebarSection from "@/shared/ui/SidebarSection/SidebarSection";

import styles from "./QuestionListSidebar.module.css";

export default function QuestionListSidebar() {
  return (
    <div className={styles["question-list-sidebar"]}>
      <SearchByKeywords />
      <SidebarSection variant="column" title="Специализация">
        <FilterBySpecialization />
      </SidebarSection>
      <SidebarSection title="Навыки">
        <FilterBySkills />
      </SidebarSection>
      <SidebarSection title="Сложность">
        <FilterByComplexity />
      </SidebarSection>
      <SidebarSection title="Рейтинг">
        <FilterByRating />
      </SidebarSection>
      <SidebarSection title="Статус">
        <FilterByStatus />
      </SidebarSection>
    </div>
  );
}
