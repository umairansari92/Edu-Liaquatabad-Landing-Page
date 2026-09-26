import React from 'react';
import {
  Sparkles,
  Cpu,
  Layers,
  Palette,
  CheckCircle2,
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

export const DesignConstitutionSection = () => (
  <div>
    <DocHeader
      title="Frozen Design Constitution v2.0 & Color Area Percentages"
      badge="7. UI Constitution & Performance"
      subtitle="Strict visual guidelines enforcing civic dignity, high contrast, and accessibility."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      To maintain visual consistency and avoid arbitrary styling across 100+ components, the frontend workspace and landing portal adhere strictly to the <strong>Frozen Design Constitution v2.0</strong>:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
        <div className="text-3xl font-black text-[#006AC7]">55%</div>
        <div className="text-xs font-bold text-[#102033]">BRAND CIVIC BLUE</div>
        <div className="text-[11px] text-[#526477]">Headers, Primary CTAs, Active States</div>
      </div>
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <div className="text-3xl font-black text-[#102033]">25%</div>
        <div className="text-xs font-bold text-[#102033]">CANVAS WHITE</div>
        <div className="text-[11px] text-[#526477]">Card Backgrounds, Surface Layers</div>
      </div>
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-center">
        <div className="text-3xl font-black text-slate-700">12%</div>
        <div className="text-xs font-bold text-[#102033]">NEUTRAL SLATE</div>
        <div className="text-[11px] text-[#526477]">Body Typography, Subtle Borders</div>
      </div>
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
        <div className="text-3xl font-black text-[#4B7F3A]">≤ 8%</div>
        <div className="text-xs font-bold text-[#102033]">MUNICIPAL GREEN</div>
        <div className="text-[11px] text-[#526477]">Verified Badges, Success Badges Only</div>
      </div>
    </div>

    <Callout type="warning" title="THE 8% GREEN RULE">
      Municipal green (<code>#4B7F3A</code>) represents the official crest of the Government of Sindh. It is strictly reserved for verified civic credentials, passing grades, and successful inspections. Overusing green as a background or generic button color violates the Design Constitution.
    </Callout>
  </div>
);

export const ClientArchitectureSection = () => (
  <div>
    <DocHeader
      title="Redux Toolkit State Management & Concurrent Token Refresh Mutex"
      badge="7. UI Constitution & Performance"
      subtitle="Predictable asynchronous data flow, normalized slices, and Axios token refresh concurrency protection."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <InfoCard
        icon={<Cpu className="w-5 h-5" />}
        color="blue"
        title="9 Normalized Redux Slices"
        desc="Slices manage auth, schools, teachers, students, attendance, exams, transfers, documents, and notifications independently."
      />
      <InfoCard
        icon={<Lock className="w-5 h-5" />}
        color="purple"
        title="Token Refresh Mutex Queue"
        desc="Prevents token refresh race conditions when 10 simultaneous API calls receive 401s when the access token expires."
      />
    </div>

    <SectionTitle>The Mutex Interceptor Lifecycle</SectionTitle>
    <TerminalBlock title="AXIOS CONCURRENT REFRESH MUTEX LIFECYCLE">
{`1. API request fails with 401 Unauthorized (Expired Access Token).
2. IF !isRefreshing:
      isRefreshing = true
      Trigger POST /api/v1/auth/refresh-token (with HTTPOnly cookie)
3. ELSE (other concurrent requests):
      Push unresolved Promise into failedQueue[]
4. On refresh success:
      Update Redux store with new accessToken
      Drain failedQueue[]: replay every queued request with new token
      isRefreshing = false
5. On refresh failure (e.g. Session revoked):
      Reject all queued requests
      Dispatch logoutAction() to Redux
      Redirect to /login`}
    </TerminalBlock>
  </div>
);

export const PwaCachingSection = () => (
  <div>
    <DocHeader
      title="Progressive Web App (PWA) Offline App-Shell Caching"
      badge="7. UI Constitution & Performance"
      subtitle="Ensuring instant workspace loading under weak cellular reception across public municipal schools."
    />

    <p className="text-xs text-[#526477] leading-relaxed mb-6">
      Teachers and administrators in public schools often work in thick stone buildings with intermittent cellular connectivity. The client is equipped with a Google Workbox service worker:
    </p>

    <Steps
      items={[
        {
          step: '1',
          title: 'App-Shell Pre-Caching',
          desc: 'On first visit, HTML entry, JavaScript bundles, stylesheets, and SVG logos are cached in browser CacheStorage.',
        },
        {
          step: '2',
          title: 'Instant Offline Launch',
          desc: 'Subsequent visits launch in < 150ms even when the device is in airplane mode or disconnected from the internet.',
        },
        {
          step: '3',
          title: 'Network-First API Strategy',
          desc: 'Dynamic data (attendance, marks, rosters) always fetches live from server; if offline, user receives clean offline notification.',
        },
      ]}
    />
  </div>
);
