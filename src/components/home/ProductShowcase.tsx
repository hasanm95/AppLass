"use client";

import { Section } from "@/components/common/Section";
import { PRODUCTS } from "@/constants/home-data";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";

export function ProductShowcase() {
  const featuredProduct = PRODUCTS[0]; // ScreenVeil
  const otherProducts = PRODUCTS.slice(1);

  return (
    <Section id="apps" className="block-section bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4 md:mb-20">
          <span className="product-number">PRODUCTS</span>
          <span className="editorial-line flex-1" />
        </div>

        {/* Featured Product: ScreenVeil */}
        <div className="mb-16 md:mb-24">
          <div className="mb-6 flex items-center gap-4">
            <span className="product-number">01</span>
            <span className="editorial-line-accent" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="offset-card">
              <span className="text-eyebrow mb-4 block text-green-600">
                {featuredProduct.platform}
              </span>

              <h3 className="text-display-sm mb-4">{featuredProduct.name}</h3>

              <p className="mb-2 font-mono text-sm font-semibold text-green-600">
                {featuredProduct.tagline}
              </p>

              <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
                {featuredProduct.description}
              </p>

              {/* Stats */}
              <div className="mb-8 flex flex-wrap gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground font-mono text-2xl font-bold">
                    {featuredProduct.stats?.downloads}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    downloads
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground font-mono text-2xl font-bold">
                    {featuredProduct.stats?.rating}★
                  </span>
                  <span className="text-muted-foreground text-sm">rating</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={featuredProduct.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-700"
              >
                {featuredProduct.cta}
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            {/* Product Visual */}
            <div className="relative">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <ExportedImage
                  src={featuredProduct.image}
                  alt={`${featuredProduct.name} interface`}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -right-4 -bottom-4 h-16 w-16 border-2 border-green-600/30" />
            </div>
          </div>
        </div>

        {/* Other Products - Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {otherProducts.map((product, idx) => {
            const isFomoGen = product.id === "fomogen";
            const accentColor = isFomoGen ? "text-cta" : "text-primary";

            return (
              <div
                key={product.id}
                className="offset-card group cursor-pointer"
              >
                {/* Number */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="product-number">0{idx + 2}</span>
                  <span className="editorial-line group-hover:bg-cta transition-colors" />
                </div>

                {/* Image */}
                <div className="relative mb-6 aspect-video overflow-hidden bg-slate-100">
                  <ExportedImage
                    src={product.image}
                    alt={`${product.name} interface`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <span className="text-eyebrow text-muted-foreground mb-2 block">
                  {product.platform}
                </span>

                <h3 className="text-headline mb-2">{product.name}</h3>

                <p
                  className={`mb-4 font-mono text-sm font-semibold ${accentColor}`}
                >
                  {product.tagline}
                </p>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Metrics */}
                <div className="mb-6 flex flex-wrap gap-4">
                  {product.metrics.map((metric, midx) => (
                    <span
                      key={midx}
                      className="border-border text-foreground border px-3 py-1 font-mono text-xs font-semibold"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={product.ctaLink}
                  className={`inline-flex items-center gap-2 font-semibold transition-all group-hover:gap-3 ${accentColor}`}
                >
                  {product.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
