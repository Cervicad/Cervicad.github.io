import { useCallback, useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const EMAIL = 'kevin.tallagrand@gmail.com'

function MailIcon({ className }: { className?: string }) {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <circle cx="8" cy="8" r="0.5" fill="currentColor" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <path d="M16 16v-3a2 2 0 0 0-4 0" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CopyIcon({ className }: { className?: string }) {
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
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = useCallback(() => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {
        /* clipboard indisponible : le lien mailto reste utilisable */
      })
  }, [])

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead index="06" title="Contact" />

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="rounded-xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(22,56,83,0.05)]">
            <MailIcon className="h-5 w-5 text-accent" />
            <h3 className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Email
            </h3>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block break-all text-sm font-medium text-accent transition-colors duration-200 hover:underline"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-line-strong px-2.5 py-1.5 text-xs font-medium text-body transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <CopyIcon className="h-3.5 w-3.5" />
              {copied ? 'Copié ✓' : 'Copier'}
            </button>
          </Reveal>

          <Reveal className="rounded-xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(22,56,83,0.05)]">
            <LinkedInIcon className="h-5 w-5 text-accent" />
            <h3 className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/%F0%9F%9B%A1%EF%B8%8Fk%C3%A9vin-tallagrand-a47274203"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-medium text-accent transition-colors duration-200 hover:underline"
            >
              Kévin Tallagrand
            </a>
            <p className="mt-4 font-mono text-[11px] break-all text-muted">
              in/🛡️kévin-tallagrand-a47274203
            </p>
          </Reveal>

          <Reveal className="rounded-xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(22,56,83,0.05)]">
            <MapPinIcon className="h-5 w-5 text-accent" />
            <h3 className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Localisation
            </h3>
            <p className="mt-2 text-sm text-body">Lannion / Pleumeur-Bodou, Bretagne</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
