'use client';

import React, { useState } from 'react';

/**
 * 🏛️ Official Institutional Logo Component (Landing Page)
 * Education Department, Liaquatabad Town Centre (DMC)
 *
 * Single Source of Truth for Institutional Branding across public interfaces.
 * Preserves the authentic Liaquatabad Town emblem with 1:1 aspect ratio.
 */
export default function OfficialLogo({
  variant = 'header',
  useTransparent = true,
  className = '',
  showText = false,
  textVariant = 'default', // 'default' | 'footer'
  alt = 'Official Emblem of Town Municipal Corporation Liaquatabad • Education Department',
}) {
  const [imageFailed, setImageFailed] = useState(false);

  const logoSource = useTransparent
    ? '/brand/official_logo_transparent.png'
    : '/brand/official_logo.png';

  const variantSizes = {
    compact: 'w-7 h-7 sm:w-8 sm:h-8',
    header: 'w-9 h-9 sm:w-10 sm:h-10',
    footer: 'w-10 h-10',
    hero: 'w-16 h-16 sm:w-20 sm:h-20',
    custom: '',
  };

  const selectedSizeClass = variantSizes[variant] || variantSizes.header;

  const imageElement = (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${selectedSizeClass} ${className}`}
    >
      {!imageFailed ? (
        <img
          src={logoSource}
          alt={alt}
          className="w-full h-full object-contain filter drop-shadow-xs transition-transform duration-200"
          onError={() => setImageFailed(true)}
          loading="eager"
        />
      ) : (
        <div
          className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-xs"
          style={{ backgroundColor: '#4B7F3A' }}
        >
          TMC
        </div>
      )}
    </div>
  );

  if (!showText) {
    return imageElement;
  }

  return (
    <div className="inline-flex items-center gap-3">
      {imageElement}
      {textVariant === 'default' && (
        <div className="leading-tight hidden sm:block text-left">
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
            Town Municipal Corporation (TMC) Liaquatabad
          </div>
        </div>
      )}
      {textVariant === 'footer' && (
        <div className="text-left">
          <div
            className="font-bold text-sm leading-snug"
            style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
          >
            Education Department
          </div>
          <div
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            Town Municipal Corporation (TMC) Liaquatabad
          </div>
        </div>
      )}
    </div>
  );
}

