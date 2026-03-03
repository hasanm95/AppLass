import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import { Section } from "@/components/common/Section";

export function PricingMatrix({ labels }: { labels?: any }) {
  return (
    <Section className="relative bg-white pb-24 md:pb-32">
      <div className="section-container relative z-10 max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {labels?.compareFeatures || "Compare Features"}
            </h3>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-6 px-8 text-xs font-black tracking-[0.15em] text-slate-400 uppercase bg-slate-50/50">{labels?.feature || "Feature"}</th>
                  <th className="py-6 px-6 text-xs font-black tracking-[0.15em] text-slate-400 uppercase bg-slate-50/50 text-center">{labels?.freePlan || "Free Plan"}</th>
                  <th className="py-6 px-6 text-xs font-black tracking-[0.15em] text-green-600 uppercase bg-green-50/30 text-center ring-1 ring-green-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">{labels?.starterPlan || "Starter Plan"}</th>
                  <th className="py-6 px-6 text-xs font-black tracking-[0.15em] text-slate-400 uppercase bg-slate-50/50 text-center">{labels?.growthPlan || "Growth Plan"}</th>
                  <th className="py-6 px-6 text-xs font-black tracking-[0.15em] text-slate-400 uppercase bg-slate-50/50 text-center">{labels?.professionalPlan || "Professional"}</th>
                </tr>
              </thead>
              <tbody>
                {FOMOGEN_DATA.pricing.matrix.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                    }`}
                  >
                    <td className="py-5 px-8 font-semibold text-slate-700">{row.feature}</td>
                    <td className="py-5 px-6 text-center text-sm font-medium text-slate-500">{row.free}</td>
                    <td className="py-5 px-6 text-center text-sm font-bold text-slate-900 bg-green-50/10 border-x border-green-100/50">{row.starter}</td>
                    <td className="py-5 px-6 text-center text-sm font-medium text-slate-500">{row.growth}</td>
                    <td className="py-5 px-6 text-center text-sm font-medium text-slate-500">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-16">
          <div className="text-center pt-10">
            <p className="text-slate-400 text-xs font-black tracking-widest uppercase mb-6">
              {labels?.launchOffers || "Launch Offers Available"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {FOMOGEN_DATA.pricing.launchOffers.map((offer, i) => (
                 <div key={i} className={`px-6 py-3 rounded-xl text-sm font-medium ${i === 0 ? "bg-green-50 border border-green-200 text-green-700" : "bg-blue-50 border border-blue-200 text-blue-700"}`}>
                   <span className="font-bold tracking-wide">{offer.highlight}</span> {offer.text}
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
