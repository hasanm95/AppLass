export const FOMOGEN_DATA = {
  hero: {
    tagline: "High-Performance Social Proof",
    headline: "Stop Losing 98% of Your Traffic.",
    headlineAccent: "Turn Browsers into Buyers Instantly.",
    subheadline:
      "The all-in-one conversion toolkit: Social Proof, Stock Scarcity, Sticky Cart, and Free Shipping Bars. Replace 5 slow apps with one lightweight solution.",
    primaryCTA: "Install on Shopify — Free",
    secondaryCTA: "Explore the Logic",
    shopifyUrl: "https://apps.shopify.com/fomogen",
    subtext: "Free plan available • No coding required • 5-Star Support",
    stats: [
      { value: "<2.1KB", label: "Payload" },
      { value: "0ms", label: "Main Thread" },
      { value: "WCAG 2.1", label: "Compliant" },
      { value: "Mobile", label: "Optimized" },
    ],
  },

  speedBenefit: {
    title: 'Is "App Bloat" Killing Your Store’s Speed?',
    body: "You know you need social proof to sell. But installing one app for Sales Pops, another for Countdown Timers, and a third for Sticky Carts destroys your site speed.",
    fact: "Fact: A 1-second delay in page load can drop conversions by up to 17%.",
    struggle:
      'Most "all-in-one" apps are expensive, complex, and slow down your theme.',
    solution:
      "FOMO Gen gives you the essential 5 conversion tools in a single, speed-optimized script.",
  },

  // 5 Core Pillars from new content strategy
  features: [
    {
      id: "social-proof-notifications",
      title: "Social Proof Notifications",
      subtitle: "Show Them You’re Busy.",
      description:
        "Display recent purchases to build instant trust. 92% of consumers hesitate to buy without social proof. Eliminate that doubt.",
      iconName: "ShoppingCart",
      highlight: "Build Trust",
      imageSrc: "social-proof-ui.png",
    },
    {
      id: "scarcity-urgency",
      title: "Scarcity & Urgency",
      subtitle: 'Trigger the "Fear of Missing Out."',
      description:
        'Use Low Stock Countdowns ("Only 2 left!") and Timer Bars to push customers from "browsing" to "buying" right now.',
      iconName: "Timer",
      highlight: "Drive Urgency",
      imageSrc: "scarcity-ui.png",
    },
    {
      id: "sticky-add-to-cart",
      title: "Sticky Add-To-Cart",
      subtitle: "Capture Mobile Sales.",
      description:
        "Keep your Buy Button visible on every scroll. Reduce friction and make checkout accessible from anywhere on the page.",
      iconName: "ShoppingBag",
      highlight: "Reduce Friction",
      imageSrc: "sticky-cart-ui.png",
    },
    {
      id: "free-shipping-bar",
      title: "Progressive Free Shipping Bar",
      subtitle: "Boost Average Order Value (AOV).",
      description:
        '"Spend $15 more for Free Shipping." Motivate customers to add more items to their cart with a dynamic progress bar.',
      iconName: "TrendingUp",
      highlight: "Increase AOV",
      imageSrc: "shipping-bar-ui.png",
    },
    {
      id: "trust-badges",
      title: "Trust Badges",
      subtitle: "Secure the Checkout.",
      description:
        "Display verified payment seals (Visa, PayPal, SSL) to reduce cart abandonment anxiety.",
      iconName: "ShieldCheck",
      highlight: "Build Confidence",
    },
  ],

  testimonials: [
    {
      quote:
        "I uninstalled Vitals and Nudgify. FOMO Gen does exactly what I need without the lag.",
      author: "Beta Tester",
      niche: "Fashion Niche",
    },
    {
      quote:
        "My add-to-cart rate jumped 15% just by turning on the Sticky Cart.",
      author: "Beta Tester",
      niche: "Dropshipping Store",
    },
  ],

  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Supercharge your store",
    description: "From free to enterprise, we have a plan that grows with you. No hidden fees, no revenue sharing.",
    tiers: [
      {
        name: "Free Plan",
        price: "$0",
        period: "Forever",
        description: "Test all features with basic limits.",
        features: [
          "1 Active Campaign",
          "100 Notifications/mo",
          "50 Social Proof Badges/mo",
          "1 Active Timer",
          "1 Active Stock Alert",
          "Basic Exit Intent",
          "Basic Sticky Cart",
          "3 Trust Badges",
        ],
        limitations: [
          '"Powered by FOMO Gen" branding',
          "Limited customization",
          "Basic targeting only",
        ],
        cta: "Install for Free",
        highlighted: false,
      },
      {
        name: "Starter Plan",
        price: "$9.99",
        period: "per month",
        description: "Best value for small to medium stores.",
        features: [
          "Everything in Free, plus:",
          "3 Active Campaigns",
          "2,500 Notifications/mo",
          "1,000 Social Proof Badges/mo",
          "3 Active Timers & Stock Alerts",
          "Full Customization",
          "Remove Branding",
          "Product/Collection Targeting",
          "Priority Email Support",
        ],
        limitations: [],
        cta: "Install to Start Trial",
        highlighted: true,
        subLabel: "Perfect for $5K - $50K/mo",
      },
      {
        name: "Growth Plan",
        price: "$19.99",
        period: "per month",
        description: "For growing stores. Higher limits + advanced targeting.",
        features: [
          "Everything in Starter, plus:",
          "10 Active Campaigns",
          "10,000 Notifications/mo",
          "5,000 Social Proof Badges/mo",
          "10 Active Timers & Stock Alerts",
          "Advanced Geo-Targeting",
          "Device Targeting",
          "Customer Segmentation",
          "<24h Priority Support",
        ],
        limitations: [],
        cta: "Install to Start Trial",
        highlighted: false,
        subLabel: "Perfect for $50K - $200K/mo",
      },
      {
        name: "Professional Plan",
        price: "$39.99",
        period: "per month",
        description: "For high-volume stores. Unlimited everything.",
        features: [
          "Everything in Growth, plus:",
          "Unlimited Everything",
          "Custom CSS Overrides",
          "Dedicated Support (<12h)",
          "Migration Assistance",
          "Early Access Features",
          "Onboarding Call (Optional)",
        ],
        limitations: [],
        cta: "Contact Sales",
        highlighted: false,
        subLabel: "Perfect for $200K+/mo",
      },
    ],
    matrix: [
      { feature: "Progress Indicators", free: "1", starter: "3", growth: "10", pro: "Unlimited" },
      { feature: "Purchase Notifications", free: "100/mo", starter: "2,500/mo", growth: "10,000/mo", pro: "Unlimited" },
      { feature: "Social Proof Badges", free: "50/mo", starter: "1,000/mo", growth: "5,000/mo", pro: "Unlimited" },
      { feature: "Countdown Timers", free: "1", starter: "3", growth: "10", pro: "Unlimited" },
      { feature: "Stock Alerts", free: "1", starter: "3", growth: "10", pro: "Unlimited" },
      { feature: "Exit Intent", free: "1 config", starter: "Full Customization", growth: "Full Customization", pro: "Full Customization" },
      { feature: "Sticky Add-to-Cart", free: "Basic", starter: "Full Customization", growth: "Full Customization", pro: "Full Customization" },
      { feature: "Trust Badges", free: "3 badges", starter: "Unlimited + Custom", growth: "Unlimited + Custom", pro: "Unlimited + Custom" },
      { feature: "Colors/Styling", free: "Limited", starter: "Full", growth: "Full", pro: "Full + CSS" },
      { feature: "Targeting", free: "Basic", starter: "Product/Collection", growth: "Geo/Device/Segment", pro: "All + Custom" },
      { feature: "Remove Branding", free: "❌", starter: "✅", growth: "✅", pro: "✅" },
      { feature: "Support", free: "Email", starter: "Priority Email", growth: "Priority (<24h)", pro: "Dedicated (<12h)" },
    ],
    faqs: [
      {
        q: "Do I need a credit card for the free trial?",
        a: "No, you can start the 14-day free trial on any paid plan without a credit card. You'll only be charged if you choose to continue after the trial."
      },
      {
        q: "Can I change plans anytime?",
        a: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
      },
      {
        q: "What happens if I exceed my display limits?",
        a: "We'll notify you when you're close to your limit. Your campaigns will pause until the next billing cycle or until you upgrade to a higher plan."
      }
    ],
    launchOffers: [
      { highlight: "50% OFF", text: "first 3 months" },
      { highlight: "Migration Offer:", text: "Free setup assistance" }
    ]
  },

  displayOptions: {
    title: "Customization Architecture",
    subtitle: "Make It Yours",
    categories: [
      {
        title: "Display Modalities",
        items: [
          "Dynamic Pop-ups",
          "Sticky Banners",
          "Announcement Bars",
          "Inline Widgets",
          "Cart Page Proof",
          "Product Anchors",
        ],
      },
      {
        title: "Timing Logic",
        items: [
          "Fixed End Dates",
          "Recurring Cycles",
          "Per-Visit Resets",
          "Fixed Minute Delays",
          "One-Time Sessions",
          "Shipping Thresholds",
        ],
      },
      {
        title: "Styling Components",
        items: [
          "Proprietary CSS",
          "Green-Teal Gradients",
          "Tactile Typography",
          "Custom Positions",
          "Elite Animations",
          "Mobile-First Rendering",
        ],
      },
    ],
  },

  cta: {
    title: "Ready to Scale Your Sales?",
    subtitle: "Beta Launch",
    description:
      "Get the Professional Plan features for free while we are in Beta. One-click install from Shopify App Store. Works with any theme.",
    highlights: [
      "Beta Features Included",
      "No Coding Required",
      "One-Click Install",
      "5-Star Support",
    ],
    primaryCTA: "Get FOMO Gen Now",
    shopifyUrl: "https://apps.shopify.com/fomogen",
  },

  livePreview: {
    notification: {
      name: "Sarah from New York",
      action: "just purchased",
      product: "Premium Focus Gear",
      time: "2 minutes ago",
    },
    progress: {
      current: 85,
      target: 100,
      message: "You're $15 away from FREE shipping!",
    },
  },
};
