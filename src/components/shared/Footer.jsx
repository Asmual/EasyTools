'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiTool, FiTwitter, FiGithub, FiYoutube, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Thank you for subscribing to our newsletter hub!');
    setEmail('');
  };

  return (
    <footer className="bg-[#0b1329] text-slate-400 border-t border-slate-800 pt-16 pb-8 px-6 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
        
        {/* Column 1: Brand Info & Social Medias (Spans 4 columns) */}
        <div className="md:col-span-4 flex flex-col space-y-5">
          <Link href="/" className="flex items-center space-x-3 group w-fit">
            <div className="bg-linear-to-tr from-blue-600 to-indigo-600 p-2 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <FiTool className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Easy<span className="text-blue-500">Tools</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400/90 max-w-sm">
            The ultimate productivity workspace featuring 50+ single-click tools for compressing images, 
            manipulating PDFs, decoding JSON, generating passwords, and boosting sitemaps.
          </p>
          <div className="flex items-center space-x-4 text-lg text-slate-500">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FiTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FiGithub />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FiYoutube />
            </a>
          </div>
        </div>

        {/* Column 2: Product Navigation Links (Spans 2 columns) */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-bold tracking-wider text-white uppercase">Product</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/tools" className="hover:text-white transition-colors">All Tools</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">SaaS Pricing</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Support FAQ</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources Navigation Links (Spans 2 columns) */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-bold tracking-wider text-white uppercase">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/blog" className="hover:text-white transition-colors">Developer Blog</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Hub Input Module (Spans 4 columns) */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <h4 className="text-xs font-bold tracking-wider text-white uppercase">Newsletter Hub</h4>
          <p className="text-sm text-slate-400/90 leading-relaxed">
            Get notified of weekly software updates, new tool categories, and open-source releases.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative w-full max-w-md group">
            <div className="relative flex items-center bg-[#0f172a] border border-slate-800 rounded-xl p-1.5 focus-within:border-blue-500/50 transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-transparent text-white text-sm placeholder-slate-600 outline-none pl-3.5 pr-24"
              />
              
              <button
                type="submit"
                className="absolute right-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] flex items-center space-x-1.5 transition-all"
              >
                <FiSend className="text-xs" />
                <span>Join</span>
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Baseline Infrastructure Summary Copyright Segment */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-medium">
        <p>© 2026 Easy Tools Inc. Built for professional developers & designers globally.</p>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0 font-mono tracking-wide uppercase">
          <span>App_Version: <span className="text-slate-500">v3.0.1</span></span>
          <span>•</span>
          <span>Container_Node: <span className="text-green-500/80">Active</span></span>
        </div>
      </div>
    </footer>
  );
}