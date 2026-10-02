import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Full-Stack Software Engineer</p>
        <h1 className="hero__name">Joel Malerba</h1>
        <p className="hero__bio">
          13 years building production systems across e-commerce, transportation,
          healthcare, and the bike industry. React &amp; Node on the daily —
          with a solid grounding in the messy back-office systems that actually run businesses.
        </p>
        <div className="hero__actions">
          <a href="#experience" className="btn btn-primary">View Experience</a>
          <a href="#contact" className="btn btn-ghost">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
