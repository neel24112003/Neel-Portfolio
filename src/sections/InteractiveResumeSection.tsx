import React, { useState } from 'react';
import { X, Download, Printer, FileText, Check, Copy, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Code, Globe2, Sparkles, Server } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';
import { generatePdfResume } from '../utils/generatePdfResume';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveResumeSection: React.FC<InteractiveResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    await generatePdfResume('resume-a4-document');
    setIsDownloading(false);
  };

  return (
    <div className="fixed inset-0 z-[130] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-5xl bg-surface-50 border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[94vh] animate-in fade-in zoom-in-95 neon-border-cyber">
        
        {/* Top Control Bar */}
        <div className="bg-surface-100/95 px-4 sm:px-6 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20 shadow-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent/20 border border-accent/40 text-accent-cyan shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-display font-bold text-white leading-tight">
                NEEL PATEL — EXECUTIVE RESUME PREVIEW
              </h3>
              <p className="text-[10px] sm:text-xs font-mono text-emerald-400">
                B.Tech Computer Science & Engineering (Cloud Computing)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded-xl bg-surface-200 hover:bg-surface-300 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5 transition-all"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-text-secondary" />
              <span className="hidden sm:inline">PRINT</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-glow-sm transition-all disabled:opacity-50"
              title="Download Neel Patel Resume in PDF format"
            >
              <Download className="w-4 h-4" />
              {isDownloading ? 'GENERATING SHARP PDF...' : 'DOWNLOAD RESUME (PDF)'}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-surface-200/80 hover:bg-surface-300 text-text-secondary hover:text-white transition-all ml-1"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive Document Container Area */}
        <div className="p-2 sm:p-6 overflow-y-auto flex-1 bg-[#05070c] text-white flex justify-center">
          
          {/* A4 Executive Resume Canvas (Fixed 794px width for exact A4 proportions and 0 blurriness) */}
          <div 
            id="resume-a4-document"
            className="w-[794px] min-h-[1123px] bg-[#0d111d] border-2 border-accent-cyan/40 rounded-2xl p-8 shadow-2xl text-white space-y-6 font-sans relative overflow-hidden shrink-0"
            style={{
              boxShadow: '0 0 40px rgba(56, 189, 248, 0.25), 0 0 80px rgba(16, 185, 129, 0.15)'
            }}
          >
            {/* Background Ambient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header Section: Headshot Photo + Name & Specialization */}
            <div className="border-b border-white/10 pb-5 flex items-center justify-between gap-6 relative z-10">
              
              {/* Profile Photo & Name Block */}
              <div className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <img
                    src="/profile.jpg"
                    alt="Neel Patel"
                    className="w-28 h-28 rounded-2xl border-2 border-accent-cyan object-cover shadow-2xl"
                    style={{
                      boxShadow: '0 0 20px rgba(56, 189, 248, 0.5), inset 0 0 10px rgba(56, 189, 248, 0.2)'
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0d111d] flex items-center justify-center text-[9px] font-bold text-black" title="Verified Professional">
                    ✓
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h1 className="text-3xl font-display font-extrabold text-white tracking-tight leading-none uppercase">
                    NEEL PATEL
                  </h1>

                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    <span className="text-sm font-display font-bold text-accent-cyan tracking-wide">
                      Computer Science Engineer
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-[11px] font-mono font-bold text-emerald-400">
                      Specialization in Cloud Computing
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary leading-normal font-sans">
                    Building Web Platforms, Cloud Infrastructure, Data Analytics Pipelines & GIS Systems.
                  </p>
                </div>
              </div>

              {/* Contact Information Matrix */}
              <div className="grid grid-cols-1 gap-1.5 font-mono text-xs shrink-0">
                <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-surface-100/90 border border-white/10 text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span className="text-white select-all">{PERSONAL_INFO.email}</span>
                  <button onClick={handleCopyEmail} className="hover:text-accent-cyan ml-auto print:hidden">
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-surface-100/90 border border-white/10 text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-white">{PERSONAL_INFO.phone}</span>
                </div>

                <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-surface-100/90 border border-white/10 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-accent-violet shrink-0" />
                  <span className="text-text-secondary">{PERSONAL_INFO.location}</span>
                </div>

                <a 
                  href="https://saral-health-care.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-accent/15 border border-accent/40 text-accent-cyan hover:underline text-[11px]"
                >
                  <Globe2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>saral-health-care.vercel.app</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </div>

            </div>

            {/* Executive Summary Statement */}
            <div className="p-3.5 rounded-2xl bg-surface-100/70 border border-white/10 space-y-1 relative z-10">
              <h3 className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                EXECUTIVE SUMMARY
              </h3>
              <p className="text-xs text-text-secondary font-sans leading-relaxed">
                Computer Science Engineer with a specialized focus in Cloud Computing, web application engineering, data analytics, GIS spatial modeling, and Python automation. Demonstrated expertise in developing production web applications (such as Saral Health Care), building interactive BI dashboards, executing geospatial data workflows, and engineering automated cloud ETL pipelines.
              </p>
            </div>

            {/* Balanced Two-Column Layout (4 Cols Sidebar, 8 Cols Main Body) */}
            <div className="grid grid-cols-12 gap-6 relative z-10">
              
              {/* Left Column (4 / 12 Cols = Sidebar) */}
              <div className="col-span-4 space-y-5 border-r border-white/10 pr-5">
                
                {/* Education */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    EDUCATION
                  </h3>
                  
                  {EDUCATION.map((edu) => (
                    <div key={edu.id} className="p-2.5 rounded-xl bg-surface-100/50 border border-white/10 space-y-0.5">
                      <div className="text-xs font-bold text-white font-display">{edu.institution}</div>
                      <div className="text-[10px] font-mono text-accent-cyan leading-tight">{edu.degree}</div>
                      <div className="text-[10px] font-mono text-text-muted">{edu.period}</div>
                    </div>
                  ))}
                </div>

                {/* Technical Skills Matrix */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-1">
                    <Code className="w-3.5 h-3.5 text-accent-cyan" />
                    SKILLS MATRIX
                  </h3>

                  <div className="space-y-2">
                    {SKILL_CATEGORIES.map((cat) => (
                      <div key={cat.id} className="p-2 rounded-xl bg-surface-100/40 border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono font-bold" style={{ color: cat.color }}>
                          {cat.name}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {cat.skills.map((s) => (
                            <span 
                              key={s} 
                              className="px-1.5 py-0.5 rounded bg-surface-200 text-[9px] font-mono text-text-secondary border border-white/5"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    CERTIFICATIONS
                  </h3>

                  <div className="space-y-1.5">
                    {CERTIFICATIONS.map((c) => (
                      <div key={c.id} className="p-2 rounded-xl bg-surface-100/40 border border-white/5 space-y-0.5">
                        <div className="text-xs font-bold text-white font-display">{c.title}</div>
                        <div className="text-[10px] font-mono text-emerald-400">{c.issuer}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-1.5">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-1">
                    <Globe2 className="w-3.5 h-3.5 text-accent-violet" />
                    LANGUAGES
                  </h3>

                  <div className="flex flex-wrap gap-1">
                    {PERSONAL_INFO.languages.map((lang) => (
                      <span key={lang} className="px-2 py-0.5 rounded-lg bg-surface-100 border border-white/10 text-[10px] font-mono text-white">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (8 / 12 Cols = Main Body) */}
              <div className="col-span-8 space-y-5">
                
                {/* Professional Experience Chronology */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-1">
                    <Briefcase className="w-3.5 h-3.5 text-accent-cyan" />
                    PROFESSIONAL EXPERIENCE CHRONOLOGY
                  </h3>

                  <div className="space-y-3.5">
                    {EXPERIENCES.map((exp) => (
                      <div key={exp.id} className="p-3 rounded-2xl bg-surface-100/50 border border-white/10 space-y-1.5">
                        
                        <div className="flex items-start justify-between gap-1 border-b border-white/5 pb-1">
                          <div>
                            <div className="text-xs font-display font-bold text-white">{exp.role}</div>
                            <div className="text-[11px] font-mono text-accent-cyan">@ {exp.company}</div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-surface-200 text-[10px] font-mono text-emerald-400 font-bold border border-emerald-500/30 shrink-0">
                            {exp.period}
                          </span>
                        </div>

                        <ul className="space-y-0.5 pl-3.5 list-disc text-[11px] text-text-secondary font-sans leading-relaxed">
                          {exp.description.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {exp.skills.map((s) => (
                            <span key={s} className="px-1.5 py-0.5 rounded bg-surface-200 text-[9px] font-mono text-text-muted border border-white/5">
                              {s}
                            </span>
                          ))}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Projects */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-1">
                    <Server className="w-3.5 h-3.5 text-emerald-400" />
                    FEATURED PROJECTS
                  </h3>

                  <div className="space-y-3">
                    {PROJECTS.map((proj) => (
                      <div key={proj.id} className="p-3 rounded-2xl bg-surface-100/50 border border-white/10 space-y-1">
                        <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-1">
                          <span className="text-xs font-display font-bold text-white">{proj.title}</span>
                          {proj.website && (
                            <a href={proj.website} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-accent-cyan flex items-center gap-1 hover:underline">
                              LIVE SITE <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        <p className="text-[11px] text-text-secondary leading-relaxed font-sans">{proj.description}</p>

                        <div className="flex flex-wrap gap-1">
                          {proj.technologies.map((t) => (
                            <span key={t} className="px-1.5 py-0.5 rounded bg-surface-200 text-[9px] font-mono text-text-muted">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Document Footer */}
            <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[10px] font-mono text-text-muted relative z-10">
              <span>Neel Patel — Computer Science Engineer (Specialization in Cloud Computing)</span>
              <span>Portfolio: https://saral-health-care.vercel.app</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
