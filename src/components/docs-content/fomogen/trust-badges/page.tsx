export default function TrustBadgesPage({ lang }: { lang: string }) {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
          Authority Module
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Trust Badges<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
          Credential validation. Display high-fidelity security seals, payment
          gateways, and performance guarantees to eliminate checkout friction.
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
              The Trust Module provides a library of pre-rendered vector assets
              designed to signal security and reliability. By anchoring these
              symbols near high-friction touchpoints (like the CTA or price
              valuation), the engine reduces perceived transactional risk.
            </p>
          </div>
        </section>

        {/* Badge Library */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Asset Library
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Free Shipping",
              "SSL Secure",
              "Money Back",
              "Recycled",
              "Cruelty Free",
              "Eco Friendly",
              "Secure Pay",
              "Fast Delivery",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 py-6 shadow-sm shadow-slate-200/20 transition-all hover:shadow-md"
              >
                <span className="text-xs font-black tracking-tight text-slate-400 uppercase">
                  {badge}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-slate-400">
            Supports custom SVG/PNG uploads for proprietary certifications.
          </p>
        </section>

        {/* Configuration Matrix */}
        <section>
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Deployment Matrix
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Spatial Layouts"
              desc="Align badges in horizontal rows, responsive grids, or kinetic carousels to match your theme's density."
              meta="Logic: Grid Engine"
            />
            <FeatureCard
              title="Anchor Positions"
              desc="Optimized for 'Below Price' or 'Above Add to Cart' triggers to maximize psychological impact."
              meta="Logic: Contextual Injection"
            />
          </div>
        </section>

        {/* Efficiency Tip */}
        <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
          <h4 className="mb-4 text-sm font-black tracking-widest text-blue-400 uppercase">
            Conversion Strategy
          </h4>
          <p className="text-xl leading-relaxed font-medium opacity-80">
            <strong>Less is More:</strong> Strategic restraint (3-5 badges)
            maintains a premium aesthetic. Clustering too many signals can
            trigger &quot;over-validation,&quot; which inadvertently increases
            user skepticism.
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
