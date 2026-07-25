import { certifications, skillGroups } from '../data/skills'
import { ExtLink, Section, Tag } from './ui'

export function Stack() {
  return (
    <Section
      id="stack"
      index="02"
      title="stack"
      lead="The tools I reach for, and the certifications that back them."
    >
      <div className="reveal divide-y divide-line/70 border-y border-line/70">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid gap-3 py-6 sm:grid-cols-[auto_11rem_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-xs text-ink-faint">{group.index}</span>
            <h3 className="font-mono text-sm text-ink">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal mt-12">
        <p className="font-mono text-xs tracking-[0.16em] text-ink-faint">CERTIFICATIONS</p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-col rounded-lg border border-line bg-surface p-5 transition-colors hover:border-line-bright"
            >
              <p className="font-mono text-[11px] text-ink-faint">{cert.issuer}</p>
              <p className="mt-2 text-sm leading-snug font-medium text-ink">{cert.name}</p>

              <ul className="mt-4 flex flex-1 flex-wrap content-start gap-1.5">
                {cert.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-line pt-3">
                <ExtLink href={cert.href}>verify</ExtLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
