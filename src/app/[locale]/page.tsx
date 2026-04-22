import HeroSection from "@/components/sections/HeroSection";
import LogosStrip from "@/components/sections/LogosStrip";
import ProductsSection from "@/components/sections/ProductsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import CTAFinal from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosStrip />
      <ProductsSection />
      <HowItWorks />
      <CTAFinal />
    </>
  );
}
