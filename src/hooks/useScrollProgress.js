import { useEffect, useState } from 'react'

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf
    const update = () => {
      raf = null
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const value = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0
      setProgress(Math.min(100, Math.max(0, value)))
    }
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf != null) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
