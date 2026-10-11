/** Roles and highlights. Source: Imran's résumé (TODO until it is pasted in). */

export type Role = {
  company: string
  title: string
  period: string
  place: string
  points: string[]
  /** card accent */
  color: string
  /** optional cover image in public/img/ */
  image?: string
}

export const roles: Role[] = [
  { company: 'TODO company', title: 'TODO title', period: 'TODO dates', place: '', points: [], color: '#a855f7' },
  { company: 'TODO company', title: 'TODO title', period: 'TODO dates', place: '', points: [], color: '#22d3ee' },
  { company: 'TODO company', title: 'TODO title', period: 'TODO dates', place: '', points: [], color: '#f472b6' },
  { company: 'TODO company', title: 'TODO title', period: 'TODO dates', place: '', points: [], color: '#a3e635' },
]

/** Big numbers for the featured panel. Only real figures from the résumé. */
export const stats: { value: string; label: string }[] = []

export const featured = {
  kicker: 'Featured',
  title: ['Currently', 'at work'],
  text: 'TODO current role summary.',
  note: ['Same goals.', 'Better', 'results.'],
}

export const education: { school: string; degree: string; period: string }[] = []
export const certifications: { name: string; issuer: string; year: string }[] = []
