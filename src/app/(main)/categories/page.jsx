'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BsQrCode } from 'react-icons/bs';
import { 
  FiImage, FiFileText, FiLock, 
  FiCpu, FiAlignLeft, FiLayers, FiArrowRight 
} from 'react-icons/fi';

export default function Categories() {
  // Setup persistent active state tracking initialized to the first tab index
  const [activeTab, setActiveTab] = useState('image-tools');

  // Centralized matrix structure mapping all production toolsets
  const categoriesData = [
    {
      id: 'image-tools',
      title: 'Image Tools',
      icon: <FiImage />,
      tools: [
        { name: 'Background Remover', desc: 'Remove image backgrounds automatically using AI edge processing.', href: '/tools/bg-remover' },
        { name: 'Rounded Shape Crop', desc: 'Crop profiles or images into perfect responsive circle sandboxes.', href: '/tools/circle-crop' },
        { name: 'Image Resizer', desc: 'Scale image aspect ratios using absolute pixels or scale percentages.', href: '/tools/image-resizer' },
        { name: 'Image Compressor', desc: 'Optimize JPG, PNG, and WEBP payloads without visual data loss.', href: '/tools/image-compressor' },
        { name: 'Convert JPG ↔ PNG', desc: 'Transform images bi-directionally across standard formats instantly.', href: '/tools/image-converter' },
      ]
    },
    {
      id: 'pdf-tools',
      title: 'PDF Tools',
      icon: <FiFileText />,
      tools: [
        { name: 'Merge PDF', desc: 'Combine multiple documents into a single consolidated PDF catalog.', href: '/tools/pdf-merge' },
        { name: 'Split PDF', desc: 'Extract distinct individual sheets out of complex target files securely.', href: '/tools/pdf-split' },
        { name: 'Compress PDF', desc: 'Downsize portable document weights for swift secure transmissions.', href: '/tools/pdf-compress' },
        { name: 'Convert PDF', desc: 'Export PDF structures securely into editable office extensions.', href: '/tools/pdf-convert' },
      ]
    },
    {
      id: 'qr-tools',
      title: 'QR Tools',
      icon: <BsQrCode />,
      tools: [
        { name: 'QR Generator', desc: 'Compile custom embedded codes with branded dynamic analytics links.', href: '/tools/qr-generator' },
        { name: 'QR Scanner', desc: 'Parse data matrix payloads via browser hardware cameras cleanly.', href: '/tools/qr-scanner' },
      ]
    },
    {
      id: 'password-tools',
      title: 'Password Tools',
      icon: <FiLock />,
      tools: [
        { name: 'Password Generator', desc: 'Construct highly entropy-resilient secure operational cryptography keys.', href: '/tools/password-generator' },
        { name: 'Password Checker', desc: 'Evaluate active passphrases against international data leak registries.', href: '/tools/password-checker' },
      ]
    },
    {
      id: 'developer-tools',
      title: 'Developer Tools',
      icon: <FiCpu />,
      tools: [
        { name: 'JSON Formatter', desc: 'Validate, prettify, and parse raw string structures inside nested trees.', href: '/tools/json-formatter' },
        { name: 'JWT Decoder', desc: 'Deconstruct claim authorization keys to inspect headers and payloads.', href: '/tools/jwt-decoder' },
        { name: 'UUID Generator', desc: 'Generate high-entropy RFC compliant cryptographically unique tokens.', href: '/tools/uuid-generator' },
        { name: 'Hash Generator', desc: 'Compute client-side MD5, SHA-256, and SHA-512 cryptographic digests.', href: '/tools/hash-generator' },
        { name: 'Regex Tester', desc: 'Debug programmatic syntax parameters against specific validation arrays.', href: '/tools/regex-tester' },
      ]
    },
    {
      id: 'text-tools',
      title: 'Text Tools',
      icon: <FiAlignLeft />,
      tools: [
        { name: 'Word Counter', desc: 'Track real-time macro lexical metric configurations on string streams.', href: '/tools/word-counter' },
        { name: 'Character Counter', desc: 'Audit precise index quantities alongside dense byte consumption rules.', href: '/tools/character-counter' },
        { name: 'Case Converter', desc: 'Normalize string layouts across upper, lower, title, and camel formats.', href: '/tools/case-converter' },
      ]
    },
    {
      id: 'utility-tools',
      title: 'Utility Tools',
      icon: <FiLayers />,
      tools: [
        { name: 'BMI Calculator', desc: 'Compute standard body mass biometric statistics via scalar metrics.', href: '/tools/bmi-calculator' },
        { name: 'Age Calculator', desc: 'Process exact absolute time spans down to intervals of seconds.', href: '/tools/age-calculator' },
        { name: 'Percentage Calculator', desc: 'Resolve complex financial margin dynamics and fractional offsets.', href: '/tools/percentage-calculator' },
        { name: 'EMI Calculator', desc: 'Forecast structural loan principal amortizations tables.', href: '/tools/emi-calculator' },
        { name: 'Currency Converter', desc: 'Calculate cross-border exchange weights dynamically.', href: '/tools/currency-converter' },
      ]
    }
  ];

  // Lookup data matching current active view state identifier
  const currentCategory = categoriesData.find(cat => cat.id === activeTab);

  return (
    <div className="bg-[#0b1329] text-white min-h-screen py-10 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background ambient blurring structure */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* High density downsized layout container to match sharp edges */}
      <div className="max-w-4xl w-full mx-auto">
        
        {/* Compact Title Workspace Header Block */}
        <div className="pb-4 mb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
            Complete Workspace Directory
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
            Access our enterprise collective suite of client-side operations grouped by architectural context.
          </p>
        </div>

        {/* Optimized wrapping tab control hub avoiding dynamic clip overflows */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950/60 p-1.5 border border-slate-800/80 rounded-xl mb-6 shadow-inner">
          {categoriesData.map((category) => {
            const isSelected = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                <span className={`text-xs flex items-center ${isSelected ? 'text-white' : 'text-blue-500'}`}>
                  {category.icon}
                </span>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Grid Matrix displaying chosen active tab layout stack */}
        {currentCategory && (
          <div className="animate-fade-in duration-200">
            
            {/* Structural specific group layout header node */}
            <div className="flex items-center space-x-2 pb-2.5 mb-4 border-b border-slate-800/40">
              <span className="text-blue-500 text-base flex items-center">{currentCategory.icon}</span>
              <h2 className="text-xs font-bold tracking-wide text-white uppercase">
                {currentCategory.title}
              </h2>
              <span className="text-[10px] bg-slate-800/60 text-slate-400 px-1.5 py-0.5 rounded-md font-mono">
                {currentCategory.tools.length} Modules
              </span>
            </div>

            {/* Sub-grid framework holding the functional compressed cards array */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentCategory.tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-[#0f172a]/60 border border-slate-800/60 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700/80 hover:bg-[#0f172a]/90 transition-all duration-200 group"
                >
                  <div className="mb-4">
                    <h3 className="text-xs font-bold text-slate-200 group-hover:text-white mb-1.5 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-[10.5px] text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors">
                      {tool.desc}
                    </p>
                  </div>

                  <Link
                    href={tool.href}
                    className="pt-2.5 border-t border-slate-800/40 flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-500 group-hover:text-blue-400 transition-colors"
                  >
                    <span>Launch Utility</span>
                    <FiArrowRight className="text-xs transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}