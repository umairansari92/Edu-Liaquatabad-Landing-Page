'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Shield, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Schools', href: '#schools' },
  { label: 'Academics', href: '#academics' },
  { label: 'Resources', href: '#resources' },
  { label: 'Notices', href: '#notices' },
  { label: 'Contact', href: '#contact' },
];

export default function CivicNavbar() {
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,106,199,0.08)',
        boxShadow: isScrolled ? '0 2px 24px rgba(0,33,61,0.10)' : '0 1px 20px rgba(0,33,61,0.06)',
      }}
    >
      <nav className="section-container py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Education Department Liaquatabad">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#006AC7' }}
          >
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div
              className="font-bold text-sm leading-none"
              style={{ color: '#102033', fontFamily: 'var(--font-inter)' }}
            >
              Education Department
            </div>
            <div
              className="text-xs font-medium leading-none mt-0.5"
              style={{ color: '#526477' }}
            >
              Liaquatabad Town Centre (DMC)
            </div>
          </div>
          {/* Mobile short name */}
          <div className="sm:hidden leading-tight">
            <div className="font-bold text-sm" style={{ color: '#102033' }}>DMC Liaquatabad</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150"
              style={{ color: '#526477', fontFamily: 'var(--font-inter)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#006AC7';
                e.currentTarget.style.backgroundColor = 'rgba(0,106,199,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#526477';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Search Icon */}
          <button
            aria-label="Search"
            className="w-9 h-9 rounded-lg hidden md:flex items-center justify-center transition-all"
            style={{ color: '#526477' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,106,199,0.06)';
              e.currentTarget.style.color = '#006AC7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#526477';
            }}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Access Portal Button */}
          <a
            href={`${portalUrl}/login`}
            className="btn-primary hidden sm:inline-flex text-sm px-4 py-2.5"
            style={{ fontSize: '0.8125rem' }}
          >
            Access Portal
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{ color: '#526477' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Drawer */}
      {isMenuOpen && (
        <div
          className="lg:hidden border-t py-4"
          style={{
            backgroundColor: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(0,106,199,0.08)',
          }}
        >
          <div className="section-container flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all"
                style={{ color: '#526477' }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#006AC7';
                  e.currentTarget.style.backgroundColor = 'rgba(0,106,199,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#526477';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
            {/* Login CTA in mobile */}
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(0,106,199,0.08)' }}>
              <a
                href={`${portalUrl}/login`}
                className="btn-primary w-full justify-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Access Education Portal
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
