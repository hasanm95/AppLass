export default function FAQPage() {
  return (
    <div className="space-y-20">
      <header>
        <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
          Knowledge Base
        </span>
        <h1 className="text-display mb-6 text-slate-900">
          Common Questions<span className="text-slate-300">.</span>
        </h1>
        <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
          Everything you need to know about FOMO Gen. If your question
          isn't here, our technical lab is one email away.
        </p>
      </header>

      <div className="space-y-24">
        {/* General */}
        <FAQSection
          title="General"
          items={[
            {
              q: "What is FOMO Generator?",
              a: "FOMO Generator is a clinical social proof engine for Shopify. It coordinates 9 distinct urgency and scarcity modules — including purchase notifications, exit-intent logic, and stock telemetry — to maximize conversion performance.",
            },
            {
              q: "Do I need coding skills?",
              a: "Zero. All modules are managed through a unified visual dashboard. While we support custom CSS overrides for Professional plans, the engine is designed for plug-and-play architectural integration.",
            },
          ]}
        />

        {/* Setup & Installation */}
        <FAQSection
          title="Setup & Installation"
          items={[
            {
              q: "Features aren't showing on my store. Why?",
              a: (
                <div className="space-y-4">
                  <p>
                    The most common cause is an inactive app bridge. Follow
                    this protocol:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 font-bold text-slate-900">
                    <li>Shopify Admin → Online Store → Themes</li>
                    <li>Customize → Theme Settings (Gear Icon)</li>
                    <li>App Embeds → Toggle &quot;FOMO Generator&quot; ON</li>
                    <li>Save changes</li>
                  </ol>
                </div>
              ),
            },
            {
              q: "Does this work with my theme?",
              a: "Yes. FOMO Generator uses Shopify 2.0 App Embeds, ensuring safe, collision-free injection across all modern Shopify themes.",
            },
          ]}
        />

        {/* Billing & Support */}
        <FAQSection
          title="Billing & Support"
          items={[
            {
              q: "Can I try before I buy?",
              a: "Absolutely. Our Baseline tier offers core social proof modules with zero financial commitment, ideal for early-stage labs.",
            },
            {
              q: "How do I contact support?",
              a: "Access our Technical Lab directly through the dashboard 'Support' module or reach us at support@fomogenerator.com.",
            },
          ]}
        />
      </div>
    </div>
  );
}

function FAQSection({
  title,
  items,
}: {
  title: string;
  items: { q: string; a: React.ReactNode }[];
}) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-black text-slate-900">{title}</h2>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="group rounded-[2rem] border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 lg:p-10"
          >
            <h3 className="mb-4 text-lg font-black text-slate-900">{item.q}</h3>
            <div className="text-lg font-medium leading-relaxed text-slate-500">
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}