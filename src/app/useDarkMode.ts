// useDarkMode.ts
import { useState } from "react";

export function useDarkMode(): [boolean, () => void] {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return [darkMode, toggleDarkMode];
}
