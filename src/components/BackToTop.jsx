import { useEffect, useState } from 'react'
import { IconArrowUp } from './icons'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const hero = document.getElementById('hero')
          if (hero) {
            const heroBottom = hero.offsetTop + hero.offsetHeight
            setVisible(window.scrollY > heroBottom)
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' visible' : ''}`}
      id="backToTop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <IconArrowUp />
    </button>
  )
}
