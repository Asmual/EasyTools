'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }
    toast.success('Authentication successful! Redirecting to workspace...');
  };

  return (
    <div className="bg-[#0b1329] text-white min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Structural ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main card viewport wrapper */}
      <div className="bg-[#0f172a]/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 max-w-sm w-full z-10 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
        
        {/* Header segment holding dynamic titles */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-black tracking-tight text-white mb-1">
            Welcome Back
          </h1>
          <p className="text-slate-400 text-xs">
            Enter your operational credentials to access tools.
          </p>
        </div>

        {/* Core credential form mapping input nodes */}
        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* Email structural input container */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Email Address
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-slate-500 text-sm">
                <FiMail />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@example.com"
                className="w-full bg-[#0b1329] border border-slate-800 focus:border-blue-500/50 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white outline-none transition-colors"
              />
            </div>
          </div>

          {/* Password structural input container with visibility toggles */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Password
              </label>
              <Link href="/forgot-password" className="text-[10px] text-blue-500 hover:underline font-semibold">
                Forgot?
              </Link>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-slate-500 text-sm">
                <FiLock />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0b1329] border border-slate-800 focus:border-blue-500/50 rounded-xl pl-9 pr-10 py-2.5 text-xs text-white outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-slate-500 hover:text-slate-300 text-sm focus:outline-none cursor-pointer"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Trigger validation submission button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 mt-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Decorative layout contextual separator */}
        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-slate-800/60"></div>
          <span className="flex-shrink mx-3 text-[10px] uppercase font-bold text-slate-500 tracking-wider">Or continue with</span>
          <div className="flex-grow border-t border-slate-800/60"></div>
        </div>

        {/* Real flat color Google SSO execution node */}
        <button
          type="button"
          onClick={() => toast.success('Connecting safely with secure Google identity provider...')}
          className="w-full py-2.5 px-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-xs font-semibold text-slate-200 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
        >
          <FcGoogle className="text-base" />
          <span>Login with Google</span>
        </button>

        {/* Redirection target footer anchor node */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/registration" className="text-blue-500 hover:underline font-semibold">
            Create Free Account
          </Link>
        </p>

      </div>
    </div>
  );
}