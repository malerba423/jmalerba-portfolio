import { Document, Page, Text, View, Link, StyleSheet, Font } from '@react-pdf/renderer'
import { profile, experience, education, skills, projects } from '../data'

// Keep words intact — hyphenated tech names look wrong and hurt ATS keyword matching.
Font.registerHyphenationCallback(word => [word])

const ACCENT = '#B86E00'
const TEXT = '#1a1a1a'
const MUTED = '#555555'

const s = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 48,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    lineHeight: 1.4,
    color: TEXT,
  },
  name: { fontSize: 22, fontFamily: 'Helvetica-Bold', lineHeight: 1.2 },
  title: { fontSize: 11, color: ACCENT, marginTop: 4 },
  contact: { flexDirection: 'row', gap: 12, marginTop: 6, color: MUTED },
  link: { color: MUTED, textDecoration: 'none' },
  bio: { marginTop: 10 },
  section: { marginTop: 14 },
  heading: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: ACCENT,
    borderBottomWidth: 0.75,
    borderBottomColor: '#cccccc',
    paddingBottom: 3,
    marginBottom: 6,
  },
  skillRow: { flexDirection: 'row', marginBottom: 3 },
  skillLabel: { width: 130, fontFamily: 'Helvetica-Bold' },
  skillList: { flex: 1 },
  job: { marginBottom: 9 },
  jobHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  jobTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5 },
  jobMeta: { color: MUTED },
  bullet: { flexDirection: 'row', marginTop: 2 },
  bulletDot: { width: 10 },
  bulletText: { flex: 1 },
  tech: { color: MUTED, fontSize: 8.5, marginTop: 3 },
})

export default function ResumeDocument() {
  return (
    <Document title={`${profile.name} — Resume`} author={profile.name}>
      <Page size="LETTER" style={s.page}>
        <View>
          <Text style={s.name}>{profile.name}</Text>
          <Text style={s.title}>{profile.title}</Text>
          <View style={s.contact}>
            <Link src={`mailto:${profile.email}`} style={s.link}>{profile.email}</Link>
            <Link src={`https://${profile.website}`} style={s.link}>https://{profile.website}</Link>
          </View>
          <Text style={s.bio}>{profile.bio}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Experience</Text>
          {experience.map(job => (
            <View key={job.company} style={s.job} wrap={false}>
              <View style={s.jobHeader}>
                <Text style={s.jobTitle}>{job.title} · {job.company}</Text>
                <Text style={s.jobMeta}>{job.dates}</Text>
              </View>
              <Text style={s.jobMeta}>{job.location}</Text>
              {job.bullets.map(b => (
                <View key={b} style={s.bullet}>
                  <Text style={s.bulletDot}>•</Text>
                  <Text style={s.bulletText}>{b}</Text>
                </View>
              ))}
              <Text style={s.tech}>{job.tech.join(' · ')}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Skills</Text>
          {Object.entries(skills).map(([group, items]) => (
            <View key={group} style={s.skillRow}>
              <Text style={s.skillLabel}>{group}</Text>
              <Text style={s.skillList}>{items.join(', ')}</Text>
            </View>
          ))}
        </View>

        <View style={s.section} wrap={false}>
          <Text style={s.heading}>Education</Text>
          <View style={s.jobHeader}>
            <Text style={s.jobTitle}>{education.degree} · {education.school}</Text>
            <Text style={s.jobMeta}>{education.year}</Text>
          </View>
          <Text style={s.jobMeta}>{education.details}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Selected Projects</Text>
          {projects.map(p => (
            <View key={p.title} style={s.job} wrap={false}>
              <Text style={s.jobTitle}>{p.title} · <Text style={s.jobMeta}>{p.context}</Text></Text>
              <Text>{p.description}</Text>
              <Text style={s.tech}>{p.tech.join(' · ')}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
