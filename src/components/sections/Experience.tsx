import { Briefcase, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied what I've learned"
          description="A timeline of professional experience — updated as new roles and internships happen."
        />

        {experience.length > 0 ? (
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2" />
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1} className="relative mb-10 pl-12 sm:pl-0">
                <div className="sm:grid sm:grid-cols-2 sm:gap-10">
                  <div className={i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"}>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary dark:text-secondary">
                      {item.duration}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                  </div>
                </div>
                <span className="absolute left-4 top-1.5 -translate-x-1/2 sm:left-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl glass p-10 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary dark:text-secondary">
                <Briefcase size={24} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-900 dark:text-white">
                Building my professional experience
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                I haven't held a formal internship or job role yet — I'm currently focused on
                sharpening my data analysis, Python and AI skills through projects and
                certifications, and I'm actively looking for internship and entry-level
                opportunities where I can contribute and keep learning.
              </p>
              <div className="mt-6 flex justify-center">
                <Button variant="secondary" icon={<Rocket size={15} />} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Let's talk opportunities
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
