export interface Env {
  ASSETS: Fetcher;
}

const DEFAULT_LOCALE = "en";

// Locales that actually have a build. Only these are redirect targets.
// Add a locale here ONLY once its pages exist, otherwise geo-routed visitors
// get a 404 — the map below is allowed to stay ahead of this list.
const LOCALES = ["en", "fr", "de"] as const;

// Dominant language per country, used only as a geo default for first-time visitors.
// Entries whose locale is not in LOCALES are inert: they fall through to the default
// locale until that locale ships. Multilingual countries (Canada, Switzerland,
// Belgium's Flemish half, Ukraine, etc.) are deliberately left unmapped rather than
// guessed at.
const COUNTRY_TO_LOCALE: Record<string, string> = {
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", SN: "fr", CI: "fr", ML: "fr", BF: "fr",
  NE: "fr", TG: "fr", BJ: "fr", GA: "fr", CG: "fr", CD: "fr", CM: "fr", TD: "fr",
  MG: "fr", RW: "fr", BI: "fr", HT: "fr",

  DE: "de", AT: "de", LI: "de",
};

// Locales that were built once and then removed. Google still holds their URLs
// (they show up in Search Console), so 301 them to the English page instead of
// letting them 404 and throw away whatever signals they earned.
const RETIRED_LOCALES = ["zh", "es", "ar", "id", "pt", "ja", "ru", "bn"] as const;
const RETIRED_LOCALE_RE = new RegExp(`^/(?:${RETIRED_LOCALES.join("|")})(?=/|$)`);

// Pages that were removed. 301 them, keeping any locale prefix, so indexed URLs
// and old links land somewhere relevant instead of 404ing.
const RETIRED_PAGES: [RegExp, string][] = [
  // Mindful Guard has no Strict Mode; the guide described a feature that does not exist.
  [/^(\/(?:de|fr))?\/docs\/mindful-guard\/strict-mode\/?$/, "$1/docs/mindful-guard"],
];

// AI assistants fetching a page for a user (ChatGPT-User, Perplexity-User, …) do
// not say "bot", but must get the URL they asked for, not a geo redirect.
const BOT_UA_RE =
  /bot|crawl|spider|slurp|facebookexternalhit|applebot|ahrefsbot|semrushbot|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|claude-user|chatgpt-user|perplexity-user|mistralai-user|google-extended|ccbot|perplexitybot|yandexbot|sogou|exabot/i;

const ASSET_EXT_RE =
  /\.(?:js|mjs|css|png|jpe?g|gif|svg|webp|avif|ico|json|xml|txt|woff2?|ttf|map|webmanifest|pdf)$/i;

function hasLocalePrefix(pathname: string): boolean {
  return LOCALES.some(
    (l) => l !== DEFAULT_LOCALE && (pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  );
}

function getCookie(request: Request, name: string): string | undefined {
  const cookie = request.headers.get("Cookie");
  if (!cookie) return undefined;
  const match = cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const userAgent = request.headers.get("User-Agent") || "";

    if (RETIRED_LOCALE_RE.test(url.pathname)) {
      const target = new URL(url);
      target.pathname = url.pathname.replace(RETIRED_LOCALE_RE, "") || "/";
      return Response.redirect(target.toString(), 301);
    }

    for (const [pattern, replacement] of RETIRED_PAGES) {
      if (pattern.test(url.pathname)) {
        const target = new URL(url);
        target.pathname = url.pathname.replace(pattern, replacement);
        return Response.redirect(target.toString(), 301);
      }
    }

    const skipRedirect =
      ASSET_EXT_RE.test(url.pathname) ||
      hasLocalePrefix(url.pathname) ||
      getCookie(request, "pref_lang") !== undefined ||
      BOT_UA_RE.test(userAgent);

    if (skipRedirect) {
      return env.ASSETS.fetch(request);
    }

    // `cf` is Cloudflare's request metadata, not part of the standard Request type.
    const country = (request as Request & { cf?: { country?: string } }).cf?.country;
    const mapped = country ? COUNTRY_TO_LOCALE[country] : undefined;

    // Never redirect to a locale that has not shipped — that is a guaranteed 404.
    const isBuilt = mapped !== undefined && (LOCALES as readonly string[]).includes(mapped);
    const locale = isBuilt ? mapped : undefined;

    if (!locale || locale === DEFAULT_LOCALE) {
      return env.ASSETS.fetch(request);
    }

    const target = new URL(url);
    let targetPathname = `/${locale}${url.pathname === "/" ? "" : url.pathname}`;
    if (targetPathname !== "/" && targetPathname.endsWith("/")) {
      targetPathname = targetPathname.slice(0, -1);
    }
    target.pathname = targetPathname;

    return new Response(null, {
      status: 302,
      headers: {
        Location: target.toString(),
        "Cache-Control": "private, no-store",
      },
    });
  },
};
