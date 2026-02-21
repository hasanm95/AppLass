export default function SocialProofBadgesPage({}: { lang?: string }) {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Trust Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Social Proof Badges<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Aggregate validation. Display high-level conversion statistics to
          provide immediate credibility to first-time visitors.
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
              The Badge Module aggregates conversion event clusters over defined
              temporal windows. By surfacing the volume of peer participation
              (e.g., &quot;127 people bought this today&quot;), the engine
              builds instantaneous product-level authority.
            </p>
          </div>
        </section>

        {/* Feature Matrix */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Configuration Matrix
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Temporal Windows"
              desc="Calculate sales volume for Today, This Week, or All-Time. Automatically switches to broader windows if daily volume is low."
              meta="Logic: Time-Series"
            />
            <FeatureCard
              title="Visual Semantics"
              desc="Choose between Pill or Box layouts. Modern rounded aesthetics or traditional structured presentation styles."
              meta="Logic: UI Variants"
            />
          </div>
        </section>

        {/* Data Intelligence */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Data Intelligence
          </h2>
          <ul className="space-y-6">
            <li className="flex gap-6 rounded-[2rem] border border-slate-100 p-8">
              <span className="font-black text-blue-600">/</span>
              <div>
                <h4 className="font-black text-slate-900">Minimum Threshold</h4>
                <p className="font-medium text-slate-500">
                  Intelligent suppression. The badge remains hidden until a
                  statistically significant volume is reached (e.g., 5+ sales).
                </p>
              </div>
            </li>
            <li className="flex gap-6 rounded-[2rem] border border-slate-100 p-8">
              <span className="font-black text-blue-600">/</span>
              <div>
                <h4 className="font-black text-slate-900">Smart Rounding</h4>
                <p className="font-medium text-slate-500">
                  High-volume normalization. Large numbers are formatted (e.g.,
                  &quot;2.5k+&quot;) to ensure a clean, authoritative UI.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Efficiency Tip */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black tracking-widest text-blue-400 uppercase">
            Conversion Strategy
          </h4>
          <p className="text-xl leading-relaxed font-medium opacity-80">
            Combine badges with <strong>Purchase Notifications</strong>. The
            notification creates an initial visual hook, while the badge
            provides a persistent evidence-based anchor for the duration of the
            page session.
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
