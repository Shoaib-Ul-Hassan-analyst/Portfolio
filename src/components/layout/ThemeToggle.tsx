import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import type { Theme } from "@/hooks/useTheme";

type Props = {
  theme: Theme;
  toggleTheme: () => void;
};

export default function ThemeToggle({ theme, toggleTheme }: Props) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="relative flex h-9 w-16 items-center rounded-full border border-slate-300/70 dark:border-slate-600/70 bg-slate-100 dark:bg-slate-800 px-1 transition-colors"
    >
      <motion.span
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-sm"
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? <Moon size={14} className="text-secondary" /> : <Sun size={14} className="text-primary" />}
      </motion.span>
    </button>
  );
}
