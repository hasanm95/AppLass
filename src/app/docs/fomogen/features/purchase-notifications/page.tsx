export default function PurchaseNotificationsPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Social Proof Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Purchase Notifications<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Trust telemetry. Surface historical conversion data to validate your
          store&apos;s credibility through real-time peer activity.
        </p>
      </header>

      <div className="space-y-24">
        {/* Overview */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Mechanism of Action
          </h2>
          <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-10 lg:p-14">
            <p className="max-w-3xl text-lg leading-relaxed font-medium text-slate-600">
              The Notification Engine synchronizes with your Shopify order
              database to extract anonymized event data. These events are
              transformed into non-intrusive visual signals that activate the
              &quot;wisdom of the crowd&quot; psychological trigger.
            </p>
          </div>
        </section>

        {/* Configuration Matrix */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Configuration Matrix
          </h2>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    Setting
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    Default
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    Logic
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="transition-colors hover:bg-slate-50/50">
                  <td className="px-8 py-5 text-sm font-bold text-slate-900">
                    Temporal Pool
                  </td>
                  <td className="px-8 py-5 font-mono text-sm text-blue-600">
                    30 Days
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">
                    Lookback depth for calculating active purchase clusters.
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50/50">
                  <td className="px-8 py-5 text-sm font-bold text-slate-900">
                    Anonymization
                  </td>
                  <td className="px-8 py-5 font-mono text-sm text-blue-600">
                    F. Name + Init.
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">
                    Balances social validation with customer GDPR/CCPA privacy.
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50/50">
                  <td className="px-8 py-5 text-sm font-bold text-slate-900">
                    Cycle Delay
                  </td>
                  <td className="px-8 py-5 font-mono text-sm text-blue-600">
                    10 Seconds
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">
                    Temporal distance between notifications to avoid UI fatigue.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Efficiency Tip */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black tracking-widest text-blue-400 uppercase">
            Trust Protocol
          </h4>
          <p className="text-xl leading-relaxed font-medium opacity-80">
            <strong>Authenticity is Paramount:</strong> FOMO Generator strictly
            inhibits simulated purchases. Only real synchronized Shopify order
            telemetry is permitted to maintain storefront integrity and legal
            compliance.
          </p>
        </div>
      </div>
    </div>
  );
}
