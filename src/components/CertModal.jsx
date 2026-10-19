import { useEffect, useState } from 'react'
import Modal from './Modal'

export default function CertModal({ cert, onClose }) {
  const [imgFailed, setImgFailed] = useState(false)

  useEffect(() => {
    setImgFailed(false)
  }, [cert])

  if (!cert) return null

  return (
    <Modal active={!!cert} onClose={onClose} className="modal-content">
      <div className="modal-body cert-modal-body">
        {imgFailed ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px', fontSize: '3rem', opacity: 0.2 }}>📜</div>
        ) : (
          <img id="certModalImg" src={cert.image} alt={cert.title} onError={() => setImgFailed(true)} />
        )}
        <div className="modal-info">
          <h2 id="certModalTitle">{cert.title}</h2>
          <p id="certModalIssuer">Issuer: {cert.issuer}</p>
          <p id="certModalCat">Category: {cert.category}</p>
          {cert.achievement && (
            <p id="certModalAchieve" style={{ display: 'block' }}>
              Achievement: {cert.achievement}
            </p>
          )}
          {cert.description && (
            <p id="certModalDesc" className="cert-desc" style={{ display: 'block' }}>
              {cert.description}
            </p>
          )}
        </div>
      </div>
    </Modal>
  )
}
