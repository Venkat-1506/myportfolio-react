import { useState } from 'react'
import data, { EMAIL } from '../data/portfolioData'
import { getSocialLinks } from '../utils/social'
import { IconLocation, IconMail, IconPhone, IconGlobe } from '../components/icons'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const infoCards = [
  { Icon: IconLocation, title: 'Location', body: 'India', href: null },
  { Icon: IconMail, title: 'Email', body: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: IconPhone, title: 'Phone', body: '+91 8667461604', href: 'tel:+918667461604' },
  { Icon: IconGlobe, title: 'Social', href: null, social: true }
]

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ text: '', color: '' })
  const [sending, setSending] = useState(false)

  const socialLinks = getSocialLinks(data.social)

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nextErrors = { name: '', email: '', message: '' }
    let isValid = true

    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name'
      isValid = false
    }
    if (!values.email.trim() || !EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address'
      isValid = false
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Please enter a message'
      isValid = false
    }

    setErrors(nextErrors)
    if (!isValid) return

    setSending(true)
    setStatus({ text: '', color: '' })

    try {
      const response = await fetch('https://formsubmit.co/ajax/venkatasaarathy@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim() || 'No subject',
          message: values.message.trim()
        })
      })

      if (response.ok) {
        setStatus({ text: "✅ Message sent — I'll get back to you soon!", color: '#4CAF50' })
        setValues({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Server error')
      }
    } catch {
      setStatus({ text: '📧 Opening your email client...', color: 'var(--accent-primary)' })
      const mailtoLink =
        'mailto:venkatasaarathy@gmail.com?subject=' +
        encodeURIComponent(values.subject.trim() || 'Portfolio Contact') +
        '&body=' +
        encodeURIComponent(`Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`)
      window.open(mailtoLink, '_blank')
    }

    setSending(false)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Connect</span>
          <h2 className="section-title">
            Let's build <span className="highlight">something</span>
          </h2>
          <p className="contact-desc">Have an idea, a project, or just want to chat? Reach out.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            {infoCards.map(({ Icon, title, body, href, social }) => (
              <div className={`contact-info-card${social ? ' contact-social-card' : ''}`} key={title}>
                <div className="info-icon-wrap">
                  <Icon />
                </div>
                <div className="info-details" style={social ? { flex: 1 } : undefined}>
                  <h3>{title}</h3>
                  {social ? (
                    <div className="contact-social-links" id="contactSocialLinks">
                      {socialLinks.map((l) => (
                        <a
                          key={l.platform}
                          href={l.url}
                          target={l.platform === 'mail' ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          aria-label={l.label}
                        >
                          <svg viewBox="0 0 24 24">
                            <use href={`#${l.platform}`}></use>
                          </svg>
                          {l.label.toLowerCase()}
                        </a>
                      ))}
                    </div>
                  ) : href ? (
                    <p>
                      <a href={href}>{body}</a>
                    </p>
                  ) : (
                    <p>{body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form-container">
            <form className="contact-form" id="contactForm" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="formName">Name <span aria-hidden="true">*</span></label>
                  <input type="text" id="formName" placeholder="Your name" value={values.name} onChange={set('name')} required />
                  <span className="form-error" id="nameError">{errors.name}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="formEmail">Email <span aria-hidden="true">*</span></label>
                  <input type="email" id="formEmail" placeholder="you@example.com" value={values.email} onChange={set('email')} required />
                  <span className="form-error" id="emailError">{errors.email}</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="formSubject">Subject</label>
                <input type="text" id="formSubject" placeholder="What's this about?" value={values.subject} onChange={set('subject')} />
              </div>
              <div className="form-group">
                <label htmlFor="formMessage">Message <span aria-hidden="true">*</span></label>
                <textarea id="formMessage" rows="4" placeholder="Tell me about your idea..." value={values.message} onChange={set('message')} required></textarea>
                <span className="form-error" id="messageError">{errors.message}</span>
              </div>
              <button type="submit" className="btn-primary" id="formSubmit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              <div className="form-status" id="formStatus" style={status.color ? { color: status.color } : undefined}>
                {status.text}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
