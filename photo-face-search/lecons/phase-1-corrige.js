// Phase 1 — corrigé. À ouvrir seulement après avoir essayé les exercices.

export function identifiants(photos) {
  return photos.map((photo) => photo.id)
}

export function photosDeLEvenement(photos, evenement) {
  return photos.filter((photo) => photo.evenement === evenement)
}

export function totalTelechargements(photos) {
  return photos.reduce((somme, photo) => somme + photo.telechargements, 0)
}

export function distance(a, b) {
  let somme = 0
  for (let i = 0; i < a.length; i++) {
    somme += (a[i] - b[i]) ** 2
  }
  return Math.sqrt(somme)
}

export function photosDuClient(photos, descripteurClient, seuil = 0.6) {
  return photos.filter((photo) =>
    photo.descripteurs.some((d) => distance(d, descripteurClient) < seuil),
  )
}
