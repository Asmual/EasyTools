import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Structural global application header rendering layer */}
      <Navbar />
      
      {/* Dynamic core route context container platform */}
      <main className="grow">
        {children}
      </main>
      
      {/* Structural global application footer rendering layer */}
      <Footer />
    </div>
  );
}