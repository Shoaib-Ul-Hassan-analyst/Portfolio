import { motion } from "framer-motion";
import { Download, FolderGit2, MessageSquare, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, about } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-left">
      <p className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
        {count}
        <span className="text-primary dark:text-secondary">{suffix}</span>
      </p>
      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles, 85, 1500);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* ambient animated background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-secondary/15 blur-3xl animate-pulse-soft" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(100,116,139,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="section-container grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary dark:text-secondary dark:border-secondary/25 dark:bg-secondary/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to internships & entry-level roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white"
          >
            Hi, I'm {profile.name.split(" ")[0]} —<br />
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 bg-primary dark:bg-secondary animate-blink" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href={profile.resumeUrl} icon={<Download size={16} />}>
              Download Resume
            </Button>
            <Button
              variant="secondary"
              icon={<FolderGit2 size={16} />}
              onClick={() => scrollTo("projects")}
            >
              View Projects
            </Button>
            <Button variant="ghost" icon={<MessageSquare size={16} />} onClick={() => scrollTo("contact")}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex items-center gap-3"
          >
            <a
              href={profile.github}
              target="_self"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:text-secondary transition-colors"
            >
              <FaGithub size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_self"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:text-secondary transition-colors"
            >
              <FaLinkedin size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-4 gap-4 border-t border-slate-200/70 dark:border-slate-800 pt-6"
          >
            {about.stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
      >
        <ChevronDown size={26} />
      </motion.button>
    </section>
  );
}
