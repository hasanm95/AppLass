export const SCREENVEIL_DATA = {
  hero: {
    tagline: "AMOLED Battery Saver",
    headline: "Listen to Video",
    headlineAccent: "with Your Screen Off.",
    subheadline:
      "Save over 60% battery on AMOLED devices. ScreenVeil overlays a pure black layer so you can enjoy YouTube, podcasts, and music without the battery drain or accidental touches.",
    primaryCTA: "Get it on Google Play",
    secondaryCTA: "Learn More",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.screenveil.app",
    subtext: "10,000+ Downloads • 5.0 Star Rating • Zero Permissions",
  },

  painPoints: [
    {
      title: "Battery Anxiety?",
      stat: "50-80%",
      description: "Power savings on OLED/AMOLED panels",
      iconName: "Battery",
    },
    {
      title: "Accidental Touches?",
      stat: "100%",
      description: "Lock your screen in pocket without stopping the stream",
      iconName: "Hand",
    },
  ],

  features: [
    {
      title: "Floating Quick Access",
      description:
        "A draggable, one-tap button that stays accessible over any app. Activate ScreenVeil instantly without switching apps.",
      iconName: "Pointer",
      highlight: "Always Accessible",
    },
    {
      title: "Pure Black Overlay",
      description:
        "Specifically engineered for AMOLED/OLED screens where black pixels consume zero power. True black means true savings.",
      iconName: "Moon",
      highlight: "Zero Power Draw",
    },
    {
      title: "Smart Unlock System",
      description:
        "Simple 'Touch to Reveal' controls to prevent ghost taps in your pocket. Double-tap or swipe to unlock instantly.",
      iconName: "Fingerprint",
      highlight: "Ghost-Tap Prevention",
    },
    {
      title: "Real-Time Clock",
      description:
        "View the time and date even while the screen is 'off'. Stay informed without breaking your focus or burning battery.",
      iconName: "Clock",
      highlight: "Always Visible",
    },
    {
      title: "Universal Compatibility",
      description:
        "Seamlessly works with YouTube, Netflix, Spotify, and any media player. One app to rule them all.",
      iconName: "Play",
      highlight: "Works Everywhere",
    },
  ],

  technical: {
    headline: "The Physics of Battery Conservation.",
    description:
      "On OLED and AMOLED displays, each pixel is its own light source. By displaying 'True Black,' ScreenVeil instructs pixels to turn completely off. Research shows this can reduce display-related power draw by up to 63% at max brightness.",
    stat: "63%",
    statLabel: "Power Reduction",
  },

  privacy: {
    headline: "Zero Permissions. Total Privacy.",
    description:
      "Unlike clones, ScreenVeil requires no internet access and no personal data. We only need the 'Overlay' permission to function. Your data stays on your device—where it belongs.",
    features: [
      { label: "No Internet Required", iconName: "WifiOff" },
      { label: "Zero Data Collection", iconName: "ShieldCheck" },
      { label: "Overlay Only", iconName: "Layers" },
    ],
  },

  testimonials: [
    {
      quote:
        "Perfect for those who have a phone with low battery and want to listen to podcasts on YouTube.",
      author: "Reddit User",
      platform: "r/Android",
    },
    {
      quote:
        "Finally, a simple utility that does one thing really well without complex setup or ads.",
      author: "Early Adopter",
      platform: "Play Store",
    },
  ],

  schema: {
    softwareApplication: {
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
      featureList:
        "Black Screen Overlay, AMOLED Battery Saver, Screen Off Playback, Floating Quick Access, Smart Unlock",
      description:
        "The ultimate AMOLED battery saver. Watch YouTube, Netflix, and podcasts with your screen off. Zero permissions, 100% privacy.",
      screenshot: "https://applass.com/screenveil-feature.png",
      image: "https://applass.com/screenveil-feature.png",
      author: {
        "@type": "Organization",
        name: "AppLass",
        url: "https://applass.com",
      },
    },
  },
};
