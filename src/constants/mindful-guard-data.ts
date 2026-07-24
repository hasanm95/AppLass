import { localize } from "@/i18n/localize";
import { playUrl } from "@/lib/utils";

export const getMindfulGuardData = () => ({
  hero: {
    // Warm & human rebrand (2026-07-24): hook is human, SEO terms live in the subheadline.
    // Prior headline (clinical angle): "Block Reels, Shorts & TikTok on Android — Free App Blocker"
    headline: localize("Get Your Hours Back From The Scroll"),
    subheadline: localize(
      "Block Instagram Reels, YouTube Shorts, TikTok, Facebook Reels, and Snapchat Spotlight on Android. Set a daily limit that actually holds — 100% offline, zero data collected, free to start."
    ),
    primaryCTA: localize("Download for Free"),
    secondaryCTA: localize("See how it works"),
    playStoreUrl: playUrl("app-landing-hero"),
  },
  logic: {
    title: localize("Willpower isn't the problem. The feed is."),
    description: localize(
      "Willpower runs out. Social feeds are built by teams whose only job is to keep you scrolling past it. MindfulGuard doesn't ask for more self-control — it blocks the app before you get the chance to give in."
    ),
  },
  differentiators: [
    {
      title: localize("Reel & Shorts Guard"),
      description: localize(
        "Cap Instagram Reels, YouTube Shorts, TikTok, Facebook Reels, and Snapchat Spotlight with daily or per-session limits. The infinite feed finally gets a hard stop — while the rest of the app stays usable."
      ),
      iconName: "Clapperboard",
    },
    {
      title: localize("Complete Privacy"),
      description: localize(
        "Your data never leaves your phone. There's no internet permission to leak it through — everything runs 100% offline, so your habits stay yours."
      ),
      iconName: "Shield",
    },
    {
      title: localize("Unbreakable Blocks"),
      description: localize(
        "No 'add 5 more minutes' button. Once a block starts, it holds — even on the days your willpower doesn't show up."
      ),
      iconName: "Lock",
    },
  ],

  comparison: {
    title: localize("How MindfulGuard compares"),
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
        mindfulGuard: localize("Free / $3.99/mo"),
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
    tagline: localize("Made by AppLass."),
    copyright: localize("Built to be private."),
  },
  labels: {
    sectionLabel: localize("Section Label"),
    faqHeadline: localize("FAQ Headline"),
    faqQuestions: localize("FAQ Questions"),
    neuralProtection: localize("Digital wellbeing, done right"),
    offlineArchitecture: localize("100% Offline"),
    technicalLogic: localize("Technical Logic"),
    systemLevel: localize(""),
    interceptsDistractions: localize("Stops the app before it even opens"),
    cognitiveLoad: localize(""),
    zeroWillpowerArchitecture: localize("No willpower needed — the block holds itself"),
    input: localize("INPUT"),
    filter: localize("FILTER"),
    focus: localize("FOCUS"),
    logicalFlow: localize(""),
    strategicMoat: localize("The Strategic Moat"),
    technicalAdvantages: localize("Why it"),
    technicalAdvantagesAccent: localize("holds up."),
    deploymentSpecs: localize(""),
    verifiedFeature: localize("Verified"),
    technicalValidationMatrix: localize("Technical Validation Matrix"),
    technicalSpec: localize("What matters"),
    mindfulGuardVersion: localize("MindfulGuard"),
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "8"
  },
  "description": "Mindful Guard is a privacy-first Android app blocker and Reel Guard. It blocks distracting apps and limits short-form video — Instagram Reels, YouTube Shorts, TikTok, Facebook Reels, and Snapchat Spotlight — with daily and per-session limits. Zero telemetry, no internet requirement, blocking at the system level via native Android APIs. No VPN. No cloud. 100% on-device.",
  "url": "https://applass.com/apps/mindful-guard",
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard"
});

export const MINDFUL_GUARD_SCHEMA = getMindfulGuardSchema();
