import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AmbientBackgroundShapes({ scrollY }) {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.08;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Shape 1: Deep Botanical Green (Upper Left) */}
      <div 
        style={{ transform: `translate3d(0, ${-parallaxOffset * 0.9}px, 0)` }}
        className="absolute -top-[10%] -left-[10%] w-[580px] h-[580px] rounded-[45%_55%_65%_35%/50%_45%_55%_50%] bg-gradient-to-br from-forest-700/[0.07] via-forest-600/[0.04] to-transparent dark:from-emerald-950/25 dark:via-emerald-900/10 dark:to-transparent blur-[95px] animate-blob-1"
      />

      {/* Shape 2: Warm Ochre Gold (Upper Right Behind Hero) */}
      <div 
        style={{ transform: `translate3d(0, ${-parallaxOffset * 1.1}px, 0)` }}
        className="absolute top-[8%] -right-[8%] w-[520px] h-[520px] rounded-[60%_40%_35%_65%/55%_35%_65%_45%] bg-gradient-to-tl from-ochre-400/[0.08] via-ochre-500/[0.04] to-transparent dark:from-amber-950/25 dark:via-ochre-900/10 dark:to-transparent blur-[90px] animate-blob-2"
      />

      {/* Shape 3: Soft Sage & Cream Glow (Midpage Behind Skills/Projects) */}
      <div 
        style={{ transform: `translate3d(0, ${-parallaxOffset * 0.6}px, 0)` }}
        className="absolute top-[48%] -left-[12%] w-[640px] h-[640px] rounded-[40%_60%_50%_50%/45%_55%_45%_55%] bg-gradient-to-tr from-forest-700/[0.05] via-ochre-100/[0.03] to-transparent dark:from-forest-900/15 dark:via-night-elevated/40 dark:to-transparent blur-[110px] animate-blob-3"
      />

      {/* Shape 4: Warm Nocturne Amber/Gold (Lower Page Behind Contact) */}
      <div 
        style={{ transform: `translate3d(0, ${-parallaxOffset * 0.7}px, 0)` }}
        className="absolute -bottom-[10%] right-[10%] w-[560px] h-[560px] rounded-[50%_50%_60%_40%/40%_60%_40%_60%] bg-gradient-to-bl from-ochre-500/[0.07] via-forest-600/[0.03] to-transparent dark:from-amber-950/20 dark:via-emerald-950/15 dark:to-transparent blur-[100px] animate-blob-4"
      />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('suhana-portfolio-theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('suhana-portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('suhana-portfolio-theme', 'light');
    }
  }, [darkMode]);

  // Performant scroll listener for gentle background parallax
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-parchment-100 text-[#1C241E] dark:bg-night-bg dark:text-night-text transition-colors duration-300 relative selection:bg-ochre-200 dark:selection:bg-forest-900 selection:text-forest-900 dark:selection:text-emerald-200">
      
      {/* Archival Paper Grain Filter Overlay */}
      <div className="paper-grain-overlay" aria-hidden="true" />

      {/* Living Ambient Organic Shapes Layer */}
      <AmbientBackgroundShapes scrollY={scrollY} />

      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        <Hero scrollY={scrollY} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
