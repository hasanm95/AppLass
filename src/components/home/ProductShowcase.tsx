import { Section } from "@/components/common/Section";
import { PRODUCTS } from "@/constants/home-data";
import { ExternalLink } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ProductShowcaseProps {
  translations?: Dictionary["home"]["productShowcase"];
  products?: Dictionary["products"];
}

export function ProductShowcase({ translations, products }: ProductShowcaseProps) {
  // ScreenVeil is the featured product
  const featuredDataSource = PRODUCTS[0]; 
  const featuredTranslation = products?.screenveil;
  
  const otherDataSources = PRODUCTS.slice(1);

  return (
    <Section
      id="apps"
      className="bg-[var(--background)] py-16 md:py-24 lg:py-32"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4 md:mb-20">
          <span className="font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
            {translations?.sectionLabel || "PRODUCTS"}
          </span>
          <span className="block h-px flex-1 bg-[var(--foreground)]/20" />
        </div>

        {/* Featured Product: ScreenVeil */}
        <div className="mb-16 md:mb-24">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
              01
            </span>
            <span className="block h-px w-24 bg-[var(--cta)]" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="relative border-l-2 border-[var(--foreground)]/10 pl-6 transition-all duration-200 hover:border-l-[var(--cta)] md:pl-8">
              <span className="mb-2 block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
                {featuredTranslation?.platform || featuredDataSource.platform}
              </span>

              <h2 className="font-mono text-4xl font-bold text-[var(--foreground)] md:text-5xl">
                {featuredTranslation?.name || featuredDataSource.name}
              </h2>

              <p className="mb-4 font-mono text-lg font-semibold text-green-600">
                {featuredTranslation?.tagline || featuredDataSource.tagline}
              </p>

              <p className="mb-8 max-w-md text-lg leading-relaxed text-[var(--muted-foreground)]">
                {featuredTranslation?.description || featuredDataSource.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-bold text-[var(--foreground)]">
                    {featuredDataSource.stats?.downloads}
                  </span>
                  <span className="text-sm text-[var(--muted-foreground)]">
                    {translations?.downloadsFeatured || "downloads"}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-bold text-[var(--foreground)]">
                    {featuredDataSource.stats?.rating}★
                  </span>
                  <span className="text-sm text-[var(--muted-foreground)]">
                    {translations?.ratingFeatured || "rating"}
                  </span>
                </div>
              </div>

              <a
                href={featuredDataSource.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-700"
              >
                {featuredTranslation?.cta || featuredDataSource.cta}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Image */}
            <a
              href={featuredDataSource.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center transition-transform hover:scale-[1.02]"
            >
              <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-green-50 to-green-100 p-12">
                <img
                  src={featuredDataSource.image}
                  alt={featuredTranslation?.name || featuredDataSource.name}
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-lg border-2 border-green-600/30" />
            </a>
          </div>
        </div>

        {/* Other Products - Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {otherDataSources.map((product, idx) => {
            const isFomoGen = product.id === "fomogen";
            const accentColor = isFomoGen
              ? "text-[var(--cta)]"
              : "text-[var(--primary)]";
              
            // Map the product ID to the correct key in the translation dictionary
            const dictKey = product.id === "mindful" ? "mindfulGuard" : product.id as keyof NonNullable<typeof products>;
            const translation = products?.[dictKey];

            return (
              <a
                key={product.id}
                href={product.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative cursor-pointer border-l-2 border-[var(--foreground)]/10 pl-6 transition-all duration-200 hover:border-l-[var(--cta)] md:pl-8"
              >
                {/* Number */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-mono text-xs font-bold tracking-widest text-[var(--muted-foreground)]/50 uppercase">
                    0{idx + 2}
                  </span>
                  <span className="block h-px w-16 bg-[var(--foreground)]/20 transition-colors group-hover:bg-[var(--cta)]" />
                </div>

                {/* Image */}
                <div className="mb-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-6">
                  <img
                    src={product.image}
                    alt={translation?.name || product.name}
                    width={600}
                    height={600}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <span className="mb-2 block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
                  {translation?.platform || product.platform}
                </span>

                <h3 className="font-mono text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  {translation?.name || product.name}
                </h3>

                <p
                  className={`mb-4 font-mono text-sm font-semibold ${accentColor}`}
                >
                  {translation?.tagline || product.tagline}
                </p>

                <p className="mb-6 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {translation?.description || product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {(translation?.metrics || product.metrics).map((metric, midx) => (
                    <span
                      key={midx}
                      className="border border-[var(--border)] px-3 py-1 font-mono text-xs font-semibold text-[var(--foreground)]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

