import { useFilterParams } from "@/shared/hooks/useFilterParams";
import { Button } from "@/shared/ui/Button";

const ratingValues = ["1", "2", "3", "4", "5"];

export default function FilterByRating() {
  const { selectedValues, toggleMultiple } = useFilterParams({ key: "rate" });

  return (
    <>
      {ratingValues.map((rating) => (
        <Button
          key={rating}
          variant="filter"
          isSelected={selectedValues.includes(rating)}
          onClick={() => toggleMultiple(rating)}
        >
          {rating}
        </Button>
      ))}
    </>
  );
}
