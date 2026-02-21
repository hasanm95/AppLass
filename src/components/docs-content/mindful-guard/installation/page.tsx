import { Zap, Download, ShieldCheck } from "lucide-react";

export default function MindfulGuardInstallationPage({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-slate-900 uppercase">
          Guide #01
        </span>
        <h1 className="text-4xl font-black text-slate-900 md:text-5xl">
          Installation Guide<span className="text-slate-300">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Step-by-step instructions for deploying the cognitive firewall to your
          Android device.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl font-black text-slate-900">Deployment Steps</h2>

        <div className="grid gap-8">
          <Step
            number="01"
            title="Download from Play Store"
            description="Visit the official Google Play Store link to download the latest stable release of Mindful Guard."
            icon={<Download className="h-6 w-6 text-blue-600" />}
          />
          <Step
            number="02"
            title="Grant Usage Access"
            description="To monitor and block distracting apps, Mindful Guard requires the 'Usage Access' permission. This is processed entirely on-device."
            icon={<Zap className="h-6 w-6 text-blue-600" />}
          />
          <Step
            number="03"
            title="Battery Exemption"
            description="Crucial: Disable battery optimization for Mindful Guard to ensure Android's Power Management doesn't kill the blocking process."
            icon={<ShieldCheck className="h-6 w-6 text-blue-600" />}
          />
        </div>
      </section>

      <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12">
        <h3 className="mb-4 text-2xl font-black text-slate-900">
          Ready to block?
        </h3>
        <p className="mb-8 max-w-lg text-lg leading-relaxed font-medium text-slate-500">
          Once installed, head over to the Strict Logic Mode guide to learn how
          to enforce your deep work sessions.
        </p>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group flex gap-8 rounded-3xl border border-slate-50 bg-white p-8 transition-all hover:border-slate-200 hover:shadow-xl">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xl font-black text-slate-900 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
        {number}
      </div>
      <div>
        <div className="mb-2 flex items-center gap-3">
          {icon}
          <h3 className="text-xl font-black text-slate-900">{title}</h3>
        </div>
        <p className="leading-relaxed font-medium text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
