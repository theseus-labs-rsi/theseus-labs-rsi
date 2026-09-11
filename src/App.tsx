import { useEffect, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { researchItems, type ResearchItem } from './data/research'

const githubUrl = 'https://github.com/theseus-labs-rsi'
const arxivUrl = 'https://arxiv.org/abs/2609.11873'

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Theseus Lab home">
      <img src="./brand/icon-white.svg" alt="" />
      <span>THESEUS</span>
      <small>LAB</small>
    </a>
  )
}

function Header({ detail = false }: { detail?: boolean }) {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Main navigation">
        <a href={detail ? '#/' : '#research'}>Research</a>
        <a href={detail ? '#/' : '#about'}>About</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}

function HeroSignal() {
  return (
    <div className="signal" aria-hidden="true">
      <div className="signal-ring ring-one" />
      <div className="signal-ring ring-two" />
      <div className="signal-axis axis-x" />
      <div className="signal-axis axis-y" />
      <div className="signal-node node-a" />
      <div className="signal-node node-b" />
      <div className="signal-node node-c" />
      <div className="signal-path" />
      <span className="signal-label label-a">observe</span>
      <span className="signal-label label-b">update</span>
      <span className="signal-label label-c">verify</span>
      <span className="signal-index">T / 01</span>
    </div>
  )
}

function Home() {
  return (
    <div id="top" className="site-shell">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> RECURSIVE INTELLIGENCE SYSTEMS</p>
            <h1 id="hero-title">
              Intelligence,
              <br />
              <em>built to evolve.</em>
            </h1>
            <p className="hero-summary">
              We explore AI systems that learn from experience,
              <br className="desktop-only" />
              rewrite their strategies, and evolve through verification.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore research <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
                Visit GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <HeroSignal />
          <div className="hero-footer">
            <span>THESEUS LAB · 2026</span>
            <span>SHANGHAI / DISTRIBUTED</span>
          </div>
        </section>

        <section id="research" className="research-section" aria-labelledby="research-title">
          <div className="section-heading">
            <div>
              <p className="section-index">01 / RESEARCH</p>
              <h2 id="research-title">Research & Notes</h2>
            </div>
            <p>Work in progress, published results, and signals pointing toward the next update.</p>
          </div>

          <div className="research-list">
            {researchItems.map((item) => <ResearchCard key={item.slug} item={item} />)}
          </div>
        </section>

        <section id="about" className="manifesto" aria-labelledby="manifesto-title">
          <p className="section-index">02 / PRINCIPLE</p>
          <h2 id="manifesto-title">
            Intelligence is not a finished object.
            <span>We study how it builds its next version.</span>
          </h2>
          <div className="manifesto-meta">
            <p>REASON · ADAPT · VERIFY</p>
            <p>From execution to meta-improvement, we seek sustainable and verifiable paths of evolution.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ResearchCard({ item }: { item: ResearchItem }) {
  const published = item.status === 'published'
  const content = (
    <>
      <div className="card-number">{item.index}</div>
      <div className="card-content">
        <div className="card-meta"><span>{item.kind}</span><time>{item.date}</time></div>
        <h3>{item.title}</h3>
        <p className="card-title-en">{item.titleEn}</p>
        <p className="card-summary">{item.summary}</p>
        <span className="card-action">
          {published ? 'View research' : 'Awaiting update'}
          {published && <ArrowRight size={17} aria-hidden="true" />}
        </span>
      </div>
      <div className={`card-visual ${published ? '' : 'placeholder-visual'}`}>
        {item.image ? (
          <img src={item.image} alt="Preview of the RSI long-horizon evolution map" />
        ) : (
          <div className="placeholder-mark" aria-hidden="true"><span /><span /><span /></div>
        )}
      </div>
    </>
  )

  return published ? (
    <a className="research-card featured" href={`#/research/${item.slug}`}>{content}</a>
  ) : (
    <article className="research-card placeholder">{content}</article>
  )
}

function ResearchDetail() {
  const item = researchItems[0]
  return (
    <div className="site-shell detail-shell">
      <Header detail />
      <main className="detail-main">
        <a className="back-link" href="#/">
          <ArrowLeft size={17} aria-hidden="true" /> Back to all research
        </a>
        <article>
          <header className="detail-hero">
            <p className="eyebrow"><span /> {item.kind} · ARXIV:2609.11873</p>
            <h1>{item.title}</h1>
            <p className="detail-en">{item.titleEn}</p>
            <p className="detail-lead">{item.summary}</p>
            <div className="detail-actions">
              <a className="button button-primary" href={arxivUrl} target="_blank" rel="noreferrer">
                View on arXiv <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="./research/2609.11873v1.pdf" target="_blank">
                Read the PDF
              </a>
            </div>
          </header>

          <section className="contributions" aria-labelledby="contribution-title">
            <div className="contribution-heading">
              <p className="section-index">CONTRIBUTIONS</p>
              <h2 id="contribution-title">What this work contributes</h2>
            </div>
            <ol>
              <li><span>01</span><div><h3>A unified research landscape</h3><p>Places RSI work across tasks, systems and update targets into a framework that makes meaningful comparison possible.</p></div></li>
              <li><span>02</span><div><h3>Signals in the field</h3><p>Synthesizes shared directions, capability boundaries and the critical research loops that remain open.</p></div></li>
              <li><span>03</span><div><h3>A long-horizon map</h3><p>Connects execution, strategy, experimentation, experience, deployment and meta-improvement into one trajectory.</p></div></li>
            </ol>
          </section>

          <figure className="map-figure">
            <div className="figure-label"><span>FIGURE 01</span><span>LONG-HORIZON EVOLUTION MAP</span></div>
            <img src="./research/survey-cover-fig.png" alt="RSI evolution map from in-task iteration to meta-improvement" />
            <figcaption>A long-horizon view of RSI systems, progressing from L1 execution to L5 meta-improvement.</figcaption>
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
      <p>Exploring systems that can improve how they improve.</p>
      <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Theseus Lab GitHub">
        <Github size={19} aria-hidden="true" />
      </a>
    </footer>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash.startsWith('#/research/') ? <ResearchDetail /> : <Home />
}

export default App
