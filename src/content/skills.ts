/**
 * Tools & skills. `icon` is a file in public/icons/ (simple-icons via
 * scripts/extract-icons.mjs); tools without a published logo of their own get a
 * monogram badge in their brand colour instead of a borrowed or invented logo.
 * Sources: Imran's CV (Technical Systems) and tools Irfan listed (2026-10-11).
 */
export type Skill = { name: string; icon?: string; mono?: string; color: string }

export const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: 'Document systems',
    items: [
      { name: 'Oracle Aconex', mono: 'Ax', color: '#e5484d' },
      { name: 'WRENCH', mono: 'Wr', color: '#f59e0b' },
      { name: 'Documentum', mono: 'Dm', color: '#3b82f6' },
      { name: 'ProjectWise', mono: 'PW', color: '#14b8a6' },
      { name: 'SharePoint', mono: 'SP', color: '#0ea5a4' },
    ],
  },
  {
    title: 'Reporting & data',
    items: [
      { name: 'Excel', mono: 'X', color: '#22c55e' },
      { name: 'Power BI', mono: 'BI', color: '#facc15' },
      { name: 'SQL', mono: 'SQL', color: '#60a5fa' },
      { name: 'Odoo', icon: 'odoo', color: '#a24689' },
    ],
  },
  {
    title: 'Drafting & office',
    items: [
      { name: 'AutoCAD', icon: 'autocad', color: '#e51050' },
      { name: 'CATIA', mono: 'CA', color: '#3b82f6' },
      { name: 'Solid Edge', mono: 'SE', color: '#14b8a6' },
      { name: 'MS Office', mono: 'O', color: '#f97316' },
      { name: 'Word', mono: 'W', color: '#3b82f6' },
      { name: 'Claude', icon: 'claude', color: '#d97757' },
    ],
  },
]

/** Core competencies (CV), shown as chips. */
export const strengths: string[] = [
  'Master Document Register (MDR)',
  'Final submission quality gate',
  'Document expediting',
  'Revision & transmittal control',
  'Client & PMC interface',
  'Engineering & vendor documents',
  'HSE documentation & audits',
  'Material Record Books (MRB)',
  'RFI, submittal & shop drawing logs',
  'ISO-aligned procedures',
  'Document status MIS & reporting',
]
