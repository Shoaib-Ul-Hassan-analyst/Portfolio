import { useEffect, useState } from "react";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import CommandPalette from "@/components/layout/CommandPalette";
import { useTheme } from "@/hooks/useTheme";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Header theme={theme} toggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
