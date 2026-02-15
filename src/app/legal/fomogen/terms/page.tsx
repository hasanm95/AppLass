import { Footer, Navbar, Section } from "@/components/common";
import { Zap } from "lucide-react";

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar
        customBranding={
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-600 fill-blue-600" />
            <span className="text-lg font-black tracking-tighter text-slate-900">
              FOMO<span className="text-blue-600">GEN</span>
            </span>
          </div>
        }
      />

      <main className="flex-grow">
        <Section className="pb-32 pt-40 lg:pt-56">
          <div className="section-container">
            <div className="mx-auto max-w-4xl">
              <header className="mb-20">
                <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                  Legal Documentation
                </span>
                <h1 className="text-display mb-6 text-slate-900">
                  Terms of Service<span className="text-slate-300">.</span>
                </h1>
                <p className="text-lg font-bold text-slate-400">
                  Last updated: {currentYear}
                </p>
              </header>

              <div className="space-y-16 text-lg font-medium leading-relaxed text-slate-600">
                <section>
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By installing and using the FOMO Generator app (&quot;the
                    App&quot;) for Shopify, you agree to be bound by these Terms
                    of Service. If you do not agree to these terms, please do
                    not install or use the App.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    2. Description of Service
                  </h2>
                  <p>
                    FOMO Generator provides a suite of conversion optimization
                    tools for Shopify merchants, including purchase
                    notifications, countdown timers, stock alerts, and other
                    social proof widgets. We reserve the right to modify or
                    discontinue features at any time.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    3. Billing and Subscriptions
                  </h2>
                  <p>
                    The App offers both free and paid subscription plans.
                    Payments are processed directly through Shopify&apos;s
                    billing system. You may cancel your subscription at any time
                    by uninstalling the App. Refunds are handled in accordance
                    with Shopify&apos;s refund policies.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    4. Data Usage
                  </h2>
                  <p>
                    We collect and use data as described in our Privacy Policy.
                    By using the App, you consent to such data collection and
                    usage, which is necessary for the App&apos;s functionality
                    (e.g., displaying real purchase data).
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    The App is provided &quot;as is&quot; without warranties of
                    any kind. We are not liable for any direct, indirect,
                    incidental, or consequential damages arising from your use
                    of the App, including but not limited to lost profits or
                    data.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    6. Changes to Terms
                  </h2>
                  <p>
                    We reserve the right to update these terms at any time.
                    Continued use of the App after changes constitutes
                    acceptance of the new terms.
                  </p>
                </section>

                <section className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12">
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    7. Contact
                  </h2>
                  <p className="mb-8">
                    If you have any questions about these Terms, please contact
                    our legal lab team.
                  </p>
                  <a
                    href="mailto:hasanmobarak25@gmail.com"
                    className="text-xl font-black text-blue-600 hover:underline"
                  >
                    hasanmobarak25@gmail.com
                  </a>
                </section>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}