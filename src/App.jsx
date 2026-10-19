import { useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useMode from './hooks/useMode'
import useCursor from './hooks/useCursor'
import useReveal from './hooks/useReveal'
import useBackgroundCanvas from './hooks/useBackgroundCanvas'
import useScrollProgress from './hooks/useScrollProgress'
import useTilt from './hooks/useTilt'
import useMagnetic from './hooks/useMagnetic'
import SvgSprite from './components/SvgSprite'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSidebar'
import MobileSocialStrip from './components/MobileSocialStrip'
import MobileBottomNav from './components/MobileBottomNav'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import CertificatesPage from './pages/CertificatesPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const { mode, toggleMode } = useMode()
  const canvasRef = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useCursor(mode)
  useReveal(null)
  useBackgroundCanvas(canvasRef)
  useTilt()
  useMagnetic()
  const progress = useScrollProgress()

  return (
    <>
      <ScrollProgress progress={progress} />
      <ScrollManager />
      <SvgSprite />
      <LoadingScreen />
      <canvas id="bgCanvas" ref={canvasRef} aria-hidden="true"></canvas>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {isHome && <SocialSidebar mode={mode} />}
      {isHome && <MobileSocialStrip />}
      <main id="mainContent">
        <Routes>
          <Route path="/" element={<HomePage mode={mode} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer mode={mode} />
      </main>
      <MobileBottomNav />
      <BackToTop />
    </>
  )
}

export default App
