---
title: "Warum dein Android-Wecker nicht losgeht (und wie exakte Alarme das beheben)"
description: "Android-Wecker zu spät oder stumm? Akku-Optimierung und Doze verzögern im Hintergrund geplante Alarme. Hier die Ursache und wie exakte Alarme pünktliches Klingeln garantieren."
date: "2026-10-04"
dateModified: "2026-10-04"
category: "Android-Apps"
author: "AppLass-Team"
keywords: "android wecker geht nicht los, wecker zu spät android, wecker hat nicht geklingelt, doze modus wecker, akku optimierung wecker, exakter alarm android"
excerpt: "Wenn ein Android-Wecker zu spät oder gar nicht klingelt, verzögern fast immer Akku-Optimierung und Doze eine Hintergrundaufgabe — nicht ein kaputter Klingelton. Hier der Mechanismus und die Lösung: exakte Alarme."
tags:
  - android
  - technik
  - wecker
  - akku
  - arisely
sidebarApps:
  - arisely
faqs:
  - question: "Warum ist mein Android-Wecker nicht losgegangen?"
    answer: "Meist hat Androids Akku-Optimierung oder der Doze-Modus die App verzögert, die ihn geplant hat. Als gewöhnliche Hintergrundarbeit gesetzte Alarme können gebündelt und aufgeschoben werden, um Strom zu sparen, also gehen sie zu spät los oder werden übersprungen. Als exakte Alarme geplante Alarme sind ausgenommen und lösen zur genau eingestellten Zeit aus, auch im Doze."
  - question: "Was ist ein exakter Alarm unter Android?"
    answer: "Ein exakter Alarm nutzt Androids Berechtigung SCHEDULE_EXACT_ALARM / USE_EXACT_ALARM, um zu einer exakten Uhrzeit auszulösen, statt mit anderer Hintergrundarbeit gebündelt zu werden. Das System behandelt ihn als zeitkritisch, also geht er pünktlich los, auch wenn das Gerät ruht, im Doze ist oder die App seit Stunden geschlossen wurde."
  - question: "Verhindert die Akku-Optimierung, dass Alarme klingeln?"
    answer: "Sie kann Alarme verzögern oder stummschalten, die als aufschiebbare Hintergrundarbeit geplant sind. Die zuverlässige Lösung ist eine App mit exakten Alarmen, die von der Doze-Aufschiebung ausgenommen sind. Als Absicherung kannst du die Akku-Optimierung für deine Wecker-App in den Android-Einstellungen auch deaktivieren."
  - question: "Wie stelle ich sicher, dass mein Wecker immer pünktlich klingelt?"
    answer: "Nutze eine Wecker-App, die auf exakten Alarmen basiert, lass sie über den eigenen Wecker-Audiokanal laufen, damit sie nicht von Medienlautstärke oder Bitte-nicht-stören stummgeschaltet wird, und erlaube ihr, Vollbild über dem Sperrbildschirm anzuzeigen. Arisely macht alle drei, also gehen Alarme pünktlich los, auch bei gesperrtem Telefon oder geschlossener App."
  - question: "Ist es sicher, die Berechtigung für exakte Alarme zu erteilen?"
    answer: "Ja, für einen Wecker ist das der vorgesehene Zweck. Google nennt Wecker- und Kalender-Apps als Musterfall für SCHEDULE_EXACT_ALARM. Die Berechtigung steuert nur die zeitliche Genauigkeit; sie gewährt keinen Zugriff auf deine Daten. Arisely fordert sie ausschließlich an, damit Alarme zur exakt eingestellten Zeit auslösen."
---

**Wenn dein Android-Wecker zu spät oder gar nicht klingelt, liegt die Ursache fast immer an Akku-Optimierung und Doze, die einen im Hintergrund geplanten Alarm verzögern — nicht an einem kaputten Klingelton.** Die Lösung ist ein Wecker mit *exakten Alarmen*, die Android als zeitkritisch behandelt und pünktlich auslöst, auch wenn das Telefon ruht oder die App seit Stunden geschlossen wurde.

## Was wirklich passiert

Zum Stromsparen bündelt Android Hintergrundarbeit. Der **Doze-Modus** (wenn das Telefon still liegt und der Bildschirm aus ist) und die **Akku-Optimierung** schieben Hintergrundaufgaben von Apps in gelegentliche Wartungsfenster. Ein als gewöhnliche Hintergrundarbeit geplanter Alarm gerät in diese Bündelung — also geht er zu spät los, oder das Fenster passt nie und er wird praktisch übersprungen.

Deshalb behebt ein „lauterer Klingelton“ das Problem nie: Der Alarm ist nicht leise, er ist *zu spät oder gar nicht da*. Lautstärke ist egal, wenn der Alarm nie auslöst.

## Die Lösung: exakte Alarme

Android bietet einen zeitkritischen Weg: **exakte Alarme** (`SCHEDULE_EXACT_ALARM` / `USE_EXACT_ALARM`). Ein so geplanter Alarm ist von der Doze-Aufschiebung ausgenommen und löst zur genauen Uhrzeit aus, die du eingestellt hast — gesperrter Bildschirm, ruhendes Gerät, seit Stunden geschlossene App, das ist egal.

| | Im Hintergrund geplanter Alarm | Exakter Alarm |
| :--- | :--- | :--- |
| **Von Doze / Akku-Optimierung betroffen** | Ja — kann verzögert oder übersprungen werden | Nein — ausgenommen |
| **Löst bei geschlossener App aus** | Unzuverlässig | Ja |
| **Löst bei gesperrtem/ruhendem Telefon aus** | Unzuverlässig | Ja |
| **Gedacht für** | Aufschiebbare Synchronisierung, Aufräumen | Wecker, Erinnerungen, Kalender |

Google nennt **Wecker** ausdrücklich als Musterfall für diese Berechtigung, eine echte Wecker-App soll sie also nutzen.

## Zwei weitere Dinge, die einen Wecker zuverlässig machen

Exaktes Timing sorgt dafür, dass der Alarm auslöst. Zwei weitere Teile stellen sicher, dass du ihn hörst:

1. **Der Wecker-Audiokanal.** Das Abspielen über Androids eigenen Wecker-Kanal hält ihn in voller Lautstärke, auch bei stummgeschalteten Medien oder aktivem Bitte-nicht-stören.
2. **Vollbild über dem Sperrbildschirm.** Ein Full-Screen-Intent startet den Klingel-Bildschirm über deinem Sperrbildschirm, statt zu einer stummen, zum Öffnen antippbaren Benachrichtigung herabgestuft zu werden.

## Eine Absicherung in den Android-Einstellungen

Auch mit exakten Alarmen kannst du zusätzliche Zuverlässigkeit hinzufügen: Stell unter **Einstellungen → Apps → [deine Wecker-App] → Akku** auf **Uneingeschränkt** (oder deaktiviere die Akku-Optimierung dafür). Das verhindert, dass aggressive OEM-Energiemanager stören.

## Ein Wecker, der auf allen dreien basiert

[Arisely](/de/blog/arisely-alarm-clock-for-heavy-sleepers) nutzt zeitgenaue Alarme, läuft über den Wecker-Audiokanal mit Extra-laut-Boost und zeigt Vollbild über dem Sperrbildschirm — also löst er pünktlich und laut aus, auch bei gesperrtem Telefon oder seit Stunden geschlossener App. Kostenlos, kein Konto, keine erfassten Daten.

[**Arisely bei Google Play herunterladen**](https://play.google.com/store/apps/details?id=com.arisely&referrer=utm_source%3Dapplass%26utm_medium%3Dblog%26utm_campaign%3Dexact-alarms%26utm_content%3Dwhy-android-alarms-dont-go-off-exact-alarms)

---

**Verwandt:** [So verschläfst du deinen Wecker nicht mehr](/de/blog/how-to-stop-sleeping-through-your-alarm-android) · [Alle Artikel](/de/blog)
