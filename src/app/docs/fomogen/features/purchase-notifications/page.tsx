export default function PurchaseNotificationsPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
          Social Proof Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Purchase Notifications<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
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
            <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-600">
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
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="py-5 px-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Setting
                  </th>
                  <th className="py-5 px-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Default
                  </th>
                  <th className="py-5 px-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Logic
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-8 text-sm font-bold text-slate-900">
                    Temporal Pool
                  </td>
                  <td className="py-5 px-8 text-sm font-mono text-blue-600">
                    30 Days
                  </td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">
                    Lookback depth for calculating active purchase clusters.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-8 text-sm font-bold text-slate-900">
                    Anonymization
                  </td>
                  <td className="py-5 px-8 text-sm font-mono text-blue-600">
                    F. Name + Init.
                  </td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">
                    Balances social validation with customer GDPR/CCPA privacy.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-8 text-sm font-bold text-slate-900">
                    Cycle Delay
                  </td>
                  <td className="py-5 px-8 text-sm font-mono text-blue-600">
                    10 Seconds
                  </td>
                  <td className="py-5 px-8 text-sm font-medium text-slate-500">
                    Temporal distance between notifications to avoid UI fatigue.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Efficiency Tip */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-blue-400">
            Trust Protocol
          </h4>
          <p className="text-xl font-medium leading-relaxed opacity-80">
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