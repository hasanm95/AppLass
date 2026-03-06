import { localize } from "@/i18n/localize";

export const getSolutions = () => [
  {
    title: localize("E-commerce Optimization"),
    description: localize(
      "Conversion engineering for modern brands. We solve the technical debt that slows down growth through mathematical optimization."
    ),
    iconName: "ShoppingBag",
  },
  {
    title: localize("Digital Discipline Design"),
    description: localize(
      "Focus tools that respect human psychology through mathematical constraints and systemic guardrails. Engineered for the elite-tier producer."
    ),
    iconName: "Clock",
  },
  {
    title: localize("Accessibility Consulting"),
    description: localize(
      "Transforming digital products to be inclusive from the core. Level up your WCAG score logically with a zero-regression foundation."
    ),
    iconName: "Users",
  },
];

// ScreenVeil first as authority anchor (10K+ downloads, 4.4★)
export const getProducts = () => [
  {
    id: "screenveil",
    name: localize("ScreenVeil"),
    platform: localize("Android Platform"),
    tagline: localize("Screen Off Video Playback"),
    description: localize(
      "Save 60%+ battery on AMOLED/OLED displays. Listen to YouTube, podcasts, and music with your screen off. Zero permissions, total privacy."
    ),
    metrics: [localize("10K+ Downloads"), localize("4.4★ Rating")],
    stats: {
      downloads: "10,000+",
      rating: "4.4",
      reviewCount: "43",
      batterySaved: "60%",
    },
    color: "green",
    cta: localize("Download Free"),
    ctaLink: "https://play.google.com/store/apps/details?id=com.screenveil.app",
    imageSrc: "screenveil-feature.png",
    featured: true,
  },
  {
    id: "fomogen",
    name: localize("FomoGen"),
    platform: localize("Shopify Ecosystem"),
    tagline: localize("Social Proof Without the Speed Penalty"),
    description: localize(
      "Elite social proof with a proprietary <2.1KB payload. Boost engagement by +23% without triggering 'Long Task' warnings or SEO speed penalties."
    ),
    metrics: [localize("+23% Engagement"), localize("<2.1KB Payload")],
    stats: {
      engagement: "+23%",
      payload: "<2.1KB",
      wcag: "2.1 AA",
    },
    color: "blue",
    cta: localize("Add to Shopify"),
    ctaLink: "https://apps.shopify.com/fomogen",
    imageSrc: "fomogen-feature.png",
    featured: false,
  },
  {
    id: "mindful",
    name: localize("Mindful Guard"),
    platform: localize("Android Platform"),
    tagline: localize("Privacy-First Focus Guardrails"),
    description: localize(
      "System-level productivity guardian built with a zero-tracking, privacy-first architecture. Reclaim an average of 2.4 hours of focus daily with 100% on-device data sovereignty."
    ),
    metrics: [localize("2.4h Focus Reclaimed"), localize("Zero-Tracking")],
    stats: {
      focusSaved: "2.4h",
      tracking: "Zero",
    },
    color: "blue",
    cta: localize("Get on Play Store"),
    ctaLink:
      "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard",
    imageSrc: "mindful-guard-feature.png",
    featured: false,
  },
];

export interface Pillar {
  key: string;
  title: string;
  label: string;
  description: string;
  iconName: string;
}

export const getHomePillars = (): Pillar[] => [
  {
    key: "eliteExpertise",
    title: localize("Elite Expertise"),
    label: localize("7 Years Full-Stack"),
    description: localize(
      "Deep experience building scalable systems for e-commerce and high-productivity mobile environments."
    ),
    iconName: "Zap",
  },
  {
    key: "logicalIntegrity",
    title: localize("Logical Integrity"),
    label: localize("Mathematics Core"),
    description: localize(
      "Every algorithm and interaction is modeled with mathematical precision to maximize performance and reliability."
    ),
    iconName: "Calculator",
  },
  {
    key: "radicalAccessibility",
    title: localize("Radical Accessibility"),
    label: localize("WCAG 2.1 First"),
    description: localize(
      "Accessibility is not a feature; it's the foundation. We build software that respects every user's capabilities."
    ),
    iconName: "Globe",
  },
];
