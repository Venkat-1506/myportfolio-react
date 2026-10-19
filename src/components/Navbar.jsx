import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useSectionNav from '../hooks/useSectionNav'

const NAV_ITEMS = [
  { section: 'hero', label: 'Home' },
  { section: 'about', label: 'About' },
  { section: 'projects', label: 'Projects' },
  { section: 'skills', label: 'Skills' },
  { section: 'certificates', label: 'Certs' },
  { section: 'beyond', label: 'Beyond' },
  { section: 'contact', label: 'Connect' }
]

export default function Navbar({ mode, toggleMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const go = useSectionNav()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) {
      setActive('')
      return
    }
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome, location.key])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const handleNav = (e, section) => {
    e.preventDefault()
    go(section)
    setMenuOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">&lt;/&gt;</span>
          <span className="logo-text">
            Venkatasaarathy <span>R</span>
          </span>
        </Link>
        <nav className={`header-nav${menuOpen ? ' open' : ''}`} id="headerNav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.section}>
                <a
                  href={`#${item.section}`}
                  className={`nav-link${active === item.section ? ' active' : ''}`}
                  data-section={item.section}
                  onClick={(e) => handleNav(e, item.section)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <div className="mode-toggle-wrap">
            <button
              className="mode-toggle"
              id="modeToggle"
              type="button"
              onClick={toggleMode}
              aria-label="Toggle theme mode"
            >
              <span className="mode-label" id="modeLabel">
                {mode === 'engineering' ? 'Engineering' : 'Curious'}
              </span>
              <span className="mode-track">
                <span className="mode-handle">
                  <span className="mode-icon">{mode === 'engineering' ? '⚙' : '✦'}</span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="mode-hint"
              id="modeHint"
              onClick={toggleMode}
              aria-label="Switch to Curious Mode"
            >
              ✨ Try Curious Mode
            </button>
          </div>
          <button
            className={`header-toggle${menuOpen ? ' open' : ''}`}
            id="headerToggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
