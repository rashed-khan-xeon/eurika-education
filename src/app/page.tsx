// app/page.tsx

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Hero />
      <Services />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </div>
  );
}
