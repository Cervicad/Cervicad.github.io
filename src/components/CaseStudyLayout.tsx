import Reveal from './Reveal'

export interface CaseStudyImage {
  src: string
  alt: string
  caption: string
}

export interface CaseStudySection {
  heading: string
  body: string
  images?: CaseStudyImage[]
}

export interface CaseStudyStat {
  value: string
  label: string
}

export interface CaseStudyLayoutProps {
  eyebrow: string
  title: string
  subtitle: string
  meta: string[]
  context: string[]
  constraints: string
  sections: CaseStudySection[]
  stats: CaseStudyStat[]
  analysis: string
  nextSteps?: string[]
}

function WarningIcon({ className }: { className?: string }) {
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
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

/** Layout commun des études de cas : breadcrumb, en-tête, contexte, solution, résultats, suite. */
export default function CaseStudyLayout({
  eyebrow,
  title,
  subtitle,
  meta,
  context,
  constraints,
  sections,
  stats,
  analysis,
  nextSteps,
}: CaseStudyLayoutProps) {
  // Numérotation continue des figures sur toute l'étude de cas.
  const figureOffsets = new Map<string, number>()
  let runningFigure = 0
  for (const section of sections) {
    figureOffsets.set(section.heading, runningFigure)
    runningFigure += section.images?.length ?? 0
  }
  return (
    <main>
      {/* En-tête case study : bandeau sobre */}
      <div className="border-b border-line bg-card">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <nav aria-label="Fil d'Ariane" className="font-mono text-[11px] text-muted">
            <a href="#top" className="transition-colors duration-200 hover:text-accent">
              Portfolio
            </a>
            <span aria-hidden="true" className="mx-1.5">
              /
            </span>
            <span className="text-body">{title}</span>
          </nav>

          <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-body">{subtitle}</p>
          <p className="mt-4 text-sm text-muted">{meta.join(' · ')}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-14 px-6 py-12 md:py-16">
        {/* Le contexte & le problème */}
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Le contexte &amp; le problème
          </h2>
          <div className="mt-4 border-l-2 border-accent bg-ice-soft/40 py-4 pl-5 pr-4 dark:bg-ice-soft/30">
            <div className="flex gap-3">
              <WarningIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
              <div className="space-y-3 text-sm leading-relaxed text-body md:text-base">
                {context.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 font-mono text-xs text-muted"># contraintes : {constraints}</p>
        </Reveal>

        {/* La solution technique */}
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink">La solution technique</h2>
          <div className="mt-6 space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h3 className="font-display text-lg font-semibold text-ink">{section.heading}</h3>
                <p className="mt-2 leading-relaxed text-body">{section.body}</p>
                {section.images?.map((image, imageIndex) => (
                  <figure key={image.src} className="mt-4">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full overflow-hidden rounded-xl border border-line bg-card"
                    />
                    <figcaption className="mt-2 font-mono text-[11px] text-muted">
                      fig. {String((figureOffsets.get(section.heading) ?? 0) + imageIndex + 1).padStart(2, '0')} — {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Résultats & impact */}
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink">Résultats &amp; impact</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-line bg-card p-5">
                <p className="font-display text-[28px] font-bold leading-tight tracking-tight text-accent md:text-[32px]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-relaxed text-body">{analysis}</p>
        </Reveal>

        {/* Suite du projet */}
        {nextSteps && nextSteps.length > 0 && (
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Suite du projet</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed text-body">
              {nextSteps.map((step) => (
                <li key={step.slice(0, 40)}>{step}</li>
              ))}
            </ul>
          </Reveal>
        )}

        <div className="flex justify-center border-t border-line pt-10">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 text-sm font-semibold text-body transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            ← Retour au portfolio
          </a>
        </div>
      </div>
    </main>
  )
}
