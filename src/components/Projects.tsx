import Reveal from './Reveal'
import SectionHead from './SectionHead'

function CpuIcon({ className }: { className?: string }) {
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
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2" />
    </svg>
  )
}

function WorkflowIcon({ className }: { className?: string }) {
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
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h4a2 2 0 0 1 2 2v7" />
      <path d="M15 18h-2a2 2 0 0 1-2-2V9" />
    </svg>
  )
}

function GaugeIcon({ className }: { className?: string }) {
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
      <path d="M12 15l4.5-4.5" />
      <path d="M4 15a8 8 0 1 1 16 0" />
      <circle cx="12" cy="15" r="1.5" />
    </svg>
  )
}

function ActivityIcon({ className }: { className?: string }) {
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
      <polyline points="3 12 7 12 10 5 14 19 17 12 21 12" />
    </svg>
  )
}

function ServerIcon({ className }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
      <line x1="7" y1="17" x2="7.01" y2="17" />
    </svg>
  )
}

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

interface Project {
  title: string
  category: string
  description: string
  result: string
  tags: string[]
  icon: (props: { className?: string }) => React.JSX.Element
  caseStudy?: string
}

const PROJECTS: Project[] = [
  {
    title: 'ECAMBOT',
    category: 'Robotique & vision',
    description:
      "Développement d'un robot autonome avec algorithme de planification de trajectoire et collecte de métriques capteurs en temps réel.",
    result: 'Navigation autonome avec traitement des capteurs en temps réel.',
    tags: ['Python', 'OpenCV', 'Arduino', 'I2C', 'Dijkstra'],
    icon: CpuIcon,
  },
  {
    title: 'PRD',
    category: 'IA Agents',
    description:
      "Conception d'un workflow d'orchestration d'agents IA pour l'extraction de données financières et la génération de rapports conformes AMF.",
    result: 'Génération complète d\u2019un rapport en 3–4 min, contre plusieurs heures manuelles.',
    tags: ['n8n', 'Docker', 'Mistral AI', 'OCR', 'IA Agents', 'HTML Generation'],
    icon: WorkflowIcon,
    caseStudy: '#/prd',
  },
  {
    title: 'Centreon',
    category: 'Monitoring & infra',
    description:
      "Installation et configuration de l'outil de supervision Centreon pour le monitoring d'un réseau virtuel, collecte de métriques et analyse de performance via dashboard.",
    result: 'Supervision complète d\u2019un réseau virtuel avec dashboards.',
    tags: ['Centreon', 'Docker', 'Kubernetes', 'Rainmeter'],
    icon: GaugeIcon,
  },
  {
    title: 'PAM',
    category: 'IA · Smart Farming',
    description:
      'Analyse multimodale du comportement de vaches laitières (dataset MMCOWS) : classification de 7 comportements par LSTM/CNN-LSTM et détection de profils atypiques.',
    result: 'Macro F1 0.74 (CNN-LSTM), rappel marche passé de 0.15 à 0.71.',
    tags: [
      'Machine Learning',
      'CNN-LSTM',
      'Random Forest',
      'Feature Engineering',
      'Time Series',
      'Smart Farming',
    ],
    icon: ActivityIcon,
    caseStudy: '#/pam',
  },
  {
    title: 'M2L',
    category: 'Virtualisation & supervision',
    description:
      "Virtualisation de la ferme de serveurs de la Maison des Ligues de Lorraine (hyperviseur ESXi, passerelle pfSense) et supervision PRTG de l'infrastructure.",
    result: 'Ferme de serveurs virtualisée et supervisée : disponibilité, disque, CPU et RAM par sondes PRTG.',
    tags: ['VMware ESXi', 'pfSense', 'PRTG', 'SNMP', 'Windows Server 2016', 'Packet Tracer'],
    icon: ServerIcon,
    caseStudy: '#/m2l',
  },
]

export default function Projects() {
  return (
    <section id="projets" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead index="04" title="Projets" />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const Icon = project.icon
            return (
              <Reveal
                key={project.title}
                className="flex flex-col rounded-xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(22,56,83,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(22,56,83,0.06),0_12px_28px_rgba(22,56,83,0.10)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    {project.category}
                  </p>
                  <Icon className="h-5 w-5 shrink-0 text-accent" />
                </div>

                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{project.description}</p>

                <div className="mt-4 rounded-lg border border-line bg-ice-soft/50 px-3.5 py-2.5">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                    Résultat
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{project.result}</p>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-ice-soft px-2.5 py-1 font-mono text-[11px] text-ink"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.caseStudy && (
                  <a
                    href={project.caseStudy}
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent transition-colors duration-200 hover:underline"
                  >
                    Voir l&rsquo;étude de cas
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
