import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Command, Download } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";
import type { Theme } from "@/hooks/useTheme";

type Props = {
  theme: Theme;
  toggleTheme: () => void;
  onOpenPalette: () => void;
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Header({ theme, toggleTheme, onOpenPalette }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`section-container flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-slate-900/5 py-2.5 px-5" : "px-5 py-3"
        }`}
      >
        <button
          onClick={() => handleNav("home")}
          className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          aria-label="Go to home"
        >
          <span className="text-gradient">{profile.initials}</span>
          <span className="hidden sm:inline"> · {profile.name}</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                active === link.id
                  ? "text-primary dark:text-secondary"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary"
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary/10 dark:bg-secondary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="hidden md:flex items-center gap-1.5 rounded-full border border-slate-300/70 dark:border-slate-600/70 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:border-primary/50 transition-colors"
            aria-label="Open command palette"
          >
            <Command size={13} /> <span>⌘K</span>
          </button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href={profile.resumeUrl}
            target="_self"
            download
            className="hidden md:flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-md"
          >
            <Download size={14} /> Resume
          </a>
          <button
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden section-container overflow-hidden"
            aria-label="Mobile"
          >
            <div className="glass mt-2 rounded-2xl p-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
                    active === link.id
                      ? "bg-primary/10 text-primary dark:text-secondary"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={profile.resumeUrl}
                target="_self"
                download
                className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-white"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
