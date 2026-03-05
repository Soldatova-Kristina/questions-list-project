import { useState } from "react";

export function useVisibleContent<T>(data: T[], limit: number) {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, limit);
  const hasMore = data.length > limit;
  const toggle = () => setShowAll((prev) => !prev);

  return { visibleData, hasMore, showAll, toggle };
}
