import { Section } from "@/components/common/Section";
import { PRODUCTS } from "@/constants/home-data";
import { ExternalLink } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ProductShowcaseProps {
  translations?: Dictionary["home"]["productShowcase"];
}

export function ProductShowcase({ translations }: ProductShowcaseProps) {
  const featuredProduct = PRODUCTS[0]; // ScreenVeil
  const otherProducts = PRODUCTS.slice(1);

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
                {featuredProduct.platform}
              </span>

              <h2 className="font-mono text-4xl font-bold text-[var(--foreground)] md:text-5xl">
                {featuredProduct.name}
              </h2>

              <p className="mb-4 font-mono text-lg font-semibold text-green-600">
                {featuredProduct.tagline}
              </p>

              <p className="mb-8 max-w-md text-lg leading-relaxed text-[var(--muted-foreground)]">
                {featuredProduct.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-bold text-[var(--foreground)]">
                    {featuredProduct.stats?.downloads}
                  </span>
                  <span className="text-sm text-[var(--muted-foreground)]">
                    downloads
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-bold text-[var(--foreground)]">
                    {featuredProduct.stats?.rating}★
                  </span>
                  <span className="text-sm text-[var(--muted-foreground)]">
                    rating
                  </span>
                </div>
              </div>

              <a
                href={featuredProduct.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-700"
              >
                {featuredProduct.cta}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Image */}
            <a
              href={featuredProduct.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center transition-transform hover:scale-[1.02]"
            >
              <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-green-50 to-green-100 p-12">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
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
          {otherProducts.map((product, idx) => {
            const isFomoGen = product.id === "fomogen";
            const accentColor = isFomoGen
              ? "text-[var(--cta)]"
              : "text-[var(--primary)]";

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
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <span className="mb-2 block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
                  {product.platform}
                </span>

                <h3 className="font-mono text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  {product.name}
                </h3>

                <p
                  className={`mb-4 font-mono text-sm font-semibold ${accentColor}`}
                >
                  {product.tagline}
                </p>

                <p className="mb-6 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.metrics.map((metric, midx) => (
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
