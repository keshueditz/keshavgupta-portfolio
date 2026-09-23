// All content below reflects only what Keshav provided directly.
// No fabricated clients, results, or testimonials.

export const profile = {
  name: 'Keshav Murari Gupta',
  title: 'Video Editor & Graphic Designer',
  location: 'India',
  workPreference: 'Freelance / Remote',
  email: 'keshavmarvelediting@gmail.com',
  phone: '+91 7599931006',
  linkedin: 'https://www.linkedin.com/in/keshav-murari-gupta-374526384',
  photo: '/assets/profile/profile.jpg',
}

export const services = [
  { name: 'Video Editing', blurb: 'End-to-end edits — pacing, sound design, color, delivery-ready exports.' },
  { name: 'Reels & Shorts Editing', blurb: 'Fast-paced, trend-aware vertical edits built for retention.' },
  { name: 'Talking-Head Video Editing', blurb: 'Clean cuts, kinetic captions and pacing for interview and educational content.' },
  { name: 'Cinematic Video Editing', blurb: 'Color-graded, mood-driven edits for automotive and lifestyle footage.' },
  { name: 'Motion Graphics', blurb: 'Product reveals, kinetic typography and animated brand explainers.' },
  { name: 'Graphic Design', blurb: 'Posters, social creatives and layout design across festival, event and brand work.' },
  { name: 'Social Media Designs', blurb: 'On-brand creatives sized and styled for social feeds.' },
  { name: 'Posters & Banners', blurb: 'Event posters, channel banners and promotional creative.' },
  { name: 'Thumbnails', blurb: 'High-contrast, click-worthy thumbnail design.' },
  { name: 'Branding / Visual Assets', blurb: 'Logo marks and consistent visual identity across a project.' },
  { name: 'Photo Editing', blurb: 'Retouching, color correction and composite photo edits.' },
]

export const skills = {
  'Video Editing': ['Social media trend edits', 'Talking-head videos', 'Cinematic editing', 'Fast-paced editing', 'Reels / short-form editing'],
  'Motion Graphics': ['Basic to intermediate motion graphic design'],
  'Graphic Design': ['Visual design fundamentals', 'Layout', 'Branding assets'],
  'Software': ['Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Creative Suite'],
}

export const education = [
  {
    degree: 'B.Sc. in Animation and Visual Graphics',
    place: 'Amity University, Gurugram, Haryana',
    status: 'Pursuing',
  },
  {
    degree: 'Senior Secondary (Class 12) — Commerce Stream',
    place: 'CBSE Board',
    status: 'Completed',
  },
  {
    degree: 'Secondary (Class 10)',
    place: 'CBSE Board',
    status: 'Completed',
  },
]

export const certifications = [
  'Adobe Certification',
  'HP Certification',
  'HubSpot Academy Certification',
]

export const creativeProcess = [
  {
    step: 'Brief & Footage Review',
    detail: 'Understand the goal, audience and platform before touching a single clip — then review all raw footage or assets.',
  },
  {
    step: 'Structure & Story',
    detail: 'Rough cut the narrative or layout structure — pacing for video, hierarchy for design.',
  },
  {
    step: 'Craft Pass',
    detail: 'Color grading, sound design, kinetic type, or visual polish depending on the medium.',
  },
  {
    step: 'Review & Refine',
    detail: 'Revisions against feedback, tightening pacing and detail.',
  },
  {
    step: 'Final Delivery',
    detail: 'Export in the right format and spec for the platform it is going to.',
  },
]

// ---- Video Editing ----
export const videoProjects = [
  {
    id: 'car',
    title: 'Cinematic Automotive Edit',
    category: 'Cinematic Edit',
    description: 'Night-shoot cinematic edit with color grading and detail cutaways, cut for vertical social delivery.',
    video: '/assets/videos/car.mp4',
    poster: '/assets/posters/car.jpg',
    tag: 'Cinematic',
  },
  {
    id: 'gunjan',
    title: 'GST Registration — Taxvia Private',
    category: 'Talking-Head Edit',
    description: 'Educational talking-head edit for client Taxvia Private, with kinetic caption typography.',
    video: '/assets/videos/gunjan.mp4',
    poster: '/assets/posters/gunjan.jpg',
    tag: 'Client Work',
  },
  {
    id: 'sachin',
    title: 'Talking-Head Edit',
    category: 'Talking-Head Edit',
    description: 'Office-setting talking-head edit with styled subtitle captions.',
    video: '/assets/videos/sachin.mp4',
    poster: '/assets/posters/sachin.jpg',
    tag: 'Talking-Head',
  },
  {
    id: 'taxloss',
    title: 'Finance / Tax Talking-Head Edit',
    category: 'Talking-Head Edit',
    description: 'Finance-focused talking-head edit with consistent caption styling.',
    video: '/assets/videos/taxloss.mp4',
    poster: '/assets/posters/taxloss.jpg',
    tag: 'Talking-Head',
  },
  {
    id: 'podcast',
    title: 'Podcast / Interview Edit',
    category: 'Podcast Edit',
    description: 'Interview-style podcast edit with bold callout captions and background graphic overlay.',
    video: '/assets/videos/podcast.mp4',
    poster: '/assets/posters/podcast.jpg',
    tag: 'Podcast',
  },
  {
    id: 'shobha',
    title: 'Real Estate Walkthrough Edit',
    category: 'Real Estate Edit',
    description: 'Property walkthrough edit combining drone footage and talking-head segments with on-screen branding.',
    video: '/assets/videos/shobha.mp4',
    poster: '/assets/posters/shobha.jpg',
    tag: 'Real Estate',
  },
  {
    id: 'hotel',
    title: 'Hotel / Property Concept Edit',
    category: 'Concept Edit',
    description: 'AI-generated visual concept/edit — the source visuals were AI-generated, not filmed by Keshav. Included to show editing, pacing and sequencing skill applied to a real-estate style concept piece.',
    video: '/assets/videos/hotel.mp4',
    poster: '/assets/posters/hotel.jpg',
    tag: 'AI-Generated Visuals — Concept Edit',
    isConcept: true,
  },
]

// ---- Motion Graphics & Animation ----
export const motionProjects = [
  {
    id: 'mg-coconut',
    title: 'Coconut Hair Oil — Product Animation',
    description: 'Commercial-style product reveal animation for a coconut hair oil concept — bottle, packaging copy and organic elements animated into a square-format ad.',
    video: '/assets/videos/mg-coconut.mp4',
    poster: '/assets/posters/mg-coconut.jpg',
    tag: 'Product Animation',
    aspect: 'aspect-square',
  },
  {
    id: 'mg-mixed',
    title: 'Motion Graphics Reel',
    description: 'Mixed motion graphics reel — 3D product animation, coin/finance-style graphics with grid and line motion, and kinetic typography. Practice/concept piece, not client work.',
    video: '/assets/videos/mg-mixed.mp4',
    poster: '/assets/posters/mg-mixed.jpg',
    tag: 'Concept Reel',
    isConcept: true,
    aspect: 'aspect-[9/16]',
  },
  {
    id: 'mg-starbucks',
    title: 'Brand Case-Study Motion Graphic',
    description: 'Brand breakdown style motion graphic with animated kinetic bullet text and logo animation. Practice/concept piece — not client work.',
    video: '/assets/videos/mg-starbucks.mp4',
    poster: '/assets/posters/mg-starbucks.jpg',
    tag: 'Concept Piece',
    isConcept: true,
    aspect: 'aspect-[9/16]',
  },
]

// ---- Graphic Design ----
export const designProjects = [
  { id: 'raksha-bandhan', title: 'Raksha Bandhan', category: 'Festival Creative', image: '/assets/images/raksha-bandhan.jpg' },
  { id: 'independence-day', title: 'Independence Day', category: 'Festival Creative', image: '/assets/images/independence-day.jpg' },
  { id: 'nag-panchami', title: 'Nag Panchami', category: 'Festival Creative', image: '/assets/images/nag-panchami.jpg' },
  { id: 'rath-yatra', title: 'Jagannath Rath Yatra', category: 'Event Poster', image: '/assets/images/rath-yatra.jpg' },
  { id: 'shyam-sankirtan', title: 'Shree Shyam Sankirtan Mahotsav', category: 'Event Poster', image: '/assets/images/shyam-sankirtan.jpg' },
  { id: 'baba-brilliant', title: 'Baba Brilliant Institute', category: 'Client Work', image: '/assets/images/baba-brilliant.jpg' },
  { id: 'winners-choice-destinations', title: 'Winners Choice Tour & Travels — Destinations', category: 'Client Work', image: '/assets/images/winners-choice-destinations.jpg' },
  { id: 'winners-choice-manali', title: 'Winners Choice Tour & Travels — Manali Package', category: 'Client Work', image: '/assets/images/winners-choice-manali.jpg' },
  { id: 'dil-se-mic-tak', title: 'Dil Se Mic Tak — Channel Banner', category: 'Brand / Podcast', image: '/assets/images/dil-se-mic-tak.jpg' },
  { id: 'baithak-teaser', title: 'Baithak — Amity\u2019s Podcast Society', category: 'Brand / Podcast', image: '/assets/images/baithak-teaser.jpg' },
  { id: 'editor-brand', title: 'Personal Brand Poster', category: 'Self-Branding', image: '/assets/images/editor-brand.jpg' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Video Editing', href: '#video-editing' },
  { label: 'Motion Graphics', href: '#motion-graphics' },
  { label: 'Graphic Design', href: '#graphic-design' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]
