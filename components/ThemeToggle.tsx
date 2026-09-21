"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Avoid hydration mismatch without setting state from an effect.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  // Determine current active theme variant safely
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-5 w-5 text-foreground transition-all scale-100 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-all scale-100 rotate-0" />
      )}
    </button>
  );
}