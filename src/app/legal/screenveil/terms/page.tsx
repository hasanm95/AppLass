import { Footer, Navbar, Section } from "@/components/common";
import { Smartphone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ScreenVeil",
  description: "Terms and conditions for using ScreenVeil's hardware-level screen utility.",
};

export default function ScreenVeilTermsPage() {
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
              <header className="mb-20 text-center">
                <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                  Legal Documentation
                </span>
                <h1 className="text-display mb-6 text-slate-900">
                  Terms of Service<span className="text-slate-300">.</span>
                </h1>
                <p className="text-sm font-bold text-slate-400">
                  Last updated: {lastUpdated}
                </p>
              </header>

              <div className="space-y-16 text-lg font-medium leading-relaxed text-slate-600">
                <section>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    1. Hardware Implementation
                  </h2>
                  <p>
                    ScreenVeil is a hardware-focused utility for Android. By using 
                    the application, you acknowledge that it requires specific 
                    system-level permissions to manage display behavior and background 
                    services effectively.
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    2. Permission Protocols
                  </h2>
                  <p>
                    ScreenVeil utilizes the following core protocols to provide its utility:
                  </p>
                  <ul className="mt-6 space-y-4 list-none text-base">
                    <li className="flex gap-4">
                      <span className="text-blue-600 font-black">/</span>
                      <p><strong className="text-slate-900">SYSTEM_ALERT_WINDOW:</strong> To render the screen filter overlay over other active applications.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-blue-600 font-black">/</span>
                      <p><strong className="text-slate-900">WAKE_LOCK:</strong> To maintain functionality during periods of display inactivity or dimmed states.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-blue-600 font-black">/</span>
                      <p><strong className="text-slate-900">FOREGROUND_SERVICE:</strong> To ensure reliable operation while the user interacts with other applications.</p>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    3. Power Optimization
                  </h2>
                  <p>
                    While ScreenVeil is engineered to reduce display power draw 
                    on AMOLED devices, battery savings depend on hardware 
                    architecture. AppLass does not guarantee specific power 
                    savings and provides the application &quot;as-is&quot;.
                  </p>
                </section>

                <section className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12 text-center">
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    4. Contact the Logic Lab
                  </h2>
                  <p className="mb-10 text-slate-500">
                    For technical or legal inquiries regarding our hardware utility 
                    protocols, please reach out to the engineering team.
                  </p>
                  <a
                    href="mailto:support@applass.com"
                    className="text-2xl font-black text-blue-600 hover:underline"
                  >
                    support@applass.com
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
