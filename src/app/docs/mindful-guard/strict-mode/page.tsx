import { Lock, Timer, ShieldAlert } from "lucide-react";

export default function MindfulGuardStrictModePage() {
  return (
    <div className="space-y-12">
      <header>
        <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">
          Guide #02
        </span>
        <h1 className="text-4xl font-black text-slate-900 md:text-5xl">
          Strict Logic Mode<span className="text-slate-300">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
          The core of the cognitive firewall. Enforce zero-bypass focus 
          sessions that cannot be interrupted.
        </p>
      </header>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-black text-slate-900">How it works</h2>
        <p className="text-lg font-medium text-slate-500">
          Strict Mode locks your chosen settings for a set duration. It prevents 
          anyone (including you) from uninstalling the app or changing the 
          blocking schedule until the timer expires.
        </p>
      </div>

      <div className="grid gap-8">
        <Feature 
          title="No-Bypass Architecture"
          description="Bypassing the block is mathematically impossible during an active session."
          icon={<Lock className="h-6 w-6 text-blue-600" />}
        />
        <Feature 
          title="Scheduled Enforcement"
          description="Pre-plan your focus blocks for the week. Once they start, the firewall is absolute."
          icon={<Timer className="h-6 w-6 text-blue-600" />}
        />
        <Feature 
          title="Cognitive Firewall"
          description="Intercepts distraction attempts at the system level before they reach your conscious mind."
          icon={<ShieldAlert className="h-6 w-6 text-blue-600" />}
        />
      </div>

      <div className="rounded-[2.5rem] border border-red-50 bg-red-50/10 p-12">
        <p className="font-black uppercase tracking-widest text-red-600 mb-4">Warning</p>
        <h3 className="mb-4 text-2xl font-black text-slate-900">No Recovery Possible</h3>
        <p className="max-w-lg text-lg font-medium leading-relaxed text-slate-500">
          Strict Mode is designed to be permanent for the duration you set. There 
          is no &quot;Emergency Unlock&quot; by design. Use with intention.
        </p>
      </div>
    </div>
  );
}

function Feature({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex gap-6 rounded-3xl border border-slate-50 bg-white p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 text-xl font-black text-slate-900">{title}</h3>
        <p className="font-medium text-slate-500">{description}</p>
      </div>
    </div>
  );
}
