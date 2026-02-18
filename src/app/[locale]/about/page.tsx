import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { Section } from "@/components/common/Section";
import { PILLARS } from "@/constants/home-data";
import {
  Zap,
  Calculator,
  Globe,
  Github,
  Linkedin,
  Shield,
  Search,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | The AppLass Methodology",
  description:
    "Founder-led development derived from first principles. Mathematical integrity meets high-end digital craft. Meet the engineer behind the logic.",
};

const iconMap = {
  Zap: Zap,
  Calculator: Calculator,
  Globe: Globe,
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentLocale={locale as any} />
      <div className="pt-32">
        {/* Hero Methodology Section */}
        <Section className="bg-iridescent border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container text-center lg:text-left">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-800 uppercase">
              The AppLass Methodology
            </span>
            <h1 className="text-display mx-auto mb-8 max-w-4xl text-slate-900 lg:mx-0">
              The <span className="text-slate-300">Methodology.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-500 lg:mx-0">
              At AppLass, we bridge the gap between complex mathematics and
              human-centric software. From high-conversion Shopify tools to
              mindful mobile utilities, we build the &apos;Next Wave&apos; of
              digital performance—zero bloat, maximum impact.
            </p>
          </div>
        </Section>

        {/* Founder Bio - E-E-A-T Signal */}
        <Section className="py-32">
          <div className="section-container">
            <div className="flex flex-col items-center gap-20 lg:flex-row">
              <div className="relative lg:w-1/3">
                <div className="relative aspect-4/5 overflow-hidden rounded-[3rem] bg-slate-100">
                  {/* Placeholder for real image in next iteration if needed */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900 text-[10rem] font-black text-white/10 italic select-none">
                    LOGIC
                  </div>
                </div>
                {/* Float Badge */}
                <div className="absolute -right-6 -bottom-6 rounded-3xl bg-blue-600 p-8 text-white shadow-2xl lg:-right-10">
                  <span className="block text-3xl font-black">7+</span>
                  <span className="text-xs font-bold tracking-widest text-blue-100 uppercase">
                    Years Experience
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-10">
                <span className="block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  The Founder&apos;s Logic
                </span>
                <h2 className="text-5xl leading-[1.1] font-black text-slate-900">
                  Systemic Integrity <br />
                  <span className="text-slate-300">by Design.</span>
                </h2>
                <div className="max-w-2xl space-y-6 text-xl leading-relaxed font-medium text-slate-600">
                  <p>
                    Software should be a derivation of logical truth. Founded by
                    an engineer obsessed with performance optimization and
                    accessibility, AppLass was born from a simple realization:
                    the modern web is failing under the weight of its own bloat.
                  </p>
                  <p>
                    With 7+ years of experience building mission-critical
                    e-commerce infrastructure and high-productivity mobile
                    environments, I deploy tools that solve for one variable:
                    <strong>Impact.</strong>
                  </p>
                </div>
                <div className="flex gap-6">
                  <a
                    href="https://www.linkedin.com/in/hasanm025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 shadow-sm transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/hasanm95"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Pillars Section */}
        <Section className="bg-slate-50/50 py-24">
          <div className="section-container">
            <div className="mb-24 flex flex-col items-start gap-16 md:flex-row">
              <div className="flex-1">
                <h2 className="text-5xl font-black text-slate-900">
                  Built Different by Logic.
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-xl leading-relaxed font-medium text-slate-600">
                  We avoid the &quot;feature-first&quot; trap and focus on
                  systemic integrity. Every line of code is measured against
                  Core Web Vitals and human psychological constraints.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {PILLARS.map((pillar, idx) => {
                const Icon = iconMap[pillar.iconName as keyof typeof iconMap];
                return (
                  <div
                    key={idx}
                    className="group rounded-[2.5rem] border border-slate-100 bg-white p-12 transition-all hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5"
                  >
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={32} />
                    </div>
                    <span className="mb-4 block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      {pillar.label}
                    </span>
                    <h3 className="mb-6 text-2xl font-black text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-lg leading-relaxed font-medium text-slate-500">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Citing & Authority Signals */}
        <Section className="py-32">
          <div className="section-container">
            <div className="relative flex flex-col items-center gap-16 overflow-hidden rounded-[3rem] bg-blue-600 p-16 text-white lg:flex-row lg:p-24">
              <div className="z-10 flex-1">
                <h2 className="mb-8 text-5xl leading-tight font-black">
                  Trusted by 20,000+ <br />
                  Digital Minimalists.
                </h2>
                <div className="mb-12 grid grid-cols-2 gap-8">
                  <div>
                    <span className="mb-2 block text-4xl font-black tracking-tighter">
                      10K+
                    </span>
                    <span className="text-xs font-bold tracking-widest text-blue-200 uppercase">
                      ScreenVeil Android
                    </span>
                  </div>
                  <div>
                    <span className="mb-2 block text-4xl font-black tracking-tighter">
                      4.4★
                    </span>
                    <span className="text-xs font-bold tracking-widest text-blue-200 uppercase">
                      Global Rating
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Shield size={18} />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Zap size={18} />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Search size={18} />
                  </div>
                </div>
              </div>
              <div className="z-10 lg:w-1/3">
                <p className="mb-10 text-xl leading-relaxed font-medium text-blue-100">
                  AppLass software is regularly cited in productivity guides and
                  tech audits for its zero-bloat approach and strict privacy
                  protocols.
                </p>
                <Link
                  href="/docs"
                  className="inline-flex h-14 items-center rounded-full bg-white px-10 font-black text-blue-600 shadow-xl transition-all hover:bg-slate-50"
                >
                  Read the Docs
                </Link>
              </div>
              {/* Abs Decorative Circle */}
              <div className="absolute top-0 right-0 -mt-48 -mr-48 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}
