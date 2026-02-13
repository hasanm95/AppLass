import { Navbar, Footer, FAQSchema } from "@/components/common";
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
  const faqItems = [
    {
      question: "What is AppLass?",
      answer: "AppLass is an elite software engineering studio that builds high-performance Shopify apps and Android utilities. Founded in 2019, we use mathematical optimization to create sub-2.1KB payloads that keep Core Web Vitals green. Our flagship products include ScreenVeil, FomoGen, and Mindful Guard."
    },
    {
      question: "Is AppLass software accessible?",
      answer: "Yes. All AppLass products follow WCAG 2.1 guidelines with semantic HTML and keyboard-navigable patterns. We build for the 20% of users with disabilities to create a superior experience for the 100%."
    },
    {
      question: "How does AppLass optimize for speed?",
      answer: "We minimize JavaScript execution time to the micro-second using mathematical optimization. Core utility payloads stay under 2.1KB to ensure green Core Web Vitals scores."
    },
    {
      question: "What is AppLass's privacy policy?",
      answer: "AppLass uses Zero-Telemetry Architecture. We never log personal identifiers, track user behavior, or include third-party analytics SDKs. All data stays 100% on-device for maximum user privacy."
    }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />
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
