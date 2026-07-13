import { useMemo, useState } from "react";
import { Search, ExternalLink, CheckCircle2, AlertTriangle, TrendingUp, PlusCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-slate-50/60 dark:bg-slate-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Real projects, built and shipped — with the tech stack, the thinking, and the results behind each one."
        />

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech…"
              aria-label="Search projects"
              className="w-full rounded-full glass py-2.5 pl-10 pr-4 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...allTags].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "glass text-slate-600 dark:text-slate-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-slate-500 dark:text-slate-400">
            No projects match “{query}”. Try a different search term.
          </p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {project.featured && (
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 dark:bg-slate-900/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary shadow">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/8 dark:bg-secondary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary dark:text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-3 font-display text-xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-slate-200 dark:border-slate-700 px-2 py-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 space-y-3 border-t border-slate-200/70 dark:border-slate-700/70 pt-5 text-sm">
                      <div>
                        <p className="mb-1.5 flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          <CheckCircle2 size={13} className="text-emerald-500" /> Features
                        </p>
                        <ul className="ml-0.5 list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                          {project.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-1 flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          <AlertTriangle size={13} className="text-amber-500" /> Challenge
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">{project.challenges}</p>
                      </div>
                      <div>
                        <p className="mb-1 flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          <TrendingUp size={13} className="text-secondary" /> Result
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">{project.results}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_self"
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/70 dark:border-slate-600/70 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary dark:hover:text-secondary transition-colors"
                        >
                          <FaGithub size={15} /> Code
                        </a>
                      )}
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_self"
                          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-white"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-400">
                          Demo coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Invitation card so the grid never feels empty while the project list grows */}
            <Reveal delay={filtered.length * 0.08}>
              <a
                href="https://github.com/ranashoaib3793"
                target="_self"
                className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-10 text-center text-slate-500 dark:text-slate-400 transition-colors hover:border-primary hover:text-primary dark:hover:text-secondary"
              >
                <PlusCircle size={28} />
                <p className="font-display text-base font-semibold">More projects on the way</p>
                <p className="max-w-xs text-sm">
                  See everything else I'm building on GitHub.
                </p>
              </a>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
