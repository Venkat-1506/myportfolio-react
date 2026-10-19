import { useEffect } from 'react'

export default function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef?.current || document
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const all = root.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right')
      all.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const selector = '.reveal, .reveal-scale, .reveal-left, .reveal-right'

    const observeAll = () => {
      root.querySelectorAll(selector).forEach((el) => {
        if (!el.dataset.revealObserved) {
          el.dataset.revealObserved = 'true'
          observer.observe(el)
        }
      })
    }

    observeAll()

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(() => observeAll())
    })

    mutationObserver.observe(root, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [rootRef])
}
