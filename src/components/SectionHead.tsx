import Reveal from './Reveal'

interface SectionHeadProps {
  index: string
  title: string
}

/** En-tête de section : eyebrow mono numéroté + H2 + filet fin. */
export default function SectionHead({ index, title }: SectionHeadProps) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
        {index} — {title}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mt-5 block h-px bg-gradient-to-r from-line via-line-strong to-transparent"
      />
    </Reveal>
  )
}
