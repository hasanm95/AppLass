export default function ExitIntentPage({}: { lang?: string }) {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Retention Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Exit Intent Popups<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Precision recovery. Capture fleeing traffic with high-context offers
          before they sever the session.
        </p>
      </header>

      <div className="space-y-24">
        {/* How It Works */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Mechanism of Action
          </h2>
          <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-10 lg:p-14">
            <p className="max-w-3xl text-lg leading-relaxed font-medium text-slate-600">
              The FOMO Engine monitors kinetic and behavioral data points in
              real-time. When a qualifying exit vector is detected — such as
              radial mouse velocity towards the URL bar or rapid mobile
              scroll-up — the intervention layer is activated.
            </p>
          </div>
        </section>

        {/* Trigger Matrix */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Trigger Matrix
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Kinetic Exit"
              desc="Standard mouse tracking for desktop environments. Detects trajectory and speed towards browser UI."
              meta="Platform: Desktop"
            />
            <FeatureCard
              title="Mobile Inactivity"
              desc="Detects session stagnation or sudden back-press gestures on handheld devices."
              meta="Platform: Mobile"
            />
          </div>
        </section>

        {/* Targeting Controls */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Targeting Controls
          </h2>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    Control
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    Behavior
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="transition-colors hover:bg-slate-50/50">
                  <td className="px-8 py-5 text-sm font-bold text-slate-900">
                    Frequency
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">
                    Limit display to once per session to maintain UX integrity.
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50/50">
                  <td className="px-8 py-5 text-sm font-bold text-slate-900">
                    Cart Threshold
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">
                    Suppress/Show based on real-time cart valuation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Optimization Note */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black tracking-widest text-blue-400 uppercase">
            Optimization Note
          </h4>
          <p className="text-xl leading-relaxed font-medium opacity-80">
            Since mouse exit does not apply to tactile interfaces, ensure you
            enable <strong>Mobile Scroll Trigger</strong> or{" "}
            <strong>Inactivity Detection</strong> to capture handheld traffic.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  meta,
}: {
  title: string;
  desc: string;
  meta: string;
}) {
  return (
    <div className="group rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/20 transition-all hover:border-blue-100 hover:shadow-blue-500/5">
      <h3 className="mb-4 text-xl font-black text-slate-900">{title}</h3>
      <p className="mb-8 text-lg leading-relaxed font-medium text-slate-500">
        {desc}
      </p>
      <div className="inline-block rounded-full bg-slate-50 px-4 py-1 text-xs font-black tracking-wider text-slate-400 uppercase transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
        {meta}
      </div>
    </div>
  );
}
