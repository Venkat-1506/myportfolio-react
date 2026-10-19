import data from '../data/portfolioData'
import { getSocialLinks, avatarForMode } from '../utils/social'
import useSectionNav from '../hooks/useSectionNav'

const FOOTER_NAV = [
  { section: 'hero', label: 'Home' },
  { section: 'about', label: 'About' },
  { section: 'projects', label: 'Projects' },
  { section: 'skills', label: 'Skills' },
  { section: 'certificates', label: 'Certs' },
  { section: 'beyond', label: 'Beyond' },
  { section: 'contact', label: 'Connect' }
]

const DOODLES = [
  'plane.svg',
  'lightbulb.svg',
  'notebook.svg',
  'graph-stats.svg',
  'database-code.svg'
]

export default function Footer({ mode }) {
  const go = useSectionNav()
  const links = getSocialLinks(data.social)
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-shell">
          <span className="shell-prompt">◈</span>
          <span className="shell-path">venkat@portfolio</span>
          <span className="shell-colon">:</span>
          <span className="shell-tilde">~</span>
          <span className="shell-dollar">$</span>
          <span className="shell-cmd">./build --footer</span>
        </div>

        <div className="footer-body">
          <div className="footer-brand">
            <div className="footer-avatar">
              <img src={avatarForMode(mode)} alt="Venkatasaarathy R" />
            </div>
            <div className="footer-brand-text">
              <h3>
                Venkatasaarathy <span>R</span>
              </h3>
              <p>Building the future, one line of code at a time.</p>
            </div>
          </div>

          <div className="footer-nav">
            <h4>Navigate</h4>
            <ul>
              {FOOTER_NAV.map((item) => (
                <li key={item.section}>
                  <a
                    href={`#${item.section}`}
                    onClick={(e) => {
                      e.preventDefault()
                      go(item.section)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="footer-social-links" id="footerSocial">
              {links.map((l) => (
                <a
                  key={l.platform}
                  href={l.url}
                  className="social-link"
                  target={l.platform === 'mail' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={l.label}
                >
                  <svg viewBox="0 0 24 24">
                    <use href={`#${l.platform}`}></use>
                  </svg>
                </a>
              ))}
            </div>
            <div className="footer-mode-row">
              <span className="mode-dot"></span>
              <span className="footer-mode-label">Mode</span>
              <span className="footer-mode" id="footerMode">
                {mode === 'engineering' ? 'System View' : 'Exploration View'}
              </span>
            </div>
          </div>
        </div>

        <div className="footer-quote-line">
          <svg className="quote-ornament" viewBox="0 0 24 24" width="18" height="18">
            <path d="M10 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <p className="footer-quote-text">"Create something better than this."</p>
          <span className="footer-quote-author">— Venkat</span>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; <span id="footerYear">{year}</span> Venkatasaarathy R. All rights reserved.
          </p>
          <div className="footer-doodles">
            {DOODLES.map((d) => (
              <img key={d} src={`/assets/doodles/${d}`} alt="" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
