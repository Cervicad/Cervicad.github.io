import { useEffect } from 'react'
import type { ComponentType } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { useHashRoute } from './hooks/useHashRoute'
import CaseStudyFamoco from './routes/CaseStudyFamoco'
import CaseStudyM2L from './routes/CaseStudyM2L'
import CaseStudyOrange from './routes/CaseStudyOrange'
import CaseStudyOuestPack from './routes/CaseStudyOuestPack'
import CaseStudyPAM from './routes/CaseStudyPAM'
import CaseStudyPRD from './routes/CaseStudyPRD'
import CaseStudySyneric from './routes/CaseStudySyneric'
import HomePage from './routes/HomePage'

/* Routing des études de cas : routes #/orange, #/famoco, #/m2l, #/prd, #/pam,
   #/syneric, #/ouestpack. Toute autre valeur de hash (ou aucune) affiche le one-page. */
const CASE_ROUTES: Record<string, ComponentType> = {
  '#/orange': CaseStudyOrange,
  '#/famoco': CaseStudyFamoco,
  '#/m2l': CaseStudyM2L,
  '#/prd': CaseStudyPRD,
  '#/pam': CaseStudyPAM,
  '#/syneric': CaseStudySyneric,
  '#/ouestpack': CaseStudyOuestPack,
}

export default function App() {
  const hash = useHashRoute()
  const CaseStudy = CASE_ROUTES[hash]
  const anchor = !CaseStudy && hash ? hash.slice(1) : ''

  useEffect(() => {
    if (CaseStudy) {
      // Arrivée sur une case study : retour en haut de page.
      window.scrollTo(0, 0)
      return
    }
    // Retour au one-page : scroller vers la section cible si l'hash est une ancre.
    if (!anchor) return
    // Laisser React peindre la page avant de scroller vers l'ancre.
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [CaseStudy, anchor])

  return (
    <div id="top" className="min-h-screen bg-paper font-sans text-body">
      <Header />
      {CaseStudy ? <CaseStudy /> : <HomePage />}
      <Footer />
    </div>
  )
}
