import Link from "next/link";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function QuickStartPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Onboarding
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Quick Start Guide<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Velocity to conversion. Activate the FOMO Engine and deploy your first
          conversion module in under 300 seconds.
        </p>
      </header>

      <div className="space-y-24">
        {/* Step 1: Activation */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">
              Step 01: Activation
            </h2>
            <span className="rounded-full bg-blue-50 px-4 py-1 text-[10px] font-black tracking-widest text-blue-600 uppercase">
              Est. 120s
            </span>
          </div>

          <div className="mb-10 rounded-[2.5rem] bg-slate-900 p-10 text-white">
            <div className="mb-6 flex items-center gap-3 text-blue-400">
              <AlertCircle className="h-5 w-5" />
              <span className="text-xs font-black tracking-widest uppercase">
                CRITICAL REQUIREMENT
              </span>
            </div>
            <p className="text-lg font-medium opacity-80">
              The App Extension must be enabled in your Shopify Theme Editor for
              logic injection to occur on the storefront.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-10 lg:p-14">
            <ul className="space-y-8">
              <StepItem
                num="01"
                text="Navigate to 'FOMO Generator' within your Shopify Admin dashboard."
              />
              <StepItem
                num="02"
                text="Select 'Enable in Theme Editor' from the primary status banner."
              />
              <StepItem
                num="03"
                text="Toggle 'FOMO Generator' ON in the App Embeds sidebar."
              />
              <StepItem
                num="04"
                text="Commit changes by selecting 'Save' in the top-right header."
              />
            </ul>
          </div>
        </section>

        {/* Step 2: Goal Selection */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">
              Step 02: Module Deployment
            </h2>
            <span className="rounded-full bg-blue-50 px-4 py-1 text-[10px] font-black tracking-widest text-blue-600 uppercase">
              Est. 60s
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Boost AOV"
              desc="Visualize shipping thresholds to gamify the cart experience."
              link="/docs/fomogen/progress-indicators"
              cta="Deploy Bar"
            />
            <FeatureCard
              title="Social Trust"
              desc="Infect your store with authentic conversion telemetry."
              link="/docs/fomogen/purchase-notifications"
              cta="Deploy Proof"
            />
            <FeatureCard
              title="Reduce Friction"
              desc="Maintain persistent CTAs via the fixed-layer sticky bar."
              link="/docs/fomogen/sticky-cart"
              cta="Deploy Utility"
            />
            <FeatureCard
              title="Drive Urgency"
              desc="Deploy high-latency stock alerts and countdown timers."
              link="/docs/fomogen/stock-alerts"
              cta="Deploy Scarcity"
            />
          </div>
        </section>

        {/* Diagnostic */}
        <div className="rounded-[2.5rem] border border-slate-100 bg-white p-12 shadow-xl shadow-slate-200/20">
          <h4 className="mb-8 text-sm font-black tracking-widest text-blue-600 uppercase">
            Post-Deployment Diagnostic
          </h4>
          <ul className="space-y-4">
            {[
              "Clear browser cache or utilize Incognito/Private mode.",
              "Verify the 'Enable' toggle is active within the module settings.",
              "Check for mobile responsiveness and z-index collisions.",
            ].map((check, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-600">
                <CheckCircle2 className="h-5 w-5 text-blue-500" />
                <span className="font-medium">{check}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function StepItem({ num, text }: { num: string; text: string }) {
  return (
    <li className="flex gap-8">
      <span className="text-3xl font-black text-slate-200">{num}</span>
      <p className="text-lg leading-relaxed font-medium text-slate-600">
        {text}
      </p>
    </li>
  );
}

function FeatureCard({
  title,
  desc,
  link,
  cta,
}: {
  title: string;
  desc: string;
  link: string;
  cta: string;
}) {
  return (
    <Link
      href={link}
      className="group flex flex-col justify-between rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/20 transition-all hover:border-blue-100 hover:shadow-blue-500/5"
    >
      <div>
        <h3 className="mb-4 text-xl font-black text-slate-900">{title}</h3>
        <p className="mb-8 text-lg leading-relaxed font-medium text-slate-500">
          {desc}
        </p>
      </div>
      <div className="flex items-center gap-2 font-black text-blue-600">
        <span>{cta}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
