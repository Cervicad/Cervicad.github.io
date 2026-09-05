// Briques visuelles partagées par les pages case study (PRD, PAM…)

/** Titre de section avec dégradé IA (cyan → violet) */
export function SectionTitle({
  prompt,
  children,
}: {
  prompt: string
  children: string
}) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="font-mono text-xl font-bold text-white sm:text-2xl">
        <span className="bg-gradient-to-r from-neon-cyan to-violet-500 bg-clip-text text-transparent">
          {prompt}
        </span>{' '}
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent"
      />
    </div>
  )
}

/** Lien de retour vers le portfolio */
export function BackToPortfolio() {
  return (
    <a
      href="#"
      onClick={(event) => {
        event.preventDefault()
        window.location.hash = ''
        window.scrollTo(0, 0)
      }}
      className="group inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors duration-200 hover:text-neon-green"
    >
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:-translate-x-0.5"
      >
        ←
      </span>
      cd ~/portfolio
    </a>
  )
}

/** Barre supérieure des pages case study : monogramme + chemin + retour */
export function CaseStudyHeader({ path }: { path: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-base/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            window.location.hash = ''
            window.scrollTo(0, 0)
          }}
          aria-label="Retour au portfolio"
          className="font-mono"
        >
          <span className="text-lg font-bold tracking-tight">
            <span className="text-neon-green">[</span>
            <span className="text-white">KT</span>
            <span className="text-neon-green">]</span>
          </span>
          <span className="ml-3 hidden text-xs text-muted sm:inline">
            ~/portfolio/{path}
          </span>
        </a>
        <BackToPortfolio />
      </div>
    </header>
  )
}

/** Figure illustrée avec légende façon capture d'écran */
export function Figure({
  src,
  alt,
  label,
  caption,
}: {
  src: string
  alt: string
  label: string
  caption: string
}) {
  return (
    <figure className="mt-10">
      <div className="overflow-hidden rounded-lg border border-line bg-surface/60 transition-all duration-300 hover:border-neon-cyan/40 hover:shadow-[0_0_30px_rgba(0,179,255,0.08)]">
        <img src={src} alt={alt} loading="lazy" className="w-full" />
      </div>
      <figcaption className="mt-3 font-mono text-xs text-muted">
        <span className="font-semibold text-neon-cyan">{label}</span> — {caption}
      </figcaption>
    </figure>
  )
}
