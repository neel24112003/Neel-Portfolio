import { ExperienceItem, ProjectItem, CertificationItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "NEEL PATEL",
  title: "Computer Science Engineer",
  headline: "Building Digital Experiences, Geospatial Solutions & Intelligent Automation.",
  tagline: "Computer Science Engineer focused on Web Development, GIS Analysis, Python Automation and AI-Assisted Software Development.",
  phone: "+91 9601911100",
  email: "neelnp2411@gmail.com",
  location: "Surat, Gujarat, India",
  languages: ["English", "Hindi", "Gujarati"],
  summary: "Computer Science Engineer with hands-on experience across web development, GIS analysis, Python automation, e-commerce development and AI-assisted software development. Experienced in building web applications, geospatial solutions, data automation workflows and technology-driven systems."
};

export const CORE_PULSE_KEYWORDS = [
  "WEB DEVELOPMENT",
  "GIS ANALYSIS",
  "PYTHON AUTOMATION",
  "DATA",
  "AI",
  "PROBLEM SOLVING"
];

export const SKILL_CATEGORIES = [
  {
    id: "web",
    name: "Web & Mobile",
    color: "#38bdf8",
    description: "Full-stack web architecture, e-commerce platforms, and cross-platform apps.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Flutter", "MySQL"]
  },
  {
    id: "gis",
    name: "GIS & Spatial Analysis",
    color: "#10b981",
    description: "Geospatial data analysis, remote sensing, satellite imagery processing, and 3D terrain visualization.",
    skills: ["ArcMap", "Google Earth Engine", "Google Earth Pro", "Shapefile / KML / GeoJSON", "Landsat / Sentinel Data", "CAD Conversion"]
  },
  {
    id: "python",
    name: "Python & Automation",
    color: "#6366f1",
    description: "Automated data extraction pipelines, web scraping, data processing, and scripting.",
    skills: ["Python", "BeautifulSoup", "Jupyter Notebook", "JSON Pipelines", "Data Processing"]
  },
  {
    id: "ai",
    name: "AI & Modern Tools",
    color: "#8b5cf6",
    description: "AI-assisted software development, prompt engineering, and intelligent developer workflows.",
    skills: ["Microsoft Copilot", "GitHub Copilot", "Prompt Engineering", "Power BI"]
  },
  {
    id: "programming",
    name: "Core Languages",
    color: "#f59e0b",
    description: "Foundational programming languages and database query languages.",
    skills: ["Python", "JavaScript", "C", "Java", "PHP", "MySQL", "HTML", "CSS"]
  },
  {
    id: "operations",
    name: "Operations & Business",
    color: "#ec4899",
    description: "Recruitment operations, hiring coordination, candidate tracking, and business tools.",
    skills: ["Foundit", "TimesJobs", "ZK Techno", "PagarBook"]
  },
  {
    id: "creative",
    name: "Creative & Media",
    color: "#06b6d4",
    description: "Digital media editing, graphic asset design, and visual communication.",
    skills: ["Canva", "Lightroom", "CapCut", "PicsArt", "InShot", "KineMaster"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-6",
    period: "2025 – Present",
    company: "Sahitya Sangam",
    role: "Web Developer",
    description: [
      "Leading web development and application integration for a major publishing and bookstore platform.",
      "Architected and maintained catalog systems housing 1800+ books across 30+ distinct categories.",
      "Implemented seamless search, multi-checkbox filtering, cart functionality, and automated PDF invoice/receipt generation."
    ],
    skills: ["PHP", "MySQL", "Flutter", "JavaScript", "HTML/CSS"]
  },
  {
    id: "exp-5",
    period: "2025 – Present",
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
    period: "2024 – 2025",
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
    period: "2023 – 2024",
    company: "Yogya Capital",
    role: "Python Developer",
    description: [
      "Engineered automated data processing scripts and data extraction pipelines using Python.",
      "Developed web scraping models with BeautifulSoup and created automated PDF text extraction tools outputting structured JSON.",
      "Utilized Jupyter Notebooks for data transformation, cleaning, and reporting."
    ],
    skills: ["Python", "BeautifulSoup", "JSON Parsing", "Automation", "Jupyter Notebook"]
  },
  {
    id: "exp-2",
    period: "2022 – 2023",
    company: "Spectrarc Solution",
    role: "GIS Analyst",
    description: [
      "Analyzed spatial layers and remote sensing data for geographic information system projects.",
      "Conducted Landsat/Sentinel satellite data processing, Land Use / Land Cover (LULC) mapping, and spatial feature segmentation.",
      "Created vector shapefiles, KML layers, GeoJSON datasets, and technical geospatial documentations."
    ],
    skills: ["GIS Analysis", "Landsat", "Sentinel", "GeoJSON", "KML", "Remote Sensing"]
  },
  {
    id: "exp-1",
    period: "2021 – 2022",
    company: "Shreeji Krupa Farsan",
    role: "Web Developer",
    description: [
      "Designed and deployed an e-commerce web platform for food retail product operations.",
      "Implemented interactive product catalog, dynamic price calculation, cart management, and admin inventory control.",
      "Built automated PDF invoice receipt generation and stock availability tracking."
    ],
    skills: ["PHP", "MySQL", "JavaScript", "E-commerce UI", "PDF Generation"]
  }
];

export const PROJECTS: ProjectItem[] = [
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
    id: "python-automation",
    title: "PYTHON DATA AUTOMATION",
    category: "Python / Automation / Data Processing",
    subtitle: "PDF Text Extraction & ETL Pipeline",
    description: "An automated data processing pipeline that extracts unstructured text from PDF documents, executes keyword-based filtering, and transforms data into clean JSON format.",
    type: "pipeline",
    technologies: ["Python", "Jupyter Notebook", "BeautifulSoup", "PDF Extraction", "JSON Pipeline", "Regex Parsing"],
    features: [
      "Automated PDF Ingestion & Text Parsing Engine",
      "Keyword-based Pattern Recognition & Regex Search",
      "Structured JSON Payload Generation & Formatting",
      "Web Scraping with BeautifulSoup for Data Enrichment",
      "Jupyter Notebook Data Transformation & Verification",
      "Zero-touch Automated Execution Workflow"
    ],
    problem: "Extracting specific target information from hundreds of unstructured PDF files manually was error-prone and time-consuming.",
    approach: "Designed a modular Python ETL script using PDF text extraction libraries coupled with regex string parsing to isolate key data points and output structured JSON files.",
    outcome: "Streamlined data workflow from PDF documents into structured JSON payloads with automated validation in Jupyter Notebook environments.",
    metrics: [
      { label: "Input Format", value: "Unstructured PDF" },
      { label: "Output Format", value: "Structured JSON" },
      { label: "Processing", value: "Automated Scripting" }
    ]
  },
  {
    id: "shreeji-krupa",
    title: "SHREEJI KRUPA FARSAN",
    category: "E-commerce / Web Development",
    subtitle: "Retail E-Commerce & Inventory Management",
    description: "Custom web development solution for retail food operations featuring interactive product ordering, live price calculations, stock management, and PDF receipt rendering.",
    type: "ecommerce",
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
    degree: "B.Tech in Computer Science and Engineering",
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
  period: "2025 – Present",
  headline: "Talent Operations, Recruitment & Hiring Logistics",
  description: "Leveraging technical problem-solving to drive human capital acquisition, candidate evaluation, and operational recruitment pipelines.",
  responsibilities: [
    "Resume Screening & Qualification Verification",
    "Candidate Shortlisting against Skill Matrix",
    "Candidate Communication & Stakeholder Coordination",
    "Interview Scheduling & Tracker Management",
    "Hiring Coordination & Placement Documentation",
    "Candidate Database Maintenance & Recruitment Analytics"
  ],
  toolsUsed: ["Foundit", "TimesJobs", "ZK Techno", "PagarBook", "Interview Trackers", "Agreements"]
};
