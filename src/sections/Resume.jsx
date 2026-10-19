import { useState } from 'react'
import { RESUME_URL } from '../data/portfolioData'
import ResumeModal from '../components/ResumeModal'
import { IconEye, IconDownload } from '../components/icons'

export default function Resume() {
  const [open, setOpen] = useState(false)

  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Resume</span>
          <h2 className="section-title">
            My <span className="highlight">Resume</span>
          </h2>
          <p className="section-desc">Preview or download my latest resume.</p>
        </div>
        <div className="resume-actions">
          <button
            type="button"
            className="btn-primary btn-glow resume-preview-btn"
            id="resumePreviewBtn2"
            onClick={() => setOpen(true)}
          >
            <IconEye size={18} />
            Preview Resume
          </button>
          <a href={RESUME_URL} download className="btn-secondary resume-download-btn">
            <IconDownload size={18} />
            Download Resume
          </a>
        </div>
        <div className="resume-preview">
          <embed src={RESUME_URL} type="application/pdf" className="resume-preview-embed" />
        </div>
      </div>
      <ResumeModal active={open} onClose={() => setOpen(false)} />
    </section>
  )
}
