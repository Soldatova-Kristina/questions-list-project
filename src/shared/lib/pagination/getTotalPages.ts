export function getTotalPages(total: number, limit: number): number {
  if (total === 0 || limit === 0) return 0;
  return Math.ceil(total / limit);
}
