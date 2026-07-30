# MindfulGuard → applass.com Marketing Plan

_Last updated: 2026-07-23_

Goal: use **applass.com** as an organic install engine for **Mindful Guard: Block App/Reels**
(`com.anonymous.mindfulguard`). Current baseline: 5.0★ · 8 reviews · 500+ installs · Productivity ·
free + premium · "No data collected" verified Play badge.

---

## 1. Positioning north star

**Own "short-form video blocking," not "app blocking."**

Lead every asset with the one job the app does better than its competitive set: killing the infinite
Reels / Shorts / TikTok feed on Android. "App blocker" / "focus app" become supporting proof, never
the lead. Rationale: it's the app's #1 store feature, it's what reviewers spontaneously praise, and the
keywords are far less contested than "app blocker."

**Messaging hierarchy (use everywhere):**
1. **Hook:** Block Reels, Shorts & TikTok's feed — daily & per-session limits that don't budge.
2. **Proof:** Native Android blocking (survives restart), no overrides, no "just 5 more minutes."
3. **Trust:** 100% offline, zero data collected (verified Play badge), <1% battery, free to start.

---

## 2. Content calendar — the Reels/Shorts cluster

Existing focus posts cover generic app-blocker intent. This cluster fills the untapped
short-form-video intent and interlinks with them.

**New posts (priority order):**

| # | Working title | Primary keyword | Type | Interlinks to |
|---|---|---|---|---|
| P1 | How to Block Instagram Reels & YouTube Shorts on Android (2026) | block reels / shorts android | Pillar | best-app-to-block-social-media, work-hours |
| S1 | How to Block YouTube Shorts on Android (without blocking YouTube) | block youtube shorts android | Spoke | youtube-background-play, youtube-screen-off-battery |
| S2 | How to Turn Off / Block Instagram Reels on Android | block instagram reels | Spoke | P1, best-app-to-block-social-media |
| S3 | How to Block TikTok's For You Feed (keep DMs, kill the scroll) | block tiktok feed android | Spoke | P1 |
| S4 | Set a Daily Reels Limit: The Session-Limit Method | limit reels per day android | Spoke | monk-mode-willpower, the-logic-of-focus |
| S5 | Dopamine Detox for Your Phone: A 7-Day Short-Form Reset | dopamine detox phone | Spoke (top-funnel) | reclaim-focus-story, monk-mode-willpower |

**Comparison / alternatives pages (high commercial intent):**

| # | Title | Notes |
|---|---|---|
| C1 | Optimize existing `opal-alternatives-android` | Add Reel-Guard angle + link to P1 |
| C2 | Freedom Alternative for Android (Free, Offline) | Freedom is #1 Play "similar app"; free + offline wins |
| C3 | Best Free Reels/Shorts Blockers for Android 2026 | Self-inclusion listicle |

**Every post:** one Play CTA above the fold + one after the steps, `Article` + `FAQPage` schema
(reuse FAQ registry), a screenshot in the existing `src/assets/blogs/` style.

**Do NOT re-write (already live — interlink instead):** generic "block social media android,"
"digital wellbeing vs focus apps," "block during work hours," "monk mode," "zero telemetry."

---

## 3. On-site conversion (landing page)

Rewrite `src/constants/mindful-guard-data.ts` + `src/page-templates/AppsMindfulGuardPage.astro`:
- Hero H1 leads with Reel Guard (keep "free" + "Android" for SEO).
- Add/repurpose a Reel Guard feature block: all 5 platforms (Instagram, TikTok, YouTube, Facebook,
  Snapchat) + daily/session-limit mechanic.
- Demote privacy/battery/unbreakable to supporting differentiators.
- Surface the "No data collected" verified badge near the CTA.
- Add 2–3 real Play review quotes as social proof.

---

## 4. Off-site amplification (free, fast)

- **Reddit:** r/nosurf, r/digitalminimalism, r/getdisciplined, r/DecidingToBeBetter, r/StopGaming.
  Answer existing "how do I stop watching Reels/Shorts" threads, link the pillar post (not the raw
  Play URL). ~3 helpful comments/week.
- **Product-led loop:** app block screen / share points back to the site.
- **Directories:** AlternativeTo, Product Hunt (proper launch once reviews grow), digital-wellbeing
  roundups — each a backlink + referral.

---

## 5. ASO + review flywheel

At 500 installs / 8 reviews, social proof caps every channel.
- In-app review prompt after a completed focus session.
- Invite reviews via Play "What's New" + reviewer replies.
- Target: 50+ reviews at 4.8★+ within 90 days.

---

## 6. Measurement

- Tag every Play CTA with an Install Referrer:
  `?referrer=utm_source%3Dapplass%26utm_campaign%3D<page>`.
- Track new Reels/Shorts queries in Search Console.
- North-star: weekly organic installs attributed to the site.

---

## 7. 90-day sequence

| Weeks | Focus |
|---|---|
| 1 | Reposition landing page · publish Pillar P1 · start Reddit |
| 2–4 | Spokes S1–S3 (one/week) · add UTM referrers · in-app review prompt |
| 5–8 | S4–S5 · comparison pages C2–C3 · optimize C1 · Reddit continues |
| 9–12 | Product Hunt / AlternativeTo · double down on top-ranking post · refresh internal links |

**Release cadence:** stagger, do not publish all at once. Landing page + pillar first, then one spoke
per week for steady crawl freshness and to double down on early winners.

---

## Execution log

- [x] §3 Landing page reposition (hero + meta + schema + Reel Guard differentiator) — 2026-07-23
- [x] §2 P1 pillar post: `how-to-block-reels-and-shorts-on-android-2026.mdx` (BlogPosting + FAQPage schema, 3 CTAs) — 2026-07-23
- [x] §2 S1 spoke: `how-to-block-youtube-shorts-android.mdx` (BlogPosting + FAQPage schema, 3 CTAs, interlinks to P1 + youtube-background-play + youtube-screen-off-battery), thumbnail hand-built as SVG→PNG via sharp — 2026-07-30
- [x] §2 S2 spoke: `how-to-block-instagram-reels-android.mdx` (BlogPosting + FAQPage schema, 3 CTAs, interlinks to P1 + best-app-to-block-social-media), thumbnail hand-built as SVG→PNG via sharp — 2026-08-06
- [x] §2 S3 spoke: `how-to-block-tiktok-feed-android.mdx` (BlogPosting + FAQPage schema, 3 CTAs, interlinks to P1), thumbnail hand-built as SVG→PNG via sharp — 2026-08-13
- [x] §2 S4 spoke: `limit-reels-per-day-android.mdx` (BlogPosting + FAQPage schema, 3 CTAs, interlinks to monk-mode-willpower + the-logic-of-focus + P1), thumbnail hand-built as SVG→PNG via sharp — 2026-08-20
- [ ] §2 S5 spoke: Dopamine Detox 7-Day Short-Form Reset (one per week, staggered)
- [x] §2 C1 optimization: rewrote `opal-alternatives-android.mdx` — retitled to head term "Best Opal Alternatives for Android (2026)", added direct-answer TL;DR + comparison table + MindfulGuard as #1 list item, refreshed FAQs/date for AI-Overview citation — 2026-07-23
- [ ] §2 C2–C3 comparison pages (Freedom alternative, Best free Reels/Shorts blockers)
- [x] §6 UTM install-referrer params — `getPlayStoreUrl`-style helper in `src/lib/utils.ts` encodes `utm_source`/`utm_medium`/`utm_campaign` into the Play Store `referrer` param
- [ ] §5 review flywheel (in-app review prompt + Play "What's New" review invite)

### Open follow-ups
- [x] Thumbnail for P1 — hand-built vector `block-reels-shorts-android.png` (1024×1024), post now `featured: true` — 2026-07-23 (Higgsfield workspace was out of credits; swap in a photoreal render later if desired)
- [ ] French translations for the repositioned landing-page copy + FR versions of P1/S1/S2/S3/S4 (`src/content/blog/fr/`); EN falls back cleanly until then
