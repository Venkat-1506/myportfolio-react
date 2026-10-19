import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scroll'

export default function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback(
    (id) => {
      if (location.pathname === '/') {
        scrollToSection(id)
      } else {
        navigate('/#' + id)
      }
    },
    [location.pathname, navigate]
  )
}
