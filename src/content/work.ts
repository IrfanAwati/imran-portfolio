/** Roles and highlights. Source: Imran_Awati_ATS CV (2026). Nothing here goes beyond the CV. */

export type Role = {
  company: string
  /** short label for the card cover */
  short: string
  title: string
  period: string
  place: string
  /** client / projects line */
  context?: string
  points: string[]
  /** card accent */
  color: string
  /** optional cover image in public/img/ */
  image?: string
}

export const roles: Role[] = [
  {
    company: 'Controle Contracting & Trading Co. (CCTC)',
    short: 'CCTC',
    title: 'Project Information Manager',
    period: 'Jul 2025 – Present',
    place: 'Abu Dhabi, UAE',
    context: 'Client: ADNOC · PMCs: NMDC, McDermott',
    points: [
      'Sole documentation authority across four concurrent ADNOC EPC packages: USSC Site Schemes, Lower Zakum EDG replacement and LV upgrade, Lower Zakum LTDP-1 EPS-2 and PDP, and Umm Shaif LTDP-2.',
      "The project's final documentation quality gate: reviews alignment, revision history and quality on every deliverable before it goes to ADNOC.",
      'Also carries the expediting role, chasing disciplines, subcontractors and vendors for outstanding deliverables.',
      'Owns the Master Document Register: 150+ live controlled documents tracked through to as-built.',
      'Issues 20 to 30 transmittals a month to ADNOC and to PMC document control at NMDC and McDermott.',
      'Keeps HSE documentation audit-ready, and supported third-party and client audits with Bureau Veritas and Schneider Electric.',
    ],
    color: '#a855f7',
  },
  {
    company: 'Blue Rhine Industries LLC',
    short: 'BRI',
    title: 'EPC Document Controller',
    period: 'Aug 2023 – Apr 2025',
    place: 'Riyadh, Saudi Arabia',
    context: 'KAFD · NEOM Bay Airport · Amaala Red Sea',
    points: [
      'Ran document control for three Saudi giga-projects at once in Oracle Aconex and client EDMS platforms.',
      'Built document control processes aligned to ADNOC, PDO, Worley, ENOC and Saudi Aramco standards.',
      'Prepared MIR and IRE packs supporting Interim Payment Applications, where documentation accuracy gated invoice release.',
      'Compiled and submitted Material Record Books for client handover.',
    ],
    color: '#22d3ee',
  },
  {
    company: 'Robt Stone LLC',
    short: 'RS',
    title: 'EPC Document Controller',
    period: 'Sep 2022 – Aug 2023',
    place: 'Abu Dhabi, UAE',
    context: 'ADNOC Onshore · Firewater ring replacement at MOT and MPS',
    points: [
      'Managed all technical documentation for the package: quality, revision status, receipt and controlled distribution.',
      'Ran the document control database: tracking, approval loops, revision identification and metadata checks.',
      'Tracked circulation times against the distribution matrix and flagged deviations that threatened the schedule.',
    ],
    color: '#f472b6',
  },
  {
    company: 'Analytical Instrument & Maintenance System (AIMS)',
    short: 'AIMS',
    title: 'Document Controller & AutoCAD Draftsman',
    period: 'Sep 2019 – Sep 2022',
    place: 'Abu Dhabi, UAE',
    context: 'Clients: ADNOC, ENOC Dubai, Control & Applications Emirates',
    points: [
      'Controlled the documentation lifecycle for analyser packages at Habshan-0 (CEMS for SRU units) and Ruwais Refinery.',
      'Managed client EDMS submissions for the ENOC Dubai moisture and tail-gas analyser package.',
      'Produced technical drawings from specifications and issued approved drawings to fabrication.',
    ],
    color: '#d4ff3a',
  },
  {
    company: 'Dura Auto Systems',
    short: 'DURA',
    title: 'Document Controller (QAD)',
    period: 'Apr 2016 – Aug 2019',
    place: 'India',
    points: [
      'Controlled incoming and outgoing engineering drawings and vendor data, with registration, revision and distribution records.',
      'Kept management system documentation current and accessible to production and quality teams.',
      'Introduced sign-out tracking for files leaving the document room, and first worked on Aconex here.',
    ],
    color: '#f5c542',
  },
  {
    company: 'Seamless Auto-Tech Pvt Ltd',
    short: 'SAT',
    title: 'Junior Production Engineer',
    period: 'Dec 2015 – Feb 2016',
    place: 'India',
    points: [],
    color: '#60a5fa',
  },
]

/** Big numbers for the featured panel. Only real figures from the CV. */
export const stats: { value: string; label: string }[] = [
  { value: '10 yrs', label: 'in document control' },
  { value: '4', label: 'live ADNOC packages' },
  { value: '150+', label: 'controlled documents' },
  { value: '20–30', label: 'transmittals / month' },
]

export const featured = {
  kicker: 'Currently',
  title: ['Project Information', 'Manager'],
  text: 'At CCTC in Abu Dhabi, I am the single documentation authority across four concurrent ADNOC onshore and offshore EPC packages, and the final quality check before anything reaches the client.',
  note: ['No outdated', 'drawing', 'reaches site.'],
  words: ['Register.', 'Review.', 'Transmit.', 'Repeat.'],
}

/** Client standards he has worked to (CV → Technical Systems). */
export const clients = ['ADNOC', 'Saudi Aramco', 'PDO', 'Worley', 'ENOC']

export const education: { school: string; degree: string; period: string }[] = [
  { school: 'Raibag Polytechnic, Karnataka, India', degree: 'Diploma in Mechanical Engineering', period: '2015' },
]
export const certifications: { name: string; issuer: string; year: string }[] = []
