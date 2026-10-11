/**
 * Tools & skills row. `icon` is a file in public/icons/ (simple-icons via
 * scripts/extract-icons.mjs); tools without a published logo get a monogram badge
 * in their brand colour instead of a borrowed or invented logo.
 * Source: tools Imran listed himself (2026-10-11).
 */
export type Skill = { name: string; icon?: string; mono?: string; color: string }

export const skills: Skill[] = [
  { name: 'AutoCAD', icon: 'autocad', color: '#e51050' },
  { name: 'CATIA', mono: 'CA', color: '#3b82f6' },
  { name: 'Solid Edge', mono: 'SE', color: '#14b8a6' },
  { name: 'MS Office', mono: 'O', color: '#f97316' },
  { name: 'Word', mono: 'W', color: '#3b82f6' },
  { name: 'Excel', mono: 'X', color: '#22c55e' },
  { name: 'Claude', icon: 'claude', color: '#d97757' },
]

/** Softer skills shown as chips under the tool row. */
export const strengths: string[] = []
