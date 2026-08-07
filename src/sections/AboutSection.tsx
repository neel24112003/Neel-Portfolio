import React from 'react';
import { PERSONAL_INFO, CORE_PULSE_KEYWORDS } from '../data/portfolioData';
import { ShieldCheck, Cpu, Globe, Code2, Sparkles, MapPin, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-background/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-[2px] bg-accent-cyan" />
          <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase">
            01. ABOUT NEEL PATEL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main About Content */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              Engineering solutions at the intersection of <span className="text-gradient-cyan">Web, Spatial Data & Automation.</span>
            </h2>

            {/* Core Statement Box */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
              <p className="text-base text-text-primary leading-relaxed">
                "{PERSONAL_INFO.summary}"
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

            {/* Animated Interactive Keywords Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
                CORE TECHNICAL FOCUS DOMAINS
              </h4>
              <div className="flex flex-wrap gap-3">
                {CORE_PULSE_KEYWORDS.map((kw, i) => (
                  <div
                    key={kw}
                    className="px-4 py-2.5 rounded-xl glass-panel-interactive border border-white/10 text-xs font-mono font-semibold text-white flex items-center gap-2 group hover:border-accent hover:shadow-glow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-cyan group-hover:scale-125 transition-transform" />
                    <span>{kw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights & Language Capabilities Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Fact Matrix Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                ENGINEERING PROFILE
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 flex items-center justify-between">
                  <span className="text-text-muted">FULL NAME</span>
                  <span className="text-white font-semibold">NEEL PATEL</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 flex items-center justify-between">
                  <span className="text-text-muted">DEGREE</span>
                  <span className="text-accent-cyan font-semibold">B.Tech in CSE</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 flex items-center justify-between">
                  <span className="text-text-muted">UNIVERSITY</span>
                  <span className="text-white font-semibold">UKA Tarsadia University</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 flex items-center justify-between">
                  <span className="text-text-muted">LANGUAGES</span>
                  <span className="text-emerald-400 font-semibold">English • Hindi • Gujarati</span>
                </div>
              </div>
            </div>

            {/* AI-Assisted Philosophy Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-100 to-surface-200 border border-accent/30 space-y-3">
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                MODERN WORKFLOW ADVANTAGE
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Utilizes AI-assisted software development tools (Microsoft Copilot, GitHub Copilot, Prompt Engineering) to accelerate coding, optimize algorithms, and streamline debugging workflows.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
