import { localize } from "@/i18n/localize";
import { playUrl } from "@/lib/utils";

// Problem-first cards that route visitors to the right app.
export const getSolutions = () => [
  {
    title: localize("My phone dies when I listen to YouTube"),
    description: localize(
      "ScreenVeil keeps audio and video playing with the screen off, so the display stops draining your battery."
    ),
    href: "/apps/screenveil",
    iconName: "BatteryCharging",
  },
  {
    title: localize("I keep opening apps I meant to avoid"),
    description: localize(
      "Mindful Guard blocks the apps you choose, on the schedule you choose, entirely on your phone."
    ),
    href: "/apps/mindful-guard",
    iconName: "ShieldOff",
  },
  {
    title: localize("My Shopify store needs social proof"),
    description: localize(
      "FomoGen shows live sales and stock activity, built small so it does not cost you page speed."
    ),
    href: "/apps/fomogen",
    iconName: "ShoppingBag",
  },
];

// ScreenVeil first as authority anchor (10K+ downloads, 4.4★)
export const getProducts = () => [
  {
    id: "screenveil",
    name: localize("ScreenVeil"),
    platform: localize("Android Platform"),
    tagline: localize("Play video with the screen off"),
    description: localize(
      "Listen to YouTube, podcasts and music with the screen off. On OLED and AMOLED phones the black pixels switch off completely, so you use less battery. No permissions, no account, no tracking."
    ),
    metrics: [localize("10K+ Downloads"), localize("4.4★ Rating")],
    stats: {
      downloads: localize("10,000+"),
      rating: localize("4.4"),
      reviewCount: localize("43"),
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
    tagline: localize("Show real activity without slowing your store"),
    description: localize(
      "Live sales and stock notifications for Shopify. Built to stay small so it does not hurt your page speed or Core Web Vitals. Meets WCAG 2.1 AA."
    ),
    metrics: [localize("Shopify App Store"), localize("WCAG 2.1 AA")],
    stats: {
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
    tagline: localize("Block the apps that break your focus"),
    description: localize(
      "Set rules for which apps can open and when. Everything runs on your phone — no account, no cloud, no tracking. Users get back an average of 2.4 hours a day."
    ),
    metrics: [localize("2.4h Reclaimed Daily"), localize("No Tracking")],
    stats: {
      focusSaved: "2.4h",
      tracking: "Zero",
    },
    color: "blue",
    cta: localize("Get on Play Store"),
    ctaLink: playUrl("home"),
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

// Verbatim Google Play reviews. Names are as shown publicly on the store.
// Only edits: sentence-case fixes and marked elisions. Do not paraphrase these.
export const getTestimonials = () => [
  {
    quote: localize(
      "Great app, it works by keeping the audio of YouTube videos playing even when the screen is dark."
    ),
    name: "thomas tha sheng Chan",
    product: localize("ScreenVeil"),
    date: localize("July 2026"),
    note: localize("Translated from Portuguese"),
  },
  {
    quote: localize(
      "When I mirror my phone […] I want my screen black. I found this on Reddit and it is exactly what I was looking for."
    ),
    name: "Lisa Ragoonanan",
    product: localize("ScreenVeil"),
    date: localize("April 2026"),
  },
  {
    quote: localize(
      "It's a great app.. If you have need a break from social violations, please check it up.."
    ),
    name: "Ouson Sabbir",
    product: localize("Mindful Guard"),
    date: localize("July 2026"),
  },
  {
    quote: localize(
      "Mindful Guard has genuinely helped me cut down on my Reels addiction. It's been a great tool for building healthier phone habits."
    ),
    name: "Hasibul Hossen",
    product: localize("Mindful Guard"),
    date: localize("June 2026"),
  },
  {
    quote: localize(
      "It's very helpful to keep focus on work. If someone spends his valuable time on social media or any other entertaining platform, this app will help him to keep avoid them. It's Recommended."
    ),
    name: "Borhan Uddin",
    product: localize("Mindful Guard"),
    date: localize("June 2026"),
  },
];

// Studio credentials — used by the About page, where methodology is the point.
export const getAboutPillars = (): Pillar[] => [
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

// Facts that hold true for every AppLass app.
export const getHomePillars = (): Pillar[] => [
  {
    key: "noTrackers",
    title: localize("No trackers"),
    label: localize("No analytics SDKs"),
    description: localize(
      "None of our apps include third-party analytics or send your usage anywhere. There is nothing to opt out of."
    ),
    iconName: "ShieldOff",
  },
  {
    key: "noAccount",
    title: localize("No account needed"),
    label: localize("Install and go"),
    description: localize(
      "You never sign up, hand over an email, or create a profile to use an AppLass app."
    ),
    iconName: "UserX",
  },
  {
    key: "worksForEveryone",
    title: localize("Works for everyone"),
    label: localize("WCAG 2.1 AA"),
    description: localize(
      "Screen readers, keyboard navigation and colour contrast are built in from the start, not added later."
    ),
    iconName: "Accessibility",
  },
];
