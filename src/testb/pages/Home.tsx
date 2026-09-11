import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { ShipIllustration } from '../components/ShipIllustration'
import { CommunityPreview } from '../components/CommunityPreview'
import { researchItems } from '../data/research'

export function Home() {
  const [report, ...projects] = researchItems

  return (
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">THESEUS LAB / RECURSIVE SELF-IMPROVEMENT</p>
        <ShipIllustration />
        <h1 id="hero-title">Intelligence,<br /><em>continuously evolving.</em></h1>
        <p className="hero-description">AI systems that learn from experience,<br className="desktop-break" /> revise their strategies, and improve through verifiable feedback.</p>
        <div className="hero-actions">
          <a className="button button-dark" href={`#/research/${report.slug}`}>Read our research <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="button button-light" href="#research">Explore the lab <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <a className="hero-scroll" href="#reports" aria-label="Scroll to latest research"><ArrowDown size={19} aria-hidden="true" /></a>
      </section>

      <section id="reports" className="content-section" aria-labelledby="reports-title">
        <div className="section-heading">
          <h2 id="reports-title">Latest research</h2>
          <span className="section-note">Ideas for what comes next.</span>
        </div>
        <a className="report-banner" href={`#/research/${report.slug}`}>
          <div className="report-copy">
            <p className="metadata"><time>{report.date}</time><span>Theseus Lab</span></p>
            <span className="tag">Survey</span>
            <h3>{report.title.split(':')[0]}</h3>
            <p className="report-subtitle">{report.title.split(':').slice(1).join(':').trim()}</p>
            <p className="report-description">{report.summary}</p>
            <span className="text-link">Explore the report <ArrowRight size={18} aria-hidden="true" /></span>
          </div>
          <div className="report-visual">
            <div className="report-image-frame">
              <div className="figure-label"><span>RSI / 2026</span><span>RESEARCH MAP</span></div>
              <img src={report.image} alt="The recursive self-improvement landscape and long-horizon evolution map" loading="lazy" />
              <div className="figure-caption">From execution to meta-improvement.</div>
            </div>
          </div>
        </a>
      </section>

      <section id="research" className="content-section research-section" aria-labelledby="research-title">
        <div className="section-heading">
          <h2 id="research-title">Inside the lab</h2>
          <span className="section-note">Research in progress</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-card-top">
                <span className="tag">{project.kind.split(' · ')[0] === 'BLOG' ? 'Lab notes' : 'Research'}</span>
                <span className="project-number">{project.index.padStart(2, '0')}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-card-bottom"><span>Theseus Lab</span><span>Coming soon</span></div>
            </article>
          ))}
        </div>
      </section>
      <CommunityPreview />
    </main>
  )
}
