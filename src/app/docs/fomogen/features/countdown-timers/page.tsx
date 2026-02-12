export default function CountdownTimersPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
          Conversion Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Countdown Timers<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
          Engineered urgency. Deploy high-fidelity countdowns for flash sales,
          product drops, and localized sessions.
        </p>
      </header>

      <div className="space-y-24">
        {/* Timer Types */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">Timer Types</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Fixed Date"
              desc="Synced to a specific calendar event. Ideal for global moments like Black Friday or seasonal clearance."
              meta="Logic: Global Timestamp"
            />
            <FeatureCard
              title="Evergreen"
              desc="Personalized 1:1 urgency. The timer initiates upon the first session and persists across subpages."
              meta="Logic: Session-Based"
            />
          </div>
        </section>

        {/* Priority Logic */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Priority Intelligence
          </h2>
          <div className="rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-10 lg:p-14">
            <p className="mb-10 text-lg font-medium text-slate-600">
              When multiple temporal rules collide, the FOMO Engine resolves
              them using a weighted priority matrix:
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <PriorityItem
                num="01"
                title="Pinned"
                desc="Manual overrides that bypass all auto-resolution."
              />
              <PriorityItem
                num="02"
                title="Specific"
                desc="Variant-level timers beat global store-wide banners."
              />
              <PriorityItem
                num="03"
                title="Fixed"
                desc="Calendar events generally take precedence over personal."
              />
            </div>
          </div>
        </section>

        {/* Deployment Positions */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Deployment Positions
          </h2>
          <ul className="space-y-6">
            <li className="flex gap-6 rounded-[2rem] border border-slate-100 p-8">
              <span className="text-blue-600 font-black">/</span>
              <div>
                <h4 className="font-black text-slate-900">Sticky Top Bar</h4>
                <p className="font-medium text-slate-500">
                  Global persistence. Follows the user throughout the conversion
                  tunnel.
                </p>
              </div>
            </li>
            <li className="flex gap-6 rounded-[2rem] border border-slate-100 p-8">
              <span className="text-blue-600 font-black">/</span>
              <div>
                <h4 className="font-black text-slate-900">Inline Product</h4>
                <p className="font-medium text-slate-500">
                  Direct scarcity. Nested near the CTA to drive immediate cart
                  additions.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Efficiency Tip */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-blue-400">
            Conversion Protocol
          </h4>
          <p className="text-xl font-medium leading-relaxed opacity-80">
            Use <strong>Evergreen</strong> timers (e.g., 15 minutes) on abandoned
            cart sequences or welcome flows to force immediate decision-making
            from new acquisitions.
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

function PriorityItem({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <span className="mb-4 block text-4xl font-black text-slate-200">
        {num}
      </span>
      <h4 className="mb-2 font-black text-slate-900">{title}</h4>
      <p className="font-medium text-slate-500 leading-snug">{desc}</p>
    </div>
  );
}