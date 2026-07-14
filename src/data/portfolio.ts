// ============================================================================
// PORTFOLIO CONTENT — single source of truth.
// Everything here was extracted from Shoaib's CV. Anything not present in the
// source material is explicitly marked TODO — fill these in with real info,
// never replace them with invented achievements.
// ============================================================================

export const profile = {
  name: "Shoaib Ul Hassan",
  initials: "SH",
  roles: [
    "Data Analyst",
    "Python Developer",
    "AI/ML Enthusiast",
    "Web Developer",
    "Mobile App Developer",
  ],
  tagline:
    "Computer Science student engineering intelligent data ecosystems — harnessing Python, SQL, and advanced ML to convert raw complexity into clear, consequential decisions.",
  location: "Lahore, Pakistan",
  email: "rana502077@gmail.com",
  phone: "+92 300 8831949",
  github: "https://github.com/ranashoaib3793",
  linkedin: "https://www.linkedin.com/in/shoaib-ul-hassan-79ba06274",
  // TODO: add a public resume PDF at /public/resume/Shoaib-Ul-Hassan-Resume.pdf
  resumeUrl: "/resume/Shoaib-Ul-Hassan-Resume.pdf",
  avatar: "/images/profile.jpg",
};

export const about = {
  summary:
    "I'm a Computer Science student with a strong foundation in data analysis, Python development, and web and mobile application development. I care about solving real problems — whether that means cleaning a messy dataset, shipping a safety-focused mobile app, or writing content that explains a technical idea clearly.",
  story:
    "My interest in technology started with curiosity about how data could tell a story on its own. That curiosity turned into a habit: learning Python for analysis, SQL for structuring information, and increasingly, AI tools and prompt engineering to work faster and smarter. Alongside the technical side, I've always enjoyed creative and content writing, which keeps me equally comfortable explaining an idea as I am building it.",
  objective:
    "My goal is to grow into a data-focused engineering role — one where I can combine data analysis, machine learning and clean software development to build products that make information genuinely useful to the people who need it.",
  currentInterests: [
    "Deepening my machine learning fundamentals",
    "Practical data analysis with Python & SQL",
    "AI-assisted development and prompt engineering",
    "Creative and technical writing",
  ],
  stats: [
    { label: "Years of study", value: 3, suffix: "+" },
    { label: "Certifications", value: 3, suffix: "" },
    { label: "Core skills", value: 9, suffix: "+" },
    { label: "Projects shipped", value: 3, suffix: "+" }, // TODO: update as more projects ship
  ],
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: string; // lucide icon name, resolved in component
  skills: { name: string; level: number }[]; // level 0-100, informal self-rating
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    id: "data-analysis",
    label: "Data Analysis",
    icon: "BarChart3",
    skills: [
      { name: "Data Analysis", level: 90 },
      { name: "SQL Databases", level: 75 },
      // TODO: add tools like Excel, Power BI or Tableau once confirmed
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: "Sparkles",
    skills: [
      { name: "AI Prompt Engineering", level: 80 },
      // TODO: add specific AI tools/frameworks used
    ],
  },
  {
    id: "machine-learning",
    label: "Machine Learning",
    icon: "BrainCircuit",
    skills: [
      // TODO: add specific ML libraries (e.g. scikit-learn, TensorFlow) once confirmed
      { name: "ML Fundamentals (learning)", level: 45 },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Development",
    icon: "Smartphone",
    skills: [
      { name: "Android Studio", level: 70 },
      { name: "Java (Android)", level: 65 },
      { name: "Firebase", level: 68 },
    ],
  },
  {
    id: "web",
    label: "Web Development",
    icon: "Globe",
    skills: [
      { name: "Web Development", level: 70 },
      // TODO: list specific frameworks (React, etc.) once confirmed
    ],
  },
  {
    id: "tools",
    label: "Tools & Other Skills",
    icon: "Wrench",
    skills: [
      { name: "Problem Solving", level: 88 },
      { name: "Content Writing & Blogging", level: 82 },
      { name: "Communication", level: 85 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  tags: string[];
  features: string[];
  challenges: string;
  results: string;
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "women-safety-app",
    title: "Women Safety Application",
    description:
      "A mobile application focused on women's safety, built with real-time location sharing and emergency alert features to help users get quick help in critical situations.",
    image: "/images/project-women-safety.svg",
    tech: ["Android Studio", "Java", "Firebase"],
    tags: ["Mobile", "Android", "Safety"],
    features: [
      "Emergency alert system with one-tap trigger",
      "Real-time location sharing with trusted contacts",
      "User-friendly, distraction-free interface",
      "Firebase-backed real-time data sync",
    ],
    // TODO: add specific technical challenges faced during development
    challenges:
      "Designing an interface that stays simple and fast to use during a stressful, time-critical moment — while keeping location updates reliable in the background.",
    // TODO: add measurable results/impact once available (users, feedback, etc.)
    results:
      "Delivered a working prototype demonstrating real-time alerts and location sharing end-to-end. TODO: add live usage results.",
    github: "https://github.com/Shoaib-Ul-Hassan-analyst",
    demo: undefined, // TODO: add live demo link if available
    featured: true,
  },
  // TODO: Add your next project here. Duplicate the object above and fill in
  // real details — this section is designed to scale to many projects with
  // search & tag filtering built in.
];

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: "internship" | "work" | "education";
  responsibilities: string[];
  achievements: string[];
};

// No formal work experience has been listed yet in the source CV.
// Keep this array honest — add real internships/roles here as they happen.
export const experience: ExperienceItem[] = [
  // TODO: Add internships or work experience here, e.g.:
   {
     id: "internship",
     company: "Optimus Automate",
     role: "Data Analyst Intern",
     duration: "June 2026 – July 2026",
     type: "internship",
     responsibilities: ["Owned end-to-end data workflows—extracting, cleaning, and transforming messy datasets using Python and SQL, while building interactive dashboards to track key business metrics for stakeholders."],
     achievements: ["Automated manual reporting processes (saving 10+ hours weekly) and delivered actionable insights through statistical analysis that directly influenced strategic business decisions."]
   },
];

export const education = [
  {
    id: "bscs",
    school: "University of Education", // TODO: not specified in CV — add institute name
    degree: "Bachelor of Science in Computer Science",
    duration: "2023 – 2027 (Continuing)",
    details:
      "Coursework spans programming fundamentals, data structures, databases and software development, with a growing focus on data analysis and AI.",
  },
];

export const certifications = [
  {
    id: "python-ai",
    name: "Python with AI Certificate",
    issuer: "Udemy", // TODO
    date: "2024", // TODO
    link: undefined,
  },
  {
    id: "data-analyst",
    name: "Data Analyst Certificate",
    issuer: "TEVTA", // TODO
    date: "2026", // TODO
    link: undefined,
  },
  {
    id: "creative-writing",
    name: "Creative Writing Certificate",
    issuer: "DigiSkills", // TODO
    date: "2026", // TODO
    link: undefined,
  },
];

export const services = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    description:
      "Turning raw, messy datasets into clear, structured insight using Python and SQL.",
    icon: "BarChart3",
  },
  {
    id: "dashboards",
    title: "Dashboard Development",
    description:
      "Building dashboards that surface the numbers that matter, fast. TODO: confirm Power BI/BI-tool experience.",
    icon: "LayoutDashboard",
  },
  {
    id: "sql",
    title: "SQL & Databases",
    description:
      "Designing and querying relational databases to keep data organised and accessible.",
    icon: "Database",
  },
  {
    id: "python-automation",
    title: "Python Automation",
    description:
      "Scripting repetitive workflows away with clean, maintainable Python.",
    icon: "Bot",
  },
  {
    id: "ai-solutions",
    title: "AI Prompt Engineering",
    description:
      "Designing prompts and workflows that get reliable, useful output from AI tools.",
    icon: "Sparkles",
  },
  {
    id: "web-mobile-dev",
    title: "Web & Mobile Development",
    description:
      "Building web experiences and Android applications, from idea to working product.",
    icon: "Smartphone",
  },
];

// Testimonials placeholder — intentionally empty until real feedback comes in.
// TODO: replace with real testimonials from clients, professors or teammates.
export const testimonials: {
  id: string;
  name: string;
  role: string;
  quote: string;
}[] = [];

export const socials = [
  { id: "github", label: "GitHub", url: profile.github, icon: "Github" },
  { id: "linkedin", label: "LinkedIn", url: profile.linkedin, icon: "Linkedin" },
  // TODO: add Twitter/X, Instagram, or other profiles if desired
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];
