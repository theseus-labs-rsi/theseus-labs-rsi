import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { researchItems, type ResearchItem } from '../data/research'

const githubUrl = 'https://github.com/theseus-labs-rsi'
const arxivUrl = 'https://arxiv.org/abs/2609.11873'

function Brand() {
  return (
    <a className="brand" href="#/" aria-label="Theseus Lab home">
      <img src="../brand/icon-black.svg" alt="" />
      <span>Theseus Lab</span>
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault()
        document.getElementById('main-content')?.focus()
      }}>Skip to content</a>
      <Brand />
      <nav aria-label="Main navigation">
        <a href="#reports">Reports</a>
        <a href="#research">Research</a>
        <a className="nav-github" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}

function HeroGraphic() {
  return (
    <figure className="hero-graphic">
      <div className="graphic-heading" aria-hidden="true"><span>THESEUS LAB</span><span>01 — ∞</span></div>
      <img src="../brand/full-black.svg" alt="Theseus Lab" />
      <figcaption>Systems that improve how they improve.</figcaption>
    </figure>
  )
}

function Home() {
  const report = researchItems[0]
  const projects = researchItems.slice(1)

  return (
    <div className="site-shell">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker">RECURSIVE INTELLIGENCE SYSTEMS</p>
            <h1 id="hero-title">Building intelligence<br /><em>that can evolve.</em></h1>
            <p>Theseus Lab studies AI systems that learn from experience, revise their strategies, and improve through verifiable feedback.</p>
            <a className="primary-link" href="#reports">Explore our work <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <HeroGraphic />
        </section>

        <section id="reports" className="content-section reports" aria-labelledby="reports-title">
          <div className="section-heading">
            <div>
              <p className="section-label">LATEST</p>
              <h2 id="reports-title">Featured report</h2>
            </div>
            <span>01 / 01</span>
          </div>
          <a className="report-banner" href={`#/research/${report.slug}`}>
            <div className="report-copy">
              <div className="report-meta"><span>{report.kind}</span><time>{report.date}</time></div>
              <h3>{report.title}</h3>
              <p>{report.summary}</p>
              <span className="inline-action">Read the report <ArrowRight size={17} aria-hidden="true" /></span>
            </div>
            <div className="report-visual">
              <img src={report.image ? `../${report.image}` : undefined} alt="RSI long-horizon evolution map" />
            </div>
          </a>
        </section>

        <section id="research" className="content-section research" aria-labelledby="research-title">
          <div className="section-heading">
            <div>
              <p className="section-label">ONGOING</p>
              <h2 id="research-title">Research</h2>
            </div>
            <p>Projects will be added here as they are ready.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => <ProjectRow key={project.slug} project={project} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ProjectRow({ project }: { project: ResearchItem }) {
  return (
    <article className="project-row">
      <span className="project-number">{project.index}</span>
      <div className="project-mark" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.kind}</span><time>{project.date}</time></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <span className="project-status">COMING SOON</span>
    </article>
  )
}

function ResearchDetail() {
  const report = researchItems[0]
  return (
    <div className="site-shell detail-shell">
      <Header />
      <main className="detail-main" id="main-content" tabIndex={-1}>
        <a className="back-link" href="#/"><ArrowLeft size={17} aria-hidden="true" /> Back to home</a>
        <article>
          <header className="detail-hero">
            <p className="section-label">FEATURED REPORT · ARXIV:2609.11873</p>
            <h1>{report.title}</h1>
            <p className="detail-subtitle">{report.titleEn}</p>
            <p className="detail-lead">{report.summary}</p>
            <div className="detail-actions">
              <a className="primary-link" href={arxivUrl} target="_blank" rel="noreferrer">View on arXiv <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="secondary-link" href="../research/2609.11873v1.pdf" target="_blank" rel="noreferrer">Read PDF <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </header>

          <section className="contributions" aria-labelledby="contributions-title">
            <div><p className="section-label">CONTRIBUTIONS</p><h2 id="contributions-title">What this work contributes</h2></div>
            <ol>
              <li><span>01</span><div><h3>A unified landscape</h3><p>Places RSI work across tasks, systems and update targets into one comparable framework.</p></div></li>
              <li><span>02</span><div><h3>Signals in the field</h3><p>Synthesizes current directions, capability boundaries and research loops that remain open.</p></div></li>
              <li><span>03</span><div><h3>A long-horizon map</h3><p>Connects execution, strategy, experience, deployment and meta-improvement into one trajectory.</p></div></li>
            </ol>
          </section>

          <figure className="map-figure">
            <div><span>FIGURE 01</span><span>LONG-HORIZON EVOLUTION MAP</span></div>
            <img src="../research/survey-cover-fig.png" alt="RSI evolution map from in-task iteration to meta-improvement" />
            <figcaption>From L1 execution to L5 meta-improvement.</figcaption>
          </figure>
        </article>
      </main>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <Brand />
      <p>Systems that improve how they improve.</p>
      <a className="footer-github" href={githubUrl} target="_blank" rel="noreferrer" aria-label="Theseus Lab GitHub"><Github size={18} aria-hidden="true" /></a>
    </footer>
  )
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])

  useEffect(() => {
    const target = document.getElementById(hash.slice(1))
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
      if (hash === '#main-content') target.focus({ preventScroll: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [hash])

  return hash.startsWith('#/research/') ? <ResearchDetail /> : <Home />
}
