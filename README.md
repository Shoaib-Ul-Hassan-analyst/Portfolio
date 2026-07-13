# Shoaib Ul Hassan — Portfolio

A premium, animated developer/data-analyst portfolio built with **React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion**.

Sections: Home · About · Skills · Experience · Projects · Certifications · Education · Services · Testimonials · Contact.

---

## 1. Getting started (VS Code)

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The page hot-reloads as you edit files.

Other scripts:

```bash
npm run build     # Type-checks and builds the production bundle into /dist
npm run preview   # Serves the production build locally, for a final check
npm run lint      # Runs oxlint
```

---

## 2. Project structure

```
├── public/
│   ├── images/            # profile photo + project images
│   ├── resume/             # put your resume PDF here (see below)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, ScrollProgress, CustomCursor,
│   │   │                   # LoadingScreen, CommandPalette, BackToTop, ThemeToggle
│   │   ├── sections/       # One component per page section (Hero, About, Skills, …)
│   │   └── ui/             # Reusable primitives (Button, SectionHeading, Reveal)
│   ├── data/
│   │   └── portfolio.ts    # ALL your content lives here — edit this file first
│   ├── hooks/               # useTheme, useCountUp, useTypewriter, useInView, useActiveSection
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            # Tailwind v4 theme tokens (colors, fonts, animations)
├── index.html                # SEO meta tags, Open Graph, Twitter Card, JSON-LD schema
├── vercel.json
└── package.json
```

---

## 3. Updating your content

Everything text-based (name, bio, skills, projects, certifications, education, services, contact info)
lives in **`src/data/portfolio.ts`**. Open that file and search for `TODO` — every placeholder
that couldn't be filled from your CV is clearly marked there, for example:

- Institute/university name for your degree
- Certification issuers & dates
- Additional projects (the file is structured so you can copy the existing
  project object and add as many as you like — search/filtering already supports it)
- Work experience / internships (the section shows an honest "currently looking"
  state until you add real entries)

**Never replace a `TODO` with an invented achievement** — leave it until you have the real detail.

### Add your resume
Drop your PDF into `public/resume/` and name it exactly:
```
Shoaib-Ul-Hassan-Resume.pdf
```
All "Download Resume" buttons already point to `/resume/Shoaib-Ul-Hassan-Resume.pdf`.

### Replace your profile photo
Swap `public/images/profile.jpg` with a new image (same filename), or update
`profile.avatar` in `src/data/portfolio.ts` to point at a new path.

### Add project screenshots
Replace `public/images/project-women-safety.svg` with a real screenshot, and update
the `image` field on that project in `portfolio.ts`. New projects can use any image
you place in `public/images/`.

---

## 4. Design system

Defined in `src/index.css` under the `@theme` block:

| Token | Value |
|---|---|
| `--color-primary` | `#2563EB` |
| `--color-secondary` | `#06B6D4` |
| `--color-accent` | `#8B5CF6` |
| `--color-bg-light` | `#FAFAFA` |
| `--color-bg-dark` | `#0F172A` |
| Display font | Poppins |
| Body font | Inter |
| Mono/accent font | JetBrains Mono |

Dark mode is class-based (toggled on `<html>`), persisted to `localStorage`, and
defaults to the visitor's OS preference on first visit.

---

## 5. Behavior notes

- **Navigation never opens a new tab.** All in-page nav, the résumé link, GitHub,
  LinkedIn and project buttons use `target="_self"` so everything stays in the
  same tab, as requested.
- The **contact form** currently opens the visitor's email client with a pre-filled
  message (no backend required to ship). To collect submissions directly, wire it
  to a service like **Formspree** or **EmailJS** — the handler is isolated in
  `src/components/sections/Contact.tsx` (`handleSubmit`), marked with a `TODO`.
- **Command palette**: press `Cmd/Ctrl + K` anywhere to jump to a section or action.

---

## 6. SEO

Already wired up in `index.html` and `public/`:
- Meta title & description, keywords
- Open Graph + Twitter Card tags
- JSON-LD `Person` schema
- `robots.txt` + `sitemap.xml`
- Favicon

Before you deploy, update the placeholder domain (`https://shoaibulhassan.dev`) in
`index.html`, `public/robots.txt` and `public/sitemap.xml` to your real Vercel URL
or custom domain.

---

## 7. Deploying to Vercel

**Option A — via GitHub (recommended)**
1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial premium portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Leave defaults (`npm run build`, output `dist`) and click **Deploy**.

**Option B — via Vercel CLI**
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # subsequent production deploys
```

After deploying, update the canonical URL references mentioned in section 6.

---

## 8. Accessibility & performance checklist

- Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- Visible keyboard focus rings on every interactive element
- `prefers-reduced-motion` respected — animations shorten automatically
- Images use `loading="lazy"` where appropriate and descriptive `alt` text
- Color contrast checked against both light and dark backgrounds

Run a Lighthouse audit after your first deploy (Chrome DevTools → Lighthouse) to
confirm scores in your environment, since results vary by hosting and network.
