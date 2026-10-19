import { useState } from 'react'
import data from '../data/portfolioData'

const DEVICON_MAP = {
  Java: 'java',
  Python: 'python',
  JavaScript: 'javascript',
  SQL: 'mysql',
  HTML5: 'html5',
  CSS3: 'css3',
  React: 'react',
  'React Router': 'reactrouter',
  Vite: 'vitejs',
  'Responsive Design': 'css3',
  'Chart.js': 'chartjs',
  NumPy: 'numpy',
  'Scikit-learn': 'scikitlearn',
  Pandas: 'pandas',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'vscode',
  Netlify: 'netlify',
  PostgreSQL: 'postgresql'
}

function getInitials(name) {
  return name.split(' ').map((w) => w[0]).join('').substring(0, 2).toUpperCase()
}

function SkillTile({ name }) {
  const iconKey = DEVICON_MAP[name]
  const [failed, setFailed] = useState(false)

  return (
    <div className="skill-tile">
      {iconKey && !failed ? (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconKey}/${iconKey}-original.svg`}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="skill-tile-letter">{getInitials(name)}</span>
      )}
      <span className="skill-tile-name">{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-aurora"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            Tools I <span className="highlight">use</span>
          </h2>
        </div>
        <div className="skills-grid" id="skillsContainer">
          {data.skills.map((group, index) => (
            <div
              className="skill-group reveal"
              key={group.title}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h4>{group.title}</h4>
              <div className="items">
                {group.items.map((name) => (
                  <SkillTile key={name} name={name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
