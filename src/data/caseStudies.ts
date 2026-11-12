// Case study pages at /work/<slug>. Bodies are written in simple Markdown:
// paragraphs, ## headings, - lists, **bold**, `code`, and [links](https://...).
const deepclsWorkflow = new URL('../assets/Working.png', import.meta.url).href;

export type Diagram = { caption: string; layers: { label: string; nodes: string[] }[] };

export type CaseStudy = {
  slug: string;
  title: string;
  description: string; // used for search results and link previews
  intro: string;
  facts: { label: string; value: string }[];
  links: { label: string; href: string }[];
  diagram?: Diagram;
  image?: { src: string; alt: string; caption: string };
  sections: { heading: string; body: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'the-meeting-room',
    title: 'The Meeting Room',
    description:
      'How Suvanga Dhakal, founding CTO, built The Meeting Room: one platform for coaches and athletic departments, with an AI assistant grounded in each program’s data.',
    intro:
      'Coaching staffs run their programs across a dozen disconnected apps: one for film, one for recruiting, group texts for the staff, spreadsheets for everything else. The Meeting Room replaces that with one place where a whole athletic department works.',
    facts: [
      { label: 'Role', value: 'Founding CTO' },
      { label: 'Since', value: 'August 2026' },
      { label: 'Platforms', value: 'Web, tablet, and mobile' },
      { label: 'Team', value: 'Built with founders Quinn and Mark Staten' },
    ],
    links: [{ label: 'Visit getinthemeetingroom.com', href: 'https://getinthemeetingroom.com' }],
    diagram: {
      caption: 'How the product fits together, at a high level.',
      layers: [
        { label: 'Clients', nodes: ['Web app', 'Tablet', 'Phone'] },
        { label: 'Product', nodes: ['Messaging', 'Library', 'Teams and recruiting', 'Whiteboard', 'Opportunities'] },
        { label: 'Intelligence', nodes: ['COACH assistant', 'Retrieval over program data'] },
        { label: 'Data', nodes: ['Program records', 'Media storage', 'Search index'] },
      ],
    },
    sections: [
      {
        heading: 'My role',
        body: 'I own the technical side of the company: architecture, infrastructure choices, engineering standards, and turning what coaches tell us into shipped features. Every feature starts as a real workflow from a head coach, athletic director, or coordinator, and ships only after it holds up in a real season.',
      },
      {
        heading: 'What we built',
        body: `- **Messaging.** Direct messages, group threads, staff channels, and @mentions. Every attachment is saved to the program’s library automatically.
- **Library.** One searchable home for uploads, saved AI chats, film clips, whiteboards, and meeting recordings.
- **Teams.** Recruiting pipeline, compliance, NIL, travel, budgets, and staff communication for the whole department.
- **Whiteboard.** A digital coaches’ board with sport-specific fields, animated plays, and one-tap sharing.
- **Opportunities and Connections.** A daily feed of coaching jobs, scrimmage dates, and camps, plus a professional network for verified coaches and athletic directors.`,
      },
      {
        heading: 'COACH, the AI assistant',
        body: 'COACH is not a chatbot bolted onto a spreadsheet. It adapts to the user’s role and answers using the program’s own rosters, film, calendars, and channels. It drafts sport-specific practice plans with printable PDFs, scouts opponents, ranks recruiting fits, and drafts outreach messages. The key design decision was grounding: answers come from the program’s data, not from generic knowledge.',
      },
      {
        heading: 'Getting a department live in a week',
        body: 'Adoption fails when setup is slow. Onboarding autofills the school, scrapes existing rosters, and walks staff through a guided tour, so an entire athletic department can be up and running in under a week.',
      },
      {
        heading: 'What I’m focused on next',
        body: 'Scaling real-time messaging and media storage as more programs join, keeping COACH’s answers fast and grounded as each program’s data grows, and measuring which features staffs use every day.',
      },
    ],
  },
  {
    slug: 'mediscan',
    title: 'MediScan',
    description:
      'MediScan: a chest X-ray model for 15 thoracic conditions that uses square-root loss scaling and calibration to cut the false-positive rate for the rarest condition from 99% to 1%.',
    intro:
      'Most chest X-ray models look accurate because they are good at the common cases. MediScan is built for the rare ones, where a model that always says “no finding” scores well and helps no one.',
    facts: [
      { label: 'Dataset', value: 'NIH Chest X-ray, 100,000+ images' },
      { label: 'Task', value: '15-label multi-label classification' },
      { label: 'Model', value: 'DenseNet121, fine-tuned in PyTorch' },
      { label: 'Serving', value: 'FastAPI and Uvicorn in Docker' },
    ],
    links: [
      { label: 'Try the demo', href: 'https://xrayai.suvanga.com' },
      { label: 'Read the paper (PDF)', href: 'https://github.com/Suvanga/Mediscan/blob/main/BeyondAccuracy.pdf' },
      { label: 'Code on GitHub', href: 'https://github.com/Suvanga/Mediscan' },
    ],
    diagram: {
      caption: 'From upload to prediction.',
      layers: [
        { label: 'Client', nodes: ['React upload and results UI'] },
        { label: 'API', nodes: ['FastAPI async endpoints', 'Image preprocessing'] },
        { label: 'Model', nodes: ['DenseNet121, 15 sigmoid outputs', 'Calibrated thresholds'] },
        { label: 'Deployment', nodes: ['Docker container', 'Cloud host'] },
      ],
    },
    sections: [
      {
        heading: 'The problem: accuracy hides the rare cases',
        body: 'In the NIH dataset, Infiltration appears in 17.7% of images and Hernia in 0.2%: a 493-fold imbalance. Labels are multi-label, so a single scan can show several conditions at once. A model trained naively learns to ignore the rare classes and still reports high accuracy. In medicine, the missed case is the one that matters, so recall comes first.',
      },
      {
        heading: 'What went wrong with the standard fix',
        body: 'The usual remedy is linear loss weighting: weight each class by how rare it is. That did make the model pay attention to Hernia, but the 493.9x penalty was so strong that it started flagging Hernia on healthy scans. The false-positive rate for Hernia reached **99%**. I call this model hallucination: high recall on paper, unusable in a clinic because of alarm fatigue.',
      },
      {
        heading: 'The approach: square-root loss scaling and calibration',
        body: `- **Square-root loss scaling.** Weighting by the square root of the imbalance instead of the raw ratio cut the penalty from 493.9x to 22.2x. Rare classes still get attention without the “panic signal.”
- **Post-training calibration.** Adjusting each class’s output bias after training brought the Hernia false-positive rate from **99% to 1%** while keeping recall high.
- **No leakage.** All class statistics and weights were computed on the training split only.`,
      },
      {
        heading: 'Shipping it',
        body: 'The model runs behind an asynchronous FastAPI service so large image uploads do not block other requests. The whole stack is containerized with Docker, with API tests in the backend, and the web demo lets anyone upload a scan and see per-condition predictions.',
      },
      {
        heading: 'What I learned',
        body: 'Calibration matters more than raw accuracy in safety-critical systems. I wrote up the method and results in the paper *Beyond Accuracy: Mitigating Extreme Class Imbalance in Chest X-Ray Disease Detection via Square-Root Loss Scaling*.',
      },
    ],
  },
  {
    slug: 'deepcls',
    title: 'DeepCLS',
    description:
      'DeepCLS: a multimodal cancer-detection pipeline combining CNN-based classification of cell imagery with LLM clinical reasoning and retrieval-augmented generation.',
    intro:
      'Image classifiers can say what they see but not why it matters. DeepCLS pairs a vision model with a language model so a prediction comes with clinical context.',
    facts: [
      { label: 'Domain', value: 'Cancer cell detection' },
      { label: 'Vision', value: 'CNN-based video classification' },
      { label: 'Language', value: 'LLM reasoning with retrieval (RAG)' },
      { label: 'Stack', value: 'Python and PyTorch' },
    ],
    links: [],
    image: { src: deepclsWorkflow, alt: 'DeepCLS workflow diagram', caption: 'The DeepCLS workflow.' },
    sections: [
      {
        heading: 'How it works',
        body: `- **See.** A CNN classifies annotated cancer-cell imagery and video.
- **Look up.** Retrieval-augmented generation pulls relevant references from a medical knowledge base.
- **Reason.** A language model combines the classifier’s output with the retrieved context to produce an explanation a clinician can check.`,
      },
      {
        heading: 'Why multimodal',
        body: 'Combining vision and language models made the pipeline’s outputs more consistent and easier to interpret than the classifier alone, because each prediction comes with the evidence behind it.',
      },
    ],
  },
];
