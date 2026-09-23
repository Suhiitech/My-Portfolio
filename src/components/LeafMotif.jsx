import React from 'react';

/**
 * Signature subtle leaf / botanical line-art motif.
 */
export function LeafIcon({ className = "w-5 h-5", strokeWidth = 1.6 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M12 21C7 21 4 17 4 12C4 7 8 3 19 3C19 14 17 21 12 21Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6.5 17.5L19 3" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round"
      />
      <path 
        d="M10.5 13.5L13.5 16" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round"
      />
      <path 
        d="M13.5 10.5L16.5 13" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Delicate botanical sprig line-art for section margins and edges
 */
export function BotanicalSprig({ className = "w-36 h-36", strokeWidth = 1.2 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M15 85 C 35 70, 50 45, 80 18" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
      />
      <path 
        d="M38 62 C 34 52, 25 50, 22 55 C 26 64, 34 64, 38 62 Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M48 51 C 55 44, 63 46, 64 53 C 58 57, 50 56, 48 51 Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M62 37 C 58 28, 48 29, 47 36 C 53 41, 60 40, 62 37 Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M80 18 C 77 12, 70 14, 71 21 C 76 23, 80 21, 80 18 Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
      />
    </svg>
  );
}

/**
 * Archival botanical corner flourish
 */
export function BotanicalCorner({ className = "w-24 h-24", strokeWidth = 1.2 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M6 54 C 18 36, 36 18, 54 6" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
      />
      <path 
        d="M24 36 C 20 28, 14 30, 16 38 C 22 40, 24 38, 24 36 Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
      />
      <path 
        d="M38 22 C 44 16, 42 10, 36 12 C 34 18, 36 22, 38 22 Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
      />
    </svg>
  );
}

/**
 * Field notebook section separator with central leaf accent
 */
export function LeafDivider({ className = "my-12" }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-forest-700/25 to-forest-700/40 dark:via-night-border dark:to-emerald-500/30 flex-1 max-w-xs"></div>
      <LeafIcon className="w-4 h-4 text-ochre-500 dark:text-ochre-400 rotate-45 transform" strokeWidth={1.5} />
      <div className="h-px bg-gradient-to-l from-transparent via-forest-700/25 to-forest-700/40 dark:via-night-border dark:to-emerald-500/30 flex-1 max-w-xs"></div>
    </div>
  );
}

export default LeafIcon;
