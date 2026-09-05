type Accent = 'green' | 'cyan'

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  accent: Accent
  /** Lien interne vers une page détaillée (ex : '#/prd') */
  link?: string
}

const PROJECTS: Project[] = [
  {
    title: 'ECAMBOT',
    category: 'Robot autonome',
    description:
      "Développement d'un robot autonome avec algorithme de planification de trajectoire et collecte de métriques capteurs en temps réel.",
    tags: ['Python', 'OpenCV', 'Arduino', 'Dijkstra', 'I2C'],
    accent: 'green',
  },
  {
    title: 'PRD',
    category: 'Automatisation IA',
    description:
      'Automatisation documentaire avec workflow n8n sur Docker, utilisant un agent IA (Mistral) pour le traitement PDF/Excel et la génération de rapports.',
    tags: ['n8n', 'Docker', 'Mistral AI', 'OCR'],
    accent: 'cyan',
    link: '#/prd',
  },
  {
    title: 'Centreon',
    category: 'Supervision réseau',
    description:
      "Installation et configuration de l'outil de supervision Centreon pour le monitoring d'un réseau virtuel, collecte de métriques et analyse de performance via dashboard.",
    tags: ['Docker', 'Kubernetes', 'Rainmeter'],
    accent: 'green',
  },
  {
    title: 'PAM',
    category: 'IA · Smart Farming',
    description:
      'Analyse multimodale du comportement de vaches laitières (dataset MMCOWS) : classification de 7 comportements par LSTM/CNN-LSTM et détection de profils atypiques.',
    tags: ['LSTM', 'CNN-LSTM', 'Random Forest', 'Feature Engineering'],
    accent: 'cyan',
    link: '#/pam',
  },
]

// Classes statiques par accent (requis par Tailwind pour ne pas rater les classes au build)
const ACCENT_STYLES: Record<
  Accent,
  { icon: string; hoverBorder: string; hoverShadow: string }
> = {
  green: {
    icon: 'text-neon-green',
    hoverBorder: 'hover:border-neon-green/50',
    hoverShadow: 'hover:shadow-[0_0_30px_rgba(0,255,157,0.10)]',
  },
  cyan: {
    icon: 'text-neon-cyan',
    hoverBorder: 'hover:border-neon-cyan/50',
    hoverShadow: 'hover:shadow-[0_0_30px_rgba(0,179,255,0.10)]',
  },
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projets" className="scroll-mt-24 py-20">
      {/* Titre de section façon invite de commande */}
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-mono text-xl font-bold text-white sm:text-2xl">
          <span className="text-neon-green">$</span> ls ./projets
        </h2>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => {
          const accent = ACCENT_STYLES[project.accent]
          const cardClasses = `group flex flex-col rounded-lg border border-line bg-surface/60 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${accent.hoverBorder} ${accent.hoverShadow}`

          const cardContent = (
            <>
              <div className="mb-5 flex items-start justify-between">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-md border border-line bg-base ${accent.icon} transition-transform duration-300 group-hover:-translate-y-0.5`}
                >
                  <TerminalIcon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-muted/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-mono text-lg font-bold text-white">
                {project.title}
                <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  {project.category}
                </span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-fg/80">
                {project.description}
              </p>

              {project.link && (
                <p className="mt-4 font-mono text-xs font-semibold text-violet-500 transition-colors duration-200 group-hover:text-neon-cyan">
                  <span aria-hidden="true">→</span> voir la case study
                </p>
              )}

              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-line bg-base/80 px-2 py-1 font-mono text-[11px] text-muted transition-colors duration-200 hover:border-neon-green/50 hover:text-neon-green"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </>
          )

          return project.link ? (
            <a key={project.title} href={project.link} className={cardClasses}>
              {cardContent}
            </a>
          ) : (
            <article key={project.title} className={cardClasses}>
              {cardContent}
            </article>
          )
        })}
      </div>
    </section>
  )
}
