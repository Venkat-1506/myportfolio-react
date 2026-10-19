import data from '../data/portfolioData'
import { getSocialLinks, avatarForMode } from '../utils/social'

export default function SocialSidebar({ mode }) {
  const links = getSocialLinks(data.social)
  const isCurious = mode === 'curious'

  return (
    <aside className="social-sidebar" id="socialSidebar">
      <div className="social-sidebar-inner">
        <div className="social-avatar">
          <img src={avatarForMode(mode)} alt={`Venkatasaarathy R - ${isCurious ? 'Exploration Mode' : 'Engineering Mode'}`} id="sidebarAvatar" />
        </div>
        <div className="social-divider"></div>
        <div className="social-links" id="socialLinks">
          {links.map((l) => (
            <a
              key={l.platform}
              href={l.url}
              className="social-link-btn"
              target={l.platform === 'mail' ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={l.label}
              title={l.label}
            >
              <svg viewBox="0 0 24 24">
                <use href={`#${l.platform}`}></use>
              </svg>
            </a>
          ))}
        </div>
        <div className="social-divider"></div>
        <div className="social-mode-indicator">
          <span className="mode-dot" style={{ background: isCurious ? '#D4774A' : '#B86B3F' }}></span>
          <span className="mode-text" id="socialModeText">{isCurious ? 'Explore' : 'System'}</span>
        </div>
      </div>
    </aside>
  )
}
