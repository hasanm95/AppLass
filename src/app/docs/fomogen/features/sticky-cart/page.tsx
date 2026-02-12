export default function StickyCartPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
          Utility Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Sticky Cart Bar<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
          Frictionless throughflow. Maintain persistent access to the
          conversion trigger as visitors navigate deep product narratives.
        </p>
      </header>

      <div className="space-y-24">
        {/* Mechanism */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Mechanism of Action
          </h2>
          <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-10 lg:p-14">
            <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-600">
              The Sticky Module monitors the vertical scroll parity of the
              viewport. Once the primary &quot;Add to Cart&quot; button exits the
              visible frame, the secondary sticky bar is injected into the fixed
              Z-layer, ensuring the purchase vector remains a single tap away.
            </p>
          </div>
        </section>

        {/* Configuration Matrix */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Configuration Matrix
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Spatial Anchors"
              desc="Deploy to the top (Desktop dominance) or bottom (Thumb-friendly mobile reach) of the viewport."
              meta="Anchor: Fixed"
            />
            <FeatureCard
              title="Trigger Threshold"
              desc="Define the precise scroll offset (e.g., 300px) required to activate the sticky transition logic."
              meta="Trigger: Kinetic"
            />
          </div>
        </section>

        {/* Variant Logic */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Variant Synchronization
          </h2>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="py-5 px-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Feature
                  </th>
                  <th className="py-5 px-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Execution
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-8 text-sm font-bold text-slate-900">
                    Live Selection
                  </td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">
                    Allows selection of SKU variants directly from the fixed bar.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-8 text-sm font-bold text-slate-900">
                    Price Parity
                  </td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">
                    Dynamically updates valuation as variants or quantities shift.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Mobile Protocol */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-blue-400">
            Mobile Protocol
          </h4>
          <p className="text-xl font-medium leading-relaxed opacity-80">
            For handheld optimization, we strictly recommend the{" "}
            <strong>Bottom</strong> anchor. This aligns with modern &quot;reach
            design&quot; standards, placing the buy trigger directly under the
            user&apos;s natural thumb resting position.
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
      <p className="mb-8 text-lg font-medium leading-relaxed text-slate-500">
        {desc}
      </p>
      <div className="inline-block rounded-full bg-slate-50 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
        {meta}
      </div>
    </div>
  );
}