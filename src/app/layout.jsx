import './globals.css';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import CivicNavbar from '../components/CivicNavbar.jsx';
import CivicFooter from '../components/CivicFooter.jsx';
import { fetchTownStats } from '../lib/fetchTownStats.js';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://liaquatabad-schools.gov.pk'),
  title: {
    default: 'Town Municipal Corporation (TMC) • Education Department Liaquatabad Town',
    template: '%s | TMC Liaquatabad Education',
  },
  description:
    'Official digital government education gateway for Town Municipal Corporation (TMC) and Education Department Liaquatabad Town. Verified school directory, free Sindh textbooks, public circulars, supervisory team, and single-sign-on portal.',
  keywords: [
    'Liaquatabad Town',
    'TMC Karachi Education',
    'Town Municipal Corporation Liaquatabad',
    'Sindh Education Department',
    'Liaquatabad Schools Directory',
    'Government School Management System',
    'Sindh Textbooks PDF Download',
    'Liaquatabad Education Portal',
    'DDO Education Liaquatabad',
  ],
  authors: [{ name: 'Town Municipal Corporation (TMC) Liaquatabad' }],
  creator: 'Education Department Liaquatabad Town',
  publisher: 'Government of Sindh / TMC Liaquatabad',
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
    siteName: 'Town Municipal Corporation (TMC) • Education Department Liaquatabad Town',
    title: 'Town Municipal Corporation (TMC) • Education Department Liaquatabad Town',
    description:
      'Official public education portal providing centralized management for government schools, verified student results, faculty deployments, and digital circulars in Liaquatabad Town.',
    images: [
      {
        url: '/og-liaquatabad-dmc.jpg',
        width: 1200,
        height: 630,
        alt: 'Town Municipal Corporation (TMC) • Education Department Liaquatabad Town',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Town Municipal Corporation (TMC) • Education Department Liaquatabad Town',
    description: 'Empowering government schools with digital governance, verified results, and public transparency.',
    images: ['/og-liaquatabad-dmc.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOrganization',
  name: 'Town Municipal Corporation (TMC) • Education Department Liaquatabad Town',
  alternateName: 'Education Department TMC Liaquatabad',
  url: 'https://liaquatabad-schools.gov.pk',
  logo: 'https://liaquatabad-schools.gov.pk/logo.png',
  department: {
    '@type': 'EducationalOrganization',
    name: 'Education Department Liaquatabad Town',
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

export default async function RootLayout({ children }) {
  const townStats = await fetchTownStats();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen" style={{ backgroundColor: '#F8FBFD', color: '#102033' }}>
        {/* Dynamic Announcement Bar (Top) */}
        <AnnouncementBar
          initialAnnouncement={townStats.activeAnnouncement}
          initialHoliday={townStats.upcomingHoliday}
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
