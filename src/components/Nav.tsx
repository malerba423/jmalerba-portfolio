import ResumeDownload from './ResumeDownload'
import { useTheme } from '../theme'
import './Nav.css'

interface NavLink {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function ThemeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 2a8 8 0 0 1 0 16z" fill="currentColor" />
    </svg>
  )
}

export default function Nav() {
  const { theme, toggle } = useTheme()
  const other = theme === 'dark' ? 'light' : 'dark'

  return (
    <nav className="nav">
      <div className="nav__inner container">
        <a href="#top" className="nav__logo">JM</a>
        <ul className="nav__links">
          {links.map(l => (
            <li key={l.href} className="nav__section-link">
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="btn btn-ghost nav__theme"
              onClick={toggle}
              aria-label={`Switch to ${other} theme`}
            >
              <ThemeIcon />
              {other === 'dark' ? 'Dark' : 'Light'}
            </button>
          </li>
          <li>
            <ResumeDownload className="btn btn-primary" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
