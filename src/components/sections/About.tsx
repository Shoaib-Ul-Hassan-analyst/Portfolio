import { Target, Compass, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { about, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="The story behind the data"
          description="A quick look at who I am, what I'm working toward, and what keeps me curious."
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl" />
              <div className="overflow-hidden rounded-[1.75rem] border border-white/60 dark:border-slate-700/60 shadow-xl">
                <img
                  src={profile.avatar}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="glass absolute -bottom-6 -right-4 rounded-2xl px-5 py-3 shadow-lg">
                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">Based in</p>
                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  {profile.location}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.05}>
              <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {about.summary}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {about.story}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-primary dark:text-secondary">
                    <Target size={18} />
                    <p className="font-display text-sm font-semibold uppercase tracking-wide">
                      Career Objective
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {about.objective}
                  </p>
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-accent">
                    <Compass size={18} />
                    <p className="font-display text-sm font-semibold uppercase tracking-wide">
                      Currently Exploring
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {about.currentInterests.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Sparkles size={13} className="mt-1 flex-shrink-0 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
