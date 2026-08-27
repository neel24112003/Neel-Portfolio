import { ExperienceItem, ProjectItem, CertificationItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "NEEL PATEL",
  fatherName: "NAYAN PATEL",
  motherName: "NEETA PATEL",
  title: "Computer Science Engineer — Specialization in Cloud Computing",
  headline: "Software Engineer | Full Stack Developer | Data Analyst | Python Automation | Prompt Engineering | Cloud Computing | GIS | Freelance",
  tagline: "Software Engineer | Full Stack Developer | Data Analyst | Python Automation | Prompt Engineering | Cloud Computing | GIS | Freelance",
  phone: "+91 9601911100",
  email: "neelnp2411@gmail.com",
  location: "Surat, Gujarat, India",
  linkedin: "https://www.linkedin.com/in/neel-patel-8834b936b",
  github: "https://github.com/neel24112003",
  languages: ["English", "Hindi", "Gujarati"],
  summary: "AI-native Full Stack Developer and B.Tech CSE (Cloud Computing) graduate with a builder mindset, leveraging advanced prompt engineering and rapid prototyping to build scalable, production-ready systems. Proven track record across modern web frameworks (React.js, Node.js, PHP/MySQL), Python automation, and geospatial (GIS) pipelines. Experienced in shipping real-world e-commerce and healthcare platforms, automating complex data workflows, and orchestrating modern LLMs/developer tools to turn product ideas into high-performance software with extreme speed and precision."
};

export const CORE_PULSE_KEYWORDS = [
  "WEB DEVELOPMENT",
  "DATA ANALYTICS",
  "POWER BI & DASHBOARDS",
  "GIS ANALYSIS",
  "PYTHON AUTOMATION",
  "EXPLORATORY DATA ANALYSIS (EDA)",
  "HEALTHCARE PLATFORMS",
  "AI & AUTOMATION"
];

export const SKILL_CATEGORIES = [
  {
    id: "programming",
    name: "Core Programming Languages",
    color: "#f59e0b",
    description: "Foundational and multi-paradigm programming languages.",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "C", "Dart"]
  },
  {
    id: "web",
    name: "Frontend Development",
    color: "#38bdf8",
    description: "Modern component-driven web frameworks, styling engines, and dynamic UI animations.",
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Three.js", "Framer Motion"]
  },
  {
    id: "backend",
    name: "Backend Systems & APIs",
    color: "#6366f1",
    description: "Server-side architectures, REST APIs, real-time web protocols, and email services.",
    skills: ["Node.js", "Express.js", "PHP", "REST APIs", "CORS", "WebSocket", "Nodemailer", "dotenv"]
  },
  {
    id: "database",
    name: "Databases & Data Analytics",
    color: "#22c55e",
    description: "Relational database systems, data modeling, BI dashboards, and data analytics.",
    skills: ["PostgreSQL", "MySQL", "Data Analytics", "Power BI", "Excel / Spreadsheets"]
  },
  {
    id: "automation",
    name: "Python Automation & Scraping",
    color: "#a855f7",
    description: "Automated web scraping, PDF data extraction, JSON pipelines, and scripting.",
    skills: ["Python Automation", "PDF Data Extraction", "Web Scraping", "BeautifulSoup"]
  },
  {
    id: "gis",
    name: "GIS & Spatial Analysis",
    color: "#10b981",
    description: "Geospatial data modeling, remote sensing, satellite imagery processing, and spatial GIS suites.",
    skills: ["ArcMap", "ArcGIS Pro", "Google Earth Engine", "Google Earth Pro"]
  },
  {
    id: "tools",
    name: "Developer Tools & Platforms",
    color: "#06b6d4",
    description: "Version control systems, rapid bundlers, deployment environments, and platforms.",
    skills: ["Git", "GitHub", "Vite", "Vercel", "Replit"]
  },
  {
    id: "ai_creative",
    name: "LLMs, Creative & Operations",
    color: "#ec4899",
    description: "AI research models, synthetic generation engines, HR/recruitment platforms, and digital media tools.",
    skills: [
      "ChatGPT", "Claude", "Google Gemini", "Perplexity AI", "DeepSeek AI", 
      "ElevenLabs", "Leonardo", "Google Pomelli", "Google Stitch", 
      "ZK Techno", "PagarBook", "Foundit", "Times Jobs", 
      "Canva", "Lightroom", "CapCut", "Picsart", "InShot", "KineMaster"
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-freelance",
    period: "Jul 2025 – Present",
    company: "Freelance Projects",
    role: "Freelance Web Developer",
    description: [
      "Rishabh Eye Hospital & Laser Center Project: Developed a responsive healthcare web platform (rishabh-eye-hospital.vercel.app) using React.js, Tailwind CSS, and Node.js to streamline ophthalmology services, online appointment scheduling, patient inquiry forms, and clinic consultations.",
      "Saral Health Care Project: Architected and deployed an ongoing digital healthcare application (saral-health-care.vercel.app) featuring a live vitals monitoring simulation dashboard (ECG, SpO2, HR, BP), doctor appointment booking engine, and AI health assistant chatbot widget.",
      "Sahitya Sangam Project: Led web development and application integration for a major publishing and bookstore platform (sahityasangam.net), architecting catalog systems housing 1800+ books across 30+ distinct categories, multi-checkbox filtering, cart functionality, and automated PDF invoice generation."
    ],
    skills: ["React.js", "Tailwind CSS", "Node.js", "JavaScript", "HTML5/CSS3", "PHP", "MySQL", "Flutter", "AI Chatbot", "Vercel"]
  },
  {
    id: "exp-5",
    period: "Jul 2025 – Jun 2026",
    company: "Guide Placement",
    role: "Job Consultant",
    description: [
      "Executing technical recruitment workflows, candidate shortlisting, and resume screening for specialized job placements.",
      "Managing interview scheduling, candidate databases, hiring trackers, and placement agreements.",
      "Directing cross-functional communication between employers and applicants to streamline operational hiring pipelines."
    ],
    skills: ["Resume Screening", "Candidate Shortlisting", "Interview Trackers", "Foundit", "TimesJobs", "Agreements"]
  },
  {
    id: "exp-4",
    period: "Oct 2024 – Mar 2025",
    company: "JIO",
    role: "GIS Analyst",
    description: [
      "Executed geospatial data analysis and spatial dataset management for telecom and infrastructure spatial mapping.",
      "Performed spatial buffering, clipping, spatial joins, topology validation, and CAD to GIS data conversions.",
      "Processed satellite imagery, land cover layers, and vector datasets for large-scale geographic planning."
    ],
    skills: ["ArcMap", "Google Earth Engine", "Google Earth Pro", "Shapefile", "Spatial Joins", "Topology Checks"]
  },
  {
    id: "exp-3",
    period: "Dec 2023 – Mar 2024",
    company: "Yogya Capital",
    role: "Python Developer & Data Analyst",
    description: [
      "Engineered automated data processing scripts and data extraction pipelines using Python.",
      "Developed web scraping models with BeautifulSoup and created automated PDF text extraction tools outputting structured JSON.",
      "Utilized Jupyter Notebooks for data transformation, cleaning, exploratory data analysis, and reporting."
    ],
    skills: ["Python", "BeautifulSoup", "JSON Parsing", "Data Analytics", "Jupyter Notebook"]
  },
  {
    id: "exp-2",
    period: "Nov 2022 – Nov 2023",
    company: "Spectrarc Solution",
    role: "GIS Analyst",
    description: [
      "Analyzed spatial layers and remote sensing data for geographic information system projects.",
      "Conducted Landsat/Sentinel satellite data processing, Land Use / Land Cover (LULC) mapping, and spatial feature segmentation.",
      "Created vector shapefiles, KML layers, GeoJSON datasets, and technical geospatial documentations."
    ],
    skills: ["GIS Analysis", "Landsat", "Sentinel", "GeoJSON", "KML", "Remote Sensing"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "rishabh-eye-hospital",
    title: "RISHABH EYE HOSPITAL & LASER CENTER",
    category: "Web Application / Healthcare Platform / Ophthalmology Services",
    subtitle: "Responsive Healthcare Web Platform & Ophthalmology Portal",
    description: "Developed a responsive healthcare web platform using React.js, Tailwind CSS, and Node.js to streamline ophthalmology services and clinic consultations. Engineered an intuitive online appointment scheduling module, patient inquiry form, and dedicated sections for advanced eye care and laser treatment services.",
    type: "web",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
    features: [
      "Responsive Ophthalmology Web Platform & Service Showcase",
      "Intuitive Online Appointment Scheduling Module",
      "Patient Inquiry Form & Fast Clinic Consultations",
      "Dedicated Sections for Advanced Eye Care & Laser Treatments",
      "Clean Modern React.js & Tailwind CSS Component Architecture",
      "Node.js Backend & Fast Vercel Deployment"
    ],
    website: "https://rishabh-eye-hospital.vercel.app",
    problem: "Eye care centers require a modern, fast, and accessible web interface for patients to explore specialized laser treatment options, submit inquiries, and schedule consultation appointments without friction.",
    approach: "Architected a responsive healthcare platform using React.js and Tailwind CSS backed by Node.js service endpoints, customized appointment booking forms, and interactive laser eye care showcases.",
    outcome: "Successfully launched live on Vercel (Aug 2026 – Present) serving clinic patients.",
    metrics: [
      { label: "Timeline", value: "Aug 2026 – Present" },
      { label: "Tech Stack", value: "React.js & Tailwind CSS" },
      { label: "Live App", value: "Vercel Deployed" }
    ]
  },
  {
    id: "saral-health-care",
    title: "SARAL HEALTH CARE",
    category: "Web Development / Healthcare Tech / Live Data Dashboard",
    subtitle: "Intelligent Hospital Ecosystem & Vitals Monitoring Platform",
    description: "Developed an ongoing digital healthcare web platform featuring live vital metrics monitoring dashboard, real-time doctor appointment booking engine, AI health assistant chatbot, diagnostic test booking, and interactive event gallery.",
    type: "web",
    technologies: ["HTML5", "CSS3 Glassmorphism", "JavaScript (ES6+)", "Canvas 2D", "AI Chatbot", "Vercel"],
    features: [
      "Live Vitals Monitoring Simulation (ECG, Heart Rate, SpO2, Blood Pressure)",
      "Interactive Doctor Appointment Booking System & Real-Time Toast Notifications",
      "AI Health Assistant Chatbot Widget with Instant Query Chips",
      "Specialist Doctor Profiles & 24/7 Emergency Care Portal",
      "Interactive 3D/Canvas Particle Background Animations",
      "Event Photo Gallery with Custom Lightbox & Slide Navigation"
    ],
    website: "https://saral-health-care.vercel.app",
    problem: "Modern healthcare services require an intuitive, fast, and accessible digital portal for patients to monitor vital indicators, book appointments seamlessly, and engage with AI health assistants without friction.",
    approach: "Architected a responsive glassmorphic frontend UI with 2D Canvas ambient visualizers, real-time vitals data simulation engine, interactive appointment scheduling form, and an embedded intelligent AI assistant chatbot.",
    outcome: "Successfully deployed live on Vercel (Jul 2026 – Present, Ongoing) as a next-generation hospital ecosystem.",
    metrics: [
      { label: "Status", value: "Jul 2026 – Present" },
      { label: "UI Design", value: "Glassmorphism & Canvas" },
      { label: "Live App", value: "Vercel Deployed" }
    ]
  },
  {
    id: "sahitya-sangam",
    title: "SAHITYA SANGAM",
    category: "Web Development / E-commerce / Mobile Application",
    subtitle: "Enterprise Book Platform & Mobile Application",
    description: "Developed a comprehensive digital bookstore web platform and mobile application featuring 1800+ books across 30+ structured categories with instant multi-criteria filtering and online ordering.",
    type: "web",
    technologies: ["PHP", "MySQL", "Flutter", "JavaScript", "HTML5", "CSS3"],
    features: [
      "1800+ Books & 30+ Categories Database Architecture",
      "Dynamic Category & Checkbox Multi-Filtering",
      "Interactive Add-to-Cart & Dynamic Total Calculation",
      "Automated PDF Order Invoice & Receipt Generation",
      "Full Frontend to Backend PHP/MySQL API Integration",
      "Cross-platform Android Mobile App Integration"
    ],
    website: "https://sahityasangam.net/",
    playStore: "https://play.google.com/store/apps/details?id=com.sahityasangam.app",
    problem: "Navigating thousands of publication titles required a high-performance filtering system and responsive UI that works seamlessly across web browsers and mobile devices.",
    approach: "Built a normalized MySQL database schema with optimized PHP backend endpoints. Developed responsive frontend UI with instant JavaScript filtering and a Flutter application for Play Store distribution.",
    outcome: "Successfully launched live platform serving 1800+ titles with category-based search, cart management, and automated receipt generation.",
    metrics: [
      { label: "Book Catalog", value: "1800+" },
      { label: "Categories", value: "30+" },
      { label: "Platforms", value: "Web & Play Store" }
    ]
  },
  {
    id: "gis-analysis",
    title: "GIS & GEOSPATIAL ANALYSIS",
    category: "GIS / Remote Sensing / Spatial Analysis",
    subtitle: "Satellite Remote Sensing & Spatial Modeling Engine",
    description: "Advanced geospatial data analysis suite incorporating satellite imagery processing, land cover classification, 3D terrain modeling, flood simulations, and spatial topology validation.",
    type: "gis",
    technologies: ["ArcMap", "Google Earth Engine", "Google Earth Pro", "Landsat", "Sentinel", "Shapefile", "GeoJSON", "KML", "CAD"],
    features: [
      "Gujarat Land Use / Land Cover (LULC) Classification",
      "Satellite Wind Turbine Identification & Mapping",
      "Automated Building Footprint Segmentation",
      "Hydrological Flood Risk Simulation & 3D Terrain Analysis",
      "Spatial Operations: Buffering, Clipping, Spatial Joins, Topology Checks",
      "Multi-format Vector Conversion (CAD, Shapefile, KML, GeoJSON)"
    ],
    problem: "Raw remote sensing data from Landsat/Sentinel satellites requires intensive preprocessing, spatial joining, and topology corrections before actionable spatial insights can be derived.",
    approach: "Utilized Google Earth Engine cloud compute and ArcMap desktop GIS tools to execute cloud masking, vegetation indexing, spatial buffering, and 3D elevation profile simulations.",
    outcome: "Delivered precision spatial datasets and interactive terrain models for regional planning and environmental analysis across Gujarat.",
    metrics: [
      { label: "Satellites", value: "Landsat & Sentinel" },
      { label: "Data Formats", value: "CAD, KML, GeoJSON, SHP" },
      { label: "Region Focus", value: "Gujarat LULC & Coastal" }
    ]
  },
  {
    id: "shreeji-krupa",
    title: "SHREEJI KRUPA FARSAN",
    category: "E-commerce / Web Development",
    subtitle: "Retail E-Commerce & Inventory Management",
    description: "Custom web development solution for retail food operations featuring interactive product ordering, live price calculations, stock management, and PDF receipt rendering.",
    type: "ecommerce",
    website: "https://shreeji-krupa-farsan.vercel.app",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "PDF Engine"],
    features: [
      "Interactive Product Catalog & Category Navigation",
      "Real-time Dynamic Price & Subtotal Calculation",
      "User Order Cart & Checkout Interface",
      "Admin Panel for Product Management & Price Updates",
      "Live Stock Availability Tracking",
      "Automated PDF Order Invoice Receipt Rendering"
    ],
    problem: "Retail food operations needed a reliable web interface to present product options, calculate custom item totals, track stock, and produce printed PDF customer receipts.",
    approach: "Built a customized PHP e-commerce engine backed by MySQL for catalog storage, coupled with custom JS on the client side for live price arithmetic and PDF invoice generation.",
    outcome: "Deployed intuitive retail platform enabling seamless customer ordering and instant admin stock management.",
    metrics: [
      { label: "Architecture", value: "Full Stack PHP/MySQL" },
      { label: "Admin Panel", value: "Product & Stock Control" },
      { label: "Receipts", value: "Instant PDF Generation" }
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Introduction to Machine Learning",
    issuer: "IIT Madras (NPTEL)",
    skills: ["Machine Learning", "Supervised Learning", "Classification", "Algorithms"],
    badgeColor: "#6366f1"
  },
  {
    id: "cert-2",
    title: "Foundations of Prompt Engineering",
    issuer: "AWS (Amazon Web Services)",
    skills: ["Prompt Engineering", "Large Language Models", "AI Optimization", "Generative AI"],
    badgeColor: "#8b5cf6"
  },
  {
    id: "cert-3",
    title: "Digital Forensics Essentials",
    issuer: "Code Red (EC-Council)",
    skills: ["Digital Forensics", "Data Integrity", "Cyber Security", "Investigation"],
    badgeColor: "#38bdf8"
  },
  {
    id: "cert-4",
    title: "ESG Virtual Experience Program",
    issuer: "TCS (Tata Consultancy Services)",
    skills: ["Environmental Social Governance", "Data Analytics", "Corporate Reporting"],
    badgeColor: "#10b981"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    institution: "UKA Tarsadia University",
    degree: "B.Tech in Computer Science & Engineering (Specialization in Cloud Computing)",
    period: "2021 – 2025"
  },
  {
    id: "edu-2",
    institution: "Citizen Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2020 – 2021"
  },
  {
    id: "edu-3",
    institution: "Ryan International School",
    degree: "Secondary School Certificate (SSC)",
    period: "2019 – 2020"
  }
];

export const BEYOND_CODE_DATA = {
  company: "Guide Placement",
  role: "Job Consultant",
  period: "Jul 2025 – Jun 2026",
  headline: "Talent Operations, Recruitment & Hiring Logistics",
  description: "Leveraging technical problem-solving to drive human capital acquisition, candidate evaluation, operational recruitment pipelines, and AI research tools.",
  responsibilities: [
    "Resume Screening & Qualification Verification",
    "Candidate Shortlisting against Skill Matrix",
    "Candidate Communication & Stakeholder Coordination",
    "Interview Scheduling & Tracker Management",
    "Hiring Coordination & Placement Documentation",
    "Candidate Database Maintenance & Recruitment Analytics"
  ],
  toolsUsed: [
    "ChatGPT", "Claude", "Google Gemini", "Perplexity AI", "DeepSeek AI", 
    "ElevenLabs", "Leonardo", "Google Pomelli", "Google Stitch", 
    "ZK Techno", "PagarBook", "Foundit", "Times Jobs", 
    "Canva", "Lightroom", "CapCut", "Picsart", "InShot", "KineMaster"
  ]
};

export const BEYOND_CODE_CATEGORIES = [
  {
    id: "llm_research",
    title: "LLMs & Generative AI Research Suite",
    category: "01. AI & PROMPT ENGINEERING",
    icon: "Brain",
    color: "#a855f7",
    badgeColor: "bg-purple-500/10 border-purple-400/40 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
    cardClass: "border border-purple-500/40 bg-surface-50/80 shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-400",
    description: "Proficient in leveraging cutting-edge Large Language Models for automated technical research, complex problem solving, code optimization, and prompt engineering.",
    tools: ["ChatGPT", "Claude", "Google Gemini", "Perplexity AI", "DeepSeek AI"],
    highlights: [
      "Multi-LLM Prompt Engineering & Benchmark Evaluation",
      "Automated Technical Research & Documentation Synthesis",
      "AI-Assisted Code Optimization & Query Formulation"
    ]
  },
  {
    id: "synthetic_media",
    title: "Synthetic Media & Creative AI Engines",
    category: "02. SYNTHETIC AI GENERATION",
    icon: "Sparkles",
    color: "#38bdf8",
    badgeColor: "bg-sky-500/10 border-sky-400/40 text-sky-200 shadow-[0_0_10px_rgba(56,189,248,0.2)]",
    cardClass: "border border-sky-400/40 bg-surface-50/80 shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:border-sky-300",
    description: "Utilizing generative AI tools for high-fidelity synthetic voice cloning, photorealistic image creation, and visual asset generation.",
    tools: ["ElevenLabs", "Leonardo AI", "Google Pomelli", "Google Stitch"],
    highlights: [
      "AI Voice Synthesis & High-Fidelity Voice Cloning (ElevenLabs)",
      "Photorealistic AI Image Generation & Concept Art (Leonardo AI)",
      "Creative Asset Pipelines & AI Visual Workflows"
    ]
  },
  {
    id: "talent_ops",
    title: "Talent Operations & HR Logistics",
    category: "03. HUMAN CAPITAL & RECRUITMENT",
    icon: "Users",
    color: "#ec4899",
    badgeColor: "bg-pink-500/10 border-pink-400/40 text-pink-200 shadow-[0_0_10px_rgba(236,72,153,0.2)]",
    cardClass: "border border-pink-500/40 bg-surface-50/80 shadow-[0_0_25px_rgba(236,72,153,0.15)] hover:border-pink-400",
    companyTag: "Guide Placement — Job Consultant (Jul 2025 – Jun 2026)",
    description: "Practical operational experience managing end-to-end technical recruitment pipelines, candidate screening, attendance systems, and corporate hiring logistics.",
    tools: ["Foundit (Monster)", "TimesJobs", "ZK Techno", "PagarBook"],
    responsibilities: [
      "Resume Screening & Qualification Verification against Skill Matrix",
      "Candidate Shortlisting, Interview Scheduling & Placement Agreements",
      "Biometric Attendance Systems (ZK Techno) & Payroll Logistics (PagarBook)",
      "Recruitment Portal Sourcing & Candidate Database Management"
    ]
  },
  {
    id: "creative_design",
    title: "Digital Media & Visual Design Suite",
    category: "04. GRAPHIC & VIDEO PRODUCTION",
    icon: "Palette",
    color: "#10b981",
    badgeColor: "bg-emerald-500/10 border-emerald-400/40 text-emerald-200 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
    cardClass: "border border-emerald-400/40 bg-surface-50/80 shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:border-emerald-300",
    description: "Designing promotional graphics, photo color grading, and multi-track mobile/desktop video post-production for digital visual communication.",
    tools: ["Canva", "Lightroom", "CapCut", "Picsart", "InShot", "KineMaster"],
    highlights: [
      "Promotional Asset & Graphic Banner Design (Canva & Picsart)",
      "Photo Color Grading & Image Enhancement (Lightroom)",
      "Multi-Track Video Post-Production & Editing (CapCut, InShot, KineMaster)"
    ]
  }
];
