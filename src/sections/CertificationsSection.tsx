import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, Eye, X } from 'lucide-react';
import { CertificationItem } from '../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-accent-violet" />
          <span className="text-xs font-mono font-bold text-accent-violet tracking-widest uppercase">
            05. VERIFIED CERTIFICATIONS
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
              className={`p-6 rounded-3xl glass-panel-interactive space-y-4 relative overflow-hidden group flex flex-col justify-between ${
                cert.id === 'cert-1' || cert.id === 'cert-2' ? 'neon-border-ai' : 'neon-border-cyber'
              }`}
            >
              <div className="space-y-4">
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

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all shadow-glow-sm hover:scale-105"
                      style={{
                        backgroundColor: `${cert.badgeColor}18`,
                        borderColor: `${cert.badgeColor}60`,
                        color: cert.badgeColor === '#6366f1' ? '#a5b4fc' : cert.badgeColor === '#8b5cf6' ? '#c084fc' : cert.badgeColor === '#38bdf8' ? '#38bdf8' : '#34d399',
                        borderWidth: '1px',
                        boxShadow: `0 0 12px ${cert.badgeColor}35`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
              {cert.certificateImage && (
                <div className="pt-3 border-t border-white/10 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-4 py-2 rounded-xl bg-surface-100/90 hover:bg-surface-200 border text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-glow-sm hover:scale-105"
                    style={{
                      borderColor: `${cert.badgeColor}80`,
                      color: cert.badgeColor === '#6366f1' ? '#a5b4fc' : cert.badgeColor === '#8b5cf6' ? '#c084fc' : cert.badgeColor === '#38bdf8' ? '#38bdf8' : '#34d399',
                      boxShadow: `0 0 12px ${cert.badgeColor}30`,
                    }}
                  >
                    <Eye className="w-4 h-4" />
                    VIEW CERTIFICATE
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface-100/95 border rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] flex flex-col justify-between"
            style={{
              borderColor: `${selectedCert.badgeColor}80`,
              boxShadow: `0 0 35px ${selectedCert.badgeColor}40`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                  ISSUED BY: {selectedCert.issuer}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-3 py-1.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-text-muted hover:text-white border border-white/10 transition-all flex items-center gap-1.5 text-xs font-mono font-bold"
              >
                <X className="w-4 h-4 text-rose-400" />
                CLOSE
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center p-2 min-h-[300px]">
              <img
                src={selectedCert.certificateImage}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[68vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
