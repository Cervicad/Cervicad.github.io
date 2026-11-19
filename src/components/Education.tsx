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
  'Français — natif',
  'Anglais — professionnel',
  'Espagnol — intermédiaire',
  'Chinois — intermédiaire',
]

function ChipList({ items, label }: { items: string[]; label: string }) {
  return (
    <div>
      <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-ice-soft px-2.5 py-1 font-mono text-[11px] text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
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
          <ChipList items={CERTIFICATIONS} label="Certifications" />
          <ChipList items={LANGUAGES} label="Langues" />
        </Reveal>
      </div>
    </section>
  )
}
