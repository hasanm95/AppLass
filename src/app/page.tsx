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
  const dictionary = await getDictionary("en");

  return (
    <>
      <Navbar translations={dictionary.nav} currentLocale="en" />
      <Hero translations={dictionary.home.hero} />
      <SocialProof translations={dictionary.home.socialProof} />
      <ProductShowcase translations={dictionary.home.productShowcase} />
      <FoundersMoat translations={dictionary.home.foundersMoat} />
      <SolutionsSection translations={dictionary.home.solutions} />
      <AnswerNuggets translations={dictionary.home.answerNuggets} />
      <Footer translations={dictionary.footer} />
    </>
  );
}
