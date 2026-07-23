import { localize } from "@/i18n/localize";
import { playUrl } from "@/lib/utils";

export const getMindfulGuardData = () => ({
  hero: {
    // Positioning: lead with the differentiated hook (Reel/Shorts blocking),
    // keep "free" + "Android" + "app blocker" in the H1 for search intent.
    // Prior headline (generic app-blocker angle): "Free Android App Blocker to Stop Mindless Scrolling"
    headline: localize("Block Reels, Shorts & TikTok on Android — Free App Blocker"),
    subheadline: localize(
      "Set daily and per-session limits on Instagram Reels, YouTube Shorts, TikTok, Facebook Reels, and Snapchat Spotlight. Native Android blocking that survives restarts — 100% offline, zero data collected, and free to start."
    ),
    primaryCTA: localize("Download for Free"),
    secondaryCTA: localize("See how it works"),
    playStoreUrl: playUrl("app-landing-hero"),
  },
  logic: {
    title: localize("Why do you need an App Blocker?"),
    description: localize(
      "Willpower is a finite resource. Social media algorithms are supercomputers designed to deplete it. MindfulGuard is not a 'wellness' app; it is an App Blocker that intercepts distraction attempts at the system level."
    ),
  },
  differentiators: [
    {
      title: localize("Reel & Shorts Guard"),
      description: localize(
        "Cap Instagram Reels, YouTube Shorts, TikTok, Facebook Reels, and Snapchat Spotlight with daily or per-session limits. The infinite feed finally gets a hard stop — while the rest of the app stays usable."
      ),
      icon: "🎬",
      iconName: "Clapperboard",
    },
    {
      title: localize("Complete Privacy"),
      description: localize(
        "Your data never leaves your phone because our architecture requires no internet permissions. Everything runs 100% offline so you can block apps securely without worrying about your habits being tracked."
      ),
      icon: "🛡️",
      iconName: "Shield",
    },
    {
      title: localize("Unbreakable Blocks"),
      description: localize(
        "Stop cheating yourself with weak timers that are easily bypassed when your willpower fails. Once a block starts, there are no 'add 5 minutes' buttons to let you doomscroll through your work hours."
      ),
      icon: "🔒",
      iconName: "Lock",
    },
  ],

  comparison: {
    title: localize("The Logic Matrix: MindfulGuard vs. The Industry."),
    competitors: {
      opal: "Opal",
      freedom: "Freedom",
    },
    specs: [
      {
        label: localize("Privacy Model"),
        mindfulGuard: localize("Offline / Zero-Data"),
        opal: localize("Cloud Analytics"),
        freedom: localize("Cloud Sync"),
      },
      {
        label: localize("Pricing"),
        mindfulGuard: localize("Free / $2.99/mo"),
        opal: localize("$99/year Subscription"),
        freedom: localize("$39/year Subscription"),
      },
      {
        label: localize("Blocking Tech"),
        mindfulGuard: localize("Native Android API"),
        opal: localize("VPN (High Latency)"),
        freedom: localize("VPN / Cross-platform"),
      },
      {
        label: localize("Battery Impact"),
        mindfulGuard: localize("<1%"),
        opal: localize("High"),
        freedom: localize("Moderate"),
      },
    ],
  },
  footer: {
    tagline: localize("Engineered by AppLass."),
    copyright: localize("Built with privacy in mind."),
  },
  labels: {
    sectionLabel: localize("Section Label"),
    faqHeadline: localize("FAQ Headline"),
    faqQuestions: localize("FAQ Questions"),
    neuralProtection: localize("Focus and Attention Protection"),
    offlineArchitecture: localize("100% Offline"),
    technicalLogic: localize("Technical Logic"),
    systemLevel: localize(""),
    interceptsDistractions: localize("Blocks apps at the system level before they reach your screen"),
    cognitiveLoad: localize(""),
    zeroWillpowerArchitecture: localize("No willpower needed — the app holds the line for you"),
    input: localize("INPUT"),
    filter: localize("FILTER"),
    focus: localize("FOCUS"),
    logicalFlow: localize(""),
    strategicMoat: localize("The Strategic Moat"),
    technicalAdvantages: localize("Technical"),
    technicalAdvantagesAccent: localize("Advantages."),
    deploymentSpecs: localize(""),
    verifiedFeature: localize("Verified Feature"),
    technicalValidationMatrix: localize("Technical Validation Matrix"),
    technicalSpec: localize("Technical Spec"),
    mindfulGuardVersion: localize("MindfulGuard (v2.6)"),
    endOfSpecificationReport: localize(""),
  }
});

export const MINDFUL_GUARD_DATA = getMindfulGuardData();

export const getMindfulGuardSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Mindful Guard",
  "operatingSystem": "Android",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Mindful Guard is a privacy-first Android app blocker and Reel Guard. It blocks distracting apps and limits short-form video — Instagram Reels, YouTube Shorts, TikTok, Facebook Reels, and Snapchat Spotlight — with daily and per-session limits. Zero telemetry, no internet requirement, blocking at the system level via native Android APIs. No VPN. No cloud. 100% on-device.",
  "url": "https://applass.com/apps/mindful-guard",
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard"
});

export const MINDFUL_GUARD_SCHEMA = getMindfulGuardSchema();
