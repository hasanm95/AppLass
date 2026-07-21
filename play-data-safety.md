# Play Console submission: Data Safety + permissions declarations

Reference answers for the Play Console forms, grounded in what Arisely's code actually does (see [privacy-policy.md](privacy-policy.md) for the user-facing version). Google's exact form wording/location shifts over time — treat this as the source of truth for *what to say*, and adapt to whatever the current form asks.

## Data Safety form (App content → Data safety)

Arisely collects **no data** and shares **no data**. Answer the questionnaire as:

- **Does your app collect or share any of the required user data types?** No.
- Every data category (location, personal info, financial info, health, messages, photos/videos, files/docs, app activity, app info & performance, device/other IDs) → not collected, not shared.
- **Is all user data encrypted in transit?** N/A — nothing is transmitted.
- **Do you provide a way for users to request data deletion?** N/A — nothing is collected off-device; uninstalling the app or clearing app storage removes all local data.
- **Privacy policy URL**: link to wherever `docs/legal/privacy-policy.md` ends up hosted (see the note in that file / ask the user where — not yet decided as of this writing).

## Alarms & reminders permission declaration

`USE_EXACT_ALARM` / `SCHEDULE_EXACT_ALARM` require declaring the app's core use case under App content → "Alarms & reminders" (or wherever Play Console currently surfaces it).

Suggested justification text:

> Arisely is an alarm clock app. Exact alarm scheduling is core functionality — alarms must fire at the precise time the user sets, not at a batched/delayed time, or the app fails at its primary purpose.

This is a legitimate, low-risk declaration — alarm clock apps are Google's textbook example of apps that qualify for this permission.

## Full-screen intent declaration (`USE_FULL_SCREEN_INTENT`)

Targeting API 34+ requires declaring full-screen intent usage (App content → Advanced app settings, or similar).

Suggested justification text:

> Arisely uses a full-screen intent to launch the alarm-ringing screen over the lock screen when an alarm fires. This is required so the user actually sees and can dismiss the alarm — a notification alone would not wake a sleeping user or interrupt a locked screen.

## "Display over other apps" (`SYSTEM_ALERT_WINDOW`)

Not usually a separate Play Console declaration form, but if asked to justify it:

> Used only briefly, while an alarm is ringing, to force-launch the full-screen Ring activity when the device is locked and the screen is off — Android otherwise downgrades a full-screen-intent notification to a tap-to-open notification in that state, which would let an alarm go unanswered. Not used for ads, overlays, or any purpose outside active alarm ringing.

## Foreground service

The app's only foreground service comes from the `@notifee/react-native` library (`app.notifee.core.ForegroundService`, type `shortService`), used to keep the alarm notification/scheduling reliable. No custom foreground service is defined in Arisely's own code.

## Content rating questionnaire

Arisely has no user-generated content, no violence, no mature themes, no in-app purchases, no ads, and no social/communication features. Expect an "Everyone" rating. Answer "No" to all content-category questions (violence, sexual content, gambling, controlled substances, user-generated content, etc.).

## Target audience

Not directed at children. Since no data is collected, there's no COPPA/children's-data exposure either way, but the target audience selection should exclude "primarily child-directed" — this is a general-audience utility app.

## Ads

App has no ads and no ad SDKs. Answer "No" to "Does your app contain ads?"
