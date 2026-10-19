import { Link } from 'react-router-dom'
import { IconHome, IconProjects } from '../components/icons'

export default function NotFoundPage() {
  return (
    <div className="page-404">
      <div className="bg-grid"></div>
      <div className="bg-aurora">
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      <div className="terminal-card">
        <div className="term-bar">
          <span className="term-dot"></span>
          <span className="term-dot"></span>
          <span className="term-dot"></span>
          <span className="term-title">bash — 404</span>
        </div>
        <div className="term-body">
          <div className="term-line">
            <span className="term-prompt">$</span>
            <span>
              curl <span className="term-accent">-s</span> venkatasaarathy.dev/
              <span className="glitch-text" data-text="this-page">this-page</span>
            </span>
          </div>
          <div className="term-line">
            <span className="term-prompt">&gt;</span>
            <span className="term-error">Error 404 — Not Found</span>
          </div>
          <div className="term-line" style={{ marginTop: 'var(--space-4)' }}>
            <span className="term-prompt">$</span>
            <span className="term-comment"># The page you're looking for doesn't exist.</span>
          </div>
          <div className="term-line">
            <span className="term-prompt">&gt;</span>
            <span>
              Maybe it was <span className="term-accent">refactored</span>, <span className="term-accent">deployed</span> elsewhere, or never <span className="term-accent">committed</span>.
            </span>
          </div>

          <div className="err-code">404</div>
          <p className="err-desc">Looks like you've wandered off the mapped path. This route doesn't resolve to anything in my workspace.</p>

          <div className="err-actions">
            <Link to="/" className="btn-primary btn-glow">
              <IconHome size={16} /> Return Home
            </Link>
            <Link to="/projects" className="btn-secondary">
              <IconProjects size={16} /> View Projects
            </Link>
          </div>

          <div className="term-cmd-output">
            <span>➤</span> Try <span>curl -L venkatasaarathy.dev</span> or check your URL for typos.
          </div>
        </div>
      </div>
    </div>
  )
}
