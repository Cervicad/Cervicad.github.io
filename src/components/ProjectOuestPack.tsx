import { useEffect } from 'react'
import { Footer } from '../App'
import opReglesImg from '../assets/stages/op_regles.png'
import opSslImg from '../assets/stages/op_ssl.png'
import {
  BackToPortfolio,
  CaseStudyHeader,
  Figure,
  SectionTitle,
} from './case-study-ui'

// ---------------------------------------------------------------------------
// Données de la case study
// ---------------------------------------------------------------------------

const HERO_TAGS = [
  'Stormshield',
  'Pare-feu',
  'Filtrage SSL/URL',
  'SMTP',
  'KeePass',
  'VirtualBox',
]

const META = [
  { label: 'contexte', value: 'BTS SIO (1ʳᵉ année) · Pôle Supérieur La Salle, Rennes' },
  { label: 'période', value: '25 mai — 25 juin 2021 · 5 semaines' },
  { label: 'entreprise', value: 'Ouest Pack · Perros-Guirec (22)' },
]

const SOLUTION_STEPS = [
  {
    number: '01',
    title: 'Déploiement du Boîtier',
    description:
      "Installation physique et graphique du pare-feu SN210 : adressage, DHCP, montée de version 3.1.2 → 4.2.2, connectivité via routeur Draytek et import du certificat de l'autorité dans les navigateurs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Politique de Filtrage',
    description:
      'Mise en place du proxy SSL (interception, déchiffrement, faux certificats), filtrage URL en HTTP, gestion de l’ordre des règles, plages horaires et page de blocage HTML personnalisée.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Durcissement & Outils',
    description:
      'Notification automatique des alarmes par SMTP, validation de l’antivirus du boîtier via une VM Windows 10 sous VirtualBox, déploiement du gestionnaire de mots de passe KeePass (proposition personnelle).',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

const RESULTS = [
  {
    headline: '13 missions livrées',
    description:
      'Du branchement du boîtier à la notification SMTP, treize missions concrètes menées en cinq semaines, documentées dans le compte rendu de stage.',
  },
  {
    headline: 'Vers la production',
    description:
      'Le pare-feu validé en phase de test finale avec une mise en production planifiée : protection du réseau, des employés et de la clientèle contre les attaques extérieures et les usages illicites.',
  },
]

const ROADMAP = [
  'Passage complet du pare-feu en production sur le réseau de l’entreprise.',
  'Affinage de la politique de filtrage : gestion des exceptions et retours d’usage des employés.',
  'Généralisation du gestionnaire de mots de passe KeePass à l’ensemble des comptes.',
  'Supervision continue des alarmes SMTP et veille de version du boîtier.',
]

// ---------------------------------------------------------------------------
// Page : Case Study Ouest Pack
// ---------------------------------------------------------------------------

export default function ProjectOuestPack() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-base font-sans text-fg">
      <CaseStudyHeader path="ouestpack" />

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
            <span className="text-violet-500">~/stages/ouestpack</span>
            <span className="text-muted/60">$</span> cat case_study.md
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Sécurisation d'un Réseau d'Entreprise par{' '}
            <span className="bg-gradient-to-r from-neon-cyan to-violet-500 bg-clip-text text-transparent">
              Pare-feu
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/85 sm:text-lg">
            Déploiement complet d'un pare-feu Stormshield SN210 chez Ouest Pack,
            transformateur de films d'emballage pour l'industrie agroalimentaire :
            installation, politique de filtrage SSL/URL et durcissement de la
            sécurité, en cinq semaines.
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
              ⚠ exposition du réseau d'une pme
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg/90">
              Ouest Pack (31 salariés, 40+ départements couverts) n'avait aucune
              protection périmétrique : consultation possible de sites à
              caractère illicite engageant <span className="font-semibold text-white">juridiquement
              l'entreprise</span>, et exposition directe du réseau aux attaques
              extérieures. La mission : installer et configurer un boîtier de
              sécurité Stormshield pour protéger le réseau, les employés et la
              clientèle — sans couper l'activité.
            </p>
            <p className="mt-4 font-mono text-xs text-muted">
              # contraintes : 5 semaines · matériel en production différé ·
              certificats SSL à déployer sur les postes
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
                    {step.icon && (
                      <span className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5">
                        {step.icon}
                      </span>
                    )}
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

          <Figure
            src={opSslImg}
            alt="Schéma pédagogique du filtrage SSL : interception, analyse du certificat et déchiffrement par le proxy"
            label="fig. 01"
            caption="filtrage SSL — interception et déchiffrement des flux HTTPS par le proxy du boîtier"
          />

          <Figure
            src={opReglesImg}
            alt="Table de règles de filtrage Stormshield avec actions passer et déchiffrer, inspections IPS, antivirus et filtrage URL"
            label="fig. 02"
            caption="politique de filtrage en production — règles ordonnées avec inspections IPS, antivirus et URL"
          />
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
          <SectionTitle prompt="$">suite du projet</SectionTitle>

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
