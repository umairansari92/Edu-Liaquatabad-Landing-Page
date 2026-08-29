import './globals.css';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import CivicNavbar from '../components/CivicNavbar.jsx';
import CivicFooter from '../components/CivicFooter.jsx';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://liaquatabad-schools.gov.pk'),
  title: {
    default: 'Education Department Liaquatabad Town Centre (DMC) | Official Government Portal',
    template: '%s | Education Department Liaquatabad (DMC)',
  },
  description:
    'Official digital government education gateway for Liaquatabad Town Centre (DMC). Verified school directory, free Sindh textbooks, public circulars, supervisory team, and single-sign-on portal.',
  keywords: [
    'Liaquatabad Town Centre',
    'DMC Karachi Education',
    'Sindh Education Department',
    'Liaquatabad Schools Directory',
    'Government School Management System',
    'Sindh Textbooks PDF Download',
    'Liaquatabad Education Portal',
    'DDO Education Liaquatabad',
  ],
  authors: [{ name: 'District Municipal Corporation (DMC) Liaquatabad' }],
  creator: 'Education Department Liaquatabad Town Centre',
  publisher: 'Government of Sindh / DMC Liaquatabad',
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
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://liaquatabad-schools.gov.pk',
    siteName: 'Education Department Liaquatabad Town Centre (DMC)',
    title: 'Education Department Liaquatabad Town Centre (DMC)',
    description:
      'Official public education portal providing centralized management for government schools, verified student results, faculty deployments, and digital circulars in Liaquatabad Town.',
    images: [
      {
        url: '/og-liaquatabad-dmc.jpg',
        width: 1200,
        height: 630,
        alt: 'Education Department Liaquatabad Town Centre (DMC) Official Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education Department Liaquatabad Town Centre (DMC)',
    description: 'Empowering municipal schools with digital governance, verified results, and public transparency.',
    images: ['/og-liaquatabad-dmc.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOrganization',
  name: 'Education Department Liaquatabad Town Centre (DMC)',
  alternateName: 'DMC Liaquatabad Education Department',
  url: 'https://liaquatabad-schools.gov.pk',
  logo: 'https://liaquatabad-schools.gov.pk/logo.png',
  department: {
    '@type': 'EducationalOrganization',
    name: 'Town Education Directorate Liaquatabad',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Liaquatabad Town',
      addressRegion: 'Karachi, Sindh',
      addressCountry: 'PK',
    },
  },
  sameAs: [
    'https://twitter.com/DMCLiaquatabad',
    'https://facebook.com/DMCLiaquatabadEducation',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white flex flex-col min-h-screen">
        {/* Dynamic Announcement Bar (Top) */}
        <AnnouncementBar
          type="HOLIDAY"
          message="Official Gazette Notice: All Government Schools across Liaquatabad Town will observe Defence Day Holiday on Sept 06, 2026."
          actionText="View Gazette Order"
          actionLink="#notices"
        />

        {/* Civic Sticky Navbar */}
        <CivicNavbar />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Official Civic Footer */}
        <CivicFooter />
      </body>
    </html>
  );
}
