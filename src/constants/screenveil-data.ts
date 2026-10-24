import { localize } from "@/i18n/localize";

// Landing page copy for /apps/screenveil.
// Facts follow the Google Play listing (checked Oct 2026): 4.7 stars from 110 reviews,
// 10K+ downloads, one permission to grant (display over other apps), in-app purchases.
// The listing deliberately promises no fixed battery percentage and does not frame the
// app as a way around any other app's features, so neither does this page.
// Play's Data safety section declares "Device or other IDs", so never claim
// "zero data collection" or "zero permissions" here.

export const SCREENVEIL_PLAY_ID = "com.screenveil.app";

export const screenveilPlayUrl = (campaign: string) => {
  const referrer = encodeURIComponent(
    `utm_source=applass&utm_medium=app-page&utm_campaign=screenveil-${campaign}`
  );
  return `https://play.google.com/store/apps/details?id=${SCREENVEIL_PLAY_ID}&referrer=${referrer}`;
};

export const getScreenveilData = () => ({
  hero: {
    tagline: localize("Black screen overlay for Android"),
    headline: localize("Screen off."),
    headlineAccent: localize("Sound on."),
    subheadline: localize(
      "One tap turns your screen black while whatever you were playing keeps playing: a lecture, a podcast, a playlist. Tap again and you're back."
    ),
    primaryCTA: localize("Get it on Google Play"),
    secondaryCTA: localize("How it works"),
    subtext: localize("Free download · No account · Android"),
    downloadNow: localize("Install"),
    stickyMeta: localize("Free · 4.7 on Google Play"),
  },

  stats: [
    { value: "4.7★", label: localize("on Google Play, 110 reviews") },
    { value: "10K+", label: localize("downloads") },
    { value: "1", label: localize("permission to grant") },
  ],
  statsNote: localize("Google Play figures, October 2026."),

  uses: {
    tag: localize("Made for"),
    title: localize("When you need the sound, not the picture."),
    items: [
      {
        title: localize("Nobody sees your screen"),
        description: localize("On a bus, in a queue, in a shared room. The picture is hidden and the sound carries on."),
      },
      {
        title: localize("Falls asleep when you do"),
        description: localize("Set the sleep timer and the screen goes dark on its own. No light in the room."),
      },
      {
        title: localize("No accidental taps"),
        description: localize("A pocket, a sleeve or a child's hand can't pause or skip anything while the screen is black."),
      },
    ],
  },

  how: {
    tag: localize("How it works"),
    title: localize("That's the whole app."),
    steps: [
      localize("Open ScreenVeil and tap Start Service."),
      localize("Allow \"display over other apps\" when Android asks."),
      localize("A small floating button appears. Drag it anywhere."),
      localize("Tap the button, or the Quick Settings tile, and the screen turns black."),
      localize("Touch the screen, tap unlock, and you're back."),
    ],
    note: localize("No account, no setup wizard, no tutorial to sit through."),
  },

  features: {
    tag: localize("Features"),
    title: localize("Small app, the right switches."),
    items: [
      { title: localize("True black overlay"), description: localize("Pure black, so AMOLED and OLED pixels switch off."), icon: "Moon" },
      { title: localize("Dim mode"), description: localize("A low glow instead of full black, when black is too much."), icon: "SunDim" },
      { title: localize("Sleep timer"), description: localize("Blacks the screen out on its own after the time you set."), icon: "Timer" },
      { title: localize("Floating button"), description: localize("One tap to go dark. Drag it wherever it's out of the way."), icon: "CircleDot" },
      { title: localize("Quick Settings tile"), description: localize("Swipe down, tap once, screen off."), icon: "PanelTop" },
      { title: localize("Pocket mode"), description: localize("Goes black when the phone goes in your pocket."), icon: "Smartphone" },
      { title: localize("Biometric unlock"), description: localize("Only your fingerprint brings the screen back."), icon: "Fingerprint" },
      { title: localize("Clock on black"), description: localize("Time and date stay visible, so you can still check the hour."), icon: "Clock" },
    ],
  },

  battery: {
    tag: localize("An honest note on battery"),
    title: localize("The saving depends on your screen."),
    description: localize(
      "We don't promise a percentage, because nobody can measure one that holds for every phone. Here's what decides it."
    ),
    amoledTitle: localize("AMOLED and OLED"),
    amoled: localize(
      "Each pixel makes its own light, and a pure black pixel is switched off. The brighter your screen was and the longer you listen, the more you save."
    ),
    lcdTitle: localize("LCD"),
    lcd: localize(
      "The backlight stays on behind a black image, so the saving is small. ScreenVeil still hides the screen and blocks taps."
    ),
    linkLabel: localize("Does dark mode save battery? The real AMOLED numbers"),
  },

  trust: {
    tag: localize("Permissions & privacy"),
    title: localize("A dark layer, and nothing else."),
    permissionTitle: localize("One permission"),
    permission: localize(
      "Display over other apps. That's what draws the black layer. ScreenVeil doesn't read your screen, record audio or video, or need your files, contacts or location."
    ),
    doesNotTitle: localize("What ScreenVeil does not do"),
    doesNot: [
      localize("It doesn't change how any other app behaves."),
      localize("It doesn't unlock or bypass any app's features."),
      localize("It doesn't download, record or copy anything."),
      localize("It doesn't need an account or a sign-up."),
    ],
    policyLink: localize("Read the privacy policy"),
  },

  audience: {
    tag: localize("Who uses it"),
    items: [
      localize("Students listening to recorded lectures"),
      localize("Commuters on long rides"),
      localize("Anyone falling asleep to audio"),
      localize("Workouts, walks and chores"),
      localize("Low-battery days"),
    ],
  },

  reading: {
    tag: localize("Further reading"),
    title: localize("Guides from the AppLass blog"),
  },

  closing: {
    title: localize("Let the screen go dark."),
    description: localize("Install ScreenVeil, tap the floating button, and keep listening."),
    subtext: localize("Free on Google Play · Android"),
  },

  labels: {
    faqTag: localize("FAQ"),
    faqTitle: localize("Questions people ask"),
  },
});

export const getScreenveilSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ScreenVeil",
  "alternateName": "ScreenVeil: Black Screen Off",
  "operatingSystem": "Android",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "ScreenVeil is a black screen overlay for Android. One tap turns the screen black and blocks touches while audio from the app underneath keeps playing. On AMOLED and OLED panels black pixels are switched off, which reduces display power. Includes dim mode, a sleep timer, a Quick Settings tile, pocket mode and biometric unlock.",
  "featureList": [
    "True black screen overlay",
    "Dim mode",
    "Sleep timer",
    "Floating button and Quick Settings tile",
    "Pocket mode",
    "Biometric unlock",
    "Clock and date on the black screen",
    "Touch blocking with a deliberate unlock"
  ],
  "url": "https://applass.com/apps/screenveil",
  "downloadUrl": `https://play.google.com/store/apps/details?id=${SCREENVEIL_PLAY_ID}`
});

export const SCREENVEIL_SCHEMA = getScreenveilSchema();
