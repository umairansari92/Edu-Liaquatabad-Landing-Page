'use client';

import React, { useState, useEffect } from 'react';
import {
  Calendar,
  AlertCircle,
  Info,
  Award,
  Bell,
  CheckCircle2,
  Building2,
} from 'lucide-react';

/**
 * DDO / Admin Executive Announcement Bulletin Card
 * In strict compliance with:
 * - docs/LANDING_PAGE.md (Authoritative Public Gateway & Transparency Engine)
 * - docs/DESIGN.md (V2.0 Frozen Design Constitution: Blue #006AC7, Green #4B7F3A, Glass Cards)
 * - docs/CODE_QUALITY_AND_NAMING_STANDARDS.md (Meaningful, context-aware naming)
 */
export default function ExecutiveAnnouncementCard({
  initialAnnouncement = null,
}) {
  const [activeAnnouncement, setActiveAnnouncement] = useState(initialAnnouncement);

  useEffect(() => {
    let isComponentMounted = true;

    async function refreshAnnouncement() {
      try {
        const statsResponse = await fetch('/api/v1/public/town-stats');
        if (statsResponse.ok) {
          const statsJsonPayload = await statsResponse.json();
          if (statsJsonPayload.success && statsJsonPayload.data && isComponentMounted) {
            setActiveAnnouncement(statsJsonPayload.data.activeAnnouncement || null);
          }
        }
      } catch (fetchError) {
        // Retain initial server-rendered announcement
      }
    }

    refreshAnnouncement();
    return () => {
      isComponentMounted = false;
    };
  }, []);

  // Return null if no active announcement exists to preserve clean layout
  if (!activeAnnouncement) {
    return null;
  }

  const categoryStyles = {
    CRITICAL: {
      badgeBackgroundColor: '#FEE2E2',
      badgeBorderColor: '#FCA5A5',
      badgeTextColor: '#DC2626',
      iconElement: <AlertCircle className="w-3.5 h-3.5" />,
      label: 'URGENT EXECUTIVE ORDER',
      shouldPulse: true,
    },
    HOLIDAY: {
      badgeBackgroundColor: '#E3F0DC',
      badgeBorderColor: '#C9DFBC',
      badgeTextColor: '#4B7F3A',
      iconElement: <Calendar className="w-3.5 h-3.5" />,
      label: 'OFFICIAL GAZETTED HOLIDAY',
      shouldPulse: false,
    },
    INFO: {
      badgeBackgroundColor: '#DCEFFF',
      badgeBorderColor: '#B9DEFF',
      badgeTextColor: '#006AC7',
      iconElement: <Info className="w-3.5 h-3.5" />,
      label: 'DEPARTMENTAL DIRECTIVE',
      shouldPulse: false,
    },
    // TBD: Institutional color token for EVENT type; defaulting to INFO (Brand Blue #006AC7) pending formal institutional specification
    EVENT: {
      badgeBackgroundColor: '#DCEFFF',
      badgeBorderColor: '#B9DEFF',
      badgeTextColor: '#006AC7',
      iconElement: <Bell className="w-3.5 h-3.5" />,
      label: 'TOWN EDUCATIONAL EVENT',
      shouldPulse: false,
    },
  };

  const currentCategory =
    categoryStyles[activeAnnouncement.type] || categoryStyles.INFO;

  return (
    <section
      id="announcement"
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F8FBFD' }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="section-label justify-center">
            <Building2 className="w-3.5 h-3.5" />
            Town Directorate Notice
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight mt-1"
            style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
          >
            Executive Leadership Bulletin
          </h2>
          <p
            className="text-sm mt-2 max-w-xl mx-auto"
            style={{ color: '#526477' }}
          >
            Authoritative directives, gazette orders, and official notices issued
            directly by the Town Education Directorate.
          </p>
        </div>

        {/* Master Announcement Card */}
        <div
          className="rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(0, 106, 199, 0.14)',
            boxShadow: '0 16px 40px rgba(0, 33, 61, 0.06)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Official Announcer Profile (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 lg:pr-8 border-slate-200/80">
              <div className="relative mb-4">
                {activeAnnouncement.announcerPhotoUrl ? (
                  <img
                    src={activeAnnouncement.announcerPhotoUrl}
                    alt={activeAnnouncement.announcerName}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md"
                    style={{
                      border: '3px solid #FFFFFF',
                      boxShadow: '0 8px 24px rgba(0, 106, 199, 0.12)',
                    }}
                  />
                ) : (
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #006AC7 0%, #00213D 100%)',
                      border: '3px solid #FFFFFF',
                    }}
                  >
                    <Award className="w-10 h-10 text-white" />
                  </div>
                )}
                {/* Official Verification Checkmark Badge */}
                <div
                  className="absolute -bottom-1.5 -right-1.5 p-1 rounded-full shadow-sm"
                  style={{ backgroundColor: '#4B7F3A' }}
                  title="Officially Verified Government Dignitary"
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3
                className="text-lg font-bold"
                style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
              >
                {activeAnnouncement.announcerName}
              </h3>
              <p
                className="text-xs font-semibold mt-0.5"
                style={{ color: '#006AC7' }}
              >
                {activeAnnouncement.announcerDesignation}
              </p>
              <p
                className="text-[11px] mt-1"
                style={{ color: '#8094A8' }}
              >
                Education Directorate • Liaquatabad Town Centre (DMC)
              </p>

              <div
                className="mt-4 px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wide uppercase inline-flex items-center gap-1.5"
                style={{
                  backgroundColor: 'rgba(75, 127, 58, 0.08)',
                  color: '#4B7F3A',
                  border: '1px solid rgba(75, 127, 58, 0.20)',
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                Verified Municipal Authority
              </div>
            </div>

            {/* Right Column: Directive Title, Message & Event Details (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                {/* Category & Date Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                      currentCategory.shouldPulse ? 'animate-pulse' : ''
                    }`}
                    style={{
                      backgroundColor: currentCategory.badgeBackgroundColor,
                      border: `1px solid ${currentCategory.badgeBorderColor}`,
                      color: currentCategory.badgeTextColor,
                      fontSize: '0.65rem',
                    }}
                  >
                    {currentCategory.iconElement}
                    {currentCategory.label}
                  </span>

                  {activeAnnouncement.eventDate && (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: 'rgba(16, 32, 51, 0.04)',
                        border: '1px solid rgba(16, 32, 51, 0.08)',
                        color: '#526477',
                        fontSize: '0.65rem',
                      }}
                    >
                      <Calendar className="w-3 h-3 text-slate-500" />
                      Effective Date: {activeAnnouncement.eventDate}
                    </span>
                  )}
                </div>

                {/* Directive Title */}
                <h3
                  className="text-xl sm:text-2xl font-extrabold leading-snug"
                  style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                >
                  {activeAnnouncement.title}
                </h3>

                {/* Directive Full Message Body */}
                <p
                  className="text-sm sm:text-base mt-3.5 leading-relaxed whitespace-pre-line"
                  style={{ color: '#526477' }}
                >
                  {activeAnnouncement.message}
                </p>
              </div>

              {/* Official Seal / Footer Note */}
              <div
                className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs"
                style={{ borderTop: '1px solid rgba(0, 106, 199, 0.10)' }}
              >
                <span
                  className="font-medium flex items-center gap-1.5"
                  style={{ color: '#8094A8', fontSize: '0.6875rem' }}
                >
                  <span>Government Gazette Reference:</span>
                  <strong style={{ color: '#102033' }}>
                    DMC-LQT/EDU/{new Date().getFullYear()}
                  </strong>
                </span>

                <span
                  className="text-[11px] font-semibold"
                  style={{ color: '#006AC7' }}
                >
                  Official Public Education Gateway
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
