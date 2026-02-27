import { BatteryLow, Zap } from "lucide-react";

export default function ScreenVeilEfficiencyPage({}: { lang?: string }) {
  return (
    <div className="space-y-12">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Technical Reference
        </span>
        <h1 className="text-4xl font-black text-slate-900 md:text-5xl">
          AMOLED Efficiency<span className="text-slate-300">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          The physics of battery conservation. Why True Black pixels are the
          ultimate power-saving hack.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl font-black text-slate-900">
          Power Draw Analysis
        </h2>
        <p className="text-lg font-medium text-slate-500">
          On OLED and AMOLED displays, each pixel is its own light source. By
          displaying &quot;True Black,&quot; ScreenVeil instructs pixels to turn
          completely off.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <StatCard
            title="Max Battery Saved"
            value="63%"
            description="Maximum display-related power reduction at full brightness."
            icon={<BatteryLow className="h-6 w-6 text-blue-600" />}
          />
          <StatCard
            title="Pixel Latency"
            value="0ms"
            description="Instantaneous pixel shutdown for maximum efficiency."
            icon={<Zap className="h-6 w-6 text-blue-600" />}
          />
        </div>
      </section>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-black text-slate-900">AMOLED vs LCD</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 p-8">
            <h4 className="mb-4 text-xs font-black tracking-widest text-slate-900 uppercase">
              AMOLED Logic
            </h4>
            <p className="text-sm font-medium text-slate-500">
              Pixels turn off physically. Black = Zero Power. This is the
              optimal environment for ScreenVeil.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 p-8">
            <h4 className="mb-4 text-xs font-black tracking-widest text-slate-400 uppercase">
              LCD Logic
            </h4>
            <p className="text-sm font-medium text-slate-500">
              Backlight stays on. Black = Dimmed. Efficiency is lower but
              accidental touch prevention still applies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
        {icon}
      </div>
      <div className="mb-2 text-4xl font-black text-slate-900">{value}</div>
      <h3 className="mb-4 text-xs font-black tracking-widest text-blue-600 uppercase">
        {title}
      </h3>
      <p className="font-medium text-slate-500">{description}</p>
    </div>
  );
}
