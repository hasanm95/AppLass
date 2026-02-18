import { Footer, Navbar, Section } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Zap, Check, Info } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const appStoreUrl = "https://apps.shopify.com/fomogen";

  const plans = [
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
      buttonText: "Install for Free",
      buttonLink: appStoreUrl,
      popular: false,
    },
    {
      name: "Starter Plan",
      price: "$9.99",
      period: "mo",
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
      buttonText: "Start 14-Day Free Trial",
      buttonLink: appStoreUrl,
      popular: true,
      subLabel: "Perfect for $5K - $50K/mo",
    },
    {
      name: "Growth Plan",
      price: "$19.99",
      period: "mo",
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
      buttonText: "Start 14-Day Free Trial",
      buttonLink: appStoreUrl,
      popular: false,
      subLabel: "Perfect for $50K - $200K/mo",
    },
    {
      name: "Professional Plan",
      price: "$39.99",
      period: "mo",
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
      buttonText: "Contact Sales",
      buttonLink: "mailto:hasanmobarak25@gmail.com",
      popular: false,
      subLabel: "Perfect for $200K+/mo",
    },
  ];

  const featuresMatrix = [
    {
      feature: "Progress Indicators",
      free: "1",
      starter: "3",
      growth: "10",
      pro: "Unlimited",
    },
    {
      feature: "Purchase Notifications",
      free: "100/mo",
      starter: "2,500/mo",
      growth: "10,000/mo",
      pro: "Unlimited",
    },
    {
      feature: "Social Proof Badges",
      free: "50/mo",
      starter: "1,000/mo",
      growth: "5,000/mo",
      pro: "Unlimited",
    },
    {
      feature: "Countdown Timers",
      free: "1",
      starter: "3",
      growth: "10",
      pro: "Unlimited",
    },
    {
      feature: "Stock Alerts",
      free: "1",
      starter: "3",
      growth: "10",
      pro: "Unlimited",
    },
    {
      feature: "Exit Intent",
      free: "1 config",
      starter: "Full Customization",
      growth: "Full Customization",
      pro: "Full Customization",
    },
    {
      feature: "Sticky Add-to-Cart",
      free: "Basic",
      starter: "Full Customization",
      growth: "Full Customization",
      pro: "Full Customization",
    },
    {
      feature: "Trust Badges",
      free: "3 badges",
      starter: "Unlimited + Custom",
      growth: "Unlimited + Custom",
      pro: "Unlimited + Custom",
    },
    {
      feature: "Colors/Styling",
      free: "Limited",
      starter: "Full",
      growth: "Full",
      pro: "Full + CSS",
    },
    {
      feature: "Targeting",
      free: "Basic",
      starter: "Product/Collection",
      growth: "Geo/Device/Segment",
      pro: "All + Custom",
    },
    {
      feature: "Remove Branding",
      free: "❌",
      starter: "✅",
      growth: "✅",
      pro: "✅",
    },
    {
      feature: "Support",
      free: "Email",
      starter: "Priority Email",
      growth: "Priority (<24h)",
      pro: "Dedicated (<12h)",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar
        customBranding={
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 fill-blue-600 text-blue-600" />
            <span className="text-lg font-black tracking-tighter text-slate-900">
              FOMO<span className="text-blue-600">GEN</span>
            </span>
          </div>
        }
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-24 lg:pt-56">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-indigo-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <div className="section-container text-center">
            <span className="mb-4 inline-block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
              Growth Engine Pricing
            </span>
            <h1 className="text-display mx-auto max-w-4xl text-slate-900">
              Scale your store with <br />
              <span className="text-blue-600">mathematical precision.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
              Simple, transparent pricing for stores of all sizes. No hidden
              fees, no revenue sharing. Just growth loops that convert.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <Section className="bg-[#FAFBFD]">
          <div className="section-container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`group relative flex flex-col rounded-[2.5rem] border bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 ${
                    plan.popular
                      ? "border-blue-500 shadow-xl ring-4 shadow-blue-500/10 ring-blue-500/10"
                      : "border-slate-100"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 right-8 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-black tracking-widest text-white uppercase shadow-lg shadow-blue-500/40">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-10">
                    <h3 className="text-xl font-black text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black tracking-tighter text-slate-900">
                        {plan.price}
                      </span>
                      <span className="font-bold text-slate-400">
                        /{plan.period}
                      </span>
                    </div>
                    {plan.subLabel && (
                      <p className="mt-4 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                        {plan.subLabel}
                      </p>
                    )}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className={`mb-10 h-14 w-full rounded-2xl text-base font-bold transition-all ${
                      plan.popular
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700"
                        : "bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800"
                    }`}
                  >
                    <Link href={plan.buttonLink}>{plan.buttonText}</Link>
                  </Button>

                  <div className="flex-grow">
                    <h4 className="mb-6 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                      Engine Features
                    </h4>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-semibold text-slate-600"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.limitations.map((limit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-medium text-slate-400 italic"
                        >
                          <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span>{limit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Feature Matrix */}
        <Section>
          <div className="section-container">
            <h2 className="text-display mb-16 text-center text-4xl text-slate-900">
              Deep Engine Comparison<span className="text-blue-600">.</span>
            </h2>

            <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/20">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <th className="px-8 py-8 text-xs font-black tracking-widest text-slate-500 uppercase">
                        Capability
                      </th>
                      <th className="px-8 py-8 text-center text-xs font-black tracking-widest text-slate-500 uppercase">
                        Free
                      </th>
                      <th className="px-8 py-8 text-center text-xs font-black tracking-widest text-blue-600 uppercase">
                        Starter
                      </th>
                      <th className="px-8 py-8 text-center text-xs font-black tracking-widest text-slate-500 uppercase">
                        Growth
                      </th>
                      <th className="px-8 py-8 text-center text-xs font-black tracking-widest text-slate-500 uppercase">
                        Professional
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {featuresMatrix.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-50 transition-colors hover:bg-slate-50/50"
                      >
                        <td className="px-8 py-6 text-base font-bold text-slate-900">
                          {row.feature}
                        </td>
                        <td className="px-8 py-6 text-center text-sm font-medium text-slate-500">
                          {row.free}
                        </td>
                        <td className="px-8 py-6 text-center text-sm font-black text-slate-900">
                          {row.starter}
                        </td>
                        <td className="px-8 py-6 text-center text-sm font-medium text-slate-500">
                          {row.growth}
                        </td>
                        <td className="px-8 py-6 text-center text-sm font-medium text-slate-500">
                          {row.pro}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-[#020617] text-white">
          <div className="section-container">
            <h2 className="text-display mb-16 text-center text-4xl text-white">
              FAQ<span className="text-blue-600">.</span>
            </h2>

            <div className="mx-auto grid max-w-4xl gap-6">
              {[
                {
                  q: "Do I need a credit card for the free trial?",
                  a: "No, you can start the 14-day free trial on any paid plan without a credit card. You'll only be charged if you choose to continue after the trial.",
                },
                {
                  q: "Can I change plans anytime?",
                  a: "Yes, you can upgrade, downgrade, or cancel your plan at any time through your Shopify admin. Changes take effect immediately.",
                },
                {
                  q: "What happens if I exceed my display limits?",
                  a: "We'll notify you when you're close to your limit. Your campaigns will pause until the next billing cycle or until you upgrade to a higher plan.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-[2rem] border border-white/5 bg-white/5 p-10 backdrop-blur-3xl"
                >
                  <h3 className="mb-4 text-xl font-black text-white">
                    {faq.q}
                  </h3>
                  <p className="text-lg leading-relaxed font-medium text-slate-400">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase">
                Performance Guaranteed
              </span>
              <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold">
                  <span className="text-blue-500">50% OFF</span> first 3 months
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold">
                  Free migration assistance
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer variant="dark" />
    </div>
  );
}
