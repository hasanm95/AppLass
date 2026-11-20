# AI Citation Baseline — 2026-11-14

The measurement §C.7 of [the SEO plan](seo-plan-2026-11-features-and-i18n.md) asked for, taken
**before any of the Phase 1–3 branches merged**. Nothing in this file reflects the new content;
that is the point. Re-run it after merging to see what moved.

## Method, and what it does not cover

18 priority questions, drawn from the question-filtered GSC export, run through **Google Search
(US, English, signed out)** and recorded for three things: whether an AI Overview appeared, whether
applass.com was cited **inside** it, and whether applass.com appeared in the web results below.

What this does not cover, and why:

- **ChatGPT and Perplexity were not checked.** Both gate most queries behind a sign-in, and signing
  in as the user to scrape answers is not something to do unasked. Google AI Overviews are the
  largest surface anyway, and they are visible without an account.
- **Results are personalised and volatile.** One signed-out US session is a snapshot, not a
  measurement. Re-run from the same locale for the comparison to mean anything.
- **"Cited" means the domain appears as a source in the AI Overview block**, which is a weaker
  signal than being the primary source.

## Results

| # | Question | AI Overview? | AppLass cited in it | In web results | Who is cited |
| --- | --- | --- | --- | --- | --- |
| 1 | is opal free | Yes | **No** | No | Habit Doom, blok.so, Opal.so |
| 2 | does opal have a free version | Yes | **No** | No | Opal.so |
| 3 | does opal drain battery | Yes | **No** | **Yes** | Reddit r/nosurf |
| 4 | is opal available on android | Yes | **No** | Yes | Opal.so, Google Play |
| 5 | how to block social media on android | Yes | **No** | Yes | Reddit r/productivity, Eyezy, Findmykids |
| 6 | how to block social media apps on android | Yes | **No** | No | Reddit r/productivity |
| 7 | how to block social media on phone | Yes | **No** | No | YouTube, Reddit |
| 8 | **how to remove app blocker** | Yes | **YES** | Yes | **AppLass**, AppBlock, YouTube |
| 9 | how to disable app blocker on android | Yes | **No** | No | — |
| 10 | how to make an app impossible to uninstall | Yes | **No** | No | — |
| 11 | how to block websites on android | Yes | **No** | No | miniOrange, LimaxLock, ESET |
| 12 | can i block youtube shorts without blocking youtube | Yes | **No** | No | Reddit r/nosurf |
| 13 | what is zero telemetry | Yes | **No** | No | — |
| 14 | is digital wellbeing accurate | Yes | **No** | No | — |
| 15 | are app blockers safe | Yes | **No** | No | AppBlock |
| 16 | is shortstop app safe | **No AIO** | n/a | **Yes** | — |
| 17 | best app to block social media on android | **No AIO** | n/a | No | — |
| 18 | why digital detox doesn't work | **No AIO** | n/a | No | — |
| 19 | how to fix youtube background play firefox android | **No AIO** | n/a | **Yes** | — |

**Baseline: cited in 1 of 15 AI Overviews.** Present in the web results of 5 of 19.

## The one citation is the wrong one

AppLass is cited in exactly one AI Overview, and it is the first source for this answer:

> "To remove an app blocker or bypass an unremovable focus app on Android, the method depends on how
> the blocker was set up (standard uninstall, accessibility tricks, or Samsung/Google security
> features). **AppLass** — 1. Standard Uninstall (For Normal Blockers)…"

The source is `app-blocker-cannot-be-uninstalled-android`, the page with the best CTR on the site.
Google is using it as the primary reference for **how to defeat an app blocker**, and serving that
to everyone who asks — including the audience §C.5 identified, where this site already ranks
position 1.1 for *"what porn blocker apps work on android that i can't easily remove myself?"* and
position 1.0 for *"how to delete betblocker app on android"*.

This was a hypothetical when the plan was written and a judgement call when the HowTo markup was
pulled from that post. It is neither now: it is live, measured, and it is the site's only AI
citation. Worth an explicit decision about what that page should say, rather than leaving it to
accumulate.

## Three findings that change existing content

**1. The battery post contradicts the AI Overview, and the AI Overview has user reports.**
For `does opal drain battery`, Google answers **"Yes, Opal can cause notable battery drain"**, citing
Reddit r/nosurf: *"It drains battery noticeably. Whatever it's running in the background to monitor
your apps is hungry."* The new P5 post argues the opposite from the mechanism — accessibility-based
blocking is cheap. Both can be true (a cheap mechanism badly implemented still drains), but P5
currently does not acknowledge the reports at all, and Google already shows our own snippet —
*"Does Opal drain battery? Not in any way that sets it apart"* — directly beneath an AI Overview
saying yes. **P5 needs to engage with the Reddit reports rather than talk past them.**

**2. The Opal pricing picture is less murky than P3 says.** Google's AI Overview states Opal Pro as
**$19.99/month, $99.99/year, $399 lifetime**, citing Habit Doom and Opal.so — internally consistent,
and consistent with the "~$99.99/year, $399 lifetime" figure. P3's table reports a competitor blog
as saying "$19.99/year", which looks like a monthly figure misread as annual in a search summary.
**The conflicting-prices table in P3 should be re-checked against the sources directly** before it
ships; the honest-uncertainty framing may be overstated.

**3. Reddit is the dominant source in this category.** It is cited in the AI Overview for five of
the eighteen questions, more than any publisher. For `does opal drain battery`,
`can i block youtube shorts without blocking youtube` and both social-media-blocking questions, the
answer Google gives is assembled from forum posts. Competing on article quality alone does not reach
that; presence in the discussions does.

## What to re-measure

Re-run this exact list, same locale, after the branches merge and are indexed. The number that
matters is **citations in AI Overviews, currently 1 of 15** — not clicks, which half these queries
will never produce.

Secondary: whether any of the four questions with no AI Overview today (16–19) acquire one, since
those are the ones where a ranked page still earns the click.
