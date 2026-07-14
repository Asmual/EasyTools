import Link from 'next/link';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';

export const metadata = {
  title: "404 - Page Not Found | Easy Tools",
  description: "The page you are looking for does not exist or has been moved permanently.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 relative bg-[#0b1329] overflow-hidden">
      
      {/* Ambient background glow structures centered with the content wrapper */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main semantic content layout wrapper to group text and animations safely */}
      <div className="flex flex-col items-center justify-center max-w-md w-full z-10">
        
        {/* Graphical Alert Icon Container with active pulse-bounce micro animation */}
        <div className="relative inline-flex items-center justify-center bg-linear-to-tr from-blue-950/40 to-slate-900/60 border border-slate-800 p-5 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] mb-6 animate-bounce duration-1000">
          <FiAlertTriangle className="text-blue-500 text-5xl" />
        </div>

        {/* Massive Error Code Typography Segment */}
        <h1 className="text-7xl sm:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-400 to-blue-600 mb-2 select-none">
          404
        </h1>

        {/* Descriptive Notification Header */}
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
          Lost in the cloud workspace?
        </h2>

        {/* Detailed Assistive Context Paragraph */}
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
          The link you followed might be broken, or the professional micro-tool you are trying to access has been relocated.
        </p>

        {/* Navigation Redirect Action Button Module */}
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