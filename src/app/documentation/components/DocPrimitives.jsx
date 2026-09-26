import React, { useState } from 'react';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const DocHeader = ({ title, badge, subtitle }) => (
  <div className="space-y-3 mb-8 border-b border-slate-200/80 pb-6">
    {badge && (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#006AC7] border border-blue-200">
        <Sparkles className="w-3.5 h-3.5" />
        <span>{badge}</span>
      </div>
    )}
    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102033] tracking-tight">{title}</h1>
    {subtitle && <p className="text-sm text-[#526477] leading-relaxed max-w-3xl">{subtitle}</p>}
  </div>
);

export const SectionTitle = ({ children }) => (
  <h3 className="text-base font-bold text-[#102033] mt-8 mb-4 flex items-center gap-2">
    <div className="w-1.5 h-4 rounded-full bg-[#006AC7]" />
    <span>{children}</span>
  </h3>
);

export const InfoCard = ({ icon, color = 'blue', title, desc }) => {
  const colorMap = {
    blue: 'bg-blue-50/70 border-blue-200 text-blue-900',
    emerald: 'bg-emerald-50/70 border-emerald-200 text-emerald-900',
    purple: 'bg-purple-50/70 border-purple-200 text-purple-900',
    amber: 'bg-amber-50/70 border-amber-200 text-amber-900',
    red: 'bg-red-50/70 border-red-200 text-red-900',
    cyan: 'bg-cyan-50/70 border-cyan-200 text-cyan-900',
  };

  const iconColorMap = {
    blue: 'text-[#006AC7]',
    emerald: 'text-[#4B7F3A]',
    purple: 'text-purple-600',
    amber: 'text-amber-600',
    red: 'text-red-600',
    cyan: 'text-cyan-600',
  };

  return (
    <div className={`p-4 rounded-2xl border transition-all hover:shadow-xs ${colorMap[color] || colorMap.blue}`}>
      <div className="flex items-center gap-2.5 mb-2">
        <span className={iconColorMap[color] || 'text-[#006AC7]'}>{icon}</span>
        <h4 className="font-bold text-xs uppercase tracking-wider">{title}</h4>
      </div>
      <p className="text-xs text-[#526477] leading-relaxed font-normal">{desc}</p>
    </div>
  );
};

export const Steps = ({ items }) => (
  <div className="space-y-3.5 my-6">
    {items.map((s, i) => (
      <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
        <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#006AC7] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
          {s.step || i + 1}
        </div>
        <div className="space-y-1">
          <p className="font-bold text-xs text-[#102033]">{s.title}</p>
          <p className="text-xs text-[#526477] leading-relaxed">{s.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export const ComparisonTable = ({ headers = ['Component / Choice', 'Implementation Rationale & Why It Won'], rows }) => (
  <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs bg-white my-6">
    <table className="w-full text-left text-xs">
      <thead className="bg-slate-50 border-b border-slate-200 font-bold text-[#102033]">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="p-3.5">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 text-[#526477]">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
            <td className="p-3.5 font-bold text-[#102033] align-top w-1/3">{row.left}</td>
            <td className="p-3.5 align-top leading-relaxed">{row.right}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const TerminalBlock = ({ title = 'SYSTEM PIPELINE ARCHITECTURE', children }) => (
  <div className="bg-slate-950 font-mono text-emerald-400 p-5 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto text-xs leading-relaxed my-6">
    <div className="text-slate-400 text-[11px] mb-2 font-bold">// {title}</div>
    <pre className="text-emerald-400 leading-relaxed font-mono">{children}</pre>
  </div>
);

export const Callout = ({ type = 'info', title, children }) => {
  const styles = {
    info: 'bg-blue-50/70 border-[#006AC7] text-blue-900',
    warning: 'bg-amber-50/70 border-amber-600 text-amber-900',
    security: 'bg-red-50/70 border-red-600 text-red-900',
    success: 'bg-emerald-50/70 border-[#4B7F3A] text-emerald-900',
  };

  return (
    <div className={`p-4 rounded-r-xl border-l-4 my-6 text-xs leading-relaxed space-y-1 ${styles[type] || styles.info}`}>
      {title && <div className="font-bold uppercase tracking-wider">{title}</div>}
      <div className="text-[#526477]">{children}</div>
    </div>
  );
};

export const FaqItem = ({ question, answer, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-xs transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
      >
        <div className="flex items-center gap-3">
          {category && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-600 border border-slate-200">
              {category}
            </span>
          )}
          <span className="font-bold text-xs text-[#102033]">{question}</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-xs text-[#526477] leading-relaxed border-t border-slate-100 bg-slate-50/30">
          {answer}
        </div>
      )}
    </div>
  );
};
