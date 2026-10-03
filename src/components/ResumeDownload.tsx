import { useState } from 'react'
import { profile } from '../data'

interface Props {
  className?: string
}

// The PDF renderer is large, so it's only loaded when the button is clicked.
export default function ResumeDownload({ className }: Props) {
  const [busy, setBusy] = useState(false)

  const download = async () => {
    setBusy(true)
    try {
      const [{ pdf }, { default: ResumeDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./ResumeDocument'),
      ])
      const blob = await pdf(<ResumeDocument />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${profile.name.replace(/\s+/g, '-')}-Resume.pdf`
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 0)
    } catch (err) {
      console.error('Failed to generate resume PDF', err)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button type="button" className={className} onClick={download} disabled={busy}>
      {busy ? 'Generating…' : 'Resume'}
    </button>
  )
}
