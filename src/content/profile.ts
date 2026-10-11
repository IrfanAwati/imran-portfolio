/**
 * Everything the page says about Imran lives in src/content/.
 * Rule for this site: no invented facts. Career copy comes only from his CV
 * (Imran_Awati_ATS CV, 2026) or what Irfan stated in chat.
 */

export const profile = {
  first: 'Imran',
  last: 'Awati',
  // shown under the name (CV headline)
  tags: ['Document Control', 'QA/QC', 'ADNOC EPC'] as string[],
  bubble: "Let's build something great!",
  heroNote: ['Track it.', 'Check it.', 'Deliver it.'],
  sideScribble: ['Good work', 'speaks', 'for itself.'],
  intro: '10 years in document control, 7 of them in the UAE and KSA on ADNOC and Aramco EPC projects.',
  // contact details stated by Irfan (2026-10-11)
  location: 'Abu Dhabi, UAE',
  email: 'imranawati1@gmail.com',
  phones: [
    { label: 'UAE', display: '+971 55 544 2703', tel: '+971555442703' },
    { label: 'India', display: '+91 80882 36837', tel: '+918088236837' },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/imran-awati-3733a6158/',
    youtube: '', // TODO channel URL
    instagram: 'https://www.instagram.com/imran_pyro/',
    instagramHandle: '@imran_pyro',
    resume: '',
  },
  images: {
    // AI-enhanced illustration/portrait generated from Imran's own photos (see README)
    hero: '/img/imran-hero.webp',
    about: '/img/imran-about.webp',
    portrait: '/img/imran-portrait.webp',
    // real photo from Imran's Instagram; colour/contrast/sharpness enhanced locally, faces untouched
    uae: '/img/imran-uae.webp',
  },
}

export const about = {
  heading: 'About Imran',
  words: ['Focus', 'Discipline', 'Consistency'],
  paragraphs: [
    // CV professional summary
    "I'm a document control specialist with 10 years' experience, seven of them in the UAE and KSA on live ADNOC and Aramco EPC packages. Today I'm the single documentation authority across four concurrent ADNOC onshore and offshore projects, and the last quality check on every deliverable before it reaches the client.",
    "I'm an advanced Aconex and WRENCH user and build my own Excel and Power BI dashboards for document status and overdue tracking. My diploma is in Mechanical Engineering, so I read the drawings, not just the file names.",
    // stated by Irfan for Imran (2026-10-11)
    "Outside work I'm a fitness freak: the gym is part of my routine, and the discipline carries over into everything else. I love to travel, explore new places and try new food wherever I go.",
    "I like being creative and trying new ventures. Lately that means vlogging: I've started a YouTube channel. There aren't many videos yet, but more are on the way.",
  ] as string[],
  scribble: ['Learn', 'Build', 'Grow'],
}

/** "Off the clock" cards in the About section. Source: Irfan, 2026-10-11. */
export const life = [
  { icon: 'gym', title: 'Fitness freak', text: 'Regular at the gym. Consistency over shortcuts.', color: '#d4ff3a' },
  { icon: 'travel', title: 'Travel', text: 'Exploring new places whenever I can.', color: '#22d3ee' },
  { icon: 'food', title: 'Foodie', text: 'Always up for trying something new.', color: '#f472b6' },
  { icon: 'video', title: 'Vlogging', text: 'A new YouTube channel. Early days, more videos coming.', color: '#ff3b3b' },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'featured', label: 'Featured' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
