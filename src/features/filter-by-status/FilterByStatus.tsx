import { useFilterParams } from "@/shared/hooks/useFilterParams";
import { Button } from "@/shared/ui/Button";

const statusValues = ["Изученные", "Не изученные", "Все"];

export default function FilterByStatus() {
  const { selectedValues, toggleMultiple } = useFilterParams({ key: "status" });

  return (
    <>
      {statusValues.map((status) => (
        <Button
          key={status}
          variant="filter"
          isSelected={selectedValues.includes(status)}
          onClick={() => toggleMultiple(status)}
        >
          {status}
        </Button>
      ))}
    </>
  );
}
