import './App.css'

const phases = [
  { n: 0, titre: 'Mise en place', desc: 'Node, Vite, React : le projet démarre.', etat: 'fait' },
  { n: 1, titre: 'JavaScript essentiel', desc: 'Tableaux, objets, fonctions, async/await.', etat: 'en cours' },
  { n: 2, titre: 'React de base', desc: 'Composants, props, useState : la galerie.', etat: 'à venir' },
  { n: 3, titre: 'Upload photographe', desc: 'Formulaire + backend Express.', etat: 'à venir' },
  { n: 4, titre: 'Détection de visages', desc: 'face-api.js et descripteurs.', etat: 'à venir' },
  { n: 5, titre: 'Recherche client', desc: 'Selfie → comparaison des visages.', etat: 'à venir' },
  { n: 6, titre: 'Téléchargement', desc: 'Photo par photo ou ZIP.', etat: 'à venir' },
  { n: 7, titre: 'Finitions', desc: 'Comptes, base de données, déploiement, RGPD.', etat: 'à venir' },
]

function Phase({ n, titre, desc, etat }) {
  return (
    <li className={`phase ${etat.replace(' ', '-')}`}>
      <span className="num">{n}</span>
      <div>
        <h3>{titre}</h3>
        <p>{desc}</p>
      </div>
      <span className="etat">{etat}</span>
    </li>
  )
}

function App() {
  return (
    <main>
      <h1>Photo Face Search</h1>
      <p className="intro">
        Application pour photographes : les clients retrouvent leurs photos grâce à la
        reconnaissance faciale, puis les téléchargent.
      </p>
      <h2>Parcours d'apprentissage</h2>
      <ul className="phases">
        {phases.map((p) => (
          <Phase key={p.n} {...p} />
        ))}
      </ul>
    </main>
  )
}

export default App
