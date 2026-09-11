import { useEffect, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { researchItems, type ResearchItem } from './data/research'

const githubUrl = 'https://github.com/theseus-labs-rsi'
const arxivUrl = 'https://arxiv.org/abs/2609.11873'

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Theseus Lab 首页">
      <img src="/brand/icon-white.svg" alt="" />
      <span>THESEUS</span>
      <small>LAB</small>
    </a>
  )
}

function Header({ detail = false }: { detail?: boolean }) {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="主导航">
        <a href={detail ? '#/' : '#research'}>研究</a>
        <a href={detail ? '#/' : '#about'}>关于</a>
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
              Theseus Lab 探索能够理解经验、改写策略，
              <br className="desktop-only" />
              并在验证中持续进化的人工智能系统。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                浏览研究 <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
                访问 GitHub <ArrowUpRight size={16} aria-hidden="true" />
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
              <h2 id="research-title">研究与观察</h2>
            </div>
            <p>记录正在发生的工作，也保留通往下一次更新的线索。</p>
          </div>

          <div className="research-list">
            {researchItems.map((item) => <ResearchCard key={item.slug} item={item} />)}
          </div>
        </section>

        <section id="about" className="manifesto" aria-labelledby="manifesto-title">
          <p className="section-index">02 / PRINCIPLE</p>
          <h2 id="manifesto-title">
            不把智能视为静止的成品。
            <span>我们研究它如何形成下一版自己。</span>
          </h2>
          <div className="manifesto-meta">
            <p>REASON · ADAPT · VERIFY</p>
            <p>从执行层到元改进层，寻找可持续、可验证的演进路径。</p>
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
          {published ? '查看研究' : '等待更新'}
          {published && <ArrowRight size={17} aria-hidden="true" />}
        </span>
      </div>
      <div className={`card-visual ${published ? '' : 'placeholder-visual'}`}>
        {item.image ? (
          <img src={item.image} alt="RSI 长程演进图预览" />
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
          <ArrowLeft size={17} aria-hidden="true" /> 返回全部研究
        </a>
        <article>
          <header className="detail-hero">
            <p className="eyebrow"><span /> {item.kind} · ARXIV:2609.11873</p>
            <h1>{item.title}</h1>
            <p className="detail-en">{item.titleEn}</p>
            <p className="detail-lead">{item.summary}</p>
            <div className="detail-actions">
              <a className="button button-primary" href={arxivUrl} target="_blank" rel="noreferrer">
                查看 arXiv <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="/research/2609.11873v1.pdf" target="_blank">
                阅读 PDF
              </a>
            </div>
          </header>

          <section className="contributions" aria-labelledby="contribution-title">
            <div className="contribution-heading">
              <p className="section-index">CONTRIBUTIONS</p>
              <h2 id="contribution-title">这项工作提供了什么</h2>
            </div>
            <ol>
              <li><span>01</span><div><h3>统一研究版图</h3><p>把分散在不同任务、系统与更新对象中的 RSI 工作放进可比较的分析框架。</p></div></li>
              <li><span>02</span><div><h3>辨认发展趋势</h3><p>综合现有系统的共同方向、能力边界与仍未闭合的关键研究回路。</p></div></li>
              <li><span>03</span><div><h3>描绘长程演进</h3><p>以演进图串联执行、策略、实验、经验、部署与元改进，为后续研究提供坐标。</p></div></li>
            </ol>
          </section>

          <figure className="map-figure">
            <div className="figure-label"><span>FIGURE 01</span><span>LONG-HORIZON EVOLUTION MAP</span></div>
            <img src="/research/survey-cover-fig.png" alt="从任务内迭代到元改进的 RSI 长程演进图" />
            <figcaption>RSI 系统的长程演进视图：从 L1 执行，逐步扩展至 L5 元改进。</figcaption>
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
