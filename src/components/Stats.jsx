import { Fragment, useEffect, useRef, useState } from 'react'

const STATS = [
  { count: 130, suffix: '+', label: 'Problems Solved' },
  { count: 9, label: 'Projects Built' },
  { count: 13, label: 'Certifications' },
  { count: 8.7, decimals: 1, label: 'Current CGPA' }
]

function Counter({ target, suffix = '', decimals = 0, start }) {
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
        setValue(target % 1 === 0 ? Math.floor(current) : current.toFixed(decimals))
        raf = requestAnimationFrame(update)
      } else {
        setValue(target % 1 === 0 ? Math.floor(target) : target.toFixed(decimals))
        setCounting(true)
      }
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [start, target, decimals])

  return (
    <span className={`stats-number${counting ? ' counting' : ''}`}>
      {value}
      {suffix && <span className="stats-suffix">{suffix}</span>}
    </span>
  )
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
                <Counter target={stat.count} suffix={stat.suffix} decimals={stat.decimals} start={started} />
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
