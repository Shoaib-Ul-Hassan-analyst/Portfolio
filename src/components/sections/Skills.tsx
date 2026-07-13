import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  Sparkles,
  BrainCircuit,
  Smartphone,
  Globe,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { useInView } from "@/hooks/useInView";
import { skillCategories } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Code2,
  BarChart3,
  Sparkles,
  BrainCircuit,
  Smartphone,
  Globe,
  Wrench,
};

function SkillBar({ name, level, active, delay }: { name: string; level: number; active: boolean; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700/60">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: active ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index }: { category: (typeof skillCategories)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Icon = iconMap[category.icon] ?? Code2;

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div
        ref={ref}
        className="group relative h-full rounded-2xl glass p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
      >
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary dark:text-secondary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon size={20} />
          </div>
          <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
            {category.label}
          </h3>
        </div>
        <div className="space-y-4">
          {category.skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} active={inView} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  const [filter, setFilter] = useState<string>("all");
  const filtered =
    filter === "all" ? skillCategories : skillCategories.filter((c) => c.id === filter);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-slate-50/60 dark:bg-slate-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for daily"
          description="Categorized by discipline — from core programming to data analysis and the AI workflows I'm building around them."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-gradient-to-r from-primary to-secondary text-white"
                : "glass text-slate-600 dark:text-slate-300"
            }`}
          >
            All
          </button>
          {skillCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === c.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "glass text-slate-600 dark:text-slate-300"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
