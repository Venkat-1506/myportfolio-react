import { IconLocation, IconCerts, IconAbout } from '../components/icons'

const DETAILS = [
  { Icon: IconLocation, text: 'India' },
  { Icon: IconCerts, text: 'IIT Madras BS Data Science' },
  { Icon: IconAbout, text: 'Building since 2023' }
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <div className="section-header">
              <span className="section-tag">About Me</span>
              <h2 className="section-title">
                Who <span className="highlight">I am</span>
              </h2>
            </div>
            <p className="about-desc">
              I'm a Computer Science Engineering student at IIT Madras, pursuing a BS in Data Science alongside. I build systems that turn raw data into meaningful decisions — from full-stack web apps to data pipelines.
            </p>
            <p className="about-desc">
              My journey started with curiosity about how things work, and evolved into a passion for software engineering, data engineering, and problem-solving. I've built projects ranging from campus lost-and-found portals to handwritten digit recognition systems.
            </p>
            <p className="about-desc">
              Currently diving deep into data engineering fundamentals — SQL, PostgreSQL, Pandas, and ETL pipelines — while continuing to build practical solutions that solve real-world problems.
            </p>
            <div className="about-details">
              {DETAILS.map(({ Icon, text }) => (
                <div className="about-detail-item" key={text}>
                  <Icon size={18} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-frame">
              <div className="about-glow"></div>
              <img src="/assets/profile/about.png" alt="Venkatasaarathy R" className="about-portrait-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
