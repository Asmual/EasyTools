import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: 'Authentication | EasyTools',
  description: 'Secure access gateway for EasyTools workspace environment.',
};

export default function AuthLayout({ children }) {
  return (
    <div className="bg-[#0b1329] min-h-screen flex flex-col justify-between">
      
      {/* Dynamic global header navigation module */}
      <Navbar />

      {/* Main functional viewport block injecting auth credentials */}
      <main className="grow flex items-center justify-center py-12 px-4 relative z-10">
        
        {/* Subtle background ambient blur matrix specific to credentials view */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        {children}
      </main>

      {/* Dynamic global base footer layout element */}
      <Footer />

    </div>
  );
}