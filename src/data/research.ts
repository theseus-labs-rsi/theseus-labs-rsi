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
    title: '递归自我改进：从系统演进到长期智能增长',
    titleEn: 'Recursive Self-Improvement: Landscape, Trajectories and Open Questions',
    summary:
      '系统梳理递归自我改进（RSI）的研究版图，综合分析现有系统的发展趋势，并以长程演进图连接执行、策略、经验、部署与元改进。',
    image: '/research/survey-cover-fig.png',
    status: 'published',
  },
  {
    slug: 'project-02',
    index: '02',
    kind: 'RESEARCH · COMING SOON',
    date: 'NEXT',
    title: '下一项研究正在生长',
    titleEn: 'Research project placeholder',
    summary: '为实验室下一项成果预留的位置。后续只需在数据文件中替换标题、摘要与链接。',
    status: 'placeholder',
  },
  {
    slug: 'project-03',
    index: '03',
    kind: 'BLOG · COMING SOON',
    date: 'NEXT',
    title: '新的观察，即将发布',
    titleEn: 'Lab notes placeholder',
    summary: '用于发布短篇研究观察、阶段性进展与实验室动态。',
    status: 'placeholder',
  },
]
