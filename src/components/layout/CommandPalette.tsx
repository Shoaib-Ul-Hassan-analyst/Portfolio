import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, profile } from "@/data/portfolio";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Command = {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  action: () => void;
};

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState("");

  const commands: Command[] = useMemo(
    () => [
      ...navLinks.map((link) => ({
        id: `nav-${link.id}`,
        label: `Go to ${link.label}`,
        hint: "Section",
        icon: <ArrowRight size={15} />,
        action: () => {
          document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
        },
      })),
      {
        id: "resume",
        label: "Download resume",
        hint: "Action",
        icon: <Download size={15} />,
        action: () => {
          window.location.href = profile.resumeUrl;
        },
      },
      {
        id: "github",
        label: "Open GitHub profile",
        hint: "Link",
        icon: <FaGithub size={15} />,
        action: () => {
          window.location.href = profile.github;
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn profile",
        hint: "Link",
        icon: <FaLinkedin size={15} />,
        action: () => {
          window.location.href = profile.linkedin;
        },
      },
      {
        id: "email",
        label: `Email ${profile.email}`,
        hint: "Action",
        icon: <Mail size={15} />,
        action: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
    ],
    []
  );

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-slate-950/50 backdrop-blur-sm px-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl glass shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-700/60 px-4 py-3">
              <Search size={16} className="text-slate-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or action…"
                className="w-full bg-transparent text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
              />
              <kbd className="hidden sm:inline rounded border border-slate-300 dark:border-slate-600 px-1.5 py-0.5 text-[10px] text-slate-400">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-slate-400">No matches found.</p>
              )}
              {filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    c.action();
                    onClose();
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    {c.icon}
                    {c.label}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-slate-400">
                    {c.hint}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
