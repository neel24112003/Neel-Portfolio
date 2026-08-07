import React, { useState, useEffect } from 'react';
import { FileText, Code2, Search, Cpu, FileJson, CheckCircle2, Play, RefreshCw } from 'lucide-react';

interface PipelineStep {
  id: string;
  name: string;
  sub: string;
  icon: React.ElementType;
  codeSnippet: string;
  outputPayload: string;
  color: string;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "pdf",
    name: "PDF Ingestion",
    sub: "Document Input",
    icon: FileText,
    codeSnippet: "with open('input_doc.pdf', 'rb') as f:\n    pdf_reader = PyPDF2.PdfReader(f)\n    raw_text = ''.join([page.extract_text() for page in pdf_reader.pages])",
    outputPayload: "RAW_TEXT: [248 Pages Ingested, 42,190 Characters Loaded]",
    color: "#ef4444"
  },
  {
    id: "python",
    name: "Python Engine",
    sub: "Script Execution",
    icon: Code2,
    codeSnippet: "import re\nfrom bs4 import BeautifulSoup\n\ndef clean_payload(text):\n    text = re.sub(r'\\s+', ' ', text)\n    return text.strip()",
    outputPayload: "PYTHON_PROCESS: Cleaned Whitespace & Stripped Header Artifacts",
    color: "#38bdf8"
  },
  {
    id: "keyword",
    name: "Keyword Search",
    sub: "Regex Match",
    icon: Search,
    codeSnippet: "keywords = ['GIS', 'Automation', 'Report', 'Metrics']\nmatched_blocks = [line for line in raw_text.split('\\n') if any(k in line for k in keywords)]",
    outputPayload: "MATCHED_KEYS: ['GIS_BOUNDARIES', 'AUTOMATION_ETL', 'STATUS_PASS']",
    color: "#f59e0b"
  },
  {
    id: "extraction",
    name: "Text Extraction",
    sub: "Feature Isolation",
    icon: Cpu,
    codeSnippet: "extracted_data = {\n    'title': extract_title(matched_blocks),\n    'timestamp': extract_date(matched_blocks),\n    'attributes': parse_attributes(matched_blocks)\n}",
    outputPayload: "EXTRACTED_STRUCT: Key-Value Map Formatted Successfully",
    color: "#8b5cf6"
  },
  {
    id: "json",
    name: "Structured JSON",
    sub: "Target Payload",
    icon: FileJson,
    codeSnippet: "import json\njson_output = json.dumps(extracted_data, indent=2)\nwith open('output_data.json', 'w') as out_f:\n    out_f.write(json_output)",
    outputPayload: "{\n  \"status\": \"SUCCESS\",\n  \"records_processed\": 248,\n  \"extracted_keys\": 42\n}",
    color: "#10b981"
  }
];

export const PipelineCanvas: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PIPELINE_STEPS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [isRunning]);

  const current = PIPELINE_STEPS[activeStep];

  return (
    <div className="w-full glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col gap-4 sm:gap-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3 sm:pb-4">
        <div>
          <h4 className="text-base sm:text-lg font-display font-semibold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-accent-cyan" />
            Python Data Automation Pipeline
          </h4>
          <p className="text-[11px] sm:text-xs text-text-secondary font-mono">
            Automated PDF Text Extraction & JSON Data Processing Architecture
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono flex items-center gap-2 border transition-all ${
              isRunning
                ? 'bg-accent/20 text-accent border-accent/40 shadow-glow-sm'
                : 'bg-surface-100 text-text-secondary border-white/10 hover:text-white'
            }`}
          >
            {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? 'PIPELINE ACTIVE' : 'RESUME PIPELINE'}
          </button>
        </div>
      </div>

      {/* Visual Pipeline Nodes Flow (Mobile 2-column grid layout) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 relative">
        {PIPELINE_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;

          return (
            <div
              key={step.id}
              onClick={() => {
                setActiveStep(idx);
                setIsRunning(false);
              }}
              className={`cursor-pointer p-3 sm:p-4 rounded-xl border transition-all relative group flex flex-col items-center text-center ${
                isActive
                  ? 'bg-surface-100 border-accent shadow-glow-sm scale-102 sm:scale-105'
                  : isPassed
                  ? 'bg-surface-50/80 border-emerald-500/30'
                  : 'bg-surface-50/40 border-white/5 opacity-65 hover:opacity-100'
              }`}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-transform group-hover:scale-110 ${
                  isActive
                    ? 'bg-accent/20 text-white shadow-glow-sm ring-1 ring-accent'
                    : isPassed
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-surface-200 text-text-muted'
                }`}
                style={{ color: isActive ? step.color : undefined }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              <span className="text-[11px] sm:text-xs font-mono font-semibold text-white mb-0.5 truncate max-w-full">
                0{idx + 1}. {step.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-text-muted leading-tight truncate max-w-full">
                {step.sub}
              </span>

              {isPassed && (
                <CheckCircle2 className="w-3 h-3 text-emerald-400 absolute top-2 right-2" />
              )}
            </div>
          );
        })}
      </div>

      {/* Code Snippet & Inspection Terminal Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {/* Left: Code Snippet */}
        <div className="bg-surface-100/90 rounded-xl p-3.5 sm:p-4 border border-white/10 font-mono text-[11px] sm:text-xs overflow-x-auto">
          <div className="flex items-center justify-between text-text-muted mb-2 pb-2 border-b border-white/5 text-[10px] sm:text-[11px]">
            <span>CODE SNIPPET — 0{activeStep + 1} ({current.name})</span>
            <span className="text-accent-cyan">Python 3.11</span>
          </div>
          <pre className="text-text-primary leading-relaxed overflow-x-auto">
            <code>{current.codeSnippet}</code>
          </pre>
        </div>

        {/* Right: Output Inspection */}
        <div className="bg-surface-100/90 rounded-xl p-3.5 sm:p-4 border border-white/10 font-mono text-[11px] sm:text-xs overflow-x-auto">
          <div className="flex items-center justify-between text-text-muted mb-2 pb-2 border-b border-white/5 text-[10px] sm:text-[11px]">
            <span>EXECUTION PAYLOAD</span>
            <span className="text-emerald-400 font-semibold">[VALIDATED]</span>
          </div>
          <pre className="text-emerald-300 leading-relaxed overflow-x-auto">
            <code>{current.outputPayload}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
