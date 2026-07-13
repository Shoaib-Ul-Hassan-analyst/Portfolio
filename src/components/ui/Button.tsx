import { type ReactNode, type MouseEvent, useRef } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit";
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-display tracking-wide transition-colors duration-300 overflow-hidden select-none";

const variants: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.55)] hover:shadow-[0_10px_36px_-6px_rgba(37,99,235,0.65)]",
  secondary:
    "glass text-slate-800 dark:text-slate-100 border border-slate-200/70 dark:border-slate-700/70 hover:border-primary/50",
  ghost:
    "text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-secondary",
};

/** A button with a subtle magnetic pull toward the cursor — used sparingly for primary CTAs. */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  type = "button",
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || variant !== "primary") return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.28}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
    </>
  );

  const sharedProps = {
    className: `${base} ${variants[variant]} ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { transition: "transform 0.15s ease-out" },
  };

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <motion.a
        ref={ref}
        href={href}
        // Per project requirement: never open in a new tab, always same-tab navigation.
        target="_self"
        rel={isExternal ? "noopener" : undefined}
        whileTap={{ scale: 0.96 }}
        {...sharedProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref} type={type} onClick={onClick} whileTap={{ scale: 0.96 }} {...sharedProps}>
      {content}
    </motion.button>
  );
}
