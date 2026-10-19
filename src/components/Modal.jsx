import { useEffect } from 'react'

export default function Modal({ active, onClose, className, children }) {
  useEffect(() => {
    if (!active) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [active, onClose])

  return (
    <div className={`modal${active ? ' active' : ''}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className={className}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        {children}
      </div>
    </div>
  )
}
