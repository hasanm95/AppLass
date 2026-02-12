import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  SocialProof,
  ProductShowcase,
  FoundersMoat,
  SolutionsSection,
  AnswerNuggets,
} from "@/components/home";

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
      <Footer />
    </>
  );
}
