import { useState } from "react";

const useDarkToggle = (defaultTheme: string = "light") => {
  const [theme, setTheme] = useState(defaultTheme);

  function toggleTheme(arg: string) {
    const root = window.document.documentElement;
    root.classList.remove(theme);
    root.classList.add(arg);
    // localStorage.setItem('theme', arg)
    setTheme(arg);
  }

  return [theme, toggleTheme] as const;
};

export default useDarkToggle;
