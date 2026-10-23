---
title: "Why Your Android Alarm Doesn't Go Off (and How Exact Alarms Fix It)"
description: "Android alarm late or silent? Battery optimization and Doze delay background-scheduled alarms. Here's why it happens and how exact alarms guarantee on-time ringing."
date: "2026-10-04"
dateModified: "2026-10-04"
category: "Android Apps"
author: "AppLass Team"
keywords: "android alarm not going off, alarm late android, alarm didnt ring android, doze mode alarm, battery optimization alarm, exact alarm android, schedule exact alarm"
excerpt: "When an Android alarm rings late or not at all, it's almost always battery optimization and Doze delaying a background task — not a broken ringtone. Here's the mechanism and the fix: exact alarms."
tags:
  - android
  - technical
  - alarm clock
  - battery
  - arisely
sidebarApps:
  - arisely
faqs:
  - question: "Why didn't my Android alarm go off?"
    answer: "Most often, Android's battery optimization or Doze mode delayed the app that scheduled it. Alarms set as ordinary background work can be batched and deferred to save power, so they fire late or get skipped. Alarms scheduled as exact alarms are exempt and fire at the precise set time, even in Doze."
  - question: "What is an exact alarm on Android?"
    answer: "An exact alarm uses Android's SCHEDULE_EXACT_ALARM / USE_EXACT_ALARM capability to fire at an exact wall-clock time rather than being batched with other background work. The system treats it as time-critical, so it goes off on time even when the device is idle, in Doze, or the app has been closed for hours."
  - question: "Does battery optimization stop alarms from ringing?"
    answer: "It can delay or silence alarms that are scheduled as deferrable background work. The reliable fix is an app that uses exact alarms, which are exempt from Doze deferral. As a backstop you can also disable battery optimization for your alarm app in Android settings."
  - question: "How do I make sure my alarm always rings on time?"
    answer: "Use an alarm app built on exact alarms, let it play on the dedicated alarm audio channel so it isn't muted by media volume or Do Not Disturb, and allow it to show full-screen over the lock screen. Arisely does all three, so alarms fire on time even when the phone is locked or the app is closed."
  - question: "Is it safe to grant the exact alarm permission?"
    answer: "Yes, for an alarm clock it's the intended use. Google lists alarm and calendar apps as the textbook case for SCHEDULE_EXACT_ALARM. The permission only controls timing precision; it doesn't grant access to your data. Arisely requests it solely so alarms fire at the exact time you set."
---

**If your Android alarm rings late or not at all, the cause is almost always battery optimization and Doze delaying a background-scheduled alarm — not a broken ringtone.** The fix is an alarm that uses *exact alarms*, which Android treats as time-critical and fires on time even when the phone is idle or the app has been closed for hours.

## What's actually happening

To save power, Android batches background work. **Doze mode** (when the phone is still and the screen is off) and **battery optimization** defer apps' background tasks to occasional maintenance windows. An alarm scheduled as ordinary background work gets caught in that batching — so it fires late, or the window never lines up and it's effectively skipped.

This is why a "louder ringtone" never fixes the problem: the alarm isn't quiet, it's *late or absent*. Volume is irrelevant if the alarm never triggers.

## The fix: exact alarms

Android provides a time-critical path: **exact alarms** (`SCHEDULE_EXACT_ALARM` / `USE_EXACT_ALARM`). An alarm scheduled this way is exempt from Doze deferral and fires at the precise wall-clock time you set — locked screen, idle device, app closed for hours, it doesn't matter.

| | Background-scheduled alarm | Exact alarm |
| :--- | :--- | :--- |
| **Affected by Doze / battery optimization** | Yes — can be delayed or skipped | No — exempt |
| **Fires when app is closed** | Unreliable | Yes |
| **Fires when phone is locked/idle** | Unreliable | Yes |
| **Intended for** | Deferrable sync, cleanup | Alarms, reminders, calendar |

Google explicitly lists **alarm clocks** as the textbook use case for this capability, so a true alarm app is expected to use it.

## Two more things that make an alarm reliable

Exact timing gets the alarm to fire. Two more pieces make sure you hear it:

1. **The alarm audio channel.** Playing on Android's dedicated alarm channel keeps it at full volume even when media is muted or Do Not Disturb is on.
2. **Full-screen over the lock screen.** A full-screen intent launches the ringing screen over your lock screen, instead of being downgraded to a silent, tap-to-open notification.

## A backstop in Android settings

Even with exact alarms, you can add belt-and-braces reliability: in **Settings → Apps → [your alarm app] → Battery**, set it to **Unrestricted** (or disable battery optimization for it). This prevents aggressive OEM power managers from interfering.

## An alarm built on all three

[Arisely](/blog/arisely-alarm-clock-for-heavy-sleepers) uses exact-time alarms, plays on the alarm audio channel with an extra-loud boost, and shows full-screen over the lock screen — so it fires on time and loud even when the phone is locked or the app has been closed for hours. Free, no account, no data collected.

[**Download Arisely on Google Play**](https://play.google.com/store/apps/details?id=com.arisely&referrer=utm_source%3Dapplass%26utm_medium%3Dblog%26utm_campaign%3Dexact-alarms%26utm_content%3Dwhy-android-alarms-dont-go-off-exact-alarms)

---

**Related:** [How to stop sleeping through your alarm](/blog/how-to-stop-sleeping-through-your-alarm-android) · [All articles](/blog)
