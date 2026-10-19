import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/portfolioData'
import CertModal from '../components/CertModal'
import { IconArrowLeft } from '../components/icons'

export default function CertificatesPage() {
  const [selected, setSelected] = useState(null)
  const certs = data.certificates

  return (
    <section className="page-full">
      <div className="page-aurora" aria-hidden="true">
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
      </div>
      <div className="container">
        <div className="page-header">
          <h1>
            Certificate <span>Vault</span>
          </h1>
          <Link to="/#certificates" className="back-link">
            <IconArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div
              className="cert-full-card reveal"
              key={cert.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setSelected(cert)}
            >
              <img src={cert.image} alt={cert.title} loading="lazy" />
              <div className="info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span className="cat">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
