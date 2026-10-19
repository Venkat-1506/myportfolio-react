import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/portfolioData'
import CertModal from '../components/CertModal'

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Certs</span>
          <h2 className="section-title">
            Certificates I've <span className="highlight">earned</span>
          </h2>
          <p className="section-desc">Scroll to browse the collection.</p>
        </div>
        <div className="cert-stack" id="certsContainer">
          {data.certificates.map((cert, index) => (
            <div
              className="cert-card"
              key={cert.title}
              style={{ '--i': index }}
              onClick={(e) => {
                e.stopPropagation()
                setSelected(cert)
              }}
            >
              <img src={cert.image} alt={cert.title} loading="lazy" />
              <div className="info">
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
                <span className="cat">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <Link to="/certificates" className="btn-primary btn-pulse">View All Certificates</Link>
        </div>
      </div>
      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
