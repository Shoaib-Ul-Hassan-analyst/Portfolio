import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-[0.2em] text-primary dark:text-secondary dark:border-secondary/25 dark:bg-secondary/10">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
