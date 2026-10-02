import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>Joel Malerba</span>
          <span className="footer__right">
            Built with React &amp; Vite · Hosted on Render
          </span>
        </div>
      </footer>
    </>
  )
}
