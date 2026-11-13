---
title: "Why Your Android Alarm Didn't Go Off: 7 Causes and Fixes (Samsung, Xiaomi, Pixel)"
description: "Android alarm silent, late, or didn't ring at all? The usual causes are exact alarm permissions, battery optimisation and manufacturer power management. Here's how to diagnose and fix each one — and how to stop sleeping through alarms that do ring."
date: "2026-10-04"
dateModified: "2026-11-13"
category: "Android Apps"
author: "AppLass Team"
keywords: "android alarm not going off, alarm didnt ring android, why didn't my alarm go off android, alarm late android, doze mode alarm, battery optimization alarm, exact alarm android, samsung alarm not working, xiaomi alarm not going off, how to stop sleeping through alarm"
excerpt: "When an Android alarm rings late or not at all, it is almost always exact alarm permissions, battery optimisation or manufacturer power management — not a broken ringtone. Here is how to diagnose each cause, fix it per manufacturer, and stop sleeping through the alarms that do ring."
tags:
  - android
  - technical
  - alarm clock
  - battery
  - arisely
sidebarApps:
  - arisely
thumbnail: "../../../assets/blogs/why-android-alarms-dont-go-off-exact-alarms.png"
faqs:
  - question: "Why didn't my Android alarm go off?"
    answer: "Most often, battery optimisation or Doze mode delayed the app that scheduled it. Alarms set as ordinary background work can be batched and deferred to save power, so they fire late or get skipped entirely. Alarms scheduled as exact alarms are exempt and fire at the precise set time even in Doze. On Samsung, Xiaomi and Huawei phones, manufacturer power management is an additional and very common cause."
  - question: "What is an exact alarm on Android?"
    answer: "An exact alarm uses Android's SCHEDULE_EXACT_ALARM or USE_EXACT_ALARM capability to fire at an exact wall-clock time rather than being batched with other background work. The system treats it as time-critical, so it goes off on time even when the device is idle, in Doze, or the app has been closed for hours. Since Android 14, this permission is denied by default for many apps."
  - question: "Does battery optimisation stop alarms from ringing?"
    answer: "It can delay or silence alarms scheduled as deferrable background work. Android documents that an inexact alarm with a time window can be delayed by at least ten minutes. The reliable fix is an app that uses exact alarms, plus setting your alarm app's battery usage to Unrestricted in Android settings."
  - question: "Why do alarms fail specifically on Xiaomi and Samsung phones?"
    answer: "One UI, MIUI and HyperOS apply their own power management on top of Android's, and routinely suspend background processes to save battery. If the system suspends your alarm app, its scheduled alarm never fires. The fix is per-manufacturer: enable Autostart on Xiaomi, and set the app to Unrestricted and exclude it from Deep Sleeping or Sleeping apps on Samsung."
  - question: "My alarm doesn't ring if I close the app from recents. Why?"
    answer: "Swiping an app away from the recents list can terminate it on some manufacturer skins, which cancels its scheduled work. On stock Android an exact alarm survives this, but aggressive skins do not always honour that. If your alarm only fails after you clear recents or restart the phone, this is the likely cause — leave the alarm app running in the background and enable Autostart."
  - question: "Can Do Not Disturb silence my alarm?"
    answer: "By default, no. Do Not Disturb silences notifications and media but allows alarms through, provided the app plays on Android's dedicated alarm audio channel. The more common volume mistake is the alarm channel volume itself being turned down, which is separate from media and ringer volume. Check it under Settings, Sound, and look specifically for the Alarm slider."
  - question: "How do I make sure my alarm always rings on time?"
    answer: "Use an alarm app built on exact alarms, grant it the Alarms and reminders permission, set its battery usage to Unrestricted, let it play on the dedicated alarm audio channel, and allow it to show full-screen over the lock screen. On Xiaomi and Samsung, also enable Autostart or exclude it from sleeping apps."
  - question: "Is it safe to grant the exact alarm permission?"
    answer: "Yes, for an alarm clock it is the intended use. Google lists alarm and calendar apps as the textbook case for SCHEDULE_EXACT_ALARM. The permission only controls timing precision; it does not grant access to your data or your files."
  - question: "Why do I keep sleeping through alarms that do ring?"
    answer: "Three things usually combine: sleep inertia, which makes you groggy enough to dismiss an alarm with no memory of it; the one-tap off button that a half-asleep hand finds by reflex; and the snooze loop, which fragments your last sleep cycle. Volume fixes none of these. A dismiss task that requires attention or movement is what breaks the reflex."
  - question: "Is the snooze button the reason I oversleep?"
    answer: "Often, yes. Snoozing drops you into fragmented, low-quality sleep and trains the reflex of dismissing alarms without waking, which is why you can feel worse after three snoozes than after getting up on the first ring. Setting a snooze limit, or removing the easy off entirely by requiring a wake-up task, breaks that loop."
  - question: "How long does an Android alarm ring before it stops?"
    answer: "On stock Android the Clock app silences an unanswered alarm after about 10 to 15 minutes and marks it as missed. The exact duration varies by manufacturer and is adjustable in some apps. This is why an alarm that fires while you are in deep sleep can stop before you surface, and why a dismiss task matters more than duration."
---

**If your Android alarm rings late or not at all, the cause is almost never a broken ringtone.** It is
one of a short list of system behaviours: the exact alarm permission, Doze and battery optimisation,
or your manufacturer's own power management. This guide works through each cause in diagnostic order,
with the per-manufacturer settings that actually fix it.

If your alarms *do* ring and you sleep through them, that is a different problem with a different fix —
covered in the second half.

## Quick diagnosis

| Symptom | Most likely cause | Jump to |
|---|---|---|
| Alarm fired 10+ minutes late | Inexact alarm batched by Doze | [Cause 1](#cause-1-the-alarm-was-not-exact) |
| Alarm never fired at all | Exact alarm permission denied | [Cause 2](#cause-2-the-exact-alarm-permission-is-denied) |
| Fails only after a reboot or clearing recents | Manufacturer power management | [Cause 3](#cause-3-manufacturer-power-management) |
| Fired but was silent or very quiet | Alarm channel volume, not media volume | [Cause 4](#cause-4-it-rang-but-you-could-not-hear-it) |
| Fired, you turned it off, no memory of it | Sleep inertia and the one-tap off | [Second half](#part-2-the-alarm-rang-and-you-slept-through-it) |

---

## Cause 1: The alarm was not exact

To save power, Android batches background work. **Doze mode** (phone still, screen off) and battery
optimisation defer apps' background tasks into occasional maintenance windows. An alarm scheduled as
ordinary background work gets caught in that batching — so it fires late, or the window never lines up
and it is effectively skipped.

Android's own documentation is explicit that an inexact alarm with a time window can be delayed by **at
least ten minutes**. That is the difference between a 7:00 alarm and a 7:12 alarm.

**The fix** is an alarm that uses **exact alarms** (`SCHEDULE_EXACT_ALARM` / `USE_EXACT_ALARM`). These
are exempt from Doze deferral and fire at the precise wall-clock time — locked screen, idle device, app
closed for hours.

| | Background-scheduled alarm | Exact alarm |
| :--- | :--- | :--- |
| **Affected by Doze / battery optimisation** | Yes — can be delayed or skipped | No — exempt |
| **Fires when app is closed** | Unreliable | Yes |
| **Fires when phone is locked/idle** | Unreliable | Yes |
| **Intended for** | Deferrable sync, cleanup | Alarms, reminders, calendar |

Google explicitly lists **alarm clocks** as the textbook use case, so a real alarm app is expected to
use it.

## Cause 2: The exact alarm permission is denied

This is the cause that has grown most since Android 14. Exact alarms now require a special access
grant, and for many apps it is **denied by default**. If that permission is revoked, the app's future
exact alarms are cancelled — silently.

**Check it:** Settings → Apps → *your alarm app* → **Alarms & reminders** → allow.

On some versions it sits under Settings → Apps → Special app access → Alarms & reminders.

## Cause 3: Manufacturer power management

Stock Android is only half the story. One UI (Samsung), MIUI/HyperOS (Xiaomi), EMUI (Huawei) and
ColorOS (Oppo/Realme) layer their own, more aggressive power management on top — and they routinely
suspend background apps. A suspended alarm app does not ring.

This is the cause behind the most common complaint pattern: *"it works, but not after I restart the
phone or clear recents."*

**Samsung (One UI)**
- Settings → Apps → *alarm app* → Battery → **Unrestricted**
- Settings → Battery → Background usage limits → make sure the app is **not** in *Sleeping apps* or
  *Deep sleeping apps*

**Xiaomi / Redmi / POCO (MIUI, HyperOS)**
- Settings → Apps → Manage apps → *alarm app* → **Autostart: on**
- Same screen → Battery saver → **No restrictions**
- Lock the app in recents (pull down on its card) so it is not cleared

**Huawei (EMUI)**
- Settings → Battery → App launch → *alarm app* → **Manage manually**, enable all three toggles

**Oppo / Realme / OnePlus**
- Settings → Battery → *alarm app* → **Allow background activity** / disable *Sleep standby optimisation*

**Pixel / stock Android**
- Settings → Apps → *alarm app* → Battery → **Unrestricted**

Third-party "RAM cleaner" and battery-saver apps cause the same failure, and are worth uninstalling if
your alarm matters.

## Cause 4: It rang, but you could not hear it

Three separate things can make an alarm effectively silent:

1. **Alarm channel volume.** Android has a dedicated **alarm** volume that is separate from media and
   ringer. It can be turned down to zero while everything else sounds normal. Check Settings → Sound →
   **Alarm** slider, or press volume up during an alarm.
2. **The app is not using the alarm channel.** An app that plays on the media channel gets muted along
   with everything else. Do Not Disturb allows alarms through *only* on the alarm channel.
3. **No full-screen intent.** Without permission to show full-screen over the lock screen, the ringing
   screen can be downgraded to a silent, tap-to-open notification.

## Cause 5: Time zone, updates and the Clock app itself

Less common, but real:

- **Automatic time zone** changing overnight after travel shifts alarms.
- **A system or app update** overnight can cancel scheduled alarms until the app next runs.
- **The Clock app itself.** There have been documented periods where Google's own Clock app failed to
  ring for some users. If every other fix is in place and only the stock app fails, try a different
  alarm app as a test.

## Cause 6: You cleared the app from recents

On several manufacturer skins, swiping an app away in the recents list terminates it and cancels its
scheduled work. Stock Android preserves exact alarms through this; aggressive skins do not always
honour it. If your alarm fails only on the mornings after you cleared recents, leave the app running
and enable Autostart.

## Cause 7: Battery saver mode

Android's own Battery Saver, and the stricter manufacturer equivalents, restrict background activity
across the board. If your phone drops into battery saver overnight at a low charge threshold, that can
be the difference between a working and a missing alarm. Charge overnight, or exempt the alarm app.

---

## Part 2: The alarm rang and you slept through it

If the alarm fires correctly and you still oversleep, nothing above helps — this is a different
problem.

| Cause | What is happening | The fix |
| :--- | :--- | :--- |
| **Sleep inertia** | In deep sleep your brain is groggy enough to dismiss an alarm with no memory of it | Require a task that needs real attention |
| **The off button** | One sleepy tap silences it before you are conscious | Remove the one-tap escape |
| **The snooze loop** | Snoozing fragments your last sleep cycle and deepens grogginess | Cap snoozes, or disable them |

**Why a louder tone does not fix this.** Dismissing an alarm is a *reflex* — locating a phone and
tapping a large button is something a sleeping brain can complete without ever reaching awareness.
Volume makes it easier to hear, not harder to dismiss.

**What does work is putting a task between you and the off switch:**

- Solve a maths problem
- Retype a code or short phrase
- Take a set number of steps
- Scan a QR/barcode you placed across the room
- Do camera-verified push-ups

Once you are doing a task, you are awake. That is the entire mechanism. Physical tasks beat cognitive
ones for heavy sleepers, because maths wakes your brain for ten seconds while walking to the kitchen
wakes your body.

**Close the last two dodges.** A determined half-asleep hand still has two tricks: turn the volume
down, or press the power button. Some alarm apps offer optional guards, active only while the alarm
rings, that snap the volume back up and block the power-off menu. (A forced hardware shutdown — holding
the button — cannot be blocked by any app, by design.)

For the full comparison of apps that do this, see
[best alarm apps for heavy sleepers](/blog/best-alarm-apps-for-heavy-sleepers-android-2026), and
[the push-up mission explained](/blog/alarm-app-that-makes-you-do-pushups-android) for the hardest
version of a dismiss task.

## A reliability checklist

Run through this once and most alarm problems disappear for good:

1. Grant **Alarms & reminders** to your alarm app
2. Set its battery usage to **Unrestricted**
3. Enable **Autostart** (Xiaomi) or exclude from **Sleeping apps** (Samsung)
4. Check the **Alarm volume slider** specifically
5. Allow **full-screen over lock screen**
6. Uninstall third-party RAM/battery cleaners
7. Keep the phone charging overnight so battery saver never engages

## An alarm built on all of this

[Arisely](/blog/arisely-alarm-clock-for-heavy-sleepers) uses exact-time alarms, plays on the alarm
audio channel with an extra-loud boost, and shows full-screen over the lock screen — so it fires on
time and loud even when the phone is locked or the app has been closed for hours. Optional guards can
snap the volume back up and block the power-off menu while it rings, and ten wake-up missions remove
the one-tap off. Free, no account, and the free version's banner ad never appears on the ring screen.

[**Download Arisely on Google Play**](https://play.google.com/store/apps/details?id=com.arisely&referrer=utm_source%3Dapplass%26utm_medium%3Dblog%26utm_campaign%3Dexact-alarms%26utm_content%3Dwhy-android-alarms-dont-go-off-exact-alarms)

---

**Related:** [Best alarm apps for heavy sleepers](/blog/best-alarm-apps-for-heavy-sleepers-android-2026) ·
[The alarm app that makes you do push-ups](/blog/alarm-app-that-makes-you-do-pushups-android) ·
[Best Alarmy alternatives](/blog/alarmy-alternatives-android)
