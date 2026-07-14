'use client';

import { useState } from 'react';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fulfill all required fields.');
      return;
    }
    toast.success('Message transmitted successfully! Our team will connect shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#0b1329] text-white py-12 px-6 min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative background glow node */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main header block for page intent */}
      <div className="text-center max-w-2xl mb-8 z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Get in Touch
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Have questions about our production tools or enterprise licensing? Drop us a message.
        </p>
      </div>

      {/* Two-column contact layout structure */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl w-full z-10 items-stretch">
        
        {/* Info Column: Spans 5 columns on desktop */}
        <div className="md:col-span-5 bg-[#0f172a]/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <h3 className="text-base font-bold tracking-wide uppercase text-blue-500">
              Contact Information
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fill out the workspace form, or directly reach out via our official infrastructure channels.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-500 text-sm">
                <FiMail />
              </div>
              <div>
                <p className="text-slate-500 font-medium">Support Email</p>
                <p className="text-slate-300 font-semibold">support@easytools.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-500 text-sm">
                <FiMapPin />
              </div>
              <div>
                <p className="text-slate-500 font-medium">Headquarters</p>
                <p className="text-slate-300 font-semibold">Cox&apos;s Bazar, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-500 text-sm">
                <FiClock />
              </div>
              <div>
                <p className="text-slate-500 font-medium">Operational Hours</p>
                <p className="text-slate-300 font-semibold">Mon - Fri: 9AM - 6PM UTC</p>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-600 font-mono">
            SECURE_CHANNEL: TLS_1.3
          </div>
        </div>

        {/* Form Column: Spans 7 columns on desktop */}
        <form 
          onSubmit={handleSubmit} 
          className="md:col-span-7 bg-[#0f172a]/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-[#0b1329] border border-slate-800 focus:border-blue-500/50 rounded-lg p-2.5 text-xs text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-[#0b1329] border border-slate-800 focus:border-blue-500/50 rounded-lg p-2.5 text-xs text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Message Content
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your request details here..."
                className="w-full bg-[#0b1329] border border-slate-800 focus:border-blue-500/50 rounded-lg p-2.5 text-xs text-white outline-none transition-colors resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center space-x-2 transition-all cursor-pointer"
          >
            <FiSend />
            <span>Transmit Message</span>
          </button>
        </form>

      </div>
    </div>
  );
}