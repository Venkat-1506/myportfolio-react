import { useEffect, useRef } from 'react'

const HOVER_SELECTOR =
  'a, button, .mode-toggle, .project-card, .cert-card, ' +
  '.skill-group, .social-link-btn, ' +
  '.beyond-item, .footer-social-links a, .nav-link, .modal-close'

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  )
}

export default function useCursor(mode) {
  const instanceRef = useRef(null)

  useEffect(() => {
    if (isTouchDevice()) return

    const state = {
      dot: null,
      ring: null,
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      active: false,
      raf: null
    }

    const createElements = () => {
      state.dot = document.createElement('div')
      state.dot.className = 'cursor-dot visible'
      state.ring = document.createElement('div')
      state.ring.className = 'cursor-ring visible'
      document.body.appendChild(state.dot)
      document.body.appendChild(state.ring)
    }

    const onMove = (e) => {
      state.x = e.clientX
      state.y = e.clientY
    }

    const onLeave = () => {
      if (state.dot) state.dot.style.opacity = '0'
      if (state.ring) state.ring.style.opacity = '0'
    }

    const onEnter = () => {
      if (state.dot) state.dot.style.opacity = '1'
      if (state.ring) state.ring.style.opacity = '1'
    }

    const animate = () => {
      if (!state.active) return
      const isCurious = mode === 'curious'
      const lerp = isCurious ? 0.1 : 0.12
      state.cx += (state.x - state.cx) * lerp
      state.cy += (state.y - state.cy) * lerp
      if (state.dot) {
        state.dot.style.transform = `translate3d(${state.cx}px, ${state.cy}px, 0) translate(-50%, -50%)`
      }
      if (state.ring) {
        if (isCurious) {
          const wobbleX = Math.sin(Date.now() / 2000 + state.cx / 100) * 1.5
          const wobbleY = Math.cos(Date.now() / 2500 + state.cy / 100) * 1.5
          state.ring.style.transform = `translate3d(${state.cx + wobbleX}px, ${state.cy + wobbleY}px, 0) translate(-50%, -50%)`
        } else {
          state.ring.style.transform = `translate3d(${state.cx}px, ${state.cy}px, 0) translate(-50%, -50%)`
        }
      }
      state.raf = requestAnimationFrame(animate)
    }

    const onHoverOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) setHover(true)
    }

    const onHoverOut = (e) => {
      const target = e.target.closest(HOVER_SELECTOR)
      if (target) {
        const related = e.relatedTarget
        if (!related || !target.contains(related)) setHover(false)
      }
    }

    const setHover = (active) => {
      const dot = document.querySelector('.cursor-dot')
      const ring = document.querySelector('.cursor-ring')
      if (!dot || !ring) return
      dot.classList.toggle('hover', active)
      ring.classList.toggle('hover', active)
    }

    const cleanup = () => {
      state.active = false
      if (state.raf) {
        cancelAnimationFrame(state.raf)
        state.raf = null
      }
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onHoverOver)
      document.removeEventListener('mouseout', onHoverOut)
      if (state.dot) {
        state.dot.remove()
        state.dot = null
      }
      if (state.ring) {
        state.ring.remove()
        state.ring = null
      }
    }

    createElements()
    state.active = true
    state.raf = requestAnimationFrame(animate)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onHoverOver)
    document.addEventListener('mouseout', onHoverOut)

    instanceRef.current = cleanup
    return cleanup
  }, [mode])

  return instanceRef
}
