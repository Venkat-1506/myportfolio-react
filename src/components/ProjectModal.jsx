import { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import { GitHubLogo, IconInfo, IconBarChart, IconCheck, IconList, IconLayers } from './icons'

export default function ProjectModal({ project, onClose }) {
  const [imgFailed, setImgFailed] = useState(false)
  const detailsRef = useRef(null)

  useEffect(() => {
    setImgFailed(false)
    const t = setTimeout(() => {
      if (detailsRef.current) detailsRef.current.scrollTop = 0
    }, 50)
    return () => clearTimeout(t)
  }, [project])

  if (!project) return null

  const hasFeatures = project.features && project.features.length

  return (
    <Modal active={!!project} onClose={onClose} className="modal-content modal-project-content">
      <div className="modal-project-body">
        <div className="modal-project-hero">
          {imgFailed ? (
            <div className="modal-project-hero-fallback" style={{ display: 'flex' }}>
              {project.title.charAt(0)}
            </div>
          ) : (
            <img
              id="modalImg"
              src={project.previewImage}
              alt={project.title}
              onError={() => setImgFailed(true)}
            />
          )}
          <div className="modal-project-hero-overlay">
            <h2 id="modalTitle">{project.title}</h2>
            <div className="modal-project-hero-tags" id="modalHeroTech">
              {project.techStack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-project-details" ref={detailsRef}>
          <div className="modal-project-section">
            <div className="modal-project-section-icon">
              <IconInfo />
            </div>
            <div className="modal-project-section-content">
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </div>
          </div>
          <div className="modal-project-section">
            <div className="modal-project-section-icon">
              <IconBarChart />
            </div>
            <div className="modal-project-section-content">
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </div>
          </div>
          <div className="modal-project-section">
            <div className="modal-project-section-icon">
              <IconCheck />
            </div>
            <div className="modal-project-section-content">
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>
          {hasFeatures && (
            <div className="modal-project-section">
              <div className="modal-project-section-icon">
                <IconList />
              </div>
              <div className="modal-project-section-content">
                <h3>Features</h3>
                <div className="modal-project-features">
                  {project.features.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {project.lessonsLearned && (
            <div className="modal-project-section">
              <div className="modal-project-section-icon">
                <IconLayers />
              </div>
              <div className="modal-project-section-content">
                <h3>Lessons Learned</h3>
                <p>{project.lessonsLearned}</p>
              </div>
            </div>
          )}
        </div>
        <div className="modal-project-footer">
          <div className="modal-project-actions">
            <a href={project.githubUrl} className="btn-primary" target="_blank" rel="noopener">
              <GitHubLogo /> View on GitHub
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} className="btn-primary" target="_blank" rel="noopener">
                <GitHubLogo /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}
