import { localize } from "@/i18n/localize";

export const ARISELY_PLAY_ID = "com.arisely";

/** Play Store link with install-referrer attribution, e.g. ariselyPlayUrl("hero"). */
export function ariselyPlayUrl(content: string) {
  const referrer = encodeURIComponent(
    `utm_source=applass&utm_medium=site&utm_campaign=arisely-landing&utm_content=${content}`
  );
  return `https://play.google.com/store/apps/details?id=${ARISELY_PLAY_ID}&referrer=${referrer}`;
}

// Facts on this page follow the Arisely privacy policy (src/components/legal/AriselyPrivacy.astro)
// and the Play listing. Since v1.5.0 (Sept 30, 2026) free installs show one banner ad and Pro
// removes it — do not reintroduce "no ads" or "no data collected" claims.
export const getAriselyData = () => ({
  hero: {
    tagline: localize("Alarm clock for heavy sleepers"),
    headline: localize("The alarm that won't stop"),
    headlineAccent: localize("until you're actually up."),
    subheadline: localize(
      "Arisely rings at full volume until you finish a wake-up mission you choose: solve math, scan a barcode across the room, or do push-ups the camera counts. No sleepy one-tap off button."
    ),
    primaryCTA: localize("Get it on Google Play"),
    secondaryCTA: localize("See the missions"),
    subtext: localize("Free download · No account · Android"),
    downloadNow: localize("Download"),
    stickyMeta: localize("Free alarm clock · Android"),
  },

  summary: [
    { label: localize("Turn off by"), value: localize("Finishing 1 of 10 missions") },
    { label: localize("Reliability"), value: localize("Exact alarms on the alarm channel") },
    { label: localize("Privacy"), value: localize("No account · Alarms stay on your phone") },
  ],

  problem: {
    tag: localize("The problem"),
    title: localize("It's not your willpower. It's the off button."),
    description: localize(
      "A normal alarm can be silenced with one tap, and your half-asleep brain is very good at finding it. That is how you turn off an alarm you never remember hearing. Arisely removes the easy off switch."
    ),
  },

  steps: [
    {
      title: localize("Set an alarm and pick a mission"),
      description: localize(
        "Choose one of 10 missions and an Easy, Medium or Hard difficulty to match how deeply you sleep."
      ),
    },
    {
      title: localize("It rings at full volume"),
      description: localize(
        "The sound plays on Android's alarm channel, so it rings even with media muted or Do Not Disturb on."
      ),
    },
    {
      title: localize("Finish the mission to stop it"),
      description: localize(
        "There is no slide-to-stop. The alarm goes quiet only when the task is done, and by then you are awake."
      ),
    },
  ],

  missionsSection: {
    tag: localize("10 wake-up missions"),
    title: localize("Match the mission to how deeply you sleep."),
    description: localize(
      "A quick math problem is enough for light sleepers. For the heaviest sleepers, put a barcode in the kitchen or make yourself do push-ups."
    ),
  },

  missions: [
    { name: localize("Math"), description: localize("Solve a quick problem"), icon: "Calculator", color: "#F59E0B" },
    { name: localize("Memory"), description: localize("Watch a pattern, then repeat it"), icon: "Brain", color: "#22C55E" },
    { name: localize("Code"), description: localize("Retype a random code exactly"), icon: "Code", color: "#3B82F6" },
    { name: localize("Sequence"), description: localize("Find the next number in the pattern"), icon: "ListOrdered", color: "#8B5CF6" },
    { name: localize("Typing"), description: localize("Retype a short phrase exactly"), icon: "Keyboard", color: "#14B8A6" },
    { name: localize("Trivia"), description: localize("Answer a multiple-choice question"), icon: "HelpCircle", color: "#EC4899" },
    { name: localize("Shake"), description: localize("Shake your phone a set number of times"), icon: "Vibrate", color: "#0EA5E9" },
    { name: localize("Step"), description: localize("Take a set number of steps"), icon: "Footprints", color: "#F97316" },
    { name: localize("QR / Barcode"), description: localize("Scan a code you placed away from your bed"), icon: "QrCode", color: "#6366F1" },
    { name: localize("AI Push-Up"), description: localize("Do push-ups the camera counts"), icon: "Dumbbell", color: "#EF4444" },
  ],

  pushup: {
    tag: localize("Only in Arisely"),
    title: localize("An alarm that makes you move."),
    description: localize(
      "Set a push-up count and prop the phone up. The camera counts every rep and checks your form in real time, so you can't fake it or skip it. Once your heart rate is up, getting back into bed is a decision, not a reflex."
    ),
    points: [
      localize("Reps counted automatically by the camera"),
      localize("Form checked in real time, so half-reps don't count"),
      localize("Camera frames are processed on your phone and never recorded, stored or sent"),
    ],
  },

  reliability: {
    tag: localize("Built to actually fire"),
    title: localize("A hard alarm is useless if it rings late."),
    description: localize(
      "Android's battery rules can delay or silence alarms from ordinary apps. Arisely asks for the permissions that keep it on time, and explains each one."
    ),
    points: [
      {
        title: localize("Exact-time alarms"),
        description: localize("Fire at the minute you set, even when the phone is locked, idle or the app was closed hours ago."),
      },
      {
        title: localize("Alarm audio channel"),
        description: localize("Rings at full volume with media muted or Do Not Disturb on, with an extra-loud boost if you need it."),
      },
      {
        title: localize("Full-screen over the lock screen"),
        description: localize("The ring screen opens on its own instead of hiding in a notification."),
      },
      {
        title: localize("Survives restarts and battery savers"),
        description: localize("Alarms are rescheduled after a reboot, and a battery-optimization exemption stops Android killing the app."),
      },
    ],
    linkLabel: localize("Why Android alarms don't go off"),
  },

  everyday: {
    tag: localize("A real alarm clock, too"),
    title: localize("All the everyday basics."),
    points: [
      localize("Repeating alarms for the days you choose, plus one-off alarms"),
      localize("Snooze length and snooze limit you set, or snooze off entirely"),
      localize("Reminders before upcoming alarms"),
      localize("Wake to a built-in sound or any audio file on your phone"),
      localize("A sleep log of bedtimes and each morning's alarms"),
      localize("Dark mode and 12/24-hour time"),
    ],
  },

  gallery: {
    tag: localize("Inside the app"),
    title: localize("See Arisely in action."),
  },

  privacy: {
    tag: localize("Privacy & price"),
    title: localize("No account. Your alarms stay on your phone."),
    points: [
      {
        title: localize("No account, no sign-up"),
        description: localize("Install it and set an alarm. No email, no login."),
      },
      {
        title: localize("Stored on your device"),
        description: localize("Alarms, settings and your sleep log are never sent to Arisely's developer or any server. There is no cloud sync."),
      },
      {
        title: localize("Camera stays local"),
        description: localize("Push-up and barcode frames are processed on your phone and never recorded, stored or sent."),
      },
    ],
    priceTitle: localize("Free, with an optional Pro"),
    priceDescription: localize(
      "Arisely is free to download. The free version shows one banner ad on the Alarms, Sleep and Settings tabs — never on the ring screen, during a mission or over your lock screen. Arisely Pro, monthly, yearly or a one-time lifetime purchase, removes the ad."
    ),
    policyLink: localize("Read the privacy policy"),
  },

  comparison: {
    tag: localize("Comparison"),
    title: localize("Arisely vs a standard alarm app"),
    columns: [localize("Standard alarm app"), localize("Arisely")],
    rows: [
      [localize("Turn off"), localize("One tap or slide"), localize("Only by finishing a mission")],
      [localize("Volume"), localize("Can be muted by media volume or Do Not Disturb"), localize("Alarm channel, full volume")],
      [localize("Reliability"), localize("Can be delayed by battery limits"), localize("Exact-time alarms, even when locked or closed")],
      [localize("Physical wake-up"), localize("None"), localize("Push-ups, steps, shake or a walk to a barcode")],
      [localize("Account"), localize("Sometimes required"), localize("None")],
    ],
  },

  reading: {
    tag: localize("From the blog"),
    title: localize("Wake up on the first alarm"),
  },

  closing: {
    title: localize("Get up on the first alarm."),
    description: localize(
      "Pick a mission tonight. Tomorrow, the alarm keeps ringing until you've done it."
    ),
    subtext: localize("Free download · No account · Android"),
  },

  labels: {
    faqTag: localize("FAQ"),
    faqTitle: localize("Frequently asked questions"),
    step: localize("Step"),
  },
});

export const getAriselySchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Arisely",
  "alternateName": "Arisely: Alarm + AI Push-Up",
  "operatingSystem": "Android",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "description":
    "Arisely is an Android alarm clock for heavy sleepers. It keeps ringing at full volume until you finish one of 10 wake-up missions, including camera-counted push-ups.",
  "url": "https://applass.com/apps/arisely",
  "downloadUrl": `https://play.google.com/store/apps/details?id=${ARISELY_PLAY_ID}`,
  "publisher": { "@type": "Organization", "name": "AppLass", "url": "https://applass.com" },
});
