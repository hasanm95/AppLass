import { Navbar, Footer } from "@/components/common";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home";

// New components per 2026 Design Blueprint
const SocialProof = dynamic(() =>
  import("@/components/home").then((mod) => mod.SocialProof)
);
const ProductShowcase = dynamic(() =>
  import("@/components/home").then((mod) => mod.ProductShowcase)
);
const FoundersMoat = dynamic(() =>
  import("@/components/home").then((mod) => mod.FoundersMoat)
);
const SolutionsSection = dynamic(() =>
  import("@/components/home").then((mod) => mod.SolutionsSection)
);
const AnswerNuggets = dynamic(() =>
  import("@/components/home").then((mod) => mod.AnswerNuggets)
);

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
