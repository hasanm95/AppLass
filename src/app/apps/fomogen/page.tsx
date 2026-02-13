import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { FomoGenHero } from "@/components/apps/fomogen/FomoGenHero";
import dynamic from "next/dynamic";

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

      {/* Structured SEO Script */}
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
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "12",
                bestRating: "5",
                worstRating: "1",
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
                availability: "https://schema.org/InStock",
                url: "https://applass.com/apps/fomogen",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "12",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is FomoGen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FomoGen is an elite social proof tool for Shopify merchants with a <2.1KB payload that boosts engagement by +23% without performance debt. It is WCAG 2.1 compliant with real-time nudges."
                  }
                },
                {
                   "@type": "Question",
                   "name": "Is FomoGen free?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, FomoGen offers a powerful free plan for Shopify merchants to boost engagement with urgency and trust signals."
                   }
                }
              ]
            }
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
      </div>

      <Footer />
    </div>
  );
}
