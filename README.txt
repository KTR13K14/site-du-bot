# KTR/IA — Site officiel

Site vitrine statique pour ton bot Discord KTR/IA.

## 1. Mettre le lien d'ajout du bot

Ouvre `script.js` et remplace :

```js
const BOT_CLIENT_ID = "REMPLACE_PAR_TON_CLIENT_ID";
```

par l'ID APPLICATION de ton bot Discord.

Le site génère ensuite automatiquement le lien OAuth2 :

- scope `bot`
- scope `applications.commands`
- permissions `Administrator` (`8`)

## 2. Tester

Tu peux simplement ouvrir `index.html` dans ton navigateur.

## 3. Mettre en ligne

Tu peux héberger ces trois fichiers sur GitHub Pages, Cloudflare Pages, Netlify, Vercel, etc.

## Texte du site

Le site présente KTR/IA comme un bot Discord avec :
- conversation IA
- historique IA
- renouvellement automatique de conversation
- modération
- ban / kick / timeout
- clear
- commandes vocales
- commandes gaming / Steam
- commandes utilitaires et fun

Le site ne contient aucune clé Discord ou clé OpenAI.
