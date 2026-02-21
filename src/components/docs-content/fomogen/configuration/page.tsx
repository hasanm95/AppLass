export default function ConfigurationPage({}: { lang?: string }) {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Technical Reference
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Configuration<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Deep reference guide for tuning the FOMO engine. Every parameter is
          engineered for maximum performance and conversion stability.
        </p>
      </header>

      <div className="space-y-24">
        {/* Progress Indicators */}
        <ConfigSection
          title="Progress Indicators"
          settings={[
            {
              name: "Indicator Type",
              default: "Text with {amount}",
              desc: "Dynamic message format using interpolation variables.",
            },
            {
              name: "Threshold Amount",
              default: "-",
              desc: "Numerical goal required to activate success state.",
            },
            {
              name: "Display Position",
              default: "Cart",
              desc: "Anchor point within the Shopify DOM structure.",
            },
          ]}
        />

        {/* Purchase Notifications */}
        <ConfigSection
          title="Purchase Notifications"
          settings={[
            {
              name: "Notification Position",
              default: "Bottom Left",
              desc: "Screen-relative coordinate for popup emergence.",
            },
            {
              name: "Display Duration",
              default: "5s",
              desc: "Temporal window before notification exit animation.",
            },
            {
              name: "Delay Between",
              default: "10s",
              desc: "Cool-down period between sequential display events.",
            },
          ]}
        />

        {/* Countdown Timers */}
        <ConfigSection
          title="Countdown Timers"
          settings={[
            {
              name: "Timer Type",
              default: "Fixed",
              desc: "Logic branch: Static end-date or relative session timer.",
            },
            {
              name: "Display Position",
              default: "Above Add-to-Cart",
              desc: "Visual injection point on the product detail page.",
            },
            {
              name: "Priority",
              default: "5",
              desc: "Weighted execution order for overlapping campaign rules.",
            },
          ]}
        />

        {/* Visitor Activity */}
        <ConfigSection
          title="Visitor Activity"
          settings={[
            {
              name: "Display Format",
              default: "Real-time",
              desc: "Statistical smoothing: Exact count, range, or qualitative.",
            },
            {
              name: "Min Threshold",
              default: "3",
              desc: "Lower bound of viewers required for visibility toggle.",
            },
            {
              name: "Update Interval",
              default: "30s",
              desc: "Frequency of background polling for live traffic data.",
            },
          ]}
        />

        {/* Stock Alerts */}
        <ConfigSection
          title="Stock Alerts"
          settings={[
            {
              name: "Stock Threshold",
              default: "5",
              desc: "Inventory level that triggers the scarcity logic loop.",
            },
            {
              name: "Alert Type",
              default: "Low Stock",
              desc: "Semantic style: Scarcity, Limited Edition, or Out of Stock.",
            },
            {
              name: "Update Frequency",
              default: "15 min",
              desc: "Shopify API sync rate for inventory reconciliation.",
            },
          ]}
        />
      </div>
    </div>
  );
}

function ConfigSection({
  title,
  settings,
}: {
  title: string;
  settings: { name: string; default: string; desc: string }[];
}) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-black text-slate-900">{title}</h2>
      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/20">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  Setting
                </th>
                <th className="px-6 py-5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  Default
                </th>
                <th className="px-6 py-5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {settings.map((s, i) => (
                <tr key={i} className="transition-colors hover:bg-slate-50/50">
                  <td className="px-6 py-5 text-sm font-bold text-slate-900">
                    {s.name}
                  </td>
                  <td className="px-6 py-5 font-mono text-sm text-blue-600">
                    {s.default}
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-500">
                    {s.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
