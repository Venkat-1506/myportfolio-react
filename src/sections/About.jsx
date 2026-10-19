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
              I'm a Computer Science Engineering student and an IIT Madras BS Data Science learner, with hands-on experience in web development and machine learning projects. I turn ideas into practical, working software — from career platforms to predictive models.
            </p>
            <p className="about-desc">
              My toolkit spans Java, Python, and JavaScript, and I've solved 130+ problems on LeetCode to keep my fundamentals sharp. I enjoy the full loop: designing the UI, wiring the logic, and shipping it to production.
            </p>
            <p className="about-desc">
              Currently going deeper into data engineering and cloud fundamentals while building practical solutions that solve real-world problems and sharpen my craft.
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
