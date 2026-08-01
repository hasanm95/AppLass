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
  CN: "zh", TW: "zh", HK: "zh", MO: "zh",

  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es",
  GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es", SV: "es", NI: "es",
  CR: "es", PA: "es", UY: "es", GQ: "es",

  SA: "ar", AE: "ar", EG: "ar", KW: "ar", QA: "ar", BH: "ar", OM: "ar", JO: "ar",
  LB: "ar", IQ: "ar", SY: "ar", YE: "ar", LY: "ar", TN: "ar", DZ: "ar", MA: "ar",
  SD: "ar", PS: "ar", MR: "ar",

  ID: "id",

  PT: "pt", BR: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt", TL: "pt",

  FR: "fr", BE: "fr", LU: "fr", MC: "fr", SN: "fr", CI: "fr", ML: "fr", BF: "fr",
  NE: "fr", TG: "fr", BJ: "fr", GA: "fr", CG: "fr", CD: "fr", CM: "fr", TD: "fr",
  MG: "fr", RW: "fr", BI: "fr", HT: "fr",

  JP: "ja",

  RU: "ru", BY: "ru", KZ: "ru", KG: "ru", TJ: "ru",

  DE: "de", AT: "de", LI: "de",

  BD: "bn",
};

const BOT_UA_RE =
  /bot|crawl|spider|slurp|facebookexternalhit|applebot|ahrefsbot|semrushbot|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|google-extended|ccbot|perplexitybot|yandexbot|sogou|exabot/i;

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
    target.pathname = `/${locale}${url.pathname === "/" ? "" : url.pathname}`;

    return new Response(null, {
      status: 302,
      headers: {
        Location: target.toString(),
        "Cache-Control": "private, no-store",
      },
    });
  },
};
