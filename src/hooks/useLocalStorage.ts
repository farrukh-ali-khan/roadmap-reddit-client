// src/hooks/useLocalStorage.ts
import { useState, useEffect } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        try {
          setValue(JSON.parse(storedValue));
        } catch (error) {
          console.error("Error parsing localStorage value:", error);
        }
      }
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
