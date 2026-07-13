import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, profile, socials } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Github: <FaGithub size={17} />,
  Linkedin: <FaLinkedin size={17} />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/60">
      <div className="section-container py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-gradient">{profile.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.roles.slice(0, 3).join(" · ")}. Based in {profile.location}.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_self"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {iconMap[s.icon]}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              target="_self"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:text-secondary transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Quick Links
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Get In Touch
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
          </ul>
          <a
            href="#contact"
            target="_self"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary dark:text-secondary"
          >
            Start a conversation <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200/70 dark:border-slate-800">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-slate-500 dark:text-slate-500">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
