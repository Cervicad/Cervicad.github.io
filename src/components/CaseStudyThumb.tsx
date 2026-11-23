/* Vignette décorative côté droit d'une carte (expérience ou projet) :
   image de l'étude de cas liée, fondue en dégradé vers le fond du conteneur
   pour ne pas gêner la lecture. Purement décorative — le lien textuel reste
   le seul point d'entrée accessible au clavier. */
type Blend = 'card' | 'paper'

/* Classes statiques (le compilateur Tailwind doit les voir au build). */
const BLENDS: Record<Blend, string> = {
  card: 'from-card via-card/50',
  paper: 'from-paper via-paper/50',
}

interface CaseStudyThumbProps {
  src: string
  href: string
  blend?: Blend
  className?: string
}

export default function CaseStudyThumb({
  src,
  href,
  blend = 'card',
  className = '',
}: CaseStudyThumbProps) {
  return (
    <a
      href={href}
      aria-hidden="true"
      tabIndex={-1}
      className={`group relative hidden w-44 shrink-0 self-stretch overflow-hidden rounded-lg border border-line md:block ${className}`}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition-opacity duration-200 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-r to-transparent ${BLENDS[blend]}`}
      />
    </a>
  )
}
