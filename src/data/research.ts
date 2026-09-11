export type ResearchItem = {
  slug: string
  index: string
  kind: string
  date: string
  title: string
  summary: string
  image?: string
  status?: 'published' | 'placeholder'
}

export const researchItems: ResearchItem[] = [
  {
    slug: 'rsi-survey-2026',
    index: '01',
    kind: 'SURVEY · RESEARCH',
    date: '2026.09',
    title: 'The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement',
    summary:
      'An autonomy-centered survey of recursive self-improvement: capability gaps measured with the Headroom-Closed Index, five levels of improvement responsibility, and evidence from science, embodied intelligence, software engineering, healthcare, and industrial practice.',
    image: './research/roadmap.svg',
    status: 'published',
  },
  {
    slug: 'project-02',
    index: '02',
    kind: 'RESEARCH · COMING SOON',
    date: 'NEXT',
    title: 'The next research project is taking shape',
    summary: 'Details of upcoming research will be shared here.',
    status: 'placeholder',
  },
  {
    slug: 'project-03',
    index: '03',
    kind: 'BLOG · COMING SOON',
    date: 'NEXT',
    title: 'New observations, coming soon',
    summary: 'Research notes and updates from Theseus Lab.',
    status: 'placeholder',
  },
]

// Source sections and evidence boundaries are recorded in docs/copy-sources.md.
export const surveyContributions = [
  {
    title: 'The improvement loop as the unit of analysis',
    description: 'Traces what triggers a change, who proposes and verifies it, what persists, and how later rounds use the retained change.',
  },
  {
    title: 'Five levels of improvement autonomy',
    description: 'Distinguishes responsibility for executing updates, selecting strategies, acquiring future experience, adapting during deployment, and revising the mechanisms of future improvement.',
  },
  {
    title: 'From research to practice',
    description: 'Connects the autonomy framework to science, embodied intelligence, software engineering, healthcare, and industrial systems, tracing how retained changes shape later improvement rounds.',
  },
]

export const surveyFindings = [
  {
    title: 'Interactive capabilities retain larger gaps',
    description: 'Across ten domains, the survey uses the Headroom-Closed Index (HCI) to trace uneven capability progress and highlight remaining headroom in software engineering and tool-using agents.',
    source: 'Section 2.1 · Capability analysis',
    page: 7,
  },
  {
    title: 'Better workspaces improve agent performance',
    description: 'Reconstructing agent workspaces improved aggregate rubric scores by 18.65–39.67 percentage points in the Theseus productivity study. The case study explores environment–data–model co-evolution as a direction for RSI.',
    source: 'Section 5.1 · Theseus',
    page: 44,
  },
  {
    title: 'Improvement mechanisms can be inherited',
    description: 'The survey traces how systems revise and pass on improvers, evaluators, and research policies, making the process of future improvement itself an object of change.',
    source: 'Sections 3.6–3.7 · Recursive meta-improvement',
    page: 31,
  },
]
