import { useEffect } from 'react'

export default function useMagnetic(selector = '.hero-actions a, .hero-social-link, .back-to-top') {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const STRENGTH = 0.3
    const listeners = []

    const attach = (el) => {
      if (el.dataset.magneticBound) return
      el.dataset.magneticBound = 'true'

      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) * STRENGTH
        const y = (e.clientY - rect.top - rect.height / 2) * STRENGTH
        el.style.setProperty('--mag-x', `${x.toFixed(2)}px`)
        el.style.setProperty('--mag-y', `${y.toFixed(2)}px`)
        el.classList.add('magnetic-active')
      }
      const onLeave = () => {
        el.style.removeProperty('--mag-x')
        el.style.removeProperty('--mag-y')
        el.classList.remove('magnetic-active')
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      listeners.push({ el, onMove, onLeave })
    }

    const observeAll = () => document.querySelectorAll(selector).forEach(attach)
    observeAll()

    const observer = new MutationObserver(observeAll)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      listeners.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
        delete el.dataset.magneticBound
      })
    }
  }, [selector])
}
