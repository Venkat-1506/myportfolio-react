import { IconLocation, IconCerts, IconAbout } from '../components/icons'

const DETAILS = [
  { Icon: IconLocation, text: 'Chennai, Tamil Nadu, India' },
  { Icon: IconCerts, text: 'IIT Madras BS Data Science' },
  { Icon: IconAbout, text: 'CGPA 8.7 · B.E. CSE' }
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
              I'm a Computer Science and Engineering undergraduate at Prince Dr. K. Vasudevan College of Engineering &amp; Technology, alongside pursuing the BS Degree in Data Science and Applications from IIT Madras. I enjoy building practical software solutions and understanding how technology can solve real-world problems. My experience includes developing React-based web applications, working with Java and Python, and exploring data-driven systems.
            </p>
            <p className="about-desc">
              My interests lie at the intersection of Software Engineering and Data Engineering. I'm currently strengthening my foundations in SQL, PostgreSQL, Python, Pandas, and data processing concepts while exploring how data pipelines transform raw information into meaningful insights. From building student-focused platforms to experimenting with AI-powered applications, I believe in learning by building, improving through experimentation, and turning ideas into working solutions.
            </p>
            <p className="about-desc">
              I'm continuously expanding my technical skills and looking forward to building impactful software and data-driven products.
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
