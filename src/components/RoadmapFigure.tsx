import { ArrowUpRight } from 'lucide-react'

const roadmapImage = './research/roadmap.svg'
const roadmapPdf = './research/rsi-overview-v11.pdf'

export default function RoadmapFigure({ detailed = false }: { detailed?: boolean }) {
  return (
    <figure className={`roadmap-figure${detailed ? ' roadmap-detail' : ''}`}>
      <div className="roadmap-heading">
        {detailed ? <h2>Five levels of improvement autonomy</h2> : <span>RSI AUTONOMY ROADMAP · B0–L5</span>}
        <a href={roadmapImage} target="_blank" rel="noreferrer">View full size <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
      <a className="roadmap-image" href={roadmapImage} target="_blank" rel="noreferrer" aria-label="Open the RSI roadmap at full size">
        <img src={roadmapImage} width="1489" height="703" loading="lazy" alt="Autonomy roadmap with B0 in-task iteration as a non-RSI reference, followed by L1 improvement execution, L2 strategy selection, L3 future experience acquisition, L4 deployment and environmental adaptation, and L5 recursive meta-improvement." />
      </a>
      <figcaption>
        <span>B0 marks in-task iteration; L1–L5 track autonomy over persistent improvement.</span>
        <a href={roadmapPdf} target="_blank" rel="noreferrer">Open PDF <ArrowUpRight size={15} aria-hidden="true" /></a>
      </figcaption>
    </figure>
  )
}
