import React from 'react';
import { BEYOND_CODE_DATA } from '../data/portfolioData';
import { Users, FileCheck, Calendar, Database, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BeyondCodeSection: React.FC = () => {
  return (
    <section className="py-20 relative z-10 bg-background/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-pink-500" />
          <span className="text-xs font-mono font-bold text-pink-400 tracking-widest uppercase">
            07. BUSINESS OPERATIONAL EXPERIENCE
          </span>
        </div>

        <div className="mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Beyond Code: Talent Operations & Business Logistics
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary font-sans max-w-2xl">
            Practical experience in recruitment operations, hiring workflows, candidate screening, and organizational communication.
          </p>
        </div>

        {/* Operational Overview Card */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel neon-border-ops grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold">
                {BEYOND_CODE_DATA.company}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {BEYOND_CODE_DATA.period}
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-white">
              {BEYOND_CODE_DATA.role}
            </h3>

            <p className="text-xs text-text-secondary leading-relaxed font-sans">
              {BEYOND_CODE_DATA.description}
            </p>

            {/* Operational Tools */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-text-muted mb-2 uppercase">OPERATIONAL PLATFORMS & TOOLS:</div>
              <div className="flex flex-wrap gap-2">
                {BEYOND_CODE_DATA.toolsUsed.map((tool) => (
                  <span key={tool} className="px-2.5 py-1 rounded-lg bg-surface-100 border border-white/10 text-[11px] font-mono text-pink-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Responsibilities Grid */}
          <div className="lg:col-span-7 bg-surface-100/60 rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4 text-pink-400" />
              VERIFIED RECRUITMENT RESPONSIBILITIES
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BEYOND_CODE_DATA.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-200/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-text-secondary font-sans leading-tight">{resp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
