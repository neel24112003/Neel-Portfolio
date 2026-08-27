import React, { useState } from 'react';
import { X, FileText, Check, Copy, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Code, Globe2, Sparkles, Server, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveResumeSection: React.FC<InteractiveResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[130] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-6xl bg-[#07090e] border-2 border-accent-cyan/50 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 neon-border-cyber">
        
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
              onClick={onClose}
              className="p-2 rounded-xl bg-surface-200/80 hover:bg-surface-300 text-text-secondary hover:text-white transition-all ml-1"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive Document Container Area */}
        <div className="p-3 sm:p-8 overflow-y-auto flex-1 bg-[#05070c] text-white w-full">
          
          {/* Main Printable Document Canvas (Single continuous executive layout matching screen 1-to-1) */}
          <div 
            id="resume-a4-document"
            className="w-full max-w-5xl mx-auto bg-[#0d111d] border-2 border-accent-cyan/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-white space-y-7 font-sans relative overflow-hidden"
            style={{
              boxShadow: '0 0 50px rgba(56, 189, 248, 0.3), inset 0 0 25px rgba(16, 185, 129, 0.15)'
            }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header Block: Profile Photo, Name, Specialization & Contact Information Matrix */}
            <div className="border-b border-white/15 pb-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative z-10">
              
              {/* Profile Photo & Titles */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left w-full md:w-auto">
                <div className="relative shrink-0">
                  <img
                    src="/profile.jpg"
                    alt="Neel Patel"
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl border-2 border-accent-cyan object-cover shadow-2xl"
                    style={{
                      boxShadow: '0 0 25px rgba(56, 189, 248, 0.5), inset 0 0 10px rgba(56, 189, 248, 0.2)'
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#0d111d] flex items-center justify-center text-xs font-bold text-black shadow-glow-sm" title="Verified Professional">
                    ✓
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-none uppercase">
                    NEEL PATEL
                  </h1>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-base sm:text-xl font-display font-bold text-accent-cyan tracking-wide">
                      Computer Science Engineer
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/60 text-xs font-mono font-bold text-emerald-300 shadow-glow-sm">
                      Specialization in Cloud Computing
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 font-mono font-semibold leading-relaxed max-w-2xl">
                    {PERSONAL_INFO.headline}
                  </p>
                </div>
              </div>

              {/* Contact Information Matrix Cards */}
              <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 font-mono text-xs text-slate-200 shrink-0">
                <div className="flex items-center gap-3 p-2.5 px-3.5 rounded-xl bg-surface-100/90 border border-accent-cyan/50 shadow-glow-sm text-xs font-semibold">
                  <Mail className="w-4 h-4 text-accent-cyan shrink-0" />
                  <span className="text-white select-all">{PERSONAL_INFO.email}</span>
                  <button onClick={handleCopyEmail} className="hover:text-accent-cyan ml-auto print:hidden">
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-2.5 px-3.5 rounded-xl bg-surface-100/90 border border-emerald-500/50 shadow-glow-sm text-xs font-semibold">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-white">{PERSONAL_INFO.phone}</span>
                </div>

                <div className="flex items-center gap-3 p-2.5 px-3.5 rounded-xl bg-surface-100/90 border border-accent-violet/50 shadow-glow-sm text-xs font-semibold">
                  <MapPin className="w-4 h-4 text-accent-violet shrink-0" />
                  <span className="text-slate-300">{PERSONAL_INFO.location}</span>
                </div>

                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 px-3.5 rounded-xl bg-sky-500/10 border border-sky-400/60 text-sky-300 hover:text-white transition-all text-xs font-semibold shadow-glow-sm"
                >
                  <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">linkedin.com/in/neel-patel-8834b936b</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-sky-400 shrink-0" />
                </a>

                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 px-3.5 rounded-xl bg-purple-500/10 border border-purple-400/60 text-purple-300 hover:text-white transition-all text-xs font-semibold shadow-glow-sm"
                >
                  <Github className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate">github.com/neel24112003</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-purple-400 shrink-0" />
                </a>
              </div>

            </div>

            {/* Executive Summary Statement Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-100/90 border border-accent-cyan/50 shadow-glow-sm space-y-2 relative z-10">
              <h3 className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                EXECUTIVE SUMMARY
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* 2-Column Sidebar & Main Content Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
              
              {/* Left Sidebar (4 Columns out of 12) */}
              <div className="md:col-span-4 space-y-6 border-b md:border-b-0 md:border-r border-white/15 pb-6 md:pb-0 md:pr-6">
                
                {/* Education Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/15 pb-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    EDUCATION
                  </h3>
                  
                  {EDUCATION.map((edu) => (
                    <div key={edu.id} className="p-3.5 rounded-xl bg-surface-100/80 border border-emerald-500/50 shadow-glow-sm space-y-1">
                      <div className="text-xs sm:text-sm font-bold text-white font-display">{edu.institution}</div>
                      <div className="text-xs font-mono text-accent-cyan font-bold leading-tight">{edu.degree}</div>
                      <div className="text-[11px] font-mono text-slate-400">{edu.period}</div>
                    </div>
                  ))}
                </div>

                {/* Technical Skills Matrix */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/15 pb-2">
                    <Code className="w-4 h-4 text-accent-cyan" />
                    SKILLS MATRIX
                  </h3>

                  <div className="space-y-3">
                    {SKILL_CATEGORIES.map((cat) => (
                      <div key={cat.id} className="p-3 rounded-xl bg-surface-100/80 border border-accent-cyan/40 shadow-glow-sm space-y-2">
                        <span className="text-xs font-mono font-bold" style={{ color: cat.color }}>
                          {cat.name}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((s) => (
                            <span 
                              key={s} 
                              className="px-2.5 py-1 rounded-md bg-surface-200 text-xs font-mono font-bold text-white border border-accent-cyan/60 shadow-glow-sm hover:border-accent-cyan transition-all"
                              style={{ boxShadow: '0 0 8px rgba(56, 189, 248, 0.3)' }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/15 pb-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    CERTIFICATIONS
                  </h3>

                  <div className="space-y-2.5">
                    {CERTIFICATIONS.map((c) => (
                      <div key={c.id} className="p-3 rounded-xl bg-surface-100/80 border border-amber-500/50 shadow-glow-sm space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-white font-display">{c.title}</div>
                        <div className="text-xs font-mono text-emerald-400 font-bold">{c.issuer}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/15 pb-2">
                    <Globe2 className="w-4 h-4 text-accent-violet" />
                    LANGUAGES
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {PERSONAL_INFO.languages.map((lang) => (
                      <span key={lang} className="px-3 py-1 rounded-lg bg-surface-100 border border-accent-violet/50 text-xs font-mono text-white font-bold shadow-glow-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Main Content (8 Columns out of 12) */}
              <div className="md:col-span-8 space-y-6">
                
                {/* Professional Experience Chronology */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/15 pb-2">
                    <Briefcase className="w-4 h-4 text-accent-cyan" />
                    PROFESSIONAL EXPERIENCE CHRONOLOGY
                  </h3>

                  <div className="space-y-5">
                    {EXPERIENCES.map((exp) => (
                      <div key={exp.id} className="p-4 sm:p-5 rounded-2xl bg-surface-100/90 border border-accent-cyan/50 shadow-glow-sm space-y-3 hover:border-accent-cyan transition-all">
                        
                        <div className="flex flex-wrap items-start justify-between gap-1.5 border-b border-white/10 pb-2.5">
                          <div>
                            <div className="text-sm sm:text-base font-display font-bold text-white">{exp.role}</div>
                            <div className="text-xs sm:text-sm font-mono text-accent-cyan font-bold">{exp.company}</div>
                          </div>
                          <span className="px-3 py-1 rounded-md bg-surface-200 text-xs font-mono text-emerald-400 font-bold border border-emerald-500/50 shadow-glow-sm">
                            {exp.period}
                          </span>
                        </div>

                        <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                          {exp.description.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {exp.skills.map((s) => (
                            <span 
                              key={s} 
                              className="px-3 py-1 rounded-lg bg-surface-200/90 border border-accent-cyan/60 text-accent-cyan font-mono text-xs font-bold shadow-glow-sm hover:border-accent-cyan transition-all"
                              style={{ boxShadow: '0 0 10px rgba(56, 189, 248, 0.35)' }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Projects */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/15 pb-2">
                    <Server className="w-4 h-4 text-emerald-400" />
                    FEATURED PROJECTS
                  </h3>

                  <div className="space-y-5">
                    {PROJECTS.map((proj) => (
                      <div key={proj.id} className="p-4 sm:p-5 rounded-2xl bg-surface-100/90 border border-emerald-500/50 shadow-glow-sm space-y-3 hover:border-emerald-400 transition-all">
                        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                          <span className="text-sm sm:text-base font-display font-bold text-white">{proj.title}</span>
                          {proj.website && (
                            <a href={proj.website} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent-cyan font-bold flex items-center gap-1 hover:underline">
                              LIVE SITE <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">{proj.description}</p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {proj.technologies.map((t) => (
                            <span 
                              key={t} 
                              className="px-3 py-1 rounded-lg bg-surface-200/90 border border-emerald-500/60 text-emerald-300 font-mono text-xs font-bold shadow-glow-sm hover:border-emerald-400 transition-all"
                              style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.35)' }}
                            >
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
            <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-400 relative z-10">
              <span>Neel Patel — Computer Science Engineer (Specialization in Cloud Computing)</span>
              <span>Professional Resume Document</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
