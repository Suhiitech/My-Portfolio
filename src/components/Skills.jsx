import React, { useState } from 'react';
import { skillCategories, allSkillsList } from '../data/skillsData';
import { LeafIcon, LeafDivider } from './LeafMotif';
import { Sparkles, Terminal, Cpu, Palette } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Living Technical Field Dot Grid */}
      <div className="absolute inset-0 field-dot-grid opacity-70 pointer-events-none -z-10" aria-hidden="true" />
      
      {/* Subtle Ambient Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-ochre-100/[0.08] via-forest-100/[0.06] to-transparent dark:from-emerald-950/20 dark:via-transparent dark:to-transparent rounded-full blur-3xl pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ochre-600 dark:text-ochre-400 mb-2">
              <span>02</span>
              <span className="w-4 h-px bg-ochre-500"></span>
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-900 dark:text-night-text tracking-tight">
              Skills & Proficiencies
            </h2>
          </div>
          <p className="text-sm text-forest-900/70 dark:text-night-muted max-w-md font-sans leading-relaxed">
            From algorithmic problem-solving to machine learning workflows and tactile frontend interfaces.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-forest-700/10 dark:border-night-border">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all btn-tactile ${
              activeTab === 'all'
                ? 'bg-forest-700 text-parchment-50 dark:bg-forest-600 shadow-sm'
                : 'bg-parchment-card/80 dark:bg-night-card text-forest-800 dark:text-night-muted hover:bg-parchment-200 dark:hover:bg-night-elevated'
            }`}
          >
            All Skills ({allSkillsList.length})
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat.category)}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all btn-tactile ${
                activeTab === cat.category
                  ? 'bg-forest-700 text-parchment-50 dark:bg-forest-600 shadow-sm'
                  : 'bg-parchment-card/80 dark:bg-night-card text-forest-800 dark:text-night-muted hover:bg-parchment-200 dark:hover:bg-night-elevated'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categorized Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories
            .filter(cat => activeTab === 'all' || activeTab === cat.category)
            .map((cat, catIdx) => {
              const icons = [Terminal, Cpu, Palette];
              const Icon = icons[catIdx % icons.length];

              return (
                <div 
                  key={catIdx}
                  className="rounded-2xl p-6 sm:p-7 bg-parchment-card/90 dark:bg-night-card/90 border border-forest-700/15 dark:border-night-border shadow-notebook flex flex-col h-full field-card"
                >
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-forest-700/10 dark:border-night-border">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-forest-700/10 dark:bg-forest-400/10 text-forest-700 dark:text-forest-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif font-semibold text-lg text-forest-900 dark:text-night-text">
                        {cat.category}
                      </h3>
                    </div>
                    <LeafIcon className="w-3.5 h-3.5 text-ochre-600 dark:text-ochre-400" />
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`group relative p-3 rounded-xl border transition-all duration-200 ${
                          skill.isHighlight 
                            ? 'bg-ochre-50/75 dark:bg-night-elevated border-ochre-400/50 dark:border-ochre-500/30' 
                            : 'bg-parchment-100/70 dark:bg-night-elevated/40 border-forest-700/10 dark:border-night-border hover:border-forest-700/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm text-forest-900 dark:text-night-text group-hover:text-forest-700 dark:group-hover:text-forest-200 transition-colors">
                            {skill.name}
                          </span>
                          
                          {skill.isLearning ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-ochre-100 dark:bg-ochre-950/60 text-ochre-800 dark:text-ochre-300 border border-ochre-300 dark:border-ochre-700/40">
                              <Sparkles className="w-2.5 h-2.5" />
                              learning
                            </span>
                          ) : skill.isHighlight ? (
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-forest-700/10 dark:bg-forest-400/15 text-forest-800 dark:text-forest-200 font-semibold border border-forest-700/20">
                              {skill.level}
                            </span>
                          ) : (
                            <span className="text-[11px] font-mono text-forest-700/70 dark:text-night-muted">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Quick Chips Matrix for full scannability */}
        <div className="mt-12 p-6 rounded-2xl bg-parchment-card/70 dark:bg-night-card/70 border border-forest-700/10 dark:border-night-border">
          <div className="text-xs uppercase font-mono tracking-wider text-forest-700/70 dark:text-night-muted mb-4 flex items-center gap-2">
            <span>Direct Index Matrix</span>
            <span className="h-px bg-forest-700/15 dark:bg-night-border flex-1"></span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {allSkillsList.map((skillName, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-parchment-card dark:bg-night-elevated border border-forest-700/15 dark:border-night-border text-xs font-medium text-forest-900 dark:text-night-text shadow-sm hover:border-ochre-500 hover:text-ochre-600 dark:hover:text-ochre-300 transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ochre-500"></span>
                {skillName}
              </span>
            ))}
          </div>
        </div>

        <LeafDivider className="mt-20" />

      </div>
    </section>
  );
}
