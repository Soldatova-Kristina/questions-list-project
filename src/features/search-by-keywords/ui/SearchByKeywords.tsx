import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useDebounce } from "@/shared/hooks/useDebounce";
import { Input } from "@/shared/ui/Input";

export default function SearchByKeywords() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("title") ?? "");
  const debouncedValue = useDebounce(inputValue, 400);

  useEffect(() => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        const prevTitle = prev.get("title") ?? "";

        if (debouncedValue) {
          next.set("title", debouncedValue);
        } else {
          next.delete("title");
        }

        if (prevTitle !== debouncedValue) {
          next.delete("page");
        }

        return next;
      },
      { replace: true },
    );
  }, [debouncedValue]);

  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Введите запрос"
    />
  );
}
