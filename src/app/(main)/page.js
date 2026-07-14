import Hero from "@/components/home/Hero";


// Page Specific SEO Metadata definition block
export const metadata = {
  title: "Home | Easy Tools - One tool, every solution",
  description: "Explore 100+ production-grade utility tools built directly into your browser.",
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}