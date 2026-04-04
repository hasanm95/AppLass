import { localize } from "@/i18n/localize";

export const getMindfulGuardData = () => ({
  hero: {
    headline: localize("Block Distracting Apps on Android. No Tracking. No Internet. No Excuses."),
    subheadline: localize(
      "Mindful Guard is the privacy-first Android app blocker built for people who refuse to trade their data for focus. 100% offline. Zero telemetry. Strict Mode that actually holds."
    ),
    primaryCTA: localize("Download Free on Google Play"),
    secondaryCTA: localize("View the Logic"),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard",
  },
  logic: {
    title: localize("Why do you need an App Blocker?"),
    description: localize(
      "Willpower is a finite resource. Social media algorithms are supercomputers designed to deplete it. MindfulGuard is not a 'wellness' app; it is an App Blocker that intercepts distraction attempts at the system level."
    ),
  },
  differentiators: [
    {
      title: localize("Zero-Telemetry"),
      description: localize(
        "We don't know what you block. Your data never leaves your device. Unlike VPN-based blockers, we run locally."
      ),
      icon: "🛡️",
      iconName: "Shield",
    },
    {
      title: localize("Native Efficiency"),
      description: localize(
        "Built for Android's specific battery protocols. Won't drain your battery or get killed by MIUI/OneUI optimizers."
      ),
      icon: "⚡",
      iconName: "Zap",
    },
    {
      title: localize("Strict Mode"),
      description: localize(
        "No bypass. No '5 more minutes.' When the wall is up, it stays up until the timer hits zero."
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
        mindfulGuard: localize("Fair / Transparent"),
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
  "description": "Mindful Guard is a privacy-first Android app blocker with zero telemetry and no internet requirement. Blocks distracting apps at the system level using native Android APIs. No VPN. No cloud. 100% on-device.",
  "url": "https://applass.com/apps/mindful-guard",
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard"
});

export const MINDFUL_GUARD_SCHEMA = getMindfulGuardSchema();
