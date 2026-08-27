import React from 'react';
import { BEYOND_CODE_CATEGORIES } from '../data/portfolioData';
import { Brain, Users, Palette, CheckCircle2, Cpu, Wand2 } from 'lucide-react';

export const BeyondCodeSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return Brain;
      case 'Sparkles': return Wand2;
      case 'Users': return Users;
      case 'Palette': return Palette;
      default: return Cpu;
    }
  };

  return (
    <section id="beyond-code" className="py-24 relative z-10 bg-background/60 border-t border-white/5 overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-pink-500" />
            <span className="text-xs font-mono font-bold text-pink-400 tracking-widest uppercase">
              07. BEYOND CODE: AI, CREATIVE & OPERATIONAL ECOSYSTEM
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Beyond Code: Specialized Competencies & Tools
            </h2>
            <p className="text-sm sm:text-base text-text-secondary font-sans max-w-3xl leading-relaxed">
              Comprehensive proficiency across Large Language Models, Synthetic AI Generation, Human Capital & Recruitment Logistics, and Digital Media Production.
            </p>
          </div>
        </div>

        {/* 4 Feature Sub-Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BEYOND_CODE_CATEGORIES.map((cat) => {
            const IconComponent = getCategoryIcon(cat.icon);

            return (
              <div 
                key={cat.id} 
                className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between space-y-6 ${cat.cardClass}`}
              >
                <div className="space-y-4">
                  {/* Category Header Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2" style={{ color: cat.color }}>
                      <IconComponent className="w-4 h-4" style={{ color: cat.color }} />
                      {cat.category}
                    </span>
                    {cat.companyTag && (
                      <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold">
                        {cat.companyTag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed font-sans">
                      {cat.description}
                    </p>
                  </div>

                  {/* Tools & Platforms Pill Badges */}
                  <div className="pt-2 space-y-2">
                    <div className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider">
                      SPECIALIZED PLATFORMS & ENGINES:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((t) => (
                        <span 
                          key={t} 
                          className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${cat.badgeColor}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Highlights / Responsibilities List */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: cat.color }} />
                    VERIFIED COMPETENCIES & HIGHLIGHTS
                  </div>

                  <div className="space-y-2">
                    {(cat.highlights || cat.responsibilities || []).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-100/90 border border-white/5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: cat.color }} />
                        <span className="text-xs text-text-secondary font-sans leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
