import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    let currValue;

    if (typeof window !== "undefined") {
      currValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    }
    return currValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
