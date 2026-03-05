import { useFilterParams } from "@/shared/hooks/useFilterParams";
import { Button } from "@/shared/ui/Button";

const complexityValues = ["1-3", "4-6", "7-8", "9-10"];

export default function FilterByComplexity() {
  const { selectedValues, toggleMultiple } = useFilterParams({ key: "complexity" });

  return (
    <>
      {complexityValues.map((complexity) => (
        <Button
          key={complexity}
          variant="filter"
          isSelected={selectedValues.includes(complexity)}
          onClick={() => toggleMultiple(complexity)}
        >
          {complexity}
        </Button>
      ))}
    </>
  );
}
