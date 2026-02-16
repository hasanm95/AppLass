import { Navbar, Footer, FAQRegistrySection } from "@/components/common";
import {
  Hero,
  SocialProof,
  ProductShowcase,
  FoundersMoat,
  SolutionsSection,
  AnswerNuggets,
} from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applass: Productivity & Privacy Solutions for the 2026 Digital World",
  description:
    "Home of Mindful Guard and ScreenVeil. Discover advanced Android focus tools and Shopify apps designed to protect your privacy and boost ROI.",
};

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <ProductShowcase />
      <FoundersMoat />
      <SolutionsSection />
      <AnswerNuggets />
      <FAQRegistrySection
        registryKey="HOME"
        variant="grid"
        className="py-24 bg-slate-50/30"
      />
      <Footer />
    </>
  );
}
