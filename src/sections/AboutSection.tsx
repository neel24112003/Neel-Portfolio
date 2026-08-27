import React from 'react';
import { PERSONAL_INFO, CORE_PULSE_KEYWORDS } from '../data/portfolioData';
import { User, MapPin, GraduationCap, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-background/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header & Main Title */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent-cyan" />
            <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase">
              01. ABOUT NEEL PATEL
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight max-w-4xl">
            Engineering solutions at the intersection of <span className="text-gradient-cyan">Web, Spatial Data & Automation.</span>
          </h2>
        </div>

        {/* 2-Column Balanced Alignment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Main About Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Introduction Statement Box */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel neon-border-web space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-base sm:text-lg text-text-primary leading-relaxed font-sans">
                {PERSONAL_INFO.summary}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-text-secondary">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span>B.Tech CSE (2021–2025)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent-violet" />
                  <span>Surat, Gujarat, India</span>
                </div>
              </div>
            </div>

            {/* Core Technical Focus Domains Box */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel neon-border-cyber space-y-4">
              <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
                CORE TECHNICAL FOCUS DOMAINS
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {CORE_PULSE_KEYWORDS.map((kw, i) => (
                  <div
                    key={kw}
                    className={`px-3.5 py-2 rounded-xl glass-panel-interactive text-xs font-mono font-semibold text-white flex items-center gap-2 group shadow-glow-sm ${
                      i % 4 === 0 ? 'neon-border-web' : i % 4 === 1 ? 'neon-border-gis' : i % 4 === 2 ? 'neon-border-python' : 'neon-border-ai'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-cyan group-hover:scale-125 transition-transform" />
                    <span>{kw}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Highlights & Personal Details Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Fact / Personal Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel neon-border-gis space-y-6 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-400" />
                PERSONAL DETAILS
              </h3>

              <div className="space-y-3 sm:space-y-4 text-xs font-mono">
                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-100/60 neon-border-cyber flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                  <span className="text-text-muted shrink-0">FULL NAME</span>
                  <span className="text-white font-semibold text-left sm:text-right">NEEL PATEL</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-100/60 neon-border-web flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                  <span className="text-text-muted shrink-0">FATHER'S NAME</span>
                  <span className="text-accent-cyan font-semibold text-left sm:text-right">NAYAN PATEL</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-100/60 neon-border-python flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                  <span className="text-text-muted shrink-0">MOTHER'S NAME</span>
                  <span className="text-amber-300 font-semibold text-left sm:text-right">NEETA PATEL</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-100/60 neon-border-cyber flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                  <span className="text-text-muted shrink-0">DEGREE</span>
                  <span className="text-sky-300 font-semibold text-left sm:text-right">B.Tech in CSE</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-100/60 neon-border-gis flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                  <span className="text-text-muted shrink-0">UNIVERSITY</span>
                  <span className="text-white font-semibold text-left sm:text-right">UKA Tarsadia University</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-100/60 neon-border-ai flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                  <span className="text-text-muted shrink-0">LANGUAGES</span>
                  <span className="text-emerald-400 font-semibold text-left sm:text-right">English • Hindi • Gujarati</span>
                </div>
              </div>
            </div>

            {/* Modern Workflow Advantage Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-surface-100/90 neon-border-ai space-y-3">
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                MODERN WORKFLOW ADVANTAGE
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                Utilizes AI-assisted software development tools (Microsoft Copilot, GitHub Copilot, Prompt Engineering) to accelerate coding, optimize algorithms, and streamline debugging workflows.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
