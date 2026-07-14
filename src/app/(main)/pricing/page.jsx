'use client';

import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-[#0b1329] text-white py-12 px-6 min-h-[90vh] flex flex-col items-center justify-center">
      
      {/* Reduced padding header container holding typography layers */}
      <div className="text-center max-w-2xl mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Simple, Predictable Pricing
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
          Unlock unlimited files compression, deep AI upscales, and advanced cryptographic JWT generators.
        </p>
      </div>

      {/* Optimized compact toggle control module for billing cycles */}
      <div className="inline-flex bg-slate-950/60 p-1 rounded-xl border border-slate-800/80 mb-10 shadow-inner">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            !isYearly
              ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.3)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Monthly Billing
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            isYearly
              ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.3)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Yearly (Save 20%)
        </button>
      </div>

      {/* Downsized high-density grid for pricing cards layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full items-stretch">
        
        {/* Card 1: Standard Sandbox Plan */}
        <div className="bg-[#0f172a]/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between transition-all hover:-translate-y-0.5 duration-200">
          <div>
            <h3 className="text-base font-bold text-slate-200 mb-1">Standard Sandbox</h3>
            <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
              Essential client-side tools with no account requirements.
            </p>
            <div className="text-2xl font-black text-white mb-5">Free</div>
            
            <ul className="space-y-2.5 text-xs text-slate-400 mb-6">
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>All standard text calculators & converters</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Basic image resizers & crops</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>QR Generator (standard URL)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>100% offline data encryption</span>
              </li>
            </ul>
          </div>
          
          <button className="w-full py-2.5 px-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-colors">
            Start Free Sandbox
          </button>
        </div>

        {/* Card 2: Developer Pro Plan (Highlighted Recommended Plan) */}
        <div className="relative bg-[#0f172a]/90 border-2 border-blue-500/80 rounded-xl p-6 flex flex-col justify-between shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all hover:-translate-y-0.5 duration-200">
          
          {/* Compressed float layout tag context layer */}
          <span className="absolute -top-2.5 right-4 bg-blue-600 text-[9px] font-black uppercase tracking-widest text-white px-2.5 py-0.5 rounded shadow-[0_0_8px_rgba(59,130,246,0.3)]">
            Recommended
          </span>
          
          <div>
            <h3 className="text-base font-bold text-white mb-1">Developer Pro</h3>
            <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
              Advanced batch files compiling and cryptographic toolkits.
            </p>
            <div className="flex items-baseline text-white mb-5">
              <span className="text-3xl font-black">${isYearly ? '7' : '9'}</span>
              <span className="text-[11px] text-slate-500 font-medium ml-0.5">/mo</span>
            </div>
            
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Everything in Standard tier</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Batch PNG/JPG conversion templates</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Full JWT Encrypter & validator</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Custom QR Code branding with logos</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Priority cloud PDF merging</span>
              </li>
            </ul>
          </div>
          
          <button className="w-full py-2.5 px-3 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
            Upgrade to Pro
          </button>
        </div>

        {/* Card 3: Enterprise Apex Plan */}
        <div className="bg-[#0f172a]/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between transition-all hover:-translate-y-0.5 duration-200">
          <div>
            <h3 className="text-base font-bold text-slate-200 mb-1">Enterprise Apex</h3>
            <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
              Dedicated integrations, API logs access, and corporate SAML SSO.
            </p>
            <div className="text-2xl font-black text-white mb-5">Custom</div>
            
            <ul className="space-y-2.5 text-xs text-slate-400 mb-6">
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Everything in Developer Pro</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Dedicated public API endpoints</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>Custom user management telemetry</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>SAML Single-Sign On (SSO)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FiCheck className="text-blue-500 mt-0.5 shrink-0 text-sm" />
                <span>24/7 Priority support SLA</span>
              </li>
            </ul>
          </div>
          
          <button className="w-full py-2.5 px-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-colors">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}