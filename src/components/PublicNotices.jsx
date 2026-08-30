'use client';

import React from 'react';
import { Bell, FileText, ClipboardCheck, ArrowRight } from 'lucide-react';

const notices = [
  {
    id: 1,
    type: 'CIRCULAR',
    title: 'School Timing Notification — Winter Schedule 2026',
    date: '30 August 2026',
    audience: 'Town Wide',
    dot: 'blue',
  },
  {
    id: 2,
    type: 'MEETING',
    title: 'Monthly HM & Teachers Coordination Meeting',
    date: '29 August 2026',
    audience: 'Teachers',
    dot: 'green',
  },
  {
    id: 3,
    type: 'CIRCULAR',
    title: 'Academic Circular — Mid-Term Examination Schedule',
    date: '28 August 2026',
    audience: 'All Schools',
    dot: 'blue',
  },
  {
    id: 4,
    type: 'NOTICE',
    title: 'Attendance Verification Deadline — September 2026',
    date: '27 August 2026',
    audience: 'HMs & Supervisors',
    dot: 'amber',
  },
  {
    id: 5,
    type: 'CIRCULAR',
    title: 'Official Gazette: Defence Day Holiday — 6 September 2026',
    date: '25 August 2026',
    audience: 'All Schools',
    dot: 'blue',
  },
];

const dotColors = {
  blue:  '#006AC7',
  green: '#4B7F3A',
  amber: '#D97706',
};

const typeIcons = {
  CIRCULAR: FileText,
  MEETING:  ClipboardCheck,
  NOTICE:   Bell,
};

export default function PublicNotices() {
  return (
    <section
      id="notices"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F0F8FF' }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="section-label">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: '#006AC7' }}
              />
              Official Communications
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
            >
              Latest Notices & Circulars
            </h2>
          </div>
          <a
            href="#all-notices"
            className="btn-accent text-sm px-4 py-2.5 flex-shrink-0"
          >
            View All Notices
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Notice List */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.60)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(0,106,199,0.10)',
            boxShadow: '0 8px 30px rgba(0,33,61,0.08)',
          }}
        >
          {notices.map((notice, idx) => {
            const Icon = typeIcons[notice.type] || Bell;
            const dotColor = dotColors[notice.dot];
            const isLast = idx === notices.length - 1;

            return (
              <a
                key={notice.id}
                href="#notice-detail"
                className="flex items-center gap-4 px-5 py-4 transition-all duration-200 group no-underline"
                style={{
                  borderBottom: isLast ? 'none' : '1px solid rgba(0,106,199,0.07)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,106,199,0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Type Icon */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0,106,199,0.07)' }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#006AC7' }} />
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
                      {notice.title}
                    </p>
                  </div>
                  <p className="text-xs" style={{ color: '#8094A8' }}>
                    {notice.date} · {notice.audience}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight
                  className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ color: '#006AC7', opacity: 0.6 }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
