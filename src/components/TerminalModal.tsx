import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CORE_PULSE_KEYWORDS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState<string>('');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      command: 'neel.init()',
      output: (
        <div className="space-y-1">
          <p className="text-emerald-400 font-bold">System Environment Initialized.</p>
          <p className="text-text-secondary">Type <span className="text-accent-cyan font-bold">help</span> or <span className="text-accent-cyan font-bold">neel.skills()</span> to explore.</p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    let response: React.ReactNode = '';

    const cleanCmd = cmd.toLowerCase().replace(/['"();]/g, '');

    if (cleanCmd === 'help') {
      response = (
        <div className="space-y-1 text-text-secondary">
          <p className="text-white font-semibold mb-1">Available Terminal Commands:</p>
          <p>• <span className="text-accent-cyan font-mono">neel.skills()</span> — List core technical proficiencies</p>
          <p>• <span className="text-accent-cyan font-mono">neel.projects()</span> — List flagship engineering projects</p>
          <p>• <span className="text-accent-cyan font-mono">neel.about()</span> — View Neel Patel background summary</p>
          <p>• <span className="text-accent-cyan font-mono">neel.contact()</span> — Get contact info (Email & Location)</p>
          <p>• <span className="text-accent-cyan font-mono">clear</span> — Clear terminal window</p>
        </div>
      );
    } else if (cleanCmd === 'neel.skills' || cleanCmd === 'skills') {
      response = (
        <div className="space-y-2">
          <p className="text-emerald-400 font-bold">[SKILLS MATRIX VERIFIED]</p>
          <div className="flex flex-wrap gap-2">
            {CORE_PULSE_KEYWORDS.map((k) => (
              <span key={k} className="px-2 py-0.5 rounded bg-surface-200 text-accent-cyan text-xs font-mono border border-accent/30">
                {k}
              </span>
            ))}
          </div>
        </div>
      );
    } else if (cleanCmd === 'neel.projects' || cleanCmd === 'projects') {
      response = (
        <div className="space-y-1 text-text-secondary">
          <p className="text-white font-semibold">Flagship Projects:</p>
          <p>1. <span className="text-emerald-400 font-bold">SAHITYA SANGAM</span> — Web Platform & App (1800+ books, PHP, MySQL, Flutter)</p>
          <p>2. <span className="text-emerald-400 font-bold">GIS & GEOSPATIAL ANALYSIS</span> — ArcMap, GEE, Gujarat LULC, Flood Sim</p>
          <p>3. <span className="text-emerald-400 font-bold">PYTHON DATA AUTOMATION</span> — PDF Extraction ETL to JSON Pipeline</p>
          <p>4. <span className="text-emerald-400 font-bold">SHREEJI KRUPA FARSAN</span> — Retail E-commerce UI & PDF Receipts</p>
        </div>
      );
    } else if (cleanCmd === 'neel.about' || cleanCmd === 'about') {
      response = <p className="text-text-secondary">{PERSONAL_INFO.summary}</p>;
    } else if (cleanCmd === 'neel.contact' || cleanCmd === 'contact') {
      response = (
        <div className="space-y-1 text-text-secondary">
          <p>Email: <span className="text-white font-mono">{PERSONAL_INFO.email}</span></p>
          <p>Phone: <span className="text-white font-mono">{PERSONAL_INFO.phone}</span></p>
          <p>Location: <span className="text-white font-mono">{PERSONAL_INFO.location}</span></p>
        </div>
      );
    } else if (cleanCmd === 'clear') {
      setLogs([]);
      setInput('');
      return;
    } else {
      response = (
        <p className="text-red-400 font-mono">
          Command not recognized: "{cmd}". Type <span className="text-white underline">help</span> for command list.
        </p>
      );
    }

    setLogs((prev) => [...prev, { command: cmd, output: response }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-surface-50 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95">
        {/* Terminal Header */}
        <div className="bg-surface-100 px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <TerminalIcon className="w-4 h-4 text-accent-cyan" />
            <span className="text-xs font-mono font-bold text-white tracking-wider">
              neel_patel_cli_v1.0
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-surface-200 text-text-secondary hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-xs overflow-y-auto flex-1 space-y-4 bg-background/90 text-text-primary">
          <div className="p-3 rounded-xl bg-surface-100/50 border border-white/5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-text-secondary">
              Interactive Terminal Easter Egg. Type <span className="text-accent-cyan font-bold">help</span> to begin.
            </span>
          </div>

          {logs.map((log, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center gap-2 text-accent-cyan">
                <span className="text-emerald-400 font-bold">neel@dev:~$</span>
                <span className="text-white font-semibold">{log.command}</span>
              </div>
              <div className="pl-4 border-l border-white/10 py-1">{log.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Terminal Input Footer */}
        <form onSubmit={handleCommandSubmit} className="bg-surface-100 p-3 border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-mono font-bold text-xs pl-2">neel@dev:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. neel.skills())..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder:text-text-muted"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-accent/20 hover:bg-accent/40 border border-accent/40 text-white text-xs font-mono flex items-center gap-1 transition-all"
          >
            <Send className="w-3 h-3" />
            RUN
          </button>
        </form>
      </div>
    </div>
  );
};
