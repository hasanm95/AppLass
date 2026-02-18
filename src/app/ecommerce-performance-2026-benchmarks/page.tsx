import { Navbar, Footer, Section, FAQSchema } from "@/components/common";
import { Metadata } from "next";
import Link from "next/link";
import {
  Gauge,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Zap,
  BarChart3,
  MousePointer2,
} from "lucide-react";
import { FAQ_REGISTRY } from "@/constants/faq-registry";

export const metadata: Metadata = {
  title: "Ecommerce Performance Guide 2026: Benchmarks & Conversion Hacks",
  description:
    "Master ecommerce performance in 2026. Discover the latest Shopify speed benchmarks, social proof strategies that boost sales by 98%, and CRO tools like sticky carts.",
};

export default function EcommercePerformancePillar() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="pt-32">
        {/* Hero Section */}
        <Section className="bg-iridescent border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container">
            <span className="mb-6 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
              Authority Pillar
            </span>
            <div className="mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-bold text-slate-500 italic">
                Tested By Experts & Verified for 2026
              </span>
            </div>
            <h1 className="text-display mb-8 max-w-5xl text-slate-900">
              The 2026 Guide to Ecommerce Performance
              <span className="text-slate-300">
                : Speed, Trust, and Conversion.
              </span>
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed font-medium text-slate-600">
              In 2026, ecommerce performance is no longer just about
              &quot;having a fast site.&quot; It is the bridge between a
              visitor&apos;s first impression and a completed checkout. Brands
              that fail to meet modern performance benchmarks are effectively
              &quot;leaving money on the table.&quot;
            </p>
          </div>
        </Section>

        {/* Technical Speed Benchmarks */}
        <Section className="py-24">
          <div className="section-container">
            <div className="mb-20">
              <h2 className="mb-6 text-4xl font-black text-slate-900">
                1. Technical Speed: The 2026 Performance Benchmarks
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed font-medium text-slate-500">
                Google&apos;s Core Web Vitals remain the gold standard. In 2026,
                a delay of just one second can drop your conversion rate by 7%.
                Hit these specific targets to stay competitive:
              </p>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <Gauge size={24} />
                  </div>
                  <h4 className="font-black text-slate-900">LCP</h4>
                </div>
                <span className="mb-2 block text-3xl font-black text-slate-900">
                  ≤ 2.5s
                </span>
                <p className="text-sm font-medium text-slate-500">
                  Measures how fast your main product image or headline loads.
                </p>
              </div>
              <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-rose-100 p-3 text-rose-600">
                    <Zap size={24} />
                  </div>
                  <h4 className="font-black text-slate-900">INP</h4>
                </div>
                <span className="mb-2 block text-3xl font-black text-slate-900">
                  ≤ 200ms
                </span>
                <p className="text-sm font-medium text-slate-500">
                  Measures how quickly your site reacts when an user clicks
                  &quot;Add to Cart.&quot;
                </p>
              </div>
              <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
                    <Sparkles size={24} />
                  </div>
                  <h4 className="font-black text-slate-900">CLS</h4>
                </div>
                <span className="mb-2 block text-3xl font-black text-slate-900">
                  &lt; 0.1
                </span>
                <p className="text-sm font-medium text-slate-500">
                  Ensures your page elements don&apos;t &quot;jump&quot; around
                  while loading.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[3rem] bg-blue-600 p-12 text-white lg:p-16">
              <div className="relative z-10 max-w-2xl">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-black">
                  <TrendingUp className="text-blue-200" /> Pro Tip: Audit your
                  &quot;App Bloat.&quot;
                </h3>
                <p className="mb-8 text-xl leading-relaxed font-medium text-blue-100">
                  Most Shopify stores run 8–12 apps, each slowing down
                  JavaScript execution. Aim for a{" "}
                  <strong className="text-white underline decoration-blue-400">
                    lean stack of 6–10 high-value apps
                  </strong>{" "}
                  to maintain a loading time of 1.5–3 seconds.
                </p>
                <Link
                  href="/blog/shopify-site-speed-social-proof"
                  className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-black text-blue-600 transition-all hover:bg-slate-100"
                >
                  Site Speed Audit Guide
                </Link>
              </div>
              <BarChart3
                className="absolute -right-20 -bottom-20 h-96 w-96 text-white/10"
                strokeWidth={1}
              />
            </div>
          </div>
        </Section>

        {/* Psychological Trust */}
        <Section className="bg-slate-50/50 py-24">
          <div className="section-container">
            <div className="flex flex-col items-center gap-20 lg:flex-row">
              <div className="lg:w-1/2">
                <h2 className="mb-8 text-4xl font-black text-slate-900">
                  2. Psychological Trust: The Power of Social Proof
                </h2>
                <p className="mb-10 text-xl leading-relaxed font-medium text-slate-600">
                  Once a user lands on your site, you have seconds to prove you
                  are trustworthy. Social proof is the most effective lever for
                  driving immediate sales in 2026.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-blue-500/20">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-600">
                      98%
                    </div>
                    <div>
                      <h4 className="mb-2 font-black text-slate-900">
                        The 98% Lift
                      </h4>
                      <p className="font-medium text-slate-500">
                        Sales-based social proof notifications have been shown
                        to boost website conversions by up to 98%.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-rose-500/20">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-lg font-black text-rose-600">
                      270%
                    </div>
                    <div>
                      <h4 className="mb-2 font-black text-slate-900">
                        The Review Threshold
                      </h4>
                      <p className="font-medium text-slate-500">
                        Products with 5 or more reviews are 270% more likely to
                        be purchased than those with no reviews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-[3rem] border border-slate-100 bg-white p-12 text-center lg:w-1/2">
                <div className="mb-8 rounded-full bg-slate-50 p-6">
                  <Sparkles className="h-16 w-16 text-amber-500" />
                </div>
                <h3 className="mb-6 text-3xl font-black text-slate-900">
                  Visual Trust Logic
                </h3>
                <p className="mb-8 text-lg leading-relaxed font-medium text-slate-500">
                  Including customer photos or video testimonials in reviews can
                  increase purchase likelihood by{" "}
                  <strong className="text-blue-600">137%</strong>.
                </p>
                <Link
                  href="/blog/best-social-proof-apps-shopify-2026"
                  className="flex items-center gap-2 font-black text-blue-600 underline-offset-4 hover:underline"
                >
                  Review Best Social Proof Apps <MousePointer2 size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Frictionless Conversion */}
        <Section className="py-24">
          <div className="section-container">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="mb-8 text-5xl font-black text-slate-900">
                3. Frictionless Conversion: CRO Hacks for 2026
              </h2>
              <p className="text-xl font-medium text-slate-500">
                To turn traffic into revenue, remove every possible barrier in
                the mobile journey.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-[3rem] bg-slate-900 p-12 text-white">
                <h4 className="mb-6 text-2xl font-black">
                  The Mobile Sticky Cart
                </h4>
                <p className="mb-10 leading-relaxed font-medium text-slate-400">
                  Ensures the &quot;Checkout&quot; button is always within
                  thumb-reach, significantly increasing ROI for Shopify
                  developers.
                </p>
                <Link
                  href="/blog/mobile-sticky-cart-guide"
                  className="font-black text-blue-400 hover:underline"
                >
                  Read the Guide
                </Link>
              </div>
              <div className="rounded-[3rem] border border-slate-100 bg-slate-50 p-12">
                <h4 className="mb-6 text-2xl font-black text-slate-900">
                  The Three-Click Rule
                </h4>
                <p className="mb-10 leading-relaxed font-medium text-slate-500">
                  A user should be able to get from your homepage to any product
                  in three clicks or less.
                </p>
              </div>
              <div className="rounded-[3rem] bg-blue-600 p-12 text-white">
                <h4 className="mb-6 text-2xl font-black">Urgency Nudges</h4>
                <p className="mb-10 leading-relaxed font-medium text-blue-100">
                  Visual countdown timers create a sense of FOMO that encourages
                  immediate action at checkout.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="border-y border-slate-100 bg-slate-50/30 py-24">
          <div className="section-container max-w-4xl">
            <h2 className="mb-16 text-center text-4xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {FAQ_REGISTRY.ECOMMERCE_PERFORMANCE.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-100 bg-white p-10 transition-all hover:border-blue-500/20"
                >
                  <h4 className="mb-4 text-xl font-black text-slate-900">
                    {faq.question}
                  </h4>
                  <p className="leading-relaxed font-medium text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <FAQSchema items={FAQ_REGISTRY.ECOMMERCE_PERFORMANCE} />
        </Section>

        {/* CTA Anchor for FomoGen */}
        <Section className="py-32">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-[4rem] bg-blue-600 p-16 text-center text-white shadow-2xl lg:p-24">
              <div className="relative z-10">
                <h2 className="mb-8 text-6xl font-black tracking-tighter">
                  Deploy FomoGen.
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-blue-100">
                  The technical implementation of 2026 performance benchmarks.
                  Sub-2.1KB payload, zero speed debt, maximum trust.
                </p>
                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <a
                    href="https://apps.shopify.com/fomogen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-16 items-center rounded-full bg-white px-12 text-lg font-black text-blue-600 shadow-xl transition-all hover:bg-slate-50"
                  >
                    Add to Shopify
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex h-16 items-center rounded-full bg-blue-700 px-12 text-lg font-black text-white transition-all hover:bg-blue-800"
                  >
                    Meet the Engineer
                  </Link>
                </div>
              </div>
              {/* Decorative Mesh */}
              <div
                className="pointer-events-none absolute inset-0 z-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "4rem 4rem",
                }}
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
