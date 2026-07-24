# MindfulGuard Landing Page — Rebrand Plan

_Created: 2026-07-24 · Direction chosen: **Warm & Human** (full tone pivot)_

Sibling doc: [mindfulguard-marketing-plan.md](./mindfulguard-marketing-plan.md) (positioning source of truth).

---

## 0. Core problem

Current brand is **clinical / brutalist**: emerald `#064E3B` only, mono headings, sharp corners
(`rounded-none`), grid background, emoji icons (🎬🛡️🔒), and jargon copy ("Neural Protection", "App
Protocol Summary", "Logic Matrix", "Strategic Moat"). Reads like a DeFi engineering doc.

But the marketing plan targets **mainstream scroll-addicts** (r/nosurf, r/digitalminimalism,
dopamine-detox crowd) who are tired and just want the scroll to stop. Cold engineer voice talking to
stressed humans = conversion leak.

**Fix:** keep the credibility proof (offline, unbreakable, free, <1% battery) but wrap the hook in a
human, calm, confident voice. Hook goes human; proof stays technical.

---

## 1. Positioning (locked — from marketing plan)

- **Lead:** kill the infinite feed. Reels / Shorts / TikTok blocking = hero.
- **Support:** unbreakable · 100% offline · zero data collected · <1% battery · free.
- **Trust near CTA:** "No data collected" verified Play badge + 5.0★ · 500+ installs.

---

## 2. Voice shift (kill the jargon)

| Spot | Now | Rebrand |
|---|---|---|
| H1 | "Block Reels, Shorts & TikTok on Android — Free App Blocker" | **"Get your hours back from the endless scroll."** |
| Subhead | (SEO terms) | "Block Instagram Reels, YouTube Shorts & TikTok on Android. Set a daily limit that actually holds — 100% offline, free to start." *(keep SEO terms)* |
| Section label | "Focus and Attention Protection" | "Digital wellbeing, done right" |
| Logic title | "Why do you need an App Blocker?" | "Willpower isn't the problem. The feed is." |
| Comparison | "The Logic Matrix: MindfulGuard vs. The Industry" | "How MindfulGuard compares" |
| Footer | "Engineered by AppLass" | "Made by AppLass · Built to be private" |

Remove everywhere: _Neural Protection, App Protocol Summary (TL;DR), Logic Matrix, Strategic Moat,
zero-willpower architecture, system-level interception_ phrasing.

---

## 3. Design system (from ui-ux-pro-max)

| Token | Now | Rebrand |
|---|---|---|
| Style | Brutalist / mono / sharp | Calm-confident: soft cards, generous whitespace, single accent |
| Type | Mono headings | **Space Grotesk** (head) + **Inter** (body); mono only for tiny data if any |
| Color | Emerald `#064E3B` only | Slate `#0F172A` base · green `#22C55E` accent (single CTA color, verify 7:1) · white surfaces |
| Corners | `rounded-none` | `rounded-2xl` (safe, not aggressive) |
| Icons | Emoji 🎬🛡️🔒 | **Lucide** SVG — Clapperboard / Shield / Lock / Battery / WifiOff |
| Motion | Parallax + big blurs | 150–300ms micro only; parallax gated behind `prefers-reduced-motion` |

---

## 4. Section order (rebuilt)

1. **Hero** — human H1 · green CTA · trust strip (`100% offline · zero data · free`) · 5.0★ · 500+ installs.
2. **Reel Guard** (promoted to #1) — 5 platform chips (IG / TikTok / YT / FB / Snap) + daily/session-limit visual.
3. **How it feels** — reframed logic section, empathetic not clinical.
4. **Why it holds** — offline / unbreakable / <1% battery as supporting proof (SVG row).
5. **Compare** — softened matrix, non-color-only cells.
6. **Real reviews** — 2–3 Play quotes + stars + verified "No data collected" badge.
7. **FAQ** — keep registry.
8. **Closing CTA** — green, repeat badge.

---

## 5. Files to touch

- `src/constants/mindful-guard-data.ts` — all copy + swap emoji → `iconName`.
- `src/components/apps/mindful-guard/MindfulHero.astro` — H1 logic, CTA shape/color, trust strip.
- `DifferentiatorsSection.astro` · `LogicSection.astro` · `ComparisonMatrix.astro` ·
  `MindfulSocialProof.astro` · `MindfulClosingCTA.astro` — voice + SVG + rounded.
- `AppsMindfulGuardPage.astro` — reorder (Reel Guard up), swap "App Protocol Summary" slot → trust strip.
- Layout / global type import — add Space Grotesk + Inter.

---

## 6. Accessibility fixes (current gaps)

- Emoji icons → SVG (Lucide).
- Verify green CTA text contrast (target 7:1).
- Mono micro-copy at 9–10px + `tracking-widest` = unreadable; bump body-relevant text to ≥12px.
- Visible focus rings; respect `prefers-reduced-motion` on parallax.

---

## 7. Watch-outs

- **SEO:** keep "block reels/shorts/tiktok android free" + keyword set in subhead/meta — don't lose
  ranking during humanize.
- **FR:** copy falls back to EN until translated (marketing-plan open follow-up).
- **Reviews:** pull real Play review text — do not fabricate quotes.

---

## Execution log

- [x] §2 Voice rewrite in `mindful-guard-data.ts` — hero, logic, differentiators, comparison title,
  footer, labels all reworded to warm/human — 2026-07-24
- [x] §3 Design tokens (color, rounded, SVG icons) — green accent (`#16A34A`/`#15803D`), `rounded-2xl`
  across Hero/Differentiators/Logic/Comparison/ClosingCTA, emoji fully removed (Lucide SVG only) —
  2026-07-24. **Deferred:** Space Grotesk/Inter type swap — `Layout.astro`'s `--font-sans` (IBM Plex
  Sans) is shared sitewide across Home/ScreenVeil/FomoGen, so changing it was out of scope for a
  single-page rebrand; kept as-is to avoid sitewide blast radius
- [x] §4 Section reorder + Reel Guard promotion — Differentiators (Reel Guard first card) now renders
  before Logic section on the page — 2026-07-24
- [~] §6 Accessibility pass — emoji→SVG done; micro-copy bumped off 9–10px mono in hero trust line.
  **Not yet verified:** CTA contrast ratio measurement, focus-ring visibility, `prefers-reduced-motion`
  on hero parallax — still open
- [x] Browser-preview verification — confirmed via full DOM text dump (all copy/order/structure
  correct, zero console/server errors) + direct screenshots of hero and Reel Guard cards; mid-session
  scroll-triggered screenshot capture was flaky (environment/tool issue, not app code) so the deep
  scroll wasn't fully re-screenshotted after the last fix — 2026-07-24
- [x] **Unplanned fix:** hero primary/secondary CTAs were invisible unstyled links — `Button asChild`
  wasn't merging classes onto the child `<a>` via Radix `Slot` in this Astro SSR setup (pre-existing,
  not introduced this session). Swapped to `LinkButton`, the pattern already working correctly in
  Pricing/ClosingCTA — 2026-07-24

- [x] FAQ registry (`MINDFUL_GUARD` in `faq-registry.ts`) — reworded 9 of 12 answers off clinical
  spec-sheet phrasing ("privacy-first... zero-telemetry, fully offline architecture" →
  conversational), kept all keyword phrases and facts (MIUI/OneUI/HyperOS, VPN, Strict Mode, "zero
  telemetry blocker", Opal/Forest/ScreenVeil comparisons) intact for FAQPage schema + AI-Overview
  citation — 2026-07-24. Missed in the first pass; caught on user review
- [x] Final voice sweep — FAQ section eyebrow ("Technical Clarifications" → "Questions people
  actually ask", scoped via `subtitle` prop so the shared `FAQRegistrySection` default isn't touched
  for other pages) and Closing CTA ("Built for privacy absolutists and deep work practitioners" →
  "Built for anyone tired of losing hours to the scroll") — 2026-07-24

### Still open
- [ ] CTA contrast ratio / focus-ring / reduced-motion verification (§6 remainder)
- [ ] FR translations for the repositioned copy (carried over from marketing plan)
