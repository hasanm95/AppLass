export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_REGISTRY = {
  HOME: [
    {
      id: "what-is",
      question: "What is AppLass?",
      answer:
        "AppLass is an elite software engineering studio that builds high-performance Shopify apps and Android utilities. Founded in 2019, we use mathematical optimization to create sub-2.1KB payloads that keep Core Web Vitals green. Our flagship products include ScreenVeil, FomoGen, and Mindful Guard.",
    },
    {
      id: "accessibility",
      question: "Is AppLass software accessible?",
      answer:
        "Yes. All AppLass products follow WCAG 2.1 guidelines with semantic HTML and keyboard-navigable patterns. We build for the 20% of users with disabilities to create a superior experience for the 100%.",
    },
    {
      id: "speed",
      question: "How does AppLass optimize for speed?",
      answer:
        "We minimize JavaScript execution time to the micro-second using mathematical optimization. Core utility payloads stay under 2.1KB to ensure green Core Web Vitals scores.",
    },
    {
      id: "privacy",
      question: "What is AppLass's privacy policy?",
      answer:
        "AppLass uses Zero-Telemetry Architecture. We never log personal identifiers, track user behavior, or include third-party analytics SDKs. All data stays 100% on-device for maximum user privacy.",
    },
  ],
  SCREENVEIL: [
    {
      question: "Does ScreenVeil work on LCD screens?",
      answer:
        "Yes, it acts as a screen dimmer, but the maximum battery savings are achieved on AMOLED/OLED displays where pixels physically turn off.",
    },
    {
      question: "How is this different from YouTube Premium?",
      answer:
        "ScreenVeil is a universal hardware-level utility. It works across all apps (Netflix, Prime, etc.) and provides a 'pocket mode' that prevents accidental touches while the video continues.",
    },
    {
      question: "What is ScreenVeil?",
      answer:
        "ScreenVeil is a free Android utility with 10,000+ downloads and a 4.4-star rating. It provides a black overlay for AMOLED/OLED displays, saving 60%+ battery life while listening to videos.",
    },
  ],
  FOMOGEN: [
    {
      question: "What is FomoGen?",
      answer:
        "FomoGen is an elite social proof tool for Shopify merchants with a <2.1KB payload that boosts engagement by +23% without performance debt. It is WCAG 2.1 compliant with real-time nudges.",
    },
    {
      question: "Is FomoGen free?",
      answer:
        "Yes, FomoGen offers a powerful free plan for Shopify merchants to boost engagement with urgency and trust signals.",
    },
  ],
  MINDFUL_GUARD: [
    {
      question: "What is Mindful Guard?",
      answer:
        "Mindful Guard is a privacy-focused Android productivity guardian that helps users reclaim 2.4 hours of focus daily. It features a zero-telemetry, offline architecture and system-level blocking.",
    },
    {
      question: "Does MindfulGuard work on Xiaomi/Samsung/MIUI devices?",
      answer:
        'Yes. MindfulGuard is engineered with "Battery Optimization Exemption" protocols specifically to prevent aggressive Android skins like MIUI from killing the background process.',
    },
    {
      question: "Is MindfulGuard safe for privacy?",
      answer:
        "Yes. MindfulGuard operates on a zero-telemetry architecture. It does not require internet access to function, ensuring your data never leaves your device.",
    },
    {
      question: "How does Strict Mode work?",
      answer:
        "Strict Mode locks your chosen settings for a set duration. It prevents you from uninstalling the app or changing the schedule until the timer expires.",
    },
  ],
  DIGITAL_WELLNESS: [
    {
      question: "What is digital wellness?",
      answer:
        "Digital wellness is the practice of maintaining a healthy relationship with technology. It involves managing screen time, protecting digital privacy, and ensuring that your device usage does not negatively impact your physical or mental health.",
    },
    {
      question: "Are there free apps to reduce screen time on Android?",
      answer:
        "Yes. While built-in tools like Google’s Digital Wellbeing provide basic tracking, third-party apps like Mindful Guard offer more advanced 'hard blocking' features for free, without the need for an account or internet connection.",
    },
    {
      question: "How does screen time affect productivity?",
      answer:
        "Research indicates that it takes an average of 23 minutes to refocus on a task after being distracted by a digital notification. Unmanaged screen time fragments your attention and significantly increases the time needed to complete complex work.",
    },
  ],
  ECOMMERCE_PERFORMANCE: [
    {
      question: "What is a good conversion rate for Shopify in 2026?",
      answer:
        "While the average mobile conversion rate is approximately 1.2%, top-performing Shopify stores (the top 10%) achieve rates of 4.7% or higher.",
    },
    {
      question: "How does site speed affect SEO rankings?",
      answer:
        "Google uses site speed (via Core Web Vitals) as a direct ranking factor. Faster stores not only rank higher but also see significantly lower bounce rates and higher repeat purchase rates.",
    },
    {
      question: "Are social proof apps worth it for new stores?",
      answer:
        "Yes. Because shoppers who interact with reviews are 161% more likely to convert, social proof is the most effective way for new brands to build the 'reputation juice' needed to compete with established players.",
    },
  ],
} as const;

export type FAQRegistryKey = keyof typeof FAQ_REGISTRY;
