import { skills } from '../data'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-eyebrow">What I work with</p>
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skills__col" key={category}>
              <h3 className="skills__col-title">{category}</h3>
              <div className="skills__tags">
                {items.map(s => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
