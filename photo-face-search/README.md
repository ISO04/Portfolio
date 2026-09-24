# Photo Face Search

Application web pour photographes : les clients retrouvent leurs photos grâce à la
reconnaissance faciale et les téléchargent.

Projet construit **étape par étape** pour apprendre JavaScript puis React.

## Démarrer

```bash
cd client
npm install
npm run dev        # http://localhost:5173
```

Node 22 requis (`nvm install 22 && nvm use 22`).

## Structure

```
client/          application React (Vite)
  src/App.jsx    page d'accueil : la feuille de route des phases
lecons/          cours et exercices, une phase à la fois
```

## Feuille de route

| Phase | Sujet | État |
|---|---|---|
| 0 | Mise en place (Node, Vite, React) | fait |
| 1 | JavaScript essentiel | cours + exercices prêts |
| 2 | React de base : composants, props, `useState` | à venir |
| 3 | Upload photographe (Express + `multer`) | à venir |
| 4 | Détection de visages (`face-api.js`, descripteurs) | à venir |
| 5 | Recherche client par selfie | à venir |
| 6 | Téléchargement (unitaire + ZIP) | à venir |
| 7 | Comptes, base de données, déploiement, RGPD | à venir |

## Phase en cours

Phase 1 : lire `lecons/phase-1-javascript.md`, puis compléter
`lecons/phase-1-exercices.js` jusqu'à obtenir 5/5.

```bash
node lecons/phase-1-exemples.js     # les exemples commentés
node lecons/phase-1-exercices.js    # tes exercices, auto-corrigés
```

Le corrigé est dans `lecons/phase-1-corrige.js` (à n'ouvrir qu'après avoir essayé).
