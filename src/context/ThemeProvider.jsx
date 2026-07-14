'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
  // Wrapping the application context within next-themes manager
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={true}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}