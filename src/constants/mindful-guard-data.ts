import { localize } from "@/i18n/localize";

export const getMindfulGuardData = () => ({
  hero: {
    // TASK 4A: Hero/CTA Options
    // Option 1 (Live): Free Android App Blocker to Stop Mindless Scrolling
    // Option 2: Reclaim Your Attention with Mindful Guard's Unbreakable Blocking
    // Option 3: The Privacy-First App Blocker for Android Deep Work
    headline: localize("Free Android App Blocker to Stop Mindless Scrolling"),
    subheadline: localize(
      "Get your time back with a completely free, Android-native focus app. Unlike expensive $99/year alternatives, it collects zero data and works entirely offline."
    ),
    primaryCTA: localize("Download for Free"),
    secondaryCTA: localize("See how it works"),
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
      title: localize("Complete Privacy"),
      description: localize(
        "Your data never leaves your phone because our architecture requires no internet permissions. Everything runs 100% offline so you can block apps securely without worrying about your habits being tracked."
      ),
      icon: "🛡️",
      iconName: "Shield",
    },
    {
      title: localize("Saves Battery Life"),
      description: localize(
        "Built specifically for Android to work without a battery-draining VPN or background network tunnel. It runs quietly in the background and respects system sleep cycles to keep your battery healthy all day."
      ),
      icon: "⚡",
      iconName: "Zap",
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
  "description": "Mindful Guard is a privacy-first Android app blocker with zero telemetry and no internet requirement. Blocks distracting apps at the system level using native Android APIs. No VPN. No cloud. 100% on-device.",
  "url": "https://applass.com/apps/mindful-guard",
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard"
});

export const MINDFUL_GUARD_SCHEMA = getMindfulGuardSchema();
