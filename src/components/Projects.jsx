import React, { useState } from 'react';
import { LeafIcon, LeafDivider } from './LeafMotif';
import { 
  Bot, 
  Users, 
  Gamepad2, 
  Compass, 
  Fish, 
  Ship, 
  Anchor, 
  Layers, 
  CheckCircle2
} from 'lucide-react';

export default function Projects() {
  const [selectedGameMode, setSelectedGameMode] = useState('bot');
  const [selectedSpecies, setSelectedSpecies] = useState('turtle');

  const speciesList = {
    turtle: {
      name: "Green Sea Turtle",
      scientific: "Chelonia mydas",
      depth: "0 - 110 m",
      status: "Endangered",
      corridor: "Coral Sea Corridor",
      icon: "🐢"
    },
    whale: {
      name: "Humpback Whale",
      scientific: "Megaptera novaeangliae",
      depth: "0 - 200 m",
      status: "Least Concern",
      corridor: "Antarctic Migration Belt",
      icon: "🐋"
    },
    manta: {
      name: "Giant Oceanic Manta Ray",
      scientific: "Mobula birostris",
      depth: "10 - 1,000 m",
      status: "Vulnerable",
      corridor: "Indo-Pacific Ridge",
      icon: "🌊"
    }
  };

  const vessels = [
    { name: "Nordic Voyager", type: "Cargo", speed: "16.4 kn", status: "Simulated Live", icon: Ship },
    { name: "Oceanic Pearl", type: "Cruise", speed: "21.2 kn", status: "In Corridor", icon: Anchor },
    { name: "Titan Box 400", type: "Container", speed: "18.8 kn", status: "En Route", icon: Layers },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Subtle slow ink/paper wash glow behind projects */}
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-100/[0.08] via-ochre-100/[0.04] to-transparent dark:from-emerald-950/20 dark:via-night-elevated/20 dark:to-transparent rounded-full blur-[100px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ochre-600 dark:text-ochre-400 mb-2">
              <span>03</span>
              <span className="w-4 h-px bg-ochre-500"></span>
              <span>Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-900 dark:text-night-text tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-forest-900/70 dark:text-night-muted max-w-md font-sans leading-relaxed">
            Independent creations uniting technical logic, playful interaction, and soft visual aesthetics.
          </p>
        </div>

        {/* Project Cards (Stacked Field Notebook Studies) */}
        <div className="flex flex-col gap-16">
          
          {/* ========================================================
              PROJECT 1: Memory Card Game (React)
             ======================================================== */}
          <div className="rounded-3xl bg-parchment-card/95 dark:bg-night-card/95 border-2 border-forest-700/15 dark:border-night-border shadow-notebook overflow-hidden field-card group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Narrative & Technical Details */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  
                  {/* Badge Row */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-full bg-forest-700/10 dark:bg-forest-400/15 text-forest-800 dark:text-forest-200 text-xs font-semibold uppercase tracking-wider font-mono">
                      React · Independent Build
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-100/70 dark:bg-ochre-950/60 text-ochre-800 dark:text-ochre-300 text-xs font-medium font-sans">
                      Cottagecore Pastel Theme
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-900 dark:text-night-text mb-2">
                    Memory Card Game
                  </h3>
                  <p className="text-sm text-ochre-600 dark:text-ochre-400 font-medium mb-4">
                    Tactile card mechanics with strategic bot memory heuristics
                  </p>

                  <p className="text-sm sm:text-base text-forest-900/80 dark:text-night-muted leading-relaxed font-sans mb-8">
                    An artisanal browser card game built around a warm, gentle cottagecore visual palette. Engineered with 3 distinct play modes and a bot opponent that builds an internal memory map of flipped cards to make calculated strategic decisions rather than random guesses.
                  </p>

                  {/* Core Features Spec */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-forest-700/10 dark:bg-forest-400/10 text-forest-700 dark:text-forest-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-sm text-forest-900 dark:text-night-text font-serif block">
                          3 Play Modes
                        </strong>
                        <span className="text-xs text-forest-900/70 dark:text-night-muted">
                          Solo vs Bot (with heuristic tracking), 2-Player Pass-and-Play for shared screens, and untimed Practice mode.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-forest-700/10 dark:bg-forest-400/10 text-forest-700 dark:text-forest-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-sm text-forest-900 dark:text-night-text font-serif block">
                          Strategic Bot Memory
                        </strong>
                        <span className="text-xs text-forest-900/70 dark:text-night-muted">
                          The bot actively records coordinates of revealed cards and calculates optimal matches when its turn arrives.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-forest-700/10 dark:bg-forest-400/10 text-forest-700 dark:text-forest-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-sm text-forest-900 dark:text-night-text font-serif block">
                          Playtested Grid Pacing
                        </strong>
                        <span className="text-xs text-forest-900/70 dark:text-night-muted">
                          Card grid proportions, flip animation timings (350ms), and feedback sounds were calibrated through playtesting.
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Tags */}
                <div className="pt-6 border-t border-forest-700/10 dark:border-night-border flex flex-wrap gap-2">
                  {["React", "Cottagecore Aesthetics", "Custom Bot AI", "Playtested UX", "Sound & Flip CSS"].map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-parchment-200/70 dark:bg-night-elevated text-forest-800 dark:text-night-muted border border-forest-700/10 dark:border-night-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Card & Bot Simulator */}
              <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/80 via-emerald-50/40 to-parchment-200/60 dark:from-night-elevated dark:via-night-card dark:to-forest-950/20 p-8 border-t lg:border-t-0 lg:border-l border-forest-700/15 dark:border-night-border flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-forest-700 dark:text-forest-200 font-semibold flex items-center gap-1.5">
                      <Gamepad2 className="w-4 h-4 text-ochre-600 dark:text-ochre-400" />
                      Interactive Mode Preview
                    </span>
                    <LeafIcon className="w-3.5 h-3.5 text-ochre-600 dark:text-ochre-400" />
                  </div>

                  {/* Mode Selector Buttons */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <button
                      onClick={() => setSelectedGameMode('bot')}
                      className={`p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-1 border transition-all btn-tactile ${
                        selectedGameMode === 'bot'
                          ? 'bg-forest-700 text-parchment-50 border-forest-700 dark:bg-forest-600 shadow-sm'
                          : 'bg-parchment-card/80 dark:bg-night-card text-forest-800 dark:text-night-muted border-forest-700/10'
                      }`}
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>Vs Bot</span>
                    </button>
                    <button
                      onClick={() => setSelectedGameMode('pass')}
                      className={`p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-1 border transition-all btn-tactile ${
                        selectedGameMode === 'pass'
                          ? 'bg-forest-700 text-parchment-50 border-forest-700 dark:bg-forest-600 shadow-sm'
                          : 'bg-parchment-card/80 dark:bg-night-card text-forest-800 dark:text-night-muted border-forest-700/10'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>2-Player</span>
                    </button>
                    <button
                      onClick={() => setSelectedGameMode('practice')}
                      className={`p-2 rounded-lg text-xs font-medium flex flex-col items-center gap-1 border transition-all btn-tactile ${
                        selectedGameMode === 'practice'
                          ? 'bg-forest-700 text-parchment-50 border-forest-700 dark:bg-forest-600 shadow-sm'
                          : 'bg-parchment-card/80 dark:bg-night-card text-forest-800 dark:text-night-muted border-forest-700/10'
                      }`}
                    >
                      <Gamepad2 className="w-3.5 h-3.5" />
                      <span>Practice</span>
                    </button>
                  </div>

                  {/* Mini Pastel Card Board Display */}
                  <div className="p-4 rounded-2xl bg-parchment-card/90 dark:bg-night-card border border-forest-700/15 dark:border-night-border shadow-inner mb-6">
                    <div className="flex justify-between items-center mb-3 text-[11px] font-mono text-forest-700/80 dark:text-night-muted">
                      <span>Cottagecore Botanical Deck</span>
                      <span className="text-ochre-600 dark:text-ochre-400 font-semibold">
                        {selectedGameMode === 'bot' ? 'Bot Memory: ACTIVE' : selectedGameMode === 'pass' ? 'Turn: Player 1' : 'Untimed Zen Mode'}
                      </span>
                    </div>

                    {/* 2x4 Pastel Card Grid Preview */}
                    <div className="grid grid-cols-4 gap-2.5">
                      {[
                        { icon: "🌸", color: "bg-rose-50 border-rose-200 dark:bg-rose-950/30 dark:border-rose-800/40", revealed: true },
                        { icon: "🌿", color: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800/40", revealed: false },
                        { icon: "🍄", color: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800/40", revealed: true },
                        { icon: "🌰", color: "bg-orange-50 border-orange-200 dark:bg-orange-950/30 dark:border-orange-800/40", revealed: false },
                        { icon: "🌼", color: "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/30 dark:border-yellow-800/40", revealed: false },
                        { icon: "🍄", color: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800/40", revealed: true },
                        { icon: "🌸", color: "bg-rose-50 border-rose-200 dark:bg-rose-950/30 dark:border-rose-800/40", revealed: true },
                        { icon: "🌾", color: "bg-stone-50 border-stone-200 dark:bg-stone-900/30 dark:border-stone-800/40", revealed: false },
                      ].map((card, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-xl border flex items-center justify-center text-lg select-none shadow-sm transition-all duration-300 ${card.color} ${
                            card.revealed ? 'scale-100 rotate-0' : 'opacity-70 hover:opacity-100 hover:scale-105'
                          }`}
                        >
                          {card.revealed ? card.icon : <LeafIcon className="w-3.5 h-3.5 text-forest-700/30 dark:text-forest-300/30" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bot Working Memory Monitor */}
                  <div className="p-3.5 rounded-xl bg-forest-700/5 dark:bg-night-card border border-forest-700/10 dark:border-night-border text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-forest-800 dark:text-forest-200 font-semibold flex items-center gap-1">
                        <Bot className="w-3 h-3 text-ochre-600 dark:text-ochre-400" />
                        Simulated Bot Memory Vector
                      </span>
                      <span className="text-[10px] font-mono text-ochre-600 dark:text-ochre-400">92% accuracy</span>
                    </div>
                    <div className="space-y-1.5 font-mono text-[11px] text-forest-900/80 dark:text-night-muted">
                      <div className="flex justify-between items-center py-0.5 border-b border-forest-700/5 dark:border-night-border">
                        <span>R1:C2 &rarr; Chamomile 🌼</span>
                        <span className="text-[10px] text-forest-700 dark:text-forest-200 font-semibold">Remembered</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-forest-700/5 dark:border-night-border">
                        <span>R2:C1 &rarr; Acorn 🌰</span>
                        <span className="text-[10px] text-forest-700 dark:text-forest-200 font-semibold">Remembered</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span>R2:C4 &rarr; Mushroom 🍄</span>
                        <span className="text-[10px] text-forest-700 dark:text-forest-200 font-semibold">Tracking Pair</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 text-center text-xs text-forest-700/70 dark:text-night-muted font-sans">
                  Crafted with hand-tuned CSS 3D transforms & reactive state machines.
                </div>

              </div>

            </div>
          </div>


          {/* ========================================================
              PROJECT 2: Ocean Tracker (Lovable Prototype)
             ======================================================== */}
          <div className="rounded-3xl bg-parchment-card/95 dark:bg-night-card/95 border-2 border-forest-700/15 dark:border-night-border shadow-notebook overflow-hidden field-card group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Narrative & Technical Details */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  
                  {/* Badge Row */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider font-mono">
                      Lovable Prototype · Simulated Data
                    </span>
                    <span className="px-3 py-1 rounded-full bg-forest-700/10 dark:bg-forest-400/15 text-forest-800 dark:text-forest-200 text-xs font-medium font-sans">
                      Maritime & Marine Life
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-900 dark:text-night-text mb-2">
                    Ocean Tracker
                  </h3>
                  <p className="text-sm text-ochre-600 dark:text-ochre-400 font-medium mb-4">
                    Live oceanic vessel corridor tracking with an interactive water species finder
                  </p>

                  <p className="text-sm sm:text-base text-forest-900/80 dark:text-night-muted leading-relaxed font-sans mb-8">
                    An interactive geo-spatial dashboard prototyped with Lovable using simulated real-time ocean data. Combines international vessel movements (containers, bulk carriers, cruise liners) with an environmental water species finder.
                  </p>

                  {/* Core Features Spec */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-forest-700/10 dark:bg-forest-400/10 text-forest-700 dark:text-forest-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-sm text-forest-900 dark:text-night-text font-serif block">
                          Live Map & Vessel Telemetry
                        </strong>
                        <span className="text-xs text-forest-900/70 dark:text-night-muted">
                          Simulated tracking of global shipping containers, cargo ships, and cruises with velocity, course headings, and transit lanes.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-forest-700/10 dark:bg-forest-400/10 text-forest-700 dark:text-forest-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-sm text-forest-900 dark:text-night-text font-serif block">
                          Water Species Biodiversity Finder
                        </strong>
                        <span className="text-xs text-forest-900/70 dark:text-night-muted">
                          Surfaces marine life along navigation routes — detailing bathymetric depth zones, scientific taxonomy, and IUCN status.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-forest-700/10 dark:bg-forest-400/10 text-forest-700 dark:text-forest-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-sm text-forest-900 dark:text-night-text font-serif block">
                          Rapid Architectural Prototyping
                        </strong>
                        <span className="text-xs text-forest-900/70 dark:text-night-muted">
                          Built and evaluated using Lovable to simulate real-time API latency, route visualization, and data density.
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Tags */}
                <div className="pt-6 border-t border-forest-700/10 dark:border-night-border flex flex-wrap gap-2">
                  {["Lovable", "Simulated Telemetry", "Marine Life Index", "Map Visualizer", "Data Architecture"].map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-parchment-200/70 dark:bg-night-elevated text-forest-800 dark:text-night-muted border border-forest-700/10 dark:border-night-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Map & Species Finder Simulator */}
              <div className="lg:col-span-5 bg-gradient-to-br from-sky-50/70 via-emerald-50/30 to-parchment-200/60 dark:from-night-elevated dark:via-night-card dark:to-teal-950/20 p-8 border-t lg:border-t-0 lg:border-l border-forest-700/15 dark:border-night-border flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-forest-700 dark:text-forest-200 font-semibold flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                      Live Map & Species Console
                    </span>
                    <LeafIcon className="w-3.5 h-3.5 text-ochre-600 dark:text-ochre-400" />
                  </div>

                  {/* Simulated Oceanic Radar Window */}
                  <div className="p-4 rounded-2xl bg-parchment-card/90 dark:bg-night-card border border-forest-700/15 dark:border-night-border shadow-inner mb-6 relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono text-forest-700/70 dark:text-night-muted mb-3">
                      <span>PACIFIC CORRIDOR · SECTOR 4</span>
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Simulating Live
                      </span>
                    </div>

                    {/* Simulated Active Vessels */}
                    <div className="space-y-2 mb-4">
                      {vessels.map((v, i) => {
                        const VIcon = v.icon;
                        return (
                          <div 
                            key={i}
                            className="p-2.5 rounded-lg bg-parchment-100/80 dark:bg-night-elevated border border-forest-700/10 dark:border-night-border flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2">
                              <VIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                              <div>
                                <span className="font-semibold text-forest-900 dark:text-night-text">{v.name}</span>
                                <span className="text-[10px] text-forest-700/60 dark:text-night-muted block">{v.type} Vessel</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="font-mono text-[11px] text-forest-800 dark:text-forest-200 font-semibold">{v.speed}</span>
                              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block">{v.status}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Water Species Finder Sub-component */}
                    <div className="pt-3 border-t border-forest-700/10 dark:border-night-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-forest-800 dark:text-forest-200 font-semibold flex items-center gap-1">
                          <Fish className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                          Water Species Finder
                        </span>
                        <span className="text-[10px] font-mono text-ochre-600 dark:text-ochre-400">Interactive</span>
                      </div>

                      {/* Species Selector Tabs */}
                      <div className="flex gap-1.5 mb-3">
                        {Object.keys(speciesList).map((k) => (
                          <button
                            key={k}
                            onClick={() => setSelectedSpecies(k)}
                            className={`px-2 py-1 rounded text-[11px] font-sans transition-all btn-tactile ${
                              selectedSpecies === k
                                ? 'bg-forest-700 text-parchment-50 dark:bg-forest-600 font-semibold'
                                : 'bg-parchment-200/80 dark:bg-night-elevated text-forest-800 dark:text-night-muted'
                            }`}
                          >
                            {speciesList[k].icon} {speciesList[k].name.split(" ")[0]}
                          </button>
                        ))}
                      </div>

                      {/* Selected Species Detail Card */}
                      <div className="p-2.5 rounded-lg bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200/50 dark:border-teal-800/40 text-[11px]">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="font-serif font-semibold text-forest-900 dark:text-night-text text-xs">
                              {speciesList[selectedSpecies].name}
                            </span>
                            <span className="italic text-forest-700/70 dark:text-night-muted block text-[10px]">
                              {speciesList[selectedSpecies].scientific}
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-ochre-100 dark:bg-ochre-900/40 text-ochre-800 dark:text-ochre-300 border border-ochre-300 dark:border-ochre-700/30">
                            {speciesList[selectedSpecies].status}
                          </span>
                        </div>
                        <div className="mt-2 flex justify-between text-forest-800 dark:text-night-muted text-[10px] font-mono">
                          <span>Depth: {speciesList[selectedSpecies].depth}</span>
                          <span>Corridor: {speciesList[selectedSpecies].corridor}</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="mt-6 text-center text-xs text-forest-700/70 dark:text-night-muted font-sans">
                  Built to evaluate spatial density and mock stream synchronizations.
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
