// Phase 1 — exercices : complète les 5 fonctions marquées « À TOI »,
// puis lance : node lecons/phase-1-exercices.js

const galerie = [
  { id: 'p1', fichier: 'IMG_001.jpg', evenement: 'mariage-dupont', visages: 3, telechargements: 12 },
  { id: 'p2', fichier: 'IMG_002.jpg', evenement: 'mariage-dupont', visages: 0, telechargements: 0 },
  { id: 'p3', fichier: 'IMG_003.jpg', evenement: 'bapteme-sow', visages: 5, telechargements: 7 },
  { id: 'p4', fichier: 'IMG_004.jpg', evenement: 'bapteme-sow', visages: 2, telechargements: 3 },
]

// ---------------------------------------------------------------------------
// Exercice 1 — renvoie un tableau des identifiants (id) de toutes les photos.
// Attendu : ['p1', 'p2', 'p3', 'p4']
function identifiants(photos) {
  // À TOI (indice : map)
  return []
}

// ---------------------------------------------------------------------------
// Exercice 2 — renvoie les photos d'un événement donné.
// identifiants(photosDeLEvenement(galerie, 'bapteme-sow')) === ['p3', 'p4']
function photosDeLEvenement(photos, evenement) {
  // À TOI (indice : filter)
  return []
}

// ---------------------------------------------------------------------------
// Exercice 3 — renvoie le nombre total de téléchargements de la galerie.
// Attendu : 22
function totalTelechargements(photos) {
  // À TOI (indice : reduce)
  return 0
}

// ---------------------------------------------------------------------------
// Exercice 4 — renvoie la distance euclidienne entre deux descripteurs.
// distance([0, 0], [3, 4]) === 5
function distance(a, b) {
  // À TOI (indice : boucle for, ** 2, Math.sqrt)
  return 0
}

// ---------------------------------------------------------------------------
// Exercice 5 — renvoie les photos où le visage du client apparaît.
// Une photo correspond si AU MOINS UN de ses descripteurs est à une distance
// inférieure à `seuil` du descripteur du client.
// (indice : filter + .some() + la fonction distance ci-dessus)
function photosDuClient(photos, descripteurClient, seuil = 0.6) {
  // À TOI
  return []
}

// ---------------------------------------------------------------------------
// --- Vérification automatique : ne modifie rien en dessous de cette ligne ---
// ---------------------------------------------------------------------------

const photosAvecVisages = [
  { id: 'a', descripteurs: [[0.1, 0.2], [0.9, 0.9]] },
  { id: 'b', descripteurs: [[0.8, -0.5]] },
  { id: 'c', descripteurs: [] },
  { id: 'd', descripteurs: [[0.12, 0.23]] },
]

const memeTableau = (x, y) => JSON.stringify(x) === JSON.stringify(y)

const tests = [
  ['Exercice 1 — identifiants', memeTableau(identifiants(galerie), ['p1', 'p2', 'p3', 'p4'])],
  [
    'Exercice 2 — photosDeLEvenement',
    memeTableau(identifiants(photosDeLEvenement(galerie, 'bapteme-sow')), ['p3', 'p4']),
  ],
  ['Exercice 3 — totalTelechargements', totalTelechargements(galerie) === 22],
  ['Exercice 4 — distance', Math.abs(distance([0, 0], [3, 4]) - 5) < 1e-9],
  [
    'Exercice 5 — photosDuClient',
    memeTableau(
      photosDuClient(photosAvecVisages, [0.1, 0.2]).map((p) => p.id),
      ['a', 'd'],
    ),
  ],
]

let reussis = 0
for (const [nom, ok] of tests) {
  console.log(`${ok ? '✅' : '❌'} ${nom}`)
  if (ok) reussis++
}
console.log(`\n${reussis}/${tests.length} exercices réussis.`)
