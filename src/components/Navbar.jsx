import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { LeafIcon } from './LeafMotif';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-parchment-100/90 dark:bg-night-bg/90 backdrop-blur-md shadow-sm border-b border-forest-700/10 dark:border-night-border py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-forest-800 dark:text-parchment-100 font-serif font-semibold text-lg tracking-tight hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors"
          aria-label="Suhana Khan Portfolio Home"
        >
          <span className="p-1 rounded bg-forest-700/10 dark:bg-forest-400/10 text-forest-700 dark:text-forest-200 group-hover:rotate-12 transition-transform duration-300">
            <LeafIcon className="w-4 h-4" />
          </span>
          <span className="tracking-wide">Suhana Khan</span>
          <span className="text-xs uppercase tracking-widest font-sans font-medium px-2 py-0.5 rounded-full bg-forest-700/5 dark:bg-night-elevated text-forest-700 dark:text-forest-200 border border-forest-700/15 dark:border-night-border hidden sm:inline-block">
            AI & ML
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forest-900/80 dark:text-night-text">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ochre-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-parchment-200/80 dark:bg-night-elevated text-forest-800 dark:text-ochre-300 hover:bg-parchment-300 dark:hover:bg-night-border transition-all duration-200 border border-forest-700/15 dark:border-night-border"
            aria-label={darkMode ? "Switch to light parchment mode" : "Switch to dark night mode"}
            title={darkMode ? "Switch to light parchment mode" : "Switch to dark night mode"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile Menu & Theme Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-parchment-200/80 dark:bg-night-elevated text-forest-800 dark:text-ochre-300 border border-forest-700/15 dark:border-night-border"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-parchment-200/80 dark:bg-night-elevated text-forest-800 dark:text-night-text border border-forest-700/15 dark:border-night-border"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-parchment-100/98 dark:bg-night-card/98 border-b border-forest-700/15 dark:border-night-border px-6 py-5 shadow-lg backdrop-blur-md">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-forest-900 dark:text-night-text hover:text-ochre-600 dark:hover:text-ochre-400 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
