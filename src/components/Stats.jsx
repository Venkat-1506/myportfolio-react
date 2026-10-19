import { Fragment, useEffect, useRef, useState } from 'react'

const STATS = [
  { count: 130, label: 'Problems Solved' },
  { count: 7, label: 'Projects Built' },
  { count: 12, label: 'Certifications' }
]

function Counter({ target, start }) {
  const [value, setValue] = useState(0)
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    if (!start) return
    let current = 0
    const duration = 800
    const startTime = performance.now()

    let raf
    const update = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      current = eased * target
      if (current < target) {
        setValue(Math.floor(current))
        raf = requestAnimationFrame(update)
      } else {
        setValue(target)
        setCounting(true)
      }
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [start, target])

  return <span className={`stats-number${counting ? ' counting' : ''}`}>{value}</span>
}

export default function Stats() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`stats-bar${started ? ' visible' : ''}`} id="stats">
      <div className="container">
        <div className="stats-grid" ref={ref}>
          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              <div className="stats-item">
                <Counter target={stat.count} start={started} />
                <span className="stats-label">{stat.label}</span>
              </div>
              {i < STATS.length - 1 && <div className="stats-divider"></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
