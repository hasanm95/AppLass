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

## Three findings, and what was done about them

**1. The battery post contradicted the AI Overview and ignored its evidence — now fixed.**
For `does opal drain battery`, Google answers **"Yes, Opal can cause notable battery drain"**, citing
Reddit r/nosurf: *"It drains battery noticeably. Whatever it's running in the background to monitor
your apps is hungry."* P5 originally argued the opposite purely from the mechanism and never
mentioned the reports, while our own snippet — *"Not in any way that sets it apart"* — sat directly
beneath an AI Overview saying yes.

Rewritten in all four locales to lead with the tension rather than one side of it: the mechanism
does not require a battery cost, users report one anyway, and both can be true because
implementation differs and aggressive battery optimisers cause restart churn that gets attributed to
the app. The resolution is the thirty-second check on your own device, which was always the
strongest part of the post.

**2. The Opal pricing picture was not murky at all, and P3 was wrong twice.** Checked against
[Opal's own pricing page](https://opalapp.com/pricing) on 2026-11-14: Pro is **$19.99/month or
$99.99/year** (shown as about $8.29/month), with a lifetime option. Published plainly, easy to find.
P3's "nobody agrees on the price" framing came from stacking up secondary sources that were copying
each other, and one of its figures was a monthly price misread as annual.

Worse, P3 said the free plan includes **one** blocking rule. Opal's page says **three**, plus app
blocking, basic timers and soundscapes, and today's Opal Score, across iOS, Android and Mac. The
paid line is **Hard Mode** — "No way out. You can't turn Opal off."

Both corrected in all four locales, and the post now makes the better argument it had available:
the price is published, and most pages answering this question are wrong because they copy each
other rather than the source.

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
