import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-accent-violet" />
          <span className="text-xs font-mono font-bold text-accent-violet tracking-widest uppercase">
            06. VERIFIED CERTIFICATIONS
          </span>
        </div>

        <div className="mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academic & Professional Credentials
          </h2>
          <p className="text-sm text-text-secondary font-mono">
            [CERTIFIED IN MACHINE LEARNING, PROMPT ENGINEERING, DIGITAL FORENSICS & ESG]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 rounded-3xl glass-panel-interactive space-y-4 relative overflow-hidden group ${
                cert.id === 'cert-1' || cert.id === 'cert-2' ? 'neon-border-ai' : 'neon-border-cyber'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${cert.badgeColor}15`,
                      borderColor: `${cert.badgeColor}40`,
                      color: cert.badgeColor,
                    }}
                  >
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                      ISSUED BY: {cert.issuer}
                    </div>
                  </div>
                </div>

                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-surface-100 border border-white/10 text-[11px] font-mono text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
