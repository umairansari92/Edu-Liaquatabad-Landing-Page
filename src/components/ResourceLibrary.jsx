'use client';

import React from 'react';
import { BookOpen, FileText, GraduationCap, Download, ArrowRight } from 'lucide-react';

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Textbooks',
    count: '120+ Books',
    description: 'Official Sindh Textboard PDFs',
    href: '/ebooks',
    accent: 'blue',
  },
  {
    icon: FileText,
    title: 'Circulars & Orders',
    count: '85+ Documents',
    description: 'Government official notices',
    href: '#circulars',
    accent: 'blue',
  },
  {
    icon: GraduationCap,
    title: 'Syllabus & Curriculum',
    count: 'All Classes',
    description: 'Class 1 to 10 frameworks',
    href: '#syllabus',
    accent: 'green',
  },
];

const featuredBooks = [
  { title: 'Mathematics Class 9', subject: 'Mathematics', class: 'Class 9', size: '8.2 MB' },
  { title: 'English Grammar Class 7', subject: 'English', class: 'Class 7', size: '5.4 MB' },
  { title: 'Urdu Qaida Class 1', subject: 'Urdu', class: 'Class 1', size: '3.1 MB' },
  { title: 'Science Class 8', subject: 'Science', class: 'Class 8', size: '9.7 MB' },
];

export default function ResourceLibrary() {
  return (
    <section
      id="resources"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="section-label">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: '#4B7F3A' }}
              />
              Public Resource Library
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
            >
              Sindh Education Resource Hub
            </h2>
            <p className="mt-1.5 text-sm" style={{ color: '#526477' }}>
              Free digital textbooks, syllabi & official documents for all students
            </p>
          </div>
          <a
            href="/ebooks"
            className="btn-primary text-sm px-5 py-2.5 flex-shrink-0"
          >
            Browse Full Library
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Resource Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {resourceCategories.map((categoryItem) => {
            const Icon = categoryItem.icon;
            const isBlue = categoryItem.accent === 'blue';
            const iconColor = isBlue ? '#006AC7' : '#4B7F3A';
            const iconBg = isBlue ? 'rgba(0,106,199,0.08)' : 'rgba(75,127,58,0.08)';
            const hoverBorder = isBlue ? 'rgba(0,106,199,0.28)' : 'rgba(75,127,58,0.28)';
            const countColor = isBlue ? '#006AC7' : '#4B7F3A';

            return (
              <a
                key={categoryItem.title}
                href={categoryItem.href}
                className="glass-card p-6 flex flex-col gap-3 transition-all duration-250 no-underline"
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
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className="w-6 h-6" style={{ color: iconColor }} />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-semibold text-sm"
                      style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                    >
                      {categoryItem.title}
                    </h3>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: countColor }}
                    >
                      {categoryItem.count}
                    </span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: '#8094A8' }}>
                    {categoryItem.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Featured Books Rows */}
        <div>
          <h3
            className="text-sm font-semibold mb-4"
            style={{ color: '#526477' }}
          >
            Recently Added
          </h3>
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
            {featuredBooks.map((featuredBook, bookIndex) => {
              const isLast = bookIndex === featuredBooks.length - 1;
              return (
                <div
                  key={featuredBook.title}
                  className="flex items-center gap-4 px-5 py-3.5 transition-all duration-200"
                  style={{
                    borderBottom: isLast ? 'none' : '1px solid rgba(0,106,199,0.07)',
                  }}
                  onMouseEnter={(mouseEvent) => {
                    mouseEvent.currentTarget.style.backgroundColor = 'rgba(0,106,199,0.02)';
                  }}
                  onMouseLeave={(mouseEvent) => {
                    mouseEvent.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {/* Book icon */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(75,127,58,0.08)' }}
                  >
                    <BookOpen className="w-4 h-4" style={{ color: '#4B7F3A' }} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold text-sm"
                      style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                    >
                      {featuredBook.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#8094A8' }}>
                      {featuredBook.class} · {featuredBook.size}
                    </p>
                  </div>

                  {/* Download Button */}
                  <button
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={{
                      color: '#006AC7',
                      backgroundColor: 'rgba(0,106,199,0.07)',
                      border: '1px solid rgba(0,106,199,0.12)',
                    }}
                    onMouseEnter={(mouseEvent) => {
                      mouseEvent.currentTarget.style.backgroundColor = 'rgba(0,106,199,0.14)';
                    }}
                    onMouseLeave={(mouseEvent) => {
                      mouseEvent.currentTarget.style.backgroundColor = 'rgba(0,106,199,0.07)';
                    }}
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
