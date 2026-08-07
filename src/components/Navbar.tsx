import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo NP */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-surface-100 border border-white/15 flex items-center justify-center font-display font-bold text-lg text-white group-hover:border-accent group-hover:shadow-glow-sm transition-all">
            <span className="text-gradient-accent">NP</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-mono font-bold tracking-wider text-white">
              NEEL PATEL
            </span>
            <span className="text-[10px] font-mono text-text-muted">
              CS ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-50/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all relative ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-accent/20 border border-accent/40 rounded-full shadow-glow-sm z-0" />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions: Terminal Easter Egg & Resume */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-xl bg-surface-100 border border-white/10 hover:border-accent text-text-secondary hover:text-accent-cyan transition-all"
            title="Open Interactive CLI Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 rounded-xl bg-accent/15 hover:bg-accent/25 border border-accent/30 text-white text-xs font-mono font-medium flex items-center gap-2 shadow-glow-sm transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-accent-cyan" />
            RESUME
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-surface-100 border border-white/10 text-text-secondary"
            title="Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface-100 border border-white/10 text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-50/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-mono tracking-wider transition-all ${
                  activeSection === link.id
                    ? 'bg-accent/20 text-white border border-accent/40 font-semibold'
                    : 'text-text-secondary hover:text-white hover:bg-surface-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl bg-accent text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 shadow-glow-sm"
            >
              <FileText className="w-4 h-4" />
              VIEW RESUME
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
