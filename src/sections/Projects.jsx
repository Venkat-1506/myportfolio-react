import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/portfolioData'
import ProjectModal from '../components/ProjectModal'
import { GitHubLogo, IconChevronLeft, IconChevronRight } from '../components/icons'

const FEATURED_LABEL = <span className="project-featured-badge">Featured</span>

function ProjectCard({ project, onOpen }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div
      className="project-card"
      onClick={(e) => {
        if (e.target.closest('a')) return
        onOpen(project)
      }}
    >
      <div className="project-image">
        {imgFailed ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              minHeight: '300px',
              fontFamily: 'var(--font-display)',
              fontSize: '3rem',
              fontWeight: 700,
              color: 'var(--accent-primary)',
              opacity: 0.3
            }}
          >
            {project.title.charAt(0)}
          </div>
        ) : (
          <img src={project.previewImage} alt={project.title} loading="lazy" onError={() => setImgFailed(true)} />
        )}
        <div className="project-image-overlay">
          <span className="view-label">View Project</span>
        </div>
        {project.featured && FEATURED_LABEL}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.solution}</p>
        <div className="project-tags">
          {project.techStack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={project.githubUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
            <GitHubLogo size={14} /> GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
              <GitHubLogo size={14} /> Live Demo
            </a>
          )}
          <button
            type="button"
            className="btn-secondary project-details-btn"
            data-project={project.id}
            onClick={(e) => {
              e.stopPropagation()
              onOpen(project)
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 3a5 5 0 100 10A5 5 0 008 3zM1 8a7 7 0 1114 0A7 7 0 011 8zm7-3a1 1 0 011 1v2h2a1 1 0 110 2H9v2a1 1 0 11-2 0v-2H5a1 1 0 110-2h2V6a1 1 0 011-1z" /></svg>
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const projects = data.projects
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [hovering, setHovering] = useState(false)
  const total = projects.length

  const goToSlide = (index) => setCurrentIndex((index + total) % total)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1)
      if (e.key === 'ArrowRight') goToSlide(currentIndex + 1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, total])

  useEffect(() => {
    if (hovering || selected) return
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % total)
    }, 5000)
    return () => clearInterval(timer)
  }, [hovering, selected, total])

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">
            Projects I've <span className="highlight">built</span>
          </h2>
          <p className="section-desc">Each project is a story — here's what I learned building them.</p>
        </div>
        <div
          className="projects-carousel-wrap"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="projects-carousel">
            <div className="carousel-track" id="carouselTrack" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setSelected} />
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn carousel-prev" aria-label="Previous" onClick={() => goToSlide(currentIndex - 1)}>
              <IconChevronLeft />
            </button>
            <div className="carousel-dots" id="carouselDots">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  className={`carousel-dot${i === currentIndex ? ' active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
            <button className="carousel-btn carousel-next" aria-label="Next" onClick={() => goToSlide(currentIndex + 1)}>
              <IconChevronRight />
            </button>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <Link to="/projects" className="btn-primary btn-pulse">View All Projects</Link>
          </div>
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
