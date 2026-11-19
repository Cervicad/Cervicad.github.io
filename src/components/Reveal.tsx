import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  className?: string
}

/** Wrapper div avec reveal au scroll (IntersectionObserver, once). */
export default function Reveal({ children, className = '' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  )
}
