import { profile } from '../data'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact__inner">
        <p className="section-eyebrow">Say hello</p>
        <h2 className="contact__title">Let's work together.</h2>
        <p className="contact__sub">
          I'm currently open to new opportunities — SE II / III roles, ideally full-stack
          React &amp; Node. Remote-friendly.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary contact__btn">
          {profile.email}
        </a>
      </div>
    </section>
  )
}
