const NAV_LINKS = [
  { label: 'projets', href: '#projets' },
  { label: 'expériences', href: '#experiences' },
] as const

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-base/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Monogramme "KT" façon terminal */}
        <a
          href="#top"
          aria-label="Retour en haut de page"
          className="group flex items-baseline gap-3 font-mono"
        >
          <span className="text-lg font-bold tracking-tight">
            <span className="text-neon-green transition-colors duration-200 group-hover:text-white">
              [
            </span>
            <span className="text-white">KT</span>
            <span className="text-neon-green transition-colors duration-200 group-hover:text-white">
              ]
            </span>
          </span>
          <span className="hidden text-xs text-muted sm:inline">~/netdevops</span>
        </a>

        {/* Navigation ancrée */}
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-6 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-muted transition-colors duration-200 hover:text-neon-green"
                >
                  <span className="text-neon-green/70">./</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
