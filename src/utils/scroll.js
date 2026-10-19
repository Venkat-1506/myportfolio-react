export function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return
  const offset = 80
  const pos = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: pos, behavior: 'smooth' })
  history.pushState(null, null, `#${id}`)
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function handleHashOnLoad() {
  const hash = window.location.hash.replace('#', '')
  if (hash) {
    setTimeout(() => {
      const target = document.getElementById(hash)
      if (target) {
        const offset = 80
        const pos = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: pos, behavior: 'smooth' })
      }
    }, 120)
  }
}

export const VALID_SECTIONS = ['hero', 'about', 'projects', 'skills', 'certificates', 'beyond', 'contact', 'resume']
