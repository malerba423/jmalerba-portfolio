import { profile } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__content">
        <p className="hero__eyebrow">{profile.title}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__bio">{profile.bio}</p>
        <div className="hero__actions">
          <a href="#experience" className="btn btn-primary">View Experience</a>
          <a href="#contact" className="btn btn-ghost">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
