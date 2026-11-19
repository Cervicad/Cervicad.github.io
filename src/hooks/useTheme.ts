import { useCallback, useEffect, useState } from 'react'

/**
 * Thème clair/sombre : la classe .dark sur <html> est posée avant la première
 * peinture par le script inline de index.html ; ce hook la fait évoluer et
 * persiste le choix explicite dans localStorage.theme.
 */
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.style.backgroundColor = dark ? '#0d1f30' : '#fdfdfd'
  }, [dark])

  const toggle = useCallback(() => {
    setDark((previous) => {
      const next = !previous
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch {
        /* localStorage indisponible : le toggle reste effectif pour la session */
      }
      return next
    })
  }, [])

  return { dark, toggle }
}
