import { useEffect, useState } from 'react'

/** Hash router minimaliste : retourne le hash courant (ex. '#/prd', '#projets'). */
export function useHashRoute(): string {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return hash
}
