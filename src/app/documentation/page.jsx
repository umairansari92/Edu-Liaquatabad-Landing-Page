'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  Layers,
  Cpu,
  Lock,
  Users,
  BookOpen,
  Calendar,
  Award,
  ArrowRightLeft,
  FileText,
  Search,
  CheckCircle2,
  AlertTriangle,
  Building2,
  GraduationCap,
  Sparkles,
  Database,
  Terminal,
  Activity,
  ChevronRight,
  Menu,
  X,
  ArrowLeft,
  KeyRound,
  ExternalLink,
  ClipboardCheck,
  Send,
  Eye,
  Clock,
  Briefcase,
  AlertCircle,
  HelpCircle,
  Hash,
  Star,
  Zap,
  Globe,
  Bot,
  Brain,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

import {
  DocHeader,
  SectionTitle,
  InfoCard,
  Steps,
  ComparisonTable,
  TerminalBlock,
  Callout,
  FaqItem,
} from './components/DocPrimitives';

// Specialized Domain Category Section Components
import {
  ProblemStatementSection,
  IsVsNotSection,
  QuickAccessSection,
} from './sections/FoundationsSections';

import {
  HierarchySection,
  DecoupledIdentitySection,
  TechTopologySection,
  BffFlowSection,
  ProjectStructureSection,
} from './sections/ArchitectureSections';

import {
  RolesCatalogueSection,
  CapabilityMatrixSection,
  SubordinationSection,
  DataScopesSection,
  AccountLifecycleSection,
} from './sections/IdentitySections';

import {
  SecurityScorecardSection,
  TripleLockSection,
  Argon2idSecuritySection,
  CaptchaEngineSection,
  MfaTotpSection,
  SecurityInvariantsSection,
  ThreatMatrixSection,
} from './sections/SecuritySections';

import {
  SchoolInspectionsSection,
  TeacherRostersSection,
  StudentManagementSection,
  ParentPortalSection,
  AttendanceEngineSection,
  MarksheetsTabulationSection,
  DocumentsLibrarySection,
  NotificationsOutboxSection,
} from './sections/OperationalSections';

import {
  AuditContractSection,
  DatabaseModelsSection,
  ApiCatalogueSection,
} from './sections/AuditDataSections';

import {
  DesignConstitutionSection,
  ClientArchitectureSection,
  PwaCachingSection,
} from './sections/UiPerfSections';

import {
  TestVerificationSection,
  DeploymentTopologySection,
  StatusRoadmapSection,
  GlossarySection,
} from './sections/VerificationSections';

// ─── MAIN DOCUMENTATION COMPONENT ─────────────────────────────────────────────

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portalUrl = process.env.NEXT_PUBLIC_APP_PORTAL_URL || 'http://localhost:5173';

  // Navigation Items Catalog (44 Authoritative Domain Sections)
  const navGroups = [
    {
      category: '1. Getting Started & Context',
      items: [
        { id: 'overview', label: 'Platform Mission & Context', icon: Building2 },
        { id: 'problem-statement', label: 'Municipal Problem Statement', icon: AlertCircle },
        { id: 'is-vs-not', label: 'What System IS vs NOT', icon: CheckCircle2 },
        { id: 'quick-access', label: 'System at a Glance (4-Metric HUD)', icon: Sparkles },
      ],
    },
    {
      category: '2. Technology & Architecture',
      items: [
        { id: 'tech-stack-why', label: 'Tech Stack & The "WHY"', icon: Database },
        { id: 'hierarchy', label: '7-Tier Municipal Hierarchy', icon: Layers },
        { id: 'decoupled-identity', label: 'Decoupled Identity Model', icon: KeyRound },
        { id: 'tech-topology', label: 'Dual-App Architecture', icon: Cpu },
        { id: 'bff-flow', label: 'BFF Pattern & Data Flow', icon: ArrowRightLeft },
        { id: 'project-structure', label: 'Directory Layout & Roles', icon: Terminal },
      ],
    },
    {
      category: '3. Identity, Roles & Scopes',
      items: [
        { id: 'roles-catalogue', label: 'The 8 Authoritative Roles', icon: Users },
        { id: 'capability-matrix', label: '20-Capability Matrix', icon: Award },
        { id: 'subordination', label: 'Subordination Rules & Immunity', icon: Shield },
        { id: 'data-scopes', label: 'The 7 Geographic Scopes', icon: Layers },
        { id: 'account-lifecycle', label: 'Account Lifecycle Machine', icon: Clock },
      ],
    },
    {
      category: '4. Defense-in-Depth Security',
      items: [
        { id: 'why-high-security', label: 'Why Enterprise-Grade Security?', icon: Shield },
        { id: 'security-scorecard', label: '55-Control ASVS Scorecard', icon: Award },
        { id: 'triple-lock', label: 'Triple-Lock Rate Limiting', icon: Lock },
        { id: 'argon2id-security', label: 'Argon2id + Pepper Hashing', icon: KeyRound },
        { id: 'captcha-engine', label: 'Custom Math CAPTCHA Nonce', icon: Hash },
        { id: 'mfa-totp', label: 'Root Admin TOTP MFA Engine', icon: Lock },
        { id: 'security-invariants', label: '5 Non-Negotiable Invariants', icon: AlertTriangle },
        { id: 'threat-matrix', label: 'Adversarial Threat Matrix', icon: Shield },
      ],
    },
    {
      category: '5. Core Operational Engines',
      items: [
        { id: 'school-inspections', label: 'Municipal Schools & Inspection', icon: Building2 },
        { id: 'teacher-rosters', label: 'Faculty Rosters & PDF Service', icon: Briefcase },
        { id: 'atomic-transfers', label: '5-Stage Atomic Teacher Transfers', icon: ArrowRightLeft },
        { id: 'student-management', label: 'Students, GR & Digital ID Card', icon: GraduationCap },
        { id: 'parent-portal', label: 'Parent Portal (Waves 1, 2, 3)', icon: Users },
        { id: 'attendance-engine', label: 'Smart Attendance & Timing', icon: ClipboardCheck },
        { id: 'examination-engine', label: 'Elementary Board Exam Engine', icon: Award },
        { id: 'marksheets-tabulation', label: 'Marksheet PDF & Tabulation', icon: FileText },
        { id: 'documents-library', label: 'Circulars & Free Textbooks', icon: BookOpen },
        { id: 'notifications-outbox', label: 'Notifications & Alert Outbox', icon: Send },
      ],
    },
    {
      category: '6. Immutable Audit & Data Vault',
      items: [
        { id: 'audit-contract', label: '10-Point Immutable Audit Contract', icon: Shield },
        { id: 'database-models', label: 'Complete 30-Model Catalogue', icon: Database },
        { id: 'api-catalogue', label: 'RESTful API Endpoint Index', icon: Terminal },
      ],
    },
    {
      category: '7. UI Constitution & Performance',
      items: [
        { id: 'design-constitution', label: 'Frozen Design Constitution v2.0', icon: Sparkles },
        { id: 'client-architecture', label: 'Redux Toolkit & Token Refresh Mutex', icon: Cpu },
        { id: 'pwa-caching', label: 'PWA Offline App-Shell Caching', icon: Layers },
      ],
    },
    {
      category: '8. Verification & Deployment',
      items: [
        { id: 'test-verification', label: '40 Test Suites Dynamic Baseline', icon: CheckCircle2 },
        { id: 'deployment-topology', label: 'Multi-Zone Vercel Topology', icon: Building2 },
        { id: 'status-roadmap', label: 'Honest Status & Roadmap', icon: Activity },
        { id: 'glossary', label: 'Institutional & Technical Glossary', icon: BookOpen },
      ],
    },
    {
      category: '9. Resources & Knowledge Base',
      items: [{ id: 'faq', label: 'Frequently Asked Questions (FAQ)', icon: HelpCircle }],
    },
  ];

  const allTopics = navGroups.flatMap((g) => g.items);

  // Sync hash routing on load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (allTopics.some((t) => t.id === hash)) {
        setActiveSection(hash);
      }
    }
  }, []);

  const handleSelect = (id) => {
    setActiveSection(id);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const filteredNavGroups = navGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  // Determine current active item index for Prev/Next buttons
  const currentIndex = allTopics.findIndex((t) => t.id === activeSection);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Sub-Header Top Bar ── */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#526477] hover:text-[#006AC7] transition-colors py-1.5 px-3 rounded-lg border border-slate-200 hover:border-blue-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Civic Home</span>
            </Link>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2 text-xs font-extrabold text-[#102033]">
              <span className="w-5 h-5 rounded-md bg-[#006AC7] text-white flex items-center justify-center font-mono text-[10px]">
                D
              </span>
              <span>DMC Liaquatabad</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#006AC7] border border-blue-200 uppercase tracking-wider">
                MASTER KNOWLEDGE BASE
              </span>
            </div>
          </div>

          {/* Quick Search Input */}
          <div className="relative flex-1 max-w-xs hidden md:block">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics (e.g. why Argon2id, attendance timing, transfer state)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[#102033] focus:outline-none focus:border-[#006AC7] focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-[#4B7F3A] border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4B7F3A] animate-pulse" />
              <span>Staging Verified (1,116 Tests PASS)</span>
            </span>

            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#006AC7] hover:bg-[#005299] text-white shadow-xs transition-colors"
            >
              <span>Access Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-slate-200 text-[#102033] hover:bg-slate-50 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Layout (Sidebar + Content Area) ── */}
      <div className="max-w-7xl mx-auto flex">
        {/* ── Left Navigation Sidebar (CVify Pro Desktop Sticky Layout) ── */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-slate-200/80 p-5 overflow-y-auto transition-transform duration-200 lg:static lg:block lg:translate-x-0 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
          style={{ maxHeight: 'calc(100vh - 57px)', top: '57px' }}
        >
          {/* Mobile search bar */}
          <div className="relative mb-4 md:hidden">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[#102033] focus:outline-none focus:border-[#006AC7]"
            />
          </div>

          <nav className="space-y-6">
            {filteredNavGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-1.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#526477] px-2.5 py-1">
                  {group.category}
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all text-left ${
                          isActive
                            ? 'bg-blue-50 text-[#006AC7] font-bold border border-blue-200 shadow-2xs'
                            : 'text-[#526477] hover:bg-slate-50 hover:text-[#102033]'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <IconComponent
                            className={`w-3.5 h-3.5 flex-shrink-0 ${
                              isActive ? 'text-[#006AC7]' : 'text-slate-400'
                            }`}
                          />
                          <span className="truncate">{item.label}</span>
                        </div>
                        {isActive && <ChevronRight className="w-3 h-3 text-[#006AC7] flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* ── Main Dynamic Content Area ── */}
        <main className="flex-1 min-w-0 p-6 sm:p-10 lg:p-12 space-y-10">
          {/* ══════════════════════════════════════════════════════════════
              GROUP 1: GETTING STARTED & CONTEXT
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'overview' && (
            <div>
              <DocHeader
                title="Municipal Platform Mission & Institutional Identity"
                badge="1. System Foundations"
                subtitle="The official digital governance backbone for public primary, elementary, and secondary schools operating under the District Municipal Corporation (DMC) Liaquatabad Town Centre, Karachi Central."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <div className="text-[10px] font-extrabold uppercase text-[#526477]">JURISDICTION</div>
                  <div className="text-sm font-black text-[#102033]">Liaquatabad Town</div>
                  <div className="text-xs text-[#526477]">Karachi Central, Sindh</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <div className="text-[10px] font-extrabold uppercase text-[#526477]">GOVERNANCE TIER</div>
                  <div className="text-sm font-black text-[#006AC7]">7-Tier Decoupled</div>
                  <div className="text-xs text-[#526477]">Root to Parent</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <div className="text-[10px] font-extrabold uppercase text-[#526477]">SECURITY STANDARD</div>
                  <div className="text-sm font-black text-[#4B7F3A]">OWASP ASVS 5.0</div>
                  <div className="text-xs text-[#526477]">Level 2/3 Compliance</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <div className="text-[10px] font-extrabold uppercase text-[#526477]">AUTOMATED TESTS</div>
                  <div className="text-sm font-black text-purple-600">1,116 PASS</div>
                  <div className="text-xs text-[#526477]">40 Production Suites</div>
                </div>
              </div>

              <SectionTitle>Why This System Exists: The Municipal Civic Mandate</SectionTitle>
              <p className="text-xs text-[#526477] leading-relaxed mb-6">
                Public school education in urban municipal towns of Sindh requires a level of accountability and auditability that off-the-shelf commercial school software cannot satisfy. In municipal government schools:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <InfoCard
                  icon={<Building2 className="w-5 h-5" />}
                  color="blue"
                  title="Civil Service Accountability"
                  desc="Staff deployment is governed by the Sindh Civil Servants Act. Teacher transfers, relieving orders, and joining confirmations represent legal civil service administrative actions that require non-repudiable audit logs."
                />
                <InfoCard
                  icon={<Award className="w-5 h-5" />}
                  color="emerald"
                  title="Elementary Board Examination Integrity"
                  desc="Official Grade 4 to 8 examinations follow strict Sindh Board standards: 700-mark aggregate, compulsory 20-mark Nazra Quran recitation split, Drawing letter-grade exclusion, and class ranking algorithms."
                />
                <InfoCard
                  icon={<Shield className="w-5 h-5" />}
                  color="purple"
                  title="Zero-Trust Parent Ward Verification"
                  desc="In working-class urban areas, parents lack enterprise credentials. The platform introduces a 3-step ward linkage flow: Anti-Enumeration GR Lookup + Official Guardian Mobile OTP + Head Master Physical Approval."
                />
                <InfoCard
                  icon={<Layers className="w-5 h-5" />}
                  color="amber"
                  title="Cluster Field Supervision"
                  desc="Cluster Supervisors conduct unannounced physical inspections, logging biometric headcounts, drinking water safety, and electricity conditions directly into immutable audit records."
                />
              </div>

              <TerminalBlock title="HIGH-LEVEL SYSTEM TOPOLOGY">
{`┌──────────────────────────────┐        ┌──────────────────────────────┐
│   PUBLIC CIVIC PORTAL        │        │   AUTHENTICATED WORKSPACE    │
│   Next.js 15.1.7 (React 19)  │        │   React 18.3.1 (Vite 6.1.0)  │
│   Free E-Books, Civic SEO    │        │   8 Dashboards, PWA App-Shell│
└──────────────┬───────────────┘        └──────────────┬───────────────┘
               │                                       │
               │ REST Requests                         │ REST + HttpOnly Cookie
               └───────────────────┬───────────────────┘
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ CORE BACKEND-FOR-FRONTEND (BFF) & REST API LAYER (server/)              │
│ Node.js 20+ (Pure ES Modules) • Express 4.21.2                          │
│ • Reverse Proxy Trust (trust proxy = 1) • Helmet CSP & HSTS             │
│ • Deep Sanitize Pipeline • NoSQL Mongo Sanitizer • HPP Parameter Guard   │
│ • Triple-Lock Rate Limiter (IP + Account + Composite Fingerprint)       │
│ • Argon2id Native Hashing + Server Pepper • Dual-Token RTR Engine        │
└───────────────────────────────────┬─────────────────────────────────────┘
                                   │
                 ┌─────────────────┴─────────────────┐
                 ▼                                   ▼
┌─────────────────────────────────┐ ┌─────────────────────────────────┐
│ MongoDB Atlas 7.0 Cluster        │ │ External Integrated Services     │
│ 30 Mongoose Models, Zero Deletes │ │ • Cloudinary (Encrypted Media)   │
│ Compound Partial Unique Indexes │ │ • Nodemailer (Municipal SMTP)    │
│ Immutable Append-Only Audit Vault│ │ • PDFKit (Vector Board Sheets)   │
└─────────────────────────────────┘ └─────────────────────────────────┘`}
              </TerminalBlock>
            </div>
          )}

          {activeSection === 'problem-statement' && <ProblemStatementSection />}
          {activeSection === 'is-vs-not' && <IsVsNotSection />}
          {activeSection === 'quick-access' && <QuickAccessSection />}

          {/* ══════════════════════════════════════════════════════════════
              GROUP 2: TECHNOLOGY & ARCHITECTURE
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'tech-stack-why' && (
            <div>
              <DocHeader
                title={'Complete Technology Stack & Architectural "WHY"'}
                badge="2. Technology Decisions"
                subtitle="Exhaustive rationale behind every framework, library, and dependency chosen across the backend, frontend, database, and build infrastructure."
              />

              <p className="text-xs text-[#526477] leading-relaxed mb-6">
                Technology choices on this project were made strictly on empirical engineering merits—speed, security, operational resilience under low-bandwidth municipal network environments, and alignment with modern JavaScript ES Module standards.
              </p>

              <SectionTitle>Backend Architecture &amp; Rationale</SectionTitle>
              <ComparisonTable
                headers={['Backend Library / Module', 'Why It Was Chosen & Alternatives Rejected']}
                rows={[
                  {
                    left: 'Node.js 20+ Pure ESM ("type": "module")',
                    right:
                      'Strict 100% ECMAScript Modules across all source files, scripts, and configs. Eliminates CommonJS require() ambiguity, improves static tree-shaking, and aligns with modern V8 execution engines. Rejects legacy CJS tooling.',
                  },
                  {
                    left: 'Express 4.21.2 REST API',
                    right:
                      'Minimalist, battle-tested HTTP middleware pipeline. We rejected heavy enterprise frameworks like NestJS to eliminate excessive boilerplate, decorators, and runtime reflection overhead while retaining total control over interceptors.',
                  },
                  {
                    left: 'MongoDB Atlas + Mongoose 8.10.1',
                    right:
                      'Municipal school administration involves polymorphic, hierarchical document trees (classes with variable section counts, flexible subjects, inspection questionnaires, dynamic attendance arrays). Relational SQL schemas require complex multi-table joins for what is naturally a nested document. Mongoose enforces strict validation, schema hooks, and compound partial unique indexes.',
                  },
                  {
                    left: '@node-rs/argon2 Native Rust Engine',
                    right:
                      'Winner of the Password Hashing Competition (PHC) and recommended by OWASP ASVS 5.0. Unlike bcrypt (vulnerable to GPU-based parallel dictionary attacks and truncated at 72 bytes), Argon2id provides memory-hard protection (19,456 KiB) against ASIC/GPU attacks.',
                  },
                  {
                    left: 'Triple-Lock Rate Limiter',
                    right:
                      'Standard IP rate limiters fail in municipal environments where an entire school or directorate shares a single public NAT IP address. The Triple-Lock tracks (1) Global IP, (2) Target Account ID, and (3) Composite Device Fingerprint simultaneously.',
                  },
                  {
                    left: 'PDFKit 0.16.0 (Vector Rendering)',
                    right:
                      'Generates pixel-perfect, watermarked Government of Sindh Official Marksheets and Tabulation Sheets directly on the server stream without needing a heavy headless browser like Puppeteer. Fast, low memory footprint, and mathematically exact vector layout.',
                  },
                ]}
              />

              <SectionTitle>Frontend Architecture &amp; Rationale</SectionTitle>
              <ComparisonTable
                headers={['Frontend Library / Module', 'Why It Was Chosen & Alternatives Rejected']}
                rows={[
                  {
                    left: 'React 18.3.1 (SPA) + Vite 6.1.0',
                    right:
                      'The authenticated workspace requires instantaneous client-side navigation between classrooms, attendance rosters, and student marks without page reloads. Vite provides sub-second HMR and instant Rollup bundling (28.98s clean build).',
                  },
                  {
                    left: 'Next.js 15.1.7 (Landing Portal)',
                    right:
                      'Dedicated strictly to the public civic portal (landing-page/) to provide Server-Side Rendering (SSR), perfect SEO indexation, OpenGraph social sharing cards, and instant public access to free Sindh textbooks.',
                  },
                  {
                    left: 'Redux Toolkit 2.5.1 + React-Redux 9.2.0',
                    right:
                      'Centralized, predictable state across 9 normalized domain slices. Handles complex asynchronous operations (e.g. concurrent token refresh mutex queue) that lightweight alternatives like Zustand or Context API cannot handle reliably without custom plumbing.',
                  },
                  {
                    left: 'TailwindCSS v4.0.6 (@tailwindcss/vite)',
                    right:
                      'Next-generation engine compiling CSS directly inside the Vite compiler. Enforces the Frozen Design Constitution v2.0 with custom theme tokens (Brand Blue 55%, White 25%, Neutral 12%, Green <= 8%). Zero runtime CSS-in-JS overhead.',
                  },
                  {
                    left: 'Vite Plugin PWA (Workbox)',
                    right:
                      'Municipal teachers frequently work in government school buildings with weak cellular reception. The PWA caches the entire application shell, logos, and stylesheets into the browser cache, allowing the workspace to load instantly offline.',
                  },
                ]}
              />
            </div>
          )}

          {activeSection === 'hierarchy' && <HierarchySection />}
          {activeSection === 'decoupled-identity' && <DecoupledIdentitySection />}
          {activeSection === 'tech-topology' && <TechTopologySection />}
          {activeSection === 'bff-flow' && <BffFlowSection />}
          {activeSection === 'project-structure' && <ProjectStructureSection />}

          {/* ══════════════════════════════════════════════════════════════
              GROUP 3: IDENTITY, ROLES & SCOPES
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'roles-catalogue' && <RolesCatalogueSection />}
          {activeSection === 'capability-matrix' && <CapabilityMatrixSection />}
          {activeSection === 'subordination' && <SubordinationSection />}
          {activeSection === 'data-scopes' && <DataScopesSection />}
          {activeSection === 'account-lifecycle' && <AccountLifecycleSection />}

          {/* ══════════════════════════════════════════════════════════════
              GROUP 4: DEFENSE-IN-DEPTH SECURITY
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'why-high-security' && (
            <div>
              <DocHeader
                title="Why Does an Educational System Need Enterprise Banking-Grade Security?"
                badge="4. Defense-in-Depth Security"
                subtitle="The critical rationale behind implementing 55 ASVS controls, Argon2id, and Triple-Lock rate limiters on public school records."
              />

              <p className="text-xs text-[#526477] leading-relaxed mb-6">
                A common misconception in educational software is: <em>&ldquo;It&apos;s just a school app, why do you need banking-level security?&rdquo;</em> In public municipal governance, a school platform holds the most sensitive legal, demographic, and academic records of thousands of vulnerable children and civil servants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <InfoCard
                  icon={<Shield className="w-5 h-5" />}
                  color="red"
                  title="Protection of Vulnerable Minors"
                  desc="Students in public schools have rights to identity privacy. Weak security would expose home addresses, emergency contact phone numbers, B-Form identity numbers, and guardian details to child traffickers or stalkers."
                />
                <InfoCard
                  icon={<Award className="w-5 h-5" />}
                  color="blue"
                  title="Official Examination Fraud Prevention"
                  desc="Sindh Elementary Board results dictate class standing and eligibility for secondary school. In manual or insecure systems, grade tampering and mark inflation were rampant. Our engine ensures calculation integrity."
                />
                <InfoCard
                  icon={<Briefcase className="w-5 h-5" />}
                  color="purple"
                  title="Civil Service Legal Liability"
                  desc="Teacher transfers and disciplinary suspensions carry severe legal and financial implications under the Sindh Civil Servants Act. Administrative mutations require non-repudiable audit logs admissible in court."
                />
                <InfoCard
                  icon={<KeyRound className="w-5 h-5" />}
                  color="emerald"
                  title="Municipal Network Threat Model"
                  desc="Schools operate on shared public NAT connections with minimal perimeter security. Without strict Triple-Lock rate limiting and memory-hard Argon2id, accounts would be vulnerable to botnet credential stuffing."
                />
              </div>

              <SectionTitle>The 55-Control ASVS Security Strategy</SectionTitle>
              <p className="text-xs text-[#526477] leading-relaxed mb-6">
                Rather than relying on vague security assurances, the platform was audited against the <strong>OWASP Application Security Verification Standard (ASVS 5.0)</strong>, scoring <strong>96.4% compliance</strong> across 55 discrete controls.
              </p>
            </div>
          )}

          {activeSection === 'security-scorecard' && <SecurityScorecardSection />}
          {activeSection === 'triple-lock' && <TripleLockSection />}
          {activeSection === 'argon2id-security' && <Argon2idSecuritySection />}
          {activeSection === 'captcha-engine' && <CaptchaEngineSection />}
          {activeSection === 'mfa-totp' && <MfaTotpSection />}
          {activeSection === 'security-invariants' && <SecurityInvariantsSection />}
          {activeSection === 'threat-matrix' && <ThreatMatrixSection />}

          {/* ══════════════════════════════════════════════════════════════
              GROUP 5: CORE OPERATIONAL ENGINES
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'school-inspections' && <SchoolInspectionsSection />}
          {activeSection === 'teacher-rosters' && <TeacherRostersSection />}

          {activeSection === 'atomic-transfers' && (
            <div>
              <DocHeader
                title="5-Stage Atomic Teacher Transfer State Machine"
                badge="5. Operational State Machines"
                subtitle="Eliminating orphan classrooms and unverified teacher transfers through a sequential, non-repudiable administrative workflow."
              />

              <p className="text-xs text-[#526477] leading-relaxed mb-6">
                In traditional public education bureaucracy, teacher transfers often lead to severe operational chaos: teachers leave their current school without official duty relief, and destination schools are unaware of incoming staff. Our system enforces an <strong>atomic 5-stage finite state machine</strong>:
              </p>

              <Steps
                items={[
                  {
                    step: '1',
                    title: 'INITIATED (Transfer Proposal)',
                    desc: 'A transfer request is created by a Cluster Supervisor, Head Master, or Admin specifying the Teacher, Source School, and Destination School with official transfer orders.',
                  },
                  {
                    step: '2',
                    title: 'APPROVED_BY_DIRECTORATE',
                    desc: 'The Town Education Officer / Super Admin approves the transfer. The teacher remains officially attached to the source school and teaching duties are not interrupted.',
                  },
                  {
                    step: '3',
                    title: 'RELIEVED (Source HM Certification)',
                    desc: 'The Source School Head Master formally signs the relieving certificate on the platform, confirming all records, keys, and teaching assets have been returned. Class teacher assignments at source school are revoked.',
                  },
                  {
                    step: '4',
                    title: 'AWAITING_JOINING (In Transit)',
                    desc: 'The teacher travels to the destination school. The system tracks transit time. No new class assignments can be created during this transition period.',
                  },
                  {
                    step: '5',
                    title: 'COMPLETED (Destination HM Confirmation)',
                    desc: 'The Destination School Head Master confirms physical arrival and verifies paperwork. The database atomically updates the teacher’s schoolId. The teacher is now deployable to new sections.',
                  },
                ]}
              />

              <SectionTitle>State Machine Flowchart</SectionTitle>
              <TerminalBlock title="TEACHER TRANSFER STATE TRANSITION LIFECYCLE">
{`    ┌─────────────────┐
    │    INITIATED    │
    └────────┬────────┘
             │ Directorate / Super Admin Approves
             ▼
    ┌─────────────────┐
    │ APPROVED_BY_DIR │
    └────────┬────────┘
             │ Source HM Signs Relieving Certificate
             ▼
    ┌─────────────────┐
    │     RELIEVED    │ (Teaching assignments released at source)
    └────────┬────────┘
             │ Transit Period
             ▼
    ┌─────────────────┐
    │AWAITING_JOINING │
    └────────┬────────┘
             │
             ├─────────────────────────────┐
             │ Destination HM Confirms     │ Destination HM Rejects
             ▼                             ▼
    ┌─────────────────┐           ┌─────────────────┐
    │    COMPLETED    │           │ REJECTED_BY_HM  │
    └─────────────────┘           └────────┬────────┘
    (School ID updated)                    │
                                 ┌─────────┴─────────┐
                                 ▼                   ▼
                        ┌─────────────────┐ ┌─────────────────┐
                        │ ADMIN_CANCELLED │ │ ADMIN_OVERRIDE  │
                        └─────────────────┘ └─────────────────┘`}
              </TerminalBlock>
            </div>
          )}

          {activeSection === 'student-management' && <StudentManagementSection />}
          {activeSection === 'parent-portal' && <ParentPortalSection />}
          {activeSection === 'attendance-engine' && <AttendanceEngineSection />}

          {activeSection === 'examination-engine' && (
            <div>
              <DocHeader
                title="Elementary Board Examination & Tabulation Engine (700 Marks)"
                badge="5. Academic Engine"
                subtitle="The exact mathematical formulas, Nazra Quran splits, Drawing grade exclusions, and ranking algorithms enforcing Sindh Elementary Board regulations."
              />

              <p className="text-xs text-[#526477] leading-relaxed mb-6">
                Grades 4 through 8 in Liaquatabad Town public schools are governed by the <strong>Sindh Elementary Board examination framework</strong>. Manual grading often led to arbitrary calculations; our engine enforces these rules mathematically:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center space-y-1">
                  <div className="text-2xl font-black text-[#006AC7]">700</div>
                  <div className="text-xs font-bold text-[#102033]">Maximum Numeric Aggregate</div>
                  <div className="text-[11px] text-[#526477]">7 standard subjects × 100 marks</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center space-y-1">
                  <div className="text-2xl font-black text-amber-600">20 / 80</div>
                  <div className="text-xs font-bold text-[#102033]">Islamiat Split</div>
                  <div className="text-[11px] text-[#526477]">20 Nazra Quran + 80 Written</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center space-y-1">
                  <div className="text-2xl font-black text-[#4B7F3A]">33%</div>
                  <div className="text-xs font-bold text-[#102033]">Passing Gate</div>
                  <div className="text-[11px] text-[#526477]">Required in each subject &amp; overall</div>
                </div>
              </div>

              <SectionTitle>The Drawing (Art) Exclusion Rule</SectionTitle>
              <Callout type="warning" title="LEGAL SINDH BOARD DRAWING CLAUSE">
                In Sindh Elementary Board Tabulation, <strong>Drawing is evaluated solely by Letter Grade (A, B, C, D)</strong>. It carries <strong>0 numeric marks</strong> and is <strong>strictly excluded from the 700-mark grand total aggregate</strong>. Calculating percentages out of 800 is a violation of Sindh Board rules; our engine locks the denominator to exactly 700.
              </Callout>

              <SectionTitle>Sindh Board Grade Thresholds</SectionTitle>
              <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs bg-white mb-6">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 font-bold text-[#102033]">
                    <tr>
                      <th className="p-3">GRADE</th>
                      <th className="p-3">PERCENTAGE RANGE</th>
                      <th className="p-3">OFFICIAL INSTITUTIONAL LABEL</th>
                      <th className="p-3">CLASS RANK ELIGIBILITY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#526477]">
                    <tr>
                      <td className="p-3 font-bold text-[#006AC7]">A-1</td>
                      <td className="p-3 font-mono">≥ 80.00%</td>
                      <td className="p-3 font-medium text-[#102033]">Outstanding / Exceptional</td>
                      <td className="p-3 text-[#4B7F3A] font-bold">Eligible for 1st, 2nd, 3rd Rank</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#006AC7]">A</td>
                      <td className="p-3 font-mono">70.00% – 79.99%</td>
                      <td className="p-3 font-medium text-[#102033]">Excellent</td>
                      <td className="p-3 text-[#4B7F3A] font-bold">Eligible</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#006AC7]">B</td>
                      <td className="p-3 font-mono">60.00% – 69.99%</td>
                      <td className="p-3 font-medium text-[#102033]">Very Good</td>
                      <td className="p-3 text-[#4B7F3A] font-bold">Eligible</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#006AC7]">C</td>
                      <td className="p-3 font-mono">50.00% – 59.99%</td>
                      <td className="p-3 font-medium text-[#102033]">Good</td>
                      <td className="p-3 text-[#4B7F3A] font-bold">Eligible</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#006AC7]">D</td>
                      <td className="p-3 font-mono">40.00% – 49.99%</td>
                      <td className="p-3 font-medium text-[#102033]">Fair</td>
                      <td className="p-3 text-[#4B7F3A] font-bold">Eligible</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#006AC7]">E</td>
                      <td className="p-3 font-mono">33.00% – 39.99%</td>
                      <td className="p-3 font-medium text-[#102033]">Pass</td>
                      <td className="p-3 text-[#4B7F3A] font-bold">Eligible</td>
                    </tr>
                    <tr className="bg-red-50/50">
                      <td className="p-3 font-bold text-red-600">FAIL</td>
                      <td className="p-3 font-mono">&lt; 33.00% (or failed any subject)</td>
                      <td className="p-3 font-bold text-red-600">Needs Improvement / Detained</td>
                      <td className="p-3 text-red-600 font-bold">Disqualified from Ranking (-)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSection === 'marksheets-tabulation' && <MarksheetsTabulationSection />}
          {activeSection === 'documents-library' && <DocumentsLibrarySection />}
          {activeSection === 'notifications-outbox' && <NotificationsOutboxSection />}

          {/* ══════════════════════════════════════════════════════════════
              GROUP 6: IMMUTABLE AUDIT & DATA VAULT
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'audit-contract' && <AuditContractSection />}
          {activeSection === 'database-models' && <DatabaseModelsSection />}
          {activeSection === 'api-catalogue' && <ApiCatalogueSection />}

          {/* ══════════════════════════════════════════════════════════════
              GROUP 7: UI CONSTITUTION & PERFORMANCE
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'design-constitution' && <DesignConstitutionSection />}
          {activeSection === 'client-architecture' && <ClientArchitectureSection />}
          {activeSection === 'pwa-caching' && <PwaCachingSection />}

          {/* ══════════════════════════════════════════════════════════════
              GROUP 8: VERIFICATION & DEPLOYMENT
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'test-verification' && <TestVerificationSection />}
          {activeSection === 'deployment-topology' && <DeploymentTopologySection />}
          {activeSection === 'status-roadmap' && <StatusRoadmapSection />}
          {activeSection === 'glossary' && <GlossarySection />}

          {/* ══════════════════════════════════════════════════════════════
              GROUP 9: RESOURCES & KNOWLEDGE BASE (FAQS)
          ══════════════════════════════════════════════════════════════ */}
          {activeSection === 'faq' && (
            <div>
              <DocHeader
                title="Frequently Asked Questions (FAQ) & Deep System Mechanics"
                badge="9. Resources & Knowledge Base"
                subtitle="Comprehensive answers to 15+ architectural, security, operational, and institutional questions asked by technical leads, school authorities, and auditors."
              />

              <div className="space-y-3">
                <FaqItem
                  category="Security"
                  question="Why did we choose native Argon2id over bcrypt for password hashing?"
                  answer="While bcrypt was the historical standard, modern consumer GPUs and cloud clusters can compute billions of bcrypt hashes per second due to its low memory consumption. Argon2id (the winner of the Password Hashing Competition) is memory-hard (configured to 19,456 KiB ~ 19MB per hash with 2 iterations). This completely thwarts GPU/ASIC dictionary attacks. Furthermore, our implementation supports dual-path backward compatibility, silently upgrading legacy bcrypt accounts to Argon2id upon their next successful login."
                />

                <FaqItem
                  category="Security"
                  question="Why is Civil Service Designation separated from RBAC Role and Geographic Scope?"
                  answer="In municipal administration, a government official might hold the civil title 'Drawing and Disbursing Officer (DDO)' or 'Town Education Officer'. In legacy systems, treating this title as a software role caused catastrophic privilege escalation. In our decoupled architecture: Civil Designation is merely descriptive text; RBAC Role defines technical capability (e.g. SUPER_ADMIN); Role Level defines hierarchy subordination (e.g. 80); and Geographic Scope restricts database visibility (e.g. TOWN). Changing a designation gives zero extra software privileges."
                />

                <FaqItem
                  category="Academic"
                  question="Why is Drawing excluded from the 700-mark aggregate in Elementary Board examinations?"
                  answer="In accordance with the official DMC Liaquatabad Town Centre Elementary Board Tabulation Framework (Grades IV through VIII), Drawing is an aesthetic assessment evaluated exclusively by letter grade (A, B, C, D). It carries 0 numeric marks and must NOT be added to the grand total. The academic aggregate is strictly 700 marks (7 subjects × 100). Adding Drawing to the aggregate would distort student percentages and violate provincial board tabulation regulations."
                />

                <FaqItem
                  category="Security"
                  question="Can a parent or unauthorized user steal student data by guessing a GR Number?"
                  answer="No. The platform enforces a 3-layer anti-enumeration defense: (1) The lookup endpoint (/parent/lookup-ward) masks student names (e.g., 'M**** A***') and returns zero contact particulars or CNIC digits; (2) The lookup route is heavily rate-limited per IP and Parent User ID; (3) Claiming a ward dispatches a 6-digit cryptographic OTP to the official guardian mobile number on school record, and even after OTP confirmation, the Head Master must physically verify CNIC papers before any academic or attendance data is unlocked."
                />

                <FaqItem
                  category="Operational"
                  question="How does the 5-stage atomic teacher transfer prevent orphan classrooms?"
                  answer="In traditional paper transfers, a teacher leaves without the receiving school having prepared, leaving a class teacherless. In our atomic state machine: When a transfer is initiated, the teacher remains officially on the books of the source school. Only when the source HM formally certifies duty handover does the status become RELIEVED, unassigning classroom locks. The teacher then travels (AWAITING_JOINING). Only when the destination HM confirms physical presence does the transfer become COMPLETED, updating the teacher's school ID and permitting new class assignments."
                />

                <FaqItem
                  category="Attendance"
                  question="How does the Karachi municipal attendance timing policy work in code?"
                  answer="The system operates in Pakistan Standard Time (Asia/Karachi, UTC+5). Standard municipal school gates open at 07:30 AM. Teachers and students arriving after 08:15 AM are automatically flagged as 'LATE'. On Fridays, school dismisses early at 12:00 PM for Jummah congregational prayers. The system integrates with the HolidayCalendar model to recognize gazetted provincial holidays, summer vacations, and municipal rain/heatwave emergency closures."
                />

                <FaqItem
                  category="Architecture"
                  question="What is the purpose of the 3-second grace window in Refresh Token Rotation (RTR)?"
                  answer="When a user opens multiple browser tabs or experiences high network latency on mobile devices, multiple HTTP requests may reach the server simultaneously with an expired access token. If refresh token rotation were strictly instantaneous, the first tab would rotate the token and the second tab would present the now-invalidated token, falsely triggering a token theft alert and logging the user out. The 3-second grace window allows concurrent requests within 3,000ms to receive the new session without triggering a theft response."
                />

                <FaqItem
                  category="Security"
                  question="What happens if someone attempts to modify or demote a Root Admin via the API?"
                  answer="All administrative mutation routes flow through authorizeHierarchy.js. The middleware asserts that the calling actor's roleLevel must be strictly greater than the target's roleLevel (actorRoleLevel > targetRoleLevel). Since ROOT_ADMIN has roleLevel 100, no other user can modify them. Furthermore, Root Admin self-demotion or self-suspension via web APIs is explicitly rejected with 403 Forbidden to prevent accidental municipal platform decapitation."
                />

                <FaqItem
                  category="Operations"
                  question="What happens if the internet goes down in a remote school?"
                  answer="The authenticated client is built as a Progressive Web App (PWA) with Google Workbox. The application shell, stylesheets, icons, and layout scripts are precached into the browser's persistent CacheStorage. If a teacher loses cellular connectivity, the app still launches instantly offline rather than showing a browser error. While live writes require connection, cached profiles and rosters remain accessible."
                />

                <FaqItem
                  category="Data"
                  question="Why does the platform enforce a Zero-Hard-Deletion policy?"
                  answer="In government school administration, permanently deleting database records violates public service record-keeping laws. If an entity is deleted, historical audit trails become broken (referencing nonexistent IDs), and legal accountability is destroyed. In our database, every model includes a lifecycleStatus field ('ACTIVE', 'SUSPENDED', 'INACTIVE') or isArchived flag. Accounts are deactivated, never deleted, preserving full historical referential integrity."
                />
              </div>
            </div>
          )}

          {/* ── Topic Footer Navigation (Previous / Next Buttons) ── */}
          <div className="pt-8 border-t border-slate-200/80 flex items-center justify-between gap-4">
            {prevTopic ? (
              <button
                onClick={() => handleSelect(prevTopic.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-[#102033] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-normal">Previous Topic</div>
                  <div>{prevTopic.label}</div>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextTopic && (
              <button
                onClick={() => handleSelect(nextTopic.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#006AC7] hover:bg-[#005299] text-xs font-bold text-white transition-colors ml-auto shadow-xs"
              >
                <div className="text-right">
                  <div className="text-[10px] text-blue-200 font-normal">Next Topic</div>
                  <div>{nextTopic.label}</div>
                </div>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
