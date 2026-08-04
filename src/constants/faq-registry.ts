import { localize } from "@/i18n/localize";

export const getFaqRegistry = () => ({
  HOME: [
    {
      question: localize("Which AppLass app do I need?"),
      answer: localize(
        "Pick ScreenVeil if you want to keep listening to video with the screen off and save battery. Pick Mindful Guard if you want to block distracting apps on a schedule. Pick FomoGen if you run a Shopify store and want live sales and stock notifications."
      ),
    },
    {
      question: localize("Are the apps free?"),
      answer: localize(
        "ScreenVeil and Mindful Guard are both free to download on the Google Play Store. FomoGen is installed through the Shopify App Store, where you can see current plans and pricing."
      ),
    },
    {
      id: "privacy",
      question: localize("Do any of them collect my data?"),
      answer: localize(
        "No. Our apps do not include third-party analytics SDKs and do not log what you do. Mindful Guard keeps all of its rules and history on your phone, and nothing is sent to a server."
      ),
    },
    {
      question: localize("Does ScreenVeil work on phones without an OLED screen?"),
      answer: localize(
        "Yes, it works on any Android phone. The battery benefit is largest on OLED and AMOLED screens, where black pixels switch off completely instead of staying lit."
      ),
    },
    {
      question: localize("Will FomoGen slow down my Shopify store?"),
      answer: localize(
        "It is built to stay small and to avoid the third-party tracking scripts that usually cause the damage. It also meets WCAG 2.1 AA, so it will not break accessibility on your theme."
      ),
    },
    {
      question: localize("Do I need to create an account?"),
      answer: localize(
        "No. None of our Android apps ask you to sign up, hand over an email address, or create a profile. Install and start using them."
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
        "Mindful Guard is a free Android app blocker that stops Reels, Shorts, TikTok, and any other app you choose. It's built 100% offline with zero telemetry, so nothing about how you use it ever leaves your phone. The free tier gives you 3 focus sessions a day; premium unlocks unlimited. Most people get back about 2.4 hours of focus time daily."
      ),
    },
    {
      question: localize("Does Mindful Guard work on Xiaomi, Samsung, or MIUI devices?"),
      answer: localize(
        "Yes. MIUI, OneUI, and HyperOS are known for aggressively killing background apps to save battery — Mindful Guard is built to survive that. Add it to your battery optimization whitelist and your blocking sessions will run uninterrupted."
      ),
    },
    {
      question: localize("Is Mindful Guard safe for privacy?"),
      answer: localize(
        "Yes. Mindful Guard doesn't need an internet connection to work, and it has zero third-party analytics SDKs. Your block lists, schedules, and usage data stay on your phone — period. Unlike VPN-based blockers like Opal or Freedom, there's no cloud component at all."
      ),
    },
    {
      question: localize("How does Strict Mode work?"),
      answer: localize(
        "Strict Mode locks your settings for a duration you choose. Once it's on, you can't change your block list, disable the app, or uninstall it until the timer runs out. It's built for the moments you know your future self will try to cheat."
      ),
    },
    {
      question: localize("Does Mindful Guard use a VPN?"),
      answer: localize(
        "No. VPN-based blockers route your traffic through an external server — that adds lag, drains your battery, and sends usage data off your device. Mindful Guard blocks apps locally using Android's native Accessibility API, so there's no latency and no battery hit."
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
        "Any stats Mindful Guard shows you — streaks, time saved, sessions completed — are calculated and stored only on your device. We never see any of it; there's no server for it to go to."
      ),
    },
    {
      question: localize("How is Mindful Guard different from Android's built-in Digital Wellbeing?"),
      answer: localize(
        "Android's Digital Wellbeing is easy to bypass — a few taps in Settings and it's off. Mindful Guard's Strict Mode can't be turned off that way, not even by uninstalling. It also gives you more granular scheduling and works on devices where manufacturers have disabled Digital Wellbeing entirely."
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
        "Zero telemetry means exactly what it sounds like: the app doesn't collect, record, or transmit any data about which apps you block or how long you use your phone. Everything stays on your device — nothing ever talks to a cloud server."
      ),
    },
    {
      question: localize("Mindful Guard vs Forest: Which should I choose?"),
      answer: localize(
        "Forest gamifies focus by growing virtual trees, but you can still just exit the app and kill your tree whenever you want. Mindful Guard's Strict Mode physically prevents you from opening blocked apps — even on the days your willpower gives out."
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
