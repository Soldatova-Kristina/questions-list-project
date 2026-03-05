import { useGetSpecializationQuery } from "@/entities/specialization/api/specializationApi";
import { useFilterParams } from "@/shared/hooks/useFilterParams";
import { useVisibleContent } from "@/shared/hooks/useVisibleContent";
import { Button } from "@/shared/ui/Button";

export default function FilterBySpecialization() {
  const { data } = useGetSpecializationQuery({ page: 1, limit: 10 });
  const { visibleData, hasMore, showAll, toggle } = useVisibleContent(data?.data ?? [], 5);

  const { selectedId, toggleSingle } = useFilterParams({
    key: "specializationId",
    dependentKeys: ["skills"],
  });

  if (!data?.data.length) return null;

  return (
    <>
      {visibleData.map((spec) => (
        <Button
          key={spec.id}
          variant="filter"
          isSelected={selectedId === String(spec.id)}
          onClick={() => toggleSingle(spec.id)}
        >
          {spec.title}
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
