import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Code2, Globe2, Terminal, Brain, Wrench, Briefcase, Palette, BarChart3 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('web');

  const selectedCategory = SKILL_CATEGORIES.find(c => c.id === selectedCategoryId) || SKILL_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'web': return Globe2;
      case 'analytics': return BarChart3;
      case 'gis': return Cpu;
      case 'python': return Terminal;
      case 'ai': return Brain;
      case 'programming': return Code2;
      case 'operations': return Briefcase;
      case 'creative': return Palette;
      default: return Wrench;
    }
  };

  const leftCategories = SKILL_CATEGORIES.slice(0, 4);
  const rightCategories = SKILL_CATEGORIES.slice(4, 8);

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
            [TAP ANY COLOR-CODED CATEGORY NODE TO INSPECT PROFICIENCIES]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left Interactive Symmetrical Radar Visualization */}
          <div className="lg:col-span-7 bg-surface-50/80 rounded-3xl p-4 sm:p-6 border-2 border-accent/40 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between min-h-[460px] sm:min-h-[500px] neon-border-cyber shadow-2xl gap-4">
            
            {/* Background SVG Laser Beam Connecting Lines (Desktop) */}
            <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Left 4 Connecting Lines */}
              {leftCategories.map((cat, idx) => {
                const isSelected = cat.id === selectedCategoryId;
                const y2Pos = 12.5 + idx * 25; // 12.5%, 37.5%, 62.5%, 87.5%
                return (
                  <line
                    key={cat.id}
                    x1="50%"
                    y1="50%"
                    x2="24%"
                    y2={`${y2Pos}%`}
                    stroke={cat.color}
                    strokeWidth={isSelected ? '3' : '1.5'}
                    strokeDasharray={isSelected ? 'none' : '4 4'}
                    strokeOpacity={isSelected ? '1' : '0.45'}
                    className="transition-all duration-500"
                  />
                );
              })}

              {/* Right 4 Connecting Lines */}
              {rightCategories.map((cat, idx) => {
                const isSelected = cat.id === selectedCategoryId;
                const y2Pos = 12.5 + idx * 25; // 12.5%, 37.5%, 62.5%, 87.5%
                return (
                  <line
                    key={cat.id}
                    x1="50%"
                    y1="50%"
                    x2="76%"
                    y2={`${y2Pos}%`}
                    stroke={cat.color}
                    strokeWidth={isSelected ? '3' : '1.5'}
                    strokeDasharray={isSelected ? 'none' : '4 4'}
                    strokeOpacity={isSelected ? '1' : '0.45'}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            {/* Left Tower Nodes (4 Categories) */}
            <div className="w-full sm:w-[42%] flex flex-col gap-3 relative z-10">
              {leftCategories.map((cat) => {
                const Icon = getCategoryIcon(cat.id);
                const isSelected = cat.id === selectedCategoryId;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`p-3 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-3 active:scale-95 w-full ${
                      isSelected
                        ? 'scale-105 font-bold z-20 shadow-2xl'
                        : 'hover:scale-102 opacity-90 hover:opacity-100'
                    }`}
                    style={{
                      borderColor: cat.color,
                      backgroundColor: isSelected ? `${cat.color}25` : `${cat.color}12`,
                      boxShadow: isSelected
                        ? `0 0 25px ${cat.color}90, 0 0 45px ${cat.color}40, inset 0 0 12px ${cat.color}30`
                        : `0 0 14px ${cat.color}45, inset 0 0 6px ${cat.color}15`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{ 
                        backgroundColor: `${cat.color}30`, 
                        borderColor: `${cat.color}80`,
                        color: cat.color 
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate w-full min-w-0">
                      <div 
                        className="text-xs font-mono font-bold leading-tight truncate"
                        style={{ color: isSelected ? '#ffffff' : cat.color }}
                      >
                        {cat.name}
                      </div>
                      <div className="text-[10px] font-mono text-text-muted">
                        {cat.skills.length} Tech Stack Items
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Central Node: ENGINEER NEEL CORE HUB */}
            <div className="w-full sm:w-[16%] flex items-center justify-center py-4 sm:py-0 relative z-10">
              <div 
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-surface-100/95 border-2 border-accent-cyan flex flex-col items-center justify-center text-center cursor-pointer transform hover:scale-110 transition-all duration-300 relative shadow-2xl"
                style={{
                  boxShadow: '0 0 35px rgba(56, 189, 248, 0.7), 0 0 60px rgba(99, 102, 241, 0.4), inset 0 0 18px rgba(56, 189, 248, 0.4)',
                  borderColor: '#38bdf8'
                }}
              >
                {/* Radar Ring Pulses */}
                <div className="absolute inset-0 rounded-full border border-accent-cyan/40 animate-ping pointer-events-none" />
                <div className="absolute -inset-2 rounded-full border border-accent/20 animate-pulse pointer-events-none" />

                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-accent-cyan tracking-widest uppercase">CORE HUB</span>
                <span className="text-base sm:text-lg font-display font-extrabold text-white leading-tight">NEEL</span>
                <span className="text-[9px] font-mono text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>
            </div>

            {/* Right Tower Nodes (4 Categories) */}
            <div className="w-full sm:w-[42%] flex flex-col gap-3 relative z-10">
              {rightCategories.map((cat) => {
                const Icon = getCategoryIcon(cat.id);
                const isSelected = cat.id === selectedCategoryId;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`p-3 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-3 active:scale-95 w-full ${
                      isSelected
                        ? 'scale-105 font-bold z-20 shadow-2xl'
                        : 'hover:scale-102 opacity-90 hover:opacity-100'
                    }`}
                    style={{
                      borderColor: cat.color,
                      backgroundColor: isSelected ? `${cat.color}25` : `${cat.color}12`,
                      boxShadow: isSelected
                        ? `0 0 25px ${cat.color}90, 0 0 45px ${cat.color}40, inset 0 0 12px ${cat.color}30`
                        : `0 0 14px ${cat.color}45, inset 0 0 6px ${cat.color}15`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{ 
                        backgroundColor: `${cat.color}30`, 
                        borderColor: `${cat.color}80`,
                        color: cat.color 
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate w-full min-w-0">
                      <div 
                        className="text-xs font-mono font-bold leading-tight truncate"
                        style={{ color: isSelected ? '#ffffff' : cat.color }}
                      >
                        {cat.name}
                      </div>
                      <div className="text-[10px] font-mono text-text-muted">
                        {cat.skills.length} Tech Stack Items
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Selected Category Technology Detail Card */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="p-5 sm:p-8 rounded-3xl glass-panel space-y-4 sm:space-y-6 transition-all duration-500 border-2"
              style={{
                borderColor: selectedCategory.color,
                boxShadow: `0 0 35px ${selectedCategory.color}70, inset 0 0 15px ${selectedCategory.color}25`,
                backgroundColor: 'rgba(17, 21, 34, 0.85)'
              }}
            >
              
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
                    backgroundColor: `${selectedCategory.color}20`,
                    borderColor: selectedCategory.color,
                    color: selectedCategory.color,
                    boxShadow: `0 0 12px ${selectedCategory.color}50`
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
                      className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-surface-100 border text-[11px] sm:text-xs font-mono font-medium text-white flex items-center gap-2 shadow-sm"
                      style={{
                        borderColor: `${selectedCategory.color}60`,
                        boxShadow: `0 0 8px ${selectedCategory.color}30`
                      }}
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
