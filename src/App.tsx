import { useEffect, useState } from 'react'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import ProjectPAM from './components/ProjectPAM'
import ProjectPRD from './components/ProjectPRD'
import Projects from './components/Projects'
import Skills from './components/Skills'

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
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

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-36 sm:pt-44">
      {/* Décor : grille technique + halos néon */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,#30363d66_1px,transparent_1px),linear-gradient(to_bottom,#30363d66_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_55%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/4 -z-10 h-72 w-72 rounded-full bg-neon-green/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-1/5 top-32 -z-10 h-64 w-64 rounded-full bg-neon-cyan/10 blur-[110px]"
      />

      <p className="font-mono text-sm text-muted">
        <span className="text-neon-green">kevin@netdevops</span>:~$ whoami
      </p>

      <h1 className="mt-6 font-mono text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        <span className="text-neon-green">&gt;</span> Network &amp; Dev Engineer
        <span
          aria-hidden="true"
          className="ml-3 inline-block h-[0.8em] w-[0.5em] translate-y-[0.08em] animate-blink bg-neon-green"
        />
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/85 sm:text-lg">
        Passionné par la convergence entre{' '}
        <span className="text-neon-green">infrastructures réseau</span>, scripting
        bas-niveau (<span className="text-neon-green">Shell/AWK</span>) et
        méthodologies <span className="text-neon-cyan">DevSecOps</span>.
        Actuellement en fin de stage chez{' '}
        <span className="font-medium text-white">Orange Innovation</span>.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="/CV_Kevin_Tallagrand.pdf"
          download
          className="group inline-flex items-center gap-2.5 rounded-md border border-neon-green/50 bg-neon-green/10 px-5 py-3 font-mono text-sm font-semibold text-neon-green transition-all duration-300 hover:scale-105 hover:border-neon-green hover:bg-neon-green/15 hover:shadow-[0_0_28px_rgba(0,255,157,0.25)]"
        >
          <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          Télécharger mon CV
        </a>
        <a
          href="#projets"
          className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-surface/50 px-5 py-3 font-mono text-sm text-fg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-neon-cyan/60 hover:text-neon-cyan"
        >
          <span className="text-neon-cyan/80">$</span> cd ./projets
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-fg">Kevin Tallagrand</span> — NetDevOps Portfolio
        </p>
        <p className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green" />
          </span>
          open_to_work = true
        </p>
      </div>
    </footer>
  )
}

/**
 * Routage minimal par hash : '#/prd' et '#/pam' affichent les case studies,
 * toute autre valeur (ancres de section comme '#projets') affiche le portfolio.
 */
function useHashRoute(): string {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

function App() {
  const hash = useHashRoute()

  if (hash.startsWith('#/prd')) {
    return <ProjectPRD />
  }

  if (hash.startsWith('#/pam')) {
    return <ProjectPAM />
  }

  return (
    <div id="top" className="min-h-screen bg-base font-sans text-fg">
      <Header />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App
