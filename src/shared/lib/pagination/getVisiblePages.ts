export function getVisiblePages(
  currentPage: number,
  totalPages: number,
  sublingCount: number = 2,
): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const firstPage = 1;
  const lastPage = totalPages;

  const leftSiblingIndex = Math.max(currentPage - sublingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + sublingCount, totalPages);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = Array.from({ length: 5 }, (_, i) => i + 1);
    return [...leftRange, "ellipsis", lastPage];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = Array.from({ length: 6 }, (_, i) => totalPages - 5 + i);
    return [firstPage, "ellipsis", ...rightRange];
  }

  if (showLeftEllipsis && showRightEllipsis) {
    const middleRangeLength = rightSiblingIndex - leftSiblingIndex + 1;
    const middleRange = Array.from({ length: middleRangeLength }, (_, i) => leftSiblingIndex + i);
    return [firstPage, "ellipsis", ...middleRange, "ellipsis", lastPage];
  }

  return Array.from({ length: totalPages }, (_, i) => i + 1);
}
