import React from 'react';
import { HeroScene } from '../3d/HeroScene';
import { HeroComputerIde } from '../components/HeroComputerIde';
import { ArrowRight, Download, Sparkles, Send, Globe2, Code, Terminal, Brain, BarChart3 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generatePdfResume } from '../utils/generatePdfResume';

interface HeroSectionProps {
  onOpenResume: () => void;
}

const DOMAIN_BADGES = [
  { label: 'WEB DEVELOPMENT', icon: Code, color: 'border-sky-500/40 text-sky-300 bg-sky-500/10' },
  { label: 'DATA ANALYTICS', icon: BarChart3, color: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' },
  { label: 'GIS', icon: Globe2, color: 'border-teal-500/40 text-teal-300 bg-teal-500/10' },
  { label: 'PYTHON AUTOMATION', icon: Terminal, color: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10' },
  { label: 'AI SYSTEMS', icon: Brain, color: 'border-violet-500/40 text-violet-300 bg-violet-500/10' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToWork = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
      {/* 3D Background */}
      <HeroScene />

      {/* Hero Overlay Lighting & Subtle Grid Background */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-8 overflow-hidden">
        
        {/* Animated Domain Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-full mx-auto px-1">
          {DOMAIN_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <span
                key={badge.label}
                className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-mono font-medium border flex items-center gap-1 backdrop-blur-md transition-all ${badge.color}`}
              >
                <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                <span className="truncate">{badge.label}</span>
              </span>
            );
          })}
        </div>

        {/* Primary Name & Sub-headline */}
        <div className="space-y-2 sm:space-y-4 w-full max-w-full px-1">
          <div className="inline-block px-3.5 py-1 rounded-full bg-surface-100/90 border border-accent-cyan/30 text-[10px] sm:text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase">
            SURAT, GUJARAT, INDIA • B.TECH CSE (CLOUD COMPUTING)
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight leading-none uppercase drop-shadow-md">
            NEEL PATEL
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <span className="text-lg sm:text-2xl lg:text-3xl font-display font-bold text-accent-cyan tracking-wide">
              Computer Science Engineer
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-xs sm:text-sm lg:text-base font-mono font-bold text-emerald-400 shadow-glow-sm">
              Specialization in Cloud Computing
            </span>
          </div>
        </div>

        {/* Main Statement */}
        <div className="max-w-3xl mx-auto space-y-2 sm:space-y-4 px-1">
          <h2 className="text-base sm:text-2xl lg:text-3xl font-display font-medium text-white leading-snug break-words">
            "{PERSONAL_INFO.headline}"
          </h2>
          <p className="text-xs sm:text-base text-text-secondary font-sans leading-relaxed max-w-2xl mx-auto break-words">
            Web Development • Data Analytics • GIS Analysis • Python Automation • AI Systems
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 px-2 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-glow-md transition-all active:scale-95"
          >
            VIEW MY WORK
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/15 text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
            title="Open Executive Resume Viewer & Download PDF"
          >
            <Download className="w-3.5 h-3.5 text-accent-cyan" />
            VIEW & DOWNLOAD RESUME
          </button>

          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-surface-50/70 hover:bg-surface-100 border border-white/10 text-text-secondary hover:text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Send className="w-3.5 h-3.5 text-emerald-400" />
            LET'S CONNECT
          </button>
        </div>

        {/* 💻 macOS IDE Computer Workstation Window */}
        <HeroComputerIde />

        {/* Scroll Indicator */}
        <div className="pt-2 sm:pt-4 flex flex-col items-center gap-1.5 text-text-muted">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">SCROLL TO EXPLORE</span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
