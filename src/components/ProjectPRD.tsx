import { useEffect } from 'react'
import { Footer } from '../App'

// ---------------------------------------------------------------------------
// Données de la case study
// ---------------------------------------------------------------------------

const HERO_TAGS = [
  'IA Agents',
  'Automatisation',
  'n8n',
  'Docker',
  'OCR',
  'Parsing',
  'HTML Generation',
]

const META = [
  { label: 'contexte', value: 'ECAM Louis de Broglie · Forum PRD mars 2026' },
  { label: 'équipe', value: 'Kevin Tallagrand & Antoine Jamet' },
  { label: 'délai', value: '6 semaines · prototype validé sur documents réels' },
]

const SOLUTION_STEPS = [
  {
    number: '01',
    title: 'Extraction Hétérogène',
    description:
      "Parsing de documents financiers non standardisés (DIC, Term Sheets) via OCR : conversion de PDF conçus pour une lecture humaine en texte exploitable par des agents.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Orchestration d’Agents IA',
    description:
      'Coordination d’agents IA spécialisés — un agent par bloc du rapport — pour une extraction structurée et progressive. Garde-fous de cohérence et itérations limitées pour fiabiliser chaque section.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Génération Dynamique',
    description:
      'Organisation des données extraites en variables structurées, puis injection dynamique dans un template HTML (placeholders) pour produire le rapport réglementaire « Phoenix ».',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
]

const RESULTS = [
  {
    headline: 'Faisabilité Prouvée',
    description:
      'Extraction fiable pour les documents bien structurés, opérationnelle sur plusieurs émetteurs et formats — démontrant la robustesse de l’approche multi-agents.',
  },
  {
    headline: '3 à 4 min',
    description:
      'Temps de génération complet d’un rapport, contre plusieurs heures de traitement manuel — réduction drastique du temps de production.',
  },
]

const ROADMAP = [
  'Extraction plus fine des informations (tableaux complexes, mises en page hétérogènes).',
  'Ajout de contrôles qualité explicites sur les données extraites.',
  'Amélioration du rendu final des rapports générés.',
  'Industrialisation via une architecture dédiée : scalabilité et intégration de nouvelles sources de données.',
]

// ---------------------------------------------------------------------------
// Sous-composants visuels
// ---------------------------------------------------------------------------

/** Titre de section avec dégradé IA (cyan → violet) */
function SectionTitle({ prompt, children }: { prompt: string; children: string }) {
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
function BackToPortfolio() {
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
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5">
        ←
      </span>
      cd ~/portfolio
    </a>
  )
}

// ---------------------------------------------------------------------------
// Page : Case Study PRD
// ---------------------------------------------------------------------------

export default function ProjectPRD() {
  // La page s'ouvre toujours en haut (accès direct via #/prd ou retour nav)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-base font-sans text-fg">
      {/* Barre supérieure : retour portfolio */}
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
              ~/portfolio/prd
            </span>
          </a>
          <BackToPortfolio />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* ---------------------------------------------------------------- */}
        {/* A. Hero Section                                                   */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden pb-16 pt-20 sm:pt-28">
          <div
            aria-hidden="true"
            className="absolute -top-24 right-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/5 top-32 -z-10 h-64 w-64 rounded-full bg-neon-cyan/10 blur-[110px]"
          />

          <p className="font-mono text-sm text-muted">
            <span className="text-violet-500">~/prd</span>
            <span className="text-muted/60">$</span> cat case_study.md
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Automatisation de Rapports Réglementaires par{' '}
            <span className="bg-gradient-to-r from-neon-cyan to-violet-500 bg-clip-text text-transparent">
              IA
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/85 sm:text-lg">
            Conception d’un workflow d’orchestration d’agents IA pour
            l’extraction de données financières et la génération de rapports
            conformes AMF.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {HERO_TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line-strong bg-base/80 px-3 py-1 font-mono text-[11px] text-fg transition-colors duration-200 hover:border-neon-cyan/60 hover:text-neon-cyan"
              >
                {tag}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-4 border-t border-line/60 pt-6 sm:grid-cols-3">
            {META.map((meta) => (
              <div key={meta.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {meta.label}
                </dt>
                <dd className="mt-1 text-sm text-fg/85">{meta.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* B. Le Contexte & Le Problème                                     */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-16">
          <SectionTitle prompt="$">le contexte &amp; le problème</SectionTitle>

          <div className="rounded-lg border border-line border-l-4 border-l-orange-500 bg-surface/60 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
              ⚠ défi réglementaire
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg/90">
              Les acteurs du secteur financier doivent produire des rapports
              d’adéquation conformes aux exigences de l’
              <span className="font-semibold text-white">AMF</span>. Ces
              documents sont construits manuellement à partir de sources
              hétérogènes (DIC, Term Sheets, données internes), rendant le
              processus chronophage, peu évolutif et faiblement automatisé.
            </p>
            <p className="mt-4 font-mono text-xs text-muted">
              # contraintes : documents PDF non standardisés · données
              financières confidentielles (RGPD)
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* C. La Solution Technique                                         */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-16">
          <SectionTitle prompt="$">la solution technique</SectionTitle>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SOLUTION_STEPS.map((step) => (
              <article
                key={step.number}
                className="group flex flex-col rounded-lg border border-line bg-surface/60 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.10)]"
              >
                <div className="mb-5 flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-line bg-base text-neon-cyan transition-transform duration-300 group-hover:-translate-y-0.5">
                    {step.icon && <span className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5">{step.icon}</span>}
                  </span>
                  <span className="bg-gradient-to-r from-neon-cyan to-violet-500 bg-clip-text font-mono text-xs text-transparent">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-mono text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/80">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* D. Résultats & Impact                                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-16">
          <SectionTitle prompt="$">résultats &amp; impact</SectionTitle>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {RESULTS.map((result) => (
              <article
                key={result.headline}
                className="group rounded-lg border border-line bg-surface/60 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-neon-green/40 hover:shadow-[0_0_30px_rgba(0,255,157,0.08)]"
              >
                <p className="font-mono text-2xl font-bold text-neon-green sm:text-3xl">
                  {result.headline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg/80">
                  {result.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* E. Améliorations Futures (Roadmap)                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-16">
          <SectionTitle prompt="$">améliorations futures</SectionTitle>

          <ul className="space-y-4">
            {ROADMAP.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-line bg-surface/60 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-neon-green/40"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 font-mono font-bold text-neon-green"
                >
                  &gt;
                </span>
                <span className="text-sm leading-relaxed text-fg/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center">
            <BackToPortfolio />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
