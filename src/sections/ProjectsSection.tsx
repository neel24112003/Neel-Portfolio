import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { GisGlobeScene } from '../3d/GisGlobeScene';
import { ExternalLink, Play, Sparkles, Activity, Bot, Calendar } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'healthcare' | 'ecommerce' | 'gis'>('all');

  const getProject = (id: string) => PROJECTS.find(p => p.id === id) || PROJECTS[0];

  return (
    <section id="projects" className="py-24 relative z-10 bg-background/50 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
                03. FLAGSHIP PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Featured Software & Systems
            </h2>
          </div>

          {/* Tab Filters with Theme Glowing Border */}
          <div className="flex flex-wrap gap-2 bg-surface-100/90 p-1.5 rounded-2xl border border-accent-cyan/40 shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:border-accent-cyan/70 transition-all">
            {(['all', 'healthcare', 'ecommerce', 'gis'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase transition-all ${
                  activeTab === tab
                    ? 'bg-accent text-white shadow-[0_0_12px_rgba(56,189,248,0.4)] border border-accent-cyan/60'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {tab === 'all'
                  ? 'ALL PROJECTS'
                  : tab === 'healthcare'
                  ? 'HEALTHCARE WEB'
                  : tab === 'ecommerce'
                  ? 'E-COMMERCE APPS'
                  : 'GIS ENGINE'}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT 01: RISHABH EYE HOSPITAL & LASER CENTER (FEATURED RECENT WEB APP) */}
        {(activeTab === 'all' || activeTab === 'healthcare') && (
          <div className="relative group">
            <div className="p-5 sm:p-8 lg:p-12 rounded-3xl glass-panel-interactive neon-border-web bg-gradient-to-br from-surface-100/90 via-surface-50/80 to-surface-100/90 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent-cyan text-xs font-mono font-bold">
                    PROJECT 01 • OPHTHALMOLOGY HEALTHCARE WEB APP
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold flex items-center gap-1.5 animate-pulse shrink-0 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    AUG 2026 – PRESENT
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  RISHABH EYE HOSPITAL & LASER CENTER
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  Developed a responsive healthcare web platform using <strong className="text-white">React.js, Tailwind CSS, and Node.js</strong> to streamline ophthalmology services and clinic consultations. Engineered an intuitive online appointment scheduling module, patient inquiry form, and dedicated sections for advanced eye care and laser treatment services.
                </p>

                {/* Metrics Highlights Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-cyan-950/30 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-sm sm:text-xl font-display font-bold text-cyan-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> APPOINTMENTS
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">ONLINE SCHEDULING</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-sm sm:text-xl font-display font-bold text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-4 h-4" /> LASER CARE
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">OPHTHALMOLOGY</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-sm sm:text-xl font-display font-bold text-white flex items-center gap-1">
                      <Activity className="w-4 h-4" /> CONSULTATIONS
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">INQUIRY ENGINE</div>
                  </div>
                </div>

                {/* Tech Stack Glowing Pills */}
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Tailwind CSS', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-200 text-xs font-mono shadow-[0_0_8px_rgba(6,182,212,0.15)] hover:border-cyan-300 transition-all">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://rishabh-eye-hospital.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.4)] border border-accent-cyan/60 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    VISIT WEBSITE
                  </a>
                  <button
                    onClick={() => onSelectProject(getProject('rishabh-eye-hospital'))}
                    className="px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-accent-cyan/50 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(56,189,248,0.2)] hover:border-accent-cyan transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-accent-cyan" />
                    FULL CASE STUDY
                  </button>
                </div>
              </div>

              {/* Visual Mockup Box */}
              <div className="lg:col-span-5 bg-surface-200/80 rounded-2xl p-4 sm:p-6 border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.15)] space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-text-muted border-b border-cyan-400/20 pb-3">
                  <span className="truncate">CLINIC PLATFORM PREVIEW</span>
                  <span className="text-cyan-400 font-bold flex items-center gap-1 shrink-0 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    LIVE PRODUCTION
                  </span>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-cyan-400/30 hover:border-cyan-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">APPOINTMENT MODULE</span>
                    <span className="text-emerald-400">Online Scheduling</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-cyan-400/30 hover:border-cyan-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">PATIENT INQUIRIES</span>
                    <span className="text-accent-cyan">Consultation Form</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-cyan-400/30 hover:border-cyan-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">LASER EYE CARE</span>
                    <span className="text-white">Ophthalmology Portal</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
                  "Responsive healthcare web platform built with React.js & Tailwind CSS to streamline clinic consultation and eye surgery service inquiries."
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PROJECT 02: SARAL HEALTH CARE */}
        {(activeTab === 'all' || activeTab === 'healthcare') && (
          <div className="relative group">
            <div className="p-5 sm:p-8 lg:p-12 rounded-3xl glass-panel-interactive neon-border-web bg-gradient-to-br from-surface-100/90 via-surface-50/80 to-surface-100/90 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent-cyan text-xs font-mono font-bold">
                    PROJECT 02 • HEALTHCARE TECH & LIVE DATA DASHBOARD
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 animate-pulse shrink-0 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    JUL 2026 – PRESENT (ONGOING)
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  SARAL HEALTH CARE
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  Ongoing modern digital hospital platform featuring a <strong className="text-white">Live Vitals Simulation Dashboard</strong> (ECG, HR, SpO2, BP), online doctor appointment booking engine with instant notifications, AI health assistant chatbot, emergency response portal, and glassmorphic micro-animated UI design system.
                </p>

                {/* Metrics Highlights Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-sky-950/30 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-sm sm:text-xl font-display font-bold text-emerald-400 flex items-center gap-1">
                      <Activity className="w-4 h-4" /> LIVE VITALS
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">ECG / HR / SpO2 / BP</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-sm sm:text-xl font-display font-bold text-accent-cyan flex items-center gap-1">
                      <Bot className="w-4 h-4" /> AI ASSISTANT
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">CHATBOT ENGINE</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-sm sm:text-xl font-display font-bold text-white flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> BOOKING
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">REAL-TIME SLOTS</div>
                  </div>
                </div>

                {/* Tech Stack Glowing Pills */}
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3 Glassmorphism', 'JavaScript (ES6+)', 'Canvas 2D', 'AI Chatbot', 'Vercel'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-400/40 text-sky-200 text-xs font-mono shadow-[0_0_8px_rgba(56,189,248,0.15)] hover:border-sky-300 transition-all">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://saral-health-care.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.4)] border border-accent-cyan/60 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    VISIT WEBSITE
                  </a>
                  <button
                    onClick={() => onSelectProject(getProject('saral-health-care'))}
                    className="px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-accent-cyan/50 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(56,189,248,0.2)] hover:border-accent-cyan transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-accent-cyan" />
                    FULL CASE STUDY
                  </button>
                </div>
              </div>

              {/* Visual Mockup Box */}
              <div className="lg:col-span-5 bg-surface-200/80 rounded-2xl p-4 sm:p-6 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.15)] space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-text-muted border-b border-sky-400/20 pb-3">
                  <span className="truncate">HEALTHCARE SYSTEM PREVIEW</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1 shrink-0 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ACTIVE APP
                  </span>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-sky-400/30 hover:border-sky-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">VITALS DASHBOARD</span>
                    <span className="text-emerald-400">ECG & Metric Streams</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-sky-400/30 hover:border-sky-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">APPOINTMENT ENGINE</span>
                    <span className="text-accent-cyan">Slot Selection & Toasts</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-sky-400/30 hover:border-sky-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">EVENT LIGHTBOX</span>
                    <span className="text-white">Custom Slider Gallery</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-400/30 text-xs font-mono text-sky-300">
                  "Next-generation digital hospital portal combining real-time vital indicators, automated booking workflows, and intelligent AI chatbot assistance."
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PROJECT 03: SAHITYA SANGAM */}
        {(activeTab === 'all' || activeTab === 'ecommerce') && (
          <div className="relative group">
            <div className="p-5 sm:p-8 lg:p-12 rounded-3xl glass-panel-interactive neon-border-web bg-surface-50/80 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-surface-200 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                    PROJECT 03 • FLAGSHIP E-COMMERCE & MOBILE APP
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold shrink-0 whitespace-nowrap">
                    LIVE PRODUCTION
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  SAHITYA SANGAM
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  Developed a complete book publishing e-commerce platform and mobile application containing <strong className="text-white">1800+ books</strong> and <strong className="text-white">30+ categories</strong> with instant multi-checkbox filtering, cart operations, dynamic invoice calculation, and automated PDF receipt generation.
                </p>

                {/* Metrics Highlights Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-950/30 border border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-lg sm:text-2xl font-display font-bold text-white">1800+</div>
                    <div className="text-[10px] font-mono text-text-muted">BOOKS CATALOG</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-lg sm:text-2xl font-display font-bold text-accent-cyan">30+</div>
                    <div className="text-[10px] font-mono text-text-muted">CATEGORIES</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-lg sm:text-2xl font-display font-bold text-emerald-400">WEB & APP</div>
                    <div className="text-[10px] font-mono text-text-muted">PLAY STORE</div>
                  </div>
                </div>

                {/* Tech Stack Glowing Pills */}
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'MySQL', 'Flutter', 'JavaScript', 'HTML5', 'CSS3'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-400/40 text-emerald-200 text-xs font-mono shadow-[0_0_8px_rgba(16,185,129,0.15)] hover:border-emerald-300 transition-all">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://sahityasangam.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.4)] border border-accent-cyan/60 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    VISIT WEBSITE
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.sahityasangam.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-emerald-500/50 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(16,185,129,0.2)] hover:border-emerald-400 transition-all"
                  >
                    <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                    PLAY STORE APP
                  </a>
                  <button
                    onClick={() => onSelectProject(getProject('sahitya-sangam'))}
                    className="px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-accent-cyan/50 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(56,189,248,0.2)] hover:border-accent-cyan transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-accent-cyan" />
                    FULL CASE STUDY
                  </button>
                </div>
              </div>

              {/* Visual Mockup Box */}
              <div className="lg:col-span-5 bg-surface-200/80 rounded-2xl p-4 sm:p-6 border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-text-muted border-b border-emerald-400/20 pb-3">
                  <span className="truncate">SYSTEM INTERFACE PREVIEW</span>
                  <span className="text-emerald-400 font-bold shrink-0 whitespace-nowrap">1800+ TITLES</span>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-emerald-400/30 hover:border-emerald-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">FILTER ENGINE</span>
                    <span className="text-accent-cyan">Multi-Checkbox & Category</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-emerald-400/30 hover:border-emerald-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">INVOICING</span>
                    <span className="text-emerald-400">Automated PDF Receipt</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-emerald-400/30 hover:border-emerald-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">MOBILE APP</span>
                    <span className="text-white">Flutter Cross-Platform</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-xs font-mono text-emerald-300">
                  "Robust normalized relational database with real-time PHP API endpoints enabling sub-second filtering across 1800+ publication titles."
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PROJECT 04: GIS & GEOSPATIAL ANALYSIS (WITH INTERACTIVE 3D GLOBE) */}
        {(activeTab === 'all' || activeTab === 'gis') && (
          <div className="relative group">
            <div className="p-5 sm:p-8 lg:p-12 rounded-3xl glass-panel-interactive neon-border-gis bg-surface-50/80 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-surface-200 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold">
                    PROJECT 04 • GEOSPATIAL ENGINE & SATELLITE ANALYSIS
                  </span>
                  <span className="text-xs font-mono text-teal-400 font-semibold shrink-0 whitespace-nowrap">
                    REMOTE SENSING & 3D GLOBE
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  GIS & GEOSPATIAL ANALYSIS SUITE
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  Advanced geospatial data analysis suite incorporating satellite imagery processing, land cover classification (Gujarat LULC), 3D terrain elevation modeling, flood risk simulations, and spatial topology validation.
                </p>

                {/* Metrics Highlights Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-teal-950/30 border border-teal-400/40 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-base sm:text-2xl font-display font-bold text-white">SATELLITE</div>
                    <div className="text-[10px] font-mono text-text-muted">LANDSAT & SENTINEL</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-base sm:text-2xl font-display font-bold text-emerald-400">FORMATS</div>
                    <div className="text-[10px] font-mono text-text-muted">SHP, KML, GEOJSON</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-base sm:text-2xl font-display font-bold text-accent-cyan">3D TERRAIN</div>
                    <div className="text-[10px] font-mono text-text-muted">FLOOD SIMULATION</div>
                  </div>
                </div>

                {/* Tech Stack Glowing Pills */}
                <div className="flex flex-wrap gap-2">
                  {['ArcMap', 'Google Earth Engine', 'Landsat', 'Sentinel', 'Shapefile', 'GeoJSON', 'KML', 'CAD'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-400/40 text-teal-200 text-xs font-mono shadow-[0_0_8px_rgba(20,184,166,0.15)] hover:border-teal-300 transition-all">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onSelectProject(getProject('gis-analysis'))}
                    className="px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-teal-400/50 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(20,184,166,0.2)] hover:border-teal-400 transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    FULL CASE STUDY
                  </button>
                </div>
              </div>

              {/* Visual Interactive 3D Globe Box */}
              <div className="lg:col-span-5 bg-surface-200/80 rounded-2xl p-4 sm:p-6 border border-teal-400/40 shadow-[0_0_20px_rgba(20,184,166,0.15)] space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-text-muted border-b border-teal-400/20 pb-3">
                  <span className="truncate">3D SPATIAL ENGINE</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1 shrink-0 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE 3D
                  </span>
                </div>
                
                <div className="relative rounded-xl overflow-hidden bg-background/80 border border-teal-400/30">
                  <GisGlobeScene />
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-teal-500/10 border border-teal-400/30 text-xs font-mono text-teal-300">
                  "Cloud computing with GEE and ArcMap desktop GIS for land cover indexing, wind turbine mapping, and hydrological risk modeling."
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PROJECT 05: SHREEJI KRUPA FARSAN (RETAIL E-COMMERCE SOLUTION) */}
        {(activeTab === 'all' || activeTab === 'ecommerce') && (
          <div className="relative group">
            <div className="p-5 sm:p-8 lg:p-12 rounded-3xl glass-panel-interactive neon-border-web bg-surface-50/80 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-surface-200 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold">
                    PROJECT 05 • RETAIL E-COMMERCE PLATFORM
                  </span>
                  <span className="text-xs font-mono text-amber-400 font-semibold shrink-0 whitespace-nowrap">
                    LIVE PRODUCTION
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  SHREEJI KRUPA FARSAN E-COMMERCE
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  Custom retail e-commerce platform featuring dynamic product catalogue, client cart management, live subtotal/tax calculations, admin inventory/stock availability management, and automated customer PDF receipt rendering.
                </p>

                {/* Metrics Highlights Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-amber-950/30 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-base sm:text-2xl font-display font-bold text-white">PHP/MySQL</div>
                    <div className="text-[10px] font-mono text-text-muted">FULL STACK</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-base sm:text-2xl font-display font-bold text-amber-400">ADMIN</div>
                    <div className="text-[10px] font-mono text-text-muted">STOCK CONTROL</div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <div className="text-base sm:text-2xl font-display font-bold text-emerald-400">RECEIPTS</div>
                    <div className="text-[10px] font-mono text-text-muted">PDF GENERATION</div>
                  </div>
                </div>

                {/* Tech Stack Glowing Pills */}
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'PDF Engine'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-400/40 text-amber-200 text-xs font-mono shadow-[0_0_8px_rgba(245,158,11,0.15)] hover:border-amber-300 transition-all">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://shreeji-krupa-farsan.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.4)] border border-amber-400 transition-all active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4 text-black" />
                    VIEW WEBSITE
                  </a>

                  <button
                    onClick={() => onSelectProject(getProject('shreeji-krupa'))}
                    className="px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-amber-400/50 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(245,158,11,0.2)] hover:border-amber-400 transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    FULL CASE STUDY
                  </button>
                </div>
              </div>

              {/* Visual Mockup Box */}
              <div className="lg:col-span-5 bg-surface-200/80 rounded-2xl p-6 border border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.15)] space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted border-b border-amber-400/20 pb-3">
                  <span>RETAIL SYSTEM PREVIEW</span>
                  <span className="text-amber-400 font-bold">ONLINE ORDERING</span>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-amber-400/30 hover:border-amber-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">PRODUCT CATALOG</span>
                    <span className="text-amber-400">Dynamic Farsan Menu</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-amber-400/30 hover:border-amber-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">CART CALCULATOR</span>
                    <span className="text-emerald-400">Live Subtotal & Tax</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100/90 border border-amber-400/30 hover:border-amber-400/60 transition-all flex items-center justify-between">
                    <span className="text-text-secondary">ADMIN PANEL</span>
                    <span className="text-white">Inventory & Price Updates</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-xs font-mono text-amber-300">
                  "End-to-end retail order engine backed by MySQL catalog data with instant PDF invoice rendering for customers."
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
