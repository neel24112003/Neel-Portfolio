import React from 'react';
import { X, ExternalLink, Play, CheckCircle2, Cpu, Wrench, Target, Compass, Trophy } from 'lucide-react';
import { ProjectItem } from '../types';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="w-full max-w-4xl bg-surface-50 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-surface-100/90 px-6 py-4 border-b border-white/10 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent-cyan text-xs font-mono font-semibold">
              CASE STUDY
            </span>
            <span className="text-xs text-text-muted font-mono uppercase tracking-wider hidden sm:inline-block">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-surface-200/80 hover:bg-surface-300 text-text-secondary hover:text-white transition-all"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-accent-cyan font-mono font-medium">
              {project.subtitle}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-surface-100/60 border border-white/10">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-surface-200/40">
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">
                    {m.value}
                  </div>
                  <div className="text-xs font-mono text-text-muted mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Direct Links */}
          {(project.website || project.playStore) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white text-xs font-mono font-semibold flex items-center gap-2 shadow-glow-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  VISIT LIVE WEBSITE
                </a>
              )}
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/15 text-white text-xs font-mono font-semibold flex items-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  GOOGLE PLAY STORE APP
                </a>
              )}
            </div>
          )}

          {/* Section: Technologies */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2 uppercase tracking-wider">
              <Wrench className="w-4 h-4 text-accent-cyan" />
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problem && (
              <div className="p-5 rounded-2xl bg-surface-100/50 border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-red-400 flex items-center gap-2 uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  THE PROBLEM & NEED
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.approach && (
              <div className="p-5 rounded-2xl bg-surface-100/50 border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-accent-cyan flex items-center gap-2 uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  TECHNICAL APPROACH
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.approach}
                </p>
              </div>
            )}
          </div>

          {/* Section: Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2 uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-accent" />
              IMPLEMENTED FEATURES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-surface-100/40 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-text-secondary leading-normal">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Outcome */}
          {project.outcome && (
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2 uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                VERIFIED OUTCOME
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
