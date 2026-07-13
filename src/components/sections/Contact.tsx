import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, Newspaper } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { profile } from "@/data/portfolio";

function CopyableRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard may be unavailable — silently ignore */
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 px-4 py-3">
      <div className="flex items-center gap-3 overflow-hidden">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-900 text-primary dark:text-secondary">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
          <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-100">{value}</p>
        </div>
      </div>
      <button
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors"
      >
        {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
      </button>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend is wired up yet — this opens the visitor's email client pre-filled.
    // TODO: replace with a real form handler (e.g. Formspree, EmailJS, or your own API route).
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, a project, or just want to talk data? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="space-y-3">
                <CopyableRow icon={<Mail size={16} />} label="Email" value={profile.email} />
                <CopyableRow icon={<Phone size={16} />} label="Phone" value={profile.phone} />
                <CopyableRow icon={<MapPin size={16} />} label="Location" value={profile.location} />
              </div>

              <div className="flex gap-3">
                <a
                  href={profile.github}
                  target="_self"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl glass py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_self"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl glass py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
              </div>

              <div className="rounded-2xl glass p-5">
                <div className="flex items-center gap-2 text-accent">
                  <Newspaper size={16} />
                  <p className="font-display text-sm font-semibold uppercase tracking-wide">
                    From the blog
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {/* TODO: connect a real blog (Hashnode, Dev.to, or MDX) and list posts here. */}
                  Writing about data analysis and AI is next on my list — this space will link to
                  those posts once published.
                </p>
              </div>

              <div className="mt-auto rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-5 text-center text-xs text-slate-400">
                {/* TODO: embed a real GitHub contribution graph, e.g. via github-readme-stats */}
                GitHub contribution graph — coming soon
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-3xl glass p-6 sm:p-8 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-primary"
                    placeholder="Tell me a bit about the opportunity or project…"
                  />
                </div>
              </div>
              <Button type="submit" className="mt-6 w-full sm:w-auto" icon={<Send size={15} />}>
                Send Message
              </Button>
              <p className="mt-3 text-xs text-slate-400">
                Opens your email client with this message pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
