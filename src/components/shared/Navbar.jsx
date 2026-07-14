/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiLogOut, FiUser, FiSettings, FiMenu, FiX, FiTool } from 'react-icons/fi';

export default function Navbar() {
  // Temporary state to simulate user authentication for UI review
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulated user details
  const user = {
    name: 'Asmual',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  return (
    <nav className="relative bg-[#0b1329] border-b border-slate-800 text-slate-200 px-6 py-3 backdrop-blur-md bg-opacity-95 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo and Title */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="bg-linear-to-tr from-blue-600 to-indigo-600 p-2 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]">
            <FiTool className="text-white text-xl" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Easy<span className="text-blue-500">Tools</span>
          </span>
        </Link>

        {/* Center: Main Navigation Menu links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/categories" className="text-slate-400 hover:text-white transition-colors">Categories</Link>
          <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contacts</Link>
          <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About</Link>
        </div>

        {/* Right Side: Dynamic User Profile State & CTA Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative flex items-center space-x-3">
              {/* Dynamic user greeting text display */}
              <span className="text-sm font-medium text-slate-300">
                Hi, <span className="text-white font-semibold">{user.name}</span>
              </span>
              
              {/* Avatar indicator circle with active micro shadow overlay */}
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative w-10 h-10 rounded-full border-2 border-blue-500/30 overflow-hidden shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:border-blue-500 transition-all focus:outline-none"
              >
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Account management action dropdown block */}
              {showDropdown && (
                <div className="absolute right-0 top-12 w-48 bg-[#0f172a] border border-slate-800 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link 
                    href="/dashboard/profile" 
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800/60 hover:text-white transition-colors"
                  >
                    <FiUser className="text-base" />
                    <span>View Profile</span>
                  </Link>
                  
                  {/* Settings link addition inside user contextual configuration menu */}
                  <Link 
                    href="/dashboard/settings" 
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800/60 hover:text-white transition-colors"
                  >
                    <FiSettings className="text-base" />
                    <span>Settings</span>
                  </Link>
                  
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors border-t border-slate-800/60 mt-1"
                  >
                    <FiLogOut className="text-base" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/register" 
                className="text-sm font-medium bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu trigger control button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-400 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Responsive mobile menu drawer wrapper layout */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-800 space-y-3 flex flex-col animate-in fade-in duration-200">
          <Link href="/categories" className="text-slate-400 hover:text-white px-2 py-1 text-sm transition-colors">Categories</Link>
          <Link href="/pricing" className="text-slate-400 hover:text-white px-2 py-1 text-sm transition-colors">Pricing</Link>
          <Link href="/contact" className="text-slate-400 hover:text-white px-2 py-1 text-sm transition-colors">Contacts</Link>
          <Link href="/about" className="text-slate-400 hover:text-white px-2 py-1 text-sm transition-colors">About</Link>
          <div className="pt-2 border-t border-slate-800/60 flex flex-col space-y-2">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-3 px-2 py-1">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-sm text-white font-medium">Hi, {user.name}</span>
                </div>
                <Link href="/dashboard/profile" className="text-slate-400 hover:text-white px-2 py-1 text-sm flex items-center space-x-2"><FiUser /> <span>Profile</span></Link>
                <Link href="/dashboard/settings" className="text-slate-400 hover:text-white px-2 py-1 text-sm flex items-center space-x-2"><FiSettings /> <span>Settings</span></Link>
                <button onClick={handleLogout} className="text-red-400 hover:text-red-300 px-2 py-1 text-sm flex items-center space-x-2 text-left"><FiLogOut /> <span>Logout</span></button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-slate-400 hover:text-white px-2 py-1 text-sm transition-colors">Sign In</Link>
                <Link href="/register" className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg text-sm transition-colors">Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}