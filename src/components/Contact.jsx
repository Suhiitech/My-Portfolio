import React, { useState } from 'react';
import { Mail, GithubIcon, Linkedin, FileDown, ArrowUpRight, Check, Copy } from 'lucide-react';
import { LeafIcon } from './LeafMotif';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Contact and social links
  const contactLinks = [
    {
      label: "Email",
      value: "suhanaparvezkhan@gmail.com",
      placeholderTag: "Direct Email",
      href: "mailto:suhanaparvezkhan@gmail.com",
      icon: Mail,
      isEmail: true
    },
    {
      label: "GitHub",
      value: "github.com/suhanakhan-dev",
      placeholderTag: "[PLACEHOLDER — Replace with your GitHub URL]",
      href: "https://github.com",
      icon: GithubIcon,
      isExternal: true
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/suhana-khan-ai",
      placeholderTag: "[PLACEHOLDER — Replace with your LinkedIn URL]",
      href: "https://linkedin.com",
      icon: Linkedin,
      isExternal: true
    }
  ];

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("suhanaparvezkhan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadResume = () => {
    const text = 
      "Suhana Khan — Curriculum Vitae\n" +
      "B.Tech Computer Science & Engineering (AI & ML)\n\n" +
      "Specialization: Artificial Intelligence, Machine Learning, Interactive Systems\n" +
      "Primary Tool: React, Python, JavaScript, C++, SQL\n\n" +
      "Projects:\n" +
      "1. Memory Card Game (React) — Cottagecore theme, 3 play modes, strategic bot memory tracking.\n" +
      "2. Ocean Tracker (Lovable Prototype) — Live container/ship/cruise tracker + marine water species finder.\n\n" +
      "Contact:\n" +
      "Email: suhanaparvezkhan@gmail.com\n" +
      "GitHub: https://github.com [PLACEHOLDER]\n" +
      "LinkedIn: https://linkedin.com [PLACEHOLDER]\n";
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Suhana_Khan_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Soft Radial Glow that slowly shifts position */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[480px] bg-gradient-to-tr from-ochre-400/[0.08] via-forest-600/[0.05] to-transparent dark:from-amber-400/[0.06] dark:via-emerald-500/[0.04] to-transparent rounded-full blur-[90px] animate-contact-glow pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Archival Dispatch / Letter Box */}
        <div className="rounded-3xl p-8 sm:p-12 bg-parchment-card/95 dark:bg-night-card/95 border-2 border-forest-700/20 dark:border-night-border shadow-notebook relative overflow-hidden field-card">
          
          {/* Subtle watermark leaf */}
          <div className="absolute -bottom-8 -right-8 opacity-5 dark:opacity-10 pointer-events-none" aria-hidden="true">
            <LeafIcon className="w-56 h-56 text-forest-900 dark:text-emerald-400" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-forest-700/15 dark:border-night-border relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ochre-600 dark:text-ochre-400 mb-1.5">
                <span>04</span>
                <span className="w-4 h-px bg-ochre-500"></span>
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-900 dark:text-night-text tracking-tight">
                Correspondence & Inquiries
              </h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-forest-700/10 dark:bg-forest-400/10 flex items-center justify-center text-forest-700 dark:text-forest-200">
              <LeafIcon className="w-5 h-5" />
            </div>
          </div>

          <p className="text-base sm:text-lg text-forest-900/80 dark:text-night-muted leading-relaxed font-normal mb-8 relative z-10">
            Whether you want to discuss machine learning applications, collaborate on game development, or talk design aesthetics — my inbox is always open.
          </p>

          {/* Text Links with Explicit Placeholders */}
          <div className="space-y-4 mb-10 relative z-10">
            {contactLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-parchment-100/70 dark:bg-night-elevated border border-forest-700/10 dark:border-night-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-forest-700/30 transition-all field-card"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-forest-700/10 dark:bg-forest-400/15 text-forest-700 dark:text-forest-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-forest-700/70 dark:text-night-muted block">
                        {item.label}
                      </span>
                      <a
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        className="font-medium text-sm text-forest-900 dark:text-night-text group-hover:text-ochre-600 dark:group-hover:text-ochre-400 underline underline-offset-4 decoration-forest-700/30 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-ochre-100/70 dark:bg-ochre-950/40 text-ochre-800 dark:text-ochre-300 border border-ochre-300/60 dark:border-ochre-700/40">
                      {item.placeholderTag}
                    </span>
                    {item.isEmail ? (
                      <button
                        onClick={handleCopyEmail}
                        id="copy-email-btn"
                        className="px-2.5 py-1 rounded-md text-xs bg-forest-700/10 text-forest-800 dark:text-night-text hover:bg-forest-700/20 btn-tactile"
                        title="Copy email address"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-forest-700/50 group-hover:text-ochre-500 transition-colors" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row: Resume Download Button */}
          <div className="pt-6 border-t border-forest-700/15 dark:border-night-border flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="text-xs text-forest-700/80 dark:text-night-muted font-sans">
              <span>Looking for a complete chronological overview?</span>
            </div>

            <button
              onClick={handleDownloadResume}
              id="resume-download-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-forest-700 hover:bg-forest-800 dark:bg-forest-600 dark:hover:bg-forest-700 text-parchment-50 font-medium text-sm tracking-wide shadow-md transition-all cursor-pointer btn-tactile"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
              <span className="text-xs text-parchment-200/80 font-mono">(PDF / Overview)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
