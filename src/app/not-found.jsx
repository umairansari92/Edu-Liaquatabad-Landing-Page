import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="max-w-md w-full text-center space-y-4 p-8 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-[#006AC7] font-bold text-2xl">
          404
        </div>
        <h1 className="text-xl font-bold text-[#102033]">Page Not Found</h1>
        <p className="text-xs text-[#526477]">
          The civic portal resource or official documentation page you are looking for does not exist or has been relocated.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-xl bg-[#006AC7] hover:bg-[#005299] text-white text-xs font-bold transition-all shadow-xs"
        >
          Return to Civic Home
        </Link>
      </div>
    </div>
  );
}
