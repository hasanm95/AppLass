import { localize } from "@/i18n/localize";

export const getScreenveilData = () => ({
  hero: {
    tagline: localize("AMOLED Battery Saver"),
    headline: localize("Listen to Video"),
    headlineAccent: localize("with Your Screen Off."),
    subheadline: localize(
      "Save over 60% battery on AMOLED devices. ScreenVeil overlays a pure black layer so you can enjoy YouTube, podcasts, and music without the battery drain or accidental touches."
    ),
    primaryCTA: localize("Get it on Google Play"),
    secondaryCTA: localize("Learn More"),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.screenveil.app",
    subtext: localize("10,000+ Downloads • 5.0 Star Rating • Zero Permissions"),
  },

  painPoints: [
    {
      title: localize("Battery Anxiety?"),
      stat: "50-80%",
      description: localize("Power savings on OLED/AMOLED panels"),
      iconName: "Battery",
    },
    {
      title: localize("Accidental Touches?"),
      stat: "100%",
      description: localize("Lock your screen in pocket without stopping the stream"),
      iconName: "Hand",
    },
  ],

  features: [
    {
      title: localize("Floating Quick Access"),
      description: localize(
        "A draggable, one-tap button that stays accessible over any app. Activate ScreenVeil instantly without switching apps."
      ),
      iconName: "Pointer",
      highlight: localize("Always Accessible"),
    },
    {
      title: localize("Pure Black Overlay"),
      description: localize(
        "Specifically engineered for AMOLED/OLED screens where black pixels consume zero power. True black means true savings."
      ),
      iconName: "Moon",
      highlight: localize("Zero Power Draw"),
    },
    {
      title: localize("Smart Unlock System"),
      description: localize(
        "Simple 'Touch to Reveal' controls to prevent ghost taps in your pocket. Double-tap or swipe to unlock instantly."
      ),
      iconName: "Fingerprint",
      highlight: localize("Ghost-Tap Prevention"),
    },
    {
      title: localize("Real-Time Clock"),
      description: localize(
        "View the time and date even while the screen is 'off'. Stay informed without breaking your focus or burning battery."
      ),
      iconName: "Clock",
      highlight: localize("Always Visible"),
    },
    {
      title: localize("Universal Compatibility"),
      description: localize(
        "Seamlessly works with YouTube, Netflix, Spotify, and any media player. One app to rule them all."
      ),
      iconName: "Play",
      highlight: localize("Works Everywhere"),
    },
  ],

  technical: {
    headline: localize("The Physics of Battery Conservation."),
    description: localize(
      "On OLED and AMOLED displays, each pixel is its own light source. By displaying 'True Black,' ScreenVeil instructs pixels to turn completely off. Research shows this can reduce display-related power draw by up to 63% at max brightness."
    ),
    stat: "63%",
    statLabel: localize("Power Reduction"),
  },

  privacy: {
    headline: localize("Zero Permissions. Total Privacy."),
    description: localize(
      "Unlike clones, ScreenVeil requires no internet access and no personal data. We only need the 'Overlay' permission to function. Your data stays on your device—where it belongs."
    ),
    features: [
      { label: localize("No Internet Required"), iconName: "WifiOff" },
      { label: localize("Zero Data Collection"), iconName: "ShieldCheck" },
      { label: localize("Overlay Only"), iconName: "Layers" },
    ],
  },

  testimonials: [
    {
      quote: localize(
        "Perfect for those who have a phone with low battery and want to listen to podcasts on YouTube."
      ),
      author: localize("Reddit User"),
      platform: "r/Android",
    },
    {
      quote: localize(
        "Finally, a simple utility that does one thing really well without complex setup or ads."
      ),
      author: localize("Early Adopter"),
      platform: "Play Store",
    },
  ],

  labels: {
    featuresTitle: localize("Features"),
    technicalHeadline: localize("Technical Physics"),
    privacyHeadline: localize("Privacy First"),
    downloadNow: localize("Download Now"),
    starRating: localize("5.0 Star Rating"),
    alwaysAccessible: localize("Always Accessible"),
    problemTag: localize("The Problem"),
    problemTitle: localize("Stop Wasting Energy."),
    problemDescription: localize("Modern screens are the #1 battery drainer. When you stream video just for the audio, you're burning through your charge for pixels you aren't even watching."),
    coreFeaturesTag: localize("Core Features"),
    featuresHeadline: localize("Everything You Need."),
    featuresSubheadline: localize("Nothing You Don't."),
    technicalScienceTag: localize("The Science"),
    backlightAlwaysOn: localize("Backlight always on"),
    highPower: localize("High Power"),
    pixelsTurnOff: localize("Pixels turn off"),
    zeroPower: localize("Zero Power"),
    privacyFirstTag: localize("Privacy First"),
    dataBelongsToYou: localize("Your data stays on your device — where it belongs."),
    userLoveTag: localize("User Love"),
    whatUsersAreSaying: localize("What Users Are Saying"),
    faqTag: localize("FAQ"),
    faqTitle: localize("Frequently Asked Questions"),
  }
});

export const SCREENVEIL_DATA = getScreenveilData();

export const getScreenveilSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ScreenVeil: Screen Off Video",
  operatingSystem: "Android",
  applicationCategory: "ProductivityApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: localize(
    "Black Screen Overlay, AMOLED Battery Saver, Screen Off Playback, Floating Quick Access, Smart Unlock"
  ),
  description: localize(
    "The ultimate AMOLED battery saver. Watch YouTube, Netflix, and podcasts with your screen off. Zero permissions, 100% privacy."
  ),
  screenshot: "https://applass.com/screenveil-feature.png",
  image: "https://applass.com/screenveil-feature.png",
  author: {
    "@type": "Organization",
    name: localize("AppLass"),
    url: "https://applass.com",
  },
});

export const SCREENVEIL_SCHEMA = getScreenveilSchema();
