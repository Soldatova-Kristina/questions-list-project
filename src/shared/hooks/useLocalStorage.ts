import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const raw = window.localStorage.getItem(key);

    if (raw === null) return initialValue;

    try {
      return JSON.parse(raw) as T;
    } catch {
      return raw as T;
    }
  });

  const saveValue = (next: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const resolved = typeof next === "function" ? (next as (prev: T) => T)(prev) : next;

      try {
        window.localStorage.setItem(key, JSON.stringify(resolved));
      } catch (error) {
        console.error(`Error saving to localStorage (key: ${key}):`, error);
      }

      return resolved;
    });
  };

  return [value, saveValue] as const;
}
