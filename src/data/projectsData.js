export const projects = [
  {
    id: "memory-card-game",
    title: "Memory Card Game",
    subtitle: "Tactile Memory Game with Heuristic Bot AI",
    badge: "React · Independent Build",
    theme: "Cottagecore Pastel Theme",
    description: "An artisanal browser card game built around a warm, gentle cottagecore visual palette. Engineered with three distinct play modes and an adaptive bot opponent that retains revealed card locations in its simulated working memory.",
    highlights: [
      {
        label: "3 Distinct Modes",
        detail: "Solo vs Bot, 2-Player Pass-and-Play, and relaxed Practice mode with card-reveal counters."
      },
      {
        label: "Strategic Bot AI",
        detail: "The bot records flipped coordinates and actively scans its memory state to calculate optimal pairs instead of random guessing."
      },
      {
        label: "Playtested Grid Design",
        detail: "Card grid proportions, flip animation durations (350ms), and spacing calibrated via hands-on playtesting for satisfying feedback."
      }
    ],
    tags: ["React", "Custom Hook State", "Heuristic AI", "Cottagecore UI", "CSS Animations"],
    metrics: [
      { label: "Game Modes", value: "3 Modes" },
      { label: "Bot Logic", value: "Memory Tracking" },
      { label: "Pacing", value: "Playtested" }
    ],
    colorAccent: "from-amber-100/60 to-emerald-50/70 dark:from-emerald-950/40 dark:to-night-card"
  },
  {
    id: "ocean-tracker",
    title: "Ocean Tracker",
    subtitle: "Live Maritime Corridor & Marine Wildlife Visualizer",
    badge: "Lovable Prototype · Simulated Data",
    theme: "Simulated Ocean Telemetry",
    description: "A maritime intelligence dashboard prototype tracking international vessels alongside an interactive marine biodiversity index. Simulates real-time transponder data and oceanic migration patterns in one unified interface.",
    highlights: [
      {
        label: "Live Oceanic Map",
        detail: "Tracks simulated positions of cargo containers, international freight ships, and luxury cruises traversing major shipping lanes."
      },
      {
        label: "Water Species Finder",
        detail: "Interactive marine index surfacing species profiles, conservation statuses, typical depth zones, and regional oceanic habitats."
      },
      {
        label: "Rapid Prototyping",
        detail: "Designed and iterated using Lovable, integrating mock telemetry streams, coordinate filtering, and ambient ocean colorways."
      }
    ],
    tags: ["Lovable", "Interactive Prototype", "Simulated Telemetry", "Marine Life Finder", "Spatial UI"],
    metrics: [
      { label: "Vessel Classes", value: "Cargo / Ships / Cruises" },
      { label: "Feature", value: "Species Index" },
      { label: "Platform", value: "Lovable" }
    ],
    colorAccent: "from-sky-100/60 to-emerald-50/70 dark:from-teal-950/40 dark:to-night-card"
  }
];
