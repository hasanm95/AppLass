import { Navbar, Footer, Section, FAQSchema } from "@/components/common";
import { Metadata } from "next";
import Link from "next/link";
import { Shield, Clock, Zap, Brain, Lock, Smartphone, Eye, Sun, Linkedin, Github } from "lucide-react";
import { FAQ_REGISTRY } from "@/constants/faq-registry";

export const metadata: Metadata = {
  title: "Digital Wellness Guide 2026: 7 Steps to Reclaim Your Focus [Expert Guide]",
  description:
    "Master your digital life in 2026. Learn how to combat digital burnout, audit your notifications, and use privacy-first tools like Mindful Guard to boost productivity.",
};

export default function DigitalWellnessPillar() {

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <Section className="bg-iridescent border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container">
            <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              Authority Pillar
            </span>
            <h1 className="text-display mb-8 max-w-5xl text-slate-900">
              The Ultimate Guide to Digital Wellness in 2026<span className="text-slate-300">: Master Your Focus and Privacy.</span>
            </h1>
            <p className="max-w-3xl text-xl font-medium leading-relaxed text-slate-600">
              In 2026, the average professional spends more than 11 hours a day interacting with screens. 
              While technology has made us more connected than ever, it has also led to a &quot;Great Decoupling&quot; 
              of our attention, where constant notifications fragment our focus and lead to digital burnout.
            </p>
            <p className="mt-8 max-w-3xl text-lg font-medium text-slate-500 italic border-l-4 border-blue-500 pl-6">
              Digital wellness is no longer just about &quot;using your phone less.&quot; It is a holistic approach 
              to physical health, cognitive load management, and digital privacy.
            </p>
          </div>
        </Section>

        {/* Cognitive Load Management */}
        <Section className="py-24">
          <div className="section-container">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="lg:w-1/3 sticky top-40">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white mb-8">
                  <Brain className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6">1. Cognitive Load Management</h2>
                <p className="text-lg font-medium text-slate-500 leading-relaxed">
                  Finding the Signal in the Noise. Our brains were not built to process 100+ notifications per hour. 
                  To maintain peak performance, you must treat your attention as a finite resource.
                </p>
              </div>
              <div className="flex-1 space-y-12">
                <div className="rounded-[2.5rem] bg-slate-50 p-12 border border-slate-100 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Notification Auditing</h3>
                  <p className="text-slate-600 mb-8 font-medium">Categorize your alerts into three levels to protect your neural bandwidth:</p>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black text-xs shrink-0">1</div>
                      <p className="text-slate-700 font-bold"><span className="text-rose-600">Level 1 (Critical):</span> Includes family and server alerts for immediate response.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-black text-xs shrink-0">2</div>
                      <p className="text-slate-700 font-bold"><span className="text-amber-600">Level 2 (Active):</span> Should be batched every 2 hours.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xs shrink-0">3</div>
                      <p className="text-slate-700 font-bold"><span className="text-blue-600">Level 3 (Passive):</span> Social media and newsletters—disable entirely.</p>
                    </li>
                  </ul>
                </div>
                <div className="rounded-[2.5rem] bg-blue-50/50 p-12 border border-blue-100">
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Implementation of &quot;Deep Work&quot; Blocks</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Dedicate at least two hours every morning to high-complexity tasks with zero digital interruptions. 
                    This means <strong className="text-slate-900">no Slack, no email, and no phone.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Physical Setup */}
        <Section className="py-24 bg-slate-50/50">
          <div className="section-container text-center">
            <span className="mb-4 block text-[10px] font-black uppercase tracking-widest text-emerald-600">Physical Health</span>
            <h2 className="text-5xl font-black text-slate-900 mb-16">2. The Physical Setup: 2026 Ergonomics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "The 90-Degree Rule",
                  desc: "Keep elbows parallel to the desk and knees at a 90-degree angle with feet flat on the floor.",
                  icon: <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl"><Zap size={32} /></div>
                },
                {
                  title: "20-20-20 Eye Health",
                  desc: "Every 20 minutes, look at something 20 feet away for at least 20 seconds to prevent strain.",
                  icon: <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl"><Eye size={32} /></div>
                },
                {
                  title: "Blue Light Mitigation",
                  desc: "Disable all blue-light-emitting devices 60 minutes before sleep for natural melatonin production.",
                  icon: <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl"><Sun size={32} /></div>
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
                  <div className="flex justify-center mb-8">{item.icon}</div>
                  <h4 className="text-xl font-black text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-500 font-medium text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Essential Tools */}
        <Section className="py-24">
          <div className="section-container">
             <div className="text-center mb-20 max-w-3xl mx-auto">
               <h2 className="text-5xl font-black text-slate-900 mb-8">3. Essential Tools for Focus and Privacy</h2>
               <p className="text-xl font-medium text-slate-500">To achieve digital wellness, you need tools that respect your data while protecting your time.</p>
             </div>
             <div className="space-y-8">
               <div className="group rounded-[3rem] border border-slate-100 bg-[#FAFBFD] p-12 lg:p-20 flex flex-col lg:flex-row gap-16 items-center hover:border-blue-500/20 transition-all">
                 <div className="flex-1">
                   <div className="mb-6 flex items-center gap-3">
                     <Shield className="h-6 w-6 text-blue-600" />
                     <span className="text-xs font-black uppercase tracking-widest text-blue-600">Privacy First</span>
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 mb-6">Mindful Guard</h3>
                   <p className="text-lg font-medium text-slate-500 leading-relaxed mb-8">
                     A leading privacy-first focus app that combines a Pomodoro timer with strict app blocking. 
                     Unlike many competitors, it works <strong className="text-slate-900">100% offline with no data collection.</strong>
                   </p>
                   <Link href="/apps/mindful-guard" className="inline-flex h-14 items-center px-10 rounded-full bg-blue-600 text-white font-black hover:bg-blue-700 transition-all">
                     View Mindful Guard
                   </Link>
                 </div>
                 <div className="lg:w-1/3 aspect-square bg-white rounded-[2.5rem] shadow-inner border border-slate-50 flex items-center justify-center p-12">
                    <Shield className="h-32 w-32 text-blue-600" />
                 </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <div className="rounded-[2.5rem] border border-slate-100 p-12 bg-white">
                   <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-4">
                     <Smartphone className="text-blue-600" /> ScreenVeil
                   </h4>
                   <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                     A lightweight screen filter for Android designed to protect your data from prying eyes 
                     in public spaces while reducing eye strain through customizable overlays.
                   </p>
                   <Link href="/apps/screenveil" className="text-blue-600 font-black hover:underline">Learn about ScreenVeil &rarr;</Link>
                 </div>
                 <div className="rounded-[2.5rem] border border-slate-100 p-12 bg-white">
                   <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-4">
                     <Lock className="text-emerald-600" /> Opal Alternatives
                   </h4>
                   <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                     For Android users looking for the functionality of iOS&apos;s Opal, several high-performance 
                     alternatives now offer deep analytics into your triggers and patterns.
                   </p>
                   <Link href="/blog/opal-alternatives-android" className="text-emerald-600 font-black hover:underline">Read the comparison &rarr;</Link>
                 </div>
               </div>
             </div>
          </div>
        </Section>

        {/* Offline Recovery Protocol */}
        <Section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
          <div className="section-container relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1">
                <span className="mb-6 block text-[10px] font-black uppercase tracking-widest text-blue-400">The Power of Disconnect</span>
                <h2 className="text-5xl font-black mb-12">4. The &quot;Offline&quot; <br /> Recovery Protocol</h2>
                <div className="space-y-8">
                  {[
                    { title: "The Weekend Air-Gap", desc: "Designate at least four hours every Sunday where all devices are powered off and stored in a different room." },
                    { title: "Tactile Hobbies", desc: "Engage in non-digital activities like gardening or paper-based reading to reset your dopamine receptors." },
                    { title: "The Nature Break", desc: "Spend 15 minutes in direct sunlight before 10:00 AM to regulate your circadian rhythm." }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="h-6 w-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-black text-xs shrink-0 border border-blue-400/30">/</div>
                      <div>
                        <h4 className="font-black text-xl mb-2">{p.title}</h4>
                        <p className="text-slate-400 font-medium leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="p-12 bg-blue-600 rounded-[3rem] text-center shadow-2xl">
                  <Clock className="h-16 w-16 mx-auto mb-8 text-white" />
                  <p className="text-white text-xl font-bold leading-relaxed mb-8">
                    &quot;Structure determines function. To maintain long-term productivity, you must intentionally disconnect.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Mesh */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '6rem 6rem' }} />
        </Section>

        {/* FAQs */}
        <Section className="py-24">
          <div className="section-container max-w-4xl">
            <h2 className="text-4xl font-black text-slate-900 mb-16 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {FAQ_REGISTRY.DIGITAL_WELLNESS.map((faq, i) => (
                <div key={i} className="rounded-3xl border border-slate-100 p-10 hover:border-blue-500/20 transition-all">
                  <h4 className="text-xl font-black text-slate-900 mb-4">{faq.question}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <FAQSchema items={FAQ_REGISTRY.DIGITAL_WELLNESS} />
        </Section>

        {/* Author Bio Section */}
        <Section className="py-24 bg-slate-50/30 border-t border-slate-100">
          <div className="section-container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-xl flex items-center justify-center font-black text-slate-400 text-4xl italic">H</div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Hasan M.</h3>
              <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                Founder of AppLass and Lead Engineer focused on mathematical optimization and digital discipline. 
                With 7+ years of experience in first-principles software architecture.
              </p>
              <div className="flex justify-center gap-4">
                 <Link href="/about" className="text-blue-600 font-black hover:underline flex items-center gap-2">
                   View Full Bio &rarr;
                 </Link>
                 <span className="text-slate-300">|</span>
                 <a href="https://www.linkedin.com/in/hasanm025/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                   <Linkedin size={20} />
                 </a>
                 <a href="https://github.com/hasanm95" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                   <Github size={20} />
                 </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
