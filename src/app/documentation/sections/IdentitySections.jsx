import React from 'react';
import {
  Users,
  Award,
  Shield,
  Layers,
  Clock,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
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

export const RolesCatalogueSection = () => (
  <div>
    <DocHeader
      title="The 9 Authoritative Municipal Roles: Authority Catalogue &amp; Plain-English Guide"
      badge="3. Identity, Roles &amp; Scopes"
      subtitle="Complete operational guide and technical specification for all 9 software roles, hierarchy ceilings, data scopes, and permission rules across Liaquatabad Town."
    />

    {/* 4-Metric HUD */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">DEFINED ROLES</div>
        <div className="text-sm font-black text-[#006AC7]">9 Municipal Roles</div>
        <div className="text-xs text-[#526477]">Root Admin to Parent</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">AUTHORITY LEVELS</div>
        <div className="text-sm font-black text-[#4B7F3A]">7 Hierarchy Ceilings</div>
        <div className="text-xs text-[#526477]">Level 10 to Level 100</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">TENANT ISOLATION</div>
        <div className="text-sm font-black text-purple-600">7 Data Scopes</div>
        <div className="text-xs text-[#526477]">Global to Child Scope</div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
        <div className="text-[10px] font-extrabold uppercase text-[#526477]">CAPABILITY REGISTRY</div>
        <div className="text-sm font-black text-amber-600">39 Atomic Permissions</div>
        <div className="text-xs text-[#526477]">Enforced by Server Middlewares</div>
      </div>
    </div>

    {/* Plain-Language Primer */}
    <SectionTitle>Understanding System Access: The 4 Core Concepts in Plain English</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <InfoCard
        title="1. Role (Account Type)"
        color="blue"
        desc="Your role defines what you are responsible for in the software. Note: Your civil job title (e.g. 'Senior Teacher' or 'Education Officer') is purely descriptive metadata; software powers come exclusively from your assigned system Role."
      />
      <InfoCard
        title="2. Hierarchy Level (Safety Rank)"
        color="emerald"
        desc="A protection number from 10 to 100. It is not an employee evaluation or performance score. The system uses it to prevent someone at equal or lower rank from changing, resetting, or disabling your account."
      />
      <InfoCard
        title="3. Data Scope (Geographic Reach)"
        color="purple"
        desc="How far your access reaches in the database. For example, Global covers all schools, Town covers Liaquatabad Town, School covers one campus, and Child covers only your legally verified child."
      />
      <InfoCard
        title="4. Permission Ceiling (Upper Barrier)"
        color="amber"
        desc="A permanent safety barrier built into the software code. It ensures that an account can never be given powers meant for higher authorities, even if an administrator mistakenly tries to grant extra permissions."
      />
    </div>

    <SectionTitle>Authoritative Role &amp; Permission Ceiling Matrix</SectionTitle>
    <ComparisonTable
      headers={['Role Identifier', 'Level & Scope', 'Base Capabilities', 'Permission Ceilings & Security Guards', 'Status & Evidence']}
      rows={[
        {
          left: '1. ROOT_ADMIN',
          right:
            'Level 100 • GLOBAL • All 39 Capabilities in Registry • Platform custodian and recovery administrator. Dedicated web console (RootAdminDashboard.jsx) with maintenance mode controls and audit logs behind mandatory RFC 6238 TOTP authenticator verification. Account creation is strictly CLI-only via server/scripts/createRootAdmin.js with zero public registration routes • Status: IMPLEMENTED & TESTED (root_admin_mfa_suite: 107/107 PASS).',
        },
        {
          left: '2. SUPER_ADMIN',
          right:
            'Level 90 • GLOBAL • All 39 Capabilities in Registry • Municipal Director, Town Education Officer, DDO. Operational management across all municipal schools. Cannot self-promote to ROOT_ADMIN; cannot disable last active Super Admin. Enforced by authorizeHierarchy • Status: IMPLEMENTED & TESTED (authority_model_suite: AM-07 to AM-16 PASS).',
        },
        {
          left: '3. ADMIN (Town Admin)',
          right:
            'Level 80 • TOWN • 25 Default Capabilities (of 39 in Registry) • Operational town administration, school provisioning, staff profile approvals, inter-school faculty transfers, circulars, and timings configuration. Forbidden by ceiling: users.assign_role, ROOT_ADMIN assignment • Status: IMPLEMENTED & TESTED (authority_model_suite: AM-17 to AM-20 PASS).',
        },
        {
          left: '4. SUPERVISOR',
          right:
            'Level 60 • ASSIGNED_SCHOOLS • 16 Default Capabilities (of 39 in Registry) • Field cluster inspection officer. Unannounced school visits, BOLA-isolated cluster scoping, inspection lifecycle management (DRAFT to CLOSED). Physical GPS geofencing (<150m) is PLANNED / ROADMAP • Status: IMPLEMENTED & TESTED (supervisor_bola_security_remediation: 12/12 PASS).',
        },
        {
          left: '5. HM (Head Master)',
          right:
            'Level 50 • SCHOOL • 22 Default Capabilities (of 39 in Registry) • Institutional building executive. Student enrollment, strike-off, single-cohort duties, marks verification, Legal Tabulation Sheet, rain closures, staff CL approval. Forbidden by ceiling: Transfer initiation, structural class setup, fee collection • Status: IMPLEMENTED & TESTED (Owner Operational Sign-Off PENDING; 173 tests across 10 files).',
        },
        {
          left: '6. TEACHER',
          right:
            'Level 30 • CLASS_SECTION • 11 Default Capabilities (of 39 in Registry) • Classroom instructional faculty. Daily attendance, homework entry, subject marks entry, self-leave submission. Status strictly locked by explicit owner direction • Status: PLANNED / LOCKED (teacher_operational_workspace_suite: 29/29 PASS).',
        },
        {
          left: '7. PEON (School Support Staff / Naib Qasid)',
          right:
            'Level 20 • SCHOOL • 4 Default Capabilities (of 39 in Registry) • Institutional operational support staff (Naib Qasid, Peon, Mali, Chowkidar). View access to official school circulars, personal attendance submission, and leave requests. Forbidden: All student, marks, and transfer operations • Status: IMPLEMENTED & TESTED.',
        },
        {
          left: '8. STUDENT',
          right:
            'Level 10 • SELF • 4 Default Capabilities (of 39 in Registry) • Enrolled public school student. View personal attendance, download published A4 marksheet PDF, view homework and circulars. Unpublished exam results strictly hidden • Status: IMPLEMENTED & TESTED (student_workspace_suite: 25/25 PASS).',
        },
        {
          left: '9. PARENT',
          right:
            'Level 10 • CHILD • 4 Default Capabilities (of 39 in Registry) • Verified legal guardian. 3-step ward claim, phone OTP, physical HM verification. Multi-ward switcher, published marksheet download, attendance tracking • Status: IMPLEMENTED & TESTED (74 tests across 5 Parent suites).',
        },
      ]}
    />

    <SectionTitle>Exhaustive Plain-English Guide for Every Role (The 10-Point Standard)</SectionTitle>
    <div className="space-y-6 my-6">

      {/* Role 1: ROOT_ADMIN */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 1: ROOT_ADMIN — Emergency Platform Custodian</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-50 text-[#006AC7] border border-blue-200">
            Level 100 • Scope: GLOBAL
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> The supreme system maintenance account. It is not an everyday administrative account; it exists solely for disaster recovery, system bootstrapping, and emergency software maintenance.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> System Architects and Platform Maintenance Engineers.</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> Run database maintenance tools, toggle stealth maintenance mode, inspect global audit logs, and recover locked administrative accounts.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> Global (the entire platform across all schools and towns).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Cannot be registered or created via any public web form; account creation is CLI-only via secure terminal scripts (<code>createRootAdmin.js</code>).</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Every login session requires a live 6-digit RFC 6238 time-based authenticator app code (MFA).</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Having zero web-facing registration or modification routes prevents remote account takeovers.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> Ordinary users must never attempt to access Root Admin endpoints; all unauthorized attempts are blocked with HTTP 403 and logged in security audits.</p>
            <p className="mt-2"><strong>9. Difference from SUPER_ADMIN:</strong> Super Admin is an everyday municipal director account with a complete web dashboard for schools and staff; Root Admin is an emergency terminal key.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>server/src/middlewares/blockRootAdminCreation.js</code> • Verified in <code>tests/root_admin_mfa_suite.test.js</code> (107/107 PASS).</p>
          </div>
        </div>
      </div>

      {/* Role 2: SUPER_ADMIN */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 2: SUPER_ADMIN — Municipal Directorate Governance</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-[#4B7F3A] border border-emerald-200">
            Level 90 • Scope: GLOBAL
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> The senior executive overseeing public education across the entire municipality. Holds operational authority across all schools, administrators, and policies.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> The Municipal Chairman, Chief Education Officer, or Municipal Director.</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> View all municipal schools, manage Town Administrators, issue town-wide circulars and gazetted holiday declarations, and approve inter-school faculty transfers.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> Global (all schools and facilities across the municipal education network).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Cannot grant self-promotion to ROOT_ADMIN; cannot disable their own account; cannot disable the last remaining active Super Admin.</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Inter-school transfers initiated by Town Admin require final Super Admin review before completion.</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Preventing self-lockout and stopping the disablement of the last active Super Admin ensures the municipality never loses administrative oversight.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> If an action fails due to last-admin protection (HTTP 400), provision a replacement Super Admin before deactivating the outgoing officer.</p>
            <p className="mt-2"><strong>9. Difference from ADMIN:</strong> Super Admin oversees the entire municipality across all towns; Town Admin is strictly bounded to schools within Liaquatabad Town.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>server/src/controllers/superAdminController.js</code> • Verified in <code>tests/authority_model_suite.test.js</code> (AM-07 to AM-16 PASS).</p>
          </div>
        </div>
      </div>

      {/* Role 3: ADMIN */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 3: ADMIN — Town Education Administration</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-cyan-50 text-cyan-800 border border-cyan-200">
            Level 80 • Scope: TOWN
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> The operational manager in the town centre handling school logistics, staff assignments, classroom setups, and attendance timing rules across Liaquatabad Town.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> Town Education Officers, Drawing &amp; Disbursing Officers (DDO), and Town Clerks.</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> Create and update school profiles, initiate inter-school staff transfers, verify staff onboarding dossiers, manage academic classes and subjects, and publish town circulars.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> Town (schools and personnel within Liaquatabad Town Centre).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Cannot assign software roles (requires Super Admin); cannot modify peer Admins or Super Admins; cannot manage schools in neighboring towns.</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Inter-school transfers initiated by Admin require operational relieving by the source HM and joining confirmation by the destination HM.</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Preserves jurisdictional separation between towns and prevents local administrators from altering security credentials or escalating privileges.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> If an action requires modifying another administrator, request assistance from the Directorate Super Admin.</p>
            <p className="mt-2"><strong>9. Difference from SUPERVISOR:</strong> Admin manages town logistics and school provisioning from the office; Supervisor is an on-site field inspector.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>server/src/controllers/userController.js</code> • Verified in <code>tests/authority_model_suite.test.js</code> (AM-17 to AM-20 PASS).</p>
          </div>
        </div>
      </div>

      {/* Role 4: SUPERVISOR */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 4: SUPERVISOR — Cluster Academic Field Inspector</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-purple-50 text-purple-700 border border-purple-200">
            Level 60 • Scope: ASSIGNED_SCHOOLS
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> An on-site academic inspector conducting unannounced visits to an assigned group of schools to verify student headcounts, teacher punctuality, and school hygiene.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> Cluster Supervisors, Area Education Officers, and Academic Auditors.</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> Conduct physical inspections, grade facility deficiencies (A to D), submit field inspection reports, and submit teacher transfer recommendations.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> Assigned Schools (strictly limited to schools in the inspector's assigned cluster array).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Cannot inspect schools outside their assigned cluster (anti-BOLA protection); cannot approve teacher transfers or alter curricula; cannot modify closed inspection reports.</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Deficiencies and remedial directives recorded during an inspection must be addressed by the school Head Master.</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Cluster boundaries prevent supervisors from interfering with unassigned schools or settling personal disputes outside their jurisdiction.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> If an inspection is rejected with HTTP 403, verify your assigned cluster list with the Town Education Officer.</p>
            <p className="mt-2"><strong>9. Difference from HM:</strong> Supervisor evaluates multiple schools from the outside as an auditor; Head Master manages a single school campus from the inside.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>server/src/controllers/schoolInspectionController.js</code> • Verified in <code>tests/supervisor_bola_security_remediation.test.js</code> (12/12 PASS).</p>
          </div>
        </div>
      </div>

      {/* Role 5: HM */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 5: HM (Head Master / Head Mistress) — Building Principal</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-50 text-amber-700 border border-amber-200">
            Level 50 • Scope: SCHOOL
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> The senior school building principal responsible for everything inside the school campus: enrolling students, assigning teaching duties, verifying marks, and staff leave.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> Head Masters, Head Mistresses, and Assistant Head Masters.</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> Enroll students, issue sequential GR Numbers, strike off chronic absentees, assign Class Teachers, verify exam marks, publish report cards, approve staff casual leave, and verify parent documents.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> School (strictly isolated to the single assigned school campus).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Cannot initiate inter-school faculty transfers (Town Admin authority only); cannot modify class/subject structures; zero fee collection; zero record deletions.</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Inter-school teacher movements must be officially ordered by Town Administration before an HM can issue a departmental relieving certificate.</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Prevents arbitrary local dismissals, protects the municipal syllabus, and guarantees permanent preservation of historical student registers.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> If an HM needs to transfer a teacher or adjust a town-wide setting, contact the Town Education Office.</p>
            <p className="mt-2"><strong>9. Difference from TEACHER:</strong> HM oversees all classrooms, faculty muster, and student registers in the building; Teacher instructs their assigned class cohort.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>docs/HM_WORKFLOWS.md</code> • 173 automated tests across 10 dedicated test files.</p>
          </div>
        </div>
      </div>

      {/* Role 6: TEACHER */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 6: TEACHER — Classroom Instructional Faculty</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-50 text-red-600 border border-red-200">
            Level 30 • Scope: CLASS_SECTION • PLANNED / LOCKED
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> Classroom educators who teach daily lessons, take morning attendance muster, assign homework, and record subject examination marks.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> Primary School Teachers (PST), Junior Elementary Teachers (JET), and Subject Teachers.</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> Mark daily morning attendance for assigned class, assign homework, enter subject test marks, and submit self-leave applications.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> Class Section (strictly limited to their assigned grade class and subject allocations).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Cannot alter school timings; cannot view or edit students in other classes; cannot publish official marks without HM verification; locked pending operational sign-off.</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Exam marks entered by teachers remain in draft status until verified and published by the Head Master.</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Preserves academic integrity and ensures double-check verification before official marksheet publication.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> If the daily attendance window has passed (14:00 PKT), submit an emergency Late Attendance Clearance Request via the dashboard to the Head Master.</p>
            <p className="mt-2"><strong>9. Difference from PEON:</strong> Teacher holds academic instructional authority for attendance and marks; Peon has read-only facilities access.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>server/src/controllers/academicController.js</code> • Verified in <code>tests/teacher_operational_workspace_suite.test.js</code> (32/32 PASS).</p>
          </div>
        </div>
      </div>

      {/* Role 7: PEON */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 7: PEON — Non-Teaching Support &amp; Facilities Staff</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
            Level 20 • Scope: SCHOOL
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> Non-teaching institutional staff assisting with campus logistics, security, maintenance, and day-to-day facilities support.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> Naib Qasids, Peons, Lab Attendants, Malis, and Campus Security Guards.</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> View official school circulars and announcements, view daily facility rosters, check personal attendance, and submit leave requests.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> School (view access restricted to their assigned school campus).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Strictly excluded from all student records, exam marks, attendance registers, and administrative settings.</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Leave applications submitted by support staff must be approved by the Head Master.</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Protects pupil privacy while providing support staff with transparent access to official announcements and employment records.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> Support staff accounts cannot access student or academic tabs; contact the Head Master for facilities queries.</p>
            <p className="mt-2"><strong>9. Difference from STUDENT:</strong> Peon is an institutional civil service employee with access to staff circulars and staff leave workflows.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>server/src/config/permissions.js:217-222</code> • Verified in <code>tests/faculty_and_users_directory_redesign.test.js</code>.</p>
          </div>
        </div>
      </div>

      {/* Role 8: STUDENT */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 8: STUDENT — Enrolled Municipal Pupil</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-50 text-[#006AC7] border border-blue-200">
            Level 10 • Scope: SELF
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> A student enrolled in a municipal government school checking their own school records, daily attendance, and report cards.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> Primary and middle school pupils (or older siblings assisting them).</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> View personal daily morning attendance, view homework tasks, download published A4 report cards, and download their digital vector Student ID Card.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> Self (strictly restricted to the student's own individual record).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Cannot view other students' records or marks; cannot view draft or unpublished marks; cannot edit any data.</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Report cards only become visible after the Head Master formally locks and publishes the examination gazette.</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Complete privacy of student performance and elimination of unauthorized peer surveillance.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> If an exam result shows 'Results Under Verification', wait for the Head Master to publish the official gazette.</p>
            <p className="mt-2"><strong>9. Difference from PARENT:</strong> Student views their own single profile; Parent can link and monitor multiple children across different municipal schools.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>server/src/controllers/examController.js</code> • Verified in <code>tests/student_workspace_suite.test.js</code> (25/25 PASS).</p>
          </div>
        </div>
      </div>

      {/* Role 9: PARENT */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <h4 className="font-extrabold text-sm text-[#102033]">Role 9: PARENT — Verified Legal Guardian</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-[#4B7F3A] border border-emerald-200">
            Level 10 • Scope: CHILD (via Verified Link)
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#526477]">
          <div>
            <p><strong>1. In Simple Terms:</strong> A mother, father, or legal guardian keeping track of their child's daily school attendance, homework, and exam marks from their mobile phone.</p>
            <p className="mt-2"><strong>2. Who Uses It:</strong> Parents and officially recognized legal guardians.</p>
            <p className="mt-2"><strong>3. What You Can Do:</strong> View real-time morning attendance muster, view homework assignments, download official published report cards, view school circulars, and manage multiple children under one login.</p>
            <p className="mt-2"><strong>4. Reach &amp; Scope:</strong> Child (strictly restricted to children with an approved <code>status === 'VERIFIED'</code> link in <code>ParentStudentLink</code>).</p>
            <p className="mt-2"><strong>5. Key Restrictions:</strong> Cannot see any child's data until completing the 3-step verification; cannot view other families' children; cannot edit records.</p>
          </div>
          <div>
            <p><strong>6. Required Approvals:</strong> Claiming a child requires phone OTP verification (or automatic direct routing if no phone is on paper record) followed by physical document inspection by the Head Master.</p>
            <p className="mt-2"><strong>7. Why Restrictions Exist:</strong> Anti-stalking defense; prevents estranged relatives or unauthorized individuals from tracking a child's classroom schedule.</p>
            <p className="mt-2"><strong>8. What To Do When Access Is Denied:</strong> If your link is marked 'PENDING_HM_APPROVAL', visit the school office with your original CNIC and child's B-Form for physical verification.</p>
            <p className="mt-2"><strong>9. Difference from STUDENT:</strong> Parent holds family oversight authority and can switch between multiple children across different municipal schools.</p>
            <p className="mt-2"><strong>10. Verified Evidence:</strong> <code>server/src/controllers/parentLinkController.js</code> • Verified across 74 automated tests in 5 parent security test files.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export const CapabilityMatrixSection = () => (
  <div>
    <DocHeader
      title="System Capability Registry &amp; Access Control Matrix"
      badge="3. Identity, Roles &amp; Scopes"
      subtitle="Mapping the 39 atomic system capabilities across municipal roles with foundational 31-capability baseline context."
    />

    <Callout type="info" title="CAPABILITY REGISTRY &amp; PERMISSION COUNTS EXPLAINED">
      The backend defines <strong>39 total atomic permissions</strong> in <code>server/src/config/permissions.js</code> across 10 functional domains. The foundational system baseline comprised 31 capabilities (governing Users, Schools, Attendance, Exams, Transfers, Documents, Audit, and Homework). The subsequent integration of Leave Management (5 permissions: <code>leave.view</code>, <code>leave.submit</code>, <code>leave.approve_cl</code>, <code>leave.approve_el</code>, <code>leave.initiate_hm</code>) and Staff Attendance (2 permissions: <code>staff_attendance.submit</code>, <code>staff_attendance.approve</code>) expanded the master registry to 39 capabilities.
      <br /><br />
      <strong>Role Capability Allocation:</strong> Roles receive specific capability subsets: ROOT_ADMIN and SUPER_ADMIN receive all 39 capabilities; ADMIN receives 25; HM receives 22; SUPERVISOR receives 16; TEACHER receives 11; and PEON, STUDENT, and PARENT receive 4 capabilities each.
      <br /><br />
      <strong>Scope vs. Authorization:</strong> A <code>GLOBAL</code> scope (assigned to Root Admin and Super Admin) or a high permission count does not bypass operational safeguards. All requests are strictly intercepted by authentication, RFC 6238 TOTP verification, rate limiters, hierarchy checks, and immutable audit logs.
    </Callout>

    <ComparisonTable
      headers={['Core System Capability', 'Allowed Roles & Constraints']}
      rows={[
        { left: 'Platform Maintenance & Seed Scripts', right: 'ROOT_ADMIN only' },
        { left: 'Global Municipal Outage Mode', right: 'ROOT_ADMIN only' },
        { left: 'Final Teacher Transfer Approval', right: 'ROOT_ADMIN, SUPER_ADMIN' },
        { left: 'Town-Wide Gazetted Circulars', right: 'ROOT_ADMIN, SUPER_ADMIN, ADMIN' },
        { left: 'Staff Creation (Below Own Level)', right: 'ROOT_ADMIN, SUPER_ADMIN, ADMIN' },
        { left: 'School Inspection Audit Submission', right: 'SUPERVISOR, ADMIN, SUPER_ADMIN' },
        { left: 'Inter-School Transfer Initiation', right: 'SUPERVISOR, ADMIN, SUPER_ADMIN (HM cannot initiate inter-school transfers)' },
        { left: 'Teacher Relieving Certification', right: 'HM (Source School), SUPER_ADMIN' },
        { left: 'Teacher Joining Confirmation', right: 'HM (Destination School), SUPER_ADMIN' },
        { left: 'Student Enrollment & GR Assignment', right: 'HM, ADMIN' },
        { left: 'Parent Ward Link Verification', right: 'HM (Physical CNIC Check), ADMIN' },
        { left: 'Daily Student Attendance Marking', right: 'TEACHER (Assigned Section - LOCKED), HM' },
        { left: 'Exam Marks Entry (Subject)', right: 'TEACHER (Assigned Subject - LOCKED), HM' },
        { left: 'Official Tabulation Sheet Lock', right: 'HM, ADMIN, SUPER_ADMIN' },
        { left: 'Marksheet PDF Generation', right: 'HM, STUDENT (Published Only), PARENT (Verified Link)' },
        { left: 'Student Profile Read', right: 'HM, STUDENT (Self Only), PARENT (Verified Ward Only)' },
        { left: 'Ward Academic & Attendance Read', right: 'PARENT (Verified Link Only)' },
        { left: 'School Circulars View', right: 'PEON, TEACHER, HM, ADMIN, SUPER_ADMIN, ROOT_ADMIN' },
        { left: 'Free Sindh Textbook Download', right: 'PUBLIC (Unauthenticated / All)' },
        { left: 'Password Reset via Admin', right: 'ADMIN (Target Level < 80), ROOT_ADMIN' },
        { left: 'Audit Trail Inspection', right: 'ADMIN, SUPER_ADMIN, ROOT_ADMIN' },
      ]}
    />

    <Callout type="security" title="OPERATIONAL DIRECTORY VS CENTRAL ACCOUNT GOVERNANCE">
      <strong>/directory</strong> (School-Scoped Operational Workspace): Head Masters and teachers manage student rosters and daily attendance.<br />
      <strong>/users</strong> (Central Municipal Governance): Central Town Administration (Admin/Super Admin) manages credentials and platform lifecycle.
    </Callout>
  </div>
);

export const SubordinationSection = () => (
  <div>
    <DocHeader
      title="Administrative Subordination Rules & Immunity Guarantees"
      badge="3. Identity, Roles & Scopes"
      subtitle="Strict mathematical rules preventing lateral or upward privilege escalation across the municipal hierarchy."
    />

    <Callout type="security" title="THE SUBORDINATION FORMULA">
      In <code>server/src/middlewares/authorizeHierarchy.js</code>:
      <br />
      An actor with <code>roleLevel_A</code> attempting to mutate an account with <code>roleLevel_T</code> is allowed IF AND ONLY IF:
      <br />
      <strong>roleLevel_A &gt; roleLevel_T</strong>
      <br />
      Hierarchical Weightings: ROOT_ADMIN (100) &gt; SUPER_ADMIN (90) &gt; ADMIN (80) &gt; SUPERVISOR (60) &gt; HM (50) &gt; TEACHER (30) &gt; PEON (20) &gt; STUDENT / PARENT (10).
    </Callout>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <InfoCard
        icon={<Shield className="w-5 h-5" />}
        color="red"
        title="Root Admin Immunity"
        desc="Root Admin (Level 100) cannot be edited, demoted, or suspended by any user. Any route attempting to modify Root Admin throws 403 Forbidden."
      />
      <InfoCard
        icon={<AlertTriangle className="w-5 h-5" />}
        color="amber"
        title="Anti-Self-Demotion"
        desc="Administrators cannot demote or suspend their own accounts via the API to prevent accidental municipal lockout."
      />
      <InfoCard
        icon={<CheckCircle2 className="w-5 h-5" />}
        color="emerald"
        title="Lateral Protection"
        desc="An Admin (Level 80) cannot suspend or reset another Admin (Level 80). Inter-peer mutations require SUPER_ADMIN (Level 90) or ROOT_ADMIN (Level 100)."
      />
    </div>

    <ReasoningCard
      title="Subordination Axiom Rationale (Mathematical Role Ceilings)"
      decision="Enforcing actor.roleLevel > target.roleLevel on all administrative mutations, granting Root Admin absolute immunity and forbidding self-demotion or horizontal peer tampering."
      whyItWon="In government offices, peer administrators often engage in bureaucratic conflicts or accidental credential overrides. A strict strict-greater-than formula mathematically prevents lateral attacks (e.g. an Admin suspending another Admin in the same town) and eliminates upward attacks completely."
      alternativesRejected="Equal-or-greater permissions (rejected: allows peers to lock each other out); Role name matching strings (rejected: fragile and prone to capitalization or enum drift)."
      tradeOffs="Requires Super Admin or Root Admin intervention when a peer administrator's credentials genuinely need recovery or rotation."
    />

    <FailureRecoveryCard
      failureMode="An administrator attempts to disable or delete the sole remaining Super Admin account in the municipality."
      impact="Municipal platform paralysis with no administrative oversight."
      handling="Final Super Admin Protection Guard: In userController.js, the deactivation handler counts active Super Admins. If count <= 1 and the target is a Super Admin, the request throws HTTP 400 Bad Request ('CANNOT_DISABLE_LAST_SUPER_ADMIN')."
      recovery="Requires provisioning a replacement Super Admin before deactivating the outgoing civil servant."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Subordination Inquiries"
      items={[
        {
          category: 'Immunity Ceiling',
          question: 'Why can Root Admin (Level 100) never be modified via web API endpoints?',
          answer: 'Root Admin has roleLevel 100, which is the absolute mathematical ceiling of the system. Since no actor can possess roleLevel > 100, the condition (actor.roleLevel > target.roleLevel) can never evaluate to true for a Root Admin target. Self-modification is explicitly rejected by anti-self-demotion guards, guaranteeing that Root Admin configuration can only be altered via emergency terminal CLI scripts.',
          evidence: 'server/src/middlewares/authorizeHierarchy.js:32-48 • docs/RBAC.md:45-80',
        },
        {
          category: 'Delegation Boundary',
          question: 'Can a Head Master (Level 50) assign a software role to a Teacher (Level 30)?',
          answer: 'No. While HM has a higher role level than Teacher (50 > 30), assigning software roles requires the atomic permission users.assign_role, which is strictly restricted to Town Admin (Level 80) and above. HM can only update local school classroom assignments, preserving central governance over software credentials.',
          evidence: 'server/src/controllers/userController.js:80-120 • docs/RBAC.md:110-145',
        },
      ]}
    />

    <VerificationBox
      sourceFile="server/src/middlewares/authorizeHierarchy.js & server/src/constants.js"
      testSuite="server/tests/authority_model_suite.test.js & server/tests/root_admin_mfa_suite.test.js"
      command="cd server && node tests/authority_model_suite.test.js"
      result="20 / 20 PASSED (100% SUBORDINATION INTEGRITY)"
    />
  </div>
);

export const DataScopesSection = () => (
  <div>
    <DocHeader
      title="The 7 Geographic & Institutional Data Scopes"
      badge="3. Identity, Roles & Scopes"
      subtitle="How the scope engine mathematically restricts database queries to prevent cross-school data tampering."
    />

    <ComparisonTable
      headers={['Data Scope', 'Authorized Role(s)', 'MongoDB Query Filter Injected by BFF']}
      rows={[
        { left: 'GLOBAL', right: 'ROOT_ADMIN, SUPER_ADMIN • No tenant filter applied; full multi-school municipal visibility.' },
        { left: 'TOWN', right: 'ADMIN • Automatically filtered by { townId: actor.townId }.' },
        { left: 'ASSIGNED_SCHOOLS', right: 'SUPERVISOR • Automatically filtered by { schoolId: { $in: actor.assignedSchools } }.' },
        { left: 'SCHOOL', right: 'HM, PEON • Automatically filtered by { schoolId: actor.schoolId }.' },
        { left: 'CLASS_SECTION', right: 'TEACHER • Filtered by { classId: actor.classId, sectionId: actor.sectionId }.' },
        { left: 'SELF', right: 'STUDENT • Filtered strictly by { studentId: actor._id }.' },
        { left: 'CHILD', right: 'PARENT • Filtered strictly by { studentId: { $in: verifiedWardIds } }.' },
      ]}
    />

    <ReasoningCard
      title="7 Multi-Tenant Data Scopes Rationale (Server-Side Injection vs Client Filtering)"
      decision="Server-side query filter injection: The BFF middleware (authorizeScope.js) binds MongoDB queries strictly to the authenticated actor's verified cryptographic claims (schoolId, townId, assignedSchools), discarding untrusted client parameters."
      whyItWon="In government school administration, teachers or head masters in one school must never be able to inspect student records, attendance, or exam scores of another school. Client-side filtering (e.g. fetching all students and filtering in React) is vulnerable to BOLA/IDOR and data leakage. Injecting tenant filters directly into Mongoose queries guarantees zero cross-tenant leakage at the database layer."
      alternativesRejected="Client-supplied schoolId in URL/body (rejected: trivially spoofed in Postman/cURL); Separate database per school (rejected: prohibitive multi-database connection overhead across dozens of government schools)."
      tradeOffs="Requires compound indexes on { schoolId, ... } across all multi-tenant collections."
    />

    <FailureRecoveryCard
      failureMode="Actor token lacks required tenant context (e.g. missing schoolId on a newly registered HM account)."
      impact="Potential to query entire collection if filter evaluates to undefined."
      handling="Fail-Closed Scope Guard: If an actor's scope requires schoolId but actor.schoolId is null or undefined, authorizeScope.js immediately halts execution with HTTP 403 Forbidden ('TENANT_CONTEXT_MISSING')."
      recovery="Directs user to Town Administrator to complete formal school assignment in User profile."
    />

    <CrossQuestions
      title="Engineering Cross-Questions & Data Tenancy Inquiries"
      items={[
        {
          category: 'Cluster Supervisor BOLA',
          question: 'How does ASSIGNED_SCHOOLS scope prevent a Supervisor from tampering with an unassigned cluster school?',
          answer: 'Supervisors possess an array of assignedSchools in their user record. The authorizeScope.js middleware injects { schoolId: { $in: request.user.assignedSchools } } into every inspection and report query. If a supervisor attempts to submit an inspection for a school outside their array, the query returns null, and the controller emits 403 Forbidden with a SUPERVISOR_CROSS_SCHOOL_INSPECTION_BLOCKED audit event.',
          evidence: 'server/src/middlewares/authorizeScope.js:45-80 • Verified in tests/supervisor_bola_security_remediation.test.js:1-12 (PASS)',
        },
        {
          category: 'Parent Ward Isolation',
          question: 'What stops a Parent from modifying the studentId in a URL to view another family’s child?',
          answer: 'Parent routes are guarded by verifyParentWardLink.js. The middleware queries the ParentStudentLink collection for { parentId: request.user._id, studentId: requestedStudentId, verificationStatus: "VERIFIED" }. Unless the guardian link was cryptographically confirmed via phone OTP and verified by the Head Master in person, the request is halted with 403 Forbidden.',
          evidence: 'server/src/middlewares/verifyParentWardLink.js:15-60 • Verified in tests/parent_adversarial_security.test.js (PASS)',
        },
      ]}
    />

    <VerificationBox
      sourceFile="server/src/middlewares/authorizeScope.js & server/src/middlewares/verifyParentWardLink.js"
      testSuite="server/tests/tenant_isolation_suite.test.js & server/tests/parent_adversarial_security.test.js"
      command="cd server && node tests/tenant_isolation_suite.test.js"
      result="42 / 42 PASSED (100% SCOPE ISOLATION)"
    />
  </div>
);

export const AccountLifecycleSection = () => (
  <div>
    <DocHeader
      title="Account Lifecycle State Machine"
      badge="3. Identity, Roles & Scopes"
      subtitle="Strict account status transitions governing registration, activation, suspension, and deactivation."
    />

    <TerminalBlock title="ACCOUNT LIFECYCLE FINITE STATE MACHINE">
{`    ┌─────────────────┐
    │     PENDING     │ (Self-registration: Teacher / Student / Parent)
    └────────┬────────┘
             │ Verified by HM or OTP
             ▼
    ┌─────────────────┐
    │     ACTIVE      │ ◄──────────┐
    └────────┬────────┘            │
             │                     │ Reinstated by Admin
             ├─────────────────────┼─────────────────────┐
             │ Infraction / Audit  │ Discharged / Leave  │
             ▼                     │                     ▼
    ┌─────────────────┐            │            ┌─────────────────┐
    │    SUSPENDED    │────────────┘            │    INACTIVE     │
    └─────────────────┘                         └─────────────────┘
    (Login rejected: 403)                       (Read-only archive)`}
    </TerminalBlock>
  </div>
);

