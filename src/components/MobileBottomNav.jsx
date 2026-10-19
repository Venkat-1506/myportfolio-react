import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useSectionNav from '../hooks/useSectionNav'
import { IconHome, IconAbout, IconProjects, IconCerts, IconResume, IconContact } from './icons'

const ITEMS = [
  { section: 'hero', label: 'Home', Icon: IconHome },
  { section: 'about', label: 'About', Icon: IconAbout },
  { section: 'projects', label: 'Projects', Icon: IconProjects },
  { section: 'certificates', label: 'Certs', Icon: IconCerts },
  { section: 'resume', label: 'Resume', Icon: IconResume },
  { section: 'contact', label: 'Contact', Icon: IconContact }
]

export default function MobileBottomNav() {
  const [active, setActive] = useState('hero')
  const go = useSectionNav()
  const location = useLocation()
  const isHome = location.pathname === '/'

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

  return (
    <nav className="mobile-bottom-nav" id="mobileBottomNav">
      {ITEMS.map(({ section, label, Icon }) => (
        <a
          key={section}
          href={`#${section}`}
          data-section={section}
          className={active === section ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            go(section)
          }}
        >
          <Icon size={20} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}
