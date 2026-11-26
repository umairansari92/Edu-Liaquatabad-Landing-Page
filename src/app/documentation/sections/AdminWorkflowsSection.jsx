import React from 'react';
import {
  Shield,
  Building2,
  Users,
  GraduationCap,
  ClipboardCheck,
  TrendingUp,
  ArrowRightLeft,
  Clock,
  FileText,
  Calendar,
  IdCard,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Briefcase,
  Megaphone,
  Layers,
  Award,
  Zap,
  Lock,
  FileCheck,
  Search,
  School,
  XCircle,
  FileSpreadsheet,
  Download,
  Bell,
  Sparkles,
} from 'lucide-react';

import {
  DocHeader,
  SectionTitle,
  InfoCard,
  ComparisonTable,
  Callout,
  Steps,
  FaqItem,
} from '../components/DocPrimitives';

export const AdminWorkflowsSection = () => (
  <div id="admin-operational-workflows">
    <DocHeader
      title="Town Admin Operational Manual & Governance Guide"
      badge="5. Core Operational Engines"
      subtitle="Complete operational guide for Town Administrators governing municipal schools, faculty rosters, inter-school transfers, attendance oversight, centralized board exams, town circulars, and calendar management across Town Municipal Corporation (TMC) Liaquatabad."
    />

    {/* Metadata Ribbon */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ROLE</div>
        <div className="text-sm font-black text-[#102033]">TOWN ADMINISTRATOR</div>
        <div className="text-xs text-[#526477]">Town-Wide Authority</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">JURISDICTION</div>
        <div className="text-sm font-black text-[#4B7F3A]">TOWN-WIDE SCOPE</div>
        <div className="text-xs text-[#526477]">Authorized Municipal Town</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">WORKSPACE STATUS</div>
        <div className="text-sm font-black text-[#4B7F3A]">ACTIVE &amp; VERIFIED</div>
        <div className="text-xs text-[#526477]">8 Dedicated Modules Active</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">GOVERNANCE TIER</div>
        <div className="text-sm font-black text-purple-600">MUNICIPAL EXECUTIVE</div>
        <div className="text-xs text-[#526477]">Subordinate Staff &amp; Schools</div>
      </div>
    </div>

    {/* ── Section 1: The Town Administrator Role & Mission ── */}
    <SectionTitle>1. Understanding the Town Administrator Role</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      In the municipal governance structure of Liaquatabad Town, a <strong>Town Administrator</strong> is the chief operational executive for public education within the town. Town Admins oversee all municipal schools, manage teaching and non-teaching personnel, coordinate inter-school faculty transfers, approve official Earned Leave, publish centralized announcements, declare town-wide weather emergencies, and monitor standardized examination results.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* 1.1 Authorized Administrative Authority */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <CheckCircle2 className="w-4 h-4 text-[#4B7F3A]" />
          <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider">
            1.1 Authorized Administrative Powers
          </h4>
        </div>
        <ul className="text-xs text-[#526477] space-y-2 list-disc list-inside leading-relaxed">
          <li>
            <strong>Municipal School Governance:</strong> Register new institutions, update school profiles, and configure standard operating shifts and attendance timing windows.
          </li>
          <li>
            <strong>Personnel &amp; Duty Management:</strong> Manage subordinate personnel (Headmasters, Supervisors, Teachers, and Support Staff), activate or suspend accounts with mandatory justification, and assign cluster supervision duties.
          </li>
          <li>
            <strong>Inter-School Faculty Transfers:</strong> Initiate official transfer directives, monitor relieving and joining confirmations, and exercise exclusive authority to cancel transfer orders.
          </li>
          <li>
            <strong>Two-Tier Earned Leave Approvals:</strong> Review and grant final statutory approval for Earned Leave forwarded through proper channels by school Headmasters.
          </li>
          <li>
            <strong>Centralized Examination Oversight:</strong> Provision Elementary Board exam schedules, oversee tabulation sheets, and verify published school results.
          </li>
          <li>
            <strong>Town-Level Directives:</strong> Broadcast official announcements with targeted audience delivery (All Users, Staff, Teachers, HMs, Students, or Parents).
          </li>
          <li>
            <strong>Campus Notice Oversight:</strong> Inspect school-level circulars published by Headmasters, join bidirectional discussion threads, and reject unauthorized notices.
          </li>
          <li>
            <strong>Holiday &amp; Emergency Closures:</strong> Enforce town-wide gazetted holidays, 1-click seasonal break presets, and emergency weather closures (such as monsoon rain alerts).
          </li>
        </ul>
      </div>

      {/* 1.2 Non-Negotiable Boundaries */}
      <div className="p-5 rounded-xl bg-white border border-red-200 shadow-xs space-y-3 bg-red-50/20">
        <div className="flex items-center gap-2 pb-2 border-b border-red-100">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <h4 className="font-bold text-xs text-red-900 uppercase tracking-wider">
            1.2 Clear Operational Boundaries (What Town Admins Cannot Do)
          </h4>
        </div>
        <ol className="text-xs text-[#526477] space-y-2.5 list-decimal list-inside leading-relaxed">
          <li>
            <strong className="text-red-900">Strict Town Scoping:</strong> An Admin has operational authority strictly within their assigned municipal town. Cross-town data access is blocked by security boundaries.
          </li>
          <li>
            <strong className="text-red-900">No Privilege Elevation:</strong> Town Admins cannot create, modify, suspend, or manage other Admins, Super Admins, or Root Admins.
          </li>
          <li>
            <strong className="text-red-900">No Self-Joining Confirmation:</strong> An Admin can order a faculty transfer, but physical joining must be confirmed directly by the destination school Headmaster upon physical reporting.
          </li>
          <li>
            <strong className="text-red-900">No Daily Attendance Tampering:</strong> Daily classroom attendance is marked by designated Class Teachers and verified by Headmasters. Admins audit compliance; they do not alter historical daily roll calls.
          </li>
          <li>
            <strong className="text-red-900">No Direct System or Security Mutation:</strong> Admins manage operational records within their assigned town; they cannot modify core security policies, system configuration, database tables directly, or access unassigned towns.
          </li>
        </ol>
      </div>
    </div>

    {/* ── Section 2: Admin vs SuperAdmin vs RootAdmin ── */}
    <SectionTitle>2. Authority Boundaries: Town Admin vs. Super Admin vs. Root Admin</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      To maintain administrative accountability and prevent unauthorized privilege escalation, the platform divides management authority into three distinct tiers:
    </p>

    <ComparisonTable
      headers={['Administrative Tier', 'Jurisdiction & Authority', 'Account Lifecycle Governance']}
      rows={[
        {
          left: 'Town Administrator',
          right:
            'Operates strictly within an authorized municipal town. Manages operational schools, subordinate staff (Headmasters, Supervisors, Teachers, and Support Staff), inter-school transfers, Earned Leave statutory approvals, centralized board exams, and town circulars.',
          extra:
            'Delegated exclusively with ADMIN (TOWN) scope. Cannot create, modify, suspend, or delete other Admins, Super Admins, or the Root Admin.',
        },
        {
          left: 'Super Administrator (Sole Holder)',
          right:
            'Strictly 1 active Super Administrator exercises global operational oversight across all municipal towns. Delegates Town Admin (ADMIN) authority, configures global policies, oversees multi-town operations, and inspects audit logs.',
          extra:
            'Direct multi-SuperAdmin creation is permanently disabled (403 SUPER_ADMIN_DIRECT_CREATION_BLOCKED) and SUPER_ADMIN can never grant or promote ROOT_ADMIN. Succession occurs solely via atomic replica-set handover (/api/v1/admin/governance/super-admin/transfer), demoting the outgoing holder to ADMIN (TOWN) and revoking both sessions.',
        },
        {
          left: 'Root Administrator (Sole Holder)',
          right:
            'Strictly 1 active Root Administrator serves as supreme platform custodian (offline bootstrapGovernance.js / breakGlassRecovery.js). Identity is safeguarded from general staff exports and directories.',
          extra:
            'Cannot be provisioned or altered via ordinary APIs. Ordinary ROOT_ADMIN creation remains structurally dormant (FUTURE_ROOT_PROVISIONING_CAPABILITY disabled). Transfers solely via atomic MFA + password + single-use step-up ticket + live TOTP handover (recovery codes blocked), demoting the outgoing holder to ADMIN (TOWN).',
        },
      ]}
    />

    <Callout type="security" title="Single-Holder Custody Governance & Atomic Succession Invariants">
      <ul className="space-y-1.5 list-disc list-inside">
        <li>
          <strong>WHAT &amp; WHY (Strictly One Holder Each):</strong> Enforced a hard architectural ceiling of <strong>1 active ROOT_ADMIN</strong> and <strong>1 active SUPER_ADMIN</strong> backed by MongoDB partial unique indexes (<code>unique_active_root_admin_role</code>, <code>unique_active_super_admin_role</code>) and <code>AuthorityCustody</code> compare-and-swap locks. This prevents split-brain executive authority, shadow elevation, and accidental zero-admin lockouts.
        </li>
        <li>
          <strong>HOW (Atomic Handover Transaction):</strong> Custody moves strictly <code>1 → 1</code> via <code>POST /api/v1/admin/governance/root-admin/transfer</code> or <code>/super-admin/transfer</code> inside a MongoDB replica-set transaction: outgoing demotes to <code>ADMIN</code> (<code>TOWN</code>) first, incoming candidate&apos;s operational duties/workplaces conclude/relieve (<code>DUTY_STATUS.CONCLUDED</code>, <code>WORKPLACE_STATUS.RELIEVED</code>), incoming promotes second, and both accounts have <code>tokenVersion</code> incremented and <code>activeSessions</code> cleared immediately.
        </li>
        <li>
          <strong>PROBLEMS &amp; SECURITY SOLUTIONS:</strong> Protected against step-up ticket replay (<code>GovernanceChallenge</code> single-use + bound to <code>operation</code>, <code>actorTokenVersion</code>, and <code>successorUserId</code>), recovery-code bypass on Root succession (TOTP-only), and production duplicate drift (offline CLI <code>reconcileAdminGovernance.js</code>).
        </li>
      </ul>
    </Callout>

    {/* ── Section 3: The Town Admin Command Center ── */}
    <SectionTitle>3. Navigating the Town Admin Command Center</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The Town Admin Command Center provides eight integrated operational workspaces. Each tab is synchronized to the web address bar, allowing direct bookmarking and smooth browser navigation without page reloads.
    </p>

    <ComparisonTable
      headers={['Workspace Tab', 'Purpose & Operational Focus', 'Key Administrative Actions']}
      rows={[
        {
          left: 'Town Overview',
          right:
            'High-level telemetry dashboard showing four real-time metrics: Total Town Schools, Active Faculty Count, Enrolled Student Count, and Town Attendance Average. Includes governance summary cards and quick operation shortcuts.',
          extra:
            'Monitor municipal attendance trends and jump directly to active modules via quick-action cards.',
        },
        {
          left: 'Schools',
          right:
            'Complete municipal school directory. Inspect campus details, view operating shifts, review classroom infrastructure, register new schools, and update official timing windows.',
          extra:
            'Provision new school profiles and calibrate morning/afternoon shift attendance cutoffs.',
        },
        {
          left: 'Faculty & Staff',
          right:
            'Searchable roster of all teaching and non-teaching personnel assigned within the town. Filter by designation (HM, Supervisor, Teacher, Peon) and manage active or suspended lifecycle statuses.',
          extra:
            'Update employment lifecycle with mandatory justification logs and assign cluster supervision roles.',
        },
        {
          left: 'Students Roster',
          right:
            'Centralized enrollment registry across all municipal campuses. Filter by school, class, and gender, or search by student name and General Register (GR) number.',
          extra:
            'Review cross-school enrollment figures and inspect individual student academic histories.',
        },
        {
          left: 'Teacher Transfers',
          right:
            'Inter-school transfer management hub. Initiate transfer orders between town schools, track relieving and joining progress, and cancel directives when needed.',
          extra:
            'Draft transfer directives, monitor campus clearance checklists, and issue administrative cancellations.',
        },
        {
          left: 'Live Monitor',
          right:
            'Real-time classroom execution monitor. Check current teaching periods, subject timetables, and classroom occupancy across town schools as classes take place.',
          extra:
            'Audit instructional delivery in real time and track active faculty period coverage across campuses.',
        },
        {
          left: 'Academic Operations',
          right:
            'Elementary Board Examination coordination workspace. Manage exam schedules, grade weightages, Nazra Quran splits, marksheet verification, and tabulation sheets.',
          extra:
            'Configure 700-mark aggregates, oversee marksheet entry, and generate official Legal Landscape gazettes.',
        },
        {
          left: 'Reports & Circulars',
          right:
            'Centralized document repository. Broadcast town-wide directives, inspect school circulars published by Headmasters, and participate in discussion threads.',
          extra:
            'Publish town-wide announcements, review campus notices, and formally reject non-compliant notices.',
        },
      ]}
    />

    {/* 3.1 Command Center Redesign & Official Emblem Governance */}
    <div className="p-5 rounded-2xl bg-[#F2F8EF]/80 border border-[#C9DFBC] shadow-xs my-6 space-y-3">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#4B7F3A]" />
        <h4 className="font-bold text-xs uppercase tracking-wider text-[#102033]">
          3.1 Master Branding Governance &amp; Command Center Visual Architecture
        </h4>
      </div>
      <p className="text-xs text-[#526477] leading-relaxed">
        Under <strong>Permanent Institutional Branding Governance (Rule 8)</strong>, the preserved official emblem of Town Municipal Corporation (TMC) Liaquatabad &bull; Education Department is the sole authoritative visual standard for the entire platform ecosystem.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1.5">
          <div className="text-[10px] font-bold uppercase text-[#4B7F3A]">Elimination of AI Artwork &amp; Clutter</div>
          <div className="text-xs text-[#526477] leading-relaxed">
            In compliance with institutional dignity standards, all AI-generated vector building illustrations (<code>SecretariatHeroIllustration.jsx</code>) and distracting artificial vitals (e.g. fake &ldquo;&bull; Online&rdquo; dots, duplicate bell icons, and &ldquo;Active Session&rdquo; badges) were completely removed from administrative dashboards.
          </div>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1.5">
          <div className="text-[10px] font-bold uppercase text-[#4B7F3A]">High-Fidelity Institutional Anchor</div>
          <div className="text-xs text-[#526477] leading-relaxed">
            The command center anchors around a prominent, high-fidelity official institutional emblem displayed in a glassmorphic container (<code>w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-md</code>). This guarantees instant institutional recognition, executive clarity, and visual alignment across all municipal roles.
          </div>
        </div>
      </div>
    </div>

    {/* 3.2 Unified Global Navigation & Mobile Notification Drawer */}
    <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs mb-6 space-y-3">
      <div className="flex items-center gap-2">
        <Bell className="w-4 h-4 text-[#4B7F3A]" />
        <h4 className="font-bold text-xs uppercase tracking-wider text-[#102033]">
          3.2 Unified Global Navigation &amp; Responsive Notification Drawer
        </h4>
      </div>
      <p className="text-xs text-[#526477] leading-relaxed">
        All administrative and municipal roles share a unified top navigation bar (<code>Navbar.jsx</code>) engineered with adaptive responsive behaviors:
      </p>
      <ul className="text-xs text-[#526477] space-y-2 list-disc list-inside leading-relaxed">
        <li>
          <strong>Desktop Popover vs. Mobile Bottom Sheet Drawer:</strong> On desktop monitors (&ge; 640px), notifications open as an anchored dropdown menu. On mobile viewports (&lt; 640px), notifications automatically open as an elegant bottom-sheet drawer with backdrop blur, preventing off-screen clipping and awkward horizontal scrolling.
        </li>
        <li>
          <strong>Verified Role-Navigation Mapping:</strong> All 9 municipal roles (Root Admin, Super Admin, Town Admin, Supervisor, Head Master, Teacher, Peon/Staff, Student, Parent) are mapped to explicit, role-appropriate navigation routes with 10/10 automated test verification (<code>client/scripts/testRoleNavigation.js</code>).
        </li>
        <li>
          <strong>Keyboard Search &amp; Lifecycle Cleanup:</strong> Global module navigation supports instant <code>Ctrl+K</code> keyboard search. Unread notification polling runs on lightweight background timers with strict unmount and logout cleanup to prevent memory leaks and zombie network requests.
        </li>
      </ul>
    </div>

    {/* ── Section 4: School Administration ── */}
    <SectionTitle>4. Managing Municipal Schools &amp; Campus Settings</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Town Admins maintain the official institutional registry for all government primary, elementary, and secondary schools located in the town.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Building2 className="w-4 h-4 text-[#4B7F3A]" />
          <span>School Registration &amp; Profiles</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Admins can register newly sanctioned municipal schools, recording official EMIS codes, campus addresses, education levels (Primary, Elementary, Secondary), and operating shifts (Morning or Afternoon). Institutional profiles can be updated when contact details or facility capabilities change.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#4B7F3A]" />
          <span>Operational Timings &amp; Attendance Windows</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Admins configure standard school hours, assembly start times, and grace periods for morning and afternoon shifts. Headmasters can request minor adjustments for their campus with a mandatory justification, but overall policy alignment remains governed by the Town Administration.
        </p>
      </div>
    </div>

    {/* ── Section 5: Faculty, Staff & Duty Management ── */}
    <SectionTitle>5. Faculty, Staff &amp; Duty Assignment Governance</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The <strong>Faculty &amp; Staff</strong> tab provides centralized personnel management for all public education employees working in the town.
    </p>

    <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs mb-6 space-y-3">
      <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
        <Users className="w-4 h-4 text-[#4B7F3A]" />
        <span>Staff Lifecycle Actions &amp; Justification Requirements</span>
      </h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        Admins can search personnel by name, email, or designation and view assigned schools. When administrative action is required (for example, placing a staff member on inquiry leave or restoring active duty), Admins can update the lifecycle status between <strong>ACTIVE</strong> and <strong>SUSPENDED</strong>.
      </p>
      <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
        <strong>Mandatory Justification Rule:</strong> To prevent arbitrary disciplinary actions, updating a staff member&apos;s lifecycle status requires entering an official justification reason (minimum 3 characters). The justification, timestamp, and Admin identity are permanently recorded in the central audit log.
      </div>
    </div>

    {/* ── Section 6: Dual Official Export Architecture ── */}
    <SectionTitle>6. Dual Official Export Architecture: Machine-Readable CSV vs. Formatted Excel (.xlsx)</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      To balance the requirements of automated data pipelines with institutional executive reporting, the platform provides a <strong>Dual Export Architecture</strong> across all municipal directories (Students, Faculty &amp; Staff, Guardians, Schools, and Users).
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-4 h-4 text-[#4B7F3A]" />
          <span>Clean Machine-Readable CSV Architecture</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Standard CSV exports stream raw, machine-readable data strictly conforming to RFC 4180. The file begins with a UTF-8 Byte Order Mark (<code>\uFEFF</code>) to support non-ASCII characters, followed immediately on <strong>Row 1 by the exact column headers</strong>. Zero decorative rows, subtitles, or empty blank lines are prepended, guaranteeing compatibility with automated statistical scripts (Python, R), database ingestion engines, and third-party CSV parsers.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <FileSpreadsheet className="w-4 h-4 text-[#4B7F3A]" />
          <span>Official Excel (.xlsx) Directorate Subsystem</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Designed specifically for government secretariats, town auditors, and municipal directors, the Excel subsystem (powered by <code>ExcelJS</code>) generates presentation-ready workbooks. It embeds the canonical TMC Liaquatabad logo, an authoritative four-row institutional title block, dark green table headers (<code>#1B3E20</code>), sticky frozen panes, automatic data filters, zebra striping, and explicit text formatting.
        </p>
      </div>
    </div>

    {/* Dual Export Comparison Table */}
    <ComparisonTable
      headers={['Architectural Dimension', 'Clean Machine-Readable CSV', 'Official Formatted Excel (.xlsx)']}
      rows={[
        {
          left: 'Primary Use Case',
          right: 'Automated data ingestion, programmatic parsing, statistical scripting (Python pandas, R, ETL), and raw database migrations.',
          extra: 'Official executive reporting, departmental audits, directorate presentations, printed records, and municipal archiving.',
        },
        {
          left: 'File Layout & Row 1',
          right: 'Strict RFC 4180: Row 1 is immediately the column header row. Zero preamble or metadata rows.',
          extra: 'Rows 1–4 contain the institutional header block, Row 5 is a visual separator, and Row 6 contains formatted table column headers.',
        },
        {
          left: 'Visual Identity & Branding',
          right: 'Zero decorative text or images (preserves clean parser readability). UTF-8 BOM enabled.',
          extra: 'Embedded official TMC Liaquatabad emblem in Row 1, with bold 14pt municipal titles in official Government Green (#1B3E20).',
        },
        {
          left: 'Spreadsheet Usability',
          right: 'Standard flat delimited text without formatting, column locks, or formula styling.',
          extra: 'Freeze Panes (ySplit: 6) to lock headers during scrolling, AutoFilter enabled on all data columns, and alternating zebra stripes (#F8FAF8).',
        },
        {
          left: 'Data Type Protection',
          right: 'Delimited text. External spreadsheet tools may inadvertently strip leading zeros without custom import steps.',
          extra: 'Explicit text format (@) enforced on GR Numbers, CNICs, B-Forms, and Phone Numbers to prevent truncation or scientific notation (3.21E+09).',
        },
        {
          left: 'OWASP Security Defense',
          right: 'Formula Injection Defense: values starting with =, +, -, @, \\t, or \\r are escaped with a leading single quote (\').',
          extra: 'Native ExcelJS cell value typing prevents executable payload injection while preserving numeric formulas.',
        },
        {
          left: 'Audit Logging Contract',
          right: 'Fail-closed pre-flight logging: *_CSV_EXPORTED logged before streaming. Aborts with HTTP 500 if audit write fails.',
          extra: 'Fail-closed pre-flight logging: *_XLSX_EXPORTED logged before workbook generation. Aborts with HTTP 500 if audit write fails.',
        },
      ]}
    />

    {/* Dual Button Toolbar UI */}
    <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs mb-6 space-y-2">
      <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
        <Download className="w-4 h-4 text-[#4B7F3A]" />
        <span>Dual-Button UI Toolbar in Municipal Directories</span>
      </h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        In the application directory interface (<code>DirectoryPage.jsx</code>), administrators, supervisors, and headmasters have side-by-side action buttons:
      </p>
      <div className="flex flex-wrap gap-3 items-center pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-300 text-slate-700 shadow-xs">
          <Download className="w-3.5 h-3.5 text-slate-500" />
          <span>Export CSV</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#1B3E20] text-white shadow-xs">
          <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-300" />
          <span>Export Excel (.xlsx)</span>
        </div>
        <span className="text-xs text-[#526477] italic">
          &mdash; Both buttons operate with independent loading states, preventing concurrent duplicate export requests.
        </span>
      </div>
    </div>

    {/* ── Section 7: Inter-School Staff Transfers ── */}
    <SectionTitle>7. Inter-School Staff Transfers</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Inter-school faculty transfers in municipal schools must follow formal civil service protocol. The platform enforces a clear four-stage workflow to prevent unauthorized reassignments:
    </p>

    <Steps
      steps={[
        {
          step: '1',
          title: 'Initiate Transfer Order',
          desc: 'A Town Administrator or Academic Supervisor initiates a transfer recommendation, specifying the faculty member, current releasing school, destination school, and official administrative reason.',
        },
        {
          step: '2',
          title: 'Releasing School Handover',
          desc: 'The releasing school Headmaster completes the relieving checklist, confirming that classroom keys, textbooks, and student records have been handed over.',
        },
        {
          step: '3',
          title: 'Destination School Joining Confirmation',
          desc: 'The incoming teacher physically reports to the destination campus. The receiving Headmaster physically verifies their reporting and confirms joining in the system. Town Admins do not bypass this local verification.',
        },
        {
          step: '4',
          title: 'Administrative Cancellation or Override',
          desc: 'If an administrative inquiry or sudden staffing emergency arises, only a Town Administrator can officially cancel an active transfer directive or issue an emergency override.',
        },
      ]}
    />

    {/* ── Section 8: Attendance Governance & Leave Workflows ── */}
    <SectionTitle>8. Attendance Governance &amp; Leave Approvals</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Town Administrators monitor town-wide attendance averages and maintain the integrity of public service leave policies.
    </p>

    <div className="space-y-4 mb-6">
      <h4 className="text-xs font-bold text-[#102033] uppercase tracking-wider">
        The Two-Tier Earned Leave (EL) Workflow ("Through Proper Channel")
      </h4>
      <p className="text-xs text-[#526477] leading-relaxed">
        Under government service regulations, Headmasters cannot grant long-term Earned Leave on their own authority, nor do field teachers apply directly to Town Office bypassing their campus. The platform strictly enforces the civil service &ldquo;through proper channel&rdquo; hierarchy:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          icon={<FileText className="w-5 h-5" />}
          color="green"
          title="Stage 1: Teacher Application"
          desc="The teacher submits an Earned Leave request (minimum 3 calendar days) from their classroom dashboard, specifying dates and reason."
        />
        <InfoCard
          icon={<Briefcase className="w-5 h-5" />}
          color="amber"
          title="Stage 2: HM Recommendation"
          desc="The school Headmaster reviews the application, verifies classroom substitute arrangements, and officially forwards the request through proper channel."
        />
        <InfoCard
          icon={<Shield className="w-5 h-5" />}
          color="emerald"
          title="Stage 3: Town Admin Approval"
          desc="The Town Administrator reviews the forwarded request and grants official statutory approval or rejection. HM-only direct approvals of EL are blocked."
        />
      </div>

      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#526477] leading-relaxed space-y-1">
        <div>
          <strong>Casual Leave (CL) vs. Earned Leave (EL):</strong> Casual Leave (up to 3 consecutive working days) is approved directly at the campus level by the school Headmaster without Town Office escalation. Earned Leave (3 or more days) legally requires HM endorsement followed by Town Admin statutory approval.
        </div>
        <div className="text-[11px] text-[#526477] italic">
          Note: Attendance performance bands (such as 85% optimal, 75–84% warning, and below 75% critical) displayed on administrative dashboards are operational health indicators and monitoring benchmarks, rather than statutory legislation.
        </div>
      </div>
    </div>

    {/* ── Section 9: Centralized Board Examinations ── */}
    <SectionTitle>9. Centralized Elementary Board Examinations</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Town Administrators oversee the administration of centralized Grade 4 to 8 Elementary Board Examinations across all town institutions.
    </p>

    <ComparisonTable
      headers={['Examination Component', 'Sindh Board Standard & Institutional Rule', 'Town Admin Responsibility']}
      rows={[
        {
          left: '700-Mark Academic Aggregate',
          right:
            'Standardized subjects: English, Urdu, Mathematics, Science, Social Studies, Islamiat, and Sindhi (100 marks each).',
          extra: 'Town Admins configure exam dates and verify curriculum coverage across town campuses.',
        },
        {
          left: 'Compulsory Nazra Recitation Split',
          right:
            'Islamiat evaluation is strictly split into 20 marks Oral Nazra Quran recitation and 80 marks Written theory.',
          extra: 'The platform calculation engine enforces this split automatically during mark verification.',
        },
        {
          left: 'Drawing & Art Grade Exclusion',
          right:
            'Drawing is graded on a letter scale (A to D) and excluded from the 700-mark numeric aggregate to prevent grade distortion.',
          extra: 'Admins verify that schools record Drawing assessments without inflating core academic totals.',
        },
        {
          left: 'Official Tabulation Sheets',
          right:
            'Generates Legal Landscape (14" × 8.5") official board tabulation gazettes with red failure indicators and official signature lines.',
          extra: 'Admins inspect and endorse finalized class tabulation gazettes for official directorate records.',
        },
      ]}
    />

    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-[#526477] mb-6 italic">
      Operational Benchmark Note: Percentage grade thresholds and performance bands displayed on dashboards serve as platform operational metrics for monitoring academic health, not statutory mandates.
    </div>

    {/* ── Section 10: Announcements & Document Oversight ── */}
    <SectionTitle>10. Town Announcements &amp; Campus Notice Oversight</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The platform provides two distinct announcement streams: centralized Town Directives issued by Town Administration, and campus notices published by Headmasters.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Megaphone className="w-4 h-4 text-[#4B7F3A]" />
          <span>Broadcasting Town Directives</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Admins broadcast official notifications (such as examination orders, holiday advisories, or administrative circulars). You can target specific audiences (All Users, Staff, Teachers, HMs, Students, or Parents). Announcements appear directly on recipients&apos; dashboard hero banners in the official Government Green theme with scope set to <code>TOWN</code>.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="font-bold text-xs text-[#102033] uppercase tracking-wider flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-[#4B7F3A]" />
          <span>School Notice Oversight &amp; Rejection</span>
        </h4>
        <p className="text-xs text-[#526477] leading-relaxed">
          Through the <strong>School Announcements Oversight</strong> tab (<code>/documents?tab=oversight</code>), Admins review all notices published by Headmasters across the town. Admins can join threaded discussions with the HM (<code>POST /api/v1/announcements/:id/discussion</code>) or reject unauthorized notices with a mandatory written reason (<code>PUT /api/v1/announcements/:id/reject</code>), preserving a complete audit record.
        </p>
      </div>
    </div>

    {/* ── Section 11: Holidays & Calendar Governance ── */}
    <SectionTitle>11. Holidays, Emergency Closures &amp; Calendar Governance</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Town Administrators manage the official municipal calendar, declaring scheduled breaks and emergency closures through the <strong>Holidays &amp; Calendar</strong> workspace.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-[#F2F8EF]/90 border border-[#C9DFBC] shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#294D22]">1-CLICK PRESETS</div>
        <div className="text-sm font-black text-[#102033]">Rapid Seasonal Breaks</div>
        <div className="text-xs text-[#38662D] leading-relaxed">
          Quick-declare Summer Vacation, Winter Break, Iqbal&apos;s Day, or Eid-ul-Fitr.
        </div>
      </div>

      <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-rose-800">WEATHER ALERTS</div>
        <div className="text-sm font-black text-rose-900">Rain Emergencies</div>
        <div className="text-xs text-rose-700 leading-relaxed">
          Declare town-wide emergency closures for heavy monsoon flooding with 1 tap.
        </div>
      </div>

      <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-emerald-800">WEEKEND POLICIES</div>
        <div className="text-sm font-black text-emerald-900">Weekly-Off Pattern</div>
        <div className="text-xs text-emerald-700 leading-relaxed">
          Enforce the official Saturday &amp; Sunday weekend pattern for all town schools.
        </div>
      </div>

      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-amber-800">LIFECYCLE STATES</div>
        <div className="text-sm font-black text-amber-900">Active &bull; Expired &bull; Cancelled</div>
        <div className="text-xs text-amber-700 leading-relaxed">
          Cancel closures with mandatory reason; past records remain archived.
        </div>
      </div>
    </div>

    {/* ── Section 12: Audit Logs & Sensitive Data Protection ── */}
    <SectionTitle>12. Audit Logs, Accountability &amp; Sensitive Data Protection</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      Every meaningful administrative action—such as updating a school&apos;s hours, transferring a teacher, approving leave, exporting directory data, or declaring an emergency closure—is permanently recorded in an immutable, append-only audit vault.
    </p>

    <Callout type="security" title="Sensitive Data Privacy & Access Protection">
      Under civil service privacy policies, sensitive personal information—including national identity numbers (CNIC/B-Form), private residential addresses, personal bank details, and confidential annual evaluation reports—is strictly protected. Holding a Town Admin role does not grant unrestricted access to private employee records. Data is displayed on a need-to-know basis to protect employee privacy.
    </Callout>

    {/* ── Section 13: Architectural Safeguards & Administrative Improvements ── */}
    <SectionTitle>13. Architectural Safeguards &amp; Administrative Improvements</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      To ensure dependable administrative workflows and prevent operational errors, the platform incorporates several key structural safeguards:
    </p>

    <div className="space-y-4 mb-8">
      {/* Case 1 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Prevented Potential Cross-Town Data Access
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Design Challenge:</strong> In multi-tenant municipal architectures, search queries or roster lookups risk returning records from adjacent towns if boundary parameters are not strictly isolated, potentially causing administrative confusion during audits.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Architectural Solution:</strong> We enforced strict town-scoping boundaries across all data services. All searches, school registries, and faculty lists are automatically constrained by the administrator&apos;s authorized municipal town identifier.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Administrators only see and manage records within their authorized town jurisdiction.
        </div>
      </div>

      {/* Case 2 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Codified the Formal Two-Tier Leave Hierarchy
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Design Challenge:</strong> Direct long-term leave applications bypassing the school campus can lead to unnotified classroom vacancies. Conversely, campus-only approvals of long-term leaves exceed local administrative delegation.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Architectural Solution:</strong> We codified the statutory two-tier workflow. Teachers submit to their school, Headmasters review and verify substitute coverage before forwarding through proper channels, and Town Administrators grant final statutory approval.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Complete staffing accountability with verified classroom coverage for all approved leaves.
        </div>
      </div>

      {/* Case 3 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Structured Campus Notice Review &amp; Reasoned Rejection
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Design Challenge:</strong> When campus-level circulars contain policy discrepancies or inaccurate calendar dates, administrative intervention must not erase historical records or disrupt school operations without clear feedback.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Architectural Solution:</strong> We built the School Announcements Oversight workspace (<code>/documents?tab=oversight</code>). Admins can join threaded discussions with the Headmaster to clarify directives or formally reject the notice with an official written reason, preserving the full audit trail.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Transparent, collaborative oversight that keeps public school notices compliant while preserving historical integrity.
        </div>
      </div>

      {/* Case 4 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            4
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            1-Click Rapid Holiday Presets for Seasonal Breaks
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Design Challenge:</strong> Recurring seasonal declarations (such as gazetted national holidays or monsoon emergency closures) previously risked date discrepancies if scheduled manually on a per-school basis.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Architectural Solution:</strong> We introduced 1-Click Rapid Break Presets. Admins can deploy standardized town-wide gazetted breaks and weather alerts with one click, ensuring synchronized calendar updates across all campuses.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Instant, synchronized calendar coordination across all municipal schools.
        </div>
      </div>

      {/* Case 5 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            5
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Unified Government Green Visual Identity Across Workspaces
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Design Challenge:</strong> Complex municipal tools risk cognitive fatigue if interface layouts, color coding, and data density vary across operational modules.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Architectural Solution:</strong> We harmonized all administrative workspaces under the approved Education Department Government Green palette, maintaining strict WCAG AA contrast standards, intuitive hierarchy, and seamless desktop-to-mobile responsiveness.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: A cohesive, distraction-free administrative interface tailored for municipal governance.
        </div>
      </div>

      {/* Case 6 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            6
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Dual Export Architecture: Machine-Readable CSV vs. Formatted Excel (.xlsx) &amp; Formula Injection Defense
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Design Challenge:</strong> Prepending decorative institutional header lines to CSV files broke external machine parsers and automated data pipelines expecting column headers strictly on Row 1. Conversely, exporting plain CSV files failed to meet municipal directorate standards for executive presentations, audits, and print-ready spreadsheets. Furthermore, user-supplied text starting with formula triggers (<code>=</code>, <code>+</code>, <code>-</code>, <code>@</code>) risked formula injection execution when opened in spreadsheet software.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Architectural Solution:</strong> We decoupled the export subsystem into two dedicated formats. CSV was restored to clean RFC 4180 format (Row 1 is headers with UTF-8 BOM, zero preamble rows), sanitized with <code>sanitizeCsvFormulaInjection</code>. In parallel, we built a dedicated <code>ExcelJS</code> subsystem generating official <code>.xlsx</code> files featuring the embedded municipal logo, 4-row institutional title hierarchy, dark green headers (<code>#1B3E20</code>), Freeze Panes (<code>ySplit: 6</code>), AutoFilter, zebra striping, and explicit text format (<code>@</code>) for identifiers and phone numbers.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Perfect balance of 100% machine-readable data pipelines and professional, publication-ready executive Excel workbooks.
        </div>
      </div>

      {/* Case 7 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            7
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Master Institutional Branding Governance: Removal of AI Artwork
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Design Challenge:</strong> Previous administrative dashboard hero cards featured generic AI-generated vector artwork of government buildings and noisy vitals badges (&ldquo;&bull; Online&rdquo;, duplicate bell, &ldquo;Active Session&rdquo;), which contradicted the permanent institutional branding mandate.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Architectural Solution:</strong> We eliminated the synthetic vector artwork and replaced it with the official canonical emblem of Town Municipal Corporation (TMC) Liaquatabad &bull; Education Department (<code>OfficialLogo</code>), housed in a clean glassmorphic container with crisp institutional typography.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: High-dignity official government visual standard with single source of truth branding across all administrative surfaces.
        </div>
      </div>

      {/* Case 8 */}
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#F2F8EF] text-[#4B7F3A] flex items-center justify-center font-bold text-xs">
            8
          </div>
          <h4 className="font-bold text-xs text-[#102033]">
            Unified Global Navigation &amp; Responsive Mobile Notification Drawer
          </h4>
        </div>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Design Challenge:</strong> Mobile users on small viewports experienced awkward notification dropdowns that clipped outside the screen, while desktop views lacked unified search access and clean profile controls across all 9 municipal roles.
        </p>
        <p className="text-xs text-[#526477] leading-relaxed">
          <strong>Architectural Solution:</strong> We engineered a unified <code>Navbar.jsx</code> with an adaptive mobile bottom-sheet drawer for notifications (&lt; 640px) and anchored dropdowns on desktop. We verified all 9 roles with 10/10 automated tests (<code>testRoleNavigation.js</code>) and implemented strict unmount polling cleanup.
        </p>
        <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-200">
          Result: Flawless responsive navigation, zero double scrollbars, and zero background timer leaks.
        </div>
      </div>
    </div>

    {/* ── Section 14: Frequently Asked Questions ── */}
    <SectionTitle>14. Frequently Asked Questions &amp; Everyday Tips</SectionTitle>

    <div className="space-y-3 my-6">
      <FaqItem
        category="Exports"
        question="Why do CSV exports start directly on Row 1 without institutional logos, while Excel exports include full branding?"
        answer="CSV is an open, machine-readable standard designed for software parsers, ETL pipelines, and statistical analysis scripts (e.g. Python pandas). Adding decorative rows to CSV causes automated parsers to treat titles as data columns or fail completely. For executive presentations, audits, and printed records, administrators use the Export Excel (.xlsx) option, which embeds the official logo, title hierarchy, freeze panes, auto-filters, and zebra styling."
        evidence="Verified against RFC 4180 parser compliance and ExcelJS generation tests in verify_csv_xlsx_architecture.mjs."
      />

      <FaqItem
        category="Security"
        question="How does the export engine protect against CSV/Excel Formula Injection attacks?"
        answer="If a student name, address, or administrative note begins with =, +, -, @, \\t, or \\r, spreadsheet applications could interpret the cell as an executable formula (DDE / CSV Injection - CWE-1236). The platform runs sanitizeCsvFormulaInjection on all streamed fields, automatically prepending a single quote (') so that spreadsheet programs treat the value strictly as plain text."
        evidence="server/src/controllers/exportController.js sanitizeCsvFormulaInjection • 34/34 tests passing in verify_csv_xlsx_architecture.mjs."
      />

      <FaqItem
        category="Privacy"
        question="Why are Root Administrator accounts omitted from all user directory exports?"
        answer="Under the Decoupled Identity and Root Account Immunity rules, Root Admin accounts serve strictly as emergency break-glass disaster recovery identities. They are deliberately filtered out of standard user listings and export queries to prevent credential discovery and targeted social engineering."
        evidence="server/src/controllers/exportController.js: exportUsers filters { role: { $ne: 'ROOT_ADMIN' } }."
      />

      <FaqItem
        category="Navigation"
        question="How does the mobile notification drawer behave compared to the desktop dropdown?"
        answer="On viewports narrower than 640px (mobile phones), clicking the notification bell slides a clean bottom-sheet drawer up from the bottom of the screen with a semi-transparent backdrop blur, making it easy to tap with one thumb. On viewports 640px and wider, notifications open as an anchored popover dropdown directly beneath the bell icon."
        evidence="client/src/components/Navbar.jsx mobile drawer state machine • Verified across 375px, 390px, 1024px, 1440px, and 1920px viewports."
      />

      <FaqItem
        category="Jurisdiction"
        question="Can a Town Administrator manage schools located in an adjacent municipal town?"
        answer="No. To preserve jurisdictional integrity and prevent administrative conflicts, Town Admins operate strictly within their assigned town. If your town assignment has changed, your account must be updated by a Super Administrator."
        evidence="Verified against town-scoping authorization rules in the backend API."
      />

      <FaqItem
        category="Accounts"
        question="Can there be multiple active Super Administrators or can a Super Admin promote someone to Root Admin?"
        answer="No. Under single-holder custody governance, at most one active ROOT_ADMIN and one active SUPER_ADMIN may exist on the platform at any time, backed by MongoDB partial unique indexes and AuthorityCustody locks. Direct Super Admin creation (POST /api/v1/admin/super-admins) is permanently disabled (403), and SUPER_ADMIN can never grant or promote ROOT_ADMIN. To rotate executive leadership, the active holder transfers custody atomically via Platform Admins -> Custody Handover."
        evidence="Verified against governance_succession_security.test.js (11/11), phase2_superadmin_lifecycle_governance.test.js (22/22), and authority_transition_matrix.test.js (40/40)."
      />

      <FaqItem
        category="Transfers"
        question="Why can't a Town Admin confirm that a transferred teacher has joined their new school?"
        answer="To ensure local campus accountability, the Headmaster of the receiving school must physically verify that the incoming teacher has reported on-site before confirming joining in the system. Town Admins initiate and oversee the transfer order, while local physical reporting remains verified by campus executives."
        evidence="Verified against transfer route authorization rules."
      />

      <FaqItem
        category="Leave"
        question="Can a Headmaster approve Earned Leave directly without Town Admin review?"
        answer="No. Under civil service regulations, Headmasters can only grant Casual Leave (up to 3 days). Earned Leave (minimum 3 calendar days) legally requires review and substitute endorsement by the school Headmaster followed by final statutory approval from the Town Administrator."
        evidence="Verified against the two-tier leave policy workflow."
      />

      <FaqItem
        category="Announcements"
        question="What is the difference between a Town Announcement and a School Notice?"
        answer="Town Announcements are official directives broadcast by Town Administration with scope set to TOWN to target groups across all town schools. School Notices are localized circulars published by individual Headmasters strictly for their own campus community. Admins have oversight visibility over all school notices via /documents?tab=oversight."
        evidence="Verified against announcement category and audience scoping rules in announcementRoutes.js."
      />

      <FaqItem
        category="Accounts"
        question="Can a Town Administrator create another Admin or promote someone to Super Admin?"
        answer="No. Town Admins manage operational personnel (Headmasters, Supervisors, Teachers, and Support Staff) within their town. Provisioning, modifying, or promoting higher-tier platform accounts (Admins and Super Admins) is restricted exclusively to Super Administrators via the canonical authority workflow."
        evidence="Verified against central user governance authorization ceilings."
      />

      <FaqItem
        category="Closures"
        question="What happens when an Admin declares a town-wide Rain Emergency closure?"
        answer="Declaring an emergency closure immediately updates the calendar status across all town schools, displays an emergency closure hero banner on eligible student and staff dashboards, and pauses daily attendance marking requirements for the declared dates."
        evidence="Verified against holiday governance and emergency closure dispatch rules."
      />
    </div>
  </div>
);
