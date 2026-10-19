import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToHash(hash) {
  if (!hash || hash === '#') return
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const offset = 80
  const pos = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: pos, behavior: 'smooth' })
}

export default function ScrollManager() {
  const location = useLocation()
  const prevKey = useRef(location.key)

  useEffect(() => {
    const key = location.key
    const changed = key !== prevKey.current
    prevKey.current = key

    const apply = () => {
      if (location.hash) {
        scrollToHash(location.hash)
      } else if (changed) {
        window.scrollTo({ top: 0 })
      }
    }

    if (changed) {
      const t = setTimeout(apply, 60)
      return () => clearTimeout(t)
    }
  }, [location.key, location.hash])

  return null
}
