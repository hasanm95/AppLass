import { localize } from "@/i18n/localize";

export const getFaqRegistry = () => ({
  HOME: [
    {
      id: "what-is",
      question: localize("What is AppLass?"),
      answer: localize(
        "AppLass is an elite software engineering studio that builds high-performance Shopify apps and Android utilities. Founded in 2019, we use mathematical optimization to create sub-2.1KB payloads that keep Core Web Vitals green. Our flagship products include ScreenVeil, FomoGen, and Mindful Guard."
      ),
    },
    {
      id: "accessibility",
      question: localize("Is AppLass software accessible?"),
      answer: localize(
        "Yes. All AppLass products follow WCAG 2.1 guidelines with semantic HTML and keyboard-navigable patterns. We build for the 20% of users with disabilities to create a superior experience for the 100%."
      ),
    },
    {
      id: "speed",
      question: localize("How does AppLass optimize for speed?"),
      answer: localize(
        "We minimize JavaScript execution time to the micro-second using mathematical optimization. Core utility payloads stay under 2.1KB to ensure green Core Web Vitals scores."
      ),
    },
    {
      id: "privacy",
      question: localize("What is AppLass's privacy policy?"),
      answer: localize(
        "AppLass uses Zero-Telemetry Architecture. We never log personal identifiers, track user behavior, or include third-party analytics SDKs. All data stays 100% on-device for maximum user privacy."
      ),
    },
  ],
  SCREENVEIL: [
    {
      question: localize("Does ScreenVeil work on LCD screens?"),
      answer: localize(
        "Yes. On LCD displays ScreenVeil acts as a screen dimmer and reduces brightness-related battery drain. Maximum savings of 60%+ are achieved on AMOLED/OLED displays, where black pixels physically power off."
      ),
    },
    {
      question: localize("How is ScreenVeil different from YouTube Premium?"),
      answer: localize(
        "YouTube Premium only covers YouTube. ScreenVeil is a system-level utility that works across every app — Netflix, Spotify, Twitch, podcast players, and more. It also adds pocket mode to block accidental touches while your screen is covered."
      ),
    },
    {
      question: localize("What is ScreenVeil?"),
      answer: localize(
        "ScreenVeil is a free Android app with 10,000+ downloads and a 4.4-star rating. It overlays a pure black layer on AMOLED/OLED screens so pixels physically turn off, saving 60%+ battery while you listen to YouTube, podcasts, or any audio."
      ),
    },
    {
      question: localize("Does ScreenVeil require root access?"),
      answer: localize(
        "No. ScreenVeil requires only the standard Android Overlay permission to function. No root, no ADB, no special setup. Install and activate in under 30 seconds."
      ),
    },
    {
      question: localize("Will ScreenVeil get killed by battery optimizers on Samsung or Xiaomi devices?"),
      answer: localize(
        "ScreenVeil is engineered to handle aggressive battery management on MIUI, OneUI, and OxygenOS. We recommend adding ScreenVeil to your device's battery optimization whitelist for uninterrupted session performance."
      ),
    },
    {
      question: localize("Is ScreenVeil safe? What data does it collect?"),
      answer: localize(
        "ScreenVeil collects zero personal data. It requires no internet access and contains no third-party analytics SDKs. The only permission it needs is \"Display over other apps\" — nothing else."
      ),
    },
    {
      question: localize("Does ScreenVeil work with Bluetooth headphones and earbuds?"),
      answer: localize(
        "Yes. ScreenVeil only controls the display layer — audio routing is handled entirely by Android. It works with all Bluetooth devices, wired headphones, speakers, and car audio systems."
      ),
    },
  ],
  FOMOGEN: [
    {
      question: localize("What is FomoGen?"),
      answer: localize(
        "FomoGen is a Shopify conversion app that adds social proof notifications, scarcity timers, sticky add-to-cart, free shipping bars, and trust badges in a single install. The entire script payload is under 2.1KB, making it safe for Core Web Vitals and Lighthouse scores."
      ),
    },
    {
      question: localize("Is FomoGen free?"),
      answer: localize(
        "Yes. FomoGen has a free plan that includes 1 active campaign, 100 monthly notifications, and core conversion tools. Paid plans start at $9.99/month for higher limits and full customization."
      ),
    },
    {
      question: localize("Will FomoGen slow down my Shopify store?"),
      answer: localize(
        "No. FomoGen is engineered specifically to avoid speed penalties. Its payload is under 2.1KB — smaller than most product images. It will not trigger Shopify Speed Score penalties or Google's \"Long Task\" warnings."
      ),
    },
    {
      question: localize("How is FomoGen different from Vitals or Nudgify?"),
      answer: localize(
        "Vitals bundles 40+ features most merchants never use, adding significant script weight. Nudgify relies on cloud rendering with noticeable latency. FomoGen gives you the 5 highest-converting tools only, delivered in a fraction of the payload."
      ),
    },
    {
      question: localize("Does FomoGen work with all Shopify themes?"),
      answer: localize(
        "Yes. FomoGen installs via Shopify's App Block system and is compatible with all Online Store 2.0 themes including Dawn, Refresh, Sense, and all major paid themes. No code editing required."
      ),
    },
    {
      question: localize("Is FomoGen GDPR and CCPA compliant?"),
      answer: localize(
        "Yes. FomoGen does not collect personal shopper data. Social proof notifications use anonymized purchase signals only. No cookies are set without consent, and the app includes a privacy-safe mode for EU storefronts."
      ),
    },
    {
      question: localize("Can I show real purchase data in the social proof notifications?"),
      answer: localize(
        "Yes. FomoGen connects to your Shopify order data to display real recent purchases. You can configure display rules including time delay, geolocation filtering, and product collection targeting."
      ),
    },
  ],
  MINDFUL_GUARD: [
    {
      question: localize("What is Mindful Guard?"),
      answer: localize(
        "Mindful Guard is a privacy-first Android app blocker built on a zero-telemetry, fully offline architecture. It offers a generous Free tier (3 sessions/day) and premium plans for unlimited access, helping users reclaim an average of 2.4 hours of daily focus time."
      ),
    },
    {
      question: localize("Does Mindful Guard work on Xiaomi, Samsung, or MIUI devices?"),
      answer: localize(
        "Yes. Mindful Guard is specifically engineered to handle aggressive battery management from Android skins including MIUI, OneUI, and HyperOS. Add it to your battery optimization whitelist for uninterrupted blocking sessions."
      ),
    },
    {
      question: localize("Is Mindful Guard safe for privacy?"),
      answer: localize(
        "Mindful Guard requires no internet connection to function and contains zero third-party analytics SDKs. Your block lists, schedules, and usage data never leave your device. Unlike VPN-based blockers (Opal, Freedom), there is no cloud component at all."
      ),
    },
    {
      question: localize("How does Strict Mode work?"),
      answer: localize(
        "Strict Mode locks your settings for a chosen duration. Once active, you cannot change your block list, disable the app, or uninstall it until the timer expires. It is designed for people who know they will try to bypass their own rules — and want a hard stop."
      ),
    },
    {
      question: localize("Does Mindful Guard use a VPN?"),
      answer: localize(
        "No. VPN-based blockers route your traffic through an external server, which creates latency, drains battery, and sends usage data off-device. Mindful Guard uses Android's native Accessibility API to block apps locally with 0ms latency and zero battery overhead."
      ),
    },
    {
      question: localize("Which apps can Mindful Guard block?"),
      answer: localize(
        "Mindful Guard can block any installed Android app — Instagram, TikTok, YouTube, Twitter/X, Reddit, games, browsers, or any custom app. You choose exactly which apps to block and when."
      ),
    },
    {
      question: localize("Does Mindful Guard track my screen time or usage?"),
      answer: localize(
        "Any analytics Mindful Guard generates are stored exclusively on your device and are never transmitted anywhere. We have no server-side visibility into how you use the app."
      ),
    },
    {
      question: localize("How is Mindful Guard different from Android's built-in Digital Wellbeing?"),
      answer: localize(
        "Android's Digital Wellbeing can be bypassed in seconds from Settings. Mindful Guard's Strict Mode cannot be bypassed — not even by going to Settings or attempting an uninstall. It also provides more granular scheduling and works on devices where Digital Wellbeing is disabled by manufacturers."
      ),
    },
    {
      question: localize("Mindful Guard vs ScreenVeil: What is the difference?"),
      answer: localize(
        "Mindful Guard is an app blocker designed to stop you from opening distracting apps entirely. ScreenVeil is a battery-saving utility that places a black overlay on your screen so you can listen to background audio without draining power."
      ),
    },
    {
      question: localize("What is a zero telemetry blocker?"),
      answer: localize(
        "Zero telemetry means the app does not collect, record, or transmit any data about which apps you block or how long you use your phone. Everything stays 100% locally on your device without communicating with cloud servers."
      ),
    },
    {
      question: localize("Mindful Guard vs Forest: Which should I choose?"),
      answer: localize(
        "Forest uses gamification (growing virtual trees) to encourage focus, but you can still easily exit the app and kill your tree. Mindful Guard uses a Strict Mode that forcibly prevents you from opening blocked apps, even if your willpower drops."
      ),
    },
    {
      question: localize("Does Opal drain battery on Android?"),
      answer: localize(
        "Yes, Opal uses a local VPN to block apps, forcing your phone's network stack to stay active 24/7. Mindful Guard completely avoids VPNs, using native Android systems instead to drop battery drain to almost zero."
      ),
    },
  ],
  DIGITAL_WELLNESS: [
    {
      question: localize("What is digital wellness?"),
      answer: localize(
        "Digital wellness is the practice of maintaining a healthy relationship with technology. It involves managing screen time, protecting digital privacy, and ensuring that your device usage does not negatively impact your physical or mental health."
      ),
    },
    {
      question: localize("Are there free apps to reduce screen time on Android?"),
      answer: localize(
        "Yes. While built-in tools like Google’s Digital Wellbeing provide basic tracking, third-party apps like Mindful Guard offer more advanced 'hard blocking' features for free, without the need for an account or internet connection."
      ),
    },
    {
      question: localize("How does screen time affect productivity?"),
      answer: localize(
        "Research indicates that it takes an average of 23 minutes to refocus on a task after being distracted by a digital notification. Unmanaged screen time fragments your attention and significantly increases the time needed to complete complex work."
      ),
    },
  ],
  ECOMMERCE_PERFORMANCE: [
    {
      question: localize("What is a good conversion rate for Shopify in 2026?"),
      answer: localize(
        "While the average mobile conversion rate is approximately 1.2%, top-performing Shopify stores (the top 10%) achieve rates of 4.7% or higher."
      ),
    },
    {
      question: localize("How does site speed affect SEO rankings?"),
      answer: localize(
        "Google uses site speed (via Core Web Vitals) as a direct ranking factor. Faster stores not only rank higher but also see significantly lower bounce rates and higher repeat purchase rates."
      ),
    },
    {
      question: localize("Are social proof apps worth it for new stores?"),
      answer: localize(
        "Yes. Because shoppers who interact with reviews are 161% more likely to convert, social proof is the most effective way for new brands to build the 'reputation juice' needed to compete with established players."
      ),
    },
  ],
});

export type FAQRegistryKey = keyof ReturnType<typeof getFaqRegistry>;
