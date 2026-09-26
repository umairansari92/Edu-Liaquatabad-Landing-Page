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
        { left: 'AcademicYear', right: 'Academics • Tracks official academic sessions (e.g. 2026–2027). Only 1 session can be isCurrent.' },
        { left: 'Attendance', right: 'Operations • Daily student presence/absence. Compound index { studentId, date } unique.' },
        { left: 'AuditLog', right: 'Security • Immutable append-only audit vault capturing before/after snapshots.' },
        { left: 'Class', right: 'Academics • Grades 1 through 10. Scoped by schoolId.' },
        { left: 'ClassTeacherAssignment', right: 'Faculty • Maps primary class teachers to specific sections. Unique per section/year.' },
        { left: 'Circular', right: 'Civic • Official town and school announcements with PDF attachments.' },
        { left: 'Curriculum', right: 'Academics • Syllabus breakdown, chapter outlines, and learning milestones.' },
        { left: 'DigitalLibraryItem', right: 'Civic • E-books, lesson guides, and reference material.' },
        { left: 'Examination', right: 'Exams • Mid-term, Annual, and Elementary Board exam schedules.' },
        { left: 'GradingSystem', right: 'Exams • Grade thresholds (A-1, A, B, C, D, E, FAIL) and 700-mark rules.' },
        { left: 'HolidayCalendar', right: 'Operations • Gazetted provincial holidays and emergency weather closures.' },
        { left: 'Homework', right: 'Academics • Daily teacher homework assignments with submission deadlines.' },
        { left: 'Notification', right: 'Communications • Role-targeted user alerts and system notices.' },
        { left: 'Organization', right: 'Civic • DMC Liaquatabad Town Centre municipal metadata.' },
        { left: 'ParentProfile', right: 'Identity • Guardian CNIC, verified phone, address, and occupation.' },
        { left: 'ParentStudentLink', right: 'Security • 3-step ward linkage state machine (PENDING, VERIFIED, REJECTED).' },
        { left: 'RefreshToken', right: 'Security • Cryptographic tokens for session rotation with 3s concurrency grace.' },
        { left: 'Result', right: 'Exams • 700-mark student examination results, Nazra Quran split, rank calculation.' },
        { left: 'School', right: 'Institutions • Municipal school metadata, SEMIS code, capacity, GPS coordinates.' },
        { left: 'SchoolInspection', right: 'Surveillance • Supervisor field audit reports, infrastructure hygiene scores.' },
        { left: 'Section', right: 'Academics • Sub-divisions of classes (A, B, C). Scoped by classId.' },
        { left: 'StaffAttendance', right: 'Faculty • Teacher muster roll, biometric sync, and late arrivals.' },
        { left: 'StaffLeave', right: 'Faculty • Formal casual/medical leave applications with HM approval workflow.' },
        { left: 'StudentProfile', right: 'Students • Enrolled student records, B-Form, DOB, emergency contacts.' },
        { left: 'Subject', right: 'Academics • Academic subjects (English, Sindhi, Urdu, Math, Science, Islamiat, Drawing).' },
        { left: 'TeacherProfile', right: 'Faculty • Faculty service record, civil cadre (PST/JEST), seniority, qualification.' },
        { left: 'TeachingAssignment', right: 'Faculty • Subject teacher to classroom section mapping.' },
        { left: 'Textbook', right: 'Civic • Official free Sindh textbooks repository with public download links.' },
        { left: 'Town', right: 'Institutions • Liaquatabad Town Centre administrative boundary.' },
        { left: 'User', right: 'Identity • Decoupled core account (email, username, Argon2id hash, role, scope).' },
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
