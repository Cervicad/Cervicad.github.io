import CaseStudyLayout from '../components/CaseStudyLayout'

export default function CaseStudyOuestPack() {
  return (
    <CaseStudyLayout
      eyebrow="Case study — Cybersécurité & réseau"
      title="Sécurisation d'un Réseau d'Entreprise par Déploiement de Pare-feu"
      subtitle="Déploiement d'un pare-feu Stormshield SN210 chez Ouest Pack (31 salariés) : filtrage SSL/URL, durcissement et supervision des alarmes, sans couper l'activité."
      meta={[
        'BTS SIO (1ʳᵉ année)',
        'Pôle Sup La Salle, Rennes',
        '25 mai — 25 juin 2021',
        '5 semaines',
        'Ouest Pack',
        'Perros-Guirec (22)',
      ]}
      context={[
        "Ouest Pack (31 salariés, 40+ départements couverts) n'avait aucune protection périmétrique : consultation possible de sites à caractère illicite engageant juridiquement l'entreprise, et exposition directe du réseau aux attaques extérieures.",
        "Mission : installer et configurer un boîtier Stormshield pour protéger réseau, employés et clientèle — sans couper l'activité.",
      ]}
      constraints="5 semaines · matériel en production différé · certificats SSL à déployer sur les postes"
      sections={[
        {
          heading: 'Déploiement du boîtier',
          body: "Installation physique et graphique du pare-feu SN210 : adressage, DHCP, montée de version 3.1.2 → 4.2.2, connectivité via routeur Draytek et import du certificat de l'autorité dans les navigateurs.",
        },
        {
          heading: 'Politique de filtrage',
          body: "Mise en place du proxy SSL (interception, déchiffrement, faux certificats), filtrage URL en HTTP, gestion de l'ordre des règles, plages horaires et page de blocage HTML personnalisée.",
        },
        {
          heading: 'Durcissement & outils',
          body: "Notification automatique des alarmes par SMTP, validation de l'antivirus du boîtier via une VM Windows 10 sous VirtualBox, déploiement du gestionnaire de mots de passe KeePass (proposition personnelle).",
        },
      ]}
      stats={[
        { value: '13', label: 'missions livrées en 5 semaines' },
        { value: '40+', label: "départements couverts par l'entreprise" },
      ]}
      analysis="Du branchement du boîtier à la notification SMTP, treize missions concrètes menées en cinq semaines, documentées dans le compte rendu de stage."
      nextSteps={[
        'Passage complet du pare-feu en production',
        "Affinage de la politique de filtrage (exceptions, retours d'usage)",
        'Généralisation de KeePass à l\u2019ensemble des comptes',
        'Supervision continue des alarmes SMTP et veille de version du boîtier',
      ]}
    />
  )
}
