import { useRef } from 'react'
import useHero3D from '../hooks/useHero3D'
import useTypewriter from '../hooks/useTypewriter'
import data, { RESUME_URL } from '../data/portfolioData'
import useSectionNav from '../hooks/useSectionNav'
import { IconGithub, IconLinkedin, IconLeetCode, IconMail, IconDownload } from '../components/icons'

const ROLES = [
  'Computer Science Engineering Student',
  'Aspiring Software Developer',
  'IIT Madras Data Science Learner',
  'Full-Stack Builder'
]

const HERO_SOCIAL = [
  { platform: 'github', url: data.social.github, label: 'GitHub', Icon: IconGithub },
  { platform: 'linkedin', url: data.social.linkedin, label: 'LinkedIn', Icon: IconLinkedin },
  { platform: 'leetcode', url: data.social.leetcode, label: 'LeetCode', Icon: IconLeetCode },
  { platform: 'mail', url: `mailto:${data.social.mail}`, label: 'Email', Icon: IconMail }
]

const DOODLES = [
  { file: 'plane.svg', cls: 'd1' },
  { file: 'lightbulb.svg', cls: 'd2' },
  { file: 'notebook.svg', cls: 'd3' },
  { file: 'graph-stats.svg', cls: 'd4' },
  { file: 'database-code.svg', cls: 'd5' }
]

export default function Hero({ mode }) {
  const canvasRef = useRef(null)
  const go = useSectionNav()
  const typed = useTypewriter(ROLES)

  useHero3D(canvasRef, mode)

  const portrait = mode === 'curious'
    ? '/assets/profile/colorful-sketch.png'
    : '/assets/profile/sketch-photo.png'

  const goSection = (e, id) => {
    e.preventDefault()
    go(id)
  }

  return (
    <section className="hero" id="hero">
      <canvas id="hero3dCanvas" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="hero-aurora" aria-hidden="true">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-bg-doodles" aria-hidden="true">
        {DOODLES.map((d) => (
          <img key={d.cls} src={`/assets/doodles/${d.file}`} className={`bg-doodle ${d.cls}`} alt="" />
        ))}
      </div>
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">
              <span className="name-first">Venkatasaarathy</span>
              <span className="name-last gold-r">R</span>
            </h1>
            <div className="hero-role">
              <p className="hero-typewriter" id="heroTypewriter">{typed}</p>
              <p className="hero-school">Computer Science Engineering Student · Aspiring Software Developer · IIT Madras BS Data Science</p>
            </div>
            <p className="hero-tagline">
              Turning ideas into <span className="accent-underline">practical software.</span>
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary btn-glow" onClick={(e) => goSection(e, 'projects')}>View Projects</a>
              <a href="#contact" className="btn-resume" onClick={(e) => goSection(e, 'contact')}>Contact Me</a>
              <a href={RESUME_URL} download className="btn-resume btn-resume-download">
                <IconDownload size={18} />
                Resume
              </a>
            </div>
            <div className="hero-social">
              {HERO_SOCIAL.map(({ platform, url, label, Icon }) => (
                <a
                  key={platform}
                  href={url}
                  target={platform === 'mail' ? undefined : '_blank'}
                  rel="noopener"
                  aria-label={label}
                  className="hero-social-link"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <div className="hero-glow"></div>
              <img src={portrait} alt="Venkatasaarathy R" id="heroPortrait" className="hero-portrait-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
