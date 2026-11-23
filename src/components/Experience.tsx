import famocoPayout from '../assets/case-studies/famoco-payout.png'
import orangeCarto from '../assets/case-studies/orange-carto.png'
import ouestpackSsl from '../assets/case-studies/ouestpack-ssl.png'
import synericMaquette from '../assets/case-studies/syneric-maquette.jpg'
import workawayChantier from '../assets/case-studies/workaway-04.jpg'
import CaseStudyThumb from './CaseStudyThumb'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  tags: string[]
  current?: boolean
  caseStudy?: { href: string; label: string }
  image?: string
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Stagiaire ingénieur réseaux et informatique',
    company: 'Orange Innovation',
    location: 'Lannion',
    period: 'Mars — Sept. 2026',
    caseStudy: { href: '#/orange', label: 'Orange Innovation' },
    image: orangeCarto,
    bullets: [
      "Conception d'une architecture de mesure de performance réseau (latence, gigue, pertes) via les protocoles TWAMP, STAMP, IOAM et MPLS.",
      "Création de scripts Shell pour l'injection de paquets MPLS bruts (hexadécimal) et développement de scripts AWK pour le parsing de captures tcpdump.",
      "Exploitation du protocole ISIS pour la cartographie automatique du réseau et implémentation d'une IHM dynamique affichant le parcours des paquets en temps réel.",
      "Conteneurisation Alpine (ratio 40:1), tuning système (chrt, précision à 24 µs) et validation des perturbations sur équipements Cisco, Juniper, Nokia, Arista et simulateur Anue.",
    ],
    tags: [
      'Shell',
      'AWK',
      'MPLS',
      'TWAMP',
      'STAMP',
      'IOAM',
      'ISIS',
      'Alpine',
      'Cisco/Juniper/Nokia/Arista',
    ],
  },
  {
    role: 'Stagiaire développeur Full-Stack',
    company: 'Famoco',
    location: 'Rennes',
    period: 'Juin — Sept. 2025',
    caseStudy: { href: '#/famoco', label: 'Famoco' },
    image: famocoPayout,
    bullets: [
      "Développement du portail Famoco Pay Portal (400+ clients) : gestion des transactions, réseaux de distribution, marchands et clients.",
      "Conception d'IHM en Angular avec architecture modulaire : composants personnalisés et services dédiés (HTML, TypeScript, SCSS).",
      'Développement backend en Java Spring : contrôleurs, services, DAO, DTO, mappeurs et intégration de bases de données Dockerisées.',
      "Collecte et analyse de métriques système (ESXi, Smart-Implant, ZigBee, Jeedom) pour la supervision d'infrastructures industrielles (cuves de solvant, contrôle de charge de véhicules électriques, salle serveurs).",
    ],
    tags: ['Angular', 'TypeScript', 'Java Spring', 'Docker', 'SCSS', 'ZigBee'],
  },
  {
    role: 'Volontaire en construction durable',
    company: 'Workaway',
    location: 'Aarschot, Belgique',
    period: 'Juin — Août 2024',
    caseStudy: { href: '#/workaway', label: 'Workaway' },
    image: workawayChantier,
    bullets: [
      'Chantier bénévole international : moulage ciment, soudure, charpente bois et isolation en paille.',
      'Immersion internationale et pratique de chantier : travail manuel en équipe pluriculturelle.',
      "Mise en pratique de principes d'ingénierie durable et de low-tech dans un contexte réel.",
    ],
    tags: ['Éco-construction', 'Travail manuel', 'Low-tech'],
  },
  {
    role: 'Stagiaire en automatisation industrielle IoT et virtualisation',
    company: 'Syneric',
    location: 'Perros-Guirec',
    period: 'Janv. — Févr. 2022',
    caseStudy: { href: '#/syneric', label: 'Syneric' },
    image: synericMaquette,
    bullets: [
      "Benchmark de deux solutions de supervision installées sur VM d'un hôte ESXi (GLPI sur Ubuntu, Jeedom sur Debian) : Jeedom retenu pour le pilotage des modules connectés.",
      "Conception et mise en production du suivi des cuves de solvant : Smart-Implant Z-Wave, schéma électrique, maquette et alertes mail selon le niveau — en remplacement de l'ancien système de lampes atelier.",
      "Supervision de la salle serveurs (température, détection de présence, alertes SMTP) et remontée de la pointeuse à badges iSurpass dans Jeedom avec graphiques et documentation d'utilisation.",
      "Contrôle de la recharge des véhicules électriques par lecteur de badges piloté par Jeedom, visant la réduction des coûts d'électricité de l'entreprise.",
    ],
    tags: ['Jeedom', 'ESXi', 'Z-Wave', 'Smart-Implant', 'iSurpass', 'GLPI', 'Virtualisation'],
  },
  {
    role: 'Stagiaire technicien réseau et cybersécurité',
    company: 'Ouest Pack',
    location: 'Perros-Guirec',
    period: 'Mai — Juin 2021',
    caseStudy: { href: '#/ouestpack', label: 'Ouest Pack' },
    image: ouestpackSsl,
    bullets: [
      'Installation, mise à jour et mise en service du pare-feu Stormshield : connectivité Internet/poste, filtrage SSL et URL, plages horaires sur les règles de filtrage.',
      "Personnalisation d'une page de blocage HTML pour les sites indésirables et notification automatique des alarmes du boîtier par SMTP.",
      "Validation de l'antivirus du boîtier via une VM Windows 10 sous VirtualBox, puis déploiement du gestionnaire de mots de passe KeePass (proposition personnelle).",
      'Prise en main de la surveillance réseau et de la gestion d\u2019inventaire (IpScanner, Wireshark, Cisco Packet Tracer) ; configuration de la flotte de climatiseurs Panasonic via Comfort Cloud.',
    ],
    tags: ['Stormshield', 'Filtrage SSL/URL', 'VirtualBox', 'KeePass', 'Wireshark', 'Cisco Packet Tracer'],
  },
]

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function Experience() {
  return (
    <section id="experiences" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead index="03" title="Expériences" />

        <ol className="relative ml-2 border-l border-line">
          {EXPERIENCES.map((item) => (
            <li key={item.company} className="relative pb-14 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent"
              />
              <Reveal className="flex items-stretch gap-6">
                <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {item.period}
                  </p>
                  {item.current && (
                    <span className="rounded-full bg-success-soft px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-success">
                      En cours
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{item.role}</h3>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {item.company}
                  <span className="font-normal text-muted"> · {item.location}</span>
                </p>

                <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-body">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)}>{bullet}</li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-ice-soft px-2.5 py-1 font-mono text-[11px] text-ink"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {item.caseStudy && (
                  <a
                    href={item.caseStudy.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:underline"
                  >
                    Voir l&rsquo;étude de cas
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                </div>
                {item.caseStudy && item.image && (
                  <CaseStudyThumb src={item.image} href={item.caseStudy.href} blend="paper" />
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
