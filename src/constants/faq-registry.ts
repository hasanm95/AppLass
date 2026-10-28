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
        "Mindful Guard collects no data, and its rules and history stay on your phone. ScreenVeil shows no ads, but its Google Play Data safety section lists device or other IDs as collected and shared. Each app's Play listing shows exactly what it collects."
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
      question: localize("What is ScreenVeil?"),
      answer: localize(
        "ScreenVeil is a black screen overlay for Android. One tap on its floating button or Quick Settings tile turns the screen black while whatever you were playing keeps playing. It also has a dim mode, a sleep timer, pocket mode and biometric unlock. It is free to download and needs no account."
      ),
    },
    {
      question: localize("Does the audio keep playing when the screen is black?"),
      answer: localize(
        "Yes. ScreenVeil only draws a black layer over your own screen. The app underneath stays open and carries on exactly as before, so a lecture, podcast or playlist keeps playing."
      ),
    },
    {
      question: localize("Does ScreenVeil save battery?"),
      answer: localize(
        "On AMOLED and OLED screens, yes: a pure black pixel is switched off, so the display uses less power. The brighter your screen was and the longer you listen, the more you save. On LCD screens the backlight stays on, so the saving is small. ScreenVeil doesn't promise a fixed percentage, because it differs on every phone."
      ),
    },
    {
      question: localize("Why does ScreenVeil need the \"display over other apps\" permission?"),
      answer: localize(
        "It is the only permission you grant, and it is how Android lets an app draw a layer on top of other apps. ScreenVeil uses it to draw the black screen. It does not read your screen, record audio or video, or need your files, contacts or location."
      ),
    },
    {
      question: localize("How do I get my screen back?"),
      answer: localize(
        "Touch the black screen to show the unlock button, then tap it. If you turned on biometric unlock, only your fingerprint lifts the black screen."
      ),
    },
    {
      question: localize("Will it stop accidental touches in my pocket?"),
      answer: localize(
        "Yes. While the black screen is on, touches are blocked until you unlock on purpose. Pocket mode can also turn the screen black on its own when the phone goes into your pocket."
      ),
    },
    {
      question: localize("Does ScreenVeil work with Bluetooth headphones and earbuds?"),
      answer: localize(
        "Yes. ScreenVeil only controls what the screen shows. Android handles audio as usual, so Bluetooth headphones, wired earphones, speakers and car audio all work."
      ),
    },
    {
      question: localize("Does ScreenVeil need root?"),
      answer: localize(
        "No. Install it, tap Start Service and allow \"display over other apps\". There is no root, no ADB and no account."
      ),
    },
    {
      question: localize("ScreenVeil stops on my Samsung or Xiaomi phone. What can I do?"),
      answer: localize(
        "Some phones close background apps aggressively. Exclude ScreenVeil from battery optimization in your phone's settings so the overlay and the sleep timer keep running."
      ),
    },
    {
      question: localize("ScreenVeil vs Mindful Guard: what is the difference?"),
      answer: localize(
        "ScreenVeil turns your screen black while audio keeps playing. Mindful Guard, also by AppLass, keeps you out of distracting apps and limits Reels, Shorts and TikTok."
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
        "Mindful Guard is an Android app blocker with Reel Guard. It limits the short-form feeds in Instagram, YouTube, TikTok, Facebook and Snapchat with daily and per-session limits, and blocks any app you choose with a quick focus timer or a weekly schedule. It has a free plan, shows no ads and needs no account."
      ),
    },
    {
      question: localize("Can I block Reels but still use Instagram?"),
      answer: localize(
        "Yes. Reel Guard closes only the Reels feed when your limit is reached. Messages, Stories and the rest of Instagram keep working. The same applies to YouTube Shorts, TikTok's feed, Facebook Reels and Snapchat Spotlight."
      ),
    },
    {
      question: localize("Is Mindful Guard free?"),
      answer: localize(
        "Yes, you can start on the free plan. Premium unlocks more and is available as a monthly, yearly or one-time lifetime purchase. Google Play shows the price in your currency."
      ),
    },
    {
      question: localize("Does Mindful Guard collect my data?"),
      answer: localize(
        "No. Its Google Play Data safety section declares no data collected and no data shared with third parties. There are no ads, no analytics and no account. Your block lists, schedules and stats stay on your phone."
      ),
    },
    {
      question: localize("Why does it need the Accessibility Service?"),
      answer: localize(
        "Android's Accessibility Service is how Mindful Guard notices that a blocked app or a short-form feed has opened, so it can close it in real time. It is used only for blocking. Mindful Guard also asks to display over other apps, to show the limit screen, and to be exempt from battery optimization, so blocking keeps running in the background."
      ),
    },
    {
      question: localize("Does Mindful Guard use a VPN?"),
      answer: localize(
        "No. Mindful Guard blocks apps on the device using Android's Accessibility Service, so it never routes or inspects your network traffic."
      ),
    },
    {
      question: localize("Does it work on Samsung, Xiaomi and other phones that close background apps?"),
      answer: localize(
        "Yes. Allow Mindful Guard to ignore battery optimization when it asks. On phones that close background apps aggressively, such as some Xiaomi, Samsung and Huawei models, this keeps your limits and schedules running."
      ),
    },
    {
      question: localize("How is Mindful Guard different from Digital Wellbeing?"),
      answer: localize(
        "Digital Wellbeing's app timer covers a whole app and is easy to turn off in Settings. Mindful Guard can limit only the Reels or Shorts feed, cap each session, count reels, add a cooldown between sessions, and keeps a block in place until it ends."
      ),
    },
    {
      question: localize("Mindful Guard vs ScreenVeil: what is the difference?"),
      answer: localize(
        "Mindful Guard keeps you out of distracting apps and feeds. ScreenVeil, also by AppLass, turns your screen black while audio keeps playing, to hide the screen or save battery on AMOLED phones."
      ),
    },
  ],
  ARISELY: [
    {
      question: localize("What is Arisely?"),
      answer: localize(
        "Arisely is an Android alarm clock for heavy sleepers. Instead of a single off button, it keeps ringing at full volume until you finish a wake-up mission you choose, such as solving math, scanning a barcode or doing push-ups counted by the camera. It is made by AppLass."
      ),
    },
    {
      question: localize("How does Arisely stop me sleeping through my alarm?"),
      answer: localize(
        "It removes the easy off switch. The alarm plays on Android's alarm audio channel, so it rings even with media muted or Do Not Disturb on, and it only stops once you finish your mission. Because the mission needs real attention or movement, you can't dismiss it in your sleep."
      ),
    },
    {
      question: localize("What wake-up missions does Arisely have?"),
      answer: localize(
        "Arisely has 10 missions: Math, Memory, Code, Sequence, Typing, Trivia, Shake, Step, QR / Barcode and AI Push-Up. You can choose Easy, Medium or Hard difficulty, and use a quick math problem for light sleep or push-ups and a barcode across the room for the deepest sleep."
      ),
    },
    {
      question: localize("How does the AI push-up alarm work?"),
      answer: localize(
        "You set a number of push-ups and place the phone where its camera can see you. Arisely counts each rep and checks your form in real time, and the alarm keeps ringing until the set is done. The camera frames are processed on your phone and are never recorded, stored or sent."
      ),
    },
    {
      question: localize("Will Arisely ring if my phone is locked or on Do Not Disturb?"),
      answer: localize(
        "Yes. Arisely uses exact-time alarms that fire even when the phone is locked, idle or the app has been closed for hours, and it plays on the alarm audio channel, which Do Not Disturb and muted media do not silence. It also reschedules your alarms after the phone restarts."
      ),
    },
    {
      question: localize("Is Arisely free? Does it have ads?"),
      answer: localize(
        "Arisely is free to download and needs no account. The free version shows one banner ad on the Alarms, Sleep and Settings tabs, never on the ring screen, during a mission or over the lock screen. Arisely Pro, sold monthly, yearly or as a one-time lifetime purchase, removes the ad."
      ),
    },
    {
      question: localize("Does Arisely collect my data?"),
      answer: localize(
        "Your alarms, settings and sleep log stay on your phone and are never sent to Arisely's developer or any server. Only two third parties are involved: Google AdMob receives your advertising ID to show the banner ad to free users, and RevenueCat checks whether Pro is active using a random anonymous ID."
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
        "Yes. Mindful Guard works offline, and its Google Play Data safety section declares no data collected. It does not require an account, does not use a VPN, and keeps your focus sessions on your device."
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
