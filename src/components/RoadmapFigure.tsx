import { ArrowUpRight } from 'lucide-react'

const roadmapImage = './research/roadmap.svg'
const roadmapPdf = './research/rsi-overview-v11.pdf'

export default function RoadmapFigure({ detailed = false }: { detailed?: boolean }) {
  return (
    <figure className={`roadmap-figure${detailed ? ' roadmap-detail' : ''}`}>
      <div className="roadmap-heading">
        {detailed ? <h2>The path to self-improvement</h2> : <span>RSI ROADMAP · B0–L5</span>}
        <a href={roadmapImage} target="_blank" rel="noreferrer">View full size <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
      <a className="roadmap-image" href={roadmapImage} target="_blank" rel="noreferrer" aria-label="Open the RSI roadmap at full size">
        <img src={roadmapImage} width="1489" height="703" loading="lazy" alt="RSI roadmap from B0 in-task iteration through L1 execution, L2 strategy, L3 experience, L4 deployment, and L5 meta-improvement, with research examples at each level." />
      </a>
      <figcaption>
        <span>From in-task iteration to meta-improvement.</span>
        <a href={roadmapPdf} target="_blank" rel="noreferrer">Open PDF <ArrowUpRight size={15} aria-hidden="true" /></a>
      </figcaption>
    </figure>
  )
}
