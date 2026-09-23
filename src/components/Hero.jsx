import React from 'react';
import { ArrowDown, Code2, BrainCircuit, Sparkles } from 'lucide-react';
import { LeafIcon, BotanicalSprig, BotanicalCorner } from './LeafMotif';

export default function Hero({ scrollY = 0 }) {
  const stats = [
    {
      value: "2",
      label: "Independent projects",
      icon: Code2,
      subtext: "Crafted from scratch"
    },
    {
      value: "AI & ML",
      label: "Specialization focus",
      icon: BrainCircuit,
      subtext: "Intelligent systems & logic"
    },
    {
      value: "React",
      label: "Primary tool",
      icon: Sparkles,
      subtext: "Component architecture"
    }
  ];

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroParallax = prefersReducedMotion ? 0 : scrollY * 0.12;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Ambient Specular Light Beam (Slow moving across hero) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="w-[140%] h-[400px] bg-gradient-to-r from-transparent via-amber-200/[0.04] dark:via-emerald-400/[0.03] to-transparent animate-light-sweep absolute -top-20 -left-[20%]" />
      </div>

      {/* Hand-Drawn Botanical Line-Art Accent Floating behind upper-right */}
      <div 
        style={{ transform: `translate3d(0, ${heroParallax * 0.5}px, 0)` }}
        className="absolute top-12 right-6 md:right-24 pointer-events-none text-forest-700/[0.22] dark:text-emerald-400/[0.18] -z-10 animate-botanical-float hidden sm:block" 
        aria-hidden="true"
      >
        <BotanicalSprig className="w-48 h-48 md:w-64 md:h-64" strokeWidth={1.1} />
      </div>

      {/* Lower left botanical counterpoint */}
      <div 
        style={{ transform: `translate3d(0, ${heroParallax * 0.3}px, 0)` }}
        className="absolute -bottom-6 -left-6 pointer-events-none text-ochre-600/[0.2] dark:text-ochre-400/[0.15] -z-10 animate-botanical-sway hidden lg:block" 
        aria-hidden="true"
      >
        <BotanicalCorner className="w-36 h-36" strokeWidth={1.2} />
      </div>

      {/* Subtle Floating Botanical Motes / Spores */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <span className="absolute top-[28%] left-[18%] w-1.5 h-1.5 rounded-full bg-ochre-400/50 dark:bg-amber-300/40 animate-mote-1" />
        <span className="absolute top-[65%] left-[28%] w-1 h-1 rounded-full bg-forest-600/40 dark:bg-emerald-300/30 animate-mote-2" />
        <span className="absolute top-[35%] right-[32%] w-2 h-2 rounded-full bg-ochre-300/40 dark:bg-ochre-400/30 animate-mote-3" />
        <span className="absolute top-[75%] right-[18%] w-1.5 h-1.5 rounded-full bg-forest-700/35 dark:bg-emerald-400/30 animate-mote-1" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Field Note Monogram Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-200/90 dark:bg-night-card border border-forest-700/15 dark:border-night-border text-forest-800 dark:text-night-text text-xs tracking-wider uppercase font-medium mb-6 shadow-sm">
              <LeafIcon className="w-3.5 h-3.5 text-ochre-600 dark:text-ochre-400" />
              <span>Field Notes & Portfolio</span>
              <span className="w-1 h-1 rounded-full bg-ochre-500"></span>
              <span className="text-forest-700 dark:text-forest-200 font-semibold">2026</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-forest-900 dark:text-night-text tracking-tight leading-[1.1] mb-4">
              Suhana Khan
            </h1>

            {/* Specialization Subtitle */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-ochre-500"></span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-forest-700 dark:text-forest-200 font-medium tracking-wide">
                B.Tech CSE — AI & ML
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-forest-900/80 dark:text-night-muted font-normal max-w-xl leading-relaxed mb-10">
              Exploring the intersection of intelligent systems, playful game mechanics, and gentle software aesthetics — engineered with curiosity, precision, and purpose.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-forest-700 hover:bg-forest-800 dark:bg-forest-600 dark:hover:bg-forest-700 text-parchment-50 font-medium text-sm tracking-wide shadow-md transition-all btn-tactile"
              >
                <span>View Selected Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#about"
                id="hero-read-bio-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-parchment-card dark:bg-night-card hover:bg-parchment-200 dark:hover:bg-night-elevated text-forest-800 dark:text-night-text font-medium text-sm tracking-wide border border-forest-700/20 dark:border-night-border transition-all btn-tactile"
              >
                <span>Read Biography</span>
              </a>
            </div>

            {/* Stat Row */}
            <div className="w-full pt-8 border-t border-forest-700/15 dark:border-night-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={i} 
                      className="group flex flex-col p-4 rounded-xl bg-parchment-card/85 dark:bg-night-card/85 border border-forest-700/10 dark:border-night-border/80 shadow-notebook transition-all hover:border-ochre-400/40 field-card"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-2xl font-bold text-forest-800 dark:text-parchment-100">
                          {stat.value}
                        </span>
                        <Icon className="w-4 h-4 text-ochre-600 dark:text-ochre-400 transition-transform group-hover:scale-110" />
                      </div>
                      <span className="text-xs font-semibold text-forest-900 dark:text-night-text tracking-tight">
                        {stat.label}
                      </span>
                      <span className="text-[11px] text-forest-700/70 dark:text-night-muted mt-0.5">
                        {stat.subtext}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: User Portrait in Archival Notebook Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Backing paper card offset */}
              <div 
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-parchment-300/80 dark:bg-night-elevated border border-forest-700/15 dark:border-night-border transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-300"
                aria-hidden="true"
              />

              {/* Main portrait container */}
              <div className="relative rounded-2xl overflow-hidden bg-parchment-card dark:bg-night-card border-2 border-forest-700/20 dark:border-night-border shadow-notebook z-10 p-3 field-card">
                
                {/* Field photo frame */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-parchment-200 dark:bg-night-elevated">
                  <img
                    src="/suhana.jpg"
                    alt="Suhana Khan — B.Tech CSE (AI & ML)"
                    className="w-full h-full object-cover object-center filter saturate-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Archival label strip at bottom */}
                <div className="mt-3 px-3 py-2 rounded-lg bg-parchment-100/90 dark:bg-night-bg/90 border border-forest-700/10 dark:border-night-border flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <LeafIcon className="w-3.5 h-3.5 text-ochre-600 dark:text-ochre-400" />
                    <span className="font-serif font-medium text-forest-900 dark:text-night-text">Suhana Khan</span>
                  </div>
                  <span className="font-mono text-[11px] text-forest-700/70 dark:text-night-muted uppercase tracking-wider">
                    CSE · AI & ML
                  </span>
                </div>

              </div>

              {/* Signature Leaf corner stamp */}
              <div 
                className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-parchment-50 dark:bg-night-elevated border border-ochre-400/50 shadow-sm flex items-center justify-center text-ochre-600 dark:text-ochre-400 rotate-12 group-hover:rotate-45 transition-transform duration-300"
                title="Signature Field Stamp"
              >
                <LeafIcon className="w-4 h-4" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
