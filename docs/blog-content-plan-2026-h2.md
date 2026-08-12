# Blog Content Plan — H2 2026

Editorial plan for CartTime, ScreenVeil, FomoGen, and MindfulGuard. Primary target is **AI answer
citation** (AI Overviews, ChatGPT, Perplexity, Gemini), with classic SERP ranking as the secondary
goal. Written 2026-08-12, revised after auditing five unmerged content branches.

---

## 1. What is already in flight — do not rewrite these

Five MindfulGuard posts exist on branches and are not on `main`. Four are open PRs; the fifth
(`s3`) has no PR yet.

| Branch / PR | Slug | Primary keyword | Frontmatter date |
| --- | --- | --- | --- |
| `content/s3-block-tiktok-feed-android` (no PR) | `how-to-block-tiktok-feed-android` | block tiktok for you page | 2026-08-13 |
| [PR #21](https://github.com/hasanm95/AppLass/pull/21) | `limit-reels-per-day-android` | limit reels per day android | 2026-08-20 |
| [PR #22](https://github.com/hasanm95/AppLass/pull/22) | `dopamine-detox-phone-7-day-reset` | dopamine detox phone | 2026-08-27 |
| [PR #23](https://github.com/hasanm95/AppLass/pull/23) | `freedom-alternative-android` | freedom alternative android | 2026-09-03 |
| [PR #24](https://github.com/hasanm95/AppLass/pull/24) | `best-free-reels-shorts-blockers-android-2026` | best free reels blocker android | 2026-09-10 |

Together with the 12 MindfulGuard posts already on `main`, that completes the entire S1–S5 / C1–C3
cluster in [mindfulguard-marketing-plan.md](mindfulguard-marketing-plan.md). **The MindfulGuard
short-form-video cluster is finished.** Any further MindfulGuard post must sit outside it or it
will cannibalize a page that is not even live yet.

Two ideas from the previous draft of this plan are now dead and have been removed:

- ~~`how-to-block-tiktok-android`~~ — duplicate of the unmerged `s3` branch.
- ~~`android-screen-dimmer-below-minimum`~~ — killed by research, see §2.4.

---

## 2. Research findings that changed this plan

### 2.1 Dark mode saves 3–9%, not 60% — and that is an opportunity, not a problem

Purdue's study (2021, Elmore School of ECE) measured light→dark mode switching at **39–47% power
savings at 100% brightness, but only 3–9% at the 30–50% brightness most people actually use**.

The ScreenVeil hero currently claims *"Save over 60% battery on AMOLED devices"* with no
qualifier ([screenveil-data.ts:9](../src/constants/screenveil-data.ts:9)). The technical section
does qualify its 63% figure with "at max brightness"
([screenveil-data.ts:78](../src/constants/screenveil-data.ts:78)), but the hero does not.

This is worth getting right rather than papering over, because the honest version is the stronger
argument: **dark mode still lights most pixels — text, cards, images, chrome. A full opaque black
overlay lights almost none.** ScreenVeil is not dark mode, and the Purdue numbers do not cap what
it can save. Writing that distinction clearly is exactly the kind of correction AI answers love to
cite, because every competing page conflates the two.

**Action:** qualify the hero claim, and make the distinction the spine of post S1.

### 2.2 A countdown timer cannot go in Shopify checkout unless you are Plus

Checkout UI extensions on the information, shipping, and payment steps are **Shopify Plus only**.
Non-Plus merchants can only extend the Thank You and Order Status pages. There is also a hard
migration deadline of **August 26, 2026** — two weeks out — for non-Plus stores to move to checkout
extensibility.

Most competing "Shopify checkout countdown timer" articles ignore this and tell merchants to do
something their plan forbids. Being the page that states the restriction plainly is a strong
citation play, and it corrects what CartTime's own CTA copy implies — its
"checkout count-down bars" ([CartTimeCTA.astro:14](../src/components/blog/CartTimeCTA.astro:14))
realistically means cart page and cart drawer, not checkout.

### 2.3 Cart reservation timers do not actually reserve inventory

Shopify does not hold stock until checkout begins. A cart reservation timer is a UI promise unless
it is backed by draft orders or real inventory logic. Working guidance from the field: 10–30 minute
holds, 15 minutes as the common default, under 5 minutes reads as manipulative, over 60 minutes
kills the urgency effect entirely.

### 2.4 ScreenVeil is not a screen dimmer — dropping that post

The dimmer field is crowded (Night Screen, Twilight, Lux, CF.lumen) and they all do *semi-transparent,
variable* dimming for night reading. ScreenVeil is an *opaque blackout with touch blocking*.
Targeting "screen dimmer android" would pull in users looking for a brightness slider and hand them
an app that blacks the screen out entirely — bad installs, bad reviews. Dropped and replaced.

### 2.5 The most-quoted trust badge stat is a vendor claim

The "42% conversion increase from a secure checkout badge" figure circulating everywhere traces
back to a HulkApp blog post, not independent research. Other numbers in circulation (15–30%, 5–15%,
"161% more likely to convert") are similarly vendor-published. A post that separates real research
from vendor marketing becomes the citable source in a topic where nobody else has done that work.

### 2.6 Mobile has no true exit intent

There is no cursor to track. Mobile "exit intent" is a set of proxies: back-button/popstate,
fast upward scroll velocity (~>200px/s), a 20–30 second inactivity timer, and tab-switch/blur.
Scroll-depth at 60–70% is the reliable cross-device alternative. Concrete and technical — the kind
of detail that gets extracted verbatim.

### 2.7 Site-level AEO check

- **robots.txt is clean.** [robots.txt.ts](../src/pages/robots.txt.ts) serves `User-agent: *` /
  `Allow: /`, so GPTBot, PerplexityBot, ClaudeBot, and Google-Extended can all crawl and cite. No
  action needed.
- **Author attribution is the weakest E-E-A-T signal on the site.** Every post is authored by
  "AppLass Team" with no bio, no credentials, no person entity. Expert attribution is worth roughly
  +25–30% citation lift in the Princeton GEO study. A named author with a one-line bio and
  `Person` schema is the single highest-leverage change available, and it applies to all 24 live
  posts at once.
- **`carttime` is not a valid `sidebarApps` value.** `appMapping` at
  [BlogPostPage.astro:93](../src/page-templates/BlogPostPage.astro:93) knows only screenveil,
  mindful-guard, and fomogen, and the render branch below handles only those three.
  `shopify-conversion-rate-2026.mdx` already declares `carttime` and that sidebar card renders
  nothing today. Add the key plus an `AppCallout` entry.
- **No `/apps/carttime` page.** CartTime posts can only link off-site to the Shopify listing — no
  owned page to rank, no internal link target. Mirror the FomoGen setup before C-series posts land.

---

## 3. AEO standards — apply to every post below

Derived from the Princeton GEO study (KDD 2024) and current platform behavior.

**Do:**
- **Answer block first.** Every H2 opens with a self-contained 40–60 word answer that makes sense
  quoted alone, with no pronouns pointing back at earlier paragraphs.
- **Statistics with primary sources** (+37–40% citation lift). Link the original study, not a blog
  that summarizes it. Date every number.
- **Tables for anything comparative** (+33% of AI citations go to comparison content). Tables get
  extracted; prose does not.
- **Question-shaped H2s** that match how people actually phrase queries.
- **Named author + credentials** (+25–30%). See §2.7.
- **Visible "Last updated"** — the site already sets `dateModified`; make sure it renders.
- **`FAQPage` + `BlogPosting` schema** via the existing FAQ registry, 5–6 entries per post.

**Do not:**
- **Keyword stuff.** It actively *reduces* AI visibility by ~10%. The current posts run 8–11
  comma-separated terms in `keywords` — that field is ignored by Google and harmless, but do not
  let it leak into the prose.
- Bury the answer under preamble, or write comparison content as paragraphs.

**Verify before publishing:** every statistic in §2 came from search-result summaries. Confirm each
against the primary source (Baymard, Purdue, Shopify docs) before it goes in a post. Citing a
summary of research instead of the research is the exact failure mode that loses citations.

---

## 4. The posts

### CartTime — 4 posts (priority 1, zero coverage today)

**C1 · `shopify-cart-reservation-timer`** — How-To · 2026-09-17
Keyword: *shopify cart reservation timer* / *reserve items in cart shopify*
The honest version of a query with a lot of dishonest answers. Lead with the fact that Shopify does
not hold inventory until checkout, so a reservation timer is a UI promise unless backed by draft
orders — then give the duration guidance (10–30 min, 15 default, why <5 and >60 both fail).
*AEO target:* a 50-word "does a Shopify cart reservation timer actually hold stock?" answer block,
plus a duration-by-store-type table.
*Links:* → C2, `mobile-sticky-cart-guide`

**C2 · `shopify-cart-abandonment-benchmarks-2026`** — Analytics · 2026-10-01
Keyword: *cart abandonment rate 2026* / *average cart abandonment rate by device*
Benchmark posts are the site's proven format (`shopify-conversion-rate-benchmarks-2026`) and
benchmark tables are heavily cited by AI. Baymard's 70.22% overall, ~85.65% mobile, ~73.07% desktop
— **all three verified against Baymard directly before publishing.** Close with which slice of
abandonment is fixable at the cart stage.
*AEO target:* one clean table, one 40-word "what is a good cart abandonment rate" block.
*Links:* → `shopify-conversion-rate-benchmarks-2026`, C1, C3

**C3 · `shopify-checkout-countdown-timer`** — Technical · 2026-10-15
Keyword: *shopify checkout countdown timer* / *countdown timer on checkout page shopify*
The §2.2 post. Non-Plus merchants cannot put a timer in checkout — only Thank You and Order Status.
Explains what is possible per plan, why the restriction exists, and where the timer should go
instead (cart page, cart drawer, product page). Corrects the entire first page of results.
*AEO target:* a plan-vs-placement table (Basic/Shopify/Advanced/Plus × product/cart/checkout/post-purchase).
*Links:* → C1, C4, FomoGen scarcity feature

**C4 · `do-cart-timers-work`** — Psychology · 2026-11-05
Keyword: *do countdown timers increase conversions* / *fake urgency ecommerce*
The skeptic's post: what the evidence supports, what resetting timers does to repeat visitors, and
the consumer-protection exposure of fake countdowns. Wins the merchants who distrust this whole
category — the ones who churn least once converted.
*Links:* → `psychology-of-fomo-marketing`, C1

### ScreenVeil — 3 posts (priority 2, thinnest coverage per install)

**S1 · `does-dark-mode-save-battery-amoled`** — Battery Tips · 2026-09-24
Keyword: *does dark mode save battery* / *amoled dark mode battery savings*
High volume, and the §2.1 post. Lead with the real Purdue numbers (3–9% typical, 39–47% at max
brightness), then the distinction nobody else draws: dark mode still lights most pixels, a full
blackout lights none. Correcting a widely-repeated overstatement — including one of our own — is
what makes a page the cited source.
*AEO target:* a 55-word "does dark mode save battery on AMOLED?" block leading with the honest
number, plus a brightness-level × savings table.
*Links:* → `youtube-screen-off-battery-hack`, S3

**S2 · `youtube-premium-alternatives-background-play`** — Android · 2026-10-08
Keyword: *youtube premium alternative* / *background play without premium*
Commercial-investigation intent, distinct from the existing method-focused
`youtube-background-play-2026-workaround`. Premium vs ReVanced vs browser vs screen-off overlay,
with an honest "Premium is the right answer if you can pay it" line. Keep the scope split explicit
in both posts so Google does not merge them.
*AEO target:* an options table with cost, legality, and what breaks.
*Links:* → `youtube-background-play-2026-workaround`

**S3 · `turn-off-screen-while-video-plays-android`** — Android · 2026-10-29
Keyword: *turn off screen while video plays android* / *screen off video player android*
Replaces the dropped dimmer post. This is the literal product query and it is distinct from
"background play" — that is about audio surviving when you *leave* the app; this is about the panel
going dark while the app stays foregrounded. Covers ghost-tap prevention, which is ScreenVeil's
second differentiator and currently unwritten anywhere on the site.
*Links:* → S1, `youtube-screen-off-battery-hack`

### FomoGen — 2 posts (priority 3, two shipped features uncovered)

**F1 · `shopify-exit-intent-popup`** — How-To · 2026-11-12
Keyword: *shopify exit intent popup* / *exit intent popup mobile*
Shipped feature ("Basic Exit Intent") with zero coverage. The §2.6 material is the differentiator —
name the four mobile proxy signals explicitly with the ~200px/s and 20–30s thresholds. Specific
numbers get extracted; "mobile exit intent is tricky" does not.
*AEO target:* a desktop-vs-mobile trigger table.

**F2 · `shopify-trust-badges-2026`** — Strategy · 2026-11-26
Keyword: *shopify trust badges* / *do trust badges increase conversion*
Second uncovered feature, and the §2.5 angle: label which circulating stats are vendor-published
and which are independent. The defensible finding is placement-dependent — badges near the buy
button help, badge soup in the footer does not.
*Links:* → `shopify-site-speed-social-proof`

### MindfulGuard — 2 posts (priority 4, cluster is otherwise complete)

**M1 · `app-blocker-cannot-be-uninstalled-android`** — Android Apps · 2026-09-30
Keyword: *app blocker that can't be uninstalled* / *strict mode app blocker android*
Validated gap: the current SERP for this is mostly iOS App Store listings and one F-Droid thread,
despite being an Android-phrased query with high commercial intent. People search this exact phrase
after defeating their last blocker. Explain what Android actually permits — device admin,
accessibility services, uninstall friction — and state the ceiling honestly: nothing is truly
unremovable without enterprise enrollment. Sits outside the Reels/Shorts cluster, so no
cannibalization.
*AEO target:* a "what can and cannot be locked on Android" table.
*Links:* → `the-logic-of-focus`, `monk-mode-willpower`

**M2 · `appblock-alternative-android`** — Android Apps · 2026-11-19
Keyword: *appblock alternative* / *apps like appblock android*
The alternatives cluster covers Opal (live) and Freedom (PR #23), but not AppBlock — which has
roughly 10M+ Android installs and is the largest competitor by volume in this category. Same proven
format as the Opal and Freedom posts.
*Links:* → `opal-alternatives-android`, `freedom-alternative-android` (after PR #23 merges)

---

## 5. Schedule

New posts start 2026-09-17, after the five in-flight posts have published on their existing dates.
Apps are interleaved so the blog does not read as all-Shopify or all-Android for a month.

| Date | Slug | App |
| --- | --- | --- |
| 2026-09-17 | `shopify-cart-reservation-timer` | CartTime |
| 2026-09-24 | `does-dark-mode-save-battery-amoled` | ScreenVeil |
| 2026-09-30 | `app-blocker-cannot-be-uninstalled-android` | MindfulGuard |
| 2026-10-01 | `shopify-cart-abandonment-benchmarks-2026` | CartTime |
| 2026-10-08 | `youtube-premium-alternatives-background-play` | ScreenVeil |
| 2026-10-15 | `shopify-checkout-countdown-timer` | CartTime |
| 2026-10-29 | `turn-off-screen-while-video-plays-android` | ScreenVeil |
| 2026-11-05 | `do-cart-timers-work` | CartTime |
| 2026-11-12 | `shopify-exit-intent-popup` | FomoGen |
| 2026-11-19 | `appblock-alternative-android` | MindfulGuard |
| 2026-11-26 | `shopify-trust-badges-2026` | FomoGen |

BFCM note: C4, F1, and F2 land in the run-up to Black Friday, which is when Shopify merchants
actually shop for conversion apps. That timing is deliberate.

---

## 6. Cannibalization rule

CartTime and FomoGen overlap on timers and low-stock alerts. Split by funnel stage, one primary app
per post:

- **FomoGen** — product page and site-wide: social proof pops, trust badges, free-shipping bar,
  sticky cart, site speed.
- **CartTime** — cart and checkout stage: reservation timers, cart-drawer countdowns, abandonment.

Cross-link where they touch; never re-explain. `add-low-stock-alerts-shopify.md` is already
FomoGen-flavored, so C-series posts link to it rather than restating it.

---

## 7. Backlog

- **Short-form video screen time statistics** — demoted from the previous draft. The SERP is
  saturated with aggregator roundups (Kapwing, Vidpros, Yaguara), and MindfulGuard collects zero
  telemetry by design, so there is no original data to differentiate with. Revisit only as a
  narrow "Reels vs Shorts vs TikTok, minutes per day" comparison table.
- CartTime vs Vitals vs Hextom comparison — needs `/apps/carttime` to exist first.
- Best Vitals alternatives (FomoGen) — check overlap with `compare/fomogen-vs-nudgify`.
- Phone-free study setup (MindfulGuard) — seasonal, was already too late for this August.

---

## 8. Per-post checklist

- `en`, `de`, `fr` files — all 24 live posts exist in all three locales
- Full frontmatter per the strict schema in [content.config.ts](../src/content.config.ts)
- 5–6 `faqs` entries, phrased as real questions, answers self-contained at 40–60 words
- `sidebarApps` set to the primary app (blocked for CartTime until §2.7 is fixed)
- Thumbnail at `src/assets/blogs/<slug>.png`
- One in-body CTA component — `.mdx` only, `.md` cannot import components
- 2–3 internal links as listed per post
- Every statistic traced to and linked from its primary source
- `graphify update .` after the files land

---

## Sources

- [Purdue: dark mode may not save battery as much as you think](https://www.purdue.edu/newsroom/archive/releases/2021/Q3/dark-mode-may-not-save-your-phones-battery-life-as-much-as-you-think,-but-there-are-a-few-silver-linings.html)
- [Purdue ECE: shedding light on dark mode to save energy](https://engineering.purdue.edu/ECE/News/2022/shedding-light-on-dark-mode-to-save-energy)
- [Shopify checkout extensibility 2026 — non-Plus deadline](https://www.codilar.com/blog/shopify-checkout-extensibility-august-26-deadline/)
- [Checkout UI extensions vs legacy apps](https://cart-x.io/blog-posts/checkout-ui-extensions-vs-legacy-apps)
- [Cart abandonment benchmarks and causes, 2026](https://www.zipchat.ai/blog/cart-abandonment-benchmarks-and-causes)
- [Average cart abandonment rate 2026, by device](https://propelcommerce.io/blog/average-cart-abandonment-rate-2026)
- [Shopify cart expiration and reserve-in-cart guidance](https://cartly-pro.com/blogs/shopify-tips/how-to-manage-shopify-reserve-items-in-cart)
- [Mobile exit-intent popups: proxy signals and stats](https://www.pushowl.com/blog/mobile-exit-intent-popups)
- [Why exit-intent popups fail on mobile](https://www.aliapopups.com/blog/why-exit-intent-popups-fail-on-mobile-and-what-replaces-them-in-2026)
- [Shopify: 5 types of trust badges that boost conversion](https://www.shopify.com/blog/trust-badges)
- [Short-form video statistics 2026](https://www.kapwing.com/resources/short-form-video-statistics-tiktok-reels-and-shorts-by-the-numbers-in-2026/)
- [Reality — open-source Android blocker with device-admin anti-uninstall](https://gitlab.com/fdroid/rfp/-/issues/3506)
