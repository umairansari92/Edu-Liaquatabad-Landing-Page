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
  Shield,
  AlertTriangle,
  Calendar,
  Sparkles,
  Lock,
  RefreshCw,
  ArrowRightLeft,
  MapPin,
  FileCheck,
  Zap,
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

// ══════════════════════════════════════════════════════════════════════════════
// 1. MUNICIPAL SCHOOL & CLUSTER FIELD INSPECTION SYSTEM
// ══════════════════════════════════════════════════════════════════════════════
export const SchoolInspectionsSection = () => (
  <div>
    <DocHeader
      title="Municipal School & Cluster Field Inspection System"
      badge="5. Core Operational Engines"
      subtitle="Digital surveillance and unannounced physical inspection engine for Cluster Supervisors conducting on-site municipal school audits."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">GEO-FENCING GATE</div>
        <div className="text-sm font-black text-[#006AC7]">GPS &lt; 150m Radius</div>
        <div className="text-xs text-[#526477]">Physical On-Site Proof</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">AUDIT INTEGRITY</div>
        <div className="text-sm font-black text-[#4B7F3A]">Immutable Write-Once</div>
        <div className="text-xs text-[#526477]">Zero Post-Audit Edits</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CRITICAL DEFICIENCY ESCROW</div>
        <div className="text-sm font-black text-red-600">Immediate TEO Alert</div>
        <div className="text-xs text-[#526477]">Water / &gt;30% Absence Trigger</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CLUSTER SCOPING</div>
        <div className="text-sm font-black text-purple-600">ASSIGNED_SCHOOLS</div>
        <div className="text-xs text-[#526477]">Strict BOLA Isolation</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Cluster Supervisors oversee groups of public schools across Liaquatabad Town. In traditional manual governance, inspection books were vulnerable to fabricated visits, extortion, and buried infrastructure emergencies. This digital inspection engine enforces tamper-proof field reporting backed by GPS geo-fencing, photographic proof, and automated Directorate escalation.
    </p>

    <SectionTitle>The 5 Field Inspection Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. "Chai Dhaba" Ghost Inspections',
          right:
            'Supervisors sat at local tea stalls and filled paper inspection registers with fabricated ratings without visiting the school premises. • SOLUTION: Enforced mandatory GPS coordinate capture (`latitude`, `longitude`) validated against the school’s registered geographic perimeter (&lt; 150m tolerance) combined with server-verified device timestamps and photographic evidence via Cloudinary.',
        },
        {
          left: '2. Post-Inspection Extortion & Retroactive Edits',
          right:
            'Corrupt supervisors threatened Head Masters with failing inspection grades, later altering marks or erasing infractions after receiving bribes. • SOLUTION: Implemented an immutable write-once model (`SchoolInspection.js`). Once submitted, inspection reports are sealed with zero `PUT` or `PATCH` routes exposed to supervisors. Historical scores cannot be changed; any Town Directorate administrative review requires dual-authorization and generates a diff in `AuditLog.js`.',
        },
        {
          left: '3. Buried Infrastructure & WASH Crises',
          right:
            'Severe hazards (e.g. collapsed boundary wall, lack of potable drinking water, broken toilets, electrical hazard) remained buried in paper filing cabinets for months while children were exposed to danger. • SOLUTION: Developed automated Critical Deficiency Escrow. If potable drinking water is flagged missing, boundary security is breached, or teacher absenteeism exceeds 30%, the server immediately fires an urgent `CRITICAL_INSPECTION_DEFICIENCY` notification to the Super Admin (Town Education Officer).',
        },
        {
          left: '4. Intermittent 2G/3G Cellular Outages',
          right:
            'Public school buildings in dense Karachi localities have thick concrete walls causing cellular dead zones. Supervisors lost lengthy inspection drafts during connection drops. • SOLUTION: Engineered an offline-first draft cache in the client web shell using IndexedDB/localStorage. The supervisor can complete all 5 audit checklists offline; an atomic synchronization payload dispatches as soon as connectivity resumes.',
        },
        {
          left: '5. Inter-Cluster BOLA Jurisdiction Creep',
          right:
            'Supervisors attempted to inspect schools in neighboring clusters to settle personal rivalries or interfere with peer evaluations. • SOLUTION: Enforced strict `ASSIGNED_SCHOOLS` data scope via `attachScope.js`. The supervisor’s session token is hard-locked to their explicitly assigned municipal schools; any inspection attempt outside this cluster is blocked with `403 Forbidden` and logged as a security violation.',
        },
      ]}
    />

    <SectionTitle>End-to-End Inspection Execution Lifecycle</SectionTitle>
    <TerminalBlock title="FIELD INSPECTION PIPELINE &amp; ALERT SEQUENCE">
{`1. ON-SITE GPS ACQUISITION (Supervisor Mobile Browser)
   │ Captures current geolocation coordinates & prompts supervisor for photos
2. OFFLINE INDEXEDDB AUDIT FORM CACHING
   │ Caches multi-point checklists: Biometrics, Hygiene, Classrooms, Syllabus
3. BFF SECURITY MIDDLEWARE GATE (server.js)
   ├── authenticate.js (Validates JWT signature & tokenVersion)
   ├── authorizePermissions.js (Asserts 'inspection.create')
   └── attachScope.js (Enforces ASSIGNED_SCHOOLS boundary check)
4. GEO-FENCE VALIDATION SERVICE (inspectionService.js)
   │ Validates Haversine distance between device GPS and School coordinates (<150m)
5. CRITICAL DEFICIENCY EVALUATION ENGINE
   │ If (water == false || teacherAbsenteeism > 30% || wallDamaged == true)
   │   └── Dispatches PRIORITY_HIGH notification to Town Education Directorate
6. IMMUTABLE RECORD CREATION (SchoolInspection.js)
   │ Inserts sealed inspection document with locked scores and Cloudinary URLs
7. NON-REPUDIABLE AUDIT LOGGING (AuditLog.js)
   │ Records INSPECTION_SUBMITTED with inspectorId, schoolId, GPS, and timestamp`}
    </TerminalBlock>

    <SectionTitle>5-Point Standardized Inspection Rubric</SectionTitle>
    <ComparisonTable
      headers={['Inspection Domain', 'Total Points', 'Core Evaluated Indicators']}
      rows={[
        {
          left: '1. Faculty Headcount & Biometrics',
          right: '30 Points • Physical verification of present teachers against roster; identification of unapproved leaves and ghost staff.',
        },
        {
          left: '2. Student Attendance & Headcount',
          right: '20 Points • Physical headcount in classrooms compared against teacher register and General Register (GR) enrollment.',
        },
        {
          left: '3. WASH & Infrastructure Hygiene',
          right: '20 Points • Potable drinking water availability, functioning student restrooms, electricity safety, and boundary wall integrity.',
        },
        {
          left: '4. Curriculum & Lesson Plan Progress',
          right: '20 Points • Teacher lesson diaries, homework correction regularity, and alignment with Sindh Textbook Board milestones.',
        },
        {
          left: '5. General Register & Records Care',
          right: '10 Points • Physical maintenance of GR register, student files, cash books, and school council meeting minutes.',
        },
      ]}
    />

    <SectionTitle>Database Schema &amp; Architectural Contract</SectionTitle>
    <ComparisonTable
      headers={['Model Name', 'Primary Schema Responsibilities', 'Key Indexes & Architectural Invariants']}
      rows={[
        {
          left: 'SchoolInspection.js',
          right:
            'Fields: `schoolId`, `inspectorId`, `visitDate`, `gpsCoordinates` ({ lat, lng, accuracy }), `headcountAudit` ({ enrolled, present, teachersOnRoster, teachersPresent }), `facilitiesAudit` ({ drinkingWater, electricity, functionalRestrooms, boundaryWallSafe }), `scores` ({ biometrics, attendance, facilities, syllabus, registers, totalScore }), `criticalDeficiencies` (array of strings), `photoEvidence` (array of Cloudinary URLs), `isSealed` (boolean, default true). • Compound index: `{ schoolId: 1, visitDate: -1 }`.',
        },
      ]}
    />

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="INSPECTION API CONTRACTS">
{`# 1. Submit Unannounced Physical Inspection
POST /api/v1/inspections
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('inspection.create'), attachScope('ASSIGNED_SCHOOLS')
Body:
  schoolId:             string  required  Mongo ObjectId
  gpsCoordinates:       object  required  { lat: number, lng: number, accuracy: number }
  headcountAudit:       object  required  { enrolled: number, present: number, teachersPresent: number }
  facilitiesAudit:      object  required  { drinkingWater: bool, electricity: bool, functionalRestrooms: bool }
  scores:               object  required  { biometrics: 0-30, attendance: 0-20, facilities: 0-20, syllabus: 0-20, registers: 0-10 }
  criticalDeficiencies: array   optional  ["NO_POTABLE_WATER", "EXCESSIVE_TEACHER_ABSENTEEISM"]
  photoEvidence:        array   required  min:1 Cloudinary URL
Response: 201 { success: true, inspectionId: "...", totalScore: 84, criticalAlertDispatched: false }
Errors: 400 Out of Geo-Fence Range (>150m), 403 Unassigned School, 422 Incomplete Rubric

# 2. Get Historical Inspections for School (Head Master / Admin)
GET /api/v1/inspections/school/:schoolId
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('inspection.view'), attachScope('SCHOOL')
Query: limit: number (default 20), page: number
Response: 200 { success: true, count: 12, data: [...] }`}
    </TerminalBlock>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 2. FACULTY ROSTERS, DEPLOYMENT & OFFICIAL SERVICE RECORDS
// ══════════════════════════════════════════════════════════════════════════════
export const TeacherRostersSection = () => (
  <div>
    <DocHeader
      title="Faculty Rosters, Deployment & Official Service Records"
      badge="5. Core Operational Engines"
      subtitle="Complete human capital management for teaching faculty across Liaquatabad Town, enforcing Sindh civil service cadres and timetable allocation integrity."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CIVIL CADRE ENFORCEMENT</div>
        <div className="text-sm font-black text-[#006AC7]">PST, JEST, ECT, SLT</div>
        <div className="text-xs text-[#526477]">Sindh Civil Service Rules</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">VECTOR ROSTER STREAM</div>
        <div className="text-sm font-black text-[#4B7F3A]">PDFKit Engine</div>
        <div className="text-xs text-[#526477]">&lt; 15MB Memory Footprint</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TIMETABLE INTEGRITY</div>
        <div className="text-sm font-black text-amber-600">Zero Clash Policy</div>
        <div className="text-xs text-[#526477]">Unique Slot Invariant</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">SERVICE BOOK AUDIT</div>
        <div className="text-sm font-black text-purple-600">Immutable Ledger</div>
        <div className="text-xs text-[#526477]">Career Milestones Tracked</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Public school faculties are governed by Sindh School Education &amp; Literacy Department (SELD) cadre hierarchies. In traditional town administration, paper service books were lost, ghost teachers drew salaries without reporting for duty, and unqualified cadres were assigned inappropriate grade levels. This module enforces deterministic roster tracking, clash-free timetabling, and official PDF generation.
    </p>

    <SectionTitle>The 5 Faculty Management Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. "Ghost Teachers" Drawing Public Payroll',
          right:
            'Absentee teachers drew government paychecks for years while residing overseas or running private businesses. • SOLUTION: Integrated biometric-linked `TeacherProfile.js` with mandatory CNIC uniqueness, SEMIS code verification, and automated cross-referencing against daily attendance muster logs.',
        },
        {
          left: '2. Cadre Mismatch & Unqualified Teaching',
          right:
            'Primary School Teachers (PST, BPS-14) were assigned secondary school physics classes, or Early Childhood Teachers (ECT) were assigned middle school grades, violating educational standards. • SOLUTION: Implemented strict cadre-to-grade assignment validation in `TeachingAssignment.js`. The engine prevents assigning teachers to subjects/grades outside their authorized civil service cadre.',
        },
        {
          left: '3. Timetable Clashes & Double-Booked Classrooms',
          right:
            'A teacher was mistakenly scheduled in two classrooms at the same time, leaving one classroom unattended. • SOLUTION: Enforced compound unique constraint `{ teacherId: 1, dayOfWeek: 1, periodSlot: 1 }` and `{ sectionId: 1, dayOfWeek: 1, periodSlot: 1 }` in the timetable allocation controller.',
        },
        {
          left: '4. Lost or Forged Paper Service Books ("Lal Kitab")',
          right:
            'Physical service books recording appointments, promotions, disciplinary leaves, and transfers were lost or forged during town office relocations. • SOLUTION: Created an immutable digital chronological service book in `TeacherProfile.serviceHistory` recording joining date, probationary confirmation, promotions, transfers, and annual performance ratings.',
        },
        {
          left: '5. Heavy PDF Rendering Crashes',
          right:
            'Generating 50-page municipal staff rosters with official letterheads using headless Chrome crashed server instances under multi-user load. • SOLUTION: Built a server-side vector streaming engine using PDFKit 0.16.0. Directly streams vector typography and DMC emblems to HTTP response in chunks at &lt; 15MB RAM usage.',
        },
      ]}
    />

    <SectionTitle>Sindh Civil Service Teaching Cadres &amp; Grade Rules</SectionTitle>
    <ComparisonTable
      headers={['Cadre Code', 'Official Civil Service Title', 'BPS Scale', 'Permitted Teaching Grade Band']}
      rows={[
        {
          left: 'ECT',
          right: 'Early Childhood Teacher • BPS-15 • Authorized for Kindergarten, Nursery, and Prep classes.',
        },
        {
          left: 'PST',
          right: 'Primary School Teacher • BPS-14 • Authorized for Class 1 through Class 5 primary curriculum.',
        },
        {
          left: 'JEST',
          right: 'Junior Elementary School Teacher • BPS-14 • Authorized for Class 6 through Class 8 elementary curriculum.',
        },
        {
          left: 'SLT / HST',
          right: 'Secondary / High School Teacher • BPS-16 • Authorized for Class 9 and 10 board matriculation subjects.',
        },
        {
          left: 'HM',
          right: 'Head Master / Head Mistress • BPS-17 / 18 • Institutional administrative head; class assignment restricted.',
        },
      ]}
    />

    <SectionTitle>Database Schemas &amp; Architectural Contracts</SectionTitle>
    <ComparisonTable
      headers={['Model Name', 'Primary Schema Responsibilities', 'Key Indexes & Architectural Invariants']}
      rows={[
        {
          left: 'TeacherProfile.js',
          right:
            'Stores teacher demographics, `userId` (1:1 link), `schoolId`, `cnic` (unique), `cadre` (ECT/PST/JEST/SLT/HM), `bpsGrade`, `employmentStatus` (ACTIVE/SUSPENDED/ON_LEAVE/TRANSFERRED), `serviceHistory` (array of career milestones). • Compound index: `{ schoolId: 1, cadre: 1 }`.',
        },
        {
          left: 'TeachingAssignment.js',
          right:
            'Maps teachers to specific classroom subjects: `teacherId`, `sectionId`, `subjectId`, `academicYear`, `periodsPerWeek`. • Compound unique index: `{ teacherId: 1, sectionId: 1, subjectId: 1 }`.',
        },
      ]}
    />

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="FACULTY ROSTER API CONTRACTS">
{`# 1. Fetch School Faculty Roster (with Active Timetable Slots)
GET /api/v1/teachers/school/:schoolId/roster
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('teachers.view'), attachScope('SCHOOL')
Response: 200 { success: true, count: 24, data: [{ teacherId, name, cadre, bps, assignedSections }] }

# 2. Assign Subject & Section to Teacher (Clash-Free)
POST /api/v1/teachers/assign
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('teachers.manage'), attachScope('SCHOOL')
Body:
  teacherId: string  required  Mongo ObjectId
  sectionId: string  required  Mongo ObjectId
  subjectId: string  required  Mongo ObjectId
Response: 201 { success: true, message: "Teaching assignment successfully created" }
Errors: 400 Cadre Mismatch, 409 Timetable Period Conflict, 403 Forbidden Scope

# 3. Stream Official Vector Faculty Roster PDF
GET /api/v1/teachers/school/:schoolId/roster-pdf
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('teachers.view'), attachScope('SCHOOL')
Response: 200 (application/pdf stream with Content-Disposition: attachment)`}
    </TerminalBlock>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 3. 5-STAGE ATOMIC TEACHER TRANSFER STATE MACHINE
// ══════════════════════════════════════════════════════════════════════════════
export const AtomicTransfersSection = () => (
  <div>
    <DocHeader
      title="5-Stage Atomic Teacher Transfer State Machine"
      badge="5. Core Operational Engines"
      subtitle="Eliminating orphan classrooms and unverified teacher transfers through a sequential, non-repudiable administrative workflow."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">FINITE STATE MACHINE</div>
        <div className="text-sm font-black text-[#006AC7]">5 Sequential Stages</div>
        <div className="text-xs text-[#526477]">Zero State Skipping</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TWO-PHASE HANDSHAKE</div>
        <div className="text-sm font-black text-[#4B7F3A]">Source &amp; Dest HMs</div>
        <div className="text-xs text-[#526477]">Dual-Party Mutual Consent</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ASSET CLEARANCE</div>
        <div className="text-sm font-black text-amber-600">Relieving Certificate</div>
        <div className="text-xs text-[#526477]">Class Keys &amp; Registers</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">LEGAL ADMISSIBILITY</div>
        <div className="text-sm font-black text-purple-600">AuditLog Non-Repudiation</div>
        <div className="text-xs text-[#526477]">Sindh Civil Servants Act</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      In traditional municipal education bureaucracy, teacher transfers often lead to severe operational chaos: teachers leave their current school without official duty relief, and destination schools refuse to accept incoming staff. Our system enforces an <strong>atomic 5-stage finite state machine</strong> ensuring seamless transitions.
    </p>

    <SectionTitle>The 4 Teacher Transfer Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. The "Orphan Classroom" Disaster',
          right:
            'A teacher received verbal transfer orders, abandoned School A immediately, but School B refused admission. School A had no teacher, School B had no room, and students lost months of schooling. • SOLUTION: Enforced a 5-stage sequential finite state machine in `teacherTransferController.js`. Teaching assignments at School A remain active until the Directorate approves AND Source HM signs duty relief.',
        },
        {
          left: '2. Missing Relieving Handover & Asset Loss',
          right:
            'Teachers departed with official registers, examination keys, and lab equipment without completing a handover. • SOLUTION: Stage 3 (`RELIEVED`) enforces a formal checklist. Source HM must certify on-platform that all school assets, lesson diaries, and keys have been surrendered before the record can transition.',
        },
        {
          left: '3. Salary Gridlock from Delayed LPC Dispatch',
          right:
            'Municipal finance stopped paying the teacher’s salary because physical Last Pay Certificates (LPC) were delayed in transit. • SOLUTION: Auto-generates a digital transfer packet upon Stage 3 completion, instantly making the teacher visible to Town Finance with complete timeline transparency.',
        },
        {
          left: '4. Unauthorized Political Verbal Transfers',
          right:
            'Local political figures pressured Head Masters into informal transfers without Directorate approval. • SOLUTION: Transfer initiations are strictly role-gated to `SUPER_ADMIN` and `ADMIN`. Every status transition is immutably logged with actor IP, timestamp, and digital signature, making informal transfers technically impossible.',
        },
      ]}
    />

    <SectionTitle>The 5 Sequential Stages of Teacher Relocation</SectionTitle>
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

    <SectionTitle>State Machine Flowchart &amp; Exception Handling</SectionTitle>
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
    │     RELIEVED    │ (Teaching assignments revoked at Source School)
    └────────┬────────┘
             │ Transit Window (Max 7 Days)
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
    (Teacher's schoolId                    │
     atomically updated)          ┌────────┴─────────┐
                                  ▼                   ▼
                         ┌─────────────────┐ ┌─────────────────┐
                         │ ADMIN_CANCELLED │ │ ADMIN_OVERRIDE  │
                         └─────────────────┘ └─────────────────┘`}
    </TerminalBlock>

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="TEACHER TRANSFER API CONTRACTS">
{`# 1. Initiate Transfer Request
POST /api/v1/transfers
Headers: Authorization: Bearer <accessToken>
Guard: authorizeRoles('SUPER_ADMIN', 'ADMIN')
Body:
  teacherId:          string  required  Mongo ObjectId
  destinationSchoolId: string  required  Mongo ObjectId
  orderNumber:        string  required  Official SELD memo number
  reason:             string  required  min:15 chars
Response: 201 { success: true, transferId: "...", status: "INITIATED" }

# 2. Source HM Relieve Teacher
PATCH /api/v1/transfers/:id/relieve
Headers: Authorization: Bearer <accessToken>
Guard: authorizeRoles('HM'), attachScope('SCHOOL')
Body:
  clearanceAssetKeys:   bool    required  true
  clearanceGradeBooks:  bool    required  true
  handoverRemarks:      string  required
Response: 200 { success: true, status: "RELIEVED" }

# 3. Destination HM Confirm Joining
PATCH /api/v1/transfers/:id/confirm-joining
Headers: Authorization: Bearer <accessToken>
Guard: authorizeRoles('HM'), attachScope('SCHOOL')
Response: 200 { success: true, status: "COMPLETED", newSchoolId: "..." }`}
    </TerminalBlock>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 4. STUDENT MANAGEMENT, GENERAL REGISTER (GR) & DIGITAL ID CARDS
// ══════════════════════════════════════════════════════════════════════════════
export const StudentManagementSection = () => (
  <div>
    <DocHeader
      title="Student Management, General Register (GR) Engine & Digital ID Cards"
      badge="5. Core Operational Engines"
      subtitle="Authoritative municipal student registry enforcing unique General Register (GR) numbering, lifecycle transitions, and vector ID cards."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">DETERMINISTIC GR INDEX</div>
        <div className="text-sm font-black text-[#006AC7]">{'{ schoolId, grNumber }'}</div>
        <div className="text-xs text-[#526477]">Compound Unique Key</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">LIFECYCLE MACHINE</div>
        <div className="text-sm font-black text-[#4B7F3A]">5 Finite States</div>
        <div className="text-xs text-[#526477]">Dropout Tracking Enforced</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">VECTOR STUDENT ID CARDS</div>
        <div className="text-sm font-black text-amber-600">300 DPI Vector PDF</div>
        <div className="text-xs text-[#526477]">QR Verification Watermark</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">B-FORM INTEGRITY</div>
        <div className="text-sm font-black text-purple-600">NADRA Validation</div>
        <div className="text-xs text-[#526477]">Anti-Ghost Student Gate</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The student registry is the legal cornerstone of public education. Every child admitted into a Government of Sindh school receives a General Register (GR) number. In legacy paper systems, registers rotted, ghost enrollments siphoned textbook budgets, and dropouts were hidden. This engine provides complete student lifecycle governance.
    </p>

    <SectionTitle>The 4 Student Management Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. Bogus & Inflated Enrollment (Ghost Students)',
          right:
            'Schools inflated pupil counts to siphon extra free textbooks, school meal funds, and teacher headcount allocations. • SOLUTION: Enforced Nadra B-Form / Child Registration Certificate (CRC) uniqueness and compound unique indexing `{ schoolId: 1, grNumber: 1 }` in MongoDB Atlas. A single child cannot be enrolled across two schools concurrently.',
        },
        {
          left: '2. Permanent Loss of Century-Old GR Books',
          right:
            'Physical GR registers from the 1970s and 1980s decomposed from humidity, termite infestation, and monsoon leaks, leaving citizens unable to prove their matriculation or date of birth. • SOLUTION: Centralized digital General Register ledger in `StudentProfile.js` with permanent sequential numbering, automated historical migration tools, and digital cloud backups in MongoDB Atlas.',
        },
        {
          left: '3. Hidden Dropouts & Distorted Literacy Data',
          right:
            'Students who dropped out were kept on the active register indefinitely to avoid administrative scrutiny, distorting municipal literacy statistics. • SOLUTION: 5-state lifecycle engine (`ENROLLED`, `PROMOTED`, `DETAINED`, `TRANSFERRED`, `STRUCK_OFF`). If a student accumulates 30 consecutive unexcused absences, the system enforces the municipal `STRUCK_OFF` state, freeing the seat.',
        },
        {
          left: '4. Fake Student Identity Cards & Impersonation',
          right:
            'Impersonators taking board exams on behalf of enrolled students or unauthorized individuals entering school premises posing as students. • SOLUTION: Built server-side Vector Digital Student ID card generation via PDFKit. Each card embeds a dynamic QR code containing an HMAC-SHA256 signature verifying student credentials.',
        },
      ]}
    />

    <SectionTitle>Student Lifecycle State Machine</SectionTitle>
    <TerminalBlock title="STUDENT ENROLLMENT STATE MACHINE">
{`ENROLLED (Active student attending classes)
  │
  ├─► PROMOTED (Passed end-of-year exams, advanced to next grade)
  ├─► DETAINED (Failed exams, repeating current grade per Sindh Board rules)
  ├─► TRANSFERRED (Issued School Leaving Certificate, moved to another school)
  └─► STRUCK_OFF (Prolonged unexcused absence > 30 days per DMC By-Laws)`}
    </TerminalBlock>

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="STUDENT MANAGEMENT API CONTRACTS">
{`# 1. Enroll New Student (Auto-Generate GR Number)
POST /api/v1/students
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('students.enroll'), attachScope('SCHOOL')
Body:
  firstName:   string  required
  lastName:    string  required
  bFormNumber: string  required  XXXXX-XXXXXXX-X (NADRA format)
  dob:         string  required  YYYY-MM-DD
  gender:      enum    required  MALE | FEMALE
  classId:     string  required  Mongo ObjectId
  sectionId:   string  required  Mongo ObjectId
Response: 201 { success: true, studentId: "...", grNumber: 1042 }
Errors: 409 B-Form / GR Number Duplicate, 400 Invalid DOB

# 2. Generate Official Student ID Card PDF
GET /api/v1/students/:id/id-card-pdf
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('students.view'), attachScope('SCHOOL')
Response: 200 (application/pdf binary stream with HMAC-signed QR watermark)`}
    </TerminalBlock>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 5. PARENT PORTAL & 3-STEP ZERO-TRUST WARD VERIFICATION
// ══════════════════════════════════════════════════════════════════════════════
export const ParentPortalSection = () => (
  <div>
    <DocHeader
      title="Parent Portal & 3-Step Zero-Trust Ward Verification Wizard"
      badge="5. Core Operational Engines"
      subtitle="How working-class guardians verify ward relationships securely without exposing student PII or allowing unauthorized access."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ZERO-TRUST WARD VERIFICATION</div>
        <div className="text-sm font-black text-[#006AC7]">3 Sequential Gates</div>
        <div className="text-xs text-[#526477]">Anti-Stalking Defense</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">PII MASKING</div>
        <div className="text-sm font-black text-[#4B7F3A]">M**** A*** Display</div>
        <div className="text-xs text-[#526477]">Anti-Enumeration Guard</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">PARENT BFF INVARIANT</div>
        <div className="text-sm font-black text-amber-600">VERIFIED Link Check</div>
        <div className="text-xs text-[#526477]">Exact Ward Scoping Only</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">SMS OTP CHALLENGE</div>
        <div className="text-sm font-black text-purple-600">6-Digit Nonce</div>
        <div className="text-xs text-[#526477]">10-Minute Expiry Window</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The Parent Portal bridges public municipal schools with working-class guardians. In traditional schools, parents had zero insight into attendance, resulting in students skipping classes unnoticed for weeks. To prevent identity theft, child custody kidnapping, or stalking, claiming a student requires passing a strict 3-stage zero-trust verification pipeline.
    </p>

    <SectionTitle>The 4 Parent Portal Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. Child Stalking & Custody Disputes',
          right:
            'Estranged parents without legal custody, non-custodial relatives, or malicious actors attempted to track a child’s physical classroom location, timetable, and dismissal time. • SOLUTION: Enforced a 3-step verification gauntlet. Step 1 masks all PII (`M**** A***`). Step 2 requires an SMS OTP to the phone number on file. Step 3 requires the applicant to physically present their original CNIC and child B-Form to the Head Master.',
        },
        {
          left: '2. Low Digital Literacy of Working-Class Guardians',
          right:
            'Laborers and daily-wage earners in Liaquatabad struggled with passwords, email confirmations, or app store downloads. • SOLUTION: Streamlined Progressive Web App (PWA) with simple Urdu-English bilingual prompts, mobile-number-first authentication, zero password requirements (pure SMS OTP login), and lightweight mobile screens.',
        },
        {
          left: '3. Cross-Ward BOLA Vulnerabilities in Educational APIs',
          right:
            'An authenticated parent could alter the `studentId` parameter in an API call to inspect grades and attendance of neighboring children. • SOLUTION: Enforced the strict Parent BFF invariant in `attachScope.js`: Every query checks `ParentStudentLink` for `(parentId === req.user.id && studentProfileId === requestedId && status === \'VERIFIED\')`. Any mismatch throws `403 Forbidden`.',
        },
        {
          left: '4. Stale Guardianship Following Inter-School Transfers',
          right:
            'When a child transferred to another municipal school, old guardian links remained active without re-verification. • SOLUTION: Enforced automated cascade-invalidation hook in `parentLinkController.js`. If a student transitions to `TRANSFERRED` or `STRUCK_OFF`, all active links enter `SUSPENDED` status, requiring re-affirmation at the new institution.',
        },
      ]}
    />

    <SectionTitle>The 3-Step Ward Verification Wizard</SectionTitle>
    <Steps
      items={[
        {
          step: '1',
          title: 'Anti-Enumeration GR Lookup',
          desc: 'Parent enters School ID, Class, Section, and GR Number. API returns masked student name ("M**** A***") and DOB year. Zero contact info, home addresses, or CNICs are revealed.',
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

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="PARENT WARD LINKAGE API CONTRACTS">
{`# 1. Anti-Enumeration Ward Lookup
POST /api/v1/parent/link/lookup
Headers: Authorization: Bearer <accessToken>
Body:
  schoolId: string  required  Mongo ObjectId
  grNumber: number  required  e.g. 1042
Response: 200 { success: true, maskedName: "M**** A***", birthYear: 2014, tempToken: "..." }
Errors: 404 No Student Found, 429 Too Many Inquiries (Rate Limited)

# 2. Challenge Guardian Phone OTP
POST /api/v1/parent/link/verify-otp
Headers: Authorization: Bearer <accessToken>
Body:
  tempToken: string  required
  otpCode:   string  required  6-digit string
Response: 200 { success: true, message: "OTP verified. Status: PENDING_HM_APPROVAL" }

# 3. Head Master In-Person Physical Verification
PATCH /api/v1/parent/link/hm-approve
Headers: Authorization: Bearer <accessToken>
Guard: authorizeRoles('HM'), attachScope('SCHOOL')
Body:
  linkId:           string  required  Mongo ObjectId
  bFormVerified:    bool    required  true
  guardianCnicSeen: bool    required  true
Response: 200 { success: true, status: "VERIFIED", linkedAt: "..." }`}
    </TerminalBlock>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 6. SMART ATTENDANCE ENGINE & KARACHI MUNICIPAL TIMING POLICY
// ══════════════════════════════════════════════════════════════════════════════
export const AttendanceEngineSection = () => (
  <div>
    <DocHeader
      title="Smart Attendance Engine & Karachi Municipal Timing Policy"
      badge="5. Core Operational Engines"
      subtitle="High-precision student and teacher muster tracking with deterministic Asia/Karachi timezone calculations, hardware morning gates, rain emergency locks, and monthly rollup analytics."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TIMEZONE NORMALIZATION</div>
        <div className="text-sm font-black text-[#006AC7]">Asia/Karachi (UTC+5)</div>
        <div className="text-xs text-[#526477]">Immune to Server Clock Drift</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">MORNING TIMING GATE</div>
        <div className="text-sm font-black text-[#4B7F3A]">07:30 AM – 08:15 AM</div>
        <div className="text-xs text-[#526477]">08:15 Late Cutoff • 09:00 Lock</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">FRIDAY JUMMAH GATE</div>
        <div className="text-sm font-black text-amber-600">12:00 PM Dismissal</div>
        <div className="text-xs text-[#526477]">Congregational Prayers</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">VERIFIED TESTS</div>
        <div className="text-sm font-black text-purple-600">70 PASS (100%)</div>
        <div className="text-xs text-[#526477]">48 Timing + 22 Smart System</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The Smart Attendance Engine replaces vulnerable paper registers with an automated, tamper-proof muster system. It enforces official Karachi municipal school timing gates, prevents proxy and ghost attendance through server-side window enforcement, and seamlessly handles monsoon rain emergencies.
    </p>

    <SectionTitle>The 6 Municipal Problem Vectors &amp; Engineering Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. Host Container Clock Drift (UTC vs PKT)',
          right:
            'Cloud hosting containers (Vercel serverless / Docker instances) operate in UTC by default. Teachers marking attendance at 08:00 AM PKT were being recorded as 03:00 AM UTC, shifting daily attendance into wrong calendar dates and corrupting monthly rollups. • SOLUTION: Built `server/src/utils/karachiTime.js` utilizing native `Intl.DateTimeFormat(\'en-CA\', { timeZone: \'Asia/Karachi\' })` with explicit integer minute-from-midnight calculations ($M = \\text{hours} \\times 60 + \\text{minutes}$). The engine is 100% decoupled from host server hardware time.',
        },
        {
          left: '2. Ghost Staff & Evening Proxy Punctuality',
          right:
            'In legacy manual muster rolls, absent or truant teachers would mark paper registers in the evening from home, or ask colleagues to mark proxies for them before supervisor audits. • SOLUTION: Implemented strict hardware timing window gates in `attendanceWindowService.js`. The morning gate opens at 07:30 AM (450 mins), the late cutoff triggers at 08:15 AM (495 mins), and gates hard-lock at 09:00 AM (540 mins). After 09:00 AM, teachers are completely blocked from marking attendance.',
        },
        {
          left: '3. Inspection Backdating & Register Tampering',
          right:
            'Head Masters would frequently backdate muster rolls for past days to cover for chronic absentee staff before unannounced Cluster Supervisor visits. • SOLUTION: Enforced a mathematical same-day rule (`submissionDate === currentKarachiDate`). Historical backdating to prior days is rejected with `400 Bad Request`. Same-day late overrides by HMs require a mandatory written justification string and write before/after state diffs to the immutable `AuditLog`.',
        },
        {
          left: '4. Monsoon Rain Emergencies & Gazetted Holidays',
          right:
            'Karachi regularly experiences severe urban monsoon flooding and heatwaves. When the DMC Education Directorate declares emergency school closures, manual entry created conflicts and false absentee flags for trapped students. • SOLUTION: Implemented 1-click Town-wide Holiday Policy in `HolidayCalendar.js` & `WeeklyOffPattern.js`. An emergency closure declared by Town Admin immediately locks attendance submissions across all cluster schools and auto-excuses cohorts.',
        },
        {
          left: '5. Weak 2G/3G Connectivity & Race Conditions',
          right:
            'Government schools in Karachi Central suffer from intermittent 2G/3G cellular connectivity. Repeated button taps during network lags caused duplicate attendance entries and database deadlock exceptions. • SOLUTION: Enforced a compound partial unique index `{ studentId: 1, date: 1 }` in MongoDB Atlas, combined with multi-document batch transactions to ensure idempotent, atomic writes.',
        },
        {
          left: '6. Report Card Cumulative Query Latency',
          right:
            'Calculating cumulative annual attendance percentages across thousands of students by scanning 200+ raw daily registers was causing 800ms+ delays during term-end marksheets generation. • SOLUTION: Developed asynchronous `attendanceRollupService.js` and `AttendanceSummary.js` to pre-compute monthly attendance summaries in the background, dropping marksheet query response times from 850ms to <15ms.',
        },
      ]}
    />

    <SectionTitle>End-to-End Attendance Request Lifecycle</SectionTitle>
    <TerminalBlock title="ATTENDANCE DATA FLOW &amp; VERIFICATION SEQUENCE">
{`1. TEACHER INITIATION (Classroom Register Screen)
   │ Teacher reviews student list & taps "Submit Morning Batch"
2. REDUX ACTION & AXIOS INTERCEPTOR (attendanceSlice.js)
   │ Injects Authorization: Bearer <accessToken>
3. BFF SECURITY MIDDLEWARE PIPELINE (server.js)
   ├── authenticate.js (Validates JWT signature & tokenVersion)
   ├── authorizePermissions.js (Asserts 'attendance.mark' permission)
   └── attachScope.js (Hard-locks query to teacher's assigned sectionId & schoolId)
4. TIMEZONE NORMALIZATION (server/src/utils/karachiTime.js)
   │ Resolves deterministic Asia/Karachi time & minutes from midnight
5. WINDOW & HOLIDAY GATE (attendanceWindowService.js)
   ├── checkIsSchoolClosed() (Queries HolidayCalendar & WeeklyOffPattern)
   └── validateSubmissionWindow() (Enforces 07:30 AM – 09:00 AM window)
6. BATCH DATABASE COMMIT (MongoDB Atlas 7.0)
   │ Atomic insertMany with compound unique index assertion { studentId, date }
7. IMMUTABLE AUDIT TRAIL (AuditLog.js)
   │ Writes ATTENDANCE_BATCH_SUBMITTED with actorId, IP, and headcount diffs
8. ASYNCHRONOUS MONTHLY ROLLUP (attendanceRollupService.js)
   │ Updates AttendanceSummary cache for instant report card generation`}
    </TerminalBlock>

    <SectionTitle>Karachi Municipal Timing Policy Matrix</SectionTitle>
    <ComparisonTable
      headers={['Operational Window', 'Timing (Asia/Karachi, UTC+5)', 'System Enforcement & Assigned Status']}
      rows={[
        {
          left: 'Morning Gate Opening',
          right: '07:30 AM PST • School gates open. Submission window active. Status assigned: PRESENT.',
        },
        {
          left: 'Normal Check-In Window',
          right: '07:30 AM – 08:14 AM PST • On-time arrival window for students and teaching faculty. Status: PRESENT.',
        },
        {
          left: 'Punctuality Late Cutoff',
          right: '08:15 AM PST • Punctuality threshold. Arrivals between 08:15 AM and 09:00 AM are flagged LATE with exact minutes.',
        },
        {
          left: 'Teacher Gate Hard-Lock',
          right: '09:00 AM PST • Classroom register submission window closes. Regular teachers cannot submit after this time.',
        },
        {
          left: 'HM Late Override Window',
          right: '09:01 AM – 12:00 PM PST • Head Master same-day override window. Requires written reason; logged to AuditLog.',
        },
        {
          left: 'Friday Jummah Dismissal',
          right: 'Friday 12:00 PM PST • Automatic early dismissal gate for Friday congregational Jummah prayers across Sindh.',
        },
        {
          left: 'Holy Month of Ramadan',
          right: '08:00 AM – 11:30 AM PST • Compressed municipal school schedule activated via Town holiday policy.',
        },
      ]}
    />

    <SectionTitle>Holiday &amp; Weather Emergency Governance State Machine</SectionTitle>
    <TerminalBlock title="TOWN-WIDE VS SCHOOL-SPECIFIC CLOSURE HIERARCHY">
{`                        ┌─────────────────────────────────┐
                        │   ATTENDANCE SUBMISSION REQUEST │
                        └────────────────┬────────────────┘
                                         │
                                         ▼
                        ┌─────────────────────────────────┐
                        │  Is Date in HolidayCalendar?    │
                        └────────┬───────────────┬────────┘
                                 │ YES           │ NO
                                 ▼               ▼
                 ┌──────────────────────┐ ┌──────────────────────┐
                 │ Scope: TOWN?         │ │  Weekly Off Pattern? │
                 │ (Monsoon Rain Emergency) (Sunday / Saturday) │
                 └───────┬──────────────┘ └──────┬───────────────┘
                         │                       │ YES
                         ▼                       ▼
                 ┌───────────────────────────────────────┐
                 │ 400 Bad Request: School Closed        │
                 │ Attendance Marking Locked (Ghost Block)│
                 └───────────────────────────────────────┘`}
    </TerminalBlock>

    <SectionTitle>Database Schemas &amp; Architectural Contracts</SectionTitle>
    <ComparisonTable
      headers={['Model Name', 'Primary Schema Responsibilities', 'Key Indexes & Architectural Invariants']}
      rows={[
        {
          left: 'Attendance.js',
          right: 'Daily attendance ledger storing studentId, sectionId, schoolId, date (YYYY-MM-DD), status (PRESENT/ABSENT/LATE/LEAVE), arrivalMinutes, and markedBy. • Compound unique index: `{ studentId: 1, date: 1 }`.',
        },
        {
          left: 'AttendanceSummary.js',
          right: 'Pre-computed monthly rollups storing studentId, month, year, presentDays, absentDays, lateDays, leaveDays, and attendancePercentage. • Enables instant marksheet generation.',
        },
        {
          left: 'HolidayCalendar.js',
          right: 'Provincial gazetted holidays and municipal emergency closures storing townId, schoolId, scopeType (TOWN/SCHOOL), holidayType (GAZETTED, RAIN_EMERGENCY, HEATWAVE), and YYYY-MM-DD date range.',
        },
        {
          left: 'WeeklyOffPattern.js',
          right: 'Standard weekend policy rules storing townId, schoolId, offDays array (0 = Sunday, 6 = Saturday), and active date range.',
        },
      ]}
    />

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="CORE ATTENDANCE API CONTRACTS">
{`# 1. Batch Attendance Submission (Classroom Teacher)
POST /api/v1/attendance/batch
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('attendance.mark'), attachScope('CLASS_SECTION')
Body:
  sectionId: string  required  Mongo ObjectId
  date:      string  required  YYYY-MM-DD (Asia/Karachi PST)
  records:   array   required
    - studentId: string  required  Mongo ObjectId
      status:    enum    required  PRESENT | ABSENT | LEAVE | LATE
Response: 200 { success: true, message: "Attendance marked successfully", count: 35, lateCount: 2 }
Errors: 400 Window Closed / Holiday, 403 Scope Mismatch, 409 Duplicate Daily Record

# 2. Same-Day Late Override (Head Master Only)
PATCH /api/v1/attendance/override
Headers: Authorization: Bearer <accessToken>
Guard: authorizeRoles('HM', 'ADMIN'), attachScope('SCHOOL')
Body:
  attendanceId: string  required  Mongo ObjectId
  newStatus:    enum    required  PRESENT | EXCUSED_LEAVE
  reason:       string  required  min:10 chars justification
Response: 200 { success: true, message: "Attendance override recorded in immutable audit log" }
Errors: 400 Cannot Backdate Past Days, 403 Scope Mismatch, 404 Record Not Found

# 3. Attendance Analytics & Aggregation
GET /api/v1/attendance/analytics
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('attendance.view'), attachScope
Query:
  schoolId:  string  optional  Mongo ObjectId (filtered by scope)
  sectionId: string  optional  Mongo ObjectId
  month:     number  required  1-12
  year:      number  required  e.g. 2026
Response: 200 { success: true, data: { totalEnrolled, averageAttendanceRate, lateIncidenceRate } }`}
    </TerminalBlock>

    <SectionTitle>Security, Scope Guards &amp; Audit Invariants</SectionTitle>
    <Callout type="security" title="ANTI-GHOSTING &amp; BOLA JURISDICTIONAL ISOLATION">
      Teachers can mark attendance <strong>exclusively for sections explicitly assigned to them</strong> via active <code>TeachingAssignment</code> records. Attempting to mark attendance for a neighboring classroom or foreign school triggers an immediate <code>403 Forbidden</code> and writes a security tripwire incident to <code>AuditLog</code>.
    </Callout>
    <Callout type="info" title="100% AUTOMATED TEST SUITE EVIDENCE">
      The Smart Attendance Engine is verified by <strong>70 automated test assertions</strong> passing at 100%:
      <br />
      • <code>tests/town_holiday_and_timing_policy.test.js</code> (48 passing tests)
      <br />
      • <code>tests/smart_attendance_system.test.js</code> (22 passing tests)
    </Callout>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 7. ELEMENTARY BOARD EXAMINATION & TABULATION ENGINE (700 MARKS)
// ══════════════════════════════════════════════════════════════════════════════
export const ExaminationEngineSection = () => (
  <div>
    <DocHeader
      title="Elementary Board Examination & Tabulation Engine (700 Marks)"
      badge="5. Core Operational Engines"
      subtitle="The exact mathematical formulas, Nazra Quran splits, Drawing grade exclusions, and ranking algorithms enforcing Sindh Elementary Board regulations."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">STATUTORY AGGREGATE</div>
        <div className="text-sm font-black text-[#006AC7]">700 Max Marks</div>
        <div className="text-xs text-[#526477]">7 Standard Subjects × 100</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ISLAMIAT SPLIT</div>
        <div className="text-sm font-black text-[#4B7F3A]">20 Nazra / 80 Theory</div>
        <div className="text-xs text-[#526477]">Compulsory Quran Act</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">DRAWING EXCLUSION</div>
        <div className="text-sm font-black text-amber-600">Letter Grade Only (A-D)</div>
        <div className="text-xs text-[#526477]">0 Marks in Aggregate</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">PASSING GATE &amp; RANKING</div>
        <div className="text-sm font-black text-purple-600">33% Subject &amp; Total</div>
        <div className="text-xs text-[#526477]">Fail Disqualifies Ranks</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Grades 4 through 8 in Liaquatabad Town public schools are governed by the <strong>Sindh Elementary Board examination framework</strong>. Manual grading often led to arbitrary calculations; our engine enforces these rules mathematically.
    </p>

    <SectionTitle>The 4 Examination Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. The 800-Mark Calculation Violation',
          right:
            'Teachers and legacy spreadsheets incorrectly added Drawing’s 100 marks into the grand aggregate, calculating percentages out of 800. This violated Sindh Board statutory regulations, producing incorrect grades and disqualifying students from provincial admissions. • SOLUTION: Hardcoded the mathematical aggregate formula to exactly 7 standard subjects (700 marks max). Drawing marks are strictly treated as a non-numeric letter grade (A/B/C/D) that is displayed separately on the report card but completely excluded from percentage and ranking math.',
        },
        {
          left: '2. Monolithic Islamiat Marks Masquerading Nazra',
          right:
            'Teachers entered a single combined Islamiat mark without assessing Quranic recitation, violating the Government of Sindh Compulsory Quran Nazra Teaching Act. • SOLUTION: Enforced schema-level dual-field input: `nazraQuranMarks` (max 20) + `writtenTheoryMarks` (max 80). The system validates that each component conforms to bounds, then aggregates to 100 with separate sub-columns on the Tabulation Broadsheet.',
        },
        {
          left: '3. Corrupted Class Rankings for Failed Students',
          right:
            'In manual spreadsheet sorting, a student scoring 70% overall but scoring 15% in English was erroneously assigned 3rd Position, even though they failed the examination. • SOLUTION: Multi-pass deterministic ranking algorithm in `gradeCalculationService.js`. Pass criteria requires $\\ge 33\\%$ in *every single individual subject* plus $\\ge 33\\%$ overall. Any failed subject immediately marks the student as `FAILED` and disqualifies them from position ranking.',
        },
        {
          left: '4. Post-Tabulation Marks Tampering',
          right:
            'Low-level staff altered marks after examinations to inflate school pass rates before Board inspections. • SOLUTION: Implemented immutable exam sealing (`status: "PUBLISHED"`). Once published by the Head Master, marks become read-only. Any subsequent amendment requires Directorate-level administrative override with before/after audit snapshots.',
        },
      ]}
    />

    <SectionTitle>Sindh Board 7-Subject Matrix &amp; Marks Allocation</SectionTitle>
    <ComparisonTable
      headers={['Subject Title', 'Maximum Marks', 'Passing Threshold (33%)', 'Sindh Board Regulatory Rule']}
      rows={[
        {
          left: '1. English Language & Compulsory',
          right: '100 Marks • Minimum Passing: 33 • Core academic language paper.',
        },
        {
          left: '2. Urdu / Sindhi (Mother Tongue)',
          right: '100 Marks • Minimum Passing: 33 • Regional linguistic proficiency.',
        },
        {
          left: '3. Mathematics',
          right: '100 Marks • Minimum Passing: 33 • Arithmetic, algebra, and geometry.',
        },
        {
          left: '4. General Science',
          right: '100 Marks • Minimum Passing: 33 • Integrated physical, chemical, and biological concepts.',
        },
        {
          left: '5. Social Studies (Muashrati Uloom)',
          right: '100 Marks • Minimum Passing: 33 • History, geography, and civics.',
        },
        {
          left: '6. Islamiat / Ethics (Non-Muslims)',
          right: '100 Marks (20 Nazra Quran + 80 Theory) • Minimum: 7 Nazra + 26 Theory = 33 Total.',
        },
        {
          left: '7. Computer Education / General',
          right: '100 Marks • Minimum Passing: 33 • Information technology fundamentals.',
        },
        {
          left: '8. Drawing (Art & Craft)',
          right: 'GRADE ONLY (A, B, C, D) • 0 Numeric Marks in Aggregate • Strictly Excluded from 700 Total.',
        },
      ]}
    />

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
            <td className="p-3 font-mono">&ge; 80.00%</td>
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

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="EXAMINATION &amp; TABULATION API CONTRACTS">
{`# 1. Batch Marks Entry (Class Teacher)
POST /api/v1/exams/:examId/marks
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('exams.enterMarks'), attachScope('CLASS_SECTION')
Body:
  sectionId: string required Mongo ObjectId
  records:   array  required
    - studentId:            string  required  Mongo ObjectId
      subjectMarks:         object  required  { english: 85, math: 92, ... }
      islamiatNazra:        number  required  0-20
      islamiatTheory:       number  required  0-80
      drawingGrade:         enum    required  A | B | C | D
Response: 200 { success: true, processedCount: 38 }
Errors: 400 Marks Out of Range, 403 Scope Mismatch, 409 Exam Already Sealed

# 2. Publish & Seal Examination (Head Master Only)
PATCH /api/v1/exams/:examId/publish
Headers: Authorization: Bearer <accessToken>
Guard: authorizeRoles('HM'), attachScope('SCHOOL')
Response: 200 { success: true, status: "PUBLISHED", broadsheetLocked: true }`}
    </TerminalBlock>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 8. OFFICIAL MARKSHEET PDF & TABULATION SHEET PIPELINE
// ══════════════════════════════════════════════════════════════════════════════
export const MarksheetsTabulationSection = () => (
  <div>
    <DocHeader
      title="Official Marksheet PDF & Tabulation Sheet Pipeline"
      badge="5. Core Operational Engines"
      subtitle="Server-side PDFKit vector generation of official Government of Sindh marksheets, broadsheets, and anti-counterfeiting QR codes."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">STREAMING VECTOR ENGINE</div>
        <div className="text-sm font-black text-[#006AC7]">PDFKit 0.16.0</div>
        <div className="text-xs text-[#526477]">&lt; 15MB Server RAM</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ANTI-COUNTERFEITING</div>
        <div className="text-sm font-black text-[#4B7F3A]">HMAC-SHA256 QR</div>
        <div className="text-xs text-[#526477]">Tamper-Proof Verification</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">BROADSHEET REGISTERS</div>
        <div className="text-sm font-black text-amber-600">Landscape Broadsheet</div>
        <div className="text-xs text-[#526477]">Complete Class Tabulation</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">SECURITY WATERMARK</div>
        <div className="text-sm font-black text-purple-600">Government of Sindh</div>
        <div className="text-xs text-[#526477]">8% Opacity Vector Crest</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Tabulation sheets and individual marksheets are official legal documents required for secondary school admissions and government records. Our pipeline streams mathematically exact vector documents directly from Node.js memory without heavy headless browsers.
    </p>

    <SectionTitle>The 4 Marksheet Generation Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. Puppeteer / Headless Chrome Server Crashes',
          right:
            'Generating 2,000 marksheets using headless Chrome spawned 20+ Chromium processes consuming 6GB+ RAM, crashing Vercel and Node.js containers. • SOLUTION: Replaced headless browsers with native vector rendering using `PDFKit 0.16.0`. Generates direct PDF binary streams in memory (&lt; 15MB RAM), delivering 10x faster execution and zero server crashes.',
        },
        {
          left: '2. Forged Paper Marksheets & Altered Numbers',
          right:
            'Students altered marks with correction fluid or photocopied fake certificates for secondary school admissions. • SOLUTION: Every generated marksheet embeds a high-density QR code containing an HMAC-SHA256 signature containing `(studentId, examId, totalMarks, grade, issueDate)`. Scanning the QR navigates to official verification endpoints validating signatures against the database vault.',
        },
        {
          left: '3. Unreadable Paper Tabulation Broadsheets',
          right:
            'Traditional broadsheet scrolls tore easily or had misaligned ink columns, making it impossible to audit scores across 60 students. • SOLUTION: Automated landscape vector broadsheet generator. Formats up to 40 students per page with alternating zebra-striping, column headers, Islamiat 20/80 sub-columns, pass/fail counts, and signature blocks.',
        },
        {
          left: '4. Lack of Official Watermarks & Crest Authenticity',
          right:
            'Unofficial printouts lacked administrative credibility during inter-district student transfers. • SOLUTION: Embedded 300 DPI vector watermark of the Government of Sindh coat of arms and DMC Liaquatabad Town Centre emblem, rendered with 8% opacity behind the marksheet grid.',
        },
      ]}
    />

    <SectionTitle>End-to-End Vector Marksheet Generation Pipeline</SectionTitle>
    <TerminalBlock title="VECTOR RENDERING &amp; QR WATERMARK STREAM">
{`1. TABULATION DATA EXTRACTION (ExamResult.js + StudentProfile.js)
   │ Queries student demographics, subject marks, attendance rollup %, and rank
2. CRYPTOGRAPHIC SIGNATURE GENERATION
   │ HMAC-SHA256(studentId + examId + totalMarks + grade, SECRET_KEY)
3. QR CODE MATRIX GENERATION (qrcode library)
   │ Encodes verification URL: https://education.dmcliaquatabad.gos.pk/verify-marksheet?sig=...
4. PDFKIT VECTOR STREAM (pdfkit 0.16.0)
   ├── Watermark Layer (Government of Sindh Emblem, 8% Opacity)
   ├── Header & Letterhead (DMC Liaquatabad Town Centre, SEMIS Code)
   ├── Student Bio Grid (GR Number, Name, Father Name, B-Form)
   ├── Subject Marks Table (700 Marks Denominator, Islamiat Nazra Split)
   ├── Drawing Letter Grade (Segregated from Numeric Total)
   └── Signature Blocks (Class Teacher, Exam In-Charge, Head Master)
5. DIRECT HTTP CHUNKED STREAM TO CLIENT
   │ Content-Type: application/pdf; Content-Disposition: inline`}
    </TerminalBlock>

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="MARKSHEET &amp; TABULATION API CONTRACTS">
{`# 1. Stream Student Official Marksheet PDF
GET /api/v1/marksheets/student/:studentId/exam/:examId/pdf
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('marksheets.view'), attachScope('CHILD', 'SCHOOL')
Response: 200 (application/pdf binary stream with Content-Disposition: inline)

# 2. Stream Class Section Broadsheet Tabulation Register PDF
GET /api/v1/marksheets/section/:sectionId/exam/:examId/tabulation-pdf
Headers: Authorization: Bearer <accessToken>
Guard: authorizePermissions('marksheets.view'), attachScope('SCHOOL')
Response: 200 (application/pdf landscape vector stream)`}
    </TerminalBlock>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 9. OFFICIAL CIRCULARS, GAZETTE NOTICES & FREE DIGITAL TEXTBOOKS
// ══════════════════════════════════════════════════════════════════════════════
export const DocumentsLibrarySection = () => (
  <div>
    <DocHeader
      title="Official Circulars, Gazette Notices & Free Digital Textbooks"
      badge="5. Core Operational Engines"
      subtitle="Public repository for verified Sindh government textbooks and internal administrative circulars."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">FREE SINDH TEXTBOOKS</div>
        <div className="text-sm font-black text-[#006AC7]">Class 1 to Class 10</div>
        <div className="text-xs text-[#526477]">100% Free Public CDN Access</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">STORAGE BACKEND</div>
        <div className="text-sm font-black text-[#4B7F3A]">Cloudinary Media Vault</div>
        <div className="text-xs text-[#526477]">Progressive PDF Streaming</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CIRCULAR SCOPING</div>
        <div className="text-sm font-black text-amber-600">TOWN vs SCHOOL</div>
        <div className="text-xs text-[#526477]">Role-Gated Distribution</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TAMPER PROOFING</div>
        <div className="text-sm font-black text-purple-600">SHA-256 Checksums</div>
        <div className="text-xs text-[#526477]">Immutable Asset Ledger</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Access to authorized learning materials and official administrative circulars is critical for municipal education. This engine provides free digital textbooks for students while maintaining a secure, role-scoped dispatch outbox for government gazette circulars.
    </p>

    <SectionTitle>The 4 Document Library Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. Textbook Black Markets & Impoverished Students',
          right:
            'Underprivileged students in Liaquatabad could not afford printed textbooks due to market shortages and price gouging. • SOLUTION: Hosted an open-access public digital library on the landing portal (`/e-books`) delivering authorized Government of Sindh textbooks for Class 1 through 10 in PDF format with zero authentication required.',
        },
        {
          left: '2. Lost Administrative Circulars & Delayed Directives',
          right:
            'Critical Directorate notices regarding rain holidays, heatwave advisories, or syllabus changes were delayed in physical dispatch mail. • SOLUTION: Built a digital circulars engine (`Document.js`). Town-level circulars publish immediately to all municipal school dashboards; school-level notices are scoped to faculty and parents.',
        },
        {
          left: '3. Fabricated WhatsApp Circulars (Fake Holidays)',
          right:
            'Fake holiday notifications circulated on social media, creating confusion among school heads. • SOLUTION: All official circulars are signed by authorized administrators (`SUPER_ADMIN` or `ADMIN`), tagged with an official dispatch memo number, and cross-verifiable on the public landing portal.',
        },
        {
          left: '4. Large PDF Bandwidth Choke on Mobile Networks',
          right:
            'High-resolution 80MB textbook scans choked 2G/3G mobile data connections. • SOLUTION: Integrated Cloudinary progressive stream optimization and CDN caching, serving compressed web-optimized PDFs with lazy-loaded page rendering.',
        },
      ]}
    />

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="DOCUMENTS &amp; TEXTBOOKS API CONTRACTS">
{`# 1. Fetch Public Free Sindh Textbooks (No Auth Required)
GET /api/v1/documents/textbooks
Query: classGrade: number (1-10), medium: enum (URDU | SINDHI | ENGLISH)
Response: 200 { success: true, count: 8, data: [{ title, subject, downloadUrl, sizeBytes }] }

# 2. Upload Official Municipal Circular (Admin Only)
POST /api/v1/documents/circulars
Headers: Authorization: Bearer <accessToken>
Guard: authorizeRoles('SUPER_ADMIN', 'ADMIN', 'HM')
Body:
  title:        string  required
  dispatchNo:   string  required  Official SELD memo number
  scopeType:    enum    required  TOWN | SCHOOL
  schoolId:     string  optional  Required if scopeType is SCHOOL
  fileUrl:      string  required  Cloudinary asset URL
Response: 201 { success: true, documentId: "...", publishedAt: "..." }`}
    </TerminalBlock>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 10. CENTRAL IN-APP NOTIFICATIONS & EMERGENCY OUTBOX
// ══════════════════════════════════════════════════════════════════════════════
export const NotificationsOutboxSection = () => (
  <div>
    <DocHeader
      title="Central In-App Notifications & Emergency Outbox"
      badge="5. Core Operational Engines"
      subtitle="Real-time administrative alerts, emergency weather closures, and academic milestone notifications."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">DELIVERY LATENCY</div>
        <div className="text-sm font-black text-[#006AC7]">&lt; 250ms Alert Push</div>
        <div className="text-xs text-[#526477]">Real-Time Web Shell</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">ALERT STREAMS</div>
        <div className="text-sm font-black text-[#4B7F3A]">6 Categorized Streams</div>
        <div className="text-xs text-[#526477]">Weather, Absence, Results</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">READ ACKNOWLEDGMENT</div>
        <div className="text-sm font-black text-amber-600">Timestamped Receipts</div>
        <div className="text-xs text-[#526477]">Non-Repudiation Proof</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">BROADCAST CONTROL</div>
        <div className="text-sm font-black text-purple-600">Role-Gated Authority</div>
        <div className="text-xs text-[#526477]">Zero Spam Tolerance</div>
      </div>
    </div>

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The platform contains a dedicated <code>Notification</code> engine delivering in-app alerts and outbox notifications. Alerts are strictly role-targeted and scope-filtered to prevent notification fatigue while ensuring emergency safety directives reach all stakeholders immediately.
    </p>

    <SectionTitle>The 4 Notification Problem Vectors &amp; Engineered Solutions</SectionTitle>
    <ComparisonTable
      headers={['Municipal Problem Vector', 'Real-World Operational Impact', 'Engineered Architectural Solution']}
      rows={[
        {
          left: '1. Uncoordinated Weather Emergency Alerts',
          right:
            'During urban monsoons or severe heatwaves, school heads did not know whether to open schools, leading to children stranded in flooded streets. • SOLUTION: Built a 1-click Emergency Broadcast engine. When Town Directorate declares an Emergency Weather Closure, high-priority banner notifications push to all active sessions across teachers, HMs, and parents simultaneously.',
        },
        {
          left: '2. Unnoticed Chronic Absenteeism',
          right:
            'Parents were shocked when their child was detained from taking board exams due to &lt; 75% attendance, claiming they were never notified. • SOLUTION: Automated attendance deficit alert trigger. When a student’s rolling attendance drops below the 75% threshold, an automated warning is generated and delivered to the parent’s notification outbox.',
        },
        {
          left: '3. Notification Fatigue & Broadcast Spam',
          right:
            'Users ignored notifications because low-level staff sent uncurated personal messages or promotional announcements. • SOLUTION: Enforced strict role-gating on broadcast authority. Only Super Admin and Head Masters can broadcast messages; regular teachers can only notify specific parents regarding homework or student behavior.',
        },
        {
          left: '4. Deniability of Official Directives',
          right:
            'Staff claimed ignorance of disciplinary notices or inspection orders. • SOLUTION: Implemented immutable read-receipt tracking in `Notification.js`. Records the exact timestamp when the user opened and viewed the notification.',
        },
      ]}
    />

    <SectionTitle>The 6 Categorized Alert Streams</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-red-600 uppercase">1. Emergency Weather Alerts</div>
        <div className="text-xs text-[#526477]">Rain emergency and heatwave school closure alerts broadcasted to all parents and staff.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-[#006AC7] uppercase">2. Attendance Deficit Warnings</div>
        <div className="text-xs text-[#526477]">Dispatched to parents when student attendance drops below 75% examination threshold.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-[#4B7F3A] uppercase">3. Exam Result Announcements</div>
        <div className="text-xs text-[#526477]">Immediate notification when the Head Master officially seals and publishes board tabulation.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-amber-600 uppercase">4. Inspection Deficiency Alerts</div>
        <div className="text-xs text-[#526477]">Dispatched to Super Admin when an inspector logs critical infrastructure failures.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-purple-600 uppercase">5. Teacher Transfer Status</div>
        <div className="text-xs text-[#526477]">Notifies source and destination Head Masters as a teacher advances through transfer stages.</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-xs font-bold text-indigo-600 uppercase">6. Ward Verification Requests</div>
        <div className="text-xs text-[#526477]">Notifies Head Master when a parent arrives with physical documents for linkage approval.</div>
      </div>
    </div>

    <SectionTitle>Schema-First API Specifications (CVify Standard)</SectionTitle>
    <TerminalBlock title="NOTIFICATIONS API CONTRACTS">
{`# 1. Get User Notification Feed
GET /api/v1/notifications
Headers: Authorization: Bearer <accessToken>
Query: unreadOnly: bool (default false), limit: number (default 20)
Response: 200 { success: true, count: 5, unreadCount: 2, data: [...] }

# 2. Mark Notification as Read (Receipt Acknowledgment)
PATCH /api/v1/notifications/:id/read
Headers: Authorization: Bearer <accessToken>
Response: 200 { success: true, readAt: "2026-09-27T04:55:00Z" }

# 3. Broadcast Emergency Alert (Directorate Only)
POST /api/v1/notifications/broadcast
Headers: Authorization: Bearer <accessToken>
Guard: authorizeRoles('SUPER_ADMIN')
Body:
  title:    string  required  e.g. "URGENT: Monsoon School Closure"
  message:  string  required
  priority: enum    required  EMERGENCY | HIGH
Response: 201 { success: true, recipientsCount: 1420 }`}
    </TerminalBlock>
  </div>
);
