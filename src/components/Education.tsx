import Reveal from './Reveal'
import SectionHead from './SectionHead'

const EDUCATION = [
  {
    school: 'ECAM Louis de Broglie',
    city: 'Rennes',
    degree:
      "Diplôme d'Ingénieur généraliste — module IDI (Ingénierie du développement informatique)",
    period: '2023 — 2026',
  },
  {
    school: 'Lycée Félix Le Dantec',
    city: 'Lannion',
    degree: 'ATS CGPE — Classe préparative Adaptation Technicien Supérieur',
    period: '2022 — 2023',
  },
  {
    school: 'Pôle Sup La Salle',
    city: 'Rennes',
    degree: 'BTS SIO',
    period: '2020 — 2022',
  },
  {
    school: 'Lycée Saint-Joseph / Bossuet',
    city: 'Lannion',
    degree: 'Baccalauréat Scientifique SVT',
    period: '2017 — 2020',
  },
]

const CERTIFICATIONS = [
  'TOEIC score 905/990',
  'Certification Voltaire — niveau professionnel',
  'Permis B',
]

const LANGUAGES = [
  { code: 'fr', name: 'Français', level: 'natif' },
  { code: 'gb', name: 'Anglais', level: 'professionnel' },
  { code: 'es', name: 'Espagnol', level: 'intermédiaire' },
  { code: 'cn', name: 'Chinois', level: 'intermédiaire' },
]

type LanguageCode = (typeof LANGUAGES)[number]['code']

function FlagFr() {
  return (
    <svg viewBox="0 0 3 2" className="h-3.5 w-5 rounded-[2px]" aria-hidden="true">
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="1" width="1" height="2" fill="#ffffff" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  )
}

function FlagGb() {
  return (
    <svg viewBox="0 0 60 40" className="h-3.5 w-5 rounded-[2px]" aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 60 40 M60 0 0 40" stroke="#ffffff" strokeWidth="8" />
      <path d="M0 0 60 40 M60 0 0 40" stroke="#C8102E" strokeWidth="3.5" />
      <path d="M30 0 V40 M0 20 H60" stroke="#ffffff" strokeWidth="13" />
      <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  )
}

function FlagEs() {
  return (
    <svg viewBox="0 0 3 2" className="h-3.5 w-5 rounded-[2px]" aria-hidden="true">
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>
  )
}

function FlagCn() {
  return (
    <svg viewBox="0 0 30 20" className="h-3.5 w-5 rounded-[2px]" aria-hidden="true">
      <rect width="30" height="20" fill="#DE2910" />
      <defs>
        <path
          id="cn-star"
          d="M0 -1 0.294 -0.405 0.951 -0.309 0.476 0.154 0.588 0.809 0 0.5 -0.588 0.809 -0.476 0.154 -0.951 -0.309 -0.294 -0.405Z"
          fill="#FFDE00"
        />
      </defs>
      <use href="#cn-star" transform="translate(5 5) scale(3)" />
      <use href="#cn-star" transform="translate(10 2) scale(1)" />
      <use href="#cn-star" transform="translate(12 4) scale(1)" />
      <use href="#cn-star" transform="translate(12 7) scale(1)" />
      <use href="#cn-star" transform="translate(10 9) scale(1)" />
    </svg>
  )
}

const FLAGS: Record<LanguageCode, () => React.JSX.Element> = {
  fr: FlagFr,
  gb: FlagGb,
  es: FlagEs,
  cn: FlagCn,
}

export default function Education() {
  return (
    <section id="formation" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead index="05" title="Formation" />

        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {EDUCATION.map((entry) => (
            <Reveal
              key={entry.school}
              className="border-l-2 border-line pl-5 transition-colors duration-200 hover:border-accent"
            >
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {entry.period}
              </p>
              <h3 className="mt-2 font-display text-base font-semibold text-ink">
                {entry.school}
                <span className="font-sans font-normal text-muted"> — {entry.city}</span>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-body">{entry.degree}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Certifications
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {CERTIFICATIONS.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-ice-soft px-2.5 py-1 font-mono text-[11px] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Langues
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {LANGUAGES.map((language) => {
                const Flag = FLAGS[language.code]
                return (
                  <li
                    key={language.code}
                    className="flex items-center gap-2.5 rounded-full border border-line bg-card px-3 py-1.5"
                  >
                    <Flag />
                    <span className="text-sm font-medium text-ink">{language.name}</span>
                    <span className="font-mono text-[11px] text-muted">{language.level}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
