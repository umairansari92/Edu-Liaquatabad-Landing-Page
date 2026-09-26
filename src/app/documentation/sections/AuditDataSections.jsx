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
      title="Complete 30-Model Mongoose Schema Catalogue"
      badge="6. Immutable Audit & Data Vault"
      subtitle="Comprehensive inventory of all 30 production data models in server/src/models/."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      The backend is powered by 30 purpose-built Mongoose models organized by institutional domain. All models strictly adhere to the <strong>Zero-Hard-Deletion</strong> policy:
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
        { left: 'Homework', right: 'Academics • Daily teacher homework assignments, subject diary notes, and submission deadlines.' },
        { left: 'Notification', right: 'Communications • In-app user notifications and alerts with read/unread tracking.' },
        { left: 'NotificationOutbox', right: 'Communications • Asynchronous email/SMS dispatch queue with retry backoff metadata.' },
        { left: 'Organization', right: 'Civic • Top-level municipal authority (DMC Liaquatabad Town Centre) entity.' },
        { left: 'OtpVerification', right: 'Security • 6-digit phone verification OTP nonces for parent ward linking with 10m TTL.' },
        { left: 'ParentStudentLink', right: 'Security • Zero-trust parent-ward bridge (PENDING_OTP, PENDING_HM_APPROVAL, VERIFIED).' },
        { left: 'ProfileAccessRequest', right: 'Governance • Formal audit trail for elevated profile access requests across boundaries.' },
        { left: 'Result', right: 'Exams • 700-mark student examination results, 20-mark Nazra Quran split, letter grade, and rank.' },
        { left: 'School', right: 'Institutions • Municipal school particulars, SEMIS census code, capacity, and GPS coordinates.' },
        { left: 'SchoolInspection', right: 'Surveillance • Cluster Supervisor field inspection audit logs with infrastructure hygiene scores.' },
        { left: 'Section', right: 'Academics • Section sub-divisions within grades (Section A, B, C). Scoped by classId.' },
        { left: 'SecurityLockout', right: 'Security • Triple-Lock temporary account lockouts triggered by consecutive failed attempts.' },
        { left: 'StudentProfile', right: 'Students • Enrolled student records, unique GR numbers, B-Form identity, and guardian details.' },
        { left: 'Subject', right: 'Academics • Curriculum course subjects (English, Sindhi, Urdu, Math, Science, Islamiat, Drawing).' },
        { left: 'SystemControl', right: 'Governance • Platform emergency maintenance flags and global system killswitches.' },
        { left: 'TeacherProfile', right: 'Faculty • Civil service cadre (PST/JEST/HST), service book history, seniority, qualification.' },
        { left: 'TeachingAssignment', right: 'Faculty • Active teacher subject-to-classroom-section mapping bindings.' },
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
      subtitle="Standardized JSON response envelope, HTTP status code semantics, and endpoint catalogue."
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
  "message": "Actor roleLevel (40) is insufficient to mutate target user (roleLevel 60)",
  "timestamp": "2026-09-27T02:45:00.000Z"
}`}
    </TerminalBlock>

    <SectionTitle>Primary Route Groups</SectionTitle>
    <ComparisonTable
      headers={['Route Prefix', 'Domain / Controller', 'Guards & Middleware Pipeline']}
      rows={[
        { left: '/api/v1/auth', right: 'Authentication • Rate-limited, CAPTCHA verified, Argon2id, RTR cookies.' },
        { left: '/api/v1/schools', right: 'School Management • Scoped by townId / schoolId, HM & Admin.' },
        { left: '/api/v1/teachers', right: 'Faculty & Rosters • Scoped by schoolId, HM & Supervisor.' },
        { left: '/api/v1/transfers', right: 'Teacher Transfers • 5-stage atomic state machine, HM & Super Admin.' },
        { left: '/api/v1/students', right: 'Student Management • GR uniqueness, Class & Section scoped.' },
        { left: '/api/v1/attendance', right: 'Smart Attendance • PST timing rules, Teacher & HM.' },
        { left: '/api/v1/exams', right: 'Examinations & Tabulation • 700-mark rules, Nazra split, PDF exports.' },
        { left: '/api/v1/parent', right: 'Parent BFF • Anti-enumeration GR lookup, OTP, verified ward link.' },
        { left: '/api/v1/supervision', right: 'School Inspections • Supervisor cluster audits, infrastructure scores.' },
      ]}
    />
  </div>
);
