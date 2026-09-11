import { useEffect, useState } from 'react'
import { SiteLayout } from './components/SiteLayout'
import { researchItems } from './data/research'
import { Home } from './pages/Home'
import { ResearchDetail } from './pages/ResearchDetail'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  const report = researchItems.find((item) => hash === `#/research/${item.slug}` && item.status === 'published')
  const isUnknownResearch = hash.startsWith('#/research/') && !report

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  useEffect(() => {
    document.title = report ? `${report.title} — Theseus Lab` : 'Theseus Lab — Recursive Intelligence Systems'
    const targetId = hash === '#reports' || hash === '#research' || hash === '#main' ? hash.slice(1) : null
    const frame = window.requestAnimationFrame(() => {
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView()
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash, report])

  return (
    <SiteLayout>
      {isUnknownResearch ? (
        <main id="main" className="not-found" tabIndex={-1}>
          <p className="eyebrow">THESEUS LAB / RESEARCH</p>
          <h1>Research not found.</h1>
          <p>This report is not available. Explore our latest research below.</p>
          <a className="button button-dark" href="#reports">Back to research</a>
        </main>
      ) : report ? <ResearchDetail report={report} /> : <Home />}
    </SiteLayout>
  )
}
