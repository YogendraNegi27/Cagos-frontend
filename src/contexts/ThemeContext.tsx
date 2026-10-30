import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => { /* No provider is mounted for the default context. */ },
  setTheme: () => { /* No provider is mounted for the default context. */ },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem('cagos-theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    // Also toggle the `.dark` class so Tailwind v4's dark: variant works.
    // Marketing pages use both: data-theme drives marketing-specific overrides
    // in styles.css, .dark drives shared-ui semantic tokens (Logo, etc.).
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("cagos-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
