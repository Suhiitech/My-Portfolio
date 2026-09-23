import React from 'react';
import { LeafIcon, LeafDivider, BotanicalSprig } from './LeafMotif';

export default function About() {
  const journeyDetails = [
    {
      label: "Degree",
      value: "B.Tech — Computer Science & Engineering"
    },
    {
      label: "Specialization",
      value: "Artificial Intelligence & Machine Learning"
    },
    {
      label: "University",
      value: "JECRC University, Jaipur"
    }
  ];

  const currentStatus = [
    {
      label: "Currently",
      value: "1st Semester"
    },
    {
      label: "Expected Graduation",
      value: "2030"
    }
  ];

  const interests = [
    "AI/ML",
    "Game Development",
    "Gaming",
    "Design"
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Subtle Margin Botanical Illustration on Section Edge */}
      <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-forest-700/[0.16] dark:text-emerald-400/[0.12] pointer-events-none -z-10 animate-botanical-sway hidden md:block" aria-hidden="true">
        <BotanicalSprig className="w-56 h-56 rotate-90" strokeWidth={1} />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ochre-600 dark:text-ochre-400 mb-2">
            <span>01</span>
            <span className="w-4 h-px bg-ochre-500"></span>
            <span>Personal Field Note</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-900 dark:text-night-text tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two-Column Desktop / Stacked Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Introduction (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-forest-900/85 dark:text-night-muted leading-relaxed font-normal">
            
            <p className="font-serif text-2xl sm:text-3xl text-forest-900 dark:text-night-text font-semibold tracking-tight">
              Hi, I'm Suhana.
            </p>

            <p>
              I'm a first-semester B.Tech Computer Science &amp; Engineering student specializing in Artificial Intelligence &amp; Machine Learning at JECRC University, Jaipur.
            </p>

            <p>
              I'm at the beginning of my journey in technology, building my foundations in programming, problem solving, AI/ML, and web development. I enjoy learning by creating things rather than just studying concepts, which is why I like experimenting with projects and exploring new technologies.
            </p>

            <p>
              Beyond academics, I'm interested in AI, game development, gaming, and visual design. I enjoy combining technical ideas with creativity and hope to keep building projects that reflect both.
            </p>

          </div>

          {/* Right Column: "My Journey" / "Currently" Information Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-parchment-card/95 dark:bg-night-card/95 border border-forest-700/15 dark:border-night-border shadow-notebook field-card overflow-hidden">
              
              {/* Subtle ambient parchment warmth */}
              <div className="absolute inset-0 bg-gradient-to-br from-ochre-400/[0.03] to-forest-700/[0.03] dark:from-amber-400/[0.03] dark:to-emerald-400/[0.03] pointer-events-none" />

              {/* Card Header with signature leaf detail */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-forest-700/10 dark:border-night-border relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ochre-500"></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-forest-700 dark:text-forest-200 font-semibold">
                    My Journey · Currently
                  </span>
                </div>
                <div className="p-1 rounded bg-forest-700/5 dark:bg-forest-400/10 text-ochre-600 dark:text-ochre-400">
                  <LeafIcon className="w-4 h-4" />
                </div>
              </div>

              {/* Information Rows with Strong Visual Hierarchy */}
              <div className="space-y-4 relative z-10">
                
                {/* Degree, Specialization, University */}
                {journeyDetails.map((item, idx) => (
                  <div key={idx} className="pb-3.5 border-b border-forest-700/5 dark:border-night-border/70 last:border-none">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-ochre-600 dark:text-ochre-400 font-semibold block mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base font-serif font-medium text-forest-900 dark:text-night-text leading-snug block">
                      {item.value}
                    </span>
                  </div>
                ))}

                {/* Currently & Expected Graduation (Side-by-Side Grid) */}
                <div className="grid grid-cols-2 gap-4 pb-3.5 border-b border-forest-700/5 dark:border-night-border/70 last:border-none">
                  {currentStatus.map((item, idx) => (
                    <div key={idx}>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-ochre-600 dark:text-ochre-400 font-semibold block mb-1">
                        {item.label}
                      </span>
                      <span className="text-sm sm:text-base font-serif font-medium text-forest-900 dark:text-night-text leading-snug block">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interests */}
                <div className="pt-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-ochre-600 dark:text-ochre-400 font-semibold block mb-2">
                    Interests
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-parchment-200/70 dark:bg-night-elevated text-forest-800 dark:text-night-text text-xs font-sans font-medium border border-forest-700/10 dark:border-night-border"
                      >
                        <span className="w-1 h-1 rounded-full bg-ochre-500"></span>
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        <LeafDivider className="mt-20" />

      </div>
    </section>
  );
}
