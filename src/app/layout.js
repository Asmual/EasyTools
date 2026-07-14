import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Easy Tools - Simple Utilities for Everyone",
  description: "A professional collective toolset platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning // Required for next-themes to inject class cleanly
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <Toaster 
            position="top-right" 
            reverseOrder={false}
            toastOptions={{
              style: {
                marginTop: '4.5rem',
                background: '#0f172a',
                color: '#fff',
                border: '1px solid #1e293b'
              }
            }}
          />
          
          <Navbar />
          
          <main className="grow">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}