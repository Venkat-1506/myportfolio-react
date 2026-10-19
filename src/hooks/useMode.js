import { useCallback, useEffect, useState } from 'react'

const MODE_KEY = 'mode'

function readSavedMode() {
  if (typeof window === 'undefined') return 'engineering'
  const saved = localStorage.getItem(MODE_KEY)
  return saved === 'curious' ? 'curious' : 'engineering'
}

export default function useMode() {
  const [mode, setMode] = useState(readSavedMode)

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode)
  }, [mode])

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === 'engineering' ? 'curious' : 'engineering'
      localStorage.setItem(MODE_KEY, next)
      return next
    })
  }, [])

  return { mode, toggleMode }
}
