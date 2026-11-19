import CaseStudyLayout from '../components/CaseStudyLayout'
import famocoArchi from '../assets/case-studies/famoco-archi.png'
import famocoOperations from '../assets/case-studies/famoco-operations.png'
import famocoPayout from '../assets/case-studies/famoco-payout.png'

export default function CaseStudyFamoco() {
  return (
    <CaseStudyLayout
      eyebrow="Étude de cas — Développement Full-Stack"
      title="Refonte du portail Famoco Pay Portal"
      subtitle="Développement full-stack Angular / Java Spring sur le portail de gestion bancaire du SoftPOS Famoco Pay : opérations, versements, distributeurs, marchands et clients."
      meta={['Stage technique', 'Famoco — Rennes', '16 juin — 12 sept. 2025', '3 mois', 'Équipe Customer Delivery']}
      context={[
        'Famoco conçoit et opère des terminaux Android sécurisés — lecteurs NFC, scanners code-barres, bornes sans contact — selon un modèle Device-as-a-Service, avec des sites à Paris, Bruxelles, Shenzhen, Abidjan et Rennes, ce dernier dédié à la R&D d\u2019OS, d\u2019applications et de sites web.',
        'Famoco Pay, solution SoftPOS de paiement sans contact lancée en 2021, s\u2019appuie sur Famoco Pay Portal : un portail de gestion bancaire donnant à ses clients — banques, entreprises et ONG — une vue d\u2019ensemble de leurs transactions, versements, distributeurs, marchands et clients. Le stage a porté sur la restructuration et la refonte de ce portail.',
      ]}
      constraints="architecture backend bancaire complexe et sensible · montée en compétences Angular en autonomie · données de paiement (environnement de test)"
      sections={[
        {
          heading: 'Vue Opérations',
          body: "Première mission : créer la vue Opérations — tableau des opérations avec filtres, tri ascendant et descendant, boutons de rechargement et de nettoyage, pagination. Développement en autonomie côté HTML/TypeScript, puis appropriation de l'architecture backend : contrôleur (endpoints HTTP, sécurité, validation), service (logique métier), mapper (DTO ↔ entités) et repository (requêtes personnalisées) — avec l'adoption progressive des bonnes pratiques, comme l'implantation de la logique métier dans un service dédié.",
          images: [
            {
              src: famocoOperations,
              alt: 'Vue Opérations du portail Famoco Pay : tableau des transactions avec filtres par identifiant, statut, montant, commission et date (données de test)',
              caption: 'Vue Opérations du portail (données de test)',
            },
          ],
        },
        {
          heading: 'Vue Payout & versements',
          body: "Conception de la vue Payout : identifiant, date de création, client, montants brut et net, commission, fonds restants et colonne d'actions. Un script SQL génère la colonne montant net (brut − commission) ; un bouton « voir les opérations liées » relie chaque versement à ses opérations via les routes backend ; l'envoi automatique d'un e-mail au client inclut un fichier CSV du versement en pièce jointe.",
          images: [
            {
              src: famocoPayout,
              alt: 'Vue Payout du portail Famoco Pay : tableau des versements avec identifiant, date, montants et commission (versements de test)',
              caption: 'Vue Payout : versements de test',
            },
          ],
        },
        {
          heading: 'Export Excel et architecture',
          body: "Mise en place d'un bouton d'export Excel pour les clients n'ayant pas reçu l'e-mail : réutilisation du code de construction du CSV et calculs complémentaires (pourcentage de commission), avec le choix du mapping — généré automatiquement via MapStruct ou réalisé manuellement. La restitution des résultats devant le responsable technique a conclu le stage.",
          images: [
            {
              src: famocoArchi,
              alt: "Schéma d'architecture de la vue Opération : table PostgreSQL, entités et repository, services, DTO et mappers côté Java Spring, composants Angular côté frontend",
              caption: 'Architecture de la vue Opération — Java Spring & Angular',
            },
          ],
        },
      ]}
      stats={[
        { value: '400+', label: 'clients desservis par Famoco Pay Portal' },
        { value: 'CSV + Excel', label: 'exports automatisés des versements' },
      ]}
      analysis="Stack Angular (composants, services, modules) et Java Spring (contrôleur, service, mapper, repository), conteneurs Docker et base PostgreSQL en local, pilotage Jira et revue de code collaborative via Gerrit. Compréhension concrète d'une architecture bancaire en couches et de ses exigences de sécurité."
    />
  )
}
