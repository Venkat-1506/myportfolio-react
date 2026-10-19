import { useEffect } from 'react'

export default function useTilt(selector = '.project-card, .beyond-item, .edu-card') {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const MAX = 8
    const listeners = []

    const attach = (el) => {
      if (el.dataset.tiltBound) return
      el.dataset.tiltBound = 'true'

      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty('--tilt-x', `${(-py * MAX).toFixed(2)}deg`)
        el.style.setProperty('--tilt-y', `${(px * MAX).toFixed(2)}deg`)
        el.style.setProperty('--tilt-glow-x', `${((px + 0.5) * 100).toFixed(1)}%`)
        el.style.setProperty('--tilt-glow-y', `${((py + 0.5) * 100).toFixed(1)}%`)
      }
      const onEnter = () => el.classList.add('tilting')
      const onLeave = () => {
        el.classList.remove('tilting')
        el.style.removeProperty('--tilt-x')
        el.style.removeProperty('--tilt-y')
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      listeners.push({ el, onMove, onEnter, onLeave })
    }

    const observeAll = () => document.querySelectorAll(selector).forEach(attach)
    observeAll()

    const observer = new MutationObserver(observeAll)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      listeners.forEach(({ el, onMove, onEnter, onLeave }) => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        delete el.dataset.tiltBound
      })
    }
  }, [selector])
}
