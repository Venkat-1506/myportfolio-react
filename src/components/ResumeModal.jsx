import Modal from './Modal'
import { RESUME_URL } from '../data/portfolioData'
import { IconExternal, IconDownload } from './icons'

export default function ResumeModal({ active, onClose }) {
  return (
    <Modal active={active} onClose={onClose} className="modal-content modal-content-wide">
      <div className="modal-body resume-modal-body">
        <div className="resume-modal-header">
          <h2>Resume</h2>
          <div className="resume-modal-actions">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary resume-modal-open">
              <IconExternal size={16} /> Open
            </a>
            <a href={RESUME_URL} className="btn-primary resume-modal-download" id="resumeDownloadBtn">
              <IconDownload size={16} /> Download
            </a>
          </div>
        </div>
        <div className="resume-modal-viewer">
          <embed src={RESUME_URL} type="application/pdf" className="resume-embed" />
        </div>
      </div>
    </Modal>
  )
}
