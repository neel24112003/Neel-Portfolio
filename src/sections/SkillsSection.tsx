import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Code2, Globe2, Terminal, Brain, Database, Wrench, Sparkles, Briefcase, Palette } from 'lucide-react';

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
    <section id="skills" className="py-24 relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-accent" />
          <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
            02. INTERACTIVE TECHNICAL NETWORK
          </span>
        </div>

        <div className="mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Multi-Disciplinary Skill Ecosystem
          </h2>
          <p className="text-sm text-text-secondary font-mono">
            [HOVER OR CLICK CATEGORY NODES TO INSPECT TECHNOLOGIES]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Interactive Network Graph Visualization */}
          <div className="lg:col-span-7 bg-surface-50/60 rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col items-center justify-center min-h-[420px]">
            
            {/* Background SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const total = SKILL_CATEGORIES.length;
                const angle = (idx / total) * Math.PI * 2 - Math.PI / 2;
                const rx = 140;
                const ry = 140;
                const cx = 50; // percentage
                const cy = 50; // percentage
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
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-surface-100 border-2 border-accent flex flex-col items-center justify-center text-center shadow-glow-md cursor-pointer transform hover:scale-105 transition-all">
              <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest">ENGINEER</span>
              <span className="text-xl font-display font-extrabold text-white">NEEL</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mt-1" />
            </div>

            {/* Orbiting Satellite Category Nodes */}
            <div className="w-full max-w-lg grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 relative z-10">
              {SKILL_CATEGORIES.map((cat) => {
                const Icon = getCategoryIcon(cat.id);
                const isSelected = cat.id === selectedCategoryId;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    onMouseEnter={() => setSelectedCategoryId(cat.id)}
                    className={`p-3 rounded-2xl border transition-all text-left flex items-center gap-3 ${
                      isSelected
                        ? 'bg-surface-100 border-accent shadow-glow-sm scale-105 ring-1 ring-accent'
                        : 'bg-surface-100/40 border-white/10 hover:border-white/30 hover:bg-surface-100/80'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white leading-tight">
                        {cat.name}
                      </div>
                      <div className="text-[10px] font-mono text-text-muted">
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
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  {React.createElement(getCategoryIcon(selectedCategory.id), {
                    className: "w-6 h-6",
                    style: { color: selectedCategory.color }
                  })}
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {selectedCategory.name}
                    </h3>
                    <p className="text-xs font-mono text-text-muted">NODE INSPECTOR</p>
                  </div>
                </div>

                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold border"
                  style={{
                    backgroundColor: `${selectedCategory.color}15`,
                    borderColor: `${selectedCategory.color}40`,
                    color: selectedCategory.color,
                  }}
                >
                  ACTIVE
                </span>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                {selectedCategory.description}
              </p>

              {/* Technologies Pills */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  VERIFIED PROFICIENCIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 rounded-xl bg-surface-100 border border-white/10 text-xs font-mono font-medium text-white flex items-center gap-2 shadow-sm transition-all hover:border-accent"
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
