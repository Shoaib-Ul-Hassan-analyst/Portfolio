import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back it up"
          description="Formal certificates that support my hands-on skills."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.08}>
              <div className="group h-full rounded-2xl glass p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Award size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900 dark:text-white">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-slate-400">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_self"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary dark:text-secondary"
                  >
                    View credential <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
