import React from 'react';
import { AlertCircle, Calendar, Sparkles, ChevronRight } from 'lucide-react';

/**
 * Top Dynamic Announcement Bar
 * Displays live urgent public closures, rain alerts, or gazetted holidays
 */
export default function AnnouncementBar({
  type = 'HOLIDAY', // 'CRITICAL' | 'HOLIDAY' | 'INFO'
  message = 'Official Gazette Notice: All Government Schools across Liaquatabad Town will observe Defence Day Holiday on Sept 06, 2026.',
  actionText = 'View Gazette Order',
  actionLink = '#notices',
}) {
  const styles = {
    CRITICAL: {
      bg: 'bg-gradient-to-r from-rose-950 via-red-900 to-rose-950 border-rose-700/60 text-rose-100',
      badge: 'bg-rose-600 text-white animate-pulse',
      icon: <AlertCircle className="w-4 h-4 text-rose-300 animate-bounce" />,
      tag: 'EMERGENCY CLOSURE ALERT',
    },
    HOLIDAY: {
      bg: 'bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-950 border-emerald-700/60 text-emerald-100',
      badge: 'bg-emerald-600 text-white',
      icon: <Calendar className="w-4 h-4 text-emerald-300" />,
      tag: 'OFFICIAL PUBLIC HOLIDAY',
    },
    INFO: {
      bg: 'bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-blue-800/60 text-blue-100',
      badge: 'bg-blue-600 text-white',
      icon: <Sparkles className="w-4 h-4 text-blue-300" />,
      tag: 'ACADEMIC ANNOUNCEMENT',
    },
  };

  const current = styles[type] || styles.INFO;

  return (
    <aside aria-label="Official Public Announcements" className={`relative z-50 border-b py-2.5 px-4 text-xs font-medium ${current.bg} shadow-md transition-all`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-[280px]">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ${current.badge}`}>
            {current.icon}
            {current.tag}
          </span>
          <p className="line-clamp-1 text-slate-200 font-normal sm:text-xs text-[11px]">
            {message}
          </p>
        </div>

        {actionText && (
          <a
            href={actionLink}
            className="inline-flex items-center gap-1 font-semibold text-emerald-300 hover:text-white transition-colors underline-offset-4 hover:underline text-[11px] whitespace-nowrap"
          >
            <span>{actionText}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </aside>
  );
}
