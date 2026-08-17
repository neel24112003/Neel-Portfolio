import React from 'react';
import { HeroScene } from '../3d/HeroScene';
import { HeroComputerIde } from '../components/HeroComputerIde';
import { ArrowRight, FileText, Sparkles, Send, Globe2, Code, Terminal, Brain, BarChart3, Layers, Database, Activity, FileSpreadsheet, LineChart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

const SPECIALIZATION_BADGES = [
  { label: 'Data Analyst', icon: BarChart3, color: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.25)]' },
  { label: 'Full Stack Engineer', icon: Layers, color: 'border-sky-500/50 text-sky-300 bg-sky-500/10 shadow-[0_0_12px_rgba(56,189,248,0.25)]' },
  { label: 'SQL', icon: Database, color: 'border-indigo-500/50 text-indigo-300 bg-indigo-500/10 shadow-[0_0_12px_rgba(99,102,241,0.25)]' },
  { label: 'Power BI', icon: Activity, color: 'border-amber-500/50 text-amber-300 bg-amber-500/10 shadow-[0_0_12px_rgba(245,158,11,0.25)]' },
  { label: 'Excel', icon: FileSpreadsheet, color: 'border-green-500/50 text-green-300 bg-green-500/10 shadow-[0_0_12px_rgba(34,197,94,0.25)]' },
  { label: 'Business Intelligence', icon: LineChart, color: 'border-purple-500/50 text-purple-300 bg-purple-500/10 shadow-[0_0_12px_rgba(168,85,247,0.25)]' },
  { label: 'GIS', icon: Globe2, color: 'border-cyan-500/50 text-cyan-300 bg-cyan-500/10 shadow-[0_0_12px_rgba(6,182,212,0.25)]' },
  { label: 'Freelance', icon: Sparkles, color: 'border-pink-500/50 text-pink-300 bg-pink-500/10 shadow-[0_0_12px_rgba(236,72,153,0.25)]' },
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-8 overflow-hidden">
        
        {/* Animated Specialization Badge Pills with Icons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-full mx-auto px-1">
          {SPECIALIZATION_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <span
                key={badge.label}
                className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold border flex items-center gap-1.5 backdrop-blur-md transition-all hover:scale-105 ${badge.color}`}
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
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

        {/* Main Statement Banner */}
        <div className="max-w-5xl mx-auto px-2">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-100/80 border border-accent-cyan/30 backdrop-blur-xl shadow-2xl neon-border-cyber text-center space-y-3">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-snug sm:leading-relaxed tracking-tight">
              Architecting <span className="text-gradient-cyan">Full-Stack Web Platforms</span>, <span className="text-emerald-400">Data Analytics Pipelines</span> & <span className="text-accent-violet">GIS Spatial Systems</span>.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-300 font-semibold tracking-wide uppercase">
              Cloud Computing • Business Intelligence • Interactive Dashboards • End-to-End Engineering
            </p>
          </div>
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
            title="Open Executive Resume Viewer"
          >
            <FileText className="w-3.5 h-3.5 text-accent-cyan" />
            VIEW RESUME
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
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};
