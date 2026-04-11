import { localize } from "@/i18n/localize";

export const getFomoGenData = () => ({
  hero: {
    tagline: localize("High-Performance Social Proof"),
    headline: localize("The Shopify Social Proof App"),
    headlineAccent: localize("That Won't Slow Your Store Down."),
    subheadline: localize(
      "Replace 5 bloated conversion apps with one <2.1KB script. Social proof, scarcity timers, sticky cart, and free shipping bars — all in one install."
    ),
    primaryCTA: localize("Install on Shopify — Free"),
    secondaryCTA: localize("Explore the Logic"),
    shopifyUrl: "https://apps.shopify.com/fomogen",
    subtext: localize("Free plan available • No coding required • 5-Star Support"),
    stats: [
      { value: "<2.1KB", label: localize("Payload") },
      { value: "0ms", label: localize("Main Thread") },
      { value: "WCAG 2.1", label: localize("Compliant") },
      { value: "Mobile", label: localize("Optimized") },
    ],
  },

  speedBenefit: {
    title: localize('Is "App Bloat" Killing Your Store’s Speed?'),
    body: localize(
      "You know you need social proof to sell. But installing one app for Sales Pops, another for Countdown Timers, and a third for Sticky Carts destroys your site speed."
    ),
    fact: localize("Every extra kilobyte your store loads is a customer you're risking. FomoGen's entire payload is under 2.1KB — lighter than a single product thumbnail."),
    struggle: localize(
      'Most "all-in-one" apps are expensive, complex, and slow down your theme.'
    ),
    solution: localize(
      "FOMO Gen gives you the essential 5 conversion tools in a single, speed-optimized script."
    ),
  },

  features: [
    {
      id: "social-proof-notifications",
      title: localize("Social Proof Notifications"),
      subtitle: localize("Show Them You’re Busy."),
      description: localize(
        "Display recent purchases to build instant trust. 92% of consumers hesitate to buy without social proof. Eliminate that doubt."
      ),
      iconName: "ShoppingCart",
      highlight: localize("Build Trust"),
      imageSrc: "social-proof-ui.png",
    },
    {
      id: "scarcity-urgency",
      title: localize("Scarcity & Urgency"),
      subtitle: localize('Trigger the "Fear of Missing Out."'),
      description: localize(
        'Use Low Stock Countdowns ("Only 2 left!") and Timer Bars to push customers from "browsing" to "buying" right now.'
      ),
      iconName: "Timer",
      highlight: localize("Drive Urgency"),
      imageSrc: "scarcity-ui.png",
    },
    {
      id: "sticky-add-to-cart",
      title: localize("Sticky Add-To-Cart"),
      subtitle: localize("Capture Mobile Sales."),
      description: localize(
        "Keep your Buy Button visible on every scroll. Reduce friction and make checkout accessible from anywhere on the page."
      ),
      iconName: "ShoppingBag",
      highlight: localize("Reduce Friction"),
      imageSrc: "sticky-cart-ui.png",
    },
    {
      id: "free-shipping-bar",
      title: localize("Progressive Free Shipping Bar"),
      subtitle: localize("Boost Average Order Value (AOV)."),
      description: localize(
        '"Spend $15 more for Free Shipping." Motivate customers to add more items to their cart with a dynamic progress bar.'
      ),
      iconName: "TrendingUp",
      highlight: localize("Increase AOV"),
      imageSrc: "shipping-bar-ui.png",
    },
    {
      id: "trust-badges",
      title: localize("Trust Badges"),
      subtitle: localize("Secure the Checkout."),
      description: localize(
        "Display verified payment seals (Visa, PayPal, SSL) to reduce cart abandonment anxiety."
      ),
      iconName: "ShieldCheck",
      highlight: localize("Build Confidence"),
    },
  ],

  testimonials: [
    {
      quote: localize(
        "I uninstalled Vitals and Nudgify. FomoGen does exactly what I need without the lag."
      ),
      author: localize("Verified Merchant"),
      niche: localize("Fashion & Apparel Store"),
    },
    {
      quote: localize(
        "My add-to-cart rate jumped 15% just by turning on the Sticky Cart."
      ),
      author: localize("Verified Merchant"),
      niche: localize("Dropshipping Store"),
    },
  ],

  pricing: {
    title: localize("Simple, Transparent Pricing"),
    subtitle: localize("Supercharge your store"),
    description: localize(
      "From free to enterprise, we have a plan that grows with you. No hidden fees, no revenue sharing."
    ),
    tiers: [
      {
        name: localize("Free Plan"),
        price: "$0",
        period: localize("Forever"),
        description: localize("Test all features with basic limits."),
        features: [
          localize("1 Active Campaign"),
          localize("100 Notifications/mo"),
          localize("50 Social Proof Badges/mo"),
          localize("1 Active Timer"),
          localize("1 Active Stock Alert"),
          localize("Basic Exit Intent"),
          localize("Basic Sticky Cart"),
          localize("3 Trust Badges"),
        ],
        limitations: [
          localize('"Powered by FOMO Gen" branding'),
          localize("Limited customization"),
          localize("Basic targeting only"),
        ],
        cta: localize("Install for Free"),
        highlighted: false,
      },
      {
        name: localize("Starter Plan"),
        price: "$9.99",
        period: localize("per month"),
        description: localize("Best value for small to medium stores."),
        features: [
          localize("Everything in Free, plus:"),
          localize("3 Active Campaigns"),
          localize("2,500 Notifications/mo"),
          localize("1,000 Social Proof Badges/mo"),
          localize("3 Active Timers & Stock Alerts"),
          localize("Full Customization"),
          localize("Remove Branding"),
          localize("Product/Collection Targeting"),
          localize("Priority Email Support"),
        ],
        limitations: [],
        cta: localize("Install to Start Trial"),
        highlighted: true,
        subLabel: localize("Perfect for $5K - $50K/mo"),
      },
      {
        name: localize("Growth Plan"),
        price: "$19.99",
        period: localize("per month"),
        description: localize("For growing stores. Higher limits + advanced targeting."),
        features: [
          localize("Everything in Starter, plus:"),
          localize("10 Active Campaigns"),
          localize("10,000 Notifications/mo"),
          localize("5,000 Social Proof Badges/mo"),
          localize("10 Active Timers & Stock Alerts"),
          localize("Advanced Geo-Targeting"),
          localize("Device Targeting"),
          localize("Customer Segmentation"),
          localize("<24h Priority Support"),
        ],
        limitations: [],
        cta: localize("Install to Start Trial"),
        highlighted: false,
        subLabel: localize("Perfect for $50K - $200K/mo"),
      },
      {
        name: localize("Professional Plan"),
        price: "$39.99",
        period: localize("per month"),
        description: localize("For high-volume stores. Unlimited everything."),
        features: [
          localize("Everything in Growth, plus:"),
          localize("Unlimited Everything"),
          localize("Custom CSS Overrides"),
          localize("Dedicated Support (<12h)"),
          localize("Migration Assistance"),
          localize("Early Access Features"),
          localize("Onboarding Call (Optional)"),
        ],
        limitations: [],
        cta: localize("Contact Sales"),
        highlighted: false,
        subLabel: localize("Perfect for $200K+/mo"),
      },
    ],
    matrix: [
      {
        feature: localize("Progress Indicators"),
        free: "1",
        starter: "3",
        growth: "10",
        pro: localize("Unlimited"),
      },
      {
        feature: localize("Purchase Notifications"),
        free: "100/mo",
        starter: "2,500/mo",
        growth: "10,000/mo",
        pro: localize("Unlimited"),
      },
      {
        feature: localize("Social Proof Badges"),
        free: "50/mo",
        starter: "1,000/mo",
        growth: "5,000/mo",
        pro: localize("Unlimited"),
      },
      {
        feature: localize("Countdown Timers"),
        free: "1",
        starter: "3",
        growth: "10",
        pro: localize("Unlimited"),
      },
      {
        feature: localize("Stock Alerts"),
        free: "1",
        starter: "3",
        growth: "10",
        pro: localize("Unlimited"),
      },
      {
        feature: localize("Exit Intent"),
        free: localize("1 config"),
        starter: localize("Full Customization"),
        growth: localize("Full Customization"),
        pro: localize("Full Customization"),
      },
      {
        feature: localize("Sticky Add-to-Cart"),
        free: localize("Basic"),
        starter: localize("Full Customization"),
        growth: localize("Full Customization"),
        pro: localize("Full Customization"),
      },
      {
        feature: localize("Trust Badges"),
        free: localize("3 badges"),
        starter: localize("Unlimited + Custom"),
        growth: localize("Unlimited + Custom"),
        pro: localize("Unlimited + Custom"),
      },
      {
        feature: localize("Colors/Styling"),
        free: localize("Limited"),
        starter: localize("Full"),
        growth: localize("Full"),
        pro: localize("Full + CSS"),
      },
      {
        feature: localize("Targeting"),
        free: localize("Basic"),
        starter: localize("Product/Collection"),
        growth: localize("Geo/Device/Segment"),
        pro: localize("All + Custom"),
      },
      { feature: localize("Remove Branding"), free: "❌", starter: "✅", growth: "✅", pro: "✅" },
      {
        feature: localize("Support"),
        free: localize("Email"),
        starter: localize("Priority Email"),
        growth: localize("Priority (<24h)"),
        pro: localize("Dedicated (<12h)"),
      },
    ],
    faqs: [
      {
        q: localize("Do I need a credit card for the free trial?"),
        a: localize(
          "No, you can start the 14-day free trial on any paid plan without a credit card. You'll only be charged if you choose to continue after the trial."
        ),
      },
      {
        q: localize("Can I change plans anytime?"),
        a: localize(
          "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
        ),
      },
      {
        q: localize("What happens if I exceed my display limits?"),
        a: localize(
          "We'll notify you when you're close to your limit. Your campaigns will pause until the next billing cycle or until you upgrade to a higher plan."
        ),
      },
    ],
    launchOffers: [
      { highlight: localize("50% OFF"), text: localize("first 3 months") },
      { highlight: localize("Migration Offer:"), text: localize("Free setup assistance") },
    ],
  },

  displayOptions: {
    title: localize("Customization Architecture"),
    subtitle: localize("Make It Yours"),
    categories: [
      {
        title: localize("Display Modalities"),
        items: [
          localize("Dynamic Pop-ups"),
          localize("Sticky Banners"),
          localize("Announcement Bars"),
          localize("Inline Widgets"),
          localize("Cart Page Proof"),
          localize("Product Anchors"),
        ],
      },
      {
        title: localize("Timing Logic"),
        items: [
          localize("Fixed End Dates"),
          localize("Recurring Cycles"),
          localize("Per-Visit Resets"),
          localize("Fixed Minute Delays"),
          localize("One-Time Sessions"),
          localize("Shipping Thresholds"),
        ],
      },
      {
        title: localize("Styling Components"),
        items: [
          localize("Proprietary CSS"),
          localize("Green-Teal Gradients"),
          localize("Tactile Typography"),
          localize("Custom Positions"),
          localize("Elite Animations"),
          localize("Mobile-First Rendering"),
        ],
      },
    ],
  },

  cta: {
    title: localize("Ready to Scale Your Sales?"),
    subtitle: localize("Limited Time Launch Offer"),
    description: localize(
      "Unlock the high-conversion toolset used by elite Shopify brands. Save 44% with our annual plan."
    ),
    highlights: [
      localize("$9.99/mo (Standard)"),
      localize("$59/yr ($4.92/mo)"),
      localize("Zero Speed Penalty"),
      localize("5-Star Support"),
    ],
    primaryCTA: localize("Get FOMO Gen Now"),
    shopifyUrl: "https://apps.shopify.com/fomogen",
    noCreditCard: localize("No Credit Card Required • Limited Time Offer"),
  },

  labels: {
    platformPillars: localize("Platform Pillars"),
    everythingYouNeed: localize("Everything You Need."),
    nothingYouDont: localize("Nothing You Don't."),
    efficiencyWarning: localize("Efficiency Warning"),
    theStruggle: localize("The Struggle"),
    theSolution: localize("The Solution"),
    socialProof: localize("Social Proof"),
    trustedBy: localize("Trusted by"),
    smartMerchants: localize("Smart Merchants."),
    joinBrands: localize("Join 5,000+ Shopify Brands using AppLass tools."),
    recommended: localize("Recommended"),
    featuresIncluded: localize("Features Included"),
    compareFeatures: localize("Compare Features"),
    feature: localize("Feature"),
    freePlan: localize("Free Plan"),
    starterPlan: localize("Starter Plan"),
    growthPlan: localize("Growth Plan"),
    professionalPlan: localize("Professional"),
    launchOffers: localize("Launch Offers Available"),
  },

  livePreview: {
    notification: {
      name: localize("Sarah from New York"),
      action: localize("just purchased"),
      product: localize("Premium Focus Gear"),
      time: localize("2 minutes ago"),
    },
    progress: {
      current: 85,
      target: 100,
      message: localize("You're {value} away from FREE shipping!"),
    },
  },
});

export const FOMOGEN_DATA = getFomoGenData();
