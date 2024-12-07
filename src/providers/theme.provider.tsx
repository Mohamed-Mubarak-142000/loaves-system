import { createContext, useContext, useState, useEffect } from "react";
type TTheme = "light" | "dark" | "system";

type TThemeProiderProps = {
  children: React.ReactNode;
  defaultTheme?: TTheme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: TThemeProiderProps) {
  const [theme, setTheme] = useState<TTheme>(
    () => (localStorage.getItem(storageKey) as TTheme) || defaultTheme
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: TTheme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
