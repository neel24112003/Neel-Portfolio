import React, { useState } from 'react';
import { Terminal, Code2, Globe2, Cpu, Sparkles, CheckCircle2, Play, Copy, Check } from 'lucide-react';

interface CodeTab {
  id: string;
  filename: string;
  language: string;
  icon: React.ElementType;
  color: string;
  code: string;
  output: string;
}

const CODE_TABS: CodeTab[] = [
  {
    id: 'web',
    filename: 'SahityaSangam.php',
    language: 'PHP / MySQL / Flutter',
    icon: Globe2,
    color: '#38bdf8',
    code: `<?php
// Sahitya Sangam E-Commerce & Mobile Engine
class SahityaSangamPlatform {
    private $db;
    public $total_books = 1800;
    public $categories = 30;

    public function filterBooks($category_ids, $keywords) {
        $query = "SELECT * FROM books WHERE category_id IN (...)";
        return $this->db->execute($query);
    }

    public function generatePdfInvoice($order_id) {
        return PDFEngine::renderInvoice($order_id);
    }
}`,
    output: '✓ 1800+ Books Filtered • PHP MySQL Backend Active • PDF Invoicing Ready'
  },
  {
    id: 'gis',
    filename: 'Gujarat_GIS_Engine.py',
    language: 'Python / ArcMap / GEE',
    icon: Cpu,
    color: '#10b981',
    code: `import ee
from arcpy import SpatialAnalysis as SA

class GujaratSpatialEngine:
    def __init__(self, region="Gujarat_LULC"):
        self.roi = ee.Geometry.Polygon([[71.19, 22.25], ...])
        
    def process_sentinel_imagery(self, year=2025):
        dataset = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
        ndvi = dataset.map(lambda img: img.normalizedDifference(['B8', 'B4']))
        return ndvi.reduce(ee.Reducer.median())

    def simulate_flood_risk(self, elevation_dem):
        return SA.Hydrology.FloodRiskModel(elevation_dem)`,
    output: '✓ Landsat/Sentinel Imagery Loaded • LULC Classification & 3D Terrain Synced'
  },
  {
    id: 'automation',
    filename: 'PdfDataPipeline.py',
    language: 'Python / ETL',
    icon: Terminal,
    color: '#6366f1',
    code: `import json, re
from bs4 import BeautifulSoup
import pypdf

def extract_pdf_to_json(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    text = "".join([page.extract_text() for page in reader.pages])
    
    # Keyword extraction & regex parsing
    keywords = ["GIS", "Automation", "Target_Metrics"]
    structured_data = parse_matched_keywords(text, keywords)
    
    return json.dumps(structured_data, indent=2)`,
    output: '✓ PDF Ingested ➔ Keyword Search Match ➔ JSON Output Generated [200 OK]'
  },
  {
    id: 'ai',
    filename: 'AiAssistedWorkflow.ts',
    language: 'TypeScript / Copilot',
    icon: Sparkles,
    color: '#8b5cf6',
    code: `// AI-Assisted Developer Capabilities
interface DeveloperProfile {
  name: "Neel Patel";
  role: "Computer Science Engineer";
  specializations: ["Web Dev", "GIS Analysis", "Python Automation", "AI"];
  copilotTools: ["GitHub Copilot", "Microsoft Copilot", "AWS Prompt Eng"];
}

export const engineer = new DeveloperProfile({
  optimization: "Fast, Clean & Production-Ready Systems",
  problemSolving: true
});`,
    output: '✓ Prompt Engineering & Copilot Acceleration Synced • 100% Type-Safe'
  }
];

export const HeroComputerIde: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('web');
  const [copied, setCopied] = useState<boolean>(false);

  const activeTab = CODE_TABS.find(t => t.id === activeTabId) || CODE_TABS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 relative group">
      
      {/* Outer Glow Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-cyan to-accent-violet rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 pointer-events-none" />

      {/* Main IDE Window Container */}
      <div className="relative rounded-2xl bg-surface-50/95 border border-white/15 shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col transform group-hover:scale-[1.01] transition-all duration-300">
        
        {/* IDE Header Controls */}
        <div className="bg-surface-100/90 px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          
          {/* macOS Control Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block hover:opacity-100 cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block hover:opacity-100 cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:opacity-100 cursor-pointer" />
            <span className="ml-2 text-xs font-mono text-text-muted hidden sm:inline-block">
              neel-patel-workstation — VSCode v1.90
            </span>
          </div>

          {/* Action Copy & Status */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM ACTIVE
            </span>

            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-lg bg-surface-200 hover:bg-surface-300 text-text-secondary hover:text-white transition-all text-xs font-mono flex items-center gap-1"
              title="Copy Code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* IDE Editor Tabs */}
        <div className="bg-surface-100/50 px-2 pt-2 border-b border-white/5 flex flex-wrap gap-1 overflow-x-auto no-scrollbar">
          {CODE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-3.5 py-2 rounded-t-xl text-xs font-mono flex items-center gap-2 transition-all border-t border-x ${
                  isActive
                    ? 'bg-surface-50 border-white/10 text-white font-semibold shadow-sm'
                    : 'bg-transparent border-transparent text-text-muted hover:text-text-secondary hover:bg-surface-100/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: tab.color }} />
                <span>{tab.filename}</span>
              </button>
            );
          })}
        </div>

        {/* Code Editor Body */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm bg-background/90 text-text-primary overflow-x-auto min-h-[220px] flex flex-col justify-between leading-relaxed">
          <pre className="text-text-primary">
            <code>{activeTab.code}</code>
          </pre>

          {/* IDE Console Execution Output Bar */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-300 font-mono bg-surface-100/40 p-2.5 rounded-xl">
            <div className="flex items-center gap-2">
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 shrink-0" />
              <span>{activeTab.output}</span>
            </div>
            <span className="text-[10px] text-text-muted hidden md:inline-block">UTF-8 • {activeTab.language}</span>
          </div>
        </div>

        {/* IDE Footer Bar */}
        <div className="bg-surface-100 px-4 py-2 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-text-muted">
          <div className="flex items-center gap-4">
            <span className="text-accent-cyan font-semibold">NEEL PATEL CODEBASE</span>
            <span>Ln 24, Col 18</span>
            <span>Spaces: 4</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-semibold">● 0 Errors, 0 Warnings</span>
            <span>Ready</span>
          </div>
        </div>

      </div>
    </div>
  );
};
