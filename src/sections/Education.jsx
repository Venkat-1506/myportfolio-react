import data from '../data/portfolioData'
import { IconCerts } from '../components/icons'

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">
            Where I've <span className="highlight">learned</span>
          </h2>
          <p className="section-desc">My academic path so far.</p>
        </div>
        <div className="edu-timeline reveal">
          {data.education.map((item, index) => (
            <div
              className={`edu-item reveal${item.highlight ? ' edu-item-highlight' : ''}`}
              key={item.degree}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <span className="edu-dot" aria-hidden="true"></span>
              <div className="edu-card">
                <div className="edu-card-head">
                  <h3>{item.degree}</h3>
                  <span className="edu-period">{item.period}</span>
                </div>
                <p className="edu-institution">{item.institution}</p>
                <span className="edu-score">
                  <IconCerts size={14} />
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="edu-languages">
          <span className="edu-languages-label">Languages</span>
          {data.languages.map((lang) => (
            <span className="edu-language-chip" key={lang.name}>
              {lang.name} <em>· {lang.level}</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
