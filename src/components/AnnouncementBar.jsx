import React from 'react';
import { AlertCircle, Calendar, Info, ChevronRight } from 'lucide-react';

/**
 * Top Dynamic Announcement Bar
 * Displays live urgent closures, gazetted holidays, or academic info.
 * ONLY uses animate-pulse for CRITICAL emergency alerts.
 */
export default function AnnouncementBar({
  type = 'HOLIDAY', // 'CRITICAL' | 'HOLIDAY' | 'INFO'
  message = 'Official Gazette Notice: All Government Schools across Liaquatabad Town will observe Defence Day Holiday on Sept 06, 2026.',
  actionText = 'View Gazette Order',
  actionLink = '#notices',
}) {
  const styles = {
    CRITICAL: {
      bg: '#DC2626',          // Solid red — emergency
      textColor: '#FFFFFF',
      tagBg: 'rgba(0,0,0,0.25)',
      tagText: '#FFFFFF',
      actionColor: '#FCA5A5',
      icon: <AlertCircle className="w-3.5 h-3.5" />,
      tag: 'EMERGENCY ALERT',
      pulse: true,            // animate-pulse ONLY for critical
    },
    HOLIDAY: {
      bg: '#006AC7',          // Brand blue — official holiday
      textColor: 'rgba(255,255,255,0.90)',
      tagBg: 'rgba(255,255,255,0.15)',
      tagText: '#FFFFFF',
      actionColor: '#DCEFFF',
      icon: <Calendar className="w-3.5 h-3.5" />,
      tag: 'OFFICIAL PUBLIC HOLIDAY',
      pulse: false,
    },
    INFO: {
      bg: '#4B7F3A',          // Green — informational/academic
      textColor: 'rgba(255,255,255,0.90)',
      tagBg: 'rgba(255,255,255,0.15)',
      tagText: '#FFFFFF',
      actionColor: '#E3F0DC',
      icon: <Info className="w-3.5 h-3.5" />,
      tag: 'ACADEMIC ANNOUNCEMENT',
      pulse: false,
    },
  };

  const current = styles[type] || styles.INFO;

  return (
    <aside
      aria-label="Official Public Announcement"
      style={{
        backgroundColor: current.bg,
        position: 'relative',
        zIndex: 60,
      }}
    >
      <div
        className="section-container py-2.5 flex flex-wrap items-center justify-between gap-3"
        style={{ fontSize: '0.6875rem' }}
      >
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          {/* Tag badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold tracking-widest uppercase whitespace-nowrap flex-shrink-0 ${current.pulse ? 'animate-pulse' : ''}`}
            style={{
              backgroundColor: current.tagBg,
              color: current.tagText,
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
            }}
          >
            {current.icon}
            {current.tag}
          </span>

          {/* Message */}
          <p
            className="truncate font-medium"
            style={{ color: current.textColor }}
          >
            {message}
          </p>
        </div>

        {/* Action Link */}
        {actionText && (
          <a
            href={actionLink}
            className="inline-flex items-center gap-1 font-semibold whitespace-nowrap flex-shrink-0 transition-opacity hover:opacity-80"
            style={{ color: current.actionColor, textDecoration: 'none' }}
          >
            <span>{actionText}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </aside>
  );
}
