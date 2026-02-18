import { Footer, Navbar, Section } from "@/components/common";
import { Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Mindful Guard",
  description:
    "Terms and conditions for using Mindful Guard's cognitive firewall logic systems.",
};

export default function MindfulGuardTermsPage() {
  const lastUpdated = "August 2025";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-slate-100 selection:text-slate-900">
      <Navbar
        customBranding={
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 fill-slate-900 text-slate-900" />
            <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">
              Mindful<span className="text-slate-400">Guard</span>
            </span>
          </div>
        }
      />

      <main className="flex-grow">
        <Section className="pt-40 pb-32 lg:pt-56">
          <div className="section-container">
            <div className="mx-auto max-w-4xl">
              <header className="mb-20 text-center">
                <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-slate-900 uppercase">
                  Legal Documentation
                </span>
                <h1 className="text-display mb-6 text-slate-900">
                  Terms of Service<span className="text-slate-300">.</span>
                </h1>
                <p className="text-sm font-bold text-slate-400">
                  Last updated: {lastUpdated}
                </p>
              </header>

              <div className="space-y-16 text-lg leading-relaxed font-medium text-slate-600">
                <section>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    1. Acceptance of Protocol
                  </h2>
                  <p>
                    By installing and using Mindful Guard, you acknowledge that
                    this is an Android-based productivity tool designed to
                    enforce digital discipline. You agree to the technical
                    requirements and privacy protocols defined in our
                    documentation.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    2. Technical Implementation
                  </h2>
                  <p>
                    Mindful Guard utilizes Android&apos;s{" "}
                    <strong>Accessibility Services</strong> and{" "}
                    <strong>Usage Access</strong> permissions to function. You
                    acknowledge that:
                  </p>
                  <ul className="mt-6 list-none space-y-4 text-base">
                    <li className="flex gap-4">
                      <span className="font-black text-blue-600">/</span>
                      <p>
                        These services are used <strong>exclusively</strong> for
                        app-blocking and session enforcement.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-black text-blue-600">/</span>
                      <p>
                        All processing occurs{" "}
                        <strong>entirely on-device</strong> with zero cloud
                        telemetry.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-black text-blue-600">/</span>
                      <p>
                        The app requires local storage permissions for
                        performance and icon caching.
                      </p>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    3. No-Bypass Warning
                  </h2>
                  <p>
                    The &quot;Strict Logic Mode&quot; is engineered to be
                    absolute. You acknowledge that once a focus session is
                    active, bypassing the blocking protocols is technically
                    impossible by design. AppLass is not liable for your
                    inability to access blocked applications during an active
                    session.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    4. Warranty & Liability
                  </h2>
                  <p>
                    Mindful Guard is provided &quot;as-is&quot; without any
                    warranty. While we strive for 100% logic reliability, we are
                    not responsible for any indirect or consequential damages
                    resulting from the use or inability to use the application.
                  </p>
                </section>

                <section className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12 text-center">
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    5. Support and Logic Lab
                  </h2>
                  <p className="mb-10 text-slate-500">
                    For technical or legal inquiries regarding our service
                    terms, please contact the logic lab.
                  </p>
                  <a
                    href="mailto:hasanmobarak25@gmail.com"
                    className="text-2xl font-black text-blue-600 hover:underline"
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
