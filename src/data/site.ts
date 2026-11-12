// All the text on the home page lives here. Edit this file to update the site.
const moneymateDeck = new URL('../assets/Final_presentation.pdf', import.meta.url).href;

export const profile = {
  name: 'Suvanga Dhakal',
  role: 'Founding CTO at The Meeting Room',
  pitch:
    'I build AI products end to end, from training models on 100,000+ medical images to running the platform athletic departments use every day.',
  location: 'Toledo, Ohio',
  email: 'suvangadhakal0@gmail.com',
  github: 'https://github.com/Suvanga',
  linkedin: 'https://linkedin.com/in/Suvanga',
  resume: '/resume.pdf',
};

export type CaseStudyLink = { slug: string; title: string; summary: string; outcome: string; tags: string[] };

// Projects with a full case study page (see caseStudies.ts). Order = order on the page.
export const featured: CaseStudyLink[] = [
  {
    slug: 'the-meeting-room',
    title: 'The Meeting Room',
    summary:
      'The operating platform for coaches and athletic departments: messaging, recruiting, film library, whiteboard, and an AI assistant in one product.',
    outcome: 'Founding CTO, responsible for architecture and the full development lifecycle',
    tags: ['Platform architecture', 'AI assistant', 'Real-time messaging'],
  },
  {
    slug: 'mediscan',
    title: 'MediScan',
    summary:
      'Chest X-ray model that detects 15 thoracic conditions, trained on the NIH dataset of 100,000+ images and served through a FastAPI inference API.',
    outcome: 'Cut the false-positive rate for the rarest condition from 99% to 1%',
    tags: ['PyTorch', 'DenseNet121', 'FastAPI', 'Docker'],
  },
  {
    slug: 'deepcls',
    title: 'DeepCLS',
    summary:
      'Multimodal cancer-detection pipeline that pairs CNN-based classification of cell imagery with LLM clinical reasoning and retrieval over medical references.',
    outcome: 'Combined vision and language models into one diagnostic workflow',
    tags: ['PyTorch', 'Computer vision', 'LLMs', 'RAG'],
  },
];

export type Project = { title: string; summary: string; tags: string[]; links: { label: string; href: string }[] };

export const projects: Project[] = [
  {
    title: 'Momentum',
    summary: 'Habit tracker with an AI "Growth Coach" that turns streak and completion data into personalized advice.',
    tags: ['React', 'Vite', 'LLM API', 'Docker'],
    links: [
      { label: 'Try it', href: 'https://momentum.suvanga.com' },
      { label: 'Code', href: 'https://github.com/Suvanga/Application_Every_3_Days/blob/main/BISWAS/Readme.md' },
    ],
  },
  {
    title: 'MoneyMate',
    summary: 'Expense-splitting app that reads receipts with OCR and an LLM, tracks shared debts, and secures accounts with Auth0.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Auth0'],
    links: [
      { label: 'Code', href: 'https://github.com/Suvanga/moneymate' },
      { label: 'Presentation', href: moneymateDeck },
    ],
  },
  {
    title: 'SilBells',
    summary: 'Assistive IoT safety system that turns sounds into sub-second vibration and light alerts for people who are deaf or hard of hearing.',
    tags: ['C++', 'IoT', 'Embedded', 'Real-time'],
    links: [
      { label: 'Demo video', href: 'https://www.youtube.com/shorts/BbaNTW-YIa0' },
      { label: 'Report', href: 'https://github.com/Suvanga/Silent_Bell/blob/main/EECS%204020%20Final.pptx.pdf' },
    ],
  },
];

export type Job = { role: string; org: string; href?: string; period: string; place: string; points: string[] };

export const experience: Job[] = [
  {
    role: 'Chief Technology Officer',
    org: 'The Meeting Room, Inc.',
    href: 'https://getinthemeetingroom.com',
    period: 'Aug 2026 to now',
    place: 'Toledo, OH',
    points: [
      'Architected and launched an all-in-one platform for coaches and athletic departments across desktop, tablet, and mobile.',
      'Led development of COACH, an AI assistant grounded in each program’s rosters, film, calendars, and channels.',
      'Built real-time messaging and a searchable library for every upload, clip, whiteboard, and recording.',
      'Automated program onboarding so an entire athletic department can go live in under a week.',
    ],
  },
  {
    role: 'IT Technician II',
    org: 'University of Toledo',
    period: 'Jan 2022 to Jul 2026',
    place: 'Toledo, OH',
    points: [
      'Supported hardware and software for 2,000+ users, resolving complex tickets with a 95% success rate.',
      'Kept the Epic EMR system at 99.9% uptime for clinical staff.',
      'Trained new student technicians on hospital IT protocols and troubleshooting.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Whirlpool',
    period: 'May 2024 to Sep 2024',
    place: 'Marion, OH',
    points: [
      'Built a JavaScript pipeline that automated manufacturing time-series processing and raised data accuracy by 65%.',
      'Shipped a real-time production dashboard that showed leadership where assembly lines were idling.',
      'Refactored legacy parsing code with dynamic job identifiers to cut runtime errors.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Whirlpool',
    period: 'Dec 2022 to May 2023',
    place: 'Marion, OH',
    points: [
      'Made a critical internal web app 9x faster to load by shrinking it 23x.',
      'Built Fixture Finder, a parts search tool that cut retrieval time by 30%.',
      'Analyzed production data to optimize fixture weights, saving $35,000+ immediately.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'AI and ML', items: ['PyTorch', 'TensorFlow', 'CNNs', 'Transformers', 'LLMs', 'RAG', 'Hugging Face', 'Model evaluation'] },
  { group: 'Product engineering', items: ['TypeScript', 'React', 'Node.js', 'Express', 'FastAPI', 'REST', 'GraphQL', 'React Native'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector databases', 'Pandas', 'NumPy'] },
  { group: 'Infrastructure', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Linux'] },
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C#'] },
];

export const recognition: { title: string; detail: string; period: string }[] = [
  { title: 'Network Defense Team Lead, Cyber-Force Competition', detail: 'Led the university’s blue team defending simulated energy infrastructure against live red-team attacks in Chicago.', period: 'Cybersecurity Club' },
  { title: 'President, Nepali Student Organization', detail: 'Ran operations and initiatives for 200+ members.', period: 'Aug 2023 to Aug 2024' },
  { title: 'Vice President, Cybersecurity Club', detail: 'Led programming workshops and the competition team.', period: 'University of Toledo' },
  { title: 'International Rocket Scholarship', detail: '$8,500 for leadership and academic excellence.', period: 'University of Toledo' },
  { title: 'Academic scholarship', detail: '90% tuition scholarship for academic excellence and leadership potential.', period: 'University of Toledo' },
];

export const education = {
  degree: 'B.S. in Computer Engineering',
  school: 'University of Toledo',
  period: '2021 to 2026',
};
