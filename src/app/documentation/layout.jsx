import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://liaquatabad-schools.gov.pk';
const DOC_URL = `${SITE_URL}/documentation`;

export const metadata = {
  title: {
    default: 'System Documentation & Engineering Architecture | Education Department Liaquatabad Town Centre (DMC)',
    template: '%s | DMC Liaquatabad Education Documentation',
  },
  description:
    'Authoritative technical documentation for the Education Department Liaquatabad Town Centre (DMC) School Management System: 7-tier municipal hierarchy, decoupled identity, 30 Mongoose models, Argon2id security, and 40 verified test suites.',
  keywords: [
    'Education Department Liaquatabad Town Centre',
    'DMC Karachi Education Documentation',
    'School Management System Architecture',
    'Sindh Education Management System',
    'Sindh Elementary Board Examination Tabulation',
    'Teacher Transfer State Machine',
    'Parent Student Link Security',
    'Triple-Lock Rate Limiting',
    'Argon2id Password Security',
    'Municipal Education Governance Platform',
  ],
  alternates: {
    canonical: DOC_URL,
  },
  openGraph: {
    type: 'article',
    url: DOC_URL,
    siteName: 'Education Department Liaquatabad Town Centre (DMC)',
    title: 'System Documentation & Engineering Architecture | DMC Liaquatabad',
    description:
      'Complete engineering specification and municipal system knowledge base: 30 models, 55 security controls, 1,116 passing tests, and decentralized institutional governance.',
    images: [
      {
        url: `${SITE_URL}/og-liaquatabad-dmc.jpg`,
        width: 1200,
        height: 630,
        alt: 'Education Department Liaquatabad Town Centre (DMC) Engineering Architecture',
      },
    ],
    locale: 'en_PK',
    section: 'Technology & Municipal Governance',
    tags: [
      'Education Governance',
      'School Management Platform',
      'Municipal Administration',
      'Karachi Central Schools',
      'Sindh Education Department',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'System Documentation | Education Department Liaquatabad (DMC)',
    description:
      'Official technical guide: 7-tier municipal hierarchy, 30 models, 55 security controls, and Elementary Board tabulation engine.',
    images: [`${SITE_URL}/og-liaquatabad-dmc.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Education Department Liaquatabad Town Centre (DMC) System Documentation & Engineering Architecture',
  description:
    'Comprehensive technical knowledge base and architecture specification for the centralized public school management platform of Liaquatabad Town, Karachi Central.',
  url: DOC_URL,
  author: {
    '@type': 'GovernmentOrganization',
    name: 'District Municipal Corporation (DMC) Liaquatabad Town Centre',
    url: SITE_URL,
  },
  publisher: {
    '@type': 'GovernmentOrganization',
    name: 'Education Department Liaquatabad Town Centre (DMC)',
    url: SITE_URL,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': DOC_URL,
  },
};

export default function DocumentationLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
