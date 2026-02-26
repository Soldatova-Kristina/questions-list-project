type ParamValue = string | number | boolean | string[] | number[] | boolean[] | undefined | null;

export function normalizeParams(
  params: Record<string, ParamValue> | object,
): Record<string, string | number> {
  const result: Record<string, string | number> = {};

  for (const [key, value] of Object.entries(params as Record<string, ParamValue>)) {
    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      if (value.length > 0) result[key] = value.join(",");
    } else if (typeof value === "boolean") {
      result[key] = value ? 1 : 0;
    } else {
      result[key] = value;
    }
  }

  return result;
}
