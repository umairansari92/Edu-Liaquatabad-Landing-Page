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

    <Callout type="security" title="TAMPER-RESISTANT VAULT GUARANTEE">
      The <code>AuditLog</code> schema defines no update or delete routes. Database connection permissions for standard municipal roles prohibit <code>dropCollection</code> or <code>deleteMany</code> operations on the audit namespace.
    </Callout>
  </div>
);

export const DatabaseModelsSection = () => (
  <div>
    <DocHeader
      title="Complete 32-Model Mongoose Schema Catalogue"
      badge="6. Immutable Audit & Data Vault"
      subtitle="Comprehensive inventory of all 32 production data models in server/src/models/."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The backend is powered by 32 purpose-built Mongoose models organized by institutional domain. All models strictly adhere to the <strong>Zero-Hard-Deletion</strong> policy:
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
        { left: 'StudentProfile', right: 'Students • Enrolled student records, unique GR numbers, non-destructive STRUCK_OFF lifecycle.' },
        { left: 'Subject', right: 'Academics • Curriculum course subjects (English, Sindhi, Urdu, Math, Science, Islamiat, Drawing).' },
        { left: 'SystemControl', right: 'Governance • Platform emergency maintenance flags and global stealth 503 outage killswitch.' },
        { left: 'TeacherProfile', right: 'Faculty • Civil service cadre (PST/JEST/HST), service book history, seniority, qualification.' },
        { left: 'TeachingAssignment', right: 'Faculty • Teacher subject-to-classroom mapping (sectionId is nullable for whole-cohort assignment).' },
        { left: 'Timetable', right: 'Scheduling • Weekly institutional timetable grids, period schedules, and teacher conflict checks.' },
        { left: 'Town', right: 'Institutions • Liaquatabad Town Centre administrative boundary and census metadata.' },
        { left: 'TransferRequest', right: 'Faculty • 5-stage atomic faculty transfer lifecycle (INITIATED, RELIEVED, JOINED).' },
        { left: 'User', right: 'Identity • Decoupled core account credentials, Argon2id hash, role, scope, and tokenVersion.' },
        { left: 'WeeklyOffPattern', right: 'Operations • Municipal weekend policy patterns (Sunday / Saturday off).' },
      ]}
    />
  </div>
);

export const ApiCatalogueSection = () => (
  <div>
    <DocHeader
      title="RESTful API Architecture & Standard Envelope"
      badge="6. Immutable Audit & Data Vault"
      subtitle="Standardized JSON response envelope, HTTP status code semantics, and 27-route mounted endpoint catalogue."
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

    <SectionTitle>Complete 27-Route Mounted Suites Catalogue</SectionTitle>
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
        { left: '/api/v1/attendance', right: 'Operations • attendanceRoutes.js • Daily student/staff attendance & late overrides.' },
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
      ]}
    />

    <Callout type="security" title="EXPORT FAIL-CLOSED AUDIT GUARANTEE">
      All data export endpoints on <code>/api/v1/exports/*</code> stream CSV data directly to the client. The server attempts to persist an immutable <code>AuditLog</code> record <strong>prior</strong> to opening the response stream. If audit persistence fails, the request fails closed immediately with <code>500 Internal Server Error</code> and streams zero records.
    </Callout>
  </div>
);
