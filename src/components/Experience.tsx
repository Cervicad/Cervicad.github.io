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
    description:
      "Collecte et analyse de métriques système (ESXi, Smart-Implant, ZigBee et Jeedom) pour la supervision d'infrastructures industrielles : cuves de solvant, contrôle de charge de véhicules électriques et salle serveurs, via un tableau de bord.",
    tags: ['ESXi', 'ZigBee', 'Jeedom'],
    accent: 'cyan',
  },
  {
    role: 'Stagiaire technicien réseau et cybersécurité',
    company: 'Ouest Pack',
    location: 'Perros-Guirec',
    period: 'mai — août 2021',
    description:
      "Surveillance réseau, gestion d'inventaire et déploiement d'une baie de stockage (IpScanner, Wireshark, Cisco Packet Tracer) ; mise en production d'un pare-feu Stormshield.",
    tags: ['Stormshield', 'Wireshark', 'Cisco Packet Tracer'],
    accent: 'green',
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
          </li>
        ))}
      </ol>
    </section>
  )
}
