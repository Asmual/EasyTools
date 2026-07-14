'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg bg-slate-800/40 border border-slate-700/50 animate-pulse" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 shadow-sm transition-all focus:outline-none"
      aria-label="Toggle Global Theme Mode"
    >
      {theme === 'dark' ? (
        <FiSun className="text-lg transition-transform hover:rotate-45" />
      ) : (
        <FiMoon className="text-lg transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}