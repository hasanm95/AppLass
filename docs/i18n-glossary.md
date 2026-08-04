# Translation Glossary

Binding rules for translating AppLass content. Give this file to whoever (or
whatever) does the translation, and validate the result with `npm run validate-i18n`.

The previous localization attempt was reverted because machine translation without
these constraints produced errors like `General` → `Generalmajor` ("Major General",
the military rank) and `Engine Components` → `Triebwerkskomponenten` (jet-engine
parts). Every rule below exists to prevent a specific observed failure.

---

## Register

| Locale | Address form | Notes |
| --- | --- | --- |
| `fr` | **vous** | Already established across all existing French content. |
| `de` | **Sie** | Must match French formality. Never drift to **du**, including inside FAQ answers and CTA buttons. |

Consistency matters more than the choice itself. A post that opens with *Sie* and
slips into *du* halfway reads as machine output.

---

## Do not translate

Keep these exactly as written, in every language. German technical writing borrows
these terms in English; translating them is the `Triebwerkskomponenten` failure mode.

| Term | Reason |
| --- | --- |
| `AppLass` | Brand |
| `MindfulGuard` | Product — one word, no space, no hyphen |
| `Mindful Guard` | Product — spaced form used in prose |
| `ScreenVeil` | Product |
| `FOMO Gen` | Product |
| `Reel Guard` | Feature name |
| `Reels` | Platform feature (Instagram, Facebook) |
| `Shorts` | Platform feature (YouTube) |
| `Feed` | Standard in German tech writing |
| `Doomscroll` | Loanword; no idiomatic German equivalent |
| `Core Web Vitals` | Google metric, never localized |
| `Accessibility Service` | Android API name |
| `Doze Mode` | Android API name |
| `Play Store` | Platform |
| `Shopify` | Platform |
| `VPN` | Acronym |
| `WCAG` | Standard |
| `AMOLED` | Display technology |

### Competitor and third-party product names

Same rule, and easier to get wrong because several are ordinary words. French shipped
`Forest` translated to *"La forêt"*, which reads as a sentence about woodland rather
than a named competitor.

| Term | Note |
| --- | --- |
| `Forest` | Focus app — **not** *La forêt* / *Wald* |
| `Freedom` | Focus app — **not** *Liberté* / *Freiheit* |
| `Opal` | Focus app |
| `AppBlock` | Focus app |
| `Digital Wellbeing` | Android feature name |
| `MIUI`, `OneUI`, `HyperOS` | Android manufacturer skins — watch for typos (`MUI`) |

### Locale exceptions

Terms listed above that *do* have an established localization in a specific locale.
`validate-i18n` skips the do-not-translate check for these pairs only.

| Term | Locale | Established form |
| --- | --- | --- |
| `Digital Wellbeing` | `fr` | Bien-être numérique |

---

## Concept terms — translate, but consistently

These carry brand meaning. Pick the rendering below and use it everywhere; do not
vary for stylistic reasons.

| English | French (established) | German (proposed) |
| --- | --- | --- |
| Cognitive Firewall | pare-feu cognitif | kognitive Firewall |
| Intentional Friction | friction intentionnelle | bewusste Reibung |
| Zero-Telemetry | zéro télémétrie | Zero-Telemetry *(keep)* |
| Offline-first | hors ligne d'abord | Offline-First *(keep)* |
| Strict Logic Mode | Mode Logique Stricte | Strikter Logikmodus |
| Focus Session | session de concentration | Fokus-Sitzung |
| Daily limit | limite quotidienne | Tageslimit |
| Per-session limit | limite par session | Sitzungslimit |
| Short-form video | vidéo courte | Kurzvideo |
| App blocker | bloqueur d'applications | App-Blocker |
| Digital Wellbeing | Bien-être numérique | Digital Wellbeing *(keep — Android feature name)* |

German entries are proposals from the existing French choices. Change them before
bulk translation starts if you disagree — changing them afterwards means redoing
the whole run.

---

## Placeholders

Interpolation uses `{name}` syntax and **must survive translation byte-identical**.

```
EN  You're {value} away from FREE shipping!
DE  Nur noch {value} bis zum kostenlosen Versand!
```

Never translate, space, or reorder the braces. Word order around a placeholder may
change; the token itself may not. `validate-i18n` fails the build on any mismatch.

---

## Typography

| Locale | Quotes | Notes |
| --- | --- | --- |
| `en` | `"…"` | |
| `fr` | `« … »` | Non-breaking space inside the guillemets. |
| `de` | `„…"` | Opening quote sits on the baseline. |

German additionally:

- Use `ß` per current orthography (`Straße`), never `ss` — except in all-caps.
- Capitalize all nouns, including inside FAQ answers and button labels.
- Prefer hyphenated compounds where the unhyphenated form is hard to read
  (`Fokus-Sitzung`, not `Fokussitzung`).
- Decimal comma, thousands point: `0,40` and `1.000`, not `0.40` and `1,000`.

---

## Blog frontmatter

When translating a post, these fields are **not** copied verbatim:

| Field | Rule |
| --- | --- |
| `title`, `excerpt`, `description` | Translate. `excerpt` also renders as the on-page TL;DR block, so it must state the answer, not tease it. |
| `keywords` | **Re-research, do not translate.** Target terms people actually search in that language. |
| `tags` | Translate. |
| `category` | Use the locale's established value (`Applications Android` for French). |
| `author` | Localize the team name (`Équipe AppLass` for French). |
| `faqs` | Translate both question and answer. Answers must stay self-contained — they are emitted as FAQPage schema and get read in isolation. |
| `date`, `dateModified` | Copy unchanged from the source post. |
| `slug` (filename) | **Keep the English slug.** All existing locales use English filenames; a localized slug produces a URL nothing links to. |

---

## Component props

MDX posts import CTA components. Localized posts must pass `lang`:

```mdx
<MindfulGuardCTA lang="fr" campaign="post-slug-here" />
```

The English posts omit `lang`. Forgetting it renders an English CTA inside a
translated post. `campaign` stays identical to the English post's value so
attribution still groups correctly.

---

## Idioms — translate the meaning, not the words

The blog leans on figurative language. Literal renderings read badly:

| English | Intent |
| --- | --- |
| "a sledgehammer when what you need is a scalpel" | Disproportionate tool, not surgery |
| "survives contact with real life" | Works in practice, not just in theory |
| "every swipe is a fresh pull of the slot machine" | Variable-reward mechanic — keep the gambling metaphor, it is load-bearing |
| "when the limit is up, it's up" | Finality; no negotiation |
| "console.warn() when they should be an access_denied exception" | Programming metaphor — keep both code identifiers verbatim |

---

## Checklist before shipping a locale

1. `npm run extract-i18n` — refresh `en.json` so key counts match
2. `npm run validate-i18n -- <locale>` — zero errors
3. Add the locale to `src/i18n/config.ts` (`locales` **and** `localeMeta`)
4. Add the locale to `astro.config.mjs`
5. Add the locale to `LOCALES` in `worker/index.ts` — **only now**, or geo-routed
   visitors get 404s
6. `npm run build`, then confirm on a rendered page: `<html lang>` correct,
   translated `<title>`, FAQPage schema present, hreflang resolves both ways
