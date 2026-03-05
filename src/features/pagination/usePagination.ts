import { useSearchParams } from "react-router-dom";

export function usePagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const setPage = (page: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(page));
      return next;
    });
  };

  return { currentPage, setPage, searchParams };
}
