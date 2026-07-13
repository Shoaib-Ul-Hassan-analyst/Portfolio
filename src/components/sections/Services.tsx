import {
  BarChart3,
  LayoutDashboard,
  Database,
  Bot,
  Sparkles,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  LayoutDashboard,
  Database,
  Bot,
  Sparkles,
  Smartphone,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="Where I add the most value — for teams, founders, or fellow students who need a hand."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <Reveal key={service.id} delay={(i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary dark:text-secondary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon size={21} />
                  </div>
                  <h3 className="relative mt-4 font-display text-base font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
