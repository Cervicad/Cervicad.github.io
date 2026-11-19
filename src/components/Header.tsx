import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const NAV_LINKS = [
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Formation', href: '#formation' },
  { label: 'Contact', href: '#contact' },
] as const

function MoonIcon({ className }: { className?: string }) {
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

function DownloadIcon({ className }: { className?: string }) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function Header() {
  const { dark, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" aria-label="Retour en haut du portfolio" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy font-display text-sm font-bold tracking-tight text-[#fdfdfd] dark:bg-ice dark:text-[#0d1f30]">
            KT
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:inline">Kevin Tallagrand</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 text-sm font-medium text-body transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-ice after:transition-transform after:duration-200 hover:text-accent hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggle}
            aria-label="Basculer le thème"
            aria-pressed={dark}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-body transition-colors duration-200 hover:border-line-strong hover:text-accent"
          >
            {dark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
          <a
            href="/CV_Kevin_Tallagrand.pdf"
            download
            className="hidden items-center gap-1.5 rounded-lg bg-navy px-3.5 py-2 text-sm font-semibold text-[#fdfdfd] transition-colors duration-200 hover:bg-[#1d4a73] sm:inline-flex dark:bg-ice dark:text-[#0d1f30] dark:hover:bg-white"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-body transition-colors duration-200 hover:border-line-strong hover:text-accent lg:hidden"
          >
            {menuOpen ? <CloseIcon className="h-4 w-4" /> : <BurgerIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 bg-paper lg:hidden">
          <nav aria-label="Navigation mobile" className="px-6 py-10">
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl font-semibold text-ink transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/CV_Kevin_Tallagrand.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-[#fdfdfd] transition-colors duration-200 hover:bg-[#1d4a73] dark:bg-ice dark:text-[#0d1f30] dark:hover:bg-white"
            >
              <DownloadIcon className="h-4 w-4" />
              Télécharger mon CV
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
