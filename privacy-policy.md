# Arisely Privacy Policy

**Effective date:** October 2, 2026 (previous version: September 30, 2026)

Arisely ("the app") is an alarm clock app for Android. This policy explains what data the app handles and how.

## Summary

Arisely has no user accounts and no server of its own. Everything you create in the app — your alarms, settings and sleep log — is stored on your device and is never sent anywhere.

Two things involve a third party, and only these two.

**Advertising.** If you use Arisely for free, Google AdMob serves a banner ad inside the app, and to do that Google receives your device's advertising ID and related device information. If you have Arisely Pro, no ad is ever requested and nothing is sent to Google at all.

**Purchases.** Arisely uses RevenueCat, a purchase-verification service, to know whether Pro is active. Each install is known to RevenueCat only by a random anonymous ID — never your name, email address or Google account — and RevenueCat holds a record of any Pro purchase made with it. This applies to every install, free or Pro, because checking is how a purchase is restored after a reinstall.

Payments themselves are handled entirely by Google Play. Arisely never sees or stores a payment method.

## What changed in this version

Before September 30, 2026, Arisely contained no advertising and no purchases, and this policy said so. Version 1.5.0 introduced both. The sections below describe the app as it is now.

That includes devices that already had Arisely installed before that update: they show ads like any other free install, unless Pro is active. Earlier versions of this policy said otherwise; that is no longer the case.

Version 1.6.0 added RevenueCat to verify purchases. Unlike advertising, this applies to every install, including those that predate advertising — see "Purchases" below.

## What's stored, and where

Arisely stores the following directly on your device, using Android's local app storage (`AsyncStorage`):

- **Alarms** — the times, labels, repeat days, ritual/mission choices, and sound selections you configure.
- **App settings** — preferences like dark mode, time format, snooze behavior, and reminder settings.
- **Sleep log** — the bedtimes you confirm and a record of each morning's alarms, snoozes and ritual attempts.
- **Your Pro status** — whether this device has an active subscription or lifetime purchase, as last confirmed by RevenueCat, and whether it predates advertising.

Your alarms, settings and sleep log are never sent to Arisely's developer or to any server. There is no backend — Arisely has no server component of its own. The only record that leaves the device is the purchase record described under "Purchases". If you uninstall the app or clear its storage, the data on your device is permanently deleted.

## Advertising

Free users see a single banner ad, served by **Google AdMob** (Google Ireland Limited / Google LLC). This applies only to free users on devices that installed Arisely after September 30, 2026.

**What Google receives.** To serve and measure an ad, the Google Mobile Ads SDK collects and transmits your device's **advertising ID** (a resettable identifier Android provides for this purpose), along with device and app information such as device model, operating system version, coarse location inferred from your IP address, and whether you interacted with the ad. Arisely's developer does not receive, see, or store any of it. Google's own handling of this data is described in its [Privacy Policy](https://policies.google.com/privacy) and its [advertising disclosures](https://policies.google.com/technologies/partner-sites).

**Where ads appear, and where they never do.** The banner appears only on the Alarms, Sleep and Settings tabs. There is never an ad on the alarm ring screen, during a wake-up ritual, or over your lock screen, and Arisely contains no full-screen, interstitial or app-open ads of any kind.

**Your choices.**
- **Consent.** If you are in the European Economic Area, the United Kingdom or Switzerland, Arisely shows you Google's consent form before requesting any ad, and no ad is requested unless that consent allows it. You can change or withdraw your choice at any time from **Settings → Ad preferences**, which appears wherever that choice applies.
- **Your advertising ID.** You can reset it, or tell Android to stop apps using it, in your device's **Settings → Privacy → Ads**.
- **Removing ads entirely.** Arisely Pro removes the banner, and Arisely then requests no ads at all.

## Purchases

Arisely Pro is sold as a monthly or yearly subscription, or as a one-time lifetime purchase. **All payment processing is handled by Google Play.** Arisely never receives, sees, or stores your payment method, billing address, or any part of your Google account.

To know whether Pro is active, the app uses **RevenueCat** (RevenueCat, Inc.), a purchase-verification service. When the app starts, and when you open the paywall or restore a purchase, it contacts RevenueCat to check what this install owns. The app keeps the answer on your device — whether Pro is active — so it keeps working without a connection.

**What RevenueCat receives.** A random anonymous ID generated for this install (it contains no name, email or Google account detail), a record of any Pro purchase or subscription made with it, and basic technical information such as the app and operating system version and your locale. As with any internet service, your IP address is visible to its servers in the course of the request. RevenueCat does not receive your alarms, settings, sleep log or advertising ID, and Arisely does not use a RevenueCat account login, email address or any other personal detail to identify you to it.

Arisely's developer can see purchase status in RevenueCat's dashboard in order to run the app. RevenueCat's handling of this data is described in its [Privacy Policy](https://www.revenuecat.com/privacy).

Managing or cancelling a subscription is done in Google Play, and Arisely links you there.

## Permissions the app requests, and why

| Permission | Why it's needed |
|---|---|
| Notifications | Show the alarm when it fires. |
| Alarms & reminders (exact alarm) | Fire alarms at the exact time you set, instead of a delayed/batched time. |
| Display over other apps | Reliably launch the full-screen alarm ring screen over the lock screen. |
| Battery optimization exemption | Prevent Android from killing the app before a scheduled alarm fires. |
| Boot-completed | Reschedule your alarms after the device restarts. |
| Vibrate | Vibrate the device when an alarm rings, if enabled. |
| Camera | Watch you for the Push-Up ritual and read codes for the QR / Barcode ritual. Frames are processed on your device and are never recorded, stored, or transmitted. |
| Physical activity | Count your steps for the Step ritual. |
| Advertising ID | Added by the Google Mobile Ads SDK so AdMob can serve ads to free users, as described under "Advertising" above. Not present in any other context. |

Apart from the advertising ID, none of these permissions are used to access, collect, or transmit personal information — they exist solely to make scheduled alarms fire reliably.

## Files you choose to use as alarm sounds

If you pick a custom sound from your device's files (via Android's built-in file picker), Arisely only accesses that specific file to play it as your alarm sound. Arisely does not browse, scan, upload, or otherwise access any other files on your device.

## Children's privacy

Arisely is a general-audience utility and is not directed at children under 13, and we do not knowingly collect personal information from them. Arisely itself collects nothing; the only data leaving the device is the advertising information Google receives to serve ads to free users, and the anonymous purchase record RevenueCat holds, both described above.

## Changes to this policy

If this policy changes, the updated version will be posted here with a revised effective date.

## Contact

Questions about this policy: hasanmobarak25@gmail.com
