import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  SocialProof,
  ProductShowcase,
  FoundersMoat,
  SolutionsSection,
  AnswerNuggets,
} from "@/components/home";

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
