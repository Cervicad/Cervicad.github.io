interface Degree {
  title: string
  detail?: string
  school: string
  location: string
  period: string
  current?: boolean
}

const DEGREES: Degree[] = [
  {
    title: "Diplôme d'Ingénieur généraliste",
    detail: 'Module IDI — Ingénierie du développement informatique',
    school: 'ECAM Louis de Broglie',
    location: 'Rennes',
    period: '2023 — 2026',
    current: true,
  },
  {
    title: 'ATS CGPE',
    detail: 'Classe préparatoire Adaptation Technicien Supérieur',
    school: 'Lycée Félix Le Dantec',
    location: 'Lannion',
    period: '2022 — 2023',
  },
  {
    title: 'BTS SIO',
    school: 'Pôle Supérieur La Salle',
    location: 'Rennes',
    period: '2020 — 2022',
  },
  {
    title: 'Baccalauréat Scientifique SVT',
    school: 'Lycée Saint-Joseph - Bossuet',
    location: 'Lannion',
    period: '2020',
  },
]

const CERTIFICATIONS = [
  { name: 'TOEIC', detail: 'score 905/990' },
  { name: 'Certification Voltaire', detail: 'niveau professionnel' },
  { name: 'Permis B', detail: 'véhiculé' },
]

const LANGUAGES = [
  { name: 'Français', detail: 'natif' },
  { name: 'Anglais', detail: 'professionnel' },
  { name: 'Espagnol', detail: 'intermédiaire' },
  { name: 'Chinois', detail: 'intermédiaire' },
]

function InfoList({ items }: { items: { name: string; detail: string }[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 font-mono text-sm"
        >
          <span className="font-semibold text-white">{item.name}</span>
          <span className="text-muted">{item.detail}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Education() {
  return (
    <section id="diplomes" className="scroll-mt-24 py-20">
      {/* Titre de section façon invite de commande */}
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-mono text-xl font-bold text-white sm:text-2xl">
          <span className="text-neon-green">$</span> cat ./diplomes.log
        </h2>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent"
        />
      </div>

      {/* Parcours scolaire en timeline */}
      <ol className="ml-2 border-l border-line">
        {DEGREES.map((degree) => (
          <li key={degree.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-4 border-base bg-neon-cyan shadow-[0_0_12px_rgba(0,179,255,0.6)]"
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="font-mono text-base font-bold text-white sm:text-lg">
                {degree.title}
              </h3>
              {degree.current && (
                <span className="rounded-sm border border-neon-green/40 bg-neon-green/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-neon-green">
                  en cours
                </span>
              )}
            </div>

            {degree.detail && (
              <p className="mt-1 text-sm text-fg/80">{degree.detail}</p>
            )}

            <p className="mt-2 font-mono text-sm text-muted">
              <span className="text-neon-cyan">{degree.school}</span> ·{' '}
              {degree.location} · {degree.period}
            </p>
          </li>
        ))}
      </ol>

      {/* Certifications & langues */}
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-line-strong">
          <h3 className="font-mono text-sm font-bold text-white">
            <span className="text-muted">#</span> certifications
          </h3>
          <InfoList items={CERTIFICATIONS} />
        </div>

        <div className="rounded-lg border border-line bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-line-strong">
          <h3 className="font-mono text-sm font-bold text-white">
            <span className="text-muted">#</span> langues
          </h3>
          <InfoList items={LANGUAGES} />
        </div>
      </div>
    </section>
  )
}
