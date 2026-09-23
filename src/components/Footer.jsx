import React from 'react';
import { LeafIcon } from './LeafMotif';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-forest-700/10 dark:border-night-border relative text-xs text-forest-700/70 dark:text-night-muted">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Identity & Leaf */}
        <div className="flex items-center gap-2">
          <LeafIcon className="w-4 h-4 text-ochre-600 dark:text-ochre-400" />
          <span className="font-serif font-semibold text-forest-900 dark:text-night-text">
            Suhana Khan
          </span>
          <span className="text-forest-700/40 dark:text-night-border">·</span>
          <span>B.Tech CSE (AI & ML)</span>
        </div>

        {/* Center: Notebook colophon */}
        <div className="font-mono text-[11px] text-center">
          Field Notebook Edition · Crafted with React & Tailwind CSS
        </div>

        {/* Right: Year & Copyright */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors">
            Back to Top &uarr;
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>

      </div>
    </footer>
  );
}
