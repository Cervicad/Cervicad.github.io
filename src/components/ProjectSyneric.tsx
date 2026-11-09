import { useEffect } from 'react'
import { Footer } from '../App'
import syGlpiImg from '../assets/stages/sy_glpi.png'
import syPointeuseImg from '../assets/stages/sy_pointeuse.jpg'
import sySchemaImg from '../assets/stages/sy_schema.jpg'
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
  'Jeedom',
  'Z-Wave',
  'GLPI',
  'ESXi',
  'Smart-Implant',
  'SMTP',
  'iSurpass',
]

const META = [
  { label: 'contexte', value: 'BTS SIO (2ᵉ année) · Pôle Supérieur La Salle, Rennes' },
  { label: 'période', value: '3 janv. — 4 févr. 2022 · 5 semaines' },
  { label: 'entreprise', value: 'Syneric (groupe Ouest Pack) · Perros-Guirec (22)' },
]

const SOLUTION_STEPS = [
  {
    number: '01',
    title: 'Benchmark de Solutions',
    description:
      "Installation comparative de GLPI (VM Ubuntu) et Jeedom (VM Debian) sur un hôte ESXi : Jeedom retenu pour son ergonomie et son interface de pilotage de modules connectés.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Instrumentation Z-Wave',
    description:
      'Suivi des cuves de solvant par Smart-Implant Fibaro : schéma électrique, maquette puis mise en production dans l’atelier, avec alertes mail par niveau. Supervision de la salle serveurs (température, présence, SMTP) et remontée Netatmo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Contrôle d’Accès & Mobilité',
    description:
      'Pointeuse à badges iSurpass appairée à Jeedom : remontée des identifiants, graphiques d’historique et documentation d’utilisation. Contrôle de la recharge des véhicules électriques par lecteur de badges pour maîtriser les coûts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12h.01M17 12h.01M7 12h.01" />
      </svg>
    ),
  },
]

const RESULTS = [
  {
    headline: 'Alertes cuves en production',
    description:
      "Le système d'envoi de mails sur l'état des cuves et le motion sensor de la salle serveurs sont utilisés au quotidien par l'entreprise — en remplacement de l'ancien système de lampes atelier.",
  },
  {
    headline: 'Recharge VE sous contrôle',
    description:
      'Le contrôle de la charge des véhicules électriques par lecteur de badges piloté par Jeedom, visant la réduction des coûts d’électricité, finalisait le déploiement en cours du stage.',
  },
]

const ROADMAP = [
  'Finalisation du contrôle de charge des véhicules électriques par badges.',
  'Extension de la supervision à de nouveaux équipements communicants.',
  'Historisation des niveaux de cuves pour anticiper les commandes fournisseurs.',
  'Tableaux de bord consolidés pour le personnel non technique.',
]

// ---------------------------------------------------------------------------
// Page : Case Study Syneric
// ---------------------------------------------------------------------------

export default function ProjectSyneric() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-base font-sans text-fg">
      <CaseStudyHeader path="syneric" />

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
            <span className="text-violet-500">~/stages/syneric</span>
            <span className="text-muted/60">$</span> cat case_study.md
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Supervision{' '}
            <span className="bg-gradient-to-r from-neon-cyan to-violet-500 bg-clip-text text-transparent">
              IoT
            </span>{' '}
            d'une PME Industrielle
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/85 sm:text-lg">
            Choix et déploiement d'une solution de supervision chez Syneric :
            suivi des cuves de solvant, surveillance de la salle serveurs et
            contrôle de la recharge des véhicules électriques, pilotés en
            Z-Wave au travers de Jeedom.
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
              ⚠ supervision absente d'une pme de 7 personnes
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg/90">
              Syneric (branche commerciale d'Ouest Pack) ne disposait d'aucun
              outil de supervision : le niveau des{' '}
              <span className="font-semibold text-white">cuves de solvant</span>{' '}
              était indiqué par de simples lampes dans l'atelier, la salle
              serveurs n'était pas surveillée et la recharge des véhicules
              électriques n'était pas maîtrisée. Il fallait un système de
              gestion/surveillance <span className="font-semibold text-white">accessible
              à tout le personnel</span>, sans formation lourde.
            </p>
            <p className="mt-4 font-mono text-xs text-muted">
              # contraintes : 5 semaines · PME de 7 personnes · équipements
              hétérogènes (Z-Wave, Netatmo, iSurpass)
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
            src={syGlpiImg}
            alt="Page d'accueil de GLPI fraîchement installé sur une VM Ubuntu"
            label="fig. 01"
            caption="benchmark — GLPI installé sur VM Ubuntu (face à Jeedom sur Debian), avant le choix final"
          />

          <Figure
            src={sySchemaImg}
            alt="Schéma électrique dessiné à la main : alimentation, modules Fibaro, LEDs de seuil et volumes des cuves"
            label="fig. 02"
            caption="conception — schéma électrique du suivi des cuves (Smart-Implant Fibaro, seuils LED, volumes)"
          />

          <Figure
            src={syPointeuseImg}
            alt="Maquette de la pointeuse iSurpass : clavier à code tactile, badge RFID et breadboard"
            label="fig. 03"
            caption="maquette — pointeuse à badges iSurpass appairée à Jeedom avant mise en service"
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
        {/* E. Suite du projet (Roadmap)                                      */}
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
