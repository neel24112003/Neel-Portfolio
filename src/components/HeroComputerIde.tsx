import React, { useState } from 'react';
import { Terminal, Code2, Globe2, Cpu, Sparkles, Play, Copy, Check } from 'lucide-react';

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

  public function filterBooks($cat_ids, $keywords) {
    $query = "SELECT * FROM books WHERE cat_id IN (...)";
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
    <div className="w-full max-w-full sm:max-w-4xl mx-auto my-4 sm:my-8 relative group overflow-hidden px-1 sm:px-0">
      
      {/* Outer Glow Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-cyan to-accent-violet rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 pointer-events-none" />

      {/* Main IDE Window Container */}
      <div className={`relative rounded-2xl bg-surface-50/95 shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col w-full max-w-full transition-all duration-500 ${
        activeTabId === 'web'
          ? 'neon-border-web'
          : activeTabId === 'gis'
          ? 'neon-border-gis'
          : activeTabId === 'automation'
          ? 'neon-border-python'
          : 'neon-border-ai'
      }`}>
        
        {/* IDE Header Controls */}
        <div className="bg-surface-100/90 px-3 py-2.5 sm:px-4 sm:py-3 border-b border-white/10 flex items-center justify-between gap-2 w-full overflow-hidden">
          
          {/* macOS Control Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs font-mono text-text-muted hidden xs:inline-block truncate max-w-[110px] sm:max-w-none">
              neel-patel-workstation
            </span>
          </div>

          {/* Action Copy & Status */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="text-[9px] sm:text-[11px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ACTIVE
            </span>

            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-lg bg-surface-200 hover:bg-surface-300 text-text-secondary hover:text-white transition-all text-xs font-mono flex items-center gap-1 active:scale-95 shrink-0"
              title="Copy Code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* IDE Editor Tabs (Swipeable on mobile) */}
        <div className="bg-surface-100/50 px-2 pt-2 border-b border-white/5 flex items-center gap-1 overflow-x-auto no-scrollbar whitespace-nowrap flex-nowrap max-w-full">
          {CODE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-t-xl text-[10px] sm:text-xs font-mono flex items-center gap-1.5 transition-all border-t border-x shrink-0 ${
                  isActive
                    ? 'bg-surface-50 border-white/10 text-white font-semibold shadow-sm'
                    : 'bg-transparent border-transparent text-text-muted hover:text-text-secondary hover:bg-surface-100/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: tab.color }} />
                <span>{tab.filename}</span>
              </button>
            );
          })}
        </div>

        {/* Code Editor Body (Strict Pre-wrap to prevent horizontal overflow) */}
        <div className="p-3 sm:p-6 font-mono text-[10px] sm:text-xs md:text-sm bg-background/90 text-text-primary overflow-x-auto max-w-full min-h-[170px] sm:min-h-[220px] flex flex-col justify-between leading-relaxed">
          <pre className="text-text-primary whitespace-pre-wrap break-all sm:break-normal max-w-full overflow-x-auto">
            <code>{activeTab.code}</code>
          </pre>

          {/* IDE Console Execution Output Bar */}
          <div className="mt-3 pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[9px] sm:text-xs text-emerald-300 font-mono bg-surface-100/40 p-2 sm:p-2.5 rounded-xl max-w-full overflow-hidden">
            <div className="flex items-center gap-1.5 truncate max-w-full">
              <Play className="w-3 h-3 text-emerald-400 fill-emerald-400 shrink-0" />
              <span className="truncate">{activeTab.output}</span>
            </div>
            <span className="text-[9px] text-text-muted shrink-0 hidden sm:inline-block">UTF-8 • {activeTab.language}</span>
          </div>
        </div>

        {/* IDE Footer Bar */}
        <div className="bg-surface-100 px-3 py-1.5 sm:px-4 sm:py-2 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-text-muted w-full overflow-hidden">
          <div className="flex items-center gap-3 truncate">
            <span className="text-accent-cyan font-semibold truncate max-w-[110px] sm:max-w-none">NEEL PATEL</span>
            <span className="hidden xs:inline">Ln 24, Col 18</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-emerald-400 font-semibold">● 0 Errors</span>
          </div>
        </div>

      </div>
    </div>
  );
};
