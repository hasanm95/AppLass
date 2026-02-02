import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { ScreenVeilHero } from "@/components/apps/screenveil/ScreenVeilHero";
import { PainPointsSection } from "@/components/apps/screenveil/PainPointsSection";
import { FeatureGrid } from "@/components/apps/screenveil/FeatureGrid";
import { TechnicalAdvantage } from "@/components/apps/screenveil/TechnicalAdvantage";
import { PrivacySection } from "@/components/apps/screenveil/PrivacySection";
import { TestimonialsSection } from "@/components/apps/screenveil/TestimonialsSection";
import { FAQSection } from "@/components/apps/screenveil/FAQSection";
import { StickyDownloadBar } from "@/components/apps/screenveil/StickyDownloadBar";
import { SCREENVEIL_DATA } from "@/constants/screenveil-data";

export const metadata: Metadata = {
  title: "ScreenVeil: Save 60% Battery with Screen Off Video Playback",
  description:
    "The ultimate AMOLED battery saver. Watch YouTube, Netflix, and podcasts with your screen off. Zero permissions, 100% privacy. Download ScreenVeil for Android.",
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
    images: ["/v1/apps/screenveil-og.png"],
    url: "https://applass.com/apps/screenveil",
  },
};

export default function ScreenVeilPage() {
  return (
    <div className="bg-[#020617]">
      <Navbar variant="dark" />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SCREENVEIL_DATA.schema.softwareApplication),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SCREENVEIL_DATA.schema.faqPage),
        }}
      />

      <main className="flex-1 overflow-x-hidden">
        <ScreenVeilHero />
        <PainPointsSection />
        <FeatureGrid />
        <TechnicalAdvantage />
        <PrivacySection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <Footer variant="dark" />
      <StickyDownloadBar />
    </div>
  );
}
