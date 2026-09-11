import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { ResearchItem } from '../data/research'

const contributions = [
  { title: 'A unified landscape', description: 'Places RSI work across tasks, systems and update targets into one comparable framework.' },
  { title: 'Signals in the field', description: 'Synthesizes current directions, capability boundaries and research loops that remain open.' },
  { title: 'A long-horizon map', description: 'Connects execution, strategy, experience, deployment and meta-improvement into one trajectory.' },
]

export function ResearchDetail({ report }: { report: ResearchItem }) {
  return (
    <main id="main" className="detail-main" tabIndex={-1}>
      <a className="back-link" href="#reports"><ArrowLeft size={16} aria-hidden="true" /> All research</a>
      <article>
        <header className="detail-hero">
          <p className="metadata"><span className="tag">Survey</span><time>{report.date}</time><span>Theseus Lab</span></p>
          <h1>{report.title}</h1>
          <p className="detail-subtitle">{report.titleEn}</p>
          <p className="detail-lead">{report.summary}</p>
          <div className="detail-actions">
            <a className="button button-dark" href="https://arxiv.org/abs/2609.11873" target="_blank" rel="noreferrer">View on arXiv <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="button button-light" href="../research/2609.11873v1.pdf" target="_blank" rel="noreferrer">Read PDF <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </header>
        <section className="contributions" aria-labelledby="contributions-title">
          <div><p className="eyebrow">THE RESEARCH</p><h2 id="contributions-title">What this work<br />contributes.</h2></div>
          <ol>
            {contributions.map((contribution, index) => (
              <li key={contribution.title}>
                <span className="contribution-number">0{index + 1}</span>
                <div><h3>{contribution.title}</h3><p>{contribution.description}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <figure className="map-figure">
          <div className="figure-label"><span>FIGURE 01</span><span>LONG-HORIZON EVOLUTION MAP</span></div>
          <img src={report.image} alt="RSI evolution map from L1 in-task iteration to L5 meta-improvement" loading="lazy" />
          <figcaption>From L1 execution to L5 meta-improvement.</figcaption>
        </figure>
      </article>
    </main>
  )
}
