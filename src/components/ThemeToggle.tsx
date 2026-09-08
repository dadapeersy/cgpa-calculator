"use client";

import { useTheme } from "@wrksz/themes/client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-hover border border-surface-border text-foreground hover:bg-surface-border transition-colors"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
