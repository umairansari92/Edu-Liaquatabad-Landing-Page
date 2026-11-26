'use client';

import React, { useState } from 'react';
import { Bell, FileText, ClipboardCheck, ArrowRight, X } from 'lucide-react';

const notices = [
  {
    id: 1,
    type: 'CIRCULAR',
    title: 'School Timing Notification — Winter Schedule 2026',
    date: '30 August 2026',
    audience: 'Town Wide',
    dot: 'green',
    summary:
      'Updated morning and afternoon arrival windows take effect across all municipal primary and secondary campuses in Liaquatabad Town.',
  },
  {
    id: 2,
    type: 'MEETING',
    title: 'Monthly HM & Teachers Coordination Meeting',
    date: '29 August 2026',
    audience: 'Teachers',
    dot: 'green',
    summary:
      'Head Masters and cluster supervisors review attendance compliance, syllabus pacing, and parent link verifications.',
  },
  {
    id: 3,
    type: 'CIRCULAR',
    title: 'Academic Circular — Mid-Term Examination Schedule',
    date: '28 August 2026',
    audience: 'All Schools',
    dot: 'green',
    summary:
      'Centralized examination timetables and marksheet submission deadlines published for municipal schools.',
  },
  {
    id: 4,
    type: 'NOTICE',
    title: 'Attendance Verification Deadline — September 2026',
    date: '27 August 2026',
    audience: 'HMs & Supervisors',
    dot: 'amber',
    summary:
      'Monthly student and staff attendance registers must be reconciled before close of reporting window.',
  },
  {
    id: 5,
    type: 'CIRCULAR',
    title: 'Official Gazette: Defence Day Holiday — 6 September 2026',
    date: '25 August 2026',
    audience: 'All Schools',
    dot: 'green',
    summary:
      'All municipal schools under TMC Liaquatabad Education Department remain closed in observance of Defence Day.',
  },
];

const dotColors = {
  green: '#4B7F3A',
  amber: '#D97706',
};

const typeIcons = {
  CIRCULAR: FileText,
  MEETING:  ClipboardCheck,
  NOTICE:   Bell,
};

export default function PublicNotices() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';
  const [selectedNotice, setSelectedNotice] = useState(null);

  return (
    <section
      id="notices"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F2F8EF' }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="section-label">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: '#4B7F3A' }}
              />
              Official Communications
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
            >
              Latest Notices &amp; Circulars
            </h2>
          </div>
          <a
            href={`${portalUrl}/login`}
            className="btn-accent text-sm px-4 py-2.5 flex-shrink-0"
          >
            View All Notices in Portal
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Notice List */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(75,127,58,0.15)',
            boxShadow: '0 8px 30px rgba(16,38,25,0.05)',
          }}
        >
          {notices.map((noticeItem, noticeIndex) => {
            const Icon = typeIcons[noticeItem.type] || Bell;
            const dotColor = dotColors[noticeItem.dot] || '#4B7F3A';
            const isLast = noticeIndex === notices.length - 1;
            const isExpanded = selectedNotice?.id === noticeItem.id;

            return (
              <div
                key={noticeItem.id}
                style={{
                  borderBottom: isLast ? 'none' : '1px solid rgba(75,127,58,0.10)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedNotice(isExpanded ? null : noticeItem)}
                  className="w-full text-left flex items-center gap-4 px-5 py-4 transition-all duration-200 group cursor-pointer"
                  onMouseEnter={(mouseEvent) => {
                    mouseEvent.currentTarget.style.backgroundColor = 'rgba(75,127,58,0.04)';
                  }}
                  onMouseLeave={(mouseEvent) => {
                    mouseEvent.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {/* Type Icon */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(75,127,58,0.08)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#4B7F3A' }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      {/* Color dot indicator */}
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: dotColor }}
                      />
                      <p
                        className="font-semibold text-sm truncate"
                        style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                      >
                        {noticeItem.title}
                      </p>
                    </div>
                    <p className="text-xs" style={{ color: '#8094A8' }}>
                      {noticeItem.date} · {noticeItem.audience}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                    style={{ color: '#4B7F3A', opacity: 0.7 }}
                  />
                </button>

                {isExpanded && (
                  <div
                    className="px-5 pb-4 pt-1 flex items-start justify-between gap-4 text-xs"
                    style={{ color: '#526477', backgroundColor: 'rgba(242,248,239,0.55)' }}
                  >
                    <p className="leading-relaxed">{noticeItem.summary}</p>
                    <button
                      type="button"
                      onClick={() => setSelectedNotice(null)}
                      aria-label="Close notice details"
                      className="p-1 rounded-md hover:bg-white text-slate-500 cursor-pointer shrink-0"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
