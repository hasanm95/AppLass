import { Navbar, Footer } from "@/components/common";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home";

const FoundersMoat = dynamic(() =>
  import("@/components/home").then((mod) => mod.FoundersMoat)
);
const FomoGenFeatured = dynamic(() =>
  import("@/components/home").then((mod) => mod.FomoGenFeatured)
);
const ProductGrid = dynamic(() =>
  import("@/components/home").then((mod) => mod.ProductGrid)
);
const SolutionsSection = dynamic(() =>
  import("@/components/home").then((mod) => mod.SolutionsSection)
);
const TechnicalFAQ = dynamic(() =>
  import("@/components/home").then((mod) => mod.TechnicalFAQ)
);

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoundersMoat />
      <FomoGenFeatured />
      <ProductGrid />
      <SolutionsSection />
      <TechnicalFAQ />
      <Footer />
    </>
  );
}
