import { profile } from '../data'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact__text">
            <p className="contact__eyebrow">What's next</p>
            <h2 className="contact__title">Let's work together.</h2>
            <p className="contact__sub">
              I'm currently open to new opportunities — senior full-stack roles, ideally
              React &amp; Node.
            </p>
          </div>
          <a href={`mailto:${profile.email}`} className="contact__btn">
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  )
}
