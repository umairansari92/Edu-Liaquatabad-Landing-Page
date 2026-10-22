import React from 'react';
import {
  Shield,
  Database,
  Terminal,
  CheckCircle2,
  FileText,
  Lock,
} from 'lucide-react';
import {
  DocHeader,
  SectionTitle,
  InfoCard,
  ComparisonTable,
  TerminalBlock,
  Callout,
  Steps,
  ReasoningCard,
  FailureRecoveryCard,
  VerificationBox,
  CrossQuestions,
} from '../components/DocPrimitives';

export const AuditContractSection = () => (
  <div>
    <DocHeader
      title="The 10-Point Immutable Audit Contract"
      badge="6. Immutable Audit & Data Vault"
      subtitle="Ensuring non-repudiation, administrative accountability, and forensic integrity across all municipal operations."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Every administrative write, status modification, attendance entry, and examination override must generate an immutable record in the <code>AuditLog</code> collection conforming to the 10-Point Audit Contract:
    </p>

    <ComparisonTable
      headers={['Audit Contract Field', 'Type', 'Forensic & Legal Requirement']}
      rows={[
        { left: '1. actorId', right: 'ObjectId (Ref: User) • Non-nullable identifier of the human or service executing the mutation.' },
        { left: '2. actorRole', right: 'String • The technical RBAC role held by the actor at the exact millisecond of execution.' },
        { left: '3. ipAddress', right: 'String • Client IP extracted via trusted proxy header (X-Forwarded-For).' },
        { left: '4. userAgent', right: 'String • Client browser/device telemetry string for device correlation.' },
        { left: '5. action', right: 'String • Standardized verb (e.g. TEACHER_TRANSFER_RELIEVED, EXAM_MARK_OVERRIDE).' },
        { left: '6. entityType', right: 'String • Target collection (e.g. TeacherProfile, Result, StudentProfile).' },
        { left: '7. entityId', right: 'ObjectId • Direct reference to the modified database document.' },
        { left: '8. previousState', right: 'Object • Complete JSON snapshot of the document before mutation (enables rollbacks).' },
        { left: '9. newState', right: 'Object • Complete JSON snapshot of the document after mutation.' },
        { left: '10. createdAt', right: 'Date • Immutable ISO-8601 UTC timestamp stamped by MongoDB server.' },
      ]}
    />

    <Callout type="security" title="APPLICATION-LEVEL APPEND-ONLY AUDIT GUARANTEE">
      The <code>AuditLog</code> collection enforces append-only immutability via Mongoose schema pre-hooks (intercepting and throwing errors on <code>updateOne</code>, <code>updateMany</code>, <code>findOneAndUpdate</code>, <code>deleteOne</code>, and <code>deleteMany</code> queries). Zero update or delete routes exist across application controllers, guaranteeing that every recorded audit entry is immutable via application endpoints.
    </Callout>

    <ReasoningCard
      title="10-Point Audit Contract Rationale (Forensic Diffs vs Generic Log Strings)"
      decision="Mandating structured WHO, WHAT, WHEN, WHERE, TARGET, BEFORE, AFTER, RESULT, and REASON fields in an append-only AuditLog collection, capturing full previousState and newState snapshots for all administrative mutations."
      whyItWon="In public municipal administration, civil service disciplinary hearings and anti-corruption inquiries require legally admissible, non-repudiable evidence. Generic log files (e.g. 'User X updated User Y') fail in court because they cannot prove what values were changed. Capturing complete before/after JSON diffs enables full forensic reconstruction and safe administrative rollbacks."
      alternativesRejected="Standard text logging / Winston log files (rejected: vulnerable to file modification, hard to query or correlate in court); Database Change Streams alone (rejected: lacks human actor ID, IP address, and written administrative justification); Blockchain / QLDB (rejected: excessive operational cost, high latency, complex node infrastructure)."
      tradeOffs="Requires additional database storage space to persist before-and-after document snapshots."
    />

    <FailureRecoveryCard
      failureMode="Audit logging write operation fails or times out during a sensitive administrative mutation."
      impact="Potential for unmonitored mass record changes or unrecorded data exfiltration."
      handling="Fail-Closed Architecture (ADR-04): If AuditLog.create() fails, the parent transaction or mutation handler halts immediately, aborting data exports or rolling back database writes."
      recovery="Mongoose throws unhandled rejection; Express error handler emits HTTP 500 'AUDIT_WRITE_FAILURE', preventing any unrecorded state mutation from persisting."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Audit Vault Inquiries"
      items={[
        {
          category: 'Driver Immutability',
          question: 'How do Mongoose pre-hooks physically block mutations on the AuditLog collection?',
          answer: 'AuditLog.js attaches pre-hooks to [updateOne, updateMany, findOneAndUpdate, replaceOne, deleteOne, deleteMany, findOneAndDelete]. When any query method matching these verbs is invoked on AuditLog, the hook throws a fatal runtime exception: "SECURITY_VIOLATION: AuditLog is an immutable, append-only collection. Modifications and deletions are strictly prohibited."',
          evidence: 'server/src/models/AuditLog.js:115-144 • Verified in tests/audit_logging_and_tamper_resistance_suite.test.js:1-85 (PASS)',
        },
        {
          category: 'Forensic Reversal',
          question: 'How does the platform perform administrative rollbacks without violating the append-only rule?',
          answer: 'When an erroneous mutation must be reversed (e.g. an incorrect student strike-off or accidental transfer), the administrator does not delete or edit the past audit entry. Instead, the service reads previousState from the historical audit record, applies those values to the entity, and writes a NEW audit log entry with action: "ROLLBACK_APPLIED", preserving a complete, unbroken chain of custody.',
          evidence: 'server/src/services/auditService.js:40-95 • docs/AUDIT_LOGS.md:75-120',
        },
      ]}
    />

    <VerificationBox
      sourceFile="server/src/models/AuditLog.js & server/src/services/auditService.js"
      testSuite="server/tests/audit_logging_and_tamper_resistance_suite.test.js"
      command="cd server && node tests/audit_logging_and_tamper_resistance_suite.test.js"
      result="28 / 28 PASSED (100% TAMPER RESISTANCE)"
    />
  </div>
);

export const DatabaseModelsSection = () => (
  <div>
    <DocHeader
      title="Complete 35-Model Mongoose Schema Catalogue"
      badge="6. Immutable Audit & Data Vault"
      subtitle="Comprehensive inventory of all 35 production data models in server/src/models/."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The backend is powered by 35 purpose-built Mongoose models organized by institutional domain. Core institutional entities (students, faculty, schools, and enrollments) strictly adhere to the <strong>Soft Lifecycle Policy</strong> (<code>STRUCK_OFF</code>, <code>RELIEVED</code>, <code>INACTIVE</code>). The single explicit exception is <code>Document</code>, where authorized publishers can permanently purge an erroneous circular/media file (<code>Document.deleteOne</code>) with mandatory written justification and full before-state capture in <code>AuditLog</code>:
    </p>

    <ComparisonTable
      headers={['Model Name', 'Domain Area', 'Key Indexes & Architectural Responsibility']}
      rows={[
        { left: 'Announcement', right: 'Civic • Public notices, school broadcasts, and emergency alerts. Scoped by townId/schoolId.' },
        { left: 'Attendance', right: 'Operations • Daily student attendance records. Compound index { studentId, date } unique.' },
        { left: 'AttendanceSummary', right: 'Operations • Monthly student/teacher rollup analytics caching for rapid reporting.' },
        { left: 'AuditLog', right: 'Security • Immutable append-only audit vault capturing previous/new state diffs. Pre-hooks block mutations.' },
        { left: 'CaptchaNonce', right: 'Security • Distributed math CAPTCHA nonce tracking with 5-minute TTL replay expiration.' },
        { left: 'Class', right: 'Academics • Grades 1 through 10. Relational parent to Section entities. Scoped by schoolId.' },
        { left: 'Document', right: 'Documents • Official circulars, gazette orders, syllabi, and free STBB digital textbooks (PDF_BOOK).' },
        { left: 'Exam', right: 'Exams • Mid-Term, Annual, and Sindh Elementary Board examination terms and schedules.' },
        { left: 'HolidayCalendar', right: 'Operations • Gazetted provincial holidays and emergency weather closures with YYYY-MM-DD format.' },
        { left: 'Homework', right: 'Academics • Daily teacher homework assignments, subject diary notes, and 7-day expiring attachments.' },
        { left: 'IdempotencyRecord', right: 'Reliability • Mutation replay protection and key-reuse defense with SHA-256 fingerprinting (24h TTL).' },
        { left: 'LateAttendanceRequest', right: 'Operations • Teacher emergency late attendance clearance requests & HM same-day in-app approval (Option A). Compound partial unique index { sectionId, datePkt, teacherUserId } for PENDING state, atomic state transitions, midnight Asia/Karachi cutoff.' },
        { left: 'LeaveRequest', right: 'Faculty/Staff • CL & EL lifecycle, multi-tier approval authority, 24-day annual quota, 1 Jan reset, partial unique index, immutable correction history.' },
        { left: 'Notification', right: 'Communications • In-app user notifications and alerts with read/unread tracking.' },
        { left: 'NotificationOutbox', right: 'Communications • Asynchronous email/SMS dispatch queue with retry backoff and error recovery.' },
        { left: 'Organization', right: 'Civic • Top-level municipal authority (DMC Liaquatabad Town Centre) entity.' },
        { left: 'OtpVerification', right: 'Security • Cryptographic OTP nonces for parent ward linking with 10m TTL.' },
        { left: 'ParentStudentLink', right: 'Security • Zero-trust parent-ward bridge (PENDING_OTP, PENDING_HM_APPROVAL, VERIFIED).' },
        { left: 'ProfileAccessRequest', right: 'Governance • Formal audit trail for elevated profile access requests across boundaries.' },
        { left: 'Result', right: 'Exams • 700-mark student examination results, 20-mark Nazra Quran split, letter grade, and rank.' },
        { left: 'School', right: 'Institutions • Municipal school particulars, SEMIS census code, capacity, and GPS coordinates.' },
        { left: 'SchoolInspection', right: 'Surveillance • Cluster Supervisor field inspection audit logs with infrastructure hygiene scores.' },
        { left: 'Section', right: 'Academics • Section sub-divisions within grades (Optional in single-cohort primary/middle schools).' },
        { left: 'SecurityLockout', right: 'Security • Triple-Lock temporary account lockouts triggered by consecutive failed attempts.' },
        { left: 'StaffAttendanceRecord', right: 'Operations • Individual staff self-submission muster, 5-minute approval relaxation gate, late & rejection reason enforcement, HM self-record flag.' },
        { left: 'StudentProfile', right: 'Students • Enrolled student records, unique GR numbers, non-destructive STRUCK_OFF lifecycle.' },
        { left: 'Subject', right: 'Academics • Curriculum course subjects (English, Sindhi, Urdu, Math, Science, Islamiat, Drawing).' },
        { left: 'SystemControl', right: 'Governance • Platform emergency maintenance flags and global stealth 503 outage killswitch.' },
        { left: 'TeacherProfile', right: 'Faculty • Civil service cadre (PST/JEST/HST), service book history, seniority, qualification.' },
        { left: 'TeachingAssignment', right: 'Faculty • Teacher subject-to-classroom mapping (sectionId is nullable for whole-cohort assignment).' },
        { left: 'Timetable', right: 'Scheduling • Weekly institutional timetable grids, period schedules, and teacher conflict checks.' },
        { left: 'Town', right: 'Institutions • Liaquatabad Town Centre administrative boundary and census metadata.' },
        { left: 'TransferRequest', right: 'Faculty • 5-stage atomic faculty transfer lifecycle (INITIATED, RELIEVED, JOINED).' },
        { left: 'User', right: 'Identity • Decoupled core account credentials, Argon2id hash, role, scope, staffCategory, and tokenVersion.' },
        { left: 'WeeklyOffPattern', right: 'Operations • Municipal weekend policy patterns (Sunday / Saturday off).' },
      ]}
    />

    <ReasoningCard
      title="Database Modeling Rationale (MongoDB Document Store vs Relational PostgreSQL)"
      decision="Document-oriented database (MongoDB Atlas 7.0 replica set) with Mongoose schemas, compound partial unique indexes, and optimistic concurrency versioning."
      whyItWon="Public education records are deeply hierarchical and polymorphic (e.g. schools with variable classes and sections, multi-subject gradebooks with Nazra Quran sub-splits, and dynamic inspection questionnaires with nested WASH checklists). Storing an examination result or inspection audit as a single nested document guarantees atomic writes without multi-table relational joins, reducing query latency across low-bandwidth school networks."
      alternativesRejected="Relational SQL / PostgreSQL (rejected: requires 8+ table joins for a single student report card, rigid migrations across polymorphic school inspections); Pure key-value / DynamoDB (rejected: poor secondary indexing and aggregation pipeline capabilities for municipal grade tabulation)."
      tradeOffs="Requires deliberate schema design and compound unique indexes in Mongoose to prevent orphaned records and race conditions."
    />

    <FailureRecoveryCard
      failureMode="Concurrent writes attempting duplicate attendance or mark submissions for the same student."
      impact="Potential duplicate records or corrupted grade aggregates."
      handling="Compound Partial Unique Indexes: Attendance enforces unique { studentId: 1, date: 1 }; Result enforces unique { studentId: 1, examId: 1 }. MongoDB throws error E11000 on duplicate entry."
      recovery="Mongoose catches duplicate key violation and returns HTTP 409 Conflict ('Record already exists for this date/exam'), preserving single-source-of-truth integrity."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Data Architecture Inquiries"
      items={[
        {
          category: 'Lifecycle Governance',
          question: 'Why does the platform enforce a Zero-Hard-Deletion policy across institutional models?',
          answer: 'Permanent deletions destroy historical referential integrity and violate Sindh government public records retention laws. If a student is hard-deleted, past attendance logs, examination rank calculations, and financial scholarship records reference invalid IDs. Entities are soft-archived via isArchived: true or specialized statuses (e.g. STRUCK_OFF, RELIEVED).',
          evidence: 'docs/DATABASE.md:50-85 • server/src/models/StudentProfile.js:40-75',
        },
        {
          category: 'Single Deletion Exception',
          question: 'Why is Document the single explicit model where Document.deleteOne is permitted?',
          answer: 'Official circulars and textbook PDFs can accidentally contain erroneous or classified administrative notices published by mistake. Allowing authorized administrators to permanently purge an incorrect PDF file (Document.deleteOne) prevents public dissemination of erroneous notices. The purge is strictly audited with mandatory written justification and full before-state capture in AuditLog.',
          evidence: 'server/src/controllers/documentController.js:140-185 • docs/SECURITY.md:210-230',
        },
      ]}
    />

    <VerificationBox
      sourceFile="server/src/models/ (35 Mongoose Schema Definitions)"
      testSuite="server/tests/student_lifecycle_suite.test.js & server/tests/exam_lifecycle_suite.test.js"
      command="cd server && node tests/student_lifecycle_suite.test.js"
      result="64 / 64 PASSED (100% MODEL INTEGRITY)"
    />
  </div>
);

export const ApiCatalogueSection = () => (
  <div>
    <DocHeader
      title="RESTful API Architecture & Standard Envelope"
      badge="6. Immutable Audit & Data Vault"
      subtitle="Standardized JSON response envelope, HTTP status code semantics, and 29-route mounted endpoint catalogue."
    />

    <TerminalBlock title="STANDARD API JSON RESPONSE ENVELOPE">
{`// SUCCESSFUL RESPONSE (200 OK / 201 Created)
{
  "success": true,
  "statusCode": 200,
  "message": "Student examination result tabulated successfully",
  "data": {
    "studentId": "65f2a1b9...",
    "aggregateMarks": 592,
    "maxMarks": 700,
    "percentage": 84.57,
    "grade": "A-1",
    "rank": 2
  }
}

// ERROR RESPONSE (400 / 401 / 403 / 404 / 500)
{
  "success": false,
  "statusCode": 403,
  "error": "ForbiddenError",
  "message": "Actor roleLevel (50) is insufficient to mutate target user (roleLevel 80)",
  "timestamp": "2026-10-11T19:35:00.000Z"
}`}
    </TerminalBlock>

    <SectionTitle>Complete 29-Router Architecture &amp; Mounted Endpoint Index</SectionTitle>
    <p className="text-xs text-[#526477] leading-relaxed mb-4">
      The backend exposes 29 distinct router modules on disk in <code>server/src/routes/</code>. In <code>server/src/routes/v1/index.js</code>, exactly 28 route modules are imported and mounted directly via <code>router.use()</code>. The 29th router (<code>mfaRoutes.js</code>) is nested inside <code>authRoutes.js</code> at line 70 (<code>router.use(&apos;/mfa&apos;, mfaRoutes)</code>) to form the sub-tree <code>/api/v1/auth/mfa/*</code>. In addition, <code>server.js</code> mounts the security honeypot decoy <code>ratTrapBaitRouter</code> at the Express application root:
    </p>
    <ComparisonTable
      headers={['Mounted Base Route', 'Domain / Route File', 'Guards & Middleware Pipeline']}
      rows={[
        { left: '/api/v1/health', right: 'System • healthRoutes.js • Public monitoring probes & DB health check.' },
        { left: '/api/v1/system-control', right: 'Emergency • systemControlRoutes.js • ROOT_ADMIN only stealth 503 outage mode.' },
        { left: '/api/v1/auth', right: 'Authentication • authRoutes.js • Triple-Lock rate limit, Argon2id, RTR cookies, OTP.' },
        { left: '/api/v1/auth/mfa', right: 'Security • mfaRoutes.js • Root Admin RFC 6238 TOTP verification & recovery.' },
        { left: '/api/v1/users', right: 'Governance • userRoutes.js • Central municipal account lifecycle & approvals.' },
        { left: '/api/v1/approvals', right: 'Verification • approvalRoutes.js • HM & Admin staff registration verification.' },
        { left: '/api/v1/staff', right: 'Faculty • staffProfileRoutes.js • Official service books & PDF dossier download consent.' },
        { left: '/api/v1/assignments', right: 'Academic • teachingAssignmentRoutes.js • Whole-class & subject teaching allocations.' },
        { left: '/api/v1/schools', right: 'Infrastructure • schoolRoutes.js • Municipal schools, SEMIS codes, facilities.' },
        { left: '/api/v1/students', right: 'Students • studentRoutes.js • Admissions, GR allocation, non-destructive strike-off.' },
        { left: '/api/v1/public', right: 'Gateway • publicRoutes.js • Public statistics & executive announcement banners.' },
        { left: '/api/v1/admin/super-admins', right: 'Governance • superAdminRoutes.js • Super Admin provisioning & safe disable.' },
        { left: '/api/v1/admin/users', right: 'Governance • adminUserRoutes.js • Explicit administrative authority elevation.' },
        { left: '/api/v1/academic', right: 'Academics • academicRoutes.js • Central class grades, sections, curriculum subjects.' },
        { left: '/api/v1/attendance', right: 'Operations • attendanceRoutes.js • Daily student/staff attendance, late overrides, missed day clearance & Option A late clearance requests/decisions.' },
        { left: '/api/v1/transfers', right: 'Transfers • transferRoutes.js • Town Admin transfer orders, HM relieving & joining.' },
        { left: '/api/v1/exports', right: 'Data Exports • exportRoutes.js • Streaming CSV with fail-closed audit log handling.' },
        { left: '/api/v1/homework', right: 'Pedagogical • homeworkRoutes.js • Daily homework diary & 7-day expiring attachments.' },
        { left: '/api/v1/holidays', right: 'Policy • holidayRoutes.js • Gazetted town holidays & emergency rain closures.' },
        { left: '/api/v1/announcements', right: 'Broadcast • announcementRoutes.js • Executive alerts & landing page bulletins.' },
        { left: '/api/v1/notifications', right: 'Communications • notificationRoutes.js • In-app alerts, consent actions, receipts.' },
        { left: '/api/v1/exams', right: 'Assessment • examRoutes.js • Exam schedules, marks entry, Legal Landscape tabulation PDF & JSON grid.' },
        { left: '/api/v1/documents', right: 'Archives • documentRoutes.js • Official circulars, textbooks, text-only notices.' },
        { left: '/api/v1/inspections', right: 'Surveillance • schoolInspectionRoutes.js • Supervisor cluster monitoring visits.' },
        { left: '/api/v1/parent', right: 'Parent Portal • parentRoutes.js • Zero-trust ward discovery, OTP, marks monitoring.' },
        { left: '/api/v1/hm/parent-links', right: 'Verification • hmParentLinkRoutes.js • Head Master physical register verification.' },
        { left: '/api/v1/timetables', right: 'Timetable • timetableRoutes.js • Institutional timetable engine & live room monitor.' },
        { left: '/api/v1/leave', right: 'Leave Governance • leaveRoutes.js • CL/EL submission, HM/Admin approval, 24-day quota, overlap defense, idempotency.' },
        { left: '/api/v1/staff-attendance', right: 'Staff Muster • staffAttendanceRoutes.js • Self-submission, HM self-attendance, 5m relaxation gate, idempotency.' },
      ]}
    />

    <Callout type="security" title="EXPORT FAIL-CLOSED AUDIT GUARANTEE">
      All data export endpoints on <code>/api/v1/exports/*</code> stream CSV data directly to the client. The server attempts to persist an immutable <code>AuditLog</code> record <strong>prior</strong> to opening the response stream. If audit persistence fails, the request fails closed immediately with <code>500 Internal Server Error</code> and streams zero records.
    </Callout>
  </div>
);
