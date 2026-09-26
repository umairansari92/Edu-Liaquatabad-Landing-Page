import React from 'react';
import {
  Building2,
  Briefcase,
  GraduationCap,
  Users,
  ClipboardCheck,
  FileText,
  BookOpen,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Award,
} from 'lucide-react';
import {
  DocHeader,
  SectionTitle,
  InfoCard,
  ComparisonTable,
  TerminalBlock,
  Callout,
  Steps,
} from '../components/DocPrimitives';

export const SchoolInspectionsSection = () => (
  <div>
    <DocHeader
      title="Municipal School & Cluster Field Inspection System"
      badge="5. Core Operational Engines"
      subtitle="Digital surveillance tool for Cluster Supervisors conducting unannounced physical audits of municipal schools."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      School Supervisors assigned to geographic clusters conduct regular and unannounced physical visits to inspect municipal public schools. Inspection data is logged directly into immutable audit records:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <InfoCard
        icon={<Users className="w-5 h-5" />}
        color="blue"
        title="Biometric & Headcount Audit"
        desc="Verifies physical presence of teachers against roster, detecting ghost staff and unapproved absences."
      />
      <InfoCard
        icon={<Building2 className="w-5 h-5" />}
        color="emerald"
        title="Infrastructure Hygiene"
        desc="Audits drinking water safety, functioning electricity, restroom sanitation, and boundary wall security."
      />
      <InfoCard
        icon={<FileText className="w-5 h-5" />}
        color="purple"
        title="Classroom Log Verification"
        desc="Inspects teacher lesson plans, register cleanliness, and progress through the Sindh textbook syllabus."
      />
    </div>

    <Callout type="info" title="FIELD AUDIT SUBMISSION PIPELINE">
      When a Supervisor submits a <code>SchoolInspection</code> report:
      <br />
      1. Coordinates and timestamp are immutably captured.
      <br />
      2. If critical deficiencies (e.g. no potable water or teacher absenteeism &gt; 30%) are flagged, an automated alert notification is dispatched to the Town Education Directorate (Super Admin).
      <br />
      3. The inspection report is permanently sealed; past inspection scores cannot be altered.
    </Callout>
  </div>
);

export const TeacherRostersSection = () => (
  <div>
    <DocHeader
      title="Faculty Rosters, Deployment & Official Service Records"
      badge="5. Core Operational Engines"
      subtitle="Complete human capital management for teaching faculty across Liaquatabad Town."
    />

    <ComparisonTable
      headers={['Roster Feature', 'Institutional Compliance', 'System Implementation']}
      rows={[
        {
          left: 'Civil Service Cadre Tracking',
          right: 'Tracks PST (Primary School Teacher), JEST (Junior Elementary), and ECT cadres per official Sindh education rules.',
        },
        {
          left: 'Seniority & Deployment History',
          right: 'Maintains chronological service records, including joining dates, past schools, and promotion tracks.',
        },
        {
          left: 'Official PDF Roster Export',
          right: 'Generates standardized municipal staff rosters with official DMC letterheads via PDFKit vector engine.',
        },
        {
          left: 'Workload & Subject Allocation',
          right: 'Maps teaching assignments to class sections, preventing duplicate or overlapping timetable clashes.',
        },
      ]}
    />
  </div>
);

export const StudentManagementSection = () => (
  <div>
    <DocHeader
      title="Student Management, General Register (GR) Engine & Digital ID Cards"
      badge="5. Core Operational Engines"
      subtitle="Authoritative student registry enforcing unique municipal GR numbering and digital student identities."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <InfoCard
        icon={<GraduationCap className="w-5 h-5" />}
        color="blue"
        title="Deterministic GR Numbering"
        desc="Enforces compound unique indexes { schoolId, grNumber }. A General Register number is assigned once and permanently identifies the student throughout their school tenure."
      />
      <InfoCard
        icon={<FileText className="w-5 h-5" />}
        color="emerald"
        title="Vector Digital Student ID Cards"
        desc="Server generates printable, watermarked student identity cards with barcodes, student photo, emergency contacts, and blood group."
      />
    </div>

    <SectionTitle>Student Lifecycle States</SectionTitle>
    <TerminalBlock title="STUDENT ENROLLMENT STATE MACHINE">
{`ENROLLED (Active student attending classes)
  │
  ├─► PROMOTED (Passed end-of-year exams, advanced to next grade)
  ├─► DETAINED (Failed exams, repeating current grade per Sindh Board rules)
  ├─► TRANSFERRED (Issued School Leaving Certificate, moved to another school)
  └─► STRUCK_OFF (Prolonged unexcused absence > 30 days per DMC By-Laws)`}
    </TerminalBlock>
  </div>
);

export const ParentPortalSection = () => (
  <div>
    <DocHeader
      title="Parent Portal & 3-Step Zero-Trust Ward Verification Wizard"
      badge="5. Core Operational Engines"
      subtitle="How working-class guardians verify ward relationships securely without exposing student PII to strangers."
    />

    <Callout type="security" title="THE 3-STEP WARD LINKAGE CONSTITUTION">
      To prevent identity theft, stalkers, or unauthorized third parties from viewing student attendance and grades, claiming a child requires passing three sequential gates:
    </Callout>

    <Steps
      items={[
        {
          step: '1',
          title: 'Anti-Enumeration GR Lookup',
          desc: 'Parent enters School ID, Class, Section, and GR Number. API returns masked student name ("M**** A***") and DOB year. Zero contact info or CNICs are revealed.',
        },
        {
          step: '2',
          title: 'Cryptographic SMS OTP Challenge',
          desc: 'A 6-digit cryptographic OTP is dispatched to the guardian mobile phone on official school record. Parent enters OTP within 10 minutes to verify phone ownership.',
        },
        {
          step: '3',
          title: 'Head Master Physical Document Verification',
          desc: 'Status transitions to PENDING_HM_APPROVAL. The parent presents their original CNIC and child B-Form to the Head Master. Once HM clicks "Verify", academic access is unlocked.',
        },
      ]}
    />

    <SectionTitle>The Parent BFF Invariant</SectionTitle>
    <Callout type="security" title="STRICT PARENT AUTHORIZATION INVARIANT">
      <code>Authenticated Parent → VERIFIED ParentStudentLink → exact studentProfileId match → 200 OK, otherwise 403 Forbidden.</code>
      <br />
      Enforced independently on every route: /parent/attendance, /parent/marksheets, /parent/homework, and /parent/circulars.
    </Callout>
  </div>
);

export const AttendanceEngineSection = () => (
  <div>
    <DocHeader
      title="Smart Attendance Engine & Karachi Municipal Timing Rules"
      badge="5. Core Operational Engines"
      subtitle="PST-synchronized attendance rules enforcing early gates, late-arrival cutoffs, and Friday Jummah schedules."
    />

    <TerminalBlock title="KARACHI MUNICIPAL TIMING RULES (Asia/Karachi, UTC+5)">
{`┌──────────────────────────────────────┬──────────────────────────────────────┐
│ TIMING SCHEDULE                      │ OFFICIAL RULES & ACTION TAKEN        │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ 07:30 AM PST                         │ School Gates Open. Normal check-in.  │
│ 07:30 AM – 08:14 AM PST              │ Status: PRESENT                      │
│ 08:15 AM PST Cutoff                  │ Late Gate Threshold.                 │
│ 08:15 AM – 09:00 AM PST              │ Status: LATE (Logged with timestamp) │
│ After 09:00 AM PST                   │ Status: ABSENT (Unless excused)      │
│ Friday 12:00 PM PST                  │ Early Dismissal for Jummah Prayers   │
└──────────────────────────────────────┴──────────────────────────────────────┘`}
    </TerminalBlock>

    <SectionTitle>Holiday & Weather Emergency Integration</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The attendance engine interfaces directly with the <code>HolidayCalendar</code> model. On gazetted provincial holidays (e.g. Iqbal Day, Pakistan Day, Ashura) or municipal emergency closures (Karachi rain emergencies, heatwave advisories), attendance marking is locked to prevent ghost entries.
    </p>
  </div>
);

export const MarksheetsTabulationSection = () => (
  <div>
    <DocHeader
      title="Official Marksheet PDF & Tabulation Sheet Pipeline"
      badge="5. Core Operational Engines"
      subtitle="Server-side PDFKit vector generation of official Government of Sindh marksheets and tabulation registers."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <InfoCard
        icon={<FileText className="w-5 h-5" />}
        color="blue"
        title="Streaming Vector Marksheets"
        desc="PDFKit renders crisp vector typography, Government of Sindh emblems, security watermarks, QR verification codes, and Head Master signature blocks."
      />
      <InfoCard
        icon={<Award className="w-5 h-5" />}
        color="emerald"
        title="Official Tabulation Sheets (Broadsheet)"
        desc="Generates broadsheet examination registers for entire classes with complete subject columns, Islamiat Nazra splits, class rankings, and pass/fail summaries."
      />
    </div>

    <Callout type="info" title="WHY NOT PUPPETEER?">
      We evaluated running headless Chrome (Puppeteer) on the server. Puppeteer consumes &gt; 300MB RAM per instance, crashes frequently under multi-page concurrent exports, and requires heavy Chromium binaries. PDFKit runs directly in Node.js memory with negligible overhead (&lt; 15MB) and renders faster with mathematically precise vector coordinates.
    </Callout>
  </div>
);

export const DocumentsLibrarySection = () => (
  <div>
    <DocHeader
      title="Official Circulars, Gazette Notices & Free Digital Textbooks"
      badge="5. Core Operational Engines"
      subtitle="Public repository for verified Sindh government textbooks and internal administrative circulars."
    />

    <ComparisonTable
      headers={['Document Category', 'Audience', 'Access Control & Hosting']}
      rows={[
        {
          left: 'Free Sindh Textbooks (Class 1–10)',
          right: 'Public (Parents, Students, Teachers) • Direct public CDN download from landing-page. Free educational access.',
        },
        {
          left: 'Town-Wide Gazette Circulars',
          right: 'All Municipal Staff • Published by Super Admin / Admin. Triggers in-app alerts and official noticeboard feed.',
        },
        {
          left: 'Internal School Circulars',
          right: 'School Faculty & Enrolled Parents • Published by Head Master. Scoped to the specific school.',
        },
      ]}
    />
  </div>
);

export const NotificationsOutboxSection = () => (
  <div>
    <DocHeader
      title="Central In-App Notifications & Emergency Outbox"
      badge="5. Core Operational Engines"
      subtitle="Real-time administrative alerts, emergency closures, and academic milestone notifications."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The platform contains a dedicated <code>Notification</code> engine delivering in-app alerts and outbox notifications. Alerts are strictly role-targeted and scope-filtered:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-red-600 uppercase">Emergency Weather Alerts</div>
        <div className="text-xs text-[#526477]">Rain emergency and heatwave school closure alerts broadcasted to all parents and staff.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-[#006AC7] uppercase">Attendance Deficit Warnings</div>
        <div className="text-xs text-[#526477]">Dispatched to parents when student attendance drops below 75% examination threshold.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-[#4B7F3A] uppercase">Exam Result Announcements</div>
        <div className="text-xs text-[#526477]">Immediate notification when the Head Master officially seals and publishes board tabulation.</div>
      </div>
    </div>
  </div>
);
