import { experience, type Job } from '../data'
import './Experience.css'

function ExperienceItem({ job, isLast }: { job: Job; isLast: boolean }) {
  return (
    <div className="exp__item">
      <div className="exp__marker" aria-hidden="true">
        <div className="exp__dot" />
        {!isLast && <div className="exp__line" />}
      </div>
      <div className="exp__card">
        <div className="exp__header">
          <div>
            <h3 className="exp__company">{job.company}</h3>
            <p className="exp__title">{job.title}</p>
          </div>
          <div className="exp__meta">
            <span className="exp__dates">{job.dates}</span>
            <span className="exp__location">{job.location}</span>
          </div>
        </div>
        <ul className="exp__bullets">
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="exp__tech">
          {job.tech.map(t => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-eyebrow">Where I've worked</p>
        <h2 className="section-title">Experience</h2>
        <div className="exp__timeline">
          {experience.map((job, i) => (
            <ExperienceItem key={job.company} job={job} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
