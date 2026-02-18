export default function ProgressIndicatorsPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Incentive Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Progress Indicators<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Gamified checkout throughput. Increase average order value (AOV) by
          visualizing progress toward value-based milestones.
        </p>
      </header>

      <div className="space-y-24">
        {/* Logic */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Mechanism of Action
          </h2>
          <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-10 lg:p-14">
            <p className="mb-12 text-lg leading-relaxed font-medium text-slate-600">
              The Progress Module monitors the Shopify cart object in real-time.
              As the valuation delta narrows between current cart state and the
              target milestone, the visual indicator provides kinetic feedback,
              triggering the &quot;goal-gradient effect&quot; in consumer
              psychology.
            </p>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/10 lg:p-10">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-black tracking-widest text-slate-400 uppercase">
                  Live Simulation
                </span>
                <span className="text-sm font-black text-blue-600">
                  $15.00 Remaining
                </span>
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full bg-blue-600 transition-all duration-1000"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <p className="mt-6 text-center text-lg font-black text-slate-900">
                Add $15.00 more for{" "}
                <span className="text-blue-600">FREE SHIPPING!</span> 🚚
              </p>
            </div>
          </div>
        </section>

        {/* Configuration Matrix */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Configuration Matrix
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Threshold Logic"
              desc="Set precise financial milestones (e.g., $50.00 for shipping). Syncs directly with Shopify shipping zone parameters."
              meta="Logic: Currency Delta"
            />
            <FeatureCard
              title="Dynamic Messaging"
              desc="Interpolate values directly into the UI. 'Add {amount} more' updates instantly upon cart mutation."
              meta="Logic: Template Engine"
            />
          </div>
        </section>

        {/* Operational Warning */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black tracking-widest text-blue-400 uppercase">
            Technical Requirement
          </h4>
          <p className="text-xl leading-relaxed font-medium opacity-80">
            This module is a <strong>visual communication layer</strong>. You
            must independently configure your Free Shipping rates or Discount
            logic in the Shopify Admin panel to ensure financial reconciliation
            at checkout.
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
