'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Search,
  Download,
  Eye,
  ChevronRight,
  Sparkles,
  X,
} from 'lucide-react';
import { STBB_CLASSES, STBB_EBOOKS } from '../../data/dynamicEbooks.js';

export default function EbooksLibraryPage() {
  const [selectedMedium, setSelectedMedium] = useState('ALL'); // 'ALL' | 'SINDHI' | 'URDU' | 'ENGLISH'
  const [selectedClassId, setSelectedClassId] = useState('1'); // Default to Class I
  const [searchQuery, setSearchQuery] = useState('');
  const [readingBook, setReadingBook] = useState(null);

  // Filter books by class, medium and search query
  const filteredBooks = STBB_EBOOKS.filter((book) => {
    const matchesClass = selectedClassId === 'ALL' || book.classId === selectedClassId;
    const matchesMedium = selectedMedium === 'ALL' || book.medium === selectedMedium;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.urduTitle.includes(searchQuery) ||
      book.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.className.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesClass && matchesMedium && matchesSearch;
  });

  // Recently added books
  const recentBooks = STBB_EBOOKS.filter((b) => b.isRecent);

  const selectedClassObj = STBB_CLASSES.find((c) => c.id === selectedClassId);

  const mediumBadges = {
    URDU: { bg: '#4B7F3A', label: 'Urdu' },
    ENGLISH: { bg: '#006AC7', label: 'English' },
    SINDHI: { bg: '#D97706', label: 'Sindhi' },
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10" style={{ backgroundColor: '#F8FBFD' }}>
      {/* ─── Breadcrumb Navigation ─────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs" style={{ color: '#526477' }}>
        <Link href="/" className="transition-colors hover:text-blue-600">
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5" style={{ color: '#8094A8' }} />
        <span className="font-semibold" style={{ color: '#006AC7' }}>eBooks & Sindh Textbooks Library</span>
        {selectedClassObj && (
          <>
            <ChevronRight className="w-3.5 h-3.5" style={{ color: '#8094A8' }} />
            <span style={{ color: '#102033' }}>{selectedClassObj.name}</span>
          </>
        )}
      </nav>

      {/* ─── Hero / Header Banner ──────────────────────────────────────────── */}
      <div
        className="p-8 sm:p-12 rounded-3xl relative overflow-hidden"
        style={{
          backgroundColor: '#F0F8FF',
          border: '1px solid rgba(0, 106, 199, 0.12)',
          boxShadow: '0 8px 30px rgba(0, 33, 61, 0.06)',
        }}
      >
        <div className="max-w-3xl space-y-4">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: 'rgba(0, 106, 199, 0.08)',
              border: '1px solid rgba(0, 106, 199, 0.20)',
              color: '#006AC7',
            }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Sindh Textbook Board (STBB) Jamshoro E-Library
          </div>

          <h1
            className="text-2xl sm:text-4xl font-bold leading-tight"
            style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
          >
            Free Digital Textbooks & Curriculum E-Books
          </h1>

          <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#526477' }}>
            Instant online reading and high-speed PDF downloads for all official Sindh curriculum textbooks from Class ECCE / Kachi to Class XII in Urdu, English, and Sindhi mediums.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#006AC7' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search textbook by title, subject (e.g. Physics, Math, Riazi), or class..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-sm focus:outline-none transition-all"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid rgba(0, 106, 199, 0.15)',
              color: '#102033',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#006AC7';
              e.target.style.boxShadow = '0 0 0 4px rgba(0, 106, 199, 0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(0, 106, 199, 0.15)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
      </div>

      {/* ─── Medium Filter Selector Pills ──────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2.5 pt-2">
        <button
          onClick={() => setSelectedMedium('ALL')}
          className="px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer"
          style={{
            backgroundColor: selectedMedium === 'ALL' ? '#006AC7' : 'rgba(255,255,255,0.75)',
            color: selectedMedium === 'ALL' ? '#FFFFFF' : '#526477',
            border: selectedMedium === 'ALL' ? '1px solid #006AC7' : '1px solid rgba(0, 106, 199, 0.12)',
            boxShadow: selectedMedium === 'ALL' ? '0 4px 14px rgba(0,106,199,0.30)' : 'none',
          }}
        >
          All Mediums
        </button>

        <button
          onClick={() => setSelectedMedium('SINDHI')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer"
          style={{
            backgroundColor: selectedMedium === 'SINDHI' ? '#D97706' : 'rgba(255,255,255,0.75)',
            color: selectedMedium === 'SINDHI' ? '#FFFFFF' : '#526477',
            border: selectedMedium === 'SINDHI' ? '1px solid #D97706' : '1px solid rgba(0, 106, 199, 0.12)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Sindhi</span>
        </button>

        <button
          onClick={() => setSelectedMedium('URDU')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer"
          style={{
            backgroundColor: selectedMedium === 'URDU' ? '#4B7F3A' : 'rgba(255,255,255,0.75)',
            color: selectedMedium === 'URDU' ? '#FFFFFF' : '#526477',
            border: selectedMedium === 'URDU' ? '1px solid #4B7F3A' : '1px solid rgba(0, 106, 199, 0.12)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Urdu</span>
        </button>

        <button
          onClick={() => setSelectedMedium('ENGLISH')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer"
          style={{
            backgroundColor: selectedMedium === 'ENGLISH' ? '#006AC7' : 'rgba(255,255,255,0.75)',
            color: selectedMedium === 'ENGLISH' ? '#FFFFFF' : '#526477',
            border: selectedMedium === 'ENGLISH' ? '1px solid #006AC7' : '1px solid rgba(0, 106, 199, 0.12)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>English</span>
        </button>
      </div>

      {/* ─── 1. Browse by Class Grid ───────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-l-4 pl-3" style={{ borderColor: '#006AC7' }}>
          <h2 className="text-xl font-bold" style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}>
            Browse by Class
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {STBB_CLASSES.map((cls) => {
            const isSelected = selectedClassId === cls.id;
            return (
              <button
                key={cls.id}
                onClick={() => {
                  setSelectedClassId(cls.id);
                  setSearchQuery('');
                }}
                className="p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between group cursor-pointer"
                style={{
                  backgroundColor: isSelected ? 'rgba(0, 106, 199, 0.08)' : 'rgba(255, 255, 255, 0.75)',
                  borderColor: isSelected ? '#006AC7' : 'rgba(0, 106, 199, 0.10)',
                  boxShadow: isSelected ? '0 4px 20px rgba(0,106,199,0.12)' : '0 2px 10px rgba(0,33,61,0.04)',
                }}
              >
                <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                  {cls.icon}
                </span>
                <span
                  className="text-xs font-bold block transition-colors"
                  style={{ color: isSelected ? '#006AC7' : '#102033' }}
                >
                  {cls.name}
                </span>
                <span className="text-[10px] mt-1 block" style={{ color: '#8094A8' }}>
                  {cls.bookCount} books
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── 2. Class Dedicated Books View ─────────────────────────────────── */}
      <section className="space-y-6 pt-4" style={{ borderTop: '1px solid rgba(0, 106, 199, 0.10)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 pl-3" style={{ borderColor: '#4B7F3A' }}>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}>
              {selectedClassObj ? `${selectedClassObj.roman} Books` : 'All E-Books'}
            </h2>
            <p className="text-xs mt-0.5" style={{ color: '#526477' }}>
              Showing official textbooks approved by Sindh Curriculum Council
            </p>
          </div>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full shrink-0"
            style={{
              backgroundColor: 'rgba(75,127,58,0.08)',
              color: '#4B7F3A',
              border: '1px solid rgba(75,127,58,0.18)',
            }}
          >
            {filteredBooks.length} books available
          </span>
        </div>

        {/* Books Cards Grid */}
        {filteredBooks.length === 0 ? (
          <div
            className="p-12 rounded-3xl text-center space-y-3"
            style={{
              backgroundColor: 'rgba(255,255,255,0.70)',
              border: '1px solid rgba(0,106,199,0.10)',
            }}
          >
            <BookOpen className="w-10 h-10 mx-auto" style={{ color: '#8094A8' }} />
            <h3 className="text-base font-bold" style={{ color: '#102033' }}>No Textbooks Found</h3>
            <p className="text-xs max-w-md mx-auto" style={{ color: '#526477' }}>
              No books matched your filter criteria for this medium or search query. Try selecting another medium or clearing filters.
            </p>
            <button
              onClick={() => { setSelectedMedium('ALL'); setSearchQuery(''); }}
              className="btn-primary text-xs py-2 px-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredBooks.map((book) => {
              const badge = mediumBadges[book.medium] || mediumBadges.ENGLISH;
              return (
                <div
                  key={book.id}
                  className="glass-card flex flex-col justify-between group overflow-hidden"
                  style={{
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid rgba(0,106,199,0.10)',
                  }}
                >
                  {/* Book Cover Image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60" />

                    {/* Medium Tag */}
                    <div className="absolute top-2.5 right-2.5">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
                        style={{ backgroundColor: badge.bg }}
                      >
                        {book.medium}
                      </span>
                    </div>

                    {/* Year badge */}
                    <div className="absolute bottom-2 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-slate-800 backdrop-blur">
                        {book.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className="text-xs sm:text-sm font-bold transition-colors group-hover:text-blue-600 line-clamp-1"
                        style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                      >
                        {book.title}
                      </h3>
                      <p className="text-[11px] line-clamp-1 font-urdu" style={{ color: '#526477' }}>
                        {book.urduTitle}
                      </p>
                      <p className="text-[10px] mt-1" style={{ color: '#8094A8' }}>
                        {book.className} • {book.fileSize}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div
                      className="pt-3 flex items-center gap-2"
                      style={{ borderTop: '1px solid rgba(0,106,199,0.08)' }}
                    >
                      <button
                        onClick={() => setReadingBook(book)}
                        className="btn-secondary flex-1 py-1.5 px-2 text-[11px] justify-center"
                        title="Read E-Book Online"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Read</span>
                      </button>

                      <a
                        href={book.downloadUrl}
                        className="p-2 rounded-lg transition-colors flex items-center justify-center"
                        style={{
                          backgroundColor: 'rgba(0,106,199,0.08)',
                          color: '#006AC7',
                        }}
                        title="Download PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── 3. Recently Added Books Showcase ─────────────────────────────── */}
      <section className="space-y-4 pt-4" style={{ borderTop: '1px solid rgba(0, 106, 199, 0.10)' }}>
        <div className="flex items-center gap-3 border-l-4 pl-3" style={{ borderColor: '#006AC7' }}>
          <span
            className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest"
            style={{
              backgroundColor: 'rgba(0,106,199,0.08)',
              color: '#006AC7',
              border: '1px solid rgba(0,106,199,0.18)',
            }}
          >
            NEW
          </span>
          <h2 className="text-xl font-bold" style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}>
            Recently Added & Updated Textbooks
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {recentBooks.map((book) => {
            const badge = mediumBadges[book.medium] || mediumBadges.ENGLISH;
            return (
              <div
                key={`rec-${book.id}`}
                className="glass-card p-3 flex flex-col justify-between group"
                style={{
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.80)',
                  border: '1px solid rgba(0,106,199,0.10)',
                }}
              >
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-2.5 bg-slate-100">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-1.5 right-1.5">
                    <span
                      className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase text-white shadow-sm"
                      style={{ backgroundColor: badge.bg }}
                    >
                      {book.medium}
                    </span>
                  </div>
                </div>

                <div>
                  <h4
                    className="text-xs font-bold line-clamp-1 group-hover:text-blue-600 transition-colors"
                    style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                  >
                    {book.title}
                  </h4>
                  <p className="text-[10px] mt-0.5" style={{ color: '#8094A8' }}>
                    {book.className} • {book.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── E-Book Reader Modal ────────────────────────────────────────────── */}
      {readingBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          style={{ backgroundColor: 'rgba(16, 32, 51, 0.60)', backdropFilter: 'blur(6px)' }}
          onClick={() => setReadingBook(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0,106,199,0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="p-5 flex items-center justify-between"
              style={{
                backgroundColor: '#F0F8FF',
                borderBottom: '1px solid rgba(0,106,199,0.10)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-xl text-white"
                  style={{ backgroundColor: '#006AC7' }}
                >
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="text-base font-bold"
                    style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                  >
                    {readingBook.title}
                  </h3>
                  <p className="text-xs" style={{ color: '#526477' }}>
                    {readingBook.className} • {readingBook.medium} Medium • {readingBook.pages} Pages
                  </p>
                </div>
              </div>

              <button
                onClick={() => setReadingBook(null)}
                className="p-2 rounded-xl transition-colors cursor-pointer"
                style={{
                  backgroundColor: 'rgba(0,106,199,0.06)',
                  color: '#526477',
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto text-center space-y-6 flex-1">
              <img
                src={readingBook.coverImage}
                alt={readingBook.title}
                className="w-48 h-64 object-cover rounded-2xl mx-auto shadow-md"
                style={{ border: '1px solid rgba(0,106,199,0.15)' }}
              />

              <div className="max-w-md mx-auto space-y-2">
                <h4
                  className="text-lg font-bold"
                  style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
                >
                  Official Sindh Textbook Board E-Book
                </h4>
                <p className="text-xs" style={{ color: '#526477' }}>
                  Approved for all government schools across Sindh by the Curriculum Wing, Jamshoro.
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={readingBook.downloadUrl}
                  className="btn-primary text-xs py-3 px-6"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full PDF ({readingBook.fileSize})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
