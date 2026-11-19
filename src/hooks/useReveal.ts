import { useEffect, useRef } from 'react'

/**
 * Reveal au scroll : ajoute la classe `reveal-visible` quand l'élément
 * entre dans le viewport (IntersectionObserver, une seule fois).
 * Si `prefers-reduced-motion: reduce`, l'élément est visible d'emblée.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
