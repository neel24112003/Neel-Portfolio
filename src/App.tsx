import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { TerminalModal } from './components/TerminalModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Footer } from './components/Footer';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { TimelineSection } from './sections/TimelineSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { BeyondCodeSection } from './sections/BeyondCodeSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { EducationSection } from './sections/EducationSection';
import { InteractiveResumeSection } from './sections/InteractiveResumeSection';
import { ContactSection } from './sections/ContactSection';

import { ProjectItem } from './types';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="relative min-h-screen bg-background text-text-primary font-sans selection:bg-accent/30 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="relative z-10 space-y-0 w-full max-w-full overflow-x-hidden">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <BeyondCodeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Terminal CLI Easter Egg Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Interactive Resume Modal */}
      <InteractiveResumeSection
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Project Case Study Detailed Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
