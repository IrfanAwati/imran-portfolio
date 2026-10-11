import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

import { EASE } from './ease'

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Marker-style section title with a squiggle after it, like the reference design. */
export function MarkerTitle({ a, b, id }: { a: string; b?: string; id: string }) {
  return (
    <h2 className="marker-title" id={id}>
      <span>{a}</span> {b && <em>{b}</em>}
      <svg className="mt-squiggle" viewBox="0 0 90 24" aria-hidden="true">
        <path d="M4 16 C14 4 22 4 28 14 C34 24 44 22 50 12 C56 2 66 4 72 12 C76 17 82 16 86 10" />
      </svg>
    </h2>
  )
}
