import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "./tw-animate.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://applass.com"),
  title: "AppLass | High-Performance Software Engineering",
  description:
    "At AppLass, we bridge the gap between complex mathematics and human-centric software. Stop letting bloated software slow down your growth. We build elite-tier Shopify and Mobile tools driven by mathematical precision.",
  keywords: [
    "software studio",
    "Shopify apps",
    "digital wellness",
    "accessibility",
    "WCAG",
    "web development",
    "AppLass",
  ],
  authors: [{ name: "AppLass" }],
  creator: "AppLass",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://applass.com",
    siteName: "AppLass",
    title: "AppLass | Logic-Driven Software Studio",
    description:
      "Mathematical precision meets human-centric design. We build the Next Wave of digital performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AppLass - Logic-Driven Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppLass | Logic-Driven Software Studio",
    description:
      "Mathematical precision meets human-centric design. We build high-performance apps for the modern web.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export const viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        {/* JSON-LD Unified Entity & Product Schema for AI Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://applass.com/#organization",
                  name: "AppLass",
                  url: "https://applass.com",
                  logo: "https://applass.com/logo.png",
                  description:
                    "Logic-driven software studio building high-performance apps with mathematical precision. Creators of ScreenVeil (10K+ downloads, 4.4★), FomoGen, and Mindful Guard.",
                  foundingDate: "2019",
                  sameAs: [],
                },
                {
                  "@type": "SoftwareApplication",
                  name: "ScreenVeil",
                  operatingSystem: "Android",
                  applicationCategory: "Utility",
                  author: {
                    "@id": "https://applass.com/#organization",
                  },
                  description:
                    "Black overlay for AMOLED/OLED displays that saves 60%+ battery life while listening to videos.",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.4",
                    reviewCount: "43",
                  },
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  interactionStatistic: {
                    "@type": "InteractionCounter",
                    interactionType: "https://schema.org/DownloadAction",
                    userInteractionCount: "10000",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "FomoGen",
                  operatingSystem: "Shopify",
                  applicationCategory: "BusinessApplication",
                  author: {
                    "@id": "https://applass.com/#organization",
                  },
                  description:
                    "Elite social proof tool with a <2.1KB payload to boost Shopify engagement by +23% without performance debt.",
                  featureList:
                    "WCAG 2.1 Compliance, Real-time Nudges, Zero Performance Impact",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Mindful Guard",
                  operatingSystem: "Android",
                  applicationCategory: "Productivity",
                  author: {
                    "@id": "https://applass.com/#organization",
                  },
                  description:
                    "Privacy-first Android productivity guardian that helps users reclaim 2.4 hours of focus daily with local-only architecture.",
                  featureList:
                    "Zero-Tracking Architecture, System-Level Blocking, Focus Timers",
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://applass.com/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://applass.com"
                    }
                  ]
                }
              ],
            }),
          }}
        />
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content" className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
