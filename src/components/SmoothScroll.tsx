import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

/**
 * Inertial smooth scrolling (Lenis, still native scroll underneath, so
 * motion/react's useScroll keeps working). Also publishes the scroll velocity
 * as --skew, which headings use for a subtle "speed lean".
 * Skipped entirely for reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.085, autoRaf: true, anchors: true, wheelMultiplier: 0.95 })
    window.__lenis = lenis
    document.documentElement.style.scrollBehavior = 'auto'

    const root = document.documentElement.style
    let settle = 0
    lenis.on('scroll', (l: Lenis) => {
      const skew = Math.max(-3.5, Math.min(3.5, l.velocity * 0.12))
      root.setProperty('--skew', `${skew.toFixed(2)}deg`)
      window.clearTimeout(settle)
      settle = window.setTimeout(() => root.setProperty('--skew', '0deg'), 120)
    })
    return () => {
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])
  return null
}
