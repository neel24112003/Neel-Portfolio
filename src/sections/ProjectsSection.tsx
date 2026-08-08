import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { GisGlobeScene } from '../3d/GisGlobeScene';
import { PipelineCanvas } from '../3d/PipelineCanvas';
import { ExternalLink, Play, Sparkles, Layers, ArrowUpRight, Cpu, FileText, ShoppingCart, Activity, Bot, Calendar } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'gis' | 'pipeline'>('all');

  const getProject = (id: string) => PROJECTS.find(p => p.id === id) || PROJECTS[0];

  return (
    <section id="projects" className="py-24 relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
                04. FLAGSHIP PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Featured Software & Systems
            </h2>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap gap-2 bg-surface-50 p-1.5 rounded-2xl border border-white/10">
            {(['all', 'web', 'gis', 'pipeline'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase transition-all ${
                  activeTab === tab
                    ? 'bg-accent text-white shadow-glow-sm'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {tab === 'all' ? 'ALL PROJECTS' : tab === 'web' ? 'WEB & HEALTHCARE' : tab === 'gis' ? 'GIS ENGINE' : 'DATA PIPELINE'}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT 01: SARAL HEALTH CARE (FEATURED ONGOING HERO CARD) */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="relative group">
            <div className="p-8 sm:p-12 rounded-3xl glass-panel-interactive border border-accent/40 bg-gradient-to-br from-surface-100/90 via-surface-50/80 to-surface-100/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent-cyan text-xs font-mono font-bold">
                    PROJECT 01 • HEALTHCARE TECH & LIVE DATA DASHBOARD
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 animate-pulse">
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

                {/* Metrics Highlights */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-surface-200/50 border border-white/10">
                  <div>
                    <div className="text-lg sm:text-xl font-display font-bold text-emerald-400 flex items-center gap-1">
                      <Activity className="w-4 h-4" /> LIVE VITALS
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">ECG / HR / SpO2 / BP</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-display font-bold text-accent-cyan flex items-center gap-1">
                      <Bot className="w-4 h-4" /> AI ASSISTANT
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">CHATBOT ENGINE</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> BOOKING
                    </div>
                    <div className="text-[10px] font-mono text-text-muted">REAL-TIME SLOTS</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3 Glassmorphism', 'JavaScript (ES6+)', 'Canvas 2D', 'AI Chatbot', 'Vercel'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-surface-200 border border-white/10 text-xs font-mono text-white">
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
                    className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-glow-sm transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LIVE WEBSITE (VERCEL)
                  </a>
                  <button
                    onClick={() => onSelectProject(getProject('saral-health-care'))}
                    className="px-5 py-2.5 rounded-xl bg-surface-50 hover:bg-surface-100 border border-white/10 text-text-secondary hover:text-white font-mono text-xs font-bold flex items-center gap-2 transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-accent-cyan" />
                    FULL CASE STUDY
                  </button>
                </div>
              </div>

              {/* Visual Mockup Box */}
              <div className="lg:col-span-5 bg-surface-200/60 rounded-2xl p-6 border border-white/10 space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted border-b border-white/10 pb-3">
                  <span>HEALTHCARE SYSTEM PREVIEW</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ACTIVE APP
                  </span>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-between">
                    <span className="text-text-secondary">VITALS DASHBOARD</span>
                    <span className="text-emerald-400">ECG & Metric Streams</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-between">
                    <span className="text-text-secondary">APPOINTMENT ENGINE</span>
                    <span className="text-accent-cyan">Slot Selection & Toasts</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-between">
                    <span className="text-text-secondary">EVENT LIGHTBOX</span>
                    <span className="text-white">Custom Slider Gallery</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 text-xs font-mono text-accent-cyan">
                  "Next-generation digital hospital portal combining real-time vital indicators, automated booking workflows, and intelligent AI chatbot assistance."
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PROJECT 02: SAHITYA SANGAM */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="relative group">
            <div className="p-8 sm:p-12 rounded-3xl glass-panel-interactive border border-white/10 bg-surface-50/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-surface-200 border border-white/10 text-accent-cyan text-xs font-mono font-bold">
                    PROJECT 02 • FLAGSHIP E-COMMERCE & MOBILE APP
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    LIVE PRODUCTION
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  SAHITYA SANGAM
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  Developed a complete book publishing e-commerce platform and mobile application containing <strong className="text-white">1800+ books</strong> and <strong className="text-white">30+ categories</strong> with instant multi-checkbox filtering, cart operations, dynamic invoice calculation, and automated PDF receipt generation.
                </p>

                {/* Metrics Highlights */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-surface-200/50 border border-white/10">
                  <div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-white">1800+</div>
                    <div className="text-[10px] font-mono text-text-muted">BOOKS CATALOG</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-accent-cyan">30+</div>
                    <div className="text-[10px] font-mono text-text-muted">CATEGORIES</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-emerald-400">WEB & APP</div>
                    <div className="text-[10px] font-mono text-text-muted">PLAY STORE</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'MySQL', 'Flutter', 'JavaScript', 'HTML5', 'CSS3'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-surface-200 border border-white/10 text-xs font-mono text-white">
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
                    className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-glow-sm transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    VISIT WEBSITE
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.sahityasangam.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/15 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all"
                  >
                    <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                    PLAY STORE APP
                  </a>
                  <button
                    onClick={() => onSelectProject(getProject('sahitya-sangam'))}
                    className="px-5 py-2.5 rounded-xl bg-surface-50 hover:bg-surface-100 border border-white/10 text-text-secondary hover:text-white font-mono text-xs font-bold flex items-center gap-2 transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-accent-cyan" />
                    FULL CASE STUDY
                  </button>
                </div>
              </div>

              {/* Visual Mockup Box */}
              <div className="lg:col-span-5 bg-surface-200/60 rounded-2xl p-6 border border-white/10 space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted border-b border-white/10 pb-3">
                  <span>SYSTEM INTERFACE PREVIEW</span>
                  <span className="text-emerald-400 font-bold">1800+ TITLES</span>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-between">
                    <span className="text-text-secondary">FILTER ENGINE</span>
                    <span className="text-accent-cyan">Multi-Checkbox & Category</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-between">
                    <span className="text-text-secondary">INVOICING</span>
                    <span className="text-emerald-400">Automated PDF Receipt</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-between">
                    <span className="text-text-secondary">MOBILE APP</span>
                    <span className="text-white">Flutter Cross-Platform</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 text-xs font-mono text-accent-cyan">
                  "Robust normalized relational database with real-time PHP API endpoints enabling sub-second filtering across 1800+ publication titles."
                </div>
              </div>

            </div>
          </div>
        )}

        {/* PROJECT 03: GIS & GEOSPATIAL ANALYSIS (WITH INTERACTIVE 3D GLOBE) */}
        {(activeTab === 'all' || activeTab === 'gis') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  PROJECT 03 • GEOSPATIAL ENGINE & SATELLITE ANALYSIS
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  GIS & Geospatial Analysis Suite
                </h3>
              </div>
              <button
                onClick={() => onSelectProject(getProject('gis-analysis'))}
                className="px-4 py-2 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/15 text-xs font-mono text-white flex items-center gap-2"
              >
                FULL CASE STUDY
                <ArrowUpRight className="w-4 h-4 text-accent-cyan" />
              </button>
            </div>

            {/* Interactive 3D Globe Component Embedded */}
            <GisGlobeScene />

            <div className="p-6 rounded-2xl glass-panel border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">SAT-DATA & REMOTE SENSING</h4>
                <p className="text-xs text-text-secondary">
                  Processed Landsat/Sentinel satellite imagery, executed LULC classification for Gujarat, wind turbine identification, and building footprint segmentation.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase">SPATIAL TOPOLOGY & OPERATIONS</h4>
                <p className="text-xs text-text-secondary">
                  Executed buffering, clipping, spatial joins, topology checks, and CAD to GIS shapefile, KML, and GeoJSON conversions.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-accent-violet uppercase">FLOOD SIMULATION & 3D TERRAIN</h4>
                <p className="text-xs text-text-secondary">
                  Developed 3D spatial terrain models and hydrological flood risk simulations in Google Earth Engine and ArcMap.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT 04: PYTHON DATA AUTOMATION (WITH ANIMATED PIPELINE CANVAS) */}
        {(activeTab === 'all' || activeTab === 'pipeline') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-widest">
                  PROJECT 04 • ETL & DATA AUTOMATION PIPELINE
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Python PDF Text Extraction & JSON Processing Pipeline
                </h3>
              </div>
              <button
                onClick={() => onSelectProject(getProject('python-automation'))}
                className="px-4 py-2 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/15 text-xs font-mono text-white flex items-center gap-2"
              >
                FULL CASE STUDY
                <ArrowUpRight className="w-4 h-4 text-accent-cyan" />
              </button>
            </div>

            {/* Interactive Pipeline Canvas Embedded */}
            <PipelineCanvas />
          </div>
        )}

        {/* PROJECT 05: SHREEJI KRUPA FARSAN (RETAIL E-COMMERCE SOLUTION) */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="p-8 rounded-3xl glass-panel-interactive border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-surface-200 border border-white/10 text-amber-400 text-xs font-mono font-bold">
                PROJECT 05 • RETAIL E-COMMERCE PLATFORM
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                SHREEJI KRUPA FARSAN E-COMMERCE
              </h3>
              <p className="text-sm text-text-secondary font-sans leading-relaxed">
                Custom retail e-commerce platform featuring dynamic product catalogue, client cart management, live subtotal/tax calculations, admin inventory/stock availability management, and automated customer PDF receipt rendering.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'PDF Engine'].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <button
                onClick={() => onSelectProject(getProject('shreeji-krupa'))}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/15 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-glow-sm transition-all"
              >
                <ShoppingCart className="w-4 h-4 text-amber-400" />
                VIEW CASE STUDY
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
