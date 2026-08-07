import React from 'react';
import { HeroScene } from '../3d/HeroScene';
import { HeroComputerIde } from '../components/HeroComputerIde';
import { ArrowRight, Download, Sparkles, Send, Globe2, Code, Terminal, Brain } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

const DOMAIN_BADGES = [
  { label: 'WEB DEVELOPMENT', icon: Code, color: 'border-sky-500/40 text-sky-300 bg-sky-500/10' },
  { label: 'GIS', icon: Globe2, color: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' },
  { label: 'PYTHON AUTOMATION', icon: Terminal, color: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10' },
  { label: 'DATA', icon: Sparkles, color: 'border-amber-500/40 text-amber-300 bg-amber-500/10' },
  { label: 'AI-ASSISTED DEVELOPMENT', icon: Brain, color: 'border-violet-500/40 text-violet-300 bg-violet-500/10' },
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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* 3D Background */}
      <HeroScene />

      {/* Hero Overlay Lighting & Subtle Grid Background */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Animated Domain Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto">
          {DOMAIN_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <span
                key={badge.label}
                className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium border flex items-center gap-1.5 backdrop-blur-md transition-all hover:scale-105 ${badge.color}`}
              >
                <Icon className="w-3 h-3 shrink-0" />
                <span>{badge.label}</span>
              </span>
            );
          })}
        </div>

        {/* Primary Name & Sub-headline */}
        <div className="space-y-2 sm:space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-surface-100/80 border border-white/10 text-[10px] sm:text-xs font-mono text-text-secondary">
            SURAT, GUJARAT, INDIA • CS & ENGINEERING
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            NEEL PATEL
          </h1>

          <p className="text-base sm:text-2xl font-display font-semibold text-accent-cyan tracking-wide">
            {PERSONAL_INFO.title}
          </p>
        </div>

        {/* Main Statement */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-3xl font-display font-medium text-white leading-snug px-2">
            "{PERSONAL_INFO.headline}"
          </h2>
          <p className="text-xs sm:text-base text-text-secondary font-sans leading-relaxed max-w-2xl mx-auto">
            Web Development • GIS • Python Automation • AI-Assisted Development
          </p>
        </div>

        {/* Action CTAs (Mobile Responsive Layout) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 px-4 sm:px-0">
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-glow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            VIEW MY WORK
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/15 text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <Download className="w-4 h-4 text-accent-cyan" />
            DOWNLOAD RESUME
          </button>

          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-surface-50/70 hover:bg-surface-100 border border-white/10 text-text-secondary hover:text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Send className="w-4 h-4 text-emerald-400" />
            LET'S CONNECT
          </button>
        </div>

        {/* 💻 macOS IDE Computer Workstation Window */}
        <HeroComputerIde />

        {/* Scroll Indicator */}
        <div className="pt-4 sm:pt-6 flex flex-col items-center gap-2 text-text-muted">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">SCROLL TO EXPLORE</span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
