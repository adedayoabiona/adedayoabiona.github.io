import { education } from '../data/skills'
import { profile } from '../data/profile'
import { Section } from './ui'

export function About() {
  return (
    <Section id="about" index="01" title="about" lead={profile.summary}>
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="reveal space-y-6 text-base leading-relaxed text-ink-dim">
          <p>{profile.philosophy}</p>
          <p>
            Most of my work sits where reliability actually gets decided: schema contracts that fail
            loudly, tests that run before anything reaches a dashboard, and lineage a colleague can
            read without asking me. I&apos;ve been the only data engineer on the team for two years,
            which means every decision from ingestion to orchestration to monitoring has my name on
            it, and that the boring parts, alerting and documentation, get done.
          </p>
          <p>
            I came to data through electrical engineering, and it shows. I like systems I can reason
            about end to end, I&apos;m comfortable close to the metal (embedded sensors, OCR,
            microservices) and I would rather understand why a number is wrong than patch the
            symptom.
          </p>
        </div>

        <aside className="reveal self-start border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <p className="font-mono text-xs tracking-[0.16em] text-ink-faint">EDUCATION</p>
          <p className="mt-4 font-medium text-ink">{education.school}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{education.degree}</p>
          <p className="mt-1 font-mono text-[11px] text-ink-faint">{education.grade}</p>
        </aside>
      </div>
    </Section>
  )
}
