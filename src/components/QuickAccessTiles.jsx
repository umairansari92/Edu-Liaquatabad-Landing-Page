'use client';

import React from 'react';
import {
  School,
  Bell,
  FileText,
  BookOpen,
  BarChart2,
  Calendar,
  ClipboardList,
  LogIn,
} from 'lucide-react';

const tiles = [
  {
    icon: School,
    title: 'School Directory',
    description: 'Find local government schools',
    href: '#schools',
    accent: 'blue',
  },
  {
    icon: Bell,
    title: 'Latest Notices',
    description: 'Public announcements',
    href: '#notices',
    accent: 'blue',
  },
  {
    icon: FileText,
    title: 'Official Circulars',
    description: 'Verified government orders',
    href: '#circulars',
    accent: 'blue',
  },
  {
    icon: BookOpen,
    title: 'Textbooks & Syllabus',
    description: 'Free Sindh Textboard PDFs',
    href: '#resources',
    accent: 'green',
  },
  {
    icon: BarChart2,
    title: 'Exam Results',
    description: 'Student report card portal',
    href: '#results',
    accent: 'green',
  },
  {
    icon: Calendar,
    title: 'Academic Calendar',
    description: 'Class schedules & timetables',
    href: '#timetable',
    accent: 'blue',
  },
  {
    icon: ClipboardList,
    title: 'Student Admission',
    description: 'Registration & HM portal info',
    href: '#admission',
    accent: 'green',
  },
  {
    icon: LogIn,
    title: 'Teacher & Staff Login',
    description: 'Faculty sign-in portal',
    href: process.env.NEXT_PUBLIC_APP_PORTAL_URL
      ? `${process.env.NEXT_PUBLIC_APP_PORTAL_URL}/login`
      : 'http://localhost:5173/login',
    accent: 'blue',
  },
];

export default function QuickAccessTiles() {
  return (
    <section
      id="quick-access"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F8FBFD' }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="section-label">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: '#006AC7' }}
            />
            Quick Services
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
          >
            Frequently Accessed Services
          </h2>
          <p className="mt-2 text-sm" style={{ color: '#526477' }}>
            Fast access to essential civic education resources
          </p>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {tiles.map((tileItem) => {
            const Icon = tileItem.icon;
            const isBlue = tileItem.accent === 'blue';
            const iconColor = isBlue ? '#006AC7' : '#4B7F3A';
            const iconBg = isBlue ? 'rgba(0,106,199,0.07)' : 'rgba(75,127,58,0.07)';
            const hoverBorder = isBlue ? 'rgba(0,106,199,0.25)' : 'rgba(75,127,58,0.25)';

            return (
              <a
                key={tileItem.title}
                href={tileItem.href}
                className="glass-card p-5 flex flex-col gap-3 transition-all duration-250 group no-underline"
                style={{ textDecoration: 'none' }}
                onMouseEnter={(mouseEvent) => {
                  mouseEvent.currentTarget.style.borderColor = hoverBorder;
                  mouseEvent.currentTarget.style.transform = 'translateY(-3px)';
                  mouseEvent.currentTarget.style.boxShadow = '0 12px 40px rgba(0,33,61,0.12)';
                }}
                onMouseLeave={(mouseEvent) => {
                  mouseEvent.currentTarget.style.borderColor = 'rgba(0,106,199,0.10)';
                  mouseEvent.currentTarget.style.transform = 'translateY(0)';
                  mouseEvent.currentTarget.style.boxShadow = '0 8px 30px rgba(0,33,61,0.08)';
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <div>
                  <h3
                    className="font-semibold text-sm leading-snug"
                    style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                  >
                    {tileItem.title}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: '#8094A8' }}>
                    {tileItem.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
