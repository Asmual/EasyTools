'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

export default function Registration() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error('Please populate all operational inputs.');
      return;
    }

    try {
      setLoading(true);
      // Initiate BetterAuth register user pipeline sequence
      const { data, error } = await authClient.signUp.email({
        email: email,
        password: password,
        name: name,
        callbackURL: '/login',
      });

      if (error) {
        toast.error(error.message || 'Registration pipeline failed.');
        return;
      }

      toast.success('Registration successful! Redirecting to login...');
      router.push('/login');
    } catch (err) {
      toast.error('An unexpected error occurred during database registration.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      // Direct user authorization pipeline towards Google Identity Provider
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/categories',
      });
    } catch (err) {
      toast.error('Google authentication route aborted unexpectedly.');
    }
  };

  return (
    <div className="bg-[#0b1329] text-white min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Structural ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main card registration wrapper */}
      <div className="bg-[#0f172a]/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 max-w-sm w-full z-10 shadow-[0_0_30px_rgba(99,102,241,0.05)]">
        
        {/* Header segment holding registration titles */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-black tracking-tight text-white mb-1">
            Create Account
          </h1>
          <p className="text-slate-400 text-xs">
            Gain full telemetry privileges and priority tool usage.
          </p>
        </div>

        {/* Registration form context layout */}
        <form onSubmit={handleRegister} className="space-y-4">
          
          {/* Real user structural input container */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Full Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-slate-500 text-sm">
                <FiUser />
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Mercer"
                disabled={loading}
                className="w-full bg-[#0b1329] border border-slate-800 focus:border-blue-500/50 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white outline-none transition-colors disabled:opacity-50"
              />
            </div>
          </div>

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
                placeholder="alex@example.com"
                disabled={loading}
                className="w-full bg-[#0b1329] border border-slate-800 focus:border-blue-500/50 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white outline-none transition-colors disabled:opacity-50"
              />
            </div>
          </div>

          {/* Password input container with live active logic visibility toggles */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-slate-500 text-sm">
                <FiLock />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create secure code"
                disabled={loading}
                className="w-full bg-[#0b1329] border border-slate-800 focus:border-blue-500/50 rounded-xl pl-9 pr-10 py-2.5 text-xs text-white outline-none transition-colors disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
                className="absolute right-3 text-slate-500 hover:text-slate-300 text-sm focus:outline-none cursor-pointer disabled:opacity-50"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Trigger registration submission button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 mt-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Register Workspace'}
          </button>
        </form>

        {/* Decorative layout contextual separator */}
        <div className="relative flex py-4 items-center">
          <div className="grow border-t border-slate-800/60"></div>
          <span className="shrink mx-3 text-[10px] uppercase font-bold text-slate-500 tracking-wider">Or join with</span>
          <div className="grow border-t border-slate-800/60"></div>
        </div>

        {/* Real flat color Google SSO registration interface node */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          disabled={loading}
          className="w-full py-2.5 px-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-xs font-semibold text-slate-200 flex items-center justify-center space-x-2 transition-colors cursor-pointer disabled:opacity-50"
        >
          <FcGoogle className="text-base" />
          <span>Register with Google</span>
        </button>

        {/* Redirection target footer anchor node */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline font-semibold">
            Sign In Here
          </Link>
        </p>

      </div>
    </div>
  );
}