import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingPlans from "@/components/sections/pricing/PricingPlans";
import PacksBlock from "@/components/sections/pricing/PacksBlock";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import PricingCTA from "@/components/sections/pricing/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PacksBlock />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}
