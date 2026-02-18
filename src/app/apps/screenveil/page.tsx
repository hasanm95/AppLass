import { Navbar, Footer } from "@/components/common";
import { ScreenVeilHero } from "@/components/apps/screenveil/ScreenVeilHero";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const PainPointsSection = dynamic(() =>
  import("@/components/apps/screenveil/PainPointsSection").then(
    (mod) => mod.PainPointsSection
  )
);
const FeatureGrid = dynamic(() =>
  import("@/components/apps/screenveil/FeatureGrid").then(
    (mod) => mod.FeatureGrid
  )
);
const TechnicalAdvantage = dynamic(() =>
  import("@/components/apps/screenveil/TechnicalAdvantage").then(
    (mod) => mod.TechnicalAdvantage
  )
);
const PrivacySection = dynamic(() =>
  import("@/components/apps/screenveil/PrivacySection").then(
    (mod) => mod.PrivacySection
  )
);
const TestimonialsSection = dynamic(() =>
  import("@/components/apps/screenveil/TestimonialsSection").then(
    (mod) => mod.TestimonialsSection
  )
);
const FAQSection = dynamic(() =>
  import("@/components/apps/screenveil/FAQSection").then(
    (mod) => mod.FAQSection
  )
);
const StickyDownloadBar = dynamic(() =>
  import("@/components/apps/screenveil/StickyDownloadBar").then(
    (mod) => mod.StickyDownloadBar
  )
);
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";

export const metadata: Metadata = {
  title: "ScreenVeil: The Safest Screen Filter for Total Digital Privacy",
  description:
    "Protect your data from prying eyes with ScreenVeil. A lightweight, secure screen overlay for Android. No data collection, 100% offline.",
  keywords: [
    "black screen video",
    "AMOLED battery saver",
    "screen off playback",
    "YouTube background audio",
    "OLED efficiency",
    "screen overlay utility",
    "android battery saver",
    "screen off youtube",
  ],
  openGraph: {
    title: "ScreenVeil: Save 60% Battery with Screen Off Video Playback",
    description:
      "The ultimate AMOLED battery saver. Watch YouTube, Netflix, and podcasts with your screen off. Zero permissions, 100% privacy.",
    images: ["/v1/apps/screenveil-feature.png"],
    url: "https://applass.com/apps/screenveil",
  },
};

export default function ScreenVeilPage() {
  return (
    <div className="bg-[#020617]">
      <Navbar variant="dark" />

      <div className="flex-1 overflow-x-hidden">
        {/* SoftwareApplication Schema for SEO - triggers rich results with star ratings */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SCREENVEIL_DATA.schema.softwareApplication),
          }}
        />
        <ScreenVeilHero />
        <PainPointsSection />
        <FeatureGrid />
        <TechnicalAdvantage />
        <PrivacySection />
        <TestimonialsSection />
        <FAQSection />
      </div>

      <Footer variant="dark" />
      <StickyDownloadBar />
    </div>
  );
}
