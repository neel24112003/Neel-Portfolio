export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  color: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  website?: string;
  playStore?: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  metrics?: { label: string; value: string }[];
  type: 'web' | 'gis' | 'pipeline' | 'ecommerce';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  skills: string[];
  badgeColor: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
}
