// Phase 1 — exemples exécutables : node lecons/phase-1-exemples.js

const galerie = [
  { id: 'p1', fichier: 'IMG_001.jpg', evenement: 'mariage-dupont', visages: 3 },
  { id: 'p2', fichier: 'IMG_002.jpg', evenement: 'mariage-dupont', visages: 0 },
  { id: 'p3', fichier: 'IMG_003.jpg', evenement: 'bapteme-sow', visages: 5 },
]

// 1. map : transformer
console.log('Noms de fichiers :', galerie.map((p) => p.fichier))

// 2. filter : garder
console.log('Photos avec au moins un visage :', galerie.filter((p) => p.visages > 0).length)

// 3. find : chercher
console.log('Photo p3 :', galerie.find((p) => p.id === 'p3'))

// 4. reduce : agréger
console.log('Total de visages :', galerie.reduce((somme, p) => somme + p.visages, 0))

// 5. déstructuration
const { fichier, visages } = galerie[0]
console.log(`La photo ${fichier} contient ${visages} visages`)

// 6. regrouper par événement (reduce avancé, très utile pour les galeries)
const parEvenement = galerie.reduce((acc, photo) => {
  acc[photo.evenement] = acc[photo.evenement] || []
  acc[photo.evenement].push(photo.fichier)
  return acc
}, {})
console.log('Par événement :', parEvenement)

// 7. distance entre deux descripteurs de visage
function distance(a, b) {
  let somme = 0
  for (let i = 0; i < a.length; i++) {
    somme += (a[i] - b[i]) ** 2
  }
  return Math.sqrt(somme)
}

const visageClient = [0.1, 0.2, 0.3]
const visageMemePersonne = [0.11, 0.19, 0.32]
const visageAutrePersonne = [0.9, -0.4, 0.7]

console.log('Même personne  :', distance(visageClient, visageMemePersonne).toFixed(3))
console.log('Autre personne :', distance(visageClient, visageAutrePersonne).toFixed(3))

// 8. async / await : simuler un appel réseau lent
function fausseRequete(evenement) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(galerie.filter((p) => p.evenement === evenement)), 300)
  })
}

async function main() {
  console.log('Chargement…')
  const photos = await fausseRequete('mariage-dupont')
  console.log(`${photos.length} photos reçues pour mariage-dupont`)
}

main()
