import { Navbar, Footer, FAQRegistrySection } from "@/components/common";
import { FomoGenHero } from "@/components/apps/fomogen/FomoGenHero";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const SpeedBenefitSection = dynamic(() =>
  import("@/components/apps/fomogen/SpeedBenefitSection").then(
    (mod) => mod.SpeedBenefitSection
  )
);
const CoreFeatures = dynamic(() =>
  import("@/components/apps/fomogen/CoreFeatures").then(
    (mod) => mod.CoreFeatures
  )
);
const TestimonialsSection = dynamic(() =>
  import("@/components/apps/fomogen/TestimonialsSection").then(
    (mod) => mod.TestimonialsSection
  )
);
const PricingSection = dynamic(() =>
  import("@/components/apps/fomogen/PricingSection").then(
    (mod) => mod.PricingSection
  )
);
const FomoGenCTA = dynamic(() =>
  import("@/components/apps/fomogen/FomoGenCTA").then((mod) => mod.FomoGenCTA)
);

export const metadata: Metadata = {
  title: "FOMO Gen | #1 Free Social Proof, Urgency & Trust App for Shopify",
  description:
    "Skyrocket your Shopify sales with FOMO Gen. The all-in-one app for Sales Popups, Stock Countdowns, Sticky Cart, and Trust Badges. Install for Free today!",
  keywords: [
    "shopify social proof",
    "sales pop",
    "countdown timer",
    "stock alert",
    "trust badges",
    "sticky cart",
  ],
  openGraph: {
    title: "Boost Your Shopify Sales with FOMO Gen",
    description:
      "The all-in-one app for Sales Popups, Stock Countdowns, Sticky Cart, and Trust Badges. Install for Free today!",
    images: ["/v1/apps/fomogen-feature.png"],
    url: "https://applass.com/apps/fomogen",
  },
};

export default function FomogenPage() {

  return (
    <div className="bg-white">
      <Navbar />

      {/* SoftwareApplication & Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FOMO Gen",
              operatingSystem: "Shopify",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                priceValidUntil: "2026-12-31",
                availability: "https://schema.org/InStock",
              },
              featureList:
                "Social Proof Notifications, Stock Countdown Timer, Sticky Add-to-Cart, Free Shipping Bar",
              screenshot: "https://applass.com/v1/apps/fomogen/comparison-hero.png",
              image: "https://applass.com/v1/apps/fomogen-feature.png",
              description:
                "FOMO Gen is an all-in-one Shopify app for social proof, urgency, and trust signals.",
              author: {
                "@type": "Organization",
                name: "Applass",
                url: "https://applass.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "FOMO Gen",
              description:
                "All-in-one Shopify app for Sales Popups, Stock Countdowns, Sticky Cart, and Trust Badges.",
              brand: {
                "@type": "Brand",
                name: "AppLass",
              },
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
                priceValidUntil: "2026-12-31",
                availability: "https://schema.org/InStock",
                url: "https://applass.com/apps/fomogen",
              },
            },
          ]),
        }}
      />

      <div className="flex-1 overflow-x-hidden">
        <FomoGenHero />
        <SpeedBenefitSection />
        <CoreFeatures />
        <TestimonialsSection />
        <PricingSection />
        <FomoGenCTA />
        <FAQRegistrySection registryKey="FOMOGEN" variant="centered" className="bg-white py-24" />
      </div>

      <Footer />
    </div>
  );
}
