import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/portfolioData'
import ProjectModal from '../components/ProjectModal'
import { GitHubLogo, IconArrowLeft } from '../components/icons'

function ProjectFullCard({ project, onOpen, index }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div
      className="project-full-card reveal"
      data-index={index}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={(e) => {
        if (e.target.closest('a') || e.target.closest('button')) return
        onOpen(project)
      }}
    >
      <div className="img-wrap">
        {imgFailed ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              minHeight: '260px',
              fontFamily: 'var(--font-display)',
              fontSize: '4rem',
              fontWeight: 700,
              color: 'var(--accent-primary)',
              opacity: 0.2
            }}
          >
            {project.title.charAt(0)}
          </div>
        ) : (
          <img src={project.previewImage} alt={project.title} loading="lazy" onError={() => setImgFailed(true)} />
        )}
        <div className="img-overlay"></div>
        {project.featured && <span className="project-featured-badge">Featured</span>}
      </div>
      <div className="info">
        <h2>{project.title}</h2>
        <p className="desc">{project.solution}</p>
        <div className="tags">
          {project.techStack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="actions">
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

export default function ProjectsPage() {
  const [selected, setSelected] = useState(null)
  const projects = data.projects

  return (
    <section className="page-full">
      <div className="page-aurora" aria-hidden="true">
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
      </div>
      <div className="container">
        <div className="page-header">
          <h1>
            All <span>Projects</span>
          </h1>
          <Link to="/#projects" className="back-link">
            <IconArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
        <div className="projects-list" id="projectsFullList">
          {projects.map((p, i) => (
            <ProjectFullCard key={p.id} project={p} onOpen={setSelected} index={i} />
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
