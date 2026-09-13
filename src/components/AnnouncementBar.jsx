'use client';

import React, { useState, useEffect } from 'react';
import { AlertCircle, Calendar, Info, ChevronRight, Bell } from 'lucide-react';

/**
 * Top Dynamic Announcement Bar
 * In strict compliance with docs/LANDING_PAGE.md (Section 01) and docs/DESIGN.md (Section 2.6):
 * - CRITICAL: Solid Red (#DC2626) with emergency pulse (animate-pulse strictly for emergencies)
 * - HOLIDAY: Government Emerald Green (#4B7F3A / #059669) (Gazetted holidays, vacations)
 * - INFO: Brand Blue (#006AC7) (Registration deadlines, examination schedules)
 * - EVENT: // TBD: Institutional color token for EVENT type; defaulting to INFO (#006AC7) pending formal specification.
 */
export default function AnnouncementBar({
  initialAnnouncement = null,
  initialHoliday = null,
}) {
  const [activeAnnouncement, setActiveAnnouncement] = useState(initialAnnouncement);
  const [upcomingHoliday, setUpcomingHoliday] = useState(initialHoliday);

  useEffect(() => {
    let isComponentMounted = true;

    async function syncLatestAnnouncement() {
      try {
        const statsResponse = await fetch('/api/v1/public/town-stats');
        if (statsResponse.ok) {
          const statsJsonPayload = await statsResponse.json();
          if (statsJsonPayload.success && statsJsonPayload.data && isComponentMounted) {
            setActiveAnnouncement(statsJsonPayload.data.activeAnnouncement || null);
            setUpcomingHoliday(statsJsonPayload.data.upcomingHoliday || null);
          }
        }
      } catch (synchronizationError) {
        // Retain initial server-rendered properties
      }
    }

    syncLatestAnnouncement();
    return () => {
      isComponentMounted = false;
    };
  }, []);

  const styles = {
    CRITICAL: {
      backgroundColor: '#DC2626',
      textColor: '#FFFFFF',
      tagBackground: 'rgba(0,0,0,0.25)',
      tagTextColor: '#FFFFFF',
      actionTextColor: '#FCA5A5',
      iconElement: <AlertCircle className="w-3.5 h-3.5" />,
      tagLabel: 'EMERGENCY ALERT',
      shouldPulse: true,
    },
    HOLIDAY: {
      backgroundColor: '#4B7F3A', // Government Emerald Green per LANDING_PAGE.md & DESIGN.md
      textColor: 'rgba(255,255,255,0.95)',
      tagBackground: 'rgba(255,255,255,0.18)',
      tagTextColor: '#FFFFFF',
      actionTextColor: '#E3F0DC',
      iconElement: <Calendar className="w-3.5 h-3.5" />,
      tagLabel: 'OFFICIAL PUBLIC HOLIDAY',
      shouldPulse: false,
    },
    INFO: {
      backgroundColor: '#006AC7', // Brand Blue per LANDING_PAGE.md & DESIGN.md
      textColor: 'rgba(255,255,255,0.95)',
      tagBackground: 'rgba(255,255,255,0.18)',
      tagTextColor: '#FFFFFF',
      actionTextColor: '#DCEFFF',
      iconElement: <Info className="w-3.5 h-3.5" />,
      tagLabel: 'ACADEMIC ANNOUNCEMENT',
      shouldPulse: false,
    },
    // TBD: Institutional color token for EVENT type; defaulting to INFO (Brand Blue #006AC7) pending formal institutional gazette specification
    EVENT: {
      backgroundColor: '#006AC7',
      textColor: 'rgba(255,255,255,0.95)',
      tagBackground: 'rgba(255,255,255,0.18)',
      tagTextColor: '#FFFFFF',
      actionTextColor: '#DCEFFF',
      iconElement: <Bell className="w-3.5 h-3.5" />,
      tagLabel: 'OFFICIAL TOWN EVENT',
      shouldPulse: false,
    },
  };

  let displayType = 'INFO';
  let displayMessage =
    'Official Notice: Admission verification and digital attendance active for Academic Session 2026–27.';
  let displayActionText = 'View Gazette Notices';
  let displayActionLink = '#notices';

  if (activeAnnouncement) {
    displayType = styles[activeAnnouncement.type] ? activeAnnouncement.type : 'INFO';
    displayMessage = activeAnnouncement.title
      ? `${activeAnnouncement.title}: ${activeAnnouncement.message}`
      : activeAnnouncement.message;
    displayActionText = activeAnnouncement.eventDate
      ? `Gazette Date: ${activeAnnouncement.eventDate}`
      : 'View Directorate Order';
    displayActionLink = '#announcement';
  } else if (upcomingHoliday) {
    displayType = 'HOLIDAY';
    const dateText =
      upcomingHoliday.startDate === upcomingHoliday.endDate
        ? upcomingHoliday.startDate
        : `${upcomingHoliday.startDate} to ${upcomingHoliday.endDate}`;
    displayMessage = `Official Gazette Notice: All Government Schools across Liaquatabad Town will observe ${upcomingHoliday.title} Holiday on ${dateText}.`;
    displayActionText = 'View Academic Calendar';
    displayActionLink = '#events';
  }

  const currentTheme = styles[displayType] || styles.INFO;

  return (
    <aside
      aria-label="Official Public Announcement"
      style={{
        backgroundColor: currentTheme.backgroundColor,
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
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold tracking-widest uppercase whitespace-nowrap flex-shrink-0 ${
              currentTheme.shouldPulse ? 'animate-pulse' : ''
            }`}
            style={{
              backgroundColor: currentTheme.tagBackground,
              color: currentTheme.tagTextColor,
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
            }}
          >
            {currentTheme.iconElement}
            {currentTheme.tagLabel}
          </span>

          {/* Message text */}
          <p
            className="truncate font-medium"
            style={{ color: currentTheme.textColor }}
          >
            {displayMessage}
          </p>
        </div>

        {/* Action Link */}
        {displayActionText && (
          <a
            href={displayActionLink}
            className="inline-flex items-center gap-1 font-semibold whitespace-nowrap flex-shrink-0 transition-opacity hover:opacity-80"
            style={{ color: currentTheme.actionTextColor, textDecoration: 'none' }}
          >
            <span>{displayActionText}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </aside>
  );
}
