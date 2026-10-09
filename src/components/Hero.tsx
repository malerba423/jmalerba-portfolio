import { profile } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__content">
        <p className="section-eyebrow">{profile.title}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__headline">
          <span className="hero__emphasis">{profile.headline.emphasis}</span> {profile.headline.rest}
        </p>
        <p className="hero__intro">{profile.intro}</p>
      </div>
    </section>
  )
}
