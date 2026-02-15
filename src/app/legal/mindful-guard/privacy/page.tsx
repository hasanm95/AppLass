import { Footer, Navbar, Section } from "@/components/common";
import { Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Mindful Guard",
  description:
    "Privacy Policy for Mindful Guard - Learn how we protect your privacy and handle your data with our privacy-first approach.",
};

export default function MindfulGuardPrivacyPage() {
  const lastUpdated = "August 2025";

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-slate-100 selection:text-slate-900">
      <Navbar
        customBranding={
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-slate-900 fill-slate-900" />
            <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">
              Mindful<span className="text-slate-400">Guard</span>
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
                <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">
                  Privacy Documentation
                </span>
                <h1 className="text-display mb-6 text-slate-900">
                  Privacy Policy<span className="text-slate-300">.</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm font-bold text-slate-400">
                  <span>Last Updated: {lastUpdated}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Effective Date: {lastUpdated}</span>
                </div>
              </header>

              {/* Main Content */}
              <div className="space-y-24 text-lg font-medium leading-relaxed text-slate-600">
                {/* Introduction */}
                <div className="text-center">
                  <div className="max-w-3xl mx-auto p-12 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
                    <p className="text-xl text-slate-700 leading-relaxed">
                      Mindful Guard is committed to protecting your privacy. This
                      Privacy Policy explains how we handle information in our
                      productivity and focus management application.
                    </p>
                  </div>
                </div>

                {/* Section 1: Data Collection */}
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">
                      1. Data Collection
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                  </div>

                  <div className="mb-12 text-center">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      What We Collect
                    </h3>
                    <p className="max-width-2xl mx-auto text-slate-500">
                      Mindful Guard operates on a{" "}
                      <strong className="text-blue-600 uppercase tracking-tight">&quot;privacy-first&quot;</strong> principle.
                      We collect minimal data necessary for app functionality.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Data We Collect */}
                    <div className="bg-green-50/50 p-10 rounded-[2.5rem] border border-green-100">
                      <h4 className="text-xl font-black text-green-800 mb-8 flex items-center">
                        <span className="text-green-600 mr-4 text-2xl">✓</span>
                        Data Stored Locally
                      </h4>
                      <ul className="space-y-4 text-base text-green-700 list-none">
                        {[
                          { label: "Timer Settings", desc: "Duration, labels, and scheduled times you configure" },
                          { label: "App Selection Data", desc: "Lists of apps you choose to block during focus sessions" },
                          { label: "Usage Preferences", desc: "Your notification settings, theme preferences, and accessibility configurations" },
                          { label: "Session History", desc: "Local records of your focus sessions for personal tracking and analytics" },
                          { label: "Background Scheduling", desc: "Timer schedules and automation preferences" },
                          { label: "App Inventory", desc: "Complete list of installed apps with metadata" },
                          { label: "Usage Analytics", desc: "Local app usage statistics including daily/weekly usage times" },
                          { label: "Performance Data", desc: "App performance metrics, logs, and optimization data stored temporarily" },
                          { label: "Cache Data", desc: "App icons, usage statistics cache, and discovery state for improved performance" },
                        ].map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-green-600 font-black shrink-0">·</span>
                            <p>
                              <strong className="text-green-900">{item.label}:</strong> {item.desc}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Data We Don't Collect */}
                    <div className="bg-red-50/50 p-10 rounded-[2.5rem] border border-red-100">
                      <h4 className="text-xl font-black text-red-800 mb-8 flex items-center">
                        <span className="text-red-600 mr-4 text-2xl">❌</span>
                        Data We DO NOT Collect
                      </h4>
                      <ul className="space-y-4 text-base text-red-700 list-none">
                        {[
                          "Personal identifying information",
                          "Usage data sent to external servers",
                          "Analytics or tracking data",
                          "Location information",
                          "Contact information",
                          "Device identifiers for tracking purposes",
                          "Any data from blocked applications",
                        ].map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-red-600 font-black shrink-0">/</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 2: Accessibility Service */}
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">
                      2. Accessibility Service Data Usage
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                  </div>

                  <div className="bg-amber-50/50 p-12 rounded-[2.5rem] border border-amber-100 mb-12 text-center">
                    <h3 className="text-xl font-black text-amber-800 mb-6">
                      Why We Need Accessibility Service Access
                    </h3>
                    <p className="text-amber-700 max-w-2xl mx-auto">
                      Mindful Guard uses Android&apos;s Accessibility Service <strong>exclusively</strong> for app blocking functionality during your focus sessions.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl">
                      <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 underline decoration-slate-200 underline-offset-8">Technical Access</h4>
                      <ul className="space-y-3 text-sm text-slate-600">
                        <li>Window State Changes</li>
                        <li>Window Content</li>
                        <li>App Interface Elements</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2">
                        <Shield className="h-4 w-4 text-blue-200" />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6 underline decoration-blue-200 underline-offset-8">Actual Usage</h4>
                      <ul className="space-y-3 text-sm text-blue-700 font-bold">
                        <li>App Launch Detection</li>
                        <li>App Package Identification</li>
                        <li>App Blocking Enforcement</li>
                        <li>Focus Session Management</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-3xl">
                      <h4 className="text-sm font-black uppercase tracking-widest text-red-400 mb-6 underline decoration-red-100 underline-offset-8">No Access Policy</h4>
                      <ul className="space-y-3 text-sm text-slate-600">
                        <li>Personal content within apps</li>
                        <li>User input data</li>
                        <li>Screen content reading</li>
                        <li>Cross-app personal info</li>
                        <li>User behavior patterns</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-600 rounded-[2.5rem] p-12 text-white">
                    <h4 className="text-xl font-black mb-10 text-center uppercase tracking-[0.2em]">Data Handling Principles</h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                      <div>
                        <div className="text-blue-200 text-xs font-black uppercase mb-2">Processing</div>
                        <div className="font-bold">Local only</div>
                      </div>
                      <div>
                        <div className="text-blue-200 text-xs font-black uppercase mb-2">Storage</div>
                        <div className="font-bold">No permanent storage</div>
                      </div>
                      <div>
                        <div className="text-blue-200 text-xs font-black uppercase mb-2">Transmission</div>
                        <div className="font-bold">Zero network exit</div>
                      </div>
                      <div>
                        <div className="text-blue-200 text-xs font-black uppercase mb-2">Purpose</div>
                        <div className="font-bold">Blocking only</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Permissions */}
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">
                      3. Permissions Explained
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                  </div>

                  <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
                    Mindful Guard requests the following permissions for specific functionalities:
                  </p>

                  <div className="grid gap-8">
                    {[
                      {
                        icon: "🔐",
                        title: "Accessibility Service",
                        purpose: "Block selected apps during focus sessions",
                        access: "App launch events only",
                        usage: "Local processing only, no data storage"
                      },
                      {
                        icon: "🔔",
                        title: "Notifications",
                        purpose: "Display focus session status and timer updates",
                        access: "One-way push only",
                        usage: "Keep you informed about active sessions"
                      },
                      {
                        icon: "📊",
                        title: "Usage Access",
                        purpose: "Analyze app usage patterns for intelligent suggestions",
                        access: "Usage statistics metadata",
                        usage: "Generate smart recommendations locally"
                      },
                      {
                        icon: "⏰",
                        title: "Alarms & Reminders",
                        purpose: "Schedule precise timer start/stop times",
                        access: "System time hooks",
                        usage: "Automated timer scheduling"
                      },
                      {
                        icon: "🌐",
                        title: "Network Permissions",
                        purpose: "Required by development framework",
                        access: "Zero actual data transmission",
                        usage: "Framework dependency only"
                      }
                    ].map((permission, index) => (
                      <div key={index} className="bg-slate-50/50 p-10 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-8">
                        <div className="text-4xl shrink-0">{permission.icon}</div>
                        <div className="grid sm:grid-cols-3 gap-8 flex-1">
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{permission.title}</h4>
                            <p className="text-slate-900 font-bold">{permission.purpose}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Access Type</h4>
                            <p className="text-slate-600 text-sm">{permission.access}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Usage Logic</h4>
                            <p className="text-slate-600 text-sm">{permission.usage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 4: Data Storage */}
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">
                      4. Data Storage Architecture
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                  </div>

                  <div className="bg-green-50/50 p-12 rounded-[2.5rem] border border-green-100 mb-12">
                    <h3 className="text-2xl font-black text-green-800 mb-8 text-center uppercase tracking-tighter">Local Storage Only</h3>
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <p className="text-green-900 font-bold flex gap-3">
                          <span className="shrink-0 text-green-600">✓</span>
                          All data stays on your device exclusively.
                        </p>
                        <p className="text-green-700 font-medium flex gap-3">
                          <span className="shrink-0 text-red-500">❌</span>
                          Zero cloud synchronization or server-side backups.
                        </p>
                      </div>
                      <div className="bg-white/50 p-8 rounded-3xl">
                        <h4 className="text-xs font-black text-green-600 uppercase tracking-widest mb-4">Storage Targets</h4>
                        <ul className="space-y-2 text-sm text-green-800 font-mono">
                          <li>• SQLite: mindful_guard_v2.db</li>
                          <li>• SharedPreferences: System settings</li>
                          <li>• AsyncStorage: UI State cache</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-10 rounded-3xl">
                      <h4 className="text-xl font-black text-slate-900 mb-6">Security Layer</h4>
                      <ul className="space-y-4 text-sm text-slate-600 list-none">
                        <li className="flex gap-3">
                          <span className="text-blue-600 font-black">/</span>
                          <p><strong className="text-slate-900">Encryption:</strong> Android Keystore backed encryption for sensitive settings.</p>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-blue-600 font-black">/</span>
                          <p><strong className="text-slate-900">Sandboxing:</strong> App-specific directories prevent external access.</p>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-3xl">
                      <h4 className="text-xl font-black text-slate-900 mb-6">Retention Logic</h4>
                      <ul className="space-y-4 text-sm text-slate-600 list-none">
                        <li className="flex gap-3">
                          <span className="text-blue-600 font-black">/</span>
                          <p><strong className="text-slate-900">Auto-Purge:</strong> Build logs purged every 7 days automatically.</p>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-blue-600 font-black">/</span>
                          <p><strong className="text-slate-900">Total Deletion:</strong> All data is wiped on app uninstallation.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 7: Contact Info Cleanup */}
                <section className="rounded-[2.5rem] border border-blue-100 bg-blue-50/30 p-12 text-center">
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    5. Privacy Support
                  </h2>
                  <p className="mb-10 text-slate-600 max-w-2xl mx-auto">
                    Mindful Guard is designed to be self-sovereign. If you have any 
                    concerns about our privacy architecture, please reach out.
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
