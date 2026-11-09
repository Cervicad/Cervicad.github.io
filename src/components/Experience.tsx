type Accent = 'green' | 'cyan'

interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  highlights?: string[]
  description?: string
  tags?: string[]
  accent: Accent
  current?: boolean
  /** Lien interne vers une case study détaillée (ex : '#/syneric') */
  link?: string
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Stagiaire Ingénieur Réseau & IT',
    company: 'Orange Innovation',
    location: 'Lannion',
    period: 'mars — sept. 2026',
    highlights: [
      "Conception d'une architecture de mesure de performance réseau (latence, gigue, pertes) via les protocoles TWAMP, STAMP, IOAM et MPLS.",
      "Création de scripts Shell pour l'injection de paquets MPLS bruts (hexadécimal) et développement de scripts AWK pour le parsing de captures tcpdump.",
      "Exploitation du protocole ISIS pour la cartographie automatique du réseau et implémentation d'une IHM dynamique affichant le parcours des paquets en temps réel.",
      "Conteneurisation Alpine (ratio 40:1), tuning système (chrt, précision à 24 µs) et validation des perturbations sur équipements Cisco, Juniper, Nokia, Arista et simulateur Anue.",
    ],
    tags: ['TWAMP', 'STAMP', 'IOAM', 'MPLS', 'ISIS', 'Shell', 'AWK', 'Alpine'],
    accent: 'green',
    current: true,
  },
  {
    role: 'Stagiaire Développeur Full-Stack',
    company: 'Famoco',
    location: 'Rennes',
    period: 'juin — sept. 2025',
    highlights: [
      "Développement du portail Famoco Pay Portal (400+ clients) : gestion des transactions, réseaux de distribution, marchands et clients.",
      "Conception d'IHM en Angular avec architecture modulaire : composants personnalisés et services dédiés (HTML, TypeScript, SCSS).",
      "Développement backend en Java Spring : contrôleurs, services, DAO, DTO, mappeurs et intégration de bases de données Dockerisées.",
    ],
    tags: ['Angular', 'Java Spring', 'TypeScript', 'Docker'],
    accent: 'cyan',
  },
  {
    role: 'Stagiaire en construction durable',
    company: 'Workaway',
    location: 'Aarschot, Belgique',
    period: 'juin — août 2024',
    description:
      'Chantier bénévole international : moulage ciment, soudure, charpente bois et isolation en paille.',
    accent: 'green',
  },
  {
    role: 'Stagiaire en automatisation industrielle IoT et virtualisation',
    company: 'Syneric',
    location: 'Perros-Guirec',
    period: 'janv. — févr. 2022',
    highlights: [
      "Benchmark de deux solutions de supervision installées sur VM d'un hôte ESXi (GLPI sur Ubuntu, Jeedom sur Debian) : Jeedom retenu pour le pilotage des modules connectés.",
      "Conception et mise en production du suivi des cuves de solvant : Smart-Implant Z-Wave, schéma électrique, maquette et alertes mail selon le niveau — en remplacement de l'ancien système de lampes atelier.",
      "Supervision de la salle serveurs (température, détection de présence, alertes SMTP) et remontée de la pointeuse à badges iSurpass dans Jeedom avec graphiques et documentation d'utilisation.",
      "Contrôle de la recharge des véhicules électriques par lecteur de badges piloté par Jeedom, visant la réduction des coûts d'électricité de l'entreprise.",
    ],
    tags: ['Jeedom', 'Z-Wave', 'GLPI', 'ESXi', 'SMTP'],
    accent: 'cyan',
    link: '#/syneric',
  },
  {
    role: 'Stagiaire technicien réseau et cybersécurité',
    company: 'Ouest Pack',
    location: 'Perros-Guirec',
    period: 'mai — juin 2021',
    highlights: [
      "Installation, mise à jour et mise en service du pare-feu Stormshield : connectivité Internet/poste, filtrage SSL et URL, plages horaires sur les règles de filtrage.",
      "Personnalisation d'une page de blocage HTML pour les sites indésirables et notification automatique des alarmes du boîtier par SMTP.",
      "Validation de l'antivirus du boîtier via une VM Windows 10 sous VirtualBox, puis déploiement du gestionnaire de mots de passe KeePass (proposition personnelle).",
      "Prise en main de la surveillance réseau et de la gestion d'inventaire (IpScanner, Wireshark, Cisco Packet Tracer) ; configuration de la flotte de climatiseurs Panasonic via Comfort Cloud.",
    ],
    tags: ['Stormshield', 'Filtrage SSL/URL', 'SMTP', 'KeePass', 'VirtualBox'],
    accent: 'green',
    link: '#/ouestpack',
  },
]

// Classes statiques par accent (requis par Tailwind pour ne pas rater les classes au build)
const DOT_STYLES: Record<Accent, string> = {
  green: 'bg-neon-green shadow-[0_0_12px_rgba(0,255,157,0.8)]',
  cyan: 'bg-neon-cyan shadow-[0_0_12px_rgba(0,179,255,0.6)]',
}

const COMPANY_STYLES: Record<Accent, string> = {
  green: 'text-neon-green',
  cyan: 'text-neon-cyan',
}

export default function Experience() {
  return (
    <section id="experiences" className="scroll-mt-24 py-20">
      {/* Titre de section façon invite de commande */}
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-mono text-xl font-bold text-white sm:text-2xl">
          <span className="text-neon-green">$</span> cat ./experiences.log
        </h2>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent"
        />
      </div>

      {/* Timeline verticale */}
      <ol className="ml-2 border-l border-line">
        {EXPERIENCES.map((item) => (
          <li key={item.company} className="relative pb-14 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-4 border-base ${DOT_STYLES[item.accent]}`}
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="font-mono text-base font-bold text-white sm:text-lg">
                {item.role}
              </h3>
              {item.current && (
                <span className="rounded-sm border border-neon-green/40 bg-neon-green/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-neon-green">
                  en cours
                </span>
              )}
            </div>

            <p className="mt-2 font-mono text-sm">
              <span
                className={`font-semibold ${COMPANY_STYLES[item.accent]}`}
              >
                {item.company}
              </span>
              <span className="text-muted">
                {' '}
                · {item.location} · {item.period}
              </span>
            </p>

            {item.highlights ? (
              <ul className="mt-3 max-w-2xl space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-relaxed text-fg/80"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-px shrink-0 font-mono ${COMPANY_STYLES[item.accent]}`}
                    >
                      ›
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : (
              item.description && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg/80">
                  {item.description}
                </p>
              )
            )}

            {item.tags && item.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-line bg-base/80 px-2 py-1 font-mono text-[11px] text-muted transition-colors duration-200 hover:border-neon-cyan/50 hover:text-neon-cyan"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            {item.link && (
              <a
                href={item.link}
                className="group/link mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-violet-500 transition-colors duration-200 hover:text-neon-cyan"
              >
                <span aria-hidden="true">→</span> voir la case study
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
