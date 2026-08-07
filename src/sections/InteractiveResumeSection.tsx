import React, { useState } from 'react';
import { X, Download, Printer, FileText, Check, Copy, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Code, Globe2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveResumeSection: React.FC<InteractiveResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'projects' | 'skills' | 'certifications'>('all');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[130] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-5xl bg-surface-50 border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95">
        
        {/* Top Control Bar */}
        <div className="bg-surface-100/90 px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent/20 border border-accent/40 text-accent-cyan">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-white leading-tight">
                NEEL PATEL — INTERACTIVE RESUME PREVIEW
              </h3>
              <p className="text-xs font-mono text-text-muted">
                B.Tech Computer Science & Engineering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-surface-200 hover:bg-surface-300 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5 transition-all"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-text-secondary" />
              <span className="hidden sm:inline">PRINT</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Inquiry%20-%20Neel%20Patel`}
              className="px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-glow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD RESUME
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-surface-200/80 hover:bg-surface-300 text-text-secondary hover:text-white transition-all ml-2"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-6 py-3 bg-surface-100/40 border-b border-white/5 flex flex-wrap gap-2">
          {(['all', 'experience', 'projects', 'skills', 'certifications'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                activeTab === tab
                  ? 'bg-accent/20 text-accent-cyan border border-accent/40 font-semibold'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 flex-1 bg-surface-50 text-text-primary print:bg-white print:text-black">
          
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                NEEL PATEL
              </h1>
              <p className="text-sm font-mono text-accent-cyan font-semibold">
                Computer Science & Engineering Graduate
              </p>
              <p className="text-xs text-text-secondary max-w-2xl font-sans">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="space-y-2 font-mono text-xs text-text-secondary shrink-0">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-white">{PERSONAL_INFO.email}</span>
                <button onClick={handleCopyEmail} className="hover:text-accent-cyan">
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-violet" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Section: Experience */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="space-y-6">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2">
                <Briefcase className="w-4 h-4 text-accent-cyan" />
                PROFESSIONAL EXPERIENCE
              </h3>

              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-display font-bold text-white">{exp.role}</span>
                        <span className="text-xs font-mono text-accent-cyan">@ {exp.company}</span>
                      </div>
                      <span className="text-xs font-mono text-text-muted">{exp.period}</span>
                    </div>

                    <ul className="space-y-1 pl-4 list-disc text-xs text-text-secondary font-sans leading-relaxed">
                      {exp.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-surface-100 border border-white/10 text-[10px] font-mono text-text-muted">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Projects */}
          {(activeTab === 'all' || activeTab === 'projects') && (
            <div className="space-y-6">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2">
                <Code className="w-4 h-4 text-emerald-400" />
                KEY PROJECTS
              </h3>

              <div className="space-y-6">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-display font-bold text-white">{proj.title}</span>
                        <span className="text-xs font-mono text-text-muted">({proj.category})</span>
                      </div>
                      {proj.website && (
                        <a href={proj.website} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent-cyan flex items-center gap-1">
                          LIVE SITE <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed font-sans">{proj.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-surface-100 border border-white/10 text-[10px] font-mono text-text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Skills */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2">
                <Globe2 className="w-4 h-4 text-accent" />
                TECHNICAL SKILLS MATRIX
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 space-y-1.5">
                    <span className="text-xs font-mono font-bold text-white">{cat.name}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-surface-200 text-[10px] font-mono text-text-secondary">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Certifications & Education */}
          {(activeTab === 'all' || activeTab === 'certifications') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  CERTIFICATIONS
                </h3>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.id} className="p-3 rounded-xl bg-surface-100/40 border border-white/5">
                      <div className="text-xs font-bold text-white font-display">{c.title}</div>
                      <div className="text-[11px] font-mono text-emerald-400">{c.issuer}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2">
                  <GraduationCap className="w-4 h-4 text-accent-violet" />
                  EDUCATION
                </h3>
                <div className="space-y-3">
                  {EDUCATION.map((e) => (
                    <div key={e.id} className="p-3 rounded-xl bg-surface-100/40 border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white font-display">{e.institution}</div>
                        <div className="text-[11px] font-mono text-text-muted">{e.degree}</div>
                      </div>
                      <span className="text-[10px] font-mono text-accent-cyan">{e.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
