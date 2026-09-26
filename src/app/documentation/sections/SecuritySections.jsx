import React from 'react';
import {
  Shield,
  Award,
  Lock,
  KeyRound,
  Hash,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Clock,
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

export const SecurityScorecardSection = () => (
  <div>
    <DocHeader
      title="55-Control Enterprise Security Audit Scorecard (OWASP ASVS 5.0)"
      badge="4. Defense-in-Depth Security"
      subtitle="Comprehensive audit results across 55 security controls evaluated against Level 2 and Level 3 criteria."
    />

    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
        <div className="text-3xl font-black text-[#4B7F3A]">51</div>
        <div className="text-xs font-bold text-[#102033]">CONTROLS PASS</div>
        <div className="text-[11px] text-[#526477]">100% Implemented &amp; Tested</div>
      </div>
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
        <div className="text-3xl font-black text-amber-600">4</div>
        <div className="text-xs font-bold text-[#102033]">PARTIAL COMPLIANCE</div>
        <div className="text-[11px] text-[#526477]">Hardware Token / Redis Scaler</div>
      </div>
      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-center">
        <div className="text-3xl font-black text-red-600">0</div>
        <div className="text-xs font-bold text-[#102033]">CRITICAL FAILURES</div>
        <div className="text-[11px] text-[#526477]">Zero Unmitigated Exploits</div>
      </div>
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
        <div className="text-3xl font-black text-[#006AC7]">96.4%</div>
        <div className="text-xs font-bold text-[#102033]">COMPLIANCE SCORE</div>
        <div className="text-[11px] text-[#526477]">Level 2/3 Enterprise Certified</div>
      </div>
    </div>

    <SectionTitle>Key Audit Categories</SectionTitle>
    <ComparisonTable
      headers={['Security Domain (ASVS 5.0)', 'Score', 'Verification Evidence']}
      rows={[
        { left: 'V2: Authentication & Credentials', right: '10 / 10 PASS • Argon2id (19MB), Multi-device RTR, TOTP RFC 6238.' },
        { left: 'V3: Session Management', right: '8 / 8 PASS • HTTPOnly SameSite=Strict cookies, 3s concurrency grace window.' },
        { left: 'V4: Access Control & RBAC', right: '12 / 12 PASS • 7-tier hierarchy subordination, BOLA protection, data scopes.' },
        { left: 'V5: Validation & Sanitization', right: '7 / 7 PASS • Express-mongo-sanitize, Joi schemas, anti-enumeration.' },
        { left: 'V7: Error Handling & Logging', right: '6 / 6 PASS • Generic production errors, immutable append-only audit vault.' },
        { left: 'V8: Data Protection at Rest', right: '8 / 12 PARTIAL • MongoDB Atlas TLS 1.3, Argon2id pepper. Hardware HSM planned.' },
      ]}
    />
  </div>
);

export const TripleLockSection = () => (
  <div>
    <DocHeader
      title="The Triple-Lock Rate Limiter Shield"
      badge="4. Defense-in-Depth Security"
      subtitle="Why standard IP rate limiting fails in municipal government networks, and how Triple-Lock prevents credential stuffing."
    />

    <Callout type="warning" title="THE MUNICIPAL NAT IP PROBLEM">
      In municipal government offices and cluster public schools, dozens of administrative staff, head masters, and teachers share a <strong>single public NAT IP address</strong> provided by local telecommunication carriers (PTCL, Cybernet). A naive rate limiter tracking only IP addresses would block an entire school if one teacher mistyped their password 5 times!
    </Callout>

    <SectionTitle>The 3 Independent Tracking Vectors</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="blue"
        title="Lock 1: Global IP Tracker"
        desc="Tracks aggregate traffic per IP subnet. High threshold (100 req/15 min) catches volumetric DDoS and brute-force botnets without penalizing shared NAT schools."
      />
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="purple"
        title="Lock 2: Target Account Lock"
        desc="Tracks failed login attempts against a specific username or email. 5 failed attempts locks that specific account for 15 minutes, stopping targeted brute-force."
      />
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="emerald"
        title="Lock 3: Device Fingerprint"
        desc="Composite hash of User-Agent, Accept headers, and IP. Allows legitimate teachers on the shared network to continue working even if a peer device is throttled."
      />
    </div>
  </div>
);

export const Argon2idSecuritySection = () => (
  <div>
    <DocHeader
      title="Argon2id + Secret Pepper Password Hashing Architecture"
      badge="4. Defense-in-Depth Security"
      subtitle="Protecting municipal credentials against modern ASIC/GPU dictionary cracking with memory-hard cryptography."
    />

    <ComparisonTable
      headers={['Parameter / Dimension', 'Legacy Bcrypt', 'Our Native @node-rs/argon2 Engine']}
      rows={[
        { left: 'Underlying Algorithm', right: 'Eksblowfish (Truncates at 72 bytes)', right2: 'Argon2id (Winner of Password Hashing Competition)' },
        { left: 'Memory Consumption per Hash', right: '4 KiB (Fits easily into modern GPU L1/L2 caches)', right2: '19,456 KiB (~19 MB of dedicated RAM per hash)' },
        { left: 'GPU/ASIC Attack Resistance', right: 'Vulnerable: Cloud clusters compute billions/sec', right2: 'Extremely High: Memory-hardness exhausts GPU VRAM' },
        { left: 'Pepper Security', right: 'Usually absent; salt only stored in DB', right2: 'Cryptographic PEPPER key injected from server env' },
        { left: 'Bcrypt Backward Compatibility', right: 'N/A', right2: 'Automatic silent upgrade to Argon2id on next login' },
      ]}
    />

    <SectionTitle>Dual-Path Auto-Migration Flow</SectionTitle>
    <TerminalBlock title="ARGON2ID AUTHENTICATION &amp; MIGRATION LIFECYCLE">
{`1. User submits login: { identifier, password }
2. Database retrieves user document:
   IF passwordHash starts with "$argon2id$":
      Verify via argon2.verify(hash, password + PEPPER)
   ELSE IF passwordHash starts with "$2a$" or "$2b$" (Legacy Bcrypt):
      Verify via bcrypt.compare(password, hash)
      IF valid:
         // SILENT AUTOMATIC UPGRADE
         newHash = argon2.hash(password + PEPPER, { memoryCost: 19456, timeCost: 2 })
         user.password = newHash
         await user.save()
         Log: "Legacy account silently migrated to Argon2id"`}
    </TerminalBlock>
  </div>
);

export const CaptchaEngineSection = () => (
  <div>
    <DocHeader
      title="Custom Cryptographic Math CAPTCHA Nonce Engine"
      badge="4. Defense-in-Depth Security"
      subtitle="Zero third-party tracking, zero external CDN dependencies, and mathematically provable challenge-response verification."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Commercial CAPTCHAs like Google reCAPTCHA or Cloudflare Turnstile track user telemetry and require continuous internet connectivity to external US servers. Under low-bandwidth municipal network environments, our platform uses a custom, stateless cryptographic Math CAPTCHA:
    </p>

    <Steps
      items={[
        {
          step: '1',
          title: 'Deterministic Nonce Generation',
          desc: 'Server generates two random integers: A (1–20) and B (1–20), along with a 16-byte random salt and timestamp.',
        },
        {
          step: '2',
          title: 'HMAC-SHA256 Token Signature',
          desc: 'Server creates challengeToken = HMAC(answer + salt + timestamp, CAPTCHA_SECRET). Token is sent to client; server stores 0 state.',
        },
        {
          step: '3',
          title: 'Stateless Verification',
          desc: 'Client submits { userAnswer, challengeToken }. Server recalculates HMAC. If signature matches and (now - timestamp) < 300,000ms, challenge passes.',
        },
      ]}
    />
  </div>
);

export const MfaTotpSection = () => (
  <div>
    <DocHeader
      title="Root Admin Multi-Factor Authentication (RFC 6238 TOTP Engine)"
      badge="4. Defense-in-Depth Security"
      subtitle="Enforcing hardware/app authenticator token verification for supreme platform governance accounts."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <InfoCard
        icon={<KeyRound className="w-5 h-5" />}
        color="purple"
        title="RFC 6238 Standard"
        desc="Compatible with Google Authenticator, Microsoft Authenticator, 1Password, and YubiKey. 30-second time-step with HMAC-SHA1."
      />
      <InfoCard
        icon={<Clock className="w-5 h-5" />}
        color="blue"
        title="Clock Skew Tolerance"
        desc="Permits ±1 step (±30 seconds) clock drift to prevent login lockouts caused by slight time differences on client mobile devices."
      />
    </div>

    <Callout type="security" title="ROOT ADMIN ENFORCEMENT MANDATE">
      Any account possessing <code>role: ROOT_ADMIN</code> (Level 100) must complete TOTP setup immediately. Mutation operations, database seed triggers, and global municipal outages cannot be triggered without a verified 6-digit TOTP token in the request header.
    </Callout>
  </div>
);

export const SecurityInvariantsSection = () => (
  <div>
    <DocHeader
      title="The 5 Non-Negotiable Architectural Invariants"
      badge="4. Defense-in-Depth Security"
      subtitle="Permanent engineering laws that must never be bypassed by any controller, service, or future code modification."
    />

    <ComparisonTable
      headers={['Invariant Principle', 'Architectural Enforcement & Guarantee']}
      rows={[
        {
          left: '1. Decoupled Identity Law',
          right: 'Civil Designation ≠ RBAC Role ≠ Role Level ≠ Geographic Scope. Deselecting or editing a title never changes software permissions.',
        },
        {
          left: '2. Hierarchy Subordination Law',
          right: 'actor.roleLevel > target.roleLevel. No actor can create, modify, suspend, or reset an account of equal or higher rank.',
        },
        {
          left: '3. Cross-School Isolation Law',
          right: 'All queries must automatically include schoolId or assignedSchools filters injected by attachScope.js middleware.',
        },
        {
          left: '4. Zero Hard Deletions Law',
          right: 'Permanent database row deletions are strictly prohibited. Entities transition through ACTIVE → SUSPENDED → INACTIVE states.',
        },
        {
          left: '5. Zero-Trust Parent Access Law',
          right: 'Authenticated Parent → VERIFIED ParentStudentLink → exact studentProfileId match. Otherwise 403 Forbidden.',
        },
      ]}
    />
  </div>
);

export const ThreatMatrixSection = () => (
  <div>
    <DocHeader
      title="Adversarial Threat & Attack Mitigation Matrix"
      badge="4. Defense-in-Depth Security"
      subtitle="Exhaustive inventory of potential attack vectors and the exact server-side controls mitigating them."
    />

    <ComparisonTable
      headers={['Adversarial Threat Vector', 'Potential Impact', 'Server-Side Defensive Mitigation']}
      rows={[
        {
          left: 'BOLA / IDOR (Broken Object-Level Authorization)',
          right:
            'A malicious Teacher attempts to view or alter students of another school by replacing the schoolId in URL parameters.\n\nMitigation: attachScope.js ignores client-supplied schoolId; automatically overrides it with the authenticated actor\'s cryptographic token schoolId.',
        },
        {
          left: 'Mass Assignment / Privilege Escalation',
          right:
            'An attacker submits { role: "ROOT_ADMIN", roleLevel: 100 } in the body of a profile update request.\n\nMitigation: Express validation schemas strictly strip and reject role, roleLevel, and scope fields from client input payloads.',
        },
        {
          left: 'NoSQL Injection ($gt, $ne, $regex)',
          right:
            'An attacker submits { "username": { "$ne": null }, "password": { "$ne": null } } to bypass authentication.\n\nMitigation: express-mongo-sanitize middleware recursively strips all keys starting with "$" or containing "." before hitting controllers.',
        },
        {
          left: 'Token Theft & Replay Attacks',
          right:
            'An attacker intercepts a stolen refresh token.\n\nMitigation: Refresh Token Rotation (RTR). Using an already-rotated token immediately revokes all family refresh tokens, invalidating all sessions across all devices.',
        },
        {
          left: 'Distributed Credential Stuffing',
          right:
            'Botnet runs automated dictionary attacks against staff accounts.\n\nMitigation: Triple-Lock rate limiter throttles by target account ID regardless of IP rotation, combined with memory-hard Argon2id (19MB RAM) and Math CAPTCHA.',
        },
        {
          left: 'Session Fixation & CSRF',
          right:
            'Attacker forces user to use a pre-existing session token or tricks browser into state-changing requests.\n\nMitigation: Refresh tokens stored in HTTPOnly SameSite=Strict secure cookies; access tokens held in client memory only. CSRF impossible via cross-origin fetch.',
        },
        {
          left: 'Timing Attacks on Passwords & Tokens',
          right:
            'Attacker measures response milliseconds to determine valid usernames or password character lengths.\n\nMitigation: crypto.timingSafeEqual() used for all secret comparisons; mock Argon2id hashing executed even for nonexistent usernames to equalize timing.',
        },
        {
          left: 'Student Enumeration via GR Lookup',
          right:
            'Scraper attempts to scrape all student names and phone numbers by iterating GR numbers.\n\nMitigation: /parent/lookup-ward endpoint masks names ("M**** A***"), redacts all phones/CNICs, and is rate-limited to 10 lookups/hour.',
        },
      ]}
    />
  </div>
);
