import { Footer, Navbar, Section } from "@/components/common";
import { Smartphone, Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ScreenVeil",
  description:
    "ScreenVeil Privacy Policy - Learn how we protect your privacy with our no-data-collection approach.",
};

export default function ScreenVeilPrivacyPage() {
  const lastUpdated = "August 2025";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar
        customBranding={
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-blue-600 fill-blue-600" />
            <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">
              Screen<span className="text-blue-600">Veil</span>
            </span>
          </div>
        }
      />

      <main className="flex-grow">
        <Section className="pb-32 pt-40 lg:pt-56">
          <div className="section-container">
            <div className="mx-auto max-w-4xl">
              {/* Header */}
              <header className="mb-20 text-center">
                <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                  Legal Documentation
                </span>
                <h1 className="text-display mb-6 text-slate-900">
                  Privacy Policy<span className="text-slate-300">.</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm font-bold text-slate-400">
                  <span>Effective Date: {lastUpdated}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Last Updated: {lastUpdated}</span>
                </div>
              </header>

              {/* Content */}
              <div className="space-y-24 text-lg font-medium leading-relaxed text-slate-600">
                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8">Introduction</h2>
                  <div className="space-y-6">
                    <p>
                      ScreenVeil is committed to protecting your privacy. This Privacy
                      Policy explains how we collect, use, and safeguard your
                      information when you use the ScreenVeil mobile application.
                    </p>
                    <p>
                      ScreenVeil is a privacy-focused screen overlay application
                      designed to help users protect their screen content from prying
                      eyes by providing customizable screen overlays and privacy
                      controls.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8">What We DON&apos;T Collect</h2>
                  <div className="bg-green-50/50 border border-green-100 rounded-[2.5rem] p-12">
                    <p className="text-green-900 font-bold mb-8 text-xl">
                      ScreenVeil is designed with privacy as a core principle. We do not
                      collect, store, or transmit any personal information, including:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 text-green-700 list-none text-base">
                      {[
                        "Personal identification info",
                        "Screen content or screenshots",
                        "Usage analytics or tracking",
                        "Device identifiers or Ad IDs",
                        "Location data",
                        "Contact lists or local files",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-green-600 font-black shrink-0">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8">How the App Works</h2>
                  <p className="mb-10">
                    The only information the App may access is processed locally for functional logic:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8">
                      <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4">System Display</h4>
                      <p className="text-sm font-bold text-slate-700">
                        To provide overlay functionality, the App requires access to
                        your device&apos;s display system to create screen overlays.
                      </p>
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8">
                      <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4">App Preferences</h4>
                      <p className="text-sm font-bold text-slate-700">
                        Settings and preferences you configure within the App are
                        stored locally on your device only.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8">Required Permissions</h2>
                  <p className="mb-10">
                    ScreenVeil requires the following hardware-level permissions to function:
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        title: "SYSTEM_ALERT_WINDOW",
                        desc: "Required to display screen overlays over other applications.",
                        icon: "🖥️",
                      },
                      {
                        title: "WAKE_LOCK",
                        desc: "Required to maintain overlay functionality when the device screen is active.",
                        icon: "🔋",
                      },
                      {
                        title: "FOREGROUND_SERVICE",
                        desc: "Required to run the overlay service in the background.",
                        icon: "⚙️",
                      },
                    ].map((perm, i) => (
                      <div key={i} className="flex items-center gap-6 p-8 border border-slate-100 rounded-3xl bg-slate-50/30">
                        <div className="text-3xl shrink-0">{perm.icon}</div>
                        <div>
                          <h4 className="font-black text-slate-900 uppercase tracking-tighter">{perm.title}</h4>
                          <p className="text-base text-slate-500">{perm.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-8 mt-8 flex gap-6 items-center">
                     <Shield className="h-6 w-6 text-amber-600 shrink-0" />
                    <p className="text-amber-800 text-sm font-medium">
                      <strong>Important:</strong> These permissions are used solely for
                      the App&apos;s core overlay functionality and are not used to
                      collect or transmit any personal information.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8">Data Security</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="rounded-3xl border border-slate-100 p-8">
                      <h4 className="text-xl font-black text-slate-900 mb-4">Local Storage</h4>
                      <ul className="space-y-3 text-sm text-slate-500 list-none">
                        <li className="flex gap-2"><span>•</span> All app data is stored locally on your device</li>
                        <li className="flex gap-2"><span>•</span> We use Android&apos;s secure storage mechanisms</li>
                        <li className="flex gap-2"><span>•</span> No data is stored on external servers</li>
                      </ul>
                    </div>
                    <div className="rounded-3xl border border-slate-100 p-8">
                      <h4 className="text-xl font-black text-slate-900 mb-4">Security Measures</h4>
                      <ul className="space-y-3 text-sm text-slate-500 list-none">
                        <li className="flex gap-2"><span>•</span> Follows Android security best practices</li>
                        <li className="flex gap-2"><span>•</span> Operates within Android&apos;s permission framework</li>
                        <li className="flex gap-2"><span>•</span> No network connections for data collection</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="rounded-[2.5rem] border border-blue-100 bg-blue-50/30 p-12 text-center">
                  <h2 className="mb-6 text-3xl font-black text-slate-900">Contact Engineering</h2>
                  <p className="mb-10 text-slate-600 max-w-2xl mx-auto">
                    If you have any questions, concerns, or suggestions regarding this
                    Privacy Policy or the ScreenVeil App, please contact the logic lab.
                  </p>
                  <a
                    href="mailto:support@applass.com"
                    className="text-2xl font-black text-blue-600 hover:underline"
                  >
                    support@applass.com
                  </a>
                </section>

                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Compliance</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-slate-50 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-400">GDPR</div>
                        <div className="p-4 bg-slate-50 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-400">CCPA</div>
                        <div className="p-4 bg-slate-50 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-400">COPPA</div>
                        <div className="p-4 bg-slate-50 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-400">Android Privacy</div>
                    </div>
                </section>

                <div className="pt-12 border-t border-slate-100 text-center">
                  <p className="text-sm text-slate-400 italic">
                    This Privacy Policy is effective as of August 2025 and supersedes any
                    previous privacy policies for ScreenVeil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
