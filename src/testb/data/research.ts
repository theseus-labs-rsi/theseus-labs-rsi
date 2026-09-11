export type ResearchItem = {
  slug: string
  index: string
  kind: string
  date: string
  title: string
  titleEn: string
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
    title: 'Recursive Self-Improvement: From System Evolution to Long-Horizon Intelligence',
    titleEn: 'Recursive Self-Improvement: Landscape, Trajectories and Open Questions',
    summary:
      'A structured view of the recursive self-improvement landscape, connecting current trends with a long-horizon map from execution and strategy to deployment and meta-improvement.',
    image: '../research/survey-cover-fig.png',
    status: 'published',
  },
  {
    slug: 'project-02',
    index: '02',
    kind: 'RESEARCH · COMING SOON',
    date: 'NEXT',
    title: 'The next research project is taking shape',
    titleEn: 'Reserved for a future lab project',
    summary: 'Our next research project is in progress. Findings and materials will be shared here when ready.',
    status: 'placeholder',
  },
  {
    slug: 'project-03',
    index: '03',
    kind: 'BLOG · COMING SOON',
    date: 'NEXT',
    title: 'New observations, coming soon',
    titleEn: 'Reserved for lab notes and updates',
    summary: 'Short research notes, work in progress, and observations from the lab.',
    status: 'placeholder',
  },
]
