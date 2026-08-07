import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, ChevronRight, Calendar, Building, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('exp-6'); // Sahitya Sangam open by default

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-background/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-accent-cyan" />
          <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase">
            03. EXPERIENCE CHRONOLOGY
          </span>
        </div>

        <div className="mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Professional Roles & Milestones
          </h2>
          <p className="text-sm text-text-secondary font-mono">
            [CLICK ANY TIMELINE CARD TO EXPAND RESPONSIBILITIES & TECH STACK]
          </p>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-8 max-w-4xl">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isPresent = exp.period.includes('Present');

            return (
              <div key={exp.id} className="relative group">
                
                {/* Node Point on Timeline */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isPresent
                      ? 'bg-accent border-white shadow-glow-sm ring-4 ring-accent/20'
                      : isExpanded
                      ? 'bg-surface-100 border-accent-cyan'
                      : 'bg-surface-200 border-white/20 group-hover:border-accent'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isPresent ? 'bg-white animate-pulse' : 'bg-accent-cyan'
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className={`p-6 rounded-2xl glass-panel-interactive border transition-all cursor-pointer ${
                    isExpanded
                      ? 'border-accent bg-surface-100/90 shadow-glow-sm'
                      : 'border-white/10 hover:border-white/25'
                  }`}
                >
                  {/* Card Main Info */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-surface-200 text-accent-cyan text-xs font-mono font-bold">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-text-secondary font-mono text-xs">
                      <Building className="w-3.5 h-3.5 text-accent-cyan" />
                      <span className="font-semibold text-white">{exp.company}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-text-muted transition-transform duration-300 ${
                          isExpanded ? 'rotate-90 text-accent' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Content Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-4 border-t border-white/10 space-y-4 animate-in fade-in slide-in-from-top-2">
                      <div className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                              {desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-surface-200 border border-white/10 text-[11px] font-mono text-text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
