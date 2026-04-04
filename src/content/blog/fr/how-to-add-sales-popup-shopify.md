---
title: "Comment Ajouter une Notification de Vente sur Shopify (Sans Ralentir Votre Boutique)"
date: "2026-03-08"
category: "Guide Pratique"
author: "AppLass Team"
excerpt: "Les notifications de vente montrent les achats récents pour rassurer les visiteurs hésitants et les pousser à passer commande. Voici comment en ajouter une sur Shopify en moins de 5 minutes — sans impacter votre vitesse."
thumbnail: "../../../assets/blogs/sales-popup-shopify-hero.png"
featured: true
faqs:
  - question: "Est-ce que les notifications de vente fonctionnent vraiment ?"
    answer: "Oui, quand elles affichent de vraies données. Montrer de vraies commandes récentes crée ce que les psychologues appellent la 'preuve sociale' — l'idée que si d'autres personnes achètent, ça vaut le coup. Les boutiques qui utilisent des notifications de vente en temps réel voient généralement une hausse de 10 à 25 % de leur taux de conversion. Le mot-clé, c'est *vraies*. Des données fausses détruisent la confiance dès que le visiteur s'en rend compte."
  - question: "Est-ce qu'une notification de vente va ralentir ma boutique Shopify ?"
    answer: "Ça dépend de l'application. Les vieilles applications de popups injectent du JavaScript lourd dans la balise head de votre thème, ce qui bloque le chargement de la page. FomoGen utilise le système App Embed Block de Shopify à la place, qui se charge de façon asynchrone. Son payload complet fait moins de 2,1 Ko — plus léger que la plupart des miniatures produit. Zéro impact sur les Core Web Vitals."
  - question: "Où est-ce que la notification de vente doit apparaître ?"
    answer: "Le coin inférieur gauche est le standard du secteur. C'est visible sans bloquer le contenu principal, ça s'inscrit dans le flux de lecture naturel, et ça ne coupe pas le processus d'achat. Évitez les popups au centre de l'écran — elles frustrent les utilisateurs et sont souvent fermées immédiatement."
  - question: "Est-ce que je peux afficher de fausses données d'achat ?"
    answer: "Techniquement oui, mais ne le faites pas. Les fausses preuves sociales sont de plus en plus ciblées par les lois de protection des consommateurs en France, en Europe et au-delà. Plus concrètement : les acheteurs en 2026 sont malins. Une popup qui affiche toujours '3 restants' ou les mêmes noms à chaque actualisation va tuer votre crédibilité plus vite qu'aucune popup du tout. FomoGen utilise uniquement les vraies données de commande Shopify."
  - question: "Combien d'achats récents est-ce que je dois afficher ?"
    answer: "Montrez des achats des dernières 24 à 48 heures si votre boutique reçoit des commandes régulières. Si votre boutique est plus récente avec moins de volume, élargissez la fenêtre à 7 jours. L'objectif est d'afficher quelque chose de genuinement récent sans que le flux semble périmé."
---

Vous avez du trafic qui arrive sur votre boutique. Les gens cliquent, regardent vos produits. Et puis... ils partent sans acheter.

Ça vous parle ?

L'une des principales raisons pour lesquelles les visiteurs n'achètent pas est simple : ils ne sont pas sûrs que d'autres personnes achètent non plus. Votre boutique a peut-être d'excellents produits, mais s'il n'y a aucun signe de vie — pas d'avis, pas d'activité, aucune preuve que de vraies personnes achètent — le cerveau de votre visiteur classe ça tranquillement dans la catégorie "risqué."

Une notification de vente règle ce problème. C'est le petit widget qui apparaît dans le coin de votre boutique en disant des choses comme *"Sarah de Paris vient d'acheter le Sac Cuir Classique — il y a 4 minutes."*

Ça marche parce que c'est vrai. Et dans ce guide, je vais vous montrer exactement comment en ajouter une sur votre boutique Shopify, gratuitement, en environ 5 minutes.

---

## Pourquoi Vos Visiteurs Ont Besoin de Voir d'Autres Personnes Acheter

Pensez à la dernière fois que vous êtes passé devant un restaurant. Lequel vous donnait plus envie d'entrer — celui qui était plein et animé, ou celui qui était complètement vide ?

Votre boutique Shopify fonctionne pareil.

Quand quelqu'un arrive sur votre boutique pour la première fois, c'est un inconnu. Il ne vous connaît pas. Il se demande : *Est-ce que c'est sérieux ? Est-ce que ça va vraiment être livré ? Est-ce que d'autres personnes achètent ça ?*

Une notification de vente répond à ces trois questions en un seul petit moment. Elle dit : oui, cette boutique est active, de vraies personnes viennent d'acheter quelque chose, et c'était récent.

Les psychologues appellent ça la **preuve sociale** — nous regardons ce que font les autres pour décider ce qui est sûr. C'est pourquoi Amazon affiche "1 200 personnes ont acheté ça le mois dernier" sur les pages produit. C'est pourquoi les restaurants mettent des autocollants "Le Plus Populaire" sur les items du menu.

Vous n'avez pas besoin du budget d'Amazon pour faire ça. Il vous faut juste la bonne application Shopify.

---

![Page produit Shopify avant et après l'ajout d'une notification de vente montrant l'effet sur la confiance de l'acheteur](../../../assets/blogs/sales-popup-before-after-shopify.png)

---

## Ce Qu'une Bonne Notification de Vente Doit Afficher

Toutes les popups ne se valent pas. Une bonne inclut :

- **Prénom + ville** de l'acheteur (ex : "Emma de Lyon")
- **Nom du produit** et optionnellement une petite miniature
- **Temps depuis l'achat** (ex : "il y a 12 minutes")
- **Un design discret** qui ne recouvre pas votre contenu principal

Une mauvaise affiche de faux noms, de fausses villes, ou un compteur qui repart à zéro à chaque rechargement de page. Les visiteurs s'en rendent compte en 2026 — et une fois que c'est fait, ils sont partis.

---

## Étape par Étape : Ajouter une Popup de Vente avec FomoGen

Voici comment tout configurer depuis zéro. Comptez environ 5 minutes.

### Étape 1 : Installer FomoGen

Rendez-vous sur le [Shopify App Store](https://apps.shopify.com/fomogen) et cherchez **FomoGen**. Cliquez sur "Ajouter l'application" et suivez le processus d'installation. C'est gratuit avec un plan généreux.

### Étape 2 : Ouvrir le Tableau de Bord FomoGen

Une fois installé, cliquez sur "Ouvrir l'application" depuis votre admin Shopify. Vous arrivez sur le tableau de bord FomoGen. Dans la barre latérale gauche, cliquez sur **Notifications de Preuve Sociale**.

### Étape 3 : Créer Votre Première Campagne

Cliquez sur **Nouvelle Campagne** et donnez-lui un nom (quelque chose comme "Popup Achats Récents"). Sélectionnez **Notification de Vente** comme type de campagne.

FomoGen va automatiquement récupérer vos vraies données de commande Shopify — aucune configuration manuelle nécessaire. Chaque fois que quelqu'un passe commande dans votre boutique, son achat peut apparaître dans la popup.

### Étape 4 : Personnaliser l'Apparence

Vous pouvez modifier :

- **Position** — en bas à gauche est recommandé
- **Couleurs** — pour correspondre à votre marque
- **Délai d'affichage** — combien de secondes après le chargement de la page avant qu'elle apparaisse (3 à 5 secondes est un bon point de départ)
- **Temps entre les notifications** — combien de temps entre chaque popup (8 à 12 secondes fonctionne bien)
- **Quelles informations afficher** — nom, ville, produit, heure

Gardez ça simple. N'entassez pas trop de texte dans le widget.

![Tableau de bord FomoGen montrant comment configurer une notification de vente pour Shopify](../../../assets/blogs/fomogen-social-proof-setup-dashboard.png)

### Étape 5 : Définir Votre Fenêtre de Commandes

Dans **Paramètres de Données**, choisissez jusqu'où remonter pour les commandes. Si votre boutique reçoit des commandes quotidiennes régulières, choisissez **Dernières 24 heures**. Si vous avez une boutique plus récente avec moins de volume, **Derniers 7 jours** convient.

C'est important. Afficher un achat de 6 mois avec "il y a 183 jours" en dessous ne va pas vous aider. Gardez ça récent et crédible.

### Étape 6 : Sauvegarder et Activer

Cliquez sur **Sauvegarder**, puis basculez la campagne sur **Actif**. C'est tout. Allez sur votre boutique dans un nouvel onglet et attendez 3 à 5 secondes — vous devriez voir votre popup apparaître.

---

## Bien Gérer le Timing

La plus grosse erreur que les gens font avec les popups de vente, c'est de les afficher trop agressivement. Une popup qui se déclenche dès que quelqu'un arrive sur votre page d'accueil donne une impression de spam. C'est comme un vendeur qui vous saute dessus dès que vous entrez dans un magasin.

Voici un timing qui semble naturel :

- **Délai avant la première popup :** 4 secondes après le chargement de la page
- **Temps entre les popups :** 10 secondes
- **Nombre maximum de popups par session :** 3 à 4

Ainsi, le visiteur a eu le temps de regarder avant d'être incité à acheter, et il n'est pas bombardé toutes les quelques secondes.

---

## Que Faire Si Vous N'Avez Pas Encore Beaucoup de Commandes

C'est une vraie préoccupation pour les nouvelles boutiques. Si vous n'avez que 2 à 3 commandes, une popup de vente peut faire plus de mal que de bien si elle montre les deux mêmes noms en boucle.

Dans ce cas, deux options :

1. **Élargissez votre fenêtre de commandes à 30 jours** — ça vous donne plus de données à alterner
2. **Reportez la popup de vente et utilisez un compteur de visiteurs à la place** — afficher "14 personnes consultent ce produit en ce moment" peut créer une urgence similaire sans avoir besoin d'historique d'achat

FomoGen supporte les deux. Une fois que votre volume de commandes augmente, passez à la notification de vente.

---

![Boutique Shopify mobile montrant une notification de vente sur une page produit](../../../assets/blogs/sales-popup-mobile-shopify-product-page.png)

---

## La Question de la Vitesse : Est-ce que Ça Va Affecter Mon Score PageSpeed ?

C'est la première préoccupation des marchands avant d'installer une application de conversion. À juste titre — beaucoup d'applications popup sont lourdes et ralentissent vraiment votre boutique.

FomoGen a été conçu spécifiquement pour éviter ça. Il utilise le système **App Embed Block** de Shopify, ce qui signifie :

- Il n'injecte pas de scripts dans votre balise `<head>`
- Il se charge **après** le contenu principal de votre page, pas avant
- Son payload total est inférieur à 2,1 Ko

Pour donner un ordre de grandeur : une seule image produit basse résolution sur votre boutique fait typiquement entre 50 et 200 Ko. Le script complet de FomoGen fait moins de 2,1 Ko. Il n'apparaîtra pas dans votre rapport PageSpeed Insights comme un problème.

---

## Combinez-le Avec la Rareté pour un Effet Maximum

Une popup de vente dit aux visiteurs que des gens achètent. Un **compteur de stock bas** leur dit qu'ils doivent acheter *maintenant*. Ensemble, ils forment une combinaison puissante.

Une fois que vous avez configuré votre notification de vente, retournez dans FomoGen et activez un widget **Rareté de Stock** pour vos meilleurs produits. Quelque chose comme *"Plus que 4 en stock"* affiché à côté d'une activité d'achat récente crée une vraie urgence qui augmente sensiblement les taux d'ajout au panier.

> **Prêt à ajouter de la preuve sociale à votre boutique ?** [FomoGen](/apps/fomogen) inclut des notifications de vente sur le plan gratuit — plus des compteurs de stock, un panier sticky et des barres de livraison gratuite, le tout dans une seule installation légère.
>
> **[Installer FomoGen Gratuitement sur Shopify →](https://apps.shopify.com/fomogen)**

---

**À lire ensuite :** Découvrez comment [calculer le bon seuil de livraison gratuite](/fr/blog/calculate-free-shipping-threshold) pour votre boutique — et comment l'afficher dynamiquement sous forme de barre de progression qui augmente votre panier moyen.
