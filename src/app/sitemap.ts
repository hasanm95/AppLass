import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { comparisons } from "@/lib/compare";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://applass.com";

  // Static core routes
  const staticRoutes = ["", "/about", "/apps", "/blog", "/compare"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  // Specific App Landing Pages
  const appRoutes = [
    "/apps/fomogen",
    "/apps/mindful-guard",
    "/apps/screenveil",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Specialized Authority Pillars
  const guideRoutes = [
    "/digital-wellness-2026-guide",
    "/ecommerce-performance-2026-benchmarks",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Legal and Policy pages
  const legalRoutes = [
    "/legal/fomogen/privacy",
    "/legal/fomogen/terms",
    "/legal/mindful-guard/privacy",
    "/legal/mindful-guard/terms",
    "/legal/screenveil/privacy",
    "/legal/screenveil/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }));

  // Documentation Hub and Pages
  const documentationRoutes = [
    "/docs",
    "/docs/fomogen",
    "/docs/fomogen/configuration",
    "/docs/fomogen/faq",
    "/docs/fomogen/trust-badges",
    "/docs/fomogen/countdown-timers",
    "/docs/fomogen/exit-intent",
    "/docs/fomogen/progress-indicators",
    "/docs/fomogen/purchase-notifications",
    "/docs/fomogen/quick-start",
    "/docs/fomogen/social-proof-badges",
    "/docs/fomogen/sticky-cart",
    "/docs/fomogen/stock-alerts",
    "/docs/mindful-guard",
    "/docs/mindful-guard/installation",
    "/docs/mindful-guard/strict-mode",
    "/docs/screenveil",
    "/docs/screenveil/amoled-efficiency",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic blog posts
  const posts = await getBlogPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic comparison pages
  const compareRoutes = comparisons.map((compare) => ({
    url: `${baseUrl}/compare/${compare.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...appRoutes,
    ...guideRoutes,
    ...blogRoutes,
    ...compareRoutes,
    ...legalRoutes,
    ...documentationRoutes,
  ];
}
