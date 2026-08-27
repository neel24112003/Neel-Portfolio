import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, ChevronRight, Building2, CheckCircle2, 
  Activity, BookOpen, Users, Globe2, Terminal, ShoppingCart, 
  Sparkles, ExternalLink, Maximize2, Minimize2, Award
} from 'lucide-react';

const COMPANY_META: Record<string, { icon: React.ElementType; color: string; tag: string; link?: string; linkText?: string; links?: { name: string; url: string }[]; neonClass: string }> = {
  "Freelance Projects": { 
    icon: Activity, 
    color: "from-emerald-500 to-cyan-500", 
    tag: "FREELANCE WEB DEVELOPER PLATFORMS",
    links: [
      { name: "Rishabh Eye Hospital", url: "https://rishabh-eye-hospital.vercel.app" },
      { name: "Saral Health Care", url: "https://saral-health-care.vercel.app" },
      { name: "Sahitya Sangam", url: "https://sahityasangam.net/" }
    ],
    neonClass: "neon-border-web"
  },
  "Saral Health Care": { 
    icon: Activity, 
    color: "from-emerald-500 to-cyan-500", 
    tag: "HEALTHCARE WEB PLATFORM",
    link: "https://saral-health-care.vercel.app",
    linkText: "VISIT WEBSITE",
    neonClass: "neon-border-web"
  },
  "Sahitya Sangam": { 
    icon: BookOpen, 
    color: "from-sky-500 to-blue-600", 
    tag: "WEB & E-COMMERCE APP",
    link: "https://sahityasangam.net/",
    linkText: "VISIT WEBSITE",
    neonClass: "neon-border-web"
  },
  "Guide Placement": { 
    icon: Users, 
    color: "from-pink-500 to-rose-500", 
    tag: "RECRUITMENT OPERATIONS",
    neonClass: "neon-border-ops"
  },
  "JIO": { 
    icon: Globe2, 
    color: "from-indigo-500 to-violet-600", 
    tag: "GIS & INFRASTRUCTURE MAPPING",
    neonClass: "neon-border-gis"
  },
  "Yogya Capital": { 
    icon: Terminal, 
    color: "from-amber-500 to-orange-500", 
    tag: "PYTHON & ETL PIPELINES",
    neonClass: "neon-border-python"
  },
  "Spectrarc Solution": { 
    icon: Globe2, 
    color: "from-teal-500 to-emerald-600", 
    tag: "SATELLITE REMOTE SENSING",
    neonClass: "neon-border-gis"
  },
  "Shreeji Krupa Farsan": { 
    icon: ShoppingCart, 
    color: "from-amber-400 to-yellow-500", 
    tag: "RETAIL E-COMMERCE",
    neonClass: "neon-border-web"
  }
};

export const TimelineSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>(['exp-freelance']); // Freelance Projects open by default
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'gis' | 'python'>('all');

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return exp.company === 'Freelance Projects' || exp.company === 'Saral Health Care' || exp.company === 'Sahitya Sangam' || exp.company === 'Shreeji Krupa Farsan';
    if (activeFilter === 'gis') return exp.company === 'JIO' || exp.company === 'Spectrarc Solution';
    if (activeFilter === 'python') return exp.company === 'Yogya Capital';
    return true;
  });

  const allExpanded = filteredExperiences.every(exp => expandedIds.includes(exp.id));

  const toggleExpandAll = () => {
    if (allExpanded) {
      setExpandedIds([]);
    } else {
      setExpandedIds(filteredExperiences.map(exp => exp.id));
    }
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-background/60 border-t border-white/5 overflow-hidden">
      
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-accent-cyan" />
              <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase">
                02. CAREER CHRONOLOGY & ROLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Professional Timeline & Impact
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary font-mono mt-2">
              [CLICK ANY EXPERIENCE CARD TO EXPLORE ACCOMPLISHMENTS & TECH STACK]
            </p>
          </div>

          {/* Action Bar: Filters + Expand All Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-surface-100/90 p-1.5 rounded-2xl border border-accent-cyan/40 shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:border-accent-cyan/70 transition-all">
              {(['all', 'web', 'gis', 'python'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold uppercase transition-all ${
                    activeFilter === filter
                      ? 'bg-accent text-white shadow-[0_0_12px_rgba(56,189,248,0.4)] border border-accent-cyan/60'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {filter === 'all' ? 'ALL ROLES' : filter === 'web' ? 'WEB & HEALTH' : filter === 'gis' ? 'GIS SPATIAL' : 'PYTHON & ETL'}
                </button>
              ))}
            </div>

            {/* Expand / Collapse All Toggle Button */}
            <button
              onClick={toggleExpandAll}
              className="px-3.5 py-2 rounded-2xl bg-surface-100/90 hover:bg-surface-200 border border-emerald-500/40 text-xs font-mono text-white flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400"
              title={allExpanded ? "Collapse All Cards" : "Expand All Cards"}
            >
              {allExpanded ? <Minimize2 className="w-3.5 h-3.5 text-accent-cyan" /> : <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{allExpanded ? "COLLAPSE ALL" : "EXPAND ALL"}</span>
            </button>

          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
          <div className="p-3.5 rounded-2xl bg-surface-100/60 neon-border-cyber flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-accent-cyan shrink-0" />
            <div>
              <div className="text-base font-display font-bold text-white leading-tight">7 ROLES</div>
              <div className="text-[10px] font-mono text-text-muted">CHRONOLOGY</div>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-100/60 neon-border-web flex items-center gap-3">
            <Activity className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-base font-display font-bold text-emerald-400 leading-tight">ACTIVE ROLE</div>
              <div className="text-[10px] font-mono text-text-muted">SARAL HEALTH CARE</div>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-100/60 neon-border-gis flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <div className="text-base font-display font-bold text-sky-400 leading-tight">GIS & WEB</div>
              <div className="text-[10px] font-mono text-text-muted">FULL STACK & SPATIAL</div>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-100/60 neon-border-python flex items-center gap-3">
            <Terminal className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-base font-display font-bold text-amber-400 leading-tight">PYTHON ETL</div>
              <div className="text-[10px] font-mono text-text-muted">DATA AUTOMATION</div>
            </div>
          </div>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative pl-6 sm:pl-10 max-w-5xl">
          
          {/* Vertical Laser Connecting Line */}
          <div className="absolute left-[15px] sm:left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent-cyan via-accent to-emerald-400/40 rounded-full" />

          <div className="space-y-8">
            {filteredExperiences.map((exp) => {
              const isExpanded = expandedIds.includes(exp.id);
              const isOngoing = exp.period.includes('Present');
              const meta = COMPANY_META[exp.company] || { icon: Building2, color: "from-accent to-accent-cyan", tag: "ENGINEERING" };
              const Icon = meta.icon;

              return (
                <div key={exp.id} className="relative group">
                  
                  {/* Timeline Node Point on Left Line */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className={`absolute -left-[31px] sm:-left-[39px] top-5 w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 z-10 ${
                      isOngoing
                        ? 'bg-surface-100 border-emerald-400 shadow-glow-md ring-4 ring-emerald-400/20 scale-110'
                        : isExpanded
                        ? 'bg-surface-100 border-accent-cyan shadow-glow-sm'
                        : 'bg-surface-200 border-white/20 group-hover:border-accent group-hover:scale-105'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isOngoing ? 'text-emerald-400 animate-pulse' : 'text-accent-cyan'}`} />
                  </div>

                  {/* Experience Glass Card */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className={`p-6 sm:p-8 rounded-3xl glass-panel-interactive transition-all duration-300 cursor-pointer overflow-hidden relative ${meta.neonClass} ${
                      isExpanded
                        ? 'bg-gradient-to-br from-surface-100/95 via-surface-50/90 to-surface-100/95 shadow-2xl'
                        : 'bg-surface-50/70 hover:bg-surface-100/80'
                    }`}
                  >
                    
                    {/* Top Highlight Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${meta.color} text-white text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-sm`}>
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
                        <span className="hidden sm:inline">{isExpanded ? 'LESS DETAILS' : 'MORE DETAILS'}</span>
                        <div className={`p-1.5 rounded-full bg-surface-200 border border-white/10 text-white transition-transform duration-300 ${
                          isExpanded ? 'rotate-90 text-accent-cyan' : ''
                        }`}>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Role & Company Header */}
                    <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs sm:text-sm font-semibold mt-1">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Summary line when collapsed */}
                      {!isExpanded && (
                        <p className="text-xs text-text-secondary font-sans line-clamp-1 max-w-lg sm:text-right">
                          {exp.description[0]}
                        </p>
                      )}
                    </div>

                    {/* Expanded Content View */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-white/10 space-y-6 animate-in fade-in slide-in-from-top-3 duration-300">
                        
                        {/* Direct Live Website / Action Buttons if available */}
                        {meta.links ? (
                          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-accent/10 border border-accent/20">
                            <div className="text-xs font-mono text-accent-cyan font-semibold flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-emerald-400" />
                              <span>LIVE PRODUCTION PLATFORMS</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {meta.links.map((l) => (
                                <a
                                  key={l.name}
                                  href={l.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="px-3 py-1.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-glow-sm transition-all"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                  {l.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : meta.link ? (
                          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-accent/10 border border-accent/20">
                            <div className="text-xs font-mono text-accent-cyan font-semibold flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-emerald-400" />
                              <span>LIVE PRODUCTION PLATFORM ACCESSIBLE</span>
                            </div>
                            <a
                              href={meta.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-glow-sm transition-all"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              {meta.linkText || "VISIT WEBSITE"}
                            </a>
                          </div>
                        ) : null}

                        {/* Key Accomplishments */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider flex items-center gap-2">
                            <Award className="w-3.5 h-3.5" />
                            KEY RESPONSIBILITIES & DELIVERABLES
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

                        {/* Tech Stack Pills */}
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
                            SKILLS & TOOLING USED
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
