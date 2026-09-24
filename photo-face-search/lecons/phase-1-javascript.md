# Phase 1 — JavaScript essentiel (appliqué au projet)

Objectif : maîtriser les 6 briques de JS dont tu auras besoin dans **toutes** les phases suivantes.
Chaque notion est illustrée avec des données du projet (des photos, des visages).

Pour exécuter les exemples :

```bash
node lecons/phase-1-exemples.js
```

---

## 1. `const`, `let` (et jamais `var`)

```js
const nom = 'mariage-dupont'   // ne sera jamais réassigné
let compteur = 0               // va changer
compteur = compteur + 1
```

Règle simple : **`const` par défaut**, `let` seulement si tu réassignes.
`const` sur un objet ou un tableau n'empêche pas de modifier son contenu, seulement de le remplacer.

## 2. Objets = une photo

```js
const photo = {
  id: 'p1',
  fichier: 'IMG_001.jpg',
  evenement: 'mariage-dupont',
  visages: 3,
}

console.log(photo.fichier)     // IMG_001.jpg
console.log(photo['fichier'])  // pareil, utile quand la clé est une variable
```

Déstructuration (tu la verras partout en React) :

```js
const { fichier, visages } = photo
```

## 3. Tableaux = une galerie

Les 4 méthodes à connaître par cœur :

| Méthode | Ce qu'elle fait | Retourne |
|---|---|---|
| `map` | transforme chaque élément | un nouveau tableau de même taille |
| `filter` | garde certains éléments | un nouveau tableau plus petit |
| `find` | cherche le premier qui correspond | un élément (ou `undefined`) |
| `reduce` | agrège tout en une valeur | ce que tu veux (nombre, objet…) |

```js
const galerie = [photo1, photo2, photo3]

const noms = galerie.map((p) => p.fichier)              // ['IMG_001.jpg', ...]
const avecVisages = galerie.filter((p) => p.visages > 0)
const cible = galerie.find((p) => p.id === 'p2')
const total = galerie.reduce((somme, p) => somme + p.visages, 0)
```

⚠️ Aucune de ces méthodes ne modifie le tableau d'origine : elles en **renvoient un nouveau**.
C'est exactement ce que React attend (on ne modifie jamais un état, on le remplace).

## 4. Fonctions

```js
function compterVisages(galerie) {          // déclaration classique
  return galerie.reduce((s, p) => s + p.visages, 0)
}

const compter = (galerie) => galerie.reduce((s, p) => s + p.visages, 0)  // fonction fléchée
```

La fonction fléchée avec accolades a besoin d'un `return` explicite ;
sans accolades, le `return` est implicite. C'est la seule vraie différence à retenir pour l'instant.

## 5. `async` / `await` et `fetch`

Tout ce qui est lent (réseau, lecture de fichier, chargement d'un modèle d'IA) est **asynchrone** :
la fonction rend la main tout de suite et te promet un résultat plus tard (une `Promise`).

```js
async function chargerGalerie(evenement) {
  const reponse = await fetch(`http://localhost:3001/api/photos?evenement=${evenement}`)
  if (!reponse.ok) throw new Error('Impossible de charger la galerie')
  const photos = await reponse.json()
  return photos
}

// utilisation
try {
  const photos = await chargerGalerie('mariage-dupont')
  console.log(photos.length, 'photos')
} catch (erreur) {
  console.error(erreur.message)
}
```

Retiens : `await` ne s'utilise que dans une fonction `async`, et `fetch` fait **deux** attentes
(la réponse, puis la lecture du corps avec `.json()`).

## 6. La distance entre deux visages (le cœur du projet)

`face-api.js` transformera chaque visage en un tableau de 128 nombres : son **descripteur**.
Comparer deux visages = calculer la distance euclidienne entre leurs descripteurs :

\[ d = \sqrt{\sum_{i=1}^{128}(a_i - b_i)^2} \]

En JavaScript :

```js
function distance(a, b) {
  let somme = 0
  for (let i = 0; i < a.length; i++) {
    somme += (a[i] - b[i]) ** 2
  }
  return Math.sqrt(somme)
}
```

Si `distance < 0.6` → c'est très probablement la même personne (seuil usuel de face-api.js).
Tu viens d'écrire, en 6 lignes, la logique métier de ton application.

---

## Exercices

Ouvre `lecons/phase-1-exercices.js` et complète les 5 fonctions marquées `// À TOI`.
Vérifie ton travail avec :

```bash
node lecons/phase-1-exercices.js
```

Le fichier affiche ✅ ou ❌ pour chaque exercice. Objectif : 5 ✅.
Quand c'est bon, dis-le moi et on passe à la Phase 2 (React).
