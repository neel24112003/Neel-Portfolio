import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-20 relative z-10 bg-background/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-accent-cyan" />
          <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase">
            07. EDUCATION & ACADEMIC BACKGROUND
          </span>
        </div>

        <div className="mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Academic Degree & Schooling
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.id}
              className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4 relative"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-surface-200 text-accent-cyan text-xs font-mono font-bold">
                  {edu.period}
                </span>
                <GraduationCap className="w-5 h-5 text-accent-cyan" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-display font-bold text-white">
                  {edu.institution}
                </h3>
                <p className="text-xs font-mono text-emerald-400 font-medium">
                  {edu.degree}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
