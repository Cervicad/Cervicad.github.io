function DownloadIcon({ className }: { className?: string }) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-navy to-navy-deep">
      {/* Déco sobre : grille technique ice + halo unique — pas de néon */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#c2dcff_1px,transparent_1px),linear-gradient(to_bottom,#c2dcff_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_50%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 -z-10 h-80 w-80 rounded-full bg-ice/10 blur-[120px]"
      />

      <div className="mx-auto flex min-h-[92vh] max-w-3xl flex-col justify-center px-6 py-28">
        <div className="animate-fade-up motion-reduce:animate-none">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-ice">
            Réseaux · Dev · DevSecOps
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-[#fdfdfd] md:text-7xl">
            Kevin Tallagrand
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#fdfdfd] md:text-3xl">
            Ingénieur <span className="text-ice">Réseaux</span> &amp; Développement
          </p>
          <p className="mt-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ice/80">
            Network &amp; Dev Engineer
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c9d6e8]">
            Passionné par la convergence entre <span className="text-ice">infrastructures réseau</span>,
            scripting bas-niveau (<span className="text-ice">Shell/AWK</span>) et méthodologies{' '}
            <span className="text-ice">DevSecOps</span>. Actuellement en fin de stage chez{' '}
            <span className="font-medium text-[#fdfdfd]">Orange Innovation</span>.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/CV_Kevin_Tallagrand.pdf"
              download
              className="inline-flex items-center gap-2.5 rounded-lg bg-ice px-5 py-2.5 text-sm font-semibold text-[#0f2c49] transition-colors duration-200 hover:bg-white"
            >
              <DownloadIcon className="h-4 w-4" />
              Télécharger mon CV
            </a>
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-lg border border-[#c2dcff]/30 px-5 py-2.5 text-sm font-semibold text-[#e8f0fa] transition-colors duration-200 hover:border-ice hover:text-ice"
            >
              Voir mes projets
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 font-mono text-[11px] text-[#c9d6e8]">
            <span>Orange Innovation · Lannion</span>
            <span>Diplômé 2026</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c2dcff]/25 bg-white/5 px-2.5 py-1 text-[#5fd39a]">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#5fd39a]" />
              Ouvert aux opportunités
            </span>
          </div>
        </div>
      </div>

      <a
        href="#a-propos"
        aria-label="Aller à la section À propos"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-ice motion-reduce:hidden"
      >
        <ChevronDownIcon className="h-5 w-5 animate-scroll-hint" />
      </a>
    </section>
  )
}
