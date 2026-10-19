import { useEffect, useRef, useState } from 'react'

const DEFAULT_TYPE_SPEED = () => 50 + Math.random() * 50
const DEFAULT_DELETE_SPEED = () => 25 + Math.random() * 25

export default function useTypewriter(words, options = {}) {
  const {
    typeSpeed = DEFAULT_TYPE_SPEED,
    deleteSpeed = DEFAULT_DELETE_SPEED,
    holdTime = 2000,
    deletePause = 300,
    suffix = ''
  } = options

  const [text, setText] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      const currentWord = words[wordIndex % words.length]
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1) + suffix)
        charIndex++
        if (charIndex === currentWord.length) {
          timerRef.current = setTimeout(() => {
            isDeleting = true
            type()
          }, holdTime)
          return
        }
        timerRef.current = setTimeout(type, typeSpeed())
      } else {
        setText(currentWord.substring(0, charIndex) + suffix)
        charIndex--
        if (charIndex < 0) {
          isDeleting = false
          charIndex = 0
          wordIndex = (wordIndex + 1) % words.length
          timerRef.current = setTimeout(type, deletePause)
          return
        }
        timerRef.current = setTimeout(type, deleteSpeed())
      }
    }

    type()
    return () => clearTimeout(timerRef.current)
  }, [words, typeSpeed, deleteSpeed, holdTime, deletePause, suffix])

  return text
}
