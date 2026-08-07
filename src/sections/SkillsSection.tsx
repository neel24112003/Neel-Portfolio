import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Code2, Globe2, Terminal, Brain, Wrench, Briefcase, Palette } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('web');

  const selectedCategory = SKILL_CATEGORIES.find(c => c.id === selectedCategoryId) || SKILL_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'web': return Globe2;
      case 'gis': return Cpu;
      case 'python': return Terminal;
      case 'ai': return Brain;
      case 'programming': return Code2;
      case 'operations': return Briefcase;
      case 'creative': return Palette;
      default: return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="w-8 h-[2px] bg-accent" />
          <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
            02. INTERACTIVE TECHNICAL NETWORK
          </span>
        </div>

        <div className="mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Multi-Disciplinary Skill Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary font-mono">
            [TAP ANY CATEGORY NODE TO INSPECT PROFICIENCIES]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left Interactive Network Graph Visualization */}
          <div className="lg:col-span-7 bg-surface-50/60 rounded-3xl p-4 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px]">
            
            {/* Background SVG Connection Lines (Desktop) */}
            <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-0">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const total = SKILL_CATEGORIES.length;
                const angle = (idx / total) * Math.PI * 2 - Math.PI / 2;
                const rx = 140;
                const ry = 140;
                const cx = 50;
                const cy = 50;
                const x2 = 50 + (rx / 350) * 100 * Math.cos(angle);
                const y2 = 50 + (ry / 350) * 100 * Math.sin(angle);
                const isSelected = cat.id === selectedCategoryId;

                return (
                  <line
                    key={cat.id}
                    x1={`${cx}%`}
                    y1={`${cy}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke={isSelected ? cat.color : '#334155'}
                    strokeWidth={isSelected ? '2.5' : '1'}
                    strokeDasharray={isSelected ? 'none' : '4 4'}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            {/* Central Node: NEEL */}
            <div className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-surface-100 border-2 border-accent flex flex-col items-center justify-center text-center shadow-glow-md cursor-pointer transform hover:scale-105 transition-all mb-4 sm:mb-0">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-accent-cyan tracking-widest">ENGINEER</span>
              <span className="text-lg sm:text-xl font-display font-extrabold text-white">NEEL</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping mt-1" />
            </div>

            {/* Satellite Category Nodes */}
            <div className="w-full max-w-lg grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 sm:mt-8 relative z-10">
              {SKILL_CATEGORIES.map((cat) => {
                const Icon = getCategoryIcon(cat.id);
                const isSelected = cat.id === selectedCategoryId;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`p-2.5 sm:p-3 rounded-2xl border transition-all text-left flex items-center gap-2.5 active:scale-95 ${
                      isSelected
                        ? 'bg-surface-100 border-accent shadow-glow-sm scale-102 ring-1 ring-accent'
                        : 'bg-surface-100/40 border-white/10 hover:border-white/30 hover:bg-surface-100/80'
                    }`}
                  >
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] sm:text-xs font-mono font-bold text-white leading-tight truncate">
                        {cat.name}
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-text-muted">
                        {cat.skills.length} Techs
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Selected Category Technology Detail Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 space-y-4 sm:space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-3">
                  {React.createElement(getCategoryIcon(selectedCategory.id), {
                    className: "w-5 h-5 sm:w-6 sm:h-6",
                    style: { color: selectedCategory.color }
                  })}
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                      {selectedCategory.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-mono text-text-muted">NODE INSPECTOR</p>
                  </div>
                </div>

                <span
                  className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold border"
                  style={{
                    backgroundColor: `${selectedCategory.color}15`,
                    borderColor: `${selectedCategory.color}40`,
                    color: selectedCategory.color,
                  }}
                >
                  ACTIVE
                </span>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                {selectedCategory.description}
              </p>

              {/* Technologies Pills */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider">
                  VERIFIED PROFICIENCIES
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-surface-100 border border-white/10 text-[11px] sm:text-xs font-mono font-medium text-white flex items-center gap-2 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedCategory.color }} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
