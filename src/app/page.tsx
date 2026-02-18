import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  SocialProof,
  ProductShowcase,
  FoundersMoat,
  SolutionsSection,
  AnswerNuggets,
} from "@/components/home";
import { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Applass: Productivity & Privacy Solutions for the 2026 Digital World",
  description:
    "Home of Mindful Guard and ScreenVeil. Discover advanced Android focus tools and Shopify apps designed to protect your privacy and boost ROI.",
};

export default async function Home() {
  const dict = await getDictionary("en");

  return (
    <>
      <Navbar translations={dict.nav} />
      <Hero translations={dict.home.hero} />
      <SocialProof translations={dict.home.socialProof} />
      <ProductShowcase translations={dict.home.productShowcase} />
      <FoundersMoat translations={dict.home.foundersMoat} />
      <SolutionsSection translations={dict.home.solutions} />
      <AnswerNuggets translations={dict.home.answerNuggets} />
      <Footer translations={dict.footer} />
    </>
  );
}
