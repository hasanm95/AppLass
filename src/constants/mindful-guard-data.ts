import { localize } from "@/i18n/localize";
import { MINDFUL_GUARD_PLAY_ID } from "@/lib/utils";

// Landing page copy for /apps/mindful-guard.
// Facts follow the Google Play listing (checked Oct 2026) and the privacy policy:
// free plan + Premium (monthly, yearly or lifetime), no ads, Data safety "No data collected".
// The app does declare a network permission (framework requirement), so never claim
// "no internet permission" — say it works offline and sends nothing instead.
// Prices vary by region, so the page names the plans without quoting amounts.

export const mindfulGuardPlayUrl = (campaign: string) => {
  const referrer = encodeURIComponent(
    `utm_source=applass&utm_medium=app-page&utm_campaign=mindful-guard-${campaign}`
  );
  return `https://play.google.com/store/apps/details?id=${MINDFUL_GUARD_PLAY_ID}&referrer=${referrer}`;
};

export const getMindfulGuardData = () => ({
  hero: {
    tagline: localize("Gentle limits. Big impact."),
    headline: localize("Get your hours back"),
    headlineAccent: localize("from the scroll."),
    subheadline: localize(
      "Mindful Guard caps Instagram Reels, YouTube Shorts and TikTok, and blocks any app you choose, so the feed stops when you said it would."
    ),
    primaryCTA: localize("Get it on Google Play"),
    secondaryCTA: localize("See Reel Guard"),
    subtext: localize("Free plan · No ads · No account · Android"),
    downloadNow: localize("Install"),
    stickyMeta: localize("Free · No ads · No account"),
  },

  summary: [
    { label: localize("Reel Guard"), value: localize("Reels, Shorts, TikTok, Facebook Reels, Spotlight") },
    { label: localize("Price"), value: localize("Free plan · Premium optional") },
    { label: localize("Privacy"), value: localize("No ads · No data collected") },
  ],

  problem: {
    tag: localize("Why it works"),
    title: localize("Willpower isn't the problem. The feed is."),
    description: localize(
      "Short-form feeds never end, so stopping is always your job. Mindful Guard moves that decision to a calmer moment: you set the limit once, and when it's reached, the feed closes."
    ),
  },
  steps: [
    {
      title: localize("Pick what to guard"),
      description: localize("Choose the apps to block, or just the Reels and Shorts feeds inside them."),
    },
    {
      title: localize("Set a limit or a time"),
      description: localize("A daily cap, a per-session cap, a quick focus timer or a weekly schedule."),
    },
    {
      title: localize("Let the limit hold"),
      description: localize("When time is up, a calm screen takes over. No override button, no \"just one more\"."),
    },
  ],

  reelGuard: {
    tag: localize("Reel Guard"),
    title: localize("Limit the feed, keep the app."),
    description: localize(
      "Reel Guard closes only the short-form feed. Messages, Stories and the rest of the app keep working, so you can still reply to a friend without falling into Reels."
    ),
    platforms: [
      localize("Instagram Reels"),
      localize("YouTube Shorts"),
      localize("TikTok"),
      localize("Facebook Reels"),
      localize("Snapchat Spotlight"),
    ],
    limits: [
      { title: localize("Session limit"), description: localize("Maximum continuous time in one sitting.") },
      { title: localize("Daily limit"), description: localize("Total time allowed today.") },
      { title: localize("Reel count"), description: localize("Cap how many reels you scroll per session or per day.") },
      { title: localize("Cooldown"), description: localize("A break before the next session can start.") },
    ],
    overlayCaption: localize("When the daily budget is used, the feed waits until tomorrow."),
  },

  blocking: {
    tag: localize("App blocking"),
    title: localize("Three ways to stay out of an app."),
    modes: [
      {
        title: localize("Quick focus timer"),
        description: localize("Block your distracting apps right now, for 5 to 60 minutes. Made for a study block or a Pomodoro."),
      },
      {
        title: localize("Weekly schedules"),
        description: localize("Work hours, sleep time, school days. Apps block and unblock on their own, every week."),
      },
      {
        title: localize("Custom block lists"),
        description: localize("Separate lists for work, study and sleep, with suggestions based on what you actually open."),
      },
    ],
  },

  privacy: {
    tag: localize("Privacy & price"),
    title: localize("Your habits stay on your phone."),
    points: [
      {
        title: localize("No ads, no analytics"),
        description: localize("Nothing in the app is there to sell your attention back to someone else."),
      },
      {
        title: localize("No data collected"),
        description: localize("Google Play's Data safety section lists no data collected and none shared. Block lists, schedules and stats stay on the device."),
      },
      {
        title: localize("Works offline, no account"),
        description: localize("Blocking runs on your phone. There's no sign-up, no cloud sync and no VPN."),
      },
    ],
    priceTitle: localize("Free, with an optional Premium"),
    priceDescription: localize(
      "Start free. Premium unlocks more, as a monthly, yearly or one-time lifetime purchase. Google Play shows the price in your currency."
    ),
    policyLink: localize("Read the privacy policy"),
  },

  permissions: {
    tag: localize("Permissions, explained"),
    title: localize("What Mindful Guard asks for, and why."),
    items: [
      {
        title: localize("Accessibility Service"),
        description: localize("Detects when a blocked app or a short-form feed opens, so it can be closed in real time."),
      },
      {
        title: localize("Display over other apps"),
        description: localize("Shows the calm \"limit reached\" screen on top of the app you were in."),
      },
      {
        title: localize("Battery optimization exemption"),
        description: localize("Keeps blocking alive on phones that close background apps aggressively."),
      },
    ],
  },

  comparison: {
    tag: localize("Comparison"),
    title: localize("Mindful Guard vs Digital Wellbeing"),
    columns: [localize("Digital Wellbeing app timer"), localize("Mindful Guard")],
    rows: [
      [localize("Limit only Reels or Shorts"), localize("No, it times the whole app"), localize("Yes, per platform")],
      [localize("Per-session limit"), localize("No"), localize("Yes, with a cooldown")],
      [localize("Reel count limit"), localize("No"), localize("Yes")],
      [localize("Quick focus timer"), localize("Focus mode, with a pause button"), localize("5 to 60 minutes")],
      [localize("When time is up"), localize("Easy to turn off in Settings"), localize("The block holds until it ends")],
    ],
  },

  reading: {
    tag: localize("Further reading"),
    title: localize("Guides from the AppLass blog"),
  },

  closing: {
    title: localize("Put the feed back in its place."),
    description: localize("Set one limit tonight and see what you do with the time tomorrow."),
    subtext: localize("Free on Google Play · Android"),
  },

  labels: {
    faqTag: localize("FAQ"),
    faqTitle: localize("Questions people ask"),
  },
});

export const getMindfulGuardSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Mindful Guard",
  "alternateName": "Mindful Guard: Block App/Reels",
  "operatingSystem": "Android",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Mindful Guard is an Android app blocker with Reel Guard. It limits Instagram Reels, YouTube Shorts, TikTok, Facebook Reels and Snapchat Spotlight with daily and per-session limits, and blocks any app with a quick focus timer or weekly schedules. Free plan with optional Premium. No ads, no account, and no data collected.",
  "featureList": [
    "Reel Guard: daily and per-session limits for short-form video feeds",
    "Quick focus timer from 5 to 60 minutes",
    "Weekly blocking schedules",
    "Custom block lists",
    "No ads, no account, no data collected"
  ],
  "url": "https://applass.com/apps/mindful-guard",
  "downloadUrl": `https://play.google.com/store/apps/details?id=${MINDFUL_GUARD_PLAY_ID}`
});

export const MINDFUL_GUARD_SCHEMA = getMindfulGuardSchema();
