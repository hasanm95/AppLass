export default function StockAlertsPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Scarcity Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Stock Alerts<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Inventory telemetry. Automate scarcity-driven conversion by surfacing
          real-time stock depletion events to high-intent shoppers.
        </p>
      </header>

      <div className="space-y-24">
        {/* Mechanism */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Mechanism of Action
          </h2>
          <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-10 lg:p-14">
            <p className="max-w-3xl text-lg leading-relaxed font-medium text-slate-600">
              The Stock Module maintains a low-latency connection with your
              Shopify inventory state. When SKU valuation drops below a
              configurable threshold, the engine injects a pulse-alert into the
              PDP (Product Detail Page), accelerating the checkout decision
              cycle through authentic scarcity.
            </p>

            <div className="mt-12 overflow-hidden rounded-3xl border border-red-100 bg-red-50/50 p-8 text-center shadow-xl ring-4 shadow-red-500/5 ring-white">
              <span className="text-lg font-black text-red-600">
                ⚠️ Only 3 left in stock!
              </span>
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
              title="Threshold Sensitivity"
              desc="Define the exact inventory count (e.g., < 10) that triggers the alert visibility. Automatically suppresses once stock is replenished."
              meta="Logic: Real-Time Sync"
            />
            <FeatureCard
              title="Visual Signaling"
              desc="Select from multiple alert semantics: 'Low Stock', 'Limited Edition', or 'Final Allocation'. Supports pulse and shake animations."
              meta="Logic: Dynamic UI"
            />
          </div>
        </section>

        {/* Operational Warning */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black tracking-widest text-blue-400 uppercase">
            Inventory Protocol
          </h4>
          <p className="text-xl leading-relaxed font-medium opacity-80">
            <strong>Authenticity is Mandatory:</strong> Fomo Generator
            synchronizes with <strong>REAL</strong> Shopify inventory values.
            Simulated scarcity (showing low stock when inventory is high) is
            strictly inhibited to maintain storefront integrity and compliance
            with consumer protection guidelines.
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
