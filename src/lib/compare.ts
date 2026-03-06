export interface ComparisonFeature {
  label: string;
  competitorValue: string;
  applassValue: string;
  isPositive?: boolean;
}

interface ComparisonData {
  slug: string;
  competitorName: string;
  productName: string;
  heroHeadline: string;
  heroSubheadline: string;
  matrix: ComparisonFeature[];
  legacyWay: {
    title: string;
    points: string[];
  };
  applassWay: {
    title: string;
    points: string[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

import { localize } from "@/i18n/localize";

export const comparisons: ComparisonData[] = [
  {
    slug: "fomogen-vs-nudgify",
    competitorName: "Nudgify",
    productName: "FomoGen",
    heroHeadline: localize("The Logical Alternative to Nudgify."),
    heroSubheadline:
      localize("Why elite Shopify merchants are switching from bloated legacy social proof tools to FomoGen's logic-first architecture."),
    matrix: [
      {
        label: localize("Load Speed"),
        competitorValue: "1.2s+",
        applassValue: "< 100ms",
        isPositive: true,
      },
      {
        label: localize("Privacy"),
        competitorValue: localize("Cookies & Tracking"),
        applassValue: localize("Zero Telemetry"),
        isPositive: true,
      },
      {
        label: localize("Accessibility"),
        competitorValue: localize("Partial WCAG"),
        applassValue: localize("100% Compliant"),
        isPositive: true,
      },
      {
        label: localize("Script Size"),
        competitorValue: "450KB+",
        applassValue: "4.2KB",
        isPositive: true,
      },
      {
        label: localize("Pricing"),
        competitorValue: localize("Strict Tiers"),
        applassValue: localize("Logical Flat Rate"),
        isPositive: true,
      },
    ],
    legacyWay: {
      title: localize("The Legacy Way"),
      points: [
        localize("Heavy JavaScript payloads that slow down storefronts."),
        localize("Aggressive user tracking that compromises trust."),
        localize("Complex dashboards with unnecessary feature bloat."),
      ],
    },
    applassWay: {
      title: localize("The AppLass Way"),
      points: [
        localize("Mathematical precision for maximum performance."),
        localize("Zero-telemetry privacy by default."),
        localize("Clean, minimalist logic that just works."),
      ],
    },
    testimonial: {
      quote:
        localize("We shaved 2 seconds off our Shopify load time just by switching from Nudgify to FomoGen. The math doesn't lie."),
      author: "Alex Rivera",
      role: localize("E-commerce Director"),
    },
  },
  {
    slug: "mindful-guard-vs-forest",
    competitorName: "Forest",
    productName: "Mindful Guard",
    heroHeadline: localize("The Logical Alternative to Forest."),
    heroSubheadline:
      localize("Why elite developers are switching from gamified distractions to Mindful Guard's system-level discipline."),
    matrix: [
      {
        label: localize("Method"),
        competitorValue: localize("Gamified / Visual"),
        applassValue: localize("Logical Friction"),
        isPositive: true,
      },
      {
        label: localize("Battery Impact"),
        competitorValue: localize("6-8% Daily"),
        applassValue: localize("< 0.5% Daily"),
        isPositive: true,
      },
      {
        label: localize("Privacy"),
        competitorValue: localize("Cloud-Synced"),
        applassValue: localize("100% Local"),
        isPositive: true,
      },
      {
        label: localize("Focus Logic"),
        competitorValue: localize("Suggestive"),
        applassValue: localize("Absolute Guardrails"),
        isPositive: true,
      },
      {
        label: localize("Philosophy"),
        competitorValue: localize("Growth"),
        applassValue: localize("Elimination"),
        isPositive: true,
      },
    ],
    legacyWay: {
      title: localize("The Legacy Way"),
      points: [
        localize("Using a 'game' to stop phone use is counter-intuitive."),
        localize("Constant background sync drains device resources."),
        localize("Features optimized for retention, not productivity."),
      ],
    },
    applassWay: {
      title: localize("The AppLass Way"),
      points: [
        localize("Intentional friction switches brain to System 2 thinking."),
        localize("Native C++ implementation for zero battery lag."),
        localize("Absolute focus sessions with no 'exit' logic."),
      ],
    },
    testimonial: {
      quote:
        localize("Mindful Guard is the first app that actually works. It doesn't ask me to be better; it forces me to be logical."),
      author: "Sarah Chen",
      role: localize("Lead Software Architect"),
    },
  },
];

export function getComparisonBySlug(slug: string): ComparisonData | null {
  return comparisons.find((c) => c.slug === slug) || null;
}
