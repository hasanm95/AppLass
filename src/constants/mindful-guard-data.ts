import { localize } from "@/i18n/localize";

export const getMindfulGuardData = () => ({
  hero: {
    headline: localize("Reclaim Your Neural Architecture."),
    subheadline: localize(
      "The first Android app blocker engineered for privacy absolutists. 0ms latency. 100% Offline. Zero telemetry."
    ),
    primaryCTA: localize("Deploy to Android"),
    secondaryCTA: localize("View the Logic"),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard",
  },
  logic: {
    title: localize("Why do you need a Cognitive Firewall?"),
    description: localize(
      "Willpower is a finite resource. Social media algorithms are supercomputers designed to deplete it. MindfulGuard is not a 'wellness' app; it is a Cognitive Firewall that intercepts distraction attempts at the system level."
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
    neuralProtection: localize("Neural Architecture Protection"),
    offlineArchitecture: localize("[ Offline Architecture Enabled ]"),
    technicalLogic: localize("Technical Logic"),
    systemLevel: localize("[ System Level ]"),
    interceptsDistractions: localize("Intercepts Distractions via Protocol Level"),
    cognitiveLoad: localize("[ Cognitive Load ]"),
    zeroWillpowerArchitecture: localize("Zero Willpower Depletion Architecture"),
    input: localize("INPUT"),
    filter: localize("FILTER"),
    focus: localize("FOCUS"),
    logicalFlow: localize("Logical Flow: Interception Pipeline v2.6"),
    strategicMoat: localize("The Strategic Moat"),
    technicalAdvantages: localize("Technical"),
    technicalAdvantagesAccent: localize("Advantages."),
    deploymentSpecs: localize("[ Deployment Specs v4.0 ]"),
    verifiedFeature: localize("Verified Feature"),
    technicalValidationMatrix: localize("Technical Validation Matrix"),
    technicalSpec: localize("Technical Spec"),
    mindfulGuardVersion: localize("MindfulGuard (v2.6)"),
    endOfSpecificationReport: localize("[ End of Specification Report - Protocol 88-Alpha ]"),
  }
});

export const MINDFUL_GUARD_DATA = getMindfulGuardData();

export const getMindfulGuardSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MindfulGuard",
  operatingSystem: "Android",
  applicationCategory: "ProductivityApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
  },
  description: localize(
    "A privacy-first Android app blocker that uses strict logic to prevent digital distractions without collecting user data."
  ),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Hasan M.",
      },
      reviewBody: localize(
        "The only focus app that actually respects my privacy. Zero telemetry means total peace of mind."
      ),
    },
  ],
  featureList: localize(
    "Zero-Telemetry Privacy, Offline Architecture, Strict Mode, Battery Optimization Exemption"
  ),
  image: "https://applass.com/mindful-guard-feature.png",
  author: {
    "@type": "Organization",
    name: localize("AppLass"),
    url: "https://applass.com",
  },
  downloadUrl: "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard",
  screenshot: "https://applass.com/mindful-guard-feature.png",
});

export const MINDFUL_GUARD_SCHEMA = getMindfulGuardSchema();
