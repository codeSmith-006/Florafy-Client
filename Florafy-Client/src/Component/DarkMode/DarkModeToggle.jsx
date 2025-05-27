import { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const ModeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.theme = 'dark';
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <DarkModeToggle
      onChange={setIsDark}
      checked={isDark}
      size={60}
    />
  );
};

export default ModeToggle;
