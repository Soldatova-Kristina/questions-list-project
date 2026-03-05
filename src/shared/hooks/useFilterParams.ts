import { useSearchParams } from "react-router-dom";

interface UseFilterParamsOptions {
  key: string;
  dependentKeys?: string[];
}

export function useFilterParams({ key, dependentKeys = [] }: UseFilterParamsOptions) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentValue = searchParams.get(key);
  const selectedValues = currentValue?.split(",").filter(Boolean) ?? [];

  const updateParams = (nextValues: string[] | null) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (!nextValues || nextValues.length === 0) {
        params.delete(key);
      } else {
        params.set(key, nextValues.join(","));
      }

      dependentKeys.forEach((k) => params.delete(k));

      return params;
    });
  };

  const toggleSingle = (id: number | string) => {
    const stringId = String(id);
    const next = selectedId === stringId ? null : [stringId];
    updateParams(next);
  };

  const toggleMultiple = (id: number | string) => {
    const stringId = String(id);
    const next = selectedValues.includes(stringId)
      ? selectedValues.filter((v) => v !== stringId)
      : [...selectedValues, stringId];
    updateParams(next);
  };

  const selectedId = currentValue;

  return {
    selectedId,
    selectedValues,
    toggleSingle,
    toggleMultiple,
  };
}
