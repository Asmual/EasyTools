'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implementation for dynamic tool filtering will go here
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-[#0b1329]">
      
      {/* Top Announcement Badge Component */}
      <div className="inline-flex items-center space-x-2 bg-blue-950/40 border border-blue-500/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          New: AI Image Upscaler V2.0
        </span>
      </div>

      {/* Main Bold Catchphrase Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight mb-6">
        One tool, <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-indigo-400">every solution.</span>
      </h1>

      {/* Detailed Platform Description Sub-headline */}
      <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed mb-10">
        A professional-grade suite of 100+ micro-tools for images, PDFs, developers, 
        and daily productivity. Fast, secure, and entirely browser-based.
      </p>

      {/* Centralized Glowing Search Bar Module */}
      <form 
        onSubmit={handleSearchSubmit} 
        className="relative w-full max-w-2xl group"
      >
        {/* Outer ambient glow element triggered on focus and hover */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl opacity-20 blur-md group-focus-within:opacity-50 group-hover:opacity-35 transition duration-300"></div>
        
        {/* Main Input Wrapper */}
        <div className="relative flex items-center bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3.5 shadow-2xl group-focus-within:border-blue-500 transition-colors">
          {/* Search Icon using react-icons exclusively */}
          <FiSearch className="text-slate-500 text-xl mr-3 group-focus-within:text-blue-500 transition-colors" />
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for tool (e.g. Merge PDF, Base64...)"
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base outline-none pr-16"
          />

          {/* Keyboard Shortcut Indicator Badge (⌘ K) */}
          <div className="absolute right-3 hidden sm:flex items-center space-x-1 bg-slate-800/80 border border-slate-700/60 px-2 py-1 rounded-md text-xs font-mono text-slate-400 select-none">
            <span>⌘</span>
            <span>K</span>
          </div>
        </div>
      </form>

    </section>
  );
}