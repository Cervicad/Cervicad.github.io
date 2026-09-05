import { useEffect } from 'react'
import { Footer } from '../App'
import budgetImg from '../assets/pam/budget.png'
import heatmapImg from '../assets/pam/heatmap.png'
import resultsImg from '../assets/pam/results.png'
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
  'Machine Learning',
  'CNN-LSTM',
  'Random Forest',
  'Feature Engineering',
  'Time Series',
  'Smart Farming',
]

const META = [
  { label: 'contexte', value: 'ECAM Louis de Broglie · janv. — mars 2026' },
  { label: 'équipe', value: 'K. Tallagrand, A. Jamet, B. Girard, B. Ithorotz' },
  { label: 'dataset', value: 'MMCOWS · 16 vaches Holstein · Université du Wisconsin' },
]

const SOLUTION_STEPS = [
  {
    number: '01',
    title: 'Exploration & Corrélations',
    description:
      'Étude exploratoire complète : matrices de corrélation (Pearson), ANOVA et eta², et heatmaps spatiales révélant les « hotspots » comportementaux de l’étable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Feature Engineering',
    description:
      'Quatre itérations de datasets : synchronisation multi-capteurs à 1 Hz, distances aux zones d’intérêt, fenêtres glissantes de 10 s (vitesse lissée, Motion Score). Split par vaches pour garantir la généralisation.',
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
    title: 'Modélisation Comparative',
    description:
      'De la baseline Random Forest à l’hybride CNN-LSTM : le module CNN extrait le « rythme » des signaux d’accélération, le LSTM assure la cohérence temporelle. Sept comportements classifiés.',
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
    headline: 'Macro F1 : 0.74',
    description:
      'Meilleur score global atteint par le CNN-LSTM sur le dataset le plus enrichi (descripteurs spatiaux + temporels), avec un compromis précision/rappel maîtrisé pour la surveillance réelle.',
  },
  {
    headline: 'Rappel marche : 0.15 → 0.71',
    description:
      'Progression du rappel sur la marche entre la baseline Random Forest et le CNN-LSTM (fenêtres de 10 s) ; rappel de 0.93 sur l’abreuvement pour une détection quasi exhaustive des événements critiques.',
  },
]

const BEHAVIOR_STATS = [
  { label: 'Rest', value: '≈ 42 %' },
  { label: 'Activity', value: '≈ 23 %' },
  { label: 'Feeding', value: '≈ 15 %' },
  { label: 'Unknown', value: '≈ 18 %' },
]

const ROADMAP = [
  'Analyse multi-jours pour consolider la détection d’atypismes.',
  'Croisement avec des données physiologiques (température fine, suivis vétérinaires) pour valider les hypothèses.',
  'Exploitation de la modalité caméra (visual_data), restée hors périmètre.',
  'Vers un outil de surveillance comportementale du troupeau en temps réel.',
]

// ---------------------------------------------------------------------------
// Page : Case Study PAM
// ---------------------------------------------------------------------------

export default function ProjectPAM() {
  // La page s'ouvre toujours en haut (accès direct via #/pam ou retour nav)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-base font-sans text-fg">
      {/* Barre supérieure : retour portfolio */}
      <CaseStudyHeader path="pam" />

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
            <span className="text-violet-500">~/pam</span>
            <span className="text-muted/60">$</span> cat case_study.md
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Analyse{' '}
            <span className="bg-gradient-to-r from-neon-cyan to-violet-500 bg-clip-text text-transparent">
              Multimodale
            </span>{' '}
            du Comportement de Vaches Laitières
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/85 sm:text-lg">
            Classification de sept comportements bovins à partir de capteurs
            hétérogènes (localisation UWB, accélérométrie, posture) et détection
            de profils atypiques au sein du troupeau — un projet de{' '}
            <span className="font-medium text-white">Smart Farming</span> mené
            sur le dataset MMCOWS.
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
              ⚠ défi données multimodales
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg/90">
              Le <span className="font-semibold text-white">Smart Farming</span>{' '}
              cherche à objectiver le bien-être animal grâce aux capteurs. Le
              dataset <span className="font-semibold text-white">MMCOWS</span>{' '}
              (14 jours d’acquisition sur une ferme expérimentale de
              l’Université du Wisconsin) fournit des flux massifs et hétérogènes :
              localisation 3D UWB, capteurs inertiels, posture, production
              laitière. Des fréquences allant de 10 Hz à une mesure par jour et
              des annotations comportementales incomplètes rendent l’exploitation
              directe impossible : harmonisation et modélisation s’imposent.
            </p>
            <p className="mt-4 font-mono text-xs text-muted">
              # contraintes : synchronisation temporelle multi-capteurs · ~2 % de
              valeurs manquantes · labels « Unknown » (~18 %)
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
            src={heatmapImg}
            alt="Heatmap spatiale de l'occupation de l'étable par une vache, avec zones de forte activité en rouge"
            label="fig. 01"
            caption="cartographie spatiale — hotspots comportementaux et zones fonctionnelles de l'étable"
          />

          <Figure
            src={resultsImg}
            alt="Évolution du Macro F1-score des modèles Random Forest, MLP, LSTM et CNN-LSTM sur les quatre versions du dataset"
            label="fig. 02"
            caption="performance des modèles — le feature engineering (Dataset 4) est le principal levier de progression"
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
        {/* E. Analyse Comportementale & Atypismes                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-16">
          <SectionTitle prompt="$">analyse comportementale</SectionTitle>

          <div className="rounded-lg border border-line bg-surface/60 p-6 sm:p-8">
            <p className="max-w-3xl text-base leading-relaxed text-fg/90">
              Au-delà de la classification, l’exploitation des labels permet une
              première approche de <span className="font-semibold text-white">surveillance
              individuelle</span> : le budget-temps de chaque vache est comparé à
              la moyenne du troupeau via un z-score, pour identifier les écarts
              notables (∣z∣ ≥ 1) et forts (∣z∣ ≥ 2).
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {BEHAVIOR_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md border border-line bg-base/80 px-4 py-3 text-center"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-mono text-lg font-bold text-neon-cyan">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-relaxed text-fg/80">
              Repos dominant (42 %), activité locomotrice (23 %), alimentation
              (15 %) : un budget-temps cohérent avec la biologie attendue. Les
              profils atypiques détectés — comme la vache C06 (↓ repos, ↑
              activité, compatible avec une phase de vêlage) — illustrent le
              potentiel d’alerte précoce de l’approche, à confirmer sur des
              données physiologiques complémentaires.
            </p>
          </div>

          <Figure
            src={budgetImg}
            alt="Budget-temps par fonction biologique et par vache : barres empilées Rest, Feeding, Activity, Drinking, Licking"
            label="fig. 03"
            caption="budget-temps comportemental — répartition journalière par vache (T01 à T10)"
          />
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* F. Améliorations Futures (Roadmap)                                */}
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
