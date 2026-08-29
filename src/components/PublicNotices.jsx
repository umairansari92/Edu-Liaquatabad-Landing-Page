import React from 'react';
import { FileText, Download, Calendar, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { dynamicNoticesData } from '../data/dynamicNotices.js';

export default function PublicNotices() {
  return (
    <section id="notices" className="py-20 bg-slate-900/40 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              Government Gazette & Notifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2">
              Official Circulars & Public Orders
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Verified administrative circulars, examination orders, and directives issued by the Education Department Liaquatabad Town Centre.
            </p>
          </div>
        </div>

        {/* Notices Table / Grid */}
        <div className="space-y-4">
          {dynamicNoticesData.map((not) => (
            <div
              key={not.id}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all hover:bg-slate-800/60 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl shadow-black/30 group"
            >
              <div className="flex-1">
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                    {not.dispatchNo}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                    {not.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {not.issueDate}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                  {not.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-3xl">
                  {not.summary}
                </p>

                <div className="mt-2 text-[11px] text-slate-500 font-medium">
                  <strong>Target Audience:</strong> {not.audience}
                </div>
              </div>

              {/* PDF Action */}
              <div className="shrink-0 flex items-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                <a
                  href={not.pdfUrl}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-emerald-600 text-white transition-all flex items-center gap-2 shadow-md"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download ({not.fileSize})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
