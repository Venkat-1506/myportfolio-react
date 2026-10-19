import data from '../data/portfolioData'

export default function Beyond() {
  return (
    <section className="beyond" id="beyond">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Beyond Coding</span>
          <h2 className="section-title">
            What I do <span className="highlight">outside</span>
          </h2>
        </div>
        <div className="beyond-grid" id="beyondGrid">
          {data.beyondCoding.map((item, index) => {
            const iconKey = item.icon || (item.title.includes('Type') ? 'typewriter' : 'book')
            return (
              <div className="beyond-item reveal" key={item.title} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="beyond-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <use href={`#${iconKey}`}></use>
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description || item.desc || ''}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
