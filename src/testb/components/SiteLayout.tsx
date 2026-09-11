import { ArrowUpRight, Github } from 'lucide-react'
import type { ReactNode } from 'react'

const githubUrl = 'https://github.com/theseus-labs-rsi'

function Brand() {
  return (
    <a className="brand" href="#/" aria-label="Theseus Lab home">
      <img src="../brand/icon-black.svg" width="32" height="32" alt="" />
      <span>Theseus<span className="brand-lab"> Lab</span></span>
    </a>
  )
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main" onClick={(event) => {
        event.preventDefault()
        const main = document.getElementById('main')
        main?.focus({ preventScroll: true })
        main?.scrollIntoView()
      }}>Skip to content</a>
      <header className="site-header">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#reports">Reports</a>
          <a href="#research">Research</a>
        </nav>
        <a className="header-github" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-top">
          <Brand />
          <p>Systems that improve<br />how they improve.</p>
          <a className="footer-github" href={githubUrl} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>Theseus Lab</span>
          <span>Recursive intelligence systems</span>
        </div>
      </footer>
    </>
  )
}
