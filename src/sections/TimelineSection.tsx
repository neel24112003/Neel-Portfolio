import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, ChevronRight, Building2, CheckCircle2, 
  Activity, BookOpen, Users, Globe2, Terminal, ShoppingCart, 
  Sparkles, Layers, ArrowUpRight, Filter
} from 'lucide-react';

const COMPANY_META: Record<string, { icon: React.ElementType; color: string; tag: string }> = {
  "Saral Health Care": { icon: Activity, color: "from-emerald-500 to-cyan-500", tag: "HEALTHCARE & DATA" },
  "Sahitya Sangam": { icon: BookOpen, color: "from-sky-500 to-blue-600", tag: "WEB & E-COMMERCE" },
  "Guide Placement": { icon: Users, color: "from-pink-500 to-rose-500", tag: "RECRUITMENT OPS" },
  "JIO": { icon: Globe2, color: "from-indigo-500 to-violet-600", tag: "GIS & INFRASTRUCTURE" },
  "Yogya Capital": { icon: Terminal, color: "from-amber-500 to-orange-500", tag: "PYTHON & ETL PIPELINES" },
  "Spectrarc Solution": { icon: Globe2, color: "from-teal-500 to-emerald-600", tag: "SATELLITE REMOTE SENSING" },
  "Shreeji Krupa Farsan": { icon: ShoppingCart, color: "from-amber-400 to-yellow-500", tag: "RETAIL E-COMMERCE" }
};

export const TimelineSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('exp-7'); // Saral Health Care expanded by default
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'gis' | 'python'>('all');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return exp.company === 'Saral Health Care' || exp.company === 'Sahitya Sangam' || exp.company === 'Shreeji Krupa Farsan';
    if (activeFilter === 'gis') return exp.company === 'JIO' || exp.company === 'Spectrarc Solution';
    if (activeFilter === 'python') return exp.company === 'Yogya Capital' || exp.company === 'Saral Health Care';
    return true;
  });

  return (
    <section id="experience" className="py-24 relative z-10 bg-background/60 border-t border-white/5 overflow-hidden">
      
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-accent-cyan" />
              <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase">
                03. CAREER CHRONOLOGY & ROLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Professional Milestones & Impact
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary font-mono mt-2">
              [CLICK ANY EXPERIENCE CARD TO EXPLORE RESPONSIBILITIES & TECH STACK]
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-surface-50/80 p-1.5 rounded-2xl border border-white/10">
            {(['all', 'web', 'gis', 'python'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase transition-all ${
                  activeFilter === filter
                    ? 'bg-accent text-white shadow-glow-sm'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {filter === 'all' ? 'ALL ROLES' : filter === 'web' ? 'WEB & HEALTHCARE' : filter === 'gis' ? 'GIS SPATIAL' : 'PYTHON & ETL'}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-12">
          
          {/* Vertical Laser Connecting Line */}
          <div className="absolute left-[15px] sm:left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent-cyan via-accent to-emerald-400/40 rounded-full" />

          <div className="space-y-8">
            {filteredExperiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isOngoing = exp.period.includes('Present');
              const meta = COMPANY_META[exp.company] || { icon: Building2, color: "from-accent to-accent-cyan", tag: "ENGINEERING" };
              const Icon = meta.icon;

              return (
                <div key={exp.id} className="relative group">
                  
                  {/* Timeline Node Point */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className={`absolute -left-[31px] sm:-left-[43px] top-4 w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 z-10 ${
                      isOngoing
                        ? 'bg-surface-100 border-emerald-400 shadow-glow-md ring-4 ring-emerald-400/20 scale-110'
                        : isExpanded
                        ? 'bg-surface-100 border-accent-cyan shadow-glow-sm'
                        : 'bg-surface-200 border-white/20 group-hover:border-accent group-hover:scale-105'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isOngoing ? 'text-emerald-400 animate-pulse' : 'text-accent-cyan'}`} />
                  </div>

                  {/* Experience Card */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className={`p-6 sm:p-8 rounded-3xl glass-panel-interactive border transition-all duration-300 cursor-pointer overflow-hidden relative ${
                      isExpanded
                        ? 'border-accent-cyan/60 bg-gradient-to-br from-surface-100/95 via-surface-50/90 to-surface-100/95 shadow-2xl shadow-accent-cyan/10'
                        : 'border-white/10 hover:border-white/25 bg-surface-50/70 hover:bg-surface-100/80'
                    }`}
                  >
                    
                    {/* Top Highlight Banner */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${meta.color} text-white text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase`}>
                          {meta.tag}
                        </span>
                        
                        <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5 ${
                          isOngoing
                            ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                            : 'bg-surface-200 border border-white/10 text-text-secondary'
                        }`}>
                          {isOngoing && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-text-muted text-xs font-mono">
                        <span>{isExpanded ? 'COLLAPSE' : 'EXPAND DETAILS'}</span>
                        <div className={`p-1.5 rounded-full bg-surface-200 border border-white/10 text-white transition-transform duration-300 ${
                          isExpanded ? 'rotate-90 text-accent-cyan' : ''
                        }`}>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Role & Company Main Header */}
                    <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs sm:text-sm font-semibold mt-1">
                          <Building2 className="w-4 h-4" />
                          <span>@ {exp.company}</span>
                        </div>
                      </div>

                      {/* Brief Bullet Preview when Collapsed */}
                      {!isExpanded && (
                        <p className="text-xs text-text-secondary font-sans line-clamp-1 max-w-md sm:text-right">
                          {exp.description[0]}
                        </p>
                      )}
                    </div>

                    {/* Expanded Content View */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-white/10 space-y-6 animate-in fade-in slide-in-from-top-3 duration-300">
                        
                        {/* Key Responsibilities */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            KEY RESPONSIBILITIES & ACCOMPLISHMENTS
                          </h4>
                          <div className="space-y-2.5">
                            {exp.description.map((desc, i) => (
                              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-surface-200/50 border border-white/5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                                  {desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack & Core Competencies */}
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
                            SKILLS & TECHNOLOGIES UTILIZED
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-lg bg-surface-200 border border-white/10 text-xs font-mono text-white shadow-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
