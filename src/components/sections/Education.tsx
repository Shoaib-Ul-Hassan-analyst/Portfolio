import { GraduationCap, Languages } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { education } from "@/data/portfolio";

const languages = ["English", "Urdu"];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-slate-50/60 dark:bg-slate-900/40">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          {education.map((ed, i) => (
            <Reveal key={ed.id} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl glass p-6 shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary dark:text-secondary">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary dark:text-secondary">
                    {ed.duration}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {ed.degree}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{ed.school}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {ed.details}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-4 rounded-2xl glass p-6 shadow-sm">
              <div className="flex items-center gap-2 text-accent">
                <Languages size={20} />
                <p className="font-display text-sm font-semibold uppercase tracking-wide">Languages</p>
              </div>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="flex items-center justify-between rounded-lg bg-slate-100/70 dark:bg-slate-800/60 px-3 py-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
