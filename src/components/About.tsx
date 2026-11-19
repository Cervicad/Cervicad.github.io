import Reveal from './Reveal'
import SectionHead from './SectionHead'

const FIGURES = [
  { value: '3', label: "stages d'ingénierie" },
  { value: '905/990', label: 'TOEIC' },
]

export default function About() {
  return (
    <section id="a-propos" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead index="01" title="À propos" />

        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <Reveal className="space-y-4 text-base leading-relaxed text-body">
            <p>
              En dernière année d'ingénierie à l'ECAM Louis de Broglie (module IDI — Ingénierie du
              développement informatique), je me passionne pour la convergence entre infrastructures
              réseau, développement logiciel et méthodologies DevSecOps.
            </p>
            <p>
              Fort de trois stages en automatisation, supervision système et développement full-stack,
              j'ai conçu chez Orange Innovation une chaîne complète de mesure de performance réseau
              MPLS — des scripts bas-niveau à la calibration d'horloges. Polyvalent et rigoureux, je
              cherche à concevoir des solutions innovantes de mesure et d'analyse de performance.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-2 content-start gap-x-6 gap-y-8 lg:border-l lg:border-line lg:pl-10">
            {FIGURES.map((figure) => (
              <div key={figure.label}>
                <p className="font-display text-4xl font-bold tracking-tight text-ink">
                  {figure.value}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-muted">{figure.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
