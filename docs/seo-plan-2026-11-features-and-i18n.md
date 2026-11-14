# SEO Plan — Mindful Guard 2.0 Features, EN/ES/DE/FR Keywords, and PRs #52–66

Written 2026-11-14. Inputs: Google Search Console export `Performance on Search 2026-11-14`
(2026-08-11 → 2026-11-10, Web, last 3 months), the 15 open content PRs (#52–66), the 44 EN /
44 DE / 44 FR / 16 ES posts on `main`, and SERP checks in all four languages.

Supersedes nothing — it sits on top of [blog-content-plan-2026-h2.md](blog-content-plan-2026-h2.md),
which declared the short-form-video cluster finished. The new Mindful Guard features
(website blocking, Strict Mode, Pause Screen, negotiated extensions, widget/tile, Insights)
re-open the cluster with genuinely new intents, and that is what this plan spends on.

---

## 1. Where the site actually stands

| Metric | Value (3 months) |
| --- | --- |
| Clicks | 860 |
| Impressions | 108,683 |
| CTR | **0.79%** |
| Avg position | 6.9 |

Split into thirds of the window:

| Period | Clicks | Impressions | CTR | Avg pos |
| --- | --- | --- | --- | --- |
| Aug 11 – Sep 10 | 194 | 32,343 | 0.60% | 7.3 |
| Sep 11 – Oct 11 | 196 | 32,399 | 0.60% | 6.7 |
| Oct 12 – Nov 10 | **470** | 43,941 | **1.07%** | 6.6 |

CTR nearly doubled in the last 30 days at essentially flat position. Recent title/meta work is
landing. The problem is no longer ranking — **it is that the site ranks on page 1 and does not get
clicked.**

### 1.1 The one diagnosis that matters

Position 6.9 with 0.79% CTR is roughly 10× below what position 7 normally earns. Three causes,
in order of size:

1. **A single page absorbs 34% of all impressions and converts at 0.49%.**
   `/blog/youtube-background-play-2026-workaround` — 36,936 impressions, 180 clicks. Its two
   biggest queries get **zero** clicks:

   | Query | Impr | Clicks | Pos |
   | --- | --- | --- | --- |
   | how to fix youtube background play stop working firefox mobile 2026 | 4,323 | 0 | 4.9 |
   | firefox android youtube background play fix 2024 2025 | 3,753 | 0 | 8.0 |

   8,076 impressions, zero clicks, page-1 positions. The intent is *"give me the fix"*; the
   current title answers *"the fix often fails now."* Searchers skip it for anything that
   promises a working answer. This is an intent mismatch, not a ranking problem.

2. **Desktop impressions are junk traffic.** Desktop: 47,758 impressions / 0.33% CTR.
   Mobile: 59,534 / 1.15%. Nearly all desktop impressions come from the Firefox/YouTube page.
   Desktop CTR will not be fixed; it should be *excluded* when judging everything else — on
   mobile only, the site runs 1.15%, which is low but not catastrophic.

3. **The DE and FR head terms rank 7–11 and are answered by a title written for English intent.**
   See §3.

### 1.2 Language markets by demand (country data, full 108,683 impressions)

| Market | Impressions | Clicks | CTR | Posts translated |
| --- | --- | --- | --- | --- |
| French-speaking (FR, CA, BE, CH, Maghreb, West Africa) | 18,210 | 199 | 1.09% | 44 / 44 |
| German-speaking (DE, AT, CH) | 13,690 | 126 | 0.92% | 44 / 44 |
| **Spanish-speaking (ES + 19 LATAM)** | **3,601** | **23** | **0.64%** | **16 / 44** |

Spain 1,097 · Mexico 657 · Argentina 445 · Colombia 292 · Peru 250 · Chile 205, then 14 more
countries. **3,601 impressions arrive from Spanish-speaking markets while 28 of 44 posts have no
`/es/` route at all**, and the ES queries in the export total 5 impressions. Google is already
serving auto-translated results (151 impressions under "Translated results") — demand exists and
is being met by a machine translation of an English page instead of a real ES page.

> Note on method: the Queries sheet is capped at the top 1,000 rows (21,557 of 108,683
> impressions). Per-language query shares below are directional; country totals are complete.

---

## 2. Keyword research

### 2.1 English — the clusters, from real GSC rows

**Cluster A — Opal alternatives (strongest commercial intent on the site).**
~2,600 impressions across 30+ rows, all at position 5–9, ~17 clicks total.

| Query | Impr | Pos |
| --- | --- | --- |
| opal alternatives / opal alternative | 941 | 5.5–5.9 |
| is opal free / is opal app free / does opal have a free version | 437 | 9.1–9.5 |
| apps like opal (+ free / that are free / but free / similar to) | 639 | 5.6–5.8 |
| free opal alternative (+ app / to opal / alternatives to) | 486 | 5.2–6.1 |
| opal vs appblock / appblock vs opal / opal vs one sec / opal vs jomo / opal vs screenzen / opal vs brick | 87 | 6.0–59 |
| does opal drain battery / does opal app drain battery | 113 | 3.2–3.5 |
| opal android / is opal available on android / opal for android | 151 | 7.7–8.9 |
| opal moments alternatives / opal spend alternatives | 97 | 9.9–16.6 |

One article (`opal-alternatives-android`, 11,597 impr / 73 clicks) is carrying all of it. It
deserves spokes, not a rewrite (§4.3).

**Cluster B — Strict Mode / bypass resistance. This is the new feature's cluster and it already exists in GSC.**

| Query | Impr | Pos | Clicks |
| --- | --- | --- | --- |
| how to remove app blocker | 41 | 5.8 | 0 |
| prevent apps from being uninstalled android | 33 | 7.7 | 0 |
| how to disable app blocker on android | 20 | 6.4 | 0 |
| how to disable app blocker | 17 | 6.5 | 0 |
| how to make an app impossible to uninstall | 16 | 8.2 | 0 |
| prevent uninstall app android / prevent uninstall app / prevent uninstall | 34 | 5.4–9.1 | 0 |
| how to lock uninstall app in android | 9 | 6.9 | 0 |
| how to make an app unable to uninstall | 5 | 6.6 | 1 |
| **website blocker that can't be uninstalled** | **12** | **27.3** | 0 |
| app blocker deaktivieren (DE) | 19 | 5.4 | 0 |

~206 impressions, position 5–8, **zero clicks**, served by one page. Note the last two rows: the
*website* variant sits at position 27 because no page covers website blocking + uninstall
protection together. Strict Mode + BrowserGuard is exactly that page.

SERP check: this query set is owned by **AppBlock help-desk articles** ("I cannot uninstall
AppBlock", "Why can't I uninstall apps even after turning Strict Mode off") plus two competitor
blogs (HabitDoom, CursedScreen). No one has written the honest explainer. AppLass already has the
right page (`app-blocker-cannot-be-uninstalled-android`, 1.54% CTR — the best on the site);
Strict Mode gives it a product answer it currently lacks.

**Cluster C — Website blocking (new, almost entirely unclaimed by AppLass).**
Only `website blocker that can't be uninstalled` (12 impr, pos 27) and `lass browser` noise.
SERP check across EN/ES/DE/FR: every top result recommends **VPN, private DNS, a root hosts file,
or BlockSite**. Mindful Guard's BrowserGuard is accessibility-based — *no VPN, no DNS, no root,
works in every browser*. That is a differentiated angle in all four languages and the SERPs are
weak (vendor blogs, parental-control upsells, auto-translated English).

**Cluster D — "phone" not "android": the pillar gap.**
Everything AppLass ranks for says *android*. The generic head terms sit on page 2:

| Query | Impr | Pos |
| --- | --- | --- |
| how to block social media on phone | 172 | 14.2 |
| apps that block social media | 77 | 16.0 |
| apps to block social media | 64 | 18.5 |
| how to block all social media on phone | 45 | 13.8 |
| best apps to block social media | 41 | 13.3 |
| app to block social media | 41 | 17.1 |
| social media blocker app / social media blocking apps / block social media (+ apps) | 139 | 16.8–27.4 |

~579 impressions at position 13–27. No page targets the device-agnostic phrasing. One pillar
page fixes the whole set.

**Cluster E — competitor comparisons, currently 2 pages for 8 named competitors.**
`/compare` ships only `mindful-guard-vs-forest` and `fomogen-vs-nudgify`. GSC shows live demand
for: appblock (57 impr), freedom (82 across 10 rows), one sec (23), jomo (28), scroll guard /
scrollguard (9), screenzen (3), brick (5), shortstop (10), "mindful app blocker" (20 impr, pos 15.8).

### 2.2 Spanish — researched from SERPs, because GSC has nothing to show

GSC gives 2 ES queries / 5 impressions, so the terms below come from SERP analysis and must be
treated as hypotheses to validate after the first ES posts ship. Confirmed native phrasings:

| ES keyword | Maps to existing slug | Notes from SERP |
| --- | --- | --- |
| cómo bloquear aplicaciones en Android | best-app-to-block-social-media-on-android-in-2026 | Owned by androidayuda, tecnobits, FlashGet/FamiSafe parental-control upsells |
| bloquear redes sociales (Android) | same | techlockdown.com/es ranks an auto-translated page — beatable |
| aplicación para bloquear redes sociales | same | — |
| cómo desactivar los reels de Instagram | how-to-block-instagram-reels-android | Top results recommend **installing an old Instagram APK** (v152). Genuinely bad advice; easy to beat on quality and safety |
| bloquear reels de Instagram | same | Wallhabit is the only app-based result |
| quitar el carrete de Instagram | same | ES-ES uses "carrete"; include as a secondary, not the title |
| cómo bloquear páginas web en Android | **new post** | Results are VPN/DNS/root-hosts/BlockSite. "sin root, sin VPN" is open |
| bloquear sitios web en Chrome Android | **new post** | Same |
| bloquear aplicaciones por horario | how-to-block-social-media-on-android-during-work-hours | tecnobits owns it with a thin post |
| bloqueador de aplicaciones que no se puede desinstalar | app-blocker-cannot-be-uninstalled-android | No ES page exists on this at all |
| bienestar digital Android / modo sin distracciones | android-digital-wellbeing-vs-third-party-focus-apps | Native Android feature names — use these exact strings |
| desinstalar una aplicación que no se desinstala | app-blocker-cannot-be-uninstalled-android | FR equivalent already earns impressions (228) |
| bloquear TikTok en Android | how-to-block-tiktok-feed-android | — |
| bloquear YouTube Shorts | how-to-block-youtube-shorts-android | — |
| despertador para dormilones | best-alarm-apps-for-heavy-sleepers-android-2026 | Arisely cluster; already translated |

Terminology rules for ES (add to [i18n-glossary.md](i18n-glossary.md)):
`bloquear` not `blockear` · `aplicación`/`app` both acceptable, prefer `aplicación` in titles ·
`móvil` (ES) vs `celular` (LATAM) — prefer the neutral `teléfono` or `Android` in titles ·
`Bienestar digital` and `Modo sin distracciones` are Google's official ES strings ·
`sin root` and `sin VPN` are the searched forms.

### 2.3 German — ~1,100 impressions sitting at position 9–11 with 4 clicks

The single biggest non-English opportunity, and it is a *title* problem.

| Query | Impr | Pos | Clicks |
| --- | --- | --- | --- |
| instagram reels deaktivieren | 269 | 10.9 | 1 |
| instagram reels ausschalten | 72 | 10.5 | 0 |
| instagram reels deaktivieren app | 67 | 6.8 | 1 |
| instagram reels sperren | 63 | 7.5 | 0 |
| **kann man instagram reels deaktivieren** | 53 | 10.2 | 0 |
| **kann man die reel funktion deaktivieren** | 48 | 9.2 | 0 |
| **kann man reels deaktivieren** | 47 | 9.7 | 0 |
| app um reels zu sperren | 40 | 9.3 | 0 |
| **kann man bei instagram reels ausschalten** | 39 | 10.6 | 0 |
| reels blockieren | 35 | 7.9 | 0 |
| **kann man reels auf instagram deaktivieren** | 33 | 10.2 | 0 |
| reels deaktivieren / reels deaktivieren instagram | 64 | 9.3–10.5 | 2 |
| reels ausschalten / reels ausschalten instagram | 58 | 9.8–10.5 | 0 |
| + 8 more "kann man …" variants | ~90 | 10.1–10.8 | 0 |

Six of the top twelve DE queries are **`kann man …?`** — a yes/no question. The DE title already
opens with "Instagram Reels deaktivieren: Geht das?", which is right, but the page sits at 9–11,
i.e. bottom of page 1 / top of page 2, where a yes/no query gets answered by the AI Overview and
nobody scrolls. Winning needs position 3–6, which means depth and freshness on the `kann man`
phrasing, not a new page.

Second DE cluster — YouTube Hintergrundwiedergabe, ~140 impressions at position 4.8–8.4, 0 clicks:
`youtube hintergrundwiedergabe` (63) · `hintergrundwiedergabe nicht möglich` (33) ·
`youtube hintergrundwiedergabe geht nicht` (12) · `youtube hintergrundwiedergabe nicht möglich` (11) ·
`hintergrundwiedergabe` (11) · `hintergrundwiedergabe youtube` (10) ·
`youtube hintergrundwiedergabe ohne premium` (4). Same intent mismatch as EN §1.1.

New DE targets for the new features: `Webseiten blockieren Android`, `Webseiten sperren ohne Root`,
`Deinstallationsschutz`, `App-Blocker lässt sich nicht deinstallieren` (`app blocker deaktivieren`
already at 19 impr / pos 5.4), `Bildschirmzeit begrenzen Android`, `YouTube Shorts sperren`
(6 impr, pos 10.3), `TikTok sperren Android` (9 impr, pos 9.8).

### 2.4 French — best CTR of the three, two clusters half-converted

| Query | Impr | Pos | Clicks |
| --- | --- | --- | --- |
| application pour bloquer les réseaux sociaux gratuit | 154 | 9.1 | 2 |
| comment bloquer les réseaux sociaux sur un téléphone | 94 | 3.0 | 2 |
| application pour bloquer les réseaux sociaux | 70 | 7.8 | 1 |
| bloquer tiktok sur android | 54 | 9.5 | 0 |
| comment bloquer instagram sur android | 51 | 7.2 | 2 |
| application pour limiter les reseaux sociaux | 37 | 7.1 | 0 |
| application blocage reseaux sociaux | 34 | 9.0 | 0 |
| application qui bloque les reseaux sociaux | 33 | 7.4 | 0 |
| bloquer les reseaux sociaux / bloquer réseaux sociaux | 54 | 6.6–7.8 | 0 |
| application pour bloquer instagram | 24 | 8.6 | 0 |
| appli pour bloquer les reseaux sociaux | 21 | 8.8 | 0 |
| + ~10 more variants (bloqueur, appli, blocage) | ~80 | 7–10 | 0 |

~700 impressions, 7 clicks. Note the accent-free spellings (`reseaux`, `desinstaller`) carry real
volume — they belong in body copy and FAQs, not only the accented forms.

Second FR cluster — dark mode battery, **~180 impressions at position 2.5–8.2 with 0 clicks**:
`le mode sombre économise-t-il la batterie sur un écran oled?` (88 impr, **pos 2.5**, 0 clicks) ·
`est ce que le mode sombre économise la batterie` (43, 8.2) ·
`le mode sombre consomme t il moins de batterie` (35, 6.9) · same query with a space before `?` (11, 4.8).
Position 2.5 with zero clicks is an AI-Overview loss: the question is answered in the snippet.
That page needs a reason to click (the full Purdue table, a brightness calculator), not a better title.

Also live and unserved: `application impossible à désinstaller android` (12 impr, pos 9.4),
`comment désinstaller une application qui refuse de se désinstaller sur android` (228 impr, pos 8.9),
`application pour bloquer les shorts youtube` (5, pos 7.4),
`comment interdire les réseaux sociaux aux moins de 15 ans` (4 impr, pos 2.2 — parental angle).

New FR targets: `bloquer des sites web sur Android`, `bloquer un site sur Chrome Android`,
`sans root, sans VPN`, `protection contre la désinstallation`, `mode strict`.

---

## 3. PRs #52–66 — verdicts and required changes

All 15 are open, none merged, each adds one post in **en + de + fr** and **none in es**.
Content quality is high and the frontmatter discipline (keywords, faqs, breadcrumbName,
sidebarApps) is already correct. Three things are missing across the board.

**Blocking for all 15:**
1. **Add the `es` translation** — otherwise the ES gap grows by 15 more slugs on merge.
2. **Set `dateModified` to the merge date.** Every PR carries `date: 2026-10-24` /
   `dateModified: 2026-10-24` while the commits are from 2026-11-07. The sitemap `lastmod` is
   built from `dateModified` (`astro.config.mjs`), so merging as-is tells Google the content is
   three weeks stale on day one.
3. **Cross-link to the new feature posts** from §4 once those exist.

**Per-PR keyword notes** (keep the title where it already matches the query; change only where GSC
or SERP evidence says to):

| PR | Slug | Verdict | Action |
| --- | --- | --- | --- |
| #52 | `alarm-for-teenagers-who-oversleep` | Good. `breadcrumbName` matches intent. | +es. Add `comment interdire les réseaux sociaux aux moins de 15 ans` angle to the FR version (pos 2.2, live demand) — parental control is an adjacent intent this post can own in FR. |
| #53 | `listen-to-twitch-with-screen-off-android` | Good, narrow. | +es. Add `twitch audio only android` and `twitch hintergrund` / `twitch arrière-plan` to DE/FR keywords. |
| #54 | `show-time-on-black-screen-android` | Good. No thumbnail (#52/#53 have one). | +es, +thumbnail. Keywords should lead with `always on display` — it's the feature name people search. |
| #55 | `pomodoro-app-blocker-android` | Strong. | +es. **Add Strict Mode**: a pomodoro that can be bypassed is the exact complaint; one paragraph + FAQ. |
| #56 | `qr-code-alarm-clock-android` | Good. | +es. |
| #57 | `make-screen-darker-than-lowest-brightness-android` | Good. Overlaps `does-dark-mode-save-battery-amoled` (which has 180 FR impressions at pos 2.5) — link both ways to avoid cannibalization. | +es. |
| #58 | `play-video-with-screen-off-android` | Good, but **title collides with the 36,936-impression YouTube page**. | +es. Make this the *general* page and the YouTube page the *specific* one; cross-link explicitly, and drop `play youtube video with screen off android` from this post's keywords so it does not compete. |
| #59 | `how-to-limit-facebook-reels-android` | Good. | +es. **Add website blocking** — facebook.com in a browser is the obvious bypass and the post currently has no answer for it. |
| #60 | `how-to-block-snapchat-spotlight-android` | Good. | +es. Same browser-coverage paragraph. |
| #61 | `how-to-block-games-on-android` | Good; Strict Mode already noted in the commit. | +es. Add `block games on android for studying` and the DE `Spiele sperren Android` / FR `bloquer les jeux Android` forms. |
| #62 | `black-screen-app-android` | Good. | +es. |
| #63 | `alarm-volume-too-low-android` | Good. | +es. Add FR `l'alarme de mon téléphone ne sonne plus` (3 impr, pos 5.0 — live) to the FR keywords. |
| #64 | `math-alarm-clock-android` | Good. | +es. |
| #65 | `how-to-limit-youtube-time-android` | Good; browser Shorts coverage already noted. | +es. Add DE `youtube shorts sperren` (6 impr, pos 10.3) and FR `application pour bloquer les shorts youtube` (5 impr, pos 7.4) to the respective keyword strings. |
| #66 | `how-to-set-screen-time-limit-android` | Good; website blocking + Strict Mode already noted. | +es. This is the natural internal-link hub for the new website-blocking post — link it. |

**Merge order.** #66 → #59 → #60 → #65 → #55 → #61 (the six that reference the new features and
need the new pages to link to), then the rest in any order. Do not merge all 15 in one day:
45 new URLs at once dilutes crawl budget on a site that gets 860 clicks a quarter. Two or three
PRs a week.

---

## 4. New articles

Feature → intent mapping. Each row is one post, shipped in **en + es + de + fr** (4 files).

### 4.1 Tier 1 — write these first (new intent + live GSC demand + weak SERP)

**N1. `how-to-block-websites-on-android-chrome`** — *website blocking, the flagship new feature*

| | |
| --- | --- |
| EN primary | how to block websites on android |
| EN secondary | block websites on chrome android, block websites android without vpn, website blocker android no root, block a website on my phone, website blocker that can't be uninstalled (pos 27 → winnable) |
| ES | cómo bloquear páginas web en Android, bloquear sitios web en Chrome Android, bloquear páginas web sin root |
| DE | Webseiten blockieren Android, Webseiten sperren ohne Root, Seiten in Chrome sperren Android |
| FR | bloquer des sites web sur Android, bloquer un site sur Chrome Android, bloquer un site sans root |
| Angle | Every competitor answers with VPN, private DNS, a root hosts file, or BlockSite. All four have real costs: a VPN sees your traffic, DNS filtering is all-or-nothing and breaks on mobile data, hosts needs root, BlockSite charges for uninstall protection. BrowserGuard is accessibility-based: per-domain, every browser, no VPN, no root. |
| Must contain | The honest table of all five methods with trade-offs; that blocking the Facebook *app* without facebook.com is a half-block; free tier = app sites + 1 custom domain, Pro = unlimited. |
| Links to | #66, #59, #60, `best-app-to-block-social-media-on-android-in-2026`, N2 |

**N2. `strict-mode-app-blocker-android`** — *Strict Mode*

| | |
| --- | --- |
| EN primary | app blocker that can't be disabled |
| EN secondary | how to disable app blocker (41+37 impr, pos 5.8–6.5, 0 clicks), prevent apps from being uninstalled android (33, pos 7.7), app blocker strict mode, how to make an app impossible to uninstall (16, pos 8.2), unbreakable app blocker android |
| ES | bloqueador de aplicaciones que no se puede desinstalar, modo estricto bloqueador de aplicaciones |
| DE | App-Blocker lässt sich nicht deinstallieren, Deinstallationsschutz App, strikter Modus, `app blocker deaktivieren` (19 impr, pos 5.4) |
| FR | bloqueur d'applications impossible à désactiver, mode strict, protection contre la désinstallation |
| Angle | The SERP is AppBlock's help desk explaining why users are stuck, plus two competitor blogs claiming no blocker can be unbreakable. The honest version wins: Android *cannot* prevent uninstall since 2016; what Strict Mode actually does is send you back when you open App Info, Accessibility settings or the uninstall screen, and make leaving cost a 20-minute wait with blocking still on. Name the limits (Safe Mode, factory reset) openly. |
| Must contain | The consent gate; "Unlock early" = 20-minute wait, no override button; free = 1 strict session, Pro after; why a timed wait beats a hard wall as a commitment device. |
| Risk | Must not read as "defeat your employer's/parent's blocker". Frame throughout as *you* committing against *your own* future impulse. |
| Links to | `app-blocker-cannot-be-uninstalled-android` (the existing 1.54%-CTR page — make them a pair, not duplicates), #55, #61, N1 |

**N3. `how-to-block-social-media-on-your-phone`** — *the device-agnostic pillar (Cluster D)*

| | |
| --- | --- |
| EN primary | how to block social media on phone (172 impr, pos 14.2) |
| EN secondary | apps that block social media (77, pos 16.0), apps to block social media (64, 18.5), how to block all social media on phone (45, 13.8), best apps to block social media (41, 13.3), app to block social media (41, 17.1), social media blocker app (33, 22.0) |
| ES | cómo bloquear las redes sociales en el teléfono, aplicaciones para bloquear redes sociales |
| DE | soziale Medien am Handy sperren, Apps zum Blockieren sozialer Medien |
| FR | comment bloquer les réseaux sociaux sur un téléphone (94 impr, **pos 3.0**), application qui bloque les réseaux sociaux |
| Angle | Hub page: iOS vs Android vs browser vs router, what each can and cannot do, then the Android deep-dive links. Covers apps + websites now that BrowserGuard exists, which is what "all social media" actually means. |
| Note | The FR variant already ranks **3.0** with 2 clicks on 94 impressions. A dedicated FR page here is the cheapest win in the plan. |
| Links to | `best-app-to-block-social-media-on-android-in-2026` (keep that one as the Android-specific "best app" page — different intent, no cannibalization), N1, N2 |

**N4. `instagram-reels-deaktivieren` — DE-led, then EN/ES/FR** — *the 1,100-impression German cluster*

Not a new post in EN. This is a **DE-first expansion** of `how-to-block-instagram-reels-android`
(see §5.2). Listed here because the DE version needs enough new material — Zero Reels,
the Pause Screen, the live counter bubble, website coverage for instagram.com/reels — to justify
a `dateModified` bump and a position 9.7 → 4 move. Decide at execution time between a deep
rewrite and a second DE-only post; a rewrite is safer (no cannibalization on a cluster that
already ranks).

### 4.2 Tier 2 — new features with no existing GSC demand (build the demand)

| # | Slug | EN primary keyword | Feature | Notes |
| --- | --- | --- | --- | --- |
| N5 | `zero-reels-instagram-without-reels` | use instagram without reels | Zero Reels | DE has `instagram ohne reels app` (1 impr, pos 20) and `instagram shorts deaktivieren` (6, pos 10.8). "Keep Instagram, lose the Reels" is a shareable framing, not just a searchable one. |
| N6 | `app-blocker-pause-screen-breathing` | app blocker pause screen | Pause Screen + note to self | Low search volume; high conversion value. Target `one sec alternative android` (one sec's whole product is this pause) and `opal vs one sec` (18 impr, pos 9.3). |
| N7 | `reel-limit-extensions-friction` | reel limit extension | Negotiated extensions | Thought-leadership/shareable: why a hard wall fails and escalating friction (10s → 30s → 5s hold) works. Cite the behavioural logic. Pairs with `the-logic-of-focus`. |
| N8 | `focus-widget-quick-settings-tile-android` | focus timer widget android | Widget + QS tile + live notification | Implementation-stage content; thin on volume but strong for app-store-adjacent and AI-assistant queries ("how do I start a focus session from my home screen"). |
| N9 | `app-blocker-insights-blocked-opens` | app blocker statistics android | Insights cards | Targets `is digital wellbeing accurate` (22 impr, pos 7.7) — a live query the Insights data answers directly. |

Ship N5–N9 in EN + ES only at first (ES because the locale needs volume; DE/FR already have 44
posts and the marginal post matters less there). Backfill DE/FR once EN performance is known.

### 4.3 Tier 3 — Opal cluster spokes (highest commercial intent on the site)

~2,600 impressions currently funnelled into one page. Four spokes, each answering one question
the parent page only touches:

| # | Slug | Target queries | Impr |
| --- | --- | --- | --- |
| N10 | `is-opal-free` | is opal free, is opal app free, does opal have a free version, opal free version, free version of opal, opal free | 437 |
| N11 | `does-opal-drain-battery` | does opal drain battery, does opal app drain battery | 113 |
| N12 | `opal-vs-appblock-vs-mindful-guard` | opal vs appblock, appblock vs opal, appblock free alternative, appblock alternative | 57 |
| N13 | `opal-on-android-what-works` | opal android, is opal available on android, opal for android, opal phone integration, opal moments alternatives, opal spend alternatives | 248 |

Keep `opal-alternatives-android` as the hub; each spoke links up, the hub links down. All four in
EN + DE + FR + ES — the Opal cluster has DE (`opal kostenlos`, `opal akku`) and FR
(`opal gratuit` 9 impr / 1 click, `est ce que l'application opal sest telechargee toute seule`
11 impr) demand already.

### 4.4 Tier 3b — `/compare` pages (not blog posts)

`src/lib/compare.ts` has 4 entries. Add, in GSC-demand order:
`mindful-guard-vs-opal` · `mindful-guard-vs-appblock` · `mindful-guard-vs-freedom`
(82 impr across `freedom android` pos 11.8, `freedom for android`, `freedom app alternative`,
`freedom no root` — and `freedom-alternative-android` already exists as a post, so the compare page
must be a spec table, not a second article) · `mindful-guard-vs-one-sec` ·
`mindful-guard-vs-jomo` (`jomo alternative` 18 impr, pos 19.5) · `mindful-guard-vs-scrollguard`
(`scroll guard free alternative` pos 3.25 with a click, `is scroll guard free` 3 impr).
These are cheap (data-driven template, 4 locales free) and sit at decision stage.

---

## 5. Updates to existing articles

### 5.1 The CTR program — do this before writing anything new

Ranked by impressions × CTR gap. These are title/description/intro rewrites plus a `dateModified`
bump; no restructuring.

| # | Page | Impr | CTR | Fix |
| --- | --- | --- | --- | --- |
| U1 | `youtube-background-play-2026-workaround` (en/de/fr) | 36,936 | 0.49% | **Lead with what works, not what broke.** The title currently signals "the fix fails". Searchers typing *"how to fix … firefox mobile 2026"* want a fix. Restructure: working methods first (Premium Lite, app-specific background audio, a black-screen overlay via ScreenVeil), then the Firefox post-mortem. Title should promise the 2026 answer. Expect the biggest single CTR gain on the site. |
| U2 | `de/how-to-block-instagram-reels-android` | 6,110 | 0.54% | See §5.2. |
| U3 | `opal-alternatives-android` (en/de/fr) | 11,597 + 528 | 0.63% | Add a comparison table above the fold and an explicit "Is Opal free?" answer box; link the four new spokes. Add Strict Mode and website blocking to the Mindful Guard row — both are new reasons to choose it over Opal. |
| U4 | `best-app-to-block-social-media-on-android-in-2026` (en) | 6,673 | 0.67% | FR version does 1.65% on 4,680 impressions with a near-identical title — so the EN SERP is simply harder. Add the website-blocking column to the 8-app table (Mindful Guard is now the only one of the eight covering apps + browsers without a VPN) and the Strict Mode row. Re-test the title against `best app to block social media` (pos 10.6). |
| U5 | `fr/does-dark-mode-save-battery-amoled` | 1,214 | 0.74% | Position **2.5** with 0 clicks on the main query = AI Overview takes the answer. Add something the snippet cannot: the full Purdue brightness-by-brightness table, and a short "what to do instead" section. Same treatment for en (668 impr, 1.05%) and de (500, 1.00%). |
| U6 | `app-blocker-cannot-be-uninstalled-android` (en/de/fr) | 7,338 + 1,476 + 775 | 1.54% / 1.36% / 0.90% | Best CTR on the site — do not touch the title. Add the Strict Mode section and link N2. The DE version underperforms the EN by a third; check the DE title against `app blocker deaktivieren` (pos 5.4). |
| U7 | `best-free-reels-shorts-blockers-android-2026` (en) | 2,707 | 2.33% | Healthy. Add Zero Reels + browser coverage + the live counter bubble to the Mindful Guard row; bump `dateModified`. Targets `free reels blocker app` (67 impr), `free reels blocker` (30), `reels blocker app free` (67). |
| U8 | `how-to-block-social-media-on-android-during-work-hours` (en) | 950 | 0.21% | Worst CTR of any page over 500 impressions. Add Strict Mode (the work-hours use case is exactly where people cheat) and website blocking (work distraction is browser-based). Rewrite the title — 0.21% at position 9 means the snippet is not answering the query. |
| U9 | `how-to-block-reels-and-shorts-on-android-2026` (en) | 2,966 | 0.40% | Overlaps U7 and `how-to-block-instagram-reels-android` (2,567 impr, 0.31%). **Three pages compete for the reels/shorts head terms.** Pick one canonical target per page: this one = multi-platform how-to, U7 = app comparison, instagram-reels = Instagram-specific. Re-point keywords accordingly; this is likely why all three sit at 0.3–0.4%. |
| U10 | `de/how-to-block-youtube-shorts-android` | 544 | 0.00% | Zero clicks on 544 impressions at position 9.0. Target `youtube shorts sperren` (6 impr, pos 10.3) and `youtube shorts blockieren` (6, pos 12.0) in the title; add browser Shorts coverage. |

### 5.2 Feature insertions — which article gets which feature

One edit pass per article, 4 locales each, `dateModified` bumped on every file touched.

| Feature | Articles that need it |
| --- | --- |
| **Website blocking (BrowserGuard)** | `best-app-to-block-social-media-on-android-in-2026`, `how-to-block-social-media-on-android-during-work-hours`, `how-to-block-instagram-reels-android`, `how-to-block-tiktok-feed-android`, `how-to-block-youtube-shorts-android`, `how-to-block-reels-and-shorts-on-android-2026`, `opal-alternatives-android`, `freedom-alternative-android`, `android-digital-wellbeing-vs-third-party-focus-apps`, `best-app-blocker-for-studying-android`, `zero-telemetry-blocker` (no VPN = no traffic interception — a privacy selling point), PRs #59, #60, #65, #66 |
| **Strict Mode** | `app-blocker-cannot-be-uninstalled-android` (primary), `best-app-to-block-social-media-on-android-in-2026`, `how-to-block-social-media-on-android-during-work-hours`, `best-app-blocker-for-studying-android`, `monk-mode-willpower`, `dopamine-detox-phone-7-day-reset`, `opal-alternatives-android`, `freedom-alternative-android`, `the-logic-of-focus`, PRs #55, #61, #66 |
| **Pause Screen + note to self** | `how-to-stop-doomscrolling-at-night`, `dopamine-detox-phone-7-day-reset`, `best-app-to-block-social-media-on-android-in-2026`, `reclaim-focus-story`, `monk-mode-willpower` |
| **Zero Reels** | `how-to-block-instagram-reels-android`, `limit-reels-per-day-android`, `best-free-reels-shorts-blockers-android-2026`, `how-to-block-reels-and-shorts-on-android-2026` |
| **Negotiated extensions** | `limit-reels-per-day-android`, `the-logic-of-focus`, `logic-comparison-matrix`, `how-to-stop-doomscrolling-at-night` |
| **Live counter bubble** | `limit-reels-per-day-android`, `best-free-reels-shorts-blockers-android-2026` |
| **Widget / QS tile / live notification** | `best-app-blocker-for-studying-android`, `how-to-block-social-media-on-android-during-work-hours`, `android-digital-wellbeing-vs-third-party-focus-apps` |
| **Insights cards** | `android-digital-wellbeing-vs-third-party-focus-apps` (answers `is digital wellbeing accurate`, 22 impr pos 7.7), `dopamine-detox-phone-7-day-reset`, `monk-mode-willpower` |

Also update the product surfaces, not just the blog: `src/constants/mindful-guard-data.ts`,
`src/pages/apps/mindful-guard` (529 impr / 1.89% CTR), `src/pages/docs/mindful-guard`, and
`src/lib/compare.ts`'s `mindful-guard-vs-forest` row.

---

## 6. The Spanish locale plan

28 of 44 posts have no `/es/` route — 16 are translated, and 9 of the 28 gaps are Shopify/FomoGen
posts, so the real content debt is **19 posts**. 3,601 impressions/quarter arrive from
Spanish-speaking markets anyway. `src/content/blog/es/_README.md` confirms the locale is blog-first and builds a
route only when the file exists, so this is purely a content backlog.

### 6.1 Priority order for the 28 missing translations

**Wave 1 — the four highest-traffic slugs, by proven EN/DE/FR performance (already partly done):**
`youtube-background-play-2026-workaround` ✓ · `app-blocker-cannot-be-uninstalled-android` ✓ ·
`opal-alternatives-android` ✓ · `best-app-to-block-social-media-on-android-in-2026` ✓
*(all four already exist in `es/` — the locale's best pages are in place. Wave 1 is instead:
verify they are indexed, and that `hreflang` and the sitemap list them.)*

**Wave 2 — missing posts with live cross-language demand (translate next, 8 posts):**

| Slug | Why |
| --- | --- |
| `does-dark-mode-save-battery-amoled` | FR does 1,214 impr on this; the ES query `¿el modo oscuro ahorra batería?` is the same universal question |
| `how-to-block-social-media-on-android-during-work-hours` | ES `bloquear aplicaciones por horario` is a weak-SERP term owned by one thin post |
| `how-to-stop-doomscrolling-at-night` | `dejar de hacer scroll` / `scroll infinito` — no good ES content exists |
| `dopamine-detox-phone-7-day-reset` | `detox digital` / `ayuno de dopamina` has strong LATAM interest |
| `how-to-lock-touch-screen-android` | `bloquear pantalla táctil Android` — ScreenVeil intent, clean term |
| `best-app-blocker-for-studying-android` | `bloqueador de aplicaciones para estudiar` — student market is large in LATAM |
| `zero-telemetry-blocker` | `zero telemetry` earns 130 impr at pos 4.1 in EN; privacy framing travels |
| `the-logic-of-focus` | The brand's argument piece; every other post links to it, so the ES cluster has no hub without it |

**Wave 3 — the 15 PRs (#52–66) as they merge.** Add `es/` in the PR itself, not afterwards.

**Wave 4 — the rest (11 ScreenVeil/Arisely/focus long-tail posts + the 9 Shopify/FomoGen posts).**
The Shopify posts (`add-low-stock-alerts-shopify`, `shopify-*`, `psychology-of-fomo-marketing`,
`best-social-proof-apps-shopify-2026`, `calculate-free-shipping-threshold`,
`mobile-sticky-cart-guide`, `free-shipping-bar-shopify`, `how-to-add-sales-popup-shopify`) are a
different product and a different audience. They are underperforming in every locale
(`recent sales notification popup` 218 impr pos 19.9, `social proof app` 53 impr pos 20.0,
`ecommerce scalability and performance` pos 74.7). **Translate them last, or not at all** — and
treat the FomoGen cluster as a separate decision, outside this plan.

### 6.2 ES-specific rules

- Do not machine-translate titles. The ES SERP phrasing differs structurally: `cómo bloquear
  aplicaciones` (gerund-free) beats a literal rendering of "how to block apps".
- Prefer neutral Spanish over ES-ES: `teléfono` over `móvil`/`celular`, `aplicación` over
  `app` in titles. 2,504 of the 3,601 ES impressions are LATAM, not Spain.
- `keywords` must be rewritten per locale, not translated — the DE/FR files already do this
  correctly (compare `opal-alternatives-android` across locales); hold ES to the same bar.
- Run `npm run validate-i18n` after each wave.

---

## 7. Sequencing

Each phase is a separate PR series so performance stays attributable.

**Phase 0 — measurement hygiene (do first, ~half a day).**
Confirm every `/es/` route is in the sitemap with `hreflang`; confirm the 4 existing ES posts are
indexed; set a GSC baseline per market so Phase 1's effect is readable. Check whether U1's
desktop impressions should be filtered out of all future reporting.

**Phase 1 — CTR program (weeks 1–2). No new URLs.**
U1 → U4 → U9 (the three-page reels cannibalization) → U3 → U8 → U10 → U5 → U2 → U6 → U7.
This phase is where the quarter's biggest number sits: the site has 108,683 impressions and keeps
0.79% of them. Moving to 2% at the same positions is +1,300 clicks/quarter without a single new
article.

**Phase 2 — merge PRs #52–66 (weeks 2–5).**
Two or three per week, in the §3 order, each with `es/` added and `dateModified` set to the merge
date.

**Phase 3 — Tier 1 new articles (weeks 3–6).**
N1 (website blocking) → N2 (Strict Mode) → N3 (phone pillar) → N4 (DE reels deep pass).
N1 and N2 are the two posts that justify the whole release; they also unlock the feature
insertions in §5.2.

**Phase 4 — feature insertions (weeks 5–8).**
§5.2, one pass per article, batched by feature so each PR is reviewable: one PR for website
blocking across 11 articles, one for Strict Mode across 10, etc.

**Phase 5 — Opal spokes + compare pages (weeks 7–10).**
N10–N13 and the six `/compare` entries. Highest commercial intent, lowest writing cost.

**Phase 6 — ES Wave 2 + Tier 2 posts (weeks 9–12).**
The 8 Wave-2 translations, then N5–N9 in EN+ES.

### What to measure

| Phase | Primary metric | Target |
| --- | --- | --- |
| 1 | Site CTR, mobile only | 1.15% → 2.0% |
| 1 | `youtube-background-play-2026-workaround` CTR | 0.49% → 1.5% |
| 2–3 | Impressions on `website blocker` / `block websites android` rows | 12 → 500+ |
| 2–3 | Clicks on the Strict Mode cluster (currently 1 click on 206 impr) | 1 → 25 |
| 1–4 | DE reels cluster avg position | 9.7 → ≤6 |
| 6 | Spanish-market impressions | 3,601 → 9,000 |
| 5 | Opal cluster clicks | ~17 → 60 |

---

## 8. Open questions

1. **Is the Firefox/YouTube page worth its 34% impression share?** It pulls in desktop traffic
   that will never convert to an Android app install. U1 should fix CTR, but if it stays near
   0.5% after the rewrite, the honest answer may be that those 36,936 impressions are the wrong
   audience and the effort belongs in the blocker cluster.
2. **FomoGen/Shopify content** — 9 posts × 4 locales, all at position 13–75, essentially zero
   clicks. Out of scope here, but it is a third of the blog and needs its own decision.
3. **Strict Mode framing.** N2 targets `how to remove app blocker` and `how to disable app
   blocker` — queries from people trying to *escape* a blocker. Serving that intent honestly
   (how to get out, and why you set it up) is the only version that both ranks and is defensible.
   Worth agreeing on the tone before drafting.

---

## Appendix A — Phase 1 execution log (2026-11-14)

Branch `seo/phase-1-ctr-rewrites`. 45 content files across en/de/fr/es, plus two code files.
No new URLs. Build passes (270 pages); every touched file carries `dateModified: 2026-11-14`,
and all 45 appear with that `lastmod` in the sitemap.

### A.1 The bug that was costing every page its snippet

`src/page-templates/BlogPostPage.astro` read `post.excerpt` for both the `<meta name="description">`
tag and the `BlogPosting` JSON-LD. The `description` frontmatter field — present and carefully
written on 96 of the 148 blog files — was **never mapped out of frontmatter** in `src/lib/blog.ts`,
so it was never read by anything. Google was building every snippet from `excerpt`, which is
written as the teaser for the blog index card, not for the SERP.

Fixed in two files: `description` is now exposed by `getBlogPostBySlug` / the collection mapper,
and `BlogPostPage` uses `post.description || post.excerpt`. This alone changes the snippet on
every blog URL on the site, and it is what makes the rewrites below take effect at all.

### A.2 Items completed

| # | Page | What changed |
| --- | --- | --- |
| U1 | `youtube-background-play-2026-workaround` (en/de/fr/es) | Restructured for "fix" intent: new title leading with the working answer, status table moved above the fold, Firefox checklist promoted to second section, the January 2026 post-mortem moved to the end, decision table and bullets reordered so working methods come first, new "how do I fix it" FAQ in each locale. |
| U9 | `how-to-block-reels-and-shorts-on-android-2026` + `how-to-block-instagram-reels-android` + `how-to-block-youtube-shorts-android` (12 files) | Cannibalization fix. The hub is re-pointed at short-form-video / multi-platform intent and no longer targets `block instagram reels android` or `block youtube shorts`; those go to the spoke pages, which each gained the live GSC phrasings. Hub body gained a "pick your platform" link block. |
| U2 | `de/how-to-block-instagram-reels-android` | Title now reads "Kann man das?", matching the literal phrasing of six of the top twelve German queries; keywords cover all eleven `kann man …` / `sperren` / `ausschalten` variants. |
| U10 | `de/how-to-block-youtube-shorts-android` | Title leads with `youtube shorts sperren` and includes `blockieren`; was 544 impressions at 0.00% CTR. |
| U4 | `best-app-to-block-social-media-on-android-in-2026` (4) | Comparison table moved above the fold with a "short on time" lead-in; **Opal added as a row** (it was the most-searched competitor on the site and was missing from the table entirely), linking to the Opal hub. |
| U3 | `opal-alternatives-android` (4) | New `## Is Opal free on Android?` section answering the 437-impression intent on-page; title shortened and numbered; description leads with the pricing answer; keywords pick up `is opal free`, `opal free version`, `opal android`. |
| U8 | `how-to-block-social-media-on-android-during-work-hours` (en/de/fr) | Had **no `description` field at all** — the worst CTR on the site (0.21%) explained. Added one in each locale, retitled with the year, keywords extended to the schedule intent. |
| U5 | `does-dark-mode-save-battery-amoled` (en/de/fr) | Retitled around **OLED**, matching the French query that sits at position 2.5 with zero clicks; description now leads with the per-brightness numbers and the "measure it yourself" hook, which an AI Overview cannot carry. |
| U6 | `app-blocker-cannot-be-uninstalled-android` (4) | Best CTR on the site, so the titles were left alone. DE keywords gained `app blocker deaktivieren` (19 impr, pos 5.4) and `android app lässt sich nicht deinstallieren`. |
| U7 | `best-free-reels-shorts-blockers-android-2026` (4) | Zero Reels, the live counter bubble and the escalating extensions added to the MindfulGuard section and to the "how to choose" table — the three things none of the other four apps do. |
| — | `android-digital-wellbeing-vs-third-party-focus-apps` (4), `zero-telemetry-blocker` (3) | Both had no `description` and both earn real impressions (570 and 433). Added. |

### A.3 Still missing a description

14 slugs (42 files) still have none and now fall back to `excerpt`: the nine Shopify/FomoGen posts plus
`logic-comparison-matrix`, `monk-mode-willpower`, `psychology-of-fomo-marketing`,
`reclaim-focus-story`, `the-logic-of-focus`, `youtube-screen-off-battery-hack`. None of them
clears 250 impressions a quarter, so they were left for the FomoGen decision in §8.

### A.4 Not done in Phase 1

Pre-existing and untouched: `npm run validate-i18n` fails on all three locale JSON files
(de/fr missing 261 UI keys, es has 41 of 1,312) and `npm run lint` reports errors only in
generated `.astro` files inside `.claude/worktrees/`. Neither is caused by this work, and
neither blocks the build.

---

## Appendix B — Phase 2 execution log (2026-11-14)

Four of the fifteen PRs prepared, in the §3 merge order. Each got one local commit on its own
PR branch: the Spanish translation plus `date` / `dateModified` set to 2026-11-14 on all four
locales. **Nothing has been pushed.** The commits sit on the local branches; pushing them updates
the open PRs on GitHub, which is a separate decision.

| PR | Branch | Commit | ES file added |
| --- | --- | --- | --- |
| [#66](https://github.com/hasanm95/AppLass/pull/66) | `content/screen-time-limit` | `5e9cca1` | `es/how-to-set-screen-time-limit-android.mdx` |
| [#59](https://github.com/hasanm95/AppLass/pull/59) | `content/facebook-reels` | `a53d4ef` | `es/how-to-limit-facebook-reels-android.mdx` |
| [#60](https://github.com/hasanm95/AppLass/pull/60) | `content/snapchat-spotlight` | `fa55d17` | `es/how-to-block-snapchat-spotlight-android.mdx` |
| [#65](https://github.com/hasanm95/AppLass/pull/65) | `content/limit-youtube-time` | `ec30130` | `es/how-to-limit-youtube-time-android.mdx` |

Each commit touches exactly four files — the new `es/` post and a two-line date change on
en/de/fr. Nothing else.

### B.1 Integration check

All four branches were merged onto `origin/main` in a scratch branch and built: **four clean
merges, 286 pages (up from 270), all four `/es/blog/...` routes present**. Every internal link in
the new Spanish files resolves against the `es/` posts that exist on main.

### B.2 Three things found while doing it

1. **The PR branches predate the Spanish locale.** Their `astro.config.mjs` reads
   `locales: ["en", "fr", "de"]`. The `es/` file is schema-validated when the branch builds but no
   `/es/` route is produced until the branch is merged into main, which has `es` in the list. This
   is why the integration check above matters more than a per-branch build.
2. **`es` is a blog-only locale.** `/es/apps/*`, `/es/about` and `/es/compare` do not exist — the
   build produces `dist/es/blog` and nothing else. Every Spanish post therefore links to the
   English `/apps/mindful-guard`, which is what the existing `es/` posts already do. Worth deciding
   separately: Spanish readers who want the product page are handed an English one, which is a real
   conversion leak now that the locale is being filled in.
3. **`npm run build` rewrites `src/i18n/locales/en.json`** via the `extract-i18n` prestep, and a
   `.gitignore` entry of `node_modules/` does not match a `node_modules` symlink. A `git add -A`
   after a build therefore picks up both. Use explicit paths, or `npx astro build`.

### B.3 One deviation from §3

§3 said to add `youtube shorts sperren` (de) and `application pour bloquer les shorts youtube` (fr)
to PR #65's keywords. **Not done**, deliberately: Phase 1 assigned both terms to
`how-to-block-youtube-shorts-android`, so adding them here would rebuild the cannibalization U9 just
removed. #65's de/fr keywords are already scoped to the time-limit intent
(`youtube zeit begrenzen`, `limiter le temps sur youtube`) and to YouTube's own Shorts-feed-limit
feature, which is a different query set.

### B.4 Carry-over from Phase 1

The hub nav added to `how-to-block-reels-and-shorts-on-android-2026` in Phase 1 has no Facebook
row, because `/blog/how-to-limit-facebook-reels-android` did not exist yet. **When #59 merges, add
it back** in all four locales:

- `- **Facebook** → [how to turn off Facebook Reels](/blog/how-to-limit-facebook-reels-android)`

### B.5 Second batch — #55 and #61

| PR | Branch | Commit | Beyond the translation |
| --- | --- | --- | --- |
| [#55](https://github.com/hasanm95/AppLass/pull/55) | `content/pomodoro-blocker` | `584f018` | New **Strict Mode** section and FAQ in all four locales |
| [#61](https://github.com/hasanm95/AppLass/pull/61) | `content/block-games` | `af3eab8` | Keywords per §3: `block games on android for studying` (en), `spiele sperren android` + `spiele zum lernen sperren` (de), `bloquer les jeux android` (fr) |

#55 got real content, not just a translation. The post explained how to pair a Pomodoro timer with
an app blocker but had no answer to the obvious objection — you can force-stop the blocker in about
four taps, eight minutes in. That is the failure mode readers actually have, and Strict Mode is the
product's answer to it, so the post now names it where the reader is already thinking it.

#61 already carried Strict Mode in the "make the block stick" list from its own branch commit; only
the keyword strings needed the §3 additions. The de keyword string used `blockieren` throughout
while the de **title** uses `sperren`, which is the more-searched form — both are now present.

Integration re-checked with all six branches merged onto `origin/main`: six clean merges,
**294 pages**, all six `/es/blog/...` routes present, no broken links.

### B.6 Third batch — the remaining nine

All nine prepared, one commit each. **Not yet pushed.**

| PR | Branch | Commit | Beyond the translation |
| --- | --- | --- | --- |
| [#52](https://github.com/hasanm95/AppLass/pull/52) | `content/teen-alarm` | `ae05669` | Dead link repointed (see B.7) |
| [#53](https://github.com/hasanm95/AppLass/pull/53) | `content/twitch-screen-off` | `79544f1` | `twitch audio only android` added to en |
| [#54](https://github.com/hasanm95/AppLass/pull/54) | `content/show-time-screen-off` | `464b1f0` | Keywords now lead with `always on display` in all four locales |
| [#56](https://github.com/hasanm95/AppLass/pull/56) | `content/qr-code-alarm` | `94f3f22` | Dead link repointed |
| [#57](https://github.com/hasanm95/AppLass/pull/57) | `content/screen-darker` | `41a0423` | Forward cross-link to the dark-mode post |
| [#58](https://github.com/hasanm95/AppLass/pull/58) | `content/play-video-screen-off` | `a4b9fcd` | `play youtube video with screen off android` dropped from en |
| [#62](https://github.com/hasanm95/AppLass/pull/62) | `content/black-screen-app` | `185a326` | — |
| [#63](https://github.com/hasanm95/AppLass/pull/63) | `phase2/alarm-volume-too-low` | `10a64fc` | fr gains `l'alarme de mon téléphone ne sonne plus` |
| [#64](https://github.com/hasanm95/AppLass/pull/64) | `content/math-alarm` | `4b401c5` | Two dead links repointed |

#63 is committed on `phase2/alarm-volume-too-low` because `content/alarm-volume-too-low` is checked
out in another worktree (`.claude/worktrees/epic-wiles-086918`, which is one commit behind origin
and has nothing uncommitted). It pushes to the same remote branch:
`git push origin phase2/alarm-volume-too-low:content/alarm-volume-too-low`.

### B.7 Dead links the branches were carrying

Three PRs linked to two posts that **no longer exist on main**:
`how-to-stop-sleeping-through-your-alarm-android` and `alarm-clock-with-missions-to-turn-off`, both
deleted in `d323091 "fix: alarms blogs"`. Because the PR branches are based on an older main, the
files are still in their trees, so the links resolve when the branch builds and 404 the moment the
PR is merged. Twelve link instances across #52, #56 and #64, in all three locales, now repointed at
`best-alarm-apps-for-heavy-sleepers-android-2026` and `arisely-alarm-clock-for-heavy-sleepers`, with
anchor text rewritten to match.

Worth a separate look: `/blog/how-to-stop-sleeping-through-your-alarm-android` earned 150
impressions and `/de/blog/...` 48 impressions with a click in the GSC window, so a page that was
pulling traffic was deleted. Whether that URL now 404s or redirects is not something this plan
checked.

### B.8 Final integration check

All fifteen branches merged onto `origin/main` in a scratch branch: **fifteen clean merges, 330
pages, zero broken internal blog links** across the whole merged tree. Spanish goes from **16 to 31
posts**, with 31 `/es/blog/...` routes built.

### B.9 Not done

- **#54 still has no thumbnail**, unlike #52 and #53. That needs an image asset.
- **The reverse cross-link** from `does-dark-mode-save-battery-amoled` back to #57 belongs on the
  dark-mode post, which is on the Phase 1 branch, not on any PR branch.
- **The Facebook row** in the Phase 1 hub nav (B.4) still needs restoring once #59 merges.

If merging slips past 2026-11-14, re-run the date bump before merging — the whole point of it is
that the sitemap's `lastmod` matches the day the post actually goes live.

---

## Appendix C — Phase 3: new blogs for AI answers and search (2026-11-14)

Input: a second GSC export filtered to question queries
(`+^(what|how|when|why|who|which|where|can|is|are|do|does)\s`), same window, 2026-08-11 →
2026-11-10. **Every post below gets its own branch**, named in the table.

### C.1 The number that sets the strategy

| | Question queries | Whole site |
| --- | --- | --- |
| Queries | 420 | — |
| Impressions | 6,791 | 108,683 |
| Clicks | **10** | 860 |
| CTR | **0.15%** | 0.79% |

Strip out the one outlier (`how to fix youtube background play…`, 4,323 impressions, 0 clicks,
already addressed by U1) and it is still **419 queries, 2,468 impressions, 10 clicks, 0.41%** —
about half the site average. Question queries convert far worse than the rest of the site.

That is the AI Overview signature: the question gets answered in the SERP and nobody clicks
through. It is not a reason to skip these queries. It is the reason to write for **citation**
rather than for the click — be the source the answer is built from, and take the brand impression
plus the minority of readers who do click for depth.

**82% of question impressions are "how to":**

| Lead word | Queries | Impressions |
| --- | --- | --- |
| how | 154 | 5,584 |
| is | 75 | 624 |
| does | 17 | 185 |
| what | 40 | 91 |
| when | 50 | 70 |
| can | 23 | 55 |
| why | 15 | 37 |

### C.2 Technical state — better than expected, with one real gap

| Check | State |
| --- | --- |
| AI crawlers in robots.txt | **Open.** `User-agent: *` / `Allow: /`, only `/api/` disallowed. GPTBot, PerplexityBot, ClaudeBot, Google-Extended all permitted |
| `llms.txt` | **Exists** at `public/llms.txt`, 51 lines, with an "Answer Nuggets" Q&A block |
| `BlogPosting` + `BreadcrumbList` + `Organization` | Emitted on every post |
| `FAQPage` with `Question`/`Answer` | Emitted; 40 of 44 EN posts carry `faqs` |
| `SoftwareApplication` + `Offer` | Emitted |
| **`HowTo` schema** | **Absent from every page on the site** |

The `HowTo` gap is the one worth fixing. 82% of question impressions are "how to", nearly every
post carries a numbered step list in its body, and none of it is marked up. The content collection
has no steps field, so this needs an optional `howTo` frontmatter array (name + ordered steps)
rendered as `HowTo` JSON-LD in `BlogPostPage.astro`, backfilled onto the step-list posts. Treat it
as a sibling of the `description` fix in Phase 1: one small code change that changes how every
how-to page is read.

Two caveats worth stating rather than discovering later. `llms.txt` is not consumed by any major
AI system today — keep it current because it is cheap, not because it is doing work. And the
Princeton GEO study that underpins the "cite sources, add statistics" advice was run on Perplexity;
treat the effect sizes as directional.

### C.2b What shipping the HowTo change actually found

Implemented on `feat/howto-schema`: an optional `howTo` frontmatter block
(`name?`, `totalTime?`, `steps[]`), exposed through `lib/blog.ts`, emitted by a new
`HowToSchema.astro`, and backfilled onto **28 files** — 7 slugs × 4 locales — by extracting each
locale's own numbered list from its body, so the markup and the visible steps cannot drift apart.

Two things worth recording.

**Google retired the HowTo rich result in September 2023.** This adds nothing to the SERP. It is
worth doing because the markup is what lets an answer engine lift steps as an ordered list instead
of inferring them from prose, and because 82% of the question impressions here are "how to" — but
nobody should expect a visible Google feature from it.

**The backfill picked the wrong list on one post, and it was the dangerous one.**
`app-blocker-cannot-be-uninstalled-android` has two numbered lists: a criteria checklist and a
walkthrough for removing a blocker you are stuck with — revoke accessibility, deactivate device
admin, boot into safe mode, `adb uninstall`, factory reset. The extractor took the longer one, which
would have published a machine-readable, step-by-step guide to defeating your own app blocker, and
served it to answer engines for `how to remove app blocker` — a query this site already ranks
position 5.8 for, and one reached by people blocking gambling and porn (see §C.5).

`howTo` was removed from that post in all four locales. Neither of its lists is a procedure the page
should be marked up for, and the prose stays as the author wrote it; what is declined is the
markup that would make a bypass walkthrough the page's canonical "how to". A check in the build
verification now asserts no emitted `HowTo` block contains those steps.

The general rule this implies: **a HowTo block is an editorial decision, not an extraction job.**
Any future backfill needs the same per-post check.

### C.3 The question clusters, by size

| Cluster | Impressions | Positions | Clicks | Covered today? |
| --- | --- | --- | --- | --- |
| How to block social media (android / phone / apps) | ~850 | 8.3–27.4 | 4 | Partly, Android-only |
| Is Opal free (11+ phrasings) | ~520 | 7.3–10.3 | 0 | One line in the Opal hub |
| How to remove / disable an app blocker | ~115 | 5.8–8.2 | 0 | One page, no product answer |
| Does Opal drain battery | 113 | 3.2–3.5 | 0 | One FAQ entry |
| Is Opal on Android / does it work there | 57 | 7.7–9.7 | 0 | One line |
| What is zero telemetry | 27 | 5.0 | 0 | A product post, not a definition |
| Is Digital Wellbeing accurate | 22 | 7.7 | 0 | No |
| Can I block Shorts without blocking YouTube | 14 | 5.6 | 0 | Yes — title matches exactly, still 0 clicks |
| Why digital detox doesn't work | 11 | 82.8 | 0 | No |
| Is [blocker app] safe | 10 | 4.0 | 1 | No |

### C.4 New posts — one branch each

Every post is written to the same extraction contract, because that is what gets quoted:
a 40–60 word direct answer in the first paragraph; H2s phrased as the query; a comparison table;
cited statistics with dates; an FAQ block; `howTo` frontmatter where there are steps; a visible
"last updated". English first, then es/de/fr.

**Tier A — proven demand, zero clicks**

| # | Slug | Branch | Primary question | Impr |
| --- | --- | --- | --- | --- |
| P1 | `how-to-block-websites-on-android-chrome` | `content/block-websites-android` | How do I block websites on Android? | new intent |
| P2 | `strict-mode-app-blocker-android` | `content/strict-mode-blocker` | How do I stop myself disabling my own app blocker? | ~115 |
| P3 | `is-opal-free` | `content/is-opal-free` | Is Opal free? | ~520 |
| P4 | `how-to-block-social-media-on-your-phone` | `content/block-social-media-phone` | How do I block social media on my phone? | ~850 |
| P5 | `does-opal-drain-battery` | `content/opal-battery` | Does Opal drain battery? | 113 |
| P6 | `opal-on-android-what-works` | `content/opal-on-android` | Is Opal available on Android? | 57 |

P1 and P2 are the two that make the feature release legible to search; nothing on the site targets
website blocking today, and the Strict Mode cluster sits at position 5.8–8.2 with zero clicks and
no product answer. P3–P6 are the Opal spokes: a single hub currently absorbs ~1,200 impressions of
question traffic and converts none of it, because a page titled "best alternatives" does not look
like the answer to "is Opal free".

**Tier B — clusters the question export surfaced that the earlier plan missed**

| # | Slug | Branch | Why |
| --- | --- | --- | --- |
| P7 | `are-android-app-blockers-safe` | `content/app-blocker-safety` | `is shortstop app safe` sits at position 4.0 and earned one of the ten clicks in the whole export. Every blocker asks for the Accessibility Service, every user wonders what that grants, and no vendor wants to explain it. Answering it honestly is a trust asset and a citation magnet — and it is the natural home for the zero-telemetry argument |
| P8 | `why-digital-detox-doesnt-work` | `content/why-digital-detox-fails` | Position 82.8 on a question the site should own. Contrarian, citable, and the strongest shareable candidate in the set; pairs with `the-logic-of-focus` |

**Not new posts — fold into what exists**

- `what is zero telemetry` (27 impr, pos 5.0) and `zero telemetry` (130 impr, pos 4.1): add a
  40–60 word definition block to the top of `zero-telemetry-blocker` rather than a second page.
- `is digital wellbeing accurate` (22 impr, pos 7.7): a dedicated H2 in
  `android-digital-wellbeing-vs-third-party-focus-apps`.
- `can i block youtube shorts without blocking youtube` (14 impr, pos 5.6, 0 clicks): the existing
  title already matches the query exactly, so this is an extraction problem, not a coverage one —
  it needs the direct-answer block, not a new post.

### C.5 One topic to decide on before writing

The export contains a recovery-adjacent cluster: `what porn blocker apps work on android that i
can't easily remove myself?` (7 impressions, **position 1.1**), `how to delete betblocker app on
android` and `how to remove betblocker app on android` (position 1.0), `how to uninstall stay
focused app in strict mode` (position 1.0).

These are people using blockers against compulsion, and the site already ranks first for them
largely by accident. P2 would deepen that. The asymmetry matters: writing *"how to set up a block
you cannot talk yourself out of"* helps them, while writing *"how to remove your gambling
blocker"* is a how-to for relapse. P2 must serve the first and must not serve the second — it can
explain honestly that Safe Mode and a factory reset exist without turning that into a walkthrough,
and it should point to real support (GamCare, Gamblers Anonymous) where the context is gambling.
Worth agreeing before drafting, not after.

### C.6 Order

1. **The `HowTo` schema change** (§C.2) — one code change, benefits every post that follows.
2. **P1, P2** — the feature posts, and the ones the §5.2 insertions link into.
3. **P4** — the pillar; it is the largest single cluster.
4. **P3, P5, P6** — the Opal spokes; cheapest writing, highest commercial intent.
5. **P7, P8** — trust and thought leadership.
6. The three fold-ins from §C.4.

### C.7 How to tell whether it worked

Clicks are the wrong primary metric here; half these queries will never produce one. Track instead:

| Signal | Baseline | Target |
| --- | --- | --- |
| Question-query impressions | 6,791 | 15,000 |
| Question-query CTR, excluding the YouTube outlier | 0.41% | 1.0% |
| Clicks on the Opal question cluster | 0 | 30 |
| Strict Mode cluster average position | 5.8–8.2 | ≤3 |
| Cited in an AI answer for the 20 priority questions | unmeasured | measure monthly by hand, ChatGPT / Perplexity / Google AI Overview |

The last row has no baseline because nobody has checked. Run it once by hand before P1 ships, so
there is something to compare against.
