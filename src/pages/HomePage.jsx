import Hero from '../sections/Hero'
import About from '../sections/About'
import Stats from '../components/Stats'
import Education from '../sections/Education'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Certificates from '../sections/Certificates'
import Resume from '../sections/Resume'
import Beyond from '../sections/Beyond'
import Contact from '../sections/Contact'

export default function HomePage({ mode }) {
  return (
    <>
      <Hero mode={mode} />
      <About />
      <Stats />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Resume />
      <Beyond />
      <Contact />
    </>
  )
}
