type Accent = 'green' | 'cyan'

interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  description: string
  tags: string[]
  accent: Accent
  current?: boolean
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Stagiaire Ingénieur Réseau & IT',
    company: 'Orange Innovation',
    location: 'Lannion',
    period: '2026',
    description:
      "Conception d'une architecture de mesure de performance réseau (latence, gigue) via injection de paquets et parsing de captures tcpdump. Validation sur équipements Cisco, Juniper, Nokia, Arista.",
    tags: ['MPLS', 'TWAMP', 'STAMP', 'Shell', 'AWK', 'Alpine'],
    accent: 'green',
    current: true,
  },
  {
    role: 'Stagiaire Développeur Full-Stack',
    company: 'Famoco',
    location: 'Rennes',
    period: '2025',
    description:
      'Développement du portail Famoco Pay Portal (400+ clients) en architecture modulaire. Intégration de bases de données Dockerisées et supervision IoT (Jeedom, ESXi).',
    tags: ['Angular', 'Java Spring', 'Docker', 'TypeScript'],
    accent: 'cyan',
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

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg/80">
              {item.description}
            </p>

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
          </li>
        ))}
      </ol>
    </section>
  )
}
