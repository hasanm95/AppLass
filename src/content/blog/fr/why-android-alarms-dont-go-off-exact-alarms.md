---
title: "Pourquoi votre réveil Android n'a pas sonné : 7 causes et solutions (Samsung, Xiaomi, Pixel)"
description: "Réveil Android muet, en retard ou qui n'a pas sonné du tout ? Les causes habituelles sont les autorisations d'alarmes exactes, l'optimisation de la batterie et la gestion d'énergie du fabricant. Voici comment diagnostiquer et corriger chacune — et comment ne plus dormir malgré un réveil qui sonne."
date: "2026-10-04"
dateModified: "2026-11-13"
category: "Applications Android"
author: "Équipe AppLass"
keywords: "réveil android ne sonne pas, alarme n'a pas sonné android, pourquoi mon réveil n'a pas sonné, alarme en retard android, mode doze alarme, optimisation batterie alarme, alarme exacte android, réveil samsung ne sonne pas, réveil xiaomi ne sonne pas, ne plus dormir malgré le réveil"
excerpt: "Quand un réveil Android sonne en retard ou pas du tout, c'est presque toujours une question d'autorisations d'alarmes exactes, d'optimisation de la batterie ou de gestion d'énergie du fabricant — pas une sonnerie défectueuse. Voici comment diagnostiquer chaque cause, la corriger selon votre fabricant, et ne plus dormir malgré les réveils qui sonnent."
tags:
  - android
  - technique
  - réveil
  - batterie
  - arisely
sidebarApps:
  - arisely
thumbnail: "../../../assets/blogs/why-android-alarms-dont-go-off-exact-alarms.png"
faqs:
  - question: "Pourquoi mon réveil Android n'a-t-il pas sonné ?"
    answer: "Le plus souvent, l'optimisation de la batterie ou le mode Doze a retardé l'application qui l'avait programmé. Les alarmes planifiées comme un simple travail d'arrière-plan peuvent être regroupées et reportées pour économiser l'énergie, et donc sonner en retard ou être ignorées. Les alarmes planifiées comme alarmes exactes en sont exemptées et se déclenchent à l'heure précise, même en mode Doze. Sur les téléphones Samsung, Xiaomi et Huawei, la gestion d'énergie du fabricant est une cause supplémentaire très fréquente."
  - question: "Qu'est-ce qu'une alarme exacte sur Android ?"
    answer: "Une alarme exacte utilise l'autorisation SCHEDULE_EXACT_ALARM ou USE_EXACT_ALARM d'Android pour se déclencher à une heure précise plutôt que d'être regroupée avec d'autres tâches d'arrière-plan. Le système la traite comme critique dans le temps, elle sonne donc à l'heure même si l'appareil est inactif, en mode Doze, ou si l'application est fermée depuis des heures. Depuis Android 14, cette autorisation est refusée par défaut pour de nombreuses applications."
  - question: "L'optimisation de la batterie empêche-t-elle les alarmes de sonner ?"
    answer: "Elle peut retarder ou rendre muettes les alarmes planifiées comme un travail d'arrière-plan reportable. Android documente qu'une alarme inexacte avec fenêtre temporelle peut être retardée d'au moins dix minutes. La solution fiable est une application utilisant des alarmes exactes, et le réglage de l'utilisation de la batterie de votre appli réveil sur « Sans restriction » dans les paramètres Android."
  - question: "Pourquoi les réveils échouent-ils surtout sur Xiaomi et Samsung ?"
    answer: "One UI, MIUI et HyperOS appliquent leur propre gestion d'énergie par-dessus celle d'Android et suspendent régulièrement les processus d'arrière-plan pour économiser la batterie. Si le système suspend votre appli réveil, son alarme programmée ne se déclenche jamais. La solution dépend du fabricant : activer le démarrage automatique sur Xiaomi, et régler l'application sur « Sans restriction » et l'exclure des applications en veille sur Samsung."
  - question: "Mon réveil ne sonne pas si je ferme l'application depuis les applis récentes. Pourquoi ?"
    answer: "Balayer une application depuis la liste des récentes peut la terminer complètement sur certaines surfaces constructeur, ce qui annule son travail programmé. Sur Android pur, une alarme exacte survit à cela, mais les surfaces agressives ne le respectent pas toujours. Si votre réveil n'échoue qu'après avoir vidé les récentes ou redémarré le téléphone, c'est la cause probable : laissez l'application tourner en arrière-plan et activez le démarrage automatique."
  - question: "Le mode Ne pas déranger peut-il rendre mon réveil muet ?"
    answer: "Par défaut, non. Le mode Ne pas déranger coupe les notifications et les médias mais laisse passer les alarmes, à condition que l'application utilise le canal audio alarme dédié d'Android. L'erreur de volume la plus fréquente est que le volume du canal alarme lui-même soit baissé : il est distinct du volume des médias et de la sonnerie. Vérifiez-le dans Paramètres, Sons, et cherchez précisément le curseur Alarme."
  - question: "Comment m'assurer que mon réveil sonne toujours à l'heure ?"
    answer: "Utilisez une appli réveil fondée sur les alarmes exactes, accordez-lui l'autorisation « Alarmes et rappels », réglez son utilisation de la batterie sur « Sans restriction », laissez-la utiliser le canal audio alarme dédié et autorisez l'affichage plein écran par-dessus l'écran de verrouillage. Sur Xiaomi et Samsung, activez aussi le démarrage automatique ou excluez-la des applications en veille."
  - question: "Est-il sûr d'accorder l'autorisation d'alarmes exactes ?"
    answer: "Oui, pour un réveil c'est l'usage prévu. Google cite les applications de réveil et d'agenda comme cas d'école pour SCHEDULE_EXACT_ALARM. L'autorisation ne contrôle que la précision temporelle ; elle ne donne accès ni à vos données ni à vos fichiers."
  - question: "Pourquoi est-ce que je dors malgré des réveils qui sonnent ?"
    answer: "Trois éléments se combinent généralement : l'inertie du sommeil, qui vous rend assez engourdi pour éteindre une alarme sans en garder le souvenir ; le bouton d'arrêt en un geste, qu'une main à demi endormie trouve par réflexe ; et la boucle de répétition, qui fragmente votre dernier cycle de sommeil. Le volume ne corrige aucun des trois. Ce qui brise le réflexe, c'est une tâche exigeant attention ou mouvement."
  - question: "Est-ce la fonction « répéter » qui me fait dormir trop longtemps ?"
    answer: "Souvent, oui. Repousser vous replonge dans un sommeil fragmenté de mauvaise qualité et entraîne le réflexe d'éteindre les alarmes sans se réveiller, ce qui explique qu'on puisse se sentir plus mal après trois répétitions qu'en se levant à la première sonnerie. Fixer une limite de répétitions, ou supprimer l'arrêt facile au profit d'une tâche, brise cette boucle."
  - question: "Combien de temps sonne une alarme Android avant de s'arrêter ?"
    answer: "Sur Android pur, l'application Horloge coupe une alarme sans réponse au bout de 10 à 15 minutes environ et la marque comme manquée. La durée exacte varie selon le fabricant et est réglable dans certaines applications. C'est pourquoi une alarme qui vous surprend en sommeil profond peut s'arrêter avant que vous n'émergiez, et pourquoi une tâche compte davantage que la durée."
---

**Si votre réveil Android sonne en retard ou pas du tout, la cause n'est presque jamais une sonnerie
défectueuse.** C'est l'un des éléments d'une courte liste de comportements système : l'autorisation
d'alarmes exactes, Doze et l'optimisation de la batterie, ou la gestion d'énergie propre à votre
fabricant. Ce guide passe en revue chaque cause dans l'ordre de diagnostic, avec les réglages par
fabricant qui corrigent réellement le problème.

Si vos réveils *sonnent* et que vous dormez quand même, c'est un autre problème avec une autre
solution — traité dans la seconde moitié.

## Diagnostic rapide

| Symptôme | Cause la plus probable | Aller à |
|---|---|---|
| Alarme déclenchée avec 10 min de retard ou plus | Alarme inexacte regroupée par Doze | [Cause 1](#cause-1--lalarme-nétait-pas-exacte) |
| Alarme jamais déclenchée | Autorisation d'alarmes exactes refusée | [Cause 2](#cause-2--lautorisation-dalarmes-exactes-est-refusée) |
| Échoue seulement après un redémarrage ou vidage des récentes | Gestion d'énergie du fabricant | [Cause 3](#cause-3--gestion-dénergie-du-fabricant) |
| S'est déclenchée mais muette ou très faible | Volume du canal alarme, pas des médias | [Cause 4](#cause-4--elle-a-sonné-mais-vous-ne-lavez-pas-entendue) |
| S'est déclenchée, vous l'avez éteinte, aucun souvenir | Inertie du sommeil et arrêt en un geste | [Seconde moitié](#partie-2--lalarme-a-sonné-et-vous-avez-dormi) |

---

## Cause 1 : L'alarme n'était pas exacte

Pour économiser l'énergie, Android regroupe les tâches d'arrière-plan. Le **mode Doze** (téléphone
immobile, écran éteint) et l'optimisation de la batterie reportent ces tâches vers des fenêtres de
maintenance occasionnelles. Une alarme planifiée comme un travail d'arrière-plan ordinaire se retrouve
prise dans ce regroupement : elle sonne en retard, ou la fenêtre ne coïncide jamais et elle est de fait
ignorée.

La documentation d'Android est explicite : une alarme inexacte avec fenêtre temporelle peut être
retardée d'**au moins dix minutes**. C'est la différence entre un réveil à 7 h 00 et à 7 h 12.

**La solution** est une alarme utilisant les **alarmes exactes** (`SCHEDULE_EXACT_ALARM` /
`USE_EXACT_ALARM`). Elles sont exemptées du report par Doze et se déclenchent à l'heure précise — écran
verrouillé, appareil inactif, application fermée depuis des heures.

| | Alarme planifiée en arrière-plan | Alarme exacte |
| :--- | :--- | :--- |
| **Affectée par Doze / optimisation batterie** | Oui — peut être retardée ou ignorée | Non — exemptée |
| **Se déclenche application fermée** | Peu fiable | Oui |
| **Se déclenche téléphone verrouillé/inactif** | Peu fiable | Oui |
| **Prévue pour** | Synchronisation reportable, nettoyage | Réveils, rappels, agenda |

Google cite explicitement les **réveils** comme cas d'école, une vraie application de réveil est donc
censée l'utiliser.

## Cause 2 : L'autorisation d'alarmes exactes est refusée

C'est la cause qui a le plus progressé depuis Android 14. Les alarmes exactes exigent désormais un
accès spécial, **refusé par défaut** pour de nombreuses applications. Si cette autorisation est
révoquée, les futures alarmes exactes de l'application sont annulées — silencieusement.

**À vérifier :** Paramètres → Applications → *votre appli réveil* → **Alarmes et rappels** → autoriser.

Sur certaines versions, cela se trouve dans Paramètres → Applications → Accès spécial des applications
→ Alarmes et rappels.

## Cause 3 : Gestion d'énergie du fabricant

Android pur n'est que la moitié de l'histoire. One UI (Samsung), MIUI/HyperOS (Xiaomi), EMUI (Huawei)
et ColorOS (Oppo/Realme) superposent leur propre gestion d'énergie, plus agressive — et suspendent
régulièrement les applications en arrière-plan. Une appli réveil suspendue ne sonne pas.

C'est la cause du schéma de plainte le plus fréquent : *« ça marche, mais pas après un redémarrage ou
quand je vide les récentes ».*

**Samsung (One UI)**
- Paramètres → Applications → *appli réveil* → Batterie → **Sans restriction**
- Paramètres → Batterie → Limites d'utilisation en arrière-plan → vérifier que l'application n'est
  **pas** dans *Applications en veille* ou *Applications en veille profonde*

**Xiaomi / Redmi / POCO (MIUI, HyperOS)**
- Paramètres → Applications → Gérer les applications → *appli réveil* → **Démarrage auto : activé**
- Même écran → Économiseur de batterie → **Aucune restriction**
- Verrouiller l'application dans les récentes (tirer sa carte vers le bas) pour qu'elle ne soit pas vidée

**Huawei (EMUI)**
- Paramètres → Batterie → Lancement d'applications → *appli réveil* → **Gérer manuellement**, activer
  les trois options

**Oppo / Realme / OnePlus**
- Paramètres → Batterie → *appli réveil* → **Autoriser l'activité en arrière-plan** / désactiver
  l'*optimisation de veille*

**Pixel / Android pur**
- Paramètres → Applications → *appli réveil* → Batterie → **Sans restriction**

Les applications tierces de « nettoyage de RAM » et d'économie de batterie provoquent la même panne et
méritent d'être désinstallées si votre réveil compte pour vous.

## Cause 4 : Elle a sonné, mais vous ne l'avez pas entendue

Trois éléments distincts peuvent rendre une alarme pratiquement muette :

1. **Le volume du canal alarme.** Android dispose d'un volume **alarme** dédié, distinct des médias et
   de la sonnerie. Il peut être à zéro alors que tout le reste semble normal. Vérifiez dans Paramètres
   → Sons → curseur **Alarme**, ou appuyez sur volume haut pendant une alarme.
2. **L'application n'utilise pas le canal alarme.** Une application qui passe par le canal médias est
   coupée avec tout le reste. Le mode Ne pas déranger ne laisse passer les alarmes *que* sur le canal
   alarme.
3. **Pas d'affichage plein écran.** Sans l'autorisation d'apparaître en plein écran par-dessus l'écran
   de verrouillage, l'écran de sonnerie peut être rétrogradé en notification muette à toucher.

## Cause 5 : Fuseau horaire, mises à jour et l'application Horloge elle-même

Moins courant, mais réel :

- **Le fuseau horaire automatique** qui change pendant la nuit après un voyage décale les alarmes.
- **Une mise à jour système ou applicative** nocturne peut annuler les alarmes programmées jusqu'au
  prochain lancement de l'application.
- **L'application Horloge elle-même.** Il y a eu des périodes documentées où l'Horloge de Google n'a
  pas sonné pour certains utilisateurs. Si tout le reste est en place et que seule l'application par
  défaut échoue, testez une autre application de réveil.

## Cause 6 : Vous avez vidé l'application des récentes

Sur plusieurs surfaces constructeur, balayer une application dans les récentes la termine et annule son
travail programmé. Android pur préserve les alarmes exactes dans ce cas, les surfaces agressives pas
toujours. Si votre réveil échoue uniquement les matins après avoir vidé les récentes, laissez
l'application tourner et activez le démarrage automatique.

## Cause 7 : Mode économie d'énergie

L'économiseur de batterie d'Android, et ses équivalents constructeurs plus stricts, restreignent
l'activité en arrière-plan de façon générale. Si votre téléphone bascule en économie d'énergie pendant
la nuit à un niveau de charge bas, cela peut faire la différence entre un réveil qui fonctionne et un
réveil absent. Chargez la nuit, ou excluez l'application de réveil.

---

## Partie 2 : L'alarme a sonné et vous avez dormi

Si l'alarme se déclenche correctement et que vous dormez quand même, rien de ce qui précède n'aide —
c'est un autre problème.

| Cause | Ce qui se passe | La solution |
| :--- | :--- | :--- |
| **Inertie du sommeil** | En sommeil profond, votre cerveau est assez engourdi pour éteindre une alarme sans en garder le souvenir | Exiger une tâche demandant une véritable attention |
| **Le bouton d'arrêt** | Un geste ensommeillé la coupe avant que vous soyez conscient | Supprimer l'échappatoire en un geste |
| **La boucle de répétition** | Repousser fragmente votre dernier cycle de sommeil et aggrave l'engourdissement | Plafonner ou désactiver la répétition |

**Pourquoi une sonnerie plus forte n'y change rien.** Éteindre une alarme est un *réflexe* — localiser
un téléphone et appuyer sur une grande surface est à la portée d'un cerveau endormi, sans jamais
atteindre la conscience. Le volume la rend plus facile à entendre, pas plus difficile à éteindre.

**Ce qui fonctionne, c'est d'intercaler une tâche entre vous et le bouton d'arrêt :**

- Résoudre un calcul
- Ressaisir un code ou une courte phrase
- Faire un nombre de pas défini
- Scanner un QR code ou un code-barres placé à l'autre bout de la pièce
- Faire des pompes vérifiées par la caméra

Dès que vous accomplissez une tâche, vous êtes réveillé. C'est tout le mécanisme. Les tâches physiques
battent les tâches mentales chez les gros dormeurs, car le calcul réveille votre cerveau dix secondes
alors que le trajet jusqu'à la cuisine réveille votre corps.

**Fermer les deux dernières échappatoires.** Une main à demi endormie et déterminée garde deux
astuces : baisser le volume, ou appuyer sur le bouton d'alimentation. Certaines applications proposent
des garde-fous optionnels, actifs uniquement pendant la sonnerie, qui remontent le volume et bloquent
le menu d'extinction. (Un arrêt matériel forcé, en maintenant le bouton, ne peut être bloqué par
aucune application, et c'est voulu.)

Pour le comparatif complet des applications qui font cela, voir
[les meilleures applis réveil pour gros dormeurs](/fr/blog/best-alarm-apps-for-heavy-sleepers-android-2026),
et [la mission pompes expliquée](/fr/blog/alarm-app-that-makes-you-do-pushups-android) pour la version
la plus exigeante d'une tâche de désactivation.

## Check-list de fiabilité

Parcourez-la une fois et la plupart des problèmes de réveil disparaissent durablement :

1. Accorder **Alarmes et rappels** à votre appli réveil
2. Régler son utilisation de la batterie sur **Sans restriction**
3. Activer le **démarrage automatique** (Xiaomi) ou l'exclure des **applications en veille** (Samsung)
4. Vérifier spécifiquement le **curseur de volume Alarme**
5. Autoriser le **plein écran par-dessus l'écran de verrouillage**
6. Désinstaller les nettoyeurs de RAM/batterie tiers
7. Garder le téléphone en charge la nuit pour que l'économie d'énergie ne s'active jamais

## Un réveil qui applique tout cela

[Arisely](/fr/blog/arisely-alarm-clock-for-heavy-sleepers) utilise des alarmes à l'heure exacte, passe
par le canal audio alarme avec un renfort de volume, et s'affiche en plein écran par-dessus l'écran de
verrouillage — elle se déclenche donc à l'heure et fort, même téléphone verrouillé ou application
fermée depuis des heures. Des garde-fous optionnels remontent le volume et bloquent le menu
d'extinction pendant la sonnerie, et dix missions de réveil suppriment l'arrêt en un geste. Gratuite,
sans compte, et la bannière de la version gratuite n'apparaît jamais sur l'écran de sonnerie.

[**Télécharger Arisely sur Google Play**](https://play.google.com/store/apps/details?id=com.arisely&referrer=utm_source%3Dapplass%26utm_medium%3Dblog%26utm_campaign%3Dexact-alarms%26utm_content%3Dwhy-android-alarms-dont-go-off-exact-alarms)

---

**À lire aussi :** [Les meilleures applis réveil pour gros dormeurs](/fr/blog/best-alarm-apps-for-heavy-sleepers-android-2026) ·
[L'appli réveil qui vous fait faire des pompes](/fr/blog/alarm-app-that-makes-you-do-pushups-android) ·
[Les meilleures alternatives à Alarmy](/fr/blog/alarmy-alternatives-android)
