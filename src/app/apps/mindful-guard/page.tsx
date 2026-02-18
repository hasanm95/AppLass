import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { MindfulHero } from "@/components/apps/mindful-guard/MindfulHero";
import dynamic from "next/dynamic";

const LogicSection = dynamic(() =>
  import("@/components/apps/mindful-guard/LogicSection").then(
    (mod) => mod.LogicSection
  )
);
const DifferentiatorsSection = dynamic(() =>
  import("@/components/apps/mindful-guard/DifferentiatorsSection").then(
    (mod) => mod.DifferentiatorsSection
  )
);
const ComparisonMatrix = dynamic(() =>
  import("@/components/apps/mindful-guard/ComparisonMatrix").then(
    (mod) => mod.ComparisonMatrix
  )
);
const FAQSection = dynamic(() =>
  import("@/components/apps/mindful-guard/FAQSection").then(
    (mod) => mod.FAQSection
  )
);
import { MINDFUL_GUARD_SCHEMA } from "@/constants/mindful-guard-data";

export const metadata: Metadata = {
  title: "Mindful Guard: The #1 Privacy-First Focus App [Android 2026]",
  description:
    "Stop digital distractions instantly. Mindful Guard is a 100% private, offline Pomodoro and app blocker for Android. Download for free today!",
  keywords: [
    "Android app blocker",
    "dopamine detox app",
    "focus timer android",
    "privacy focus tool",
    "stop phone addiction",
    "cognitive firewall",
    "zero telemetry",
    "offline app blocker",
  ],
  openGraph: {
    title: "MindfulGuard | Reclaim Your Neural Architecture",
    description:
      "The first Android app blocker engineered for privacy absolutists. 0ms latency. 100% Offline. Zero telemetry.",
    images: ["/v1/apps/mindful-guard-feature.png"],
    url: "https://applass.com/apps/mindful-guard",
  },
};

export default function MindfulGuardPage() {
  return (
    <>
      <Navbar />
      {/* SoftwareApplication Schema for SEO - Critical for Google to display app details */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(MINDFUL_GUARD_SCHEMA),
        }}
      />
      <div className="flex-1">
        {/* Section 1: The Hero (Above the Fold) */}
        <MindfulHero />

        {/* Section 2: The Logic (The "Why" - AI Optimization) */}
        <LogicSection />

        {/* Section 3: The Differentiators (The "Moat") */}
        <DifferentiatorsSection />

        {/* Section 4: The Comparison Matrix (Conversion Driver) */}
        <ComparisonMatrix />

        {/* Section 5: Engineered FAQ (AI Snippet Bait) */}
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}
