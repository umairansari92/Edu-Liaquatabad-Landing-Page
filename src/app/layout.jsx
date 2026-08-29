import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://liaquatabad-schools.gov.pk'),
  title: {
    default: 'Education Department Liaquatabad Town Centre (DMC) | Official Portal',
    template: '%s | Education Department Liaquatabad (DMC)',
  },
  description:
    'Official government education management portal for Liaquatabad Town Centre (DMC). Online admissions, faculty transfers, academic results verification, circulars, and town-wide school governance.',
  keywords: [
    'Liaquatabad Town Centre',
    'DMC Karachi Education',
    'Sindh Education Department',
    'Liaquatabad Schools',
    'Government School Management System',
    'DMC Liaquatabad Admissions',
    'Teacher Transfer System Karachi',
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
  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-950/40">
                <span className="font-display font-extrabold text-lg tracking-wider">DMC</span>
              </div>
              <div>
                <span className="block text-sm sm:text-base font-display font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  Education Department
                </span>
                <span className="block text-[11px] text-slate-400 font-medium">
                  Liaquatabad Town Centre (DMC)
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#schools" className="hover:text-emerald-400 transition-colors">Schools Directory</a>
              <a href="#circulars" className="hover:text-emerald-400 transition-colors">Notices & Circulars</a>
              <a href="#leadership" className="hover:text-emerald-400 transition-colors">Leadership</a>
              <a href="#stats" className="hover:text-emerald-400 transition-colors">Town Statistics</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`${portalUrl}/login`}
                className="py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900 border border-slate-800 transition-all"
              >
                Sign In
              </a>
              <a
                href={`${portalUrl}/register/student`}
                className="py-2 px-4.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/40"
              >
                Admissions 2026
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Official Footer */}
        <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                  DMC
                </div>
                <span className="font-bold text-white text-sm">Education Department Liaquatabad Town</span>
              </div>
              <p className="max-w-md text-slate-400 leading-relaxed">
                Empowering public school education across Liaquatabad Town Centre with digital governance, verified academic outcomes, and transparent administration under District Municipal Corporation (DMC).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Portals & Services</h4>
              <ul className="space-y-2">
                <li><a href={`${portalUrl}/register/student`} className="hover:text-emerald-400">Online Student Admissions</a></li>
                <li><a href={`${portalUrl}/register/teacher`} className="hover:text-emerald-400">Faculty Registration</a></li>
                <li><a href={`${portalUrl}/login`} className="hover:text-emerald-400">Head Master & Staff Portal</a></li>
                <li><a href="#circulars" className="hover:text-emerald-400">Public Circulars & Orders</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Town Centre Secretariat</h4>
              <p className="text-slate-400 leading-relaxed">
                Town Education Office, Main Liaquatabad Town Office Complex, Karachi, Sindh, Pakistan.
              </p>
              <p className="mt-2 text-emerald-400 font-mono">info@liaquatabad-schools.gov.pk</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <p>© 2026 Education Department Liaquatabad Town Centre (DMC). Government of Sindh.</p>
            <p>Protected by Enterprise Triple-Lock Security v7.0 & SHA-256 Grounding</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
