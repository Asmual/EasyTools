import { FiTarget, FiCpu, FiShield } from 'react-icons/fi';

export const metadata = {
  title: "About Us | Easy Tools",
  description: "Learn more about our core developer mission, decentralized principles, and standard browser technology stack.",
};

export default function About() {
  return (
    <div className="bg-[#0b1329] text-white py-12 px-6 min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Ambient glowing orb for layout background */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Intro Header Section */}
      <div className="text-center max-w-2xl mb-10 z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Our Architectural Mission
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
          EasyTools is engineered by developers, for developers. We build premium, localized standard utilities designed to optimize daily workflows without sacrificing telemetry privacy.
        </p>
      </div>

      {/* Core Values Grid Framework */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full z-10 items-stretch mb-10">
        
        {/* Value Card 1: Decentralized Processing */}
        <div className="bg-[#0f172a]/60 border border-slate-800 rounded-xl p-6 flex flex-col transition-all hover:-translate-y-0.5 duration-200">
          <div className="p-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-lg rounded-lg w-fit mb-4">
            <FiCpu />
          </div>
          <h3 className="text-sm font-bold text-white mb-2">Browser-Side Execution</h3>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            99% of our data translation operations execute inside your browser sandbox. Zero database overhead means lightning performance and massive efficiency.
          </p>
        </div>

        {/* Value Card 2: Ultimate Privacy */}
        <div className="bg-[#0f172a]/60 border border-slate-800 rounded-xl p-6 flex flex-col transition-all hover:-translate-y-0.5 duration-200">
          <div className="p-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-lg rounded-lg w-fit mb-4">
            <FiShield />
          </div>
          <h3 className="text-sm font-bold text-white mb-2">Cryptographic Privacy</h3>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Your secure logs, payloads, keys, and images never touch secondary external environments. Absolute tracking immunity is fully preserved by default.
          </p>
        </div>

        {/* Value Card 3: Single-Click Accessibility */}
        <div className="bg-[#0f172a]/60 border border-slate-800 rounded-xl p-6 flex flex-col transition-all hover:-translate-y-0.5 duration-200">
          <div className="p-2.5 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-lg rounded-lg w-fit mb-4">
            <FiTarget />
          </div>
          <h3 className="text-sm font-bold text-white mb-2">Velocity Oriented</h3>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Eliminate complex accounts configurations or bloated packages dependencies. Access 50+ single-click production tools instantaneously.
          </p>
        </div>

      </div>

      {/* Summary Stat Metric Module */}
      <div className="w-full max-w-3xl border border-slate-800/60 bg-[#0f172a]/30 rounded-xl p-5 z-10 flex flex-wrap justify-around items-center gap-4 text-center">
        <div>
          <h4 className="text-xl font-black text-white">50+</h4>
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Active Modules</p>
        </div>
        <div className="hidden sm:block w-px h-8 bg-slate-800" />
        <div>
          <h4 className="text-xl font-black text-white">100%</h4>
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Client Encrypted</p>
        </div>
        <div className="hidden sm:block w-px h-8 bg-slate-800" />
        <div>
          <h4 className="text-xl font-black text-white">&lt; 10ms</h4>
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Sandbox Response</p>
        </div>
      </div>

    </div>
  );
}