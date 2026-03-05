import { useSearchParams } from "react-router-dom";

import { useGetSkillQuery } from "@/entities/skill/api/skillApi";
import defaultSkills from "@/shared/assets/images/default_skills.svg";
import { useFilterParams } from "@/shared/hooks/useFilterParams";
import { useVisibleContent } from "@/shared/hooks/useVisibleContent";
import { Button } from "@/shared/ui/Button";
import { Image } from "@/shared/ui/Image/Image";

export default function FilterBySkills() {
  const [searchParams] = useSearchParams();
  const specId = searchParams.get("specializationId");

  const { data } = useGetSkillQuery({
    page: 1,
    limit: 10,
    specializations: specId ? [Number(specId)] : undefined,
  });

  const { visibleData, hasMore, showAll, toggle } = useVisibleContent(data?.data ?? [], 5);
  const { selectedValues, toggleMultiple } = useFilterParams({ key: "skills" });

  if (!data?.data.length) return null;

  return (
    <>
      {visibleData.map((skill) => (
        <Button
          key={skill.id}
          variant="filter"
          isSelected={selectedValues.includes(String(skill.id))}
          onClick={() => toggleMultiple(skill.id)}
        >
          <Image
            imageSrc={skill.imageSrc ?? defaultSkills}
            fallbackSrc={defaultSkills}
            width={20}
            height={20}
          />
          {skill.title}
        </Button>
      ))}
      {hasMore && (
        <Button variant="text" onClick={toggle}>
          {showAll ? "Свернуть" : "Посмотреть все"}
        </Button>
      )}
    </>
  );
}
