import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-50 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Vision */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface-100 border border-white/15 flex items-center justify-center font-display font-bold text-base text-white">
                <span className="text-gradient-accent">NP</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                NEEL PATEL
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-md italic font-light">
              "Building with technology. Learning continuously. Solving real problems."
            </p>
            <p className="text-xs text-text-muted font-mono">
              Computer Science & Engineering • Web • GIS • Python Automation • AI
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-text-secondary">
              <li><a href="#about" className="hover:text-white transition-colors">About Neel</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience Timeline</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Flagship Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills Network</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              DIRECT CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-text-secondary">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-cyan" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-violet" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>

            <button
              onClick={onOpenResume}
              className="mt-2 px-3 py-1.5 rounded-lg bg-surface-100 border border-white/10 hover:border-accent text-xs font-mono text-white flex items-center gap-2 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-accent-cyan" />
              Interactive Resume
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© 2026 Neel Patel. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="p-1.5 rounded-lg bg-surface-100 border border-white/10 group-hover:border-accent">
              <ArrowUp className="w-3.5 h-3.5 text-accent-cyan" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
