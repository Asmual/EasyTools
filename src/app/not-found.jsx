import Link from 'next/link';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';

export const metadata = {
  title: "404 - Page Not Found | Easy Tools",
  description: "The page you are looking for does not exist or has been moved permanently.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative bg-[#0b1329]">
      
      {/* Decorative ambient background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Graphical Icon Container with active drop shadow */}
      <div className="relative inline-flex items-center justify-center bg-linear-to-tr from-blue-950/40 to-slate-900/60 border border-slate-800 p-5 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] mb-8 animate-bounce duration-1000">
        <FiAlertTriangle className="text-blue-500 text-5xl" />
      </div>

      {/* Massive Error Code Typography Segment */}
      <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-400 to-blue-600 mb-4 select-none">
        404
      </h1>

      {/* Descriptive Notification Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
        Lost in the cloud workspace?
      </h2>

      {/* Detailed Assistive Context Paragraph */}
      <p className="text-base text-slate-400 max-w-md leading-relaxed mb-10">
        The link you followed might be broken, or the professional micro-tool you are trying to access has been relocated.
      </p>

      {/* Navigation Redirect Action Button Wrapper */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <FiHome className="text-base" />
          <span>Return to Safety</span>
        </Link>
      </div>

    </div>
  );
}