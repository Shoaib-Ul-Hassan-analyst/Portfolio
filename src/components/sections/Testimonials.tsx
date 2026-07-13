import { Quote, MessagesSquare } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-slate-50/60 dark:bg-slate-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say"
          description="Real feedback from collaborators and mentors — added here as it comes in."
        />

        {testimonials.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl glass p-6 shadow-sm">
                  <Quote size={22} className="text-primary/40 dark:text-secondary/40" />
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    “{t.quote}”
                  </p>
                  <p className="mt-4 font-display text-sm font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-xl rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-10 text-center text-slate-500 dark:text-slate-400">
              <MessagesSquare size={26} className="mx-auto text-slate-400" />
              <p className="mt-4 font-display text-base font-semibold text-slate-600 dark:text-slate-300">
                Testimonials coming soon
              </p>
              <p className="mt-2 text-sm">
                {/* TODO: replace with real testimonials from clients, professors or teammates */}
                I'm early in my journey — this space will hold genuine feedback from people I've
                worked with as those collaborations happen.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
