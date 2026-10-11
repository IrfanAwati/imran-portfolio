import type { CSSProperties } from 'react'

/** Hand-drawn marker doodles (inline SVG, stroke = currentColor) used across the page. */
type P = { className?: string; style?: CSSProperties; size?: number }

const svg = (size: number | undefined, vb: string, className?: string, style?: CSSProperties) => ({
  width: size,
  height: size,
  viewBox: vb,
  className: `doodle ${className ?? ''}`,
  style,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const Crown = ({ className, style, size = 56 }: P) => (
  <svg {...svg(size, '0 0 64 48', className, style)}>
    <path d="M6 38 L4 12 L18 24 L31 6 L44 24 L60 10 L56 38 Z" />
    <path d="M8 44 L55 43" />
  </svg>
)

export const Star = ({ className, style, size = 34 }: P) => (
  <svg {...svg(size, '0 0 40 40', className, style)}>
    <path d="M20 3 L24.5 15 L37 15.5 L27 23.5 L31 36 L20 28.5 L9 36 L13 23.5 L3 15.5 L15.5 15 Z" />
  </svg>
)

export const Bolt = ({ className, style, size = 46 }: P) => (
  <svg {...svg(size, '0 0 40 64', className, style)}>
    <path d="M26 2 L8 34 L20 34 L12 62 L34 24 L22 24 L30 2 Z" />
  </svg>
)

export const Smiley = ({ className, style, size = 44 }: P) => (
  <svg {...svg(size, '0 0 48 48', className, style)}>
    <path d="M24 4 C36 3 45 13 44 25 C43 37 33 45 22 44 C10 43 3 33 4 22 C5 11 14 4 24 4 Z" />
    <path d="M16 18 v3 M31 17 v3" />
    <path d="M14 29 C19 36 30 36 34 28" />
  </svg>
)

export const Ghost = ({ className, style, size = 52 }: P) => (
  <svg {...svg(size, '0 0 56 60', className, style)}>
    <path d="M8 54 C8 30 10 6 28 5 C46 6 48 30 48 54 L41 49 L35 55 L28 49 L21 55 L15 49 Z" />
    <path d="M20 24 v4 M34 24 v4 M22 36 C25 39 31 39 34 35" />
  </svg>
)

export const Plane = ({ className, style, size = 40 }: P) => (
  <svg {...svg(size, '0 0 48 48', className, style)}>
    <path d="M4 22 L44 5 L34 42 L22 30 Z M22 30 L44 5 M22 30 L20 41 L27 34" />
  </svg>
)

/** Curvy hand-drawn arrow. */
export const Arrow = ({ className, style, size = 70 }: P) => (
  <svg {...svg(size, '0 0 80 60', className, style)}>
    <path d="M6 8 C14 40 40 52 70 46" />
    <path d="M58 36 L71 46 L57 54" />
  </svg>
)

export const Squiggle = ({ className, style, size = 70 }: P) => (
  <svg {...svg(size, '0 0 90 24', className, style)} strokeWidth={4}>
    <path d="M4 16 C14 4 22 4 28 14 C34 24 44 22 50 12 C56 2 66 4 72 12 C76 17 82 16 86 10" />
  </svg>
)

/** Thick brush stroke used under headings. Filled, not stroked. */
export const Brush = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg className={`brush ${className ?? ''}`} style={style} viewBox="0 0 400 34" preserveAspectRatio="none" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6 20 C60 8 140 6 220 8 C290 9 350 10 396 6 C398 12 394 16 388 18 C330 22 260 22 200 24 C140 26 80 28 30 30 C16 31 4 28 6 20 Z"
    />
    <path fill="currentColor" opacity=".5" d="M40 28 C120 26 220 24 330 22 L320 27 C230 29 130 31 46 32 Z" />
  </svg>
)

/** Organic paint splat, for backgrounds. */
export const Splat = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg className={`splat ${className ?? ''}`} style={style} viewBox="0 0 200 200" aria-hidden="true">
    <path
      fill="currentColor"
      d="M101 14c17 2 22 22 38 24s30-10 40 2-6 26-2 40 24 18 20 34-26 12-32 26 6 34-10 40-24-14-40-12-26 22-42 14-4-30-16-40-34-4-38-20 18-22 16-38-22-24-10-36 30 0 42-10 16-26 34-24z"
    />
    <circle cx="186" cy="30" r="6" fill="currentColor" />
    <circle cx="14" cy="160" r="8" fill="currentColor" />
    <circle cx="170" cy="182" r="4" fill="currentColor" />
  </svg>
)
