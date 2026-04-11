import { localize } from "@/i18n/localize";

export const getFaqRegistry = () => ({
  HOME: [
    {
      question: localize("What is AppLass?"),
      answer: localize(
        "AppLass is an elite software engineering studio. We build high-performance Shopify apps and Android utilities that prioritize mathematical precision and user privacy. Our goal is to eliminate digital 'bloat' and help you reclaim your performance."
      ),
    },
    {
      question: localize("How does AppLass optimize for speed?"),
      answer: localize(
        "We use a first-principles approach to coding. Our Shopify apps, like FomoGen, have a payload of less than 2.1KB — meaning they load faster than a single product image. We avoid third-party tracking and heavy libraries to keep your site at peak performance."
      ),
    },
    {
      question: localize("Are your apps accessible?"),
      answer: localize(
        "Yes. Accessibility is not a feature; it's our foundation. Every tool we build is designed to be WCAG 2.1 compliant, ensuring that your digital experience is inclusive of all users regardless of their physical capabilities."
      ),
    },
    {
      question: localize("How do I contact support?"),
      answer: localize(
        "You can reach our engineering lab directly at support@applass.com. Because our tools are built for precision, we offer direct developer support to ensure your integration is seamless."
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
        "ScreenVeil is a free Android app with 10,000+ downloads and a 4.4-star rating. It overlays a pure black layer on AMOLED/OLED screens so pixels physically turn off, saving 60% battery while you listen to YouTube, podcasts, or any audio."
      ),
    },
    {
      question: localize("How do I play YouTube in the background like Premium?"),
      answer: localize(
        "Simply open the YouTube app, start your video, and activate ScreenVeil from your notification shade or the floating button. Your screen will go black, but the audio will continue to play. For more details, see our full guide on <a href='/blog/youtube-background-play-2026-workaround' class='text-green-500 underline'>YouTube Background Play in 2026</a>."
      ),
    },
    {
      question: localize("Why does ScreenVeil need 'Display over other apps' permission?"),
      answer: localize(
        "This is the only way Android allows an app to place a layer over other apps (like YouTube or Netflix). We use this to draw the pure black 'Veil' over your screen. ScreenVeil does not require internet, camera, or contact permissions."
      ),
    },
    {
      question: localize("Will this work while my phone is in my pocket?"),
      answer: localize(
        "Yes. ScreenVeil includes a 'Pocket Guard' feature that blocks all touch inputs while the veil is active. This prevents accidental skipping, pausing, or 'ghost dialing' while your phone is in your pocket or bag."
      ),
    },
    {
      question: localize("Does ScreenVeil drain battery?"),
      answer: localize(
        "No. ScreenVeil is engineered for extreme efficiency. It uses 0% CPU while active. By turning off the pixels on AMOLED screens, it actually saves up to 60% of your total device power draw during video playback."
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
        "FomoGen is an elite social proof engine for Shopify. It coordinates 9 distinct urgency and scarcity modules — including purchase notifications, exit-intent logic, and stock telemetry — to maximize conversion performance."
      ),
    },
    {
      question: localize("Will FomoGen slow down my Shopify store?"),
      answer: localize(
        "No. Every extra kilobyte your store loads is a customer you risk losing. FomoGen's total payload is under 2.1KB — lighter than a single product thumbnail. It is engineered to keep your Core Web Vitals in the green."
      ),
    },
    {
      question: localize("How is FomoGen different from Vitals or Nudgify?"),
      answer: localize(
        "Vitals bundles 40+ features that most merchants never use, adding massive script weight. Nudgify relies on cloud-rendering with noticeable latency. FomoGen gives you the 5 highest-converting tools in one speed-optimized script."
      ),
    },
    {
      question: localize("Does FomoGen work with all Shopify themes?"),
      answer: localize(
        "Yes. FomoGen installs via Shopify's App Block system and is compatible with all Online Store 2.0 themes, including Dawn, Refresh, Sense, and all major paid themes. No code editing required."
      ),
    },
    {
      question: localize("Is FomoGen GDPR and CCPA compliant?"),
      answer: localize(
        "Yes. FomoGen does not collect personal shopper data. Social proof notifications use anonymized purchase signals only. No cookies are set without consent, and the app includes a privacy-safe mode for EU stores."
      ),
    },
    {
      question: localize("Can I show real purchase data?"),
      answer: localize(
        "Yes. FomoGen connects to your Shopify order data to display real recent purchases. You can configure display rules including time delay, geolocation filtering, and product collection targeting."
      ),
    },
    {
      question: localize("Do I need coding skills?"),
      answer: localize(
        "No. FomoGen is designed for non-technical merchants. You can customize every color, position, and timing logic via a simple visual dashboard inside your Shopify admin."
      ),
    },
    {
      question: localize("How do I contact support?"),
      answer: localize(
        "Access our Technical Lab directly via the 'Support' module in your dashboard or reach out to us at support@applass.com."
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
      question: localize("How does screen time affect productivity?"),
      answer: localize(
        "Research indicates it takes an average of 23 minutes to refocus on a task after being distracted by a digital notification. Unmanaged screen time fragments your attention and significantly increases the time required to complete deep, complex work."
      ),
    },
    {
      question: localize("Are free apps to help reduce screen time on Android?"),
      answer: localize(
        "Yes. While many apps require subscriptions, utilities like Mindful Guard offer powerful system-level blocking for free. Additionally, built-in tools like Android's 'Digital Wellbeing' provide basic tracking, though they are often easier to bypass than dedicated focus apps."
      ),
    },
    {
      question: localize("What is 'Screen Apnea'?"),
      answer: localize(
        "Screen Apnea is the tendency to hold your breath or breathe shallowly while working at a screen. This triggers a stress response in the body. Using the 20-20-20 rule and intentional breathing breaks helps mitigate this physiological strain."
      ),
    },
    {
      question: localize("Why do I need an app block instead of just willpower?"),
      answer: localize(
        "Social media algorithms are engineered by thousands of engineers to keep you scrolling. Willpower is a finite resource that depletes throughout the day. Using a 'hard' block like Mindful Guard removes the decision-making process entirely, protecting your focus automatically."
      ),
    },
    {
      question: localize("Is Mindful Guard safe for privacy?"),
      answer: localize(
        "Yes. Mindful Guard is 100% offline. It does not require an account, does not use a VPN, and never transmits your usage data to any server. Your focus sessions stay on your device."
      ),
    },
    {
      question: localize("How do I start a digital detox?"),
      answer: localize(
        "Start small. Begin with Step 6 of our guide: The Analog First Hour. Once you've mastered the first 60 minutes of your day without a screen, progress to Step 1 (Notification Audit) and eventually Step 7 (The Weekly Air-Gap)."
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
