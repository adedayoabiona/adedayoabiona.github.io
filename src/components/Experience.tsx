import { experience } from '../data/experience'
import { ExtLink, Section, Tag } from './ui'

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      title="experience"
      lead="Four years of owning data systems end to end, most recently as the only data engineer on the team."
    >
      <ol className="relative space-y-14 sm:space-y-16">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.period}`}
            className="reveal relative border-l border-line pl-6 sm:pl-9"
          >
            {/* Timeline node */}
            <span
              aria-hidden
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-base"
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold text-ink">{role.company}</h3>
              <span className="text-ink-faint">·</span>
              <p className="text-base text-ink-dim">{role.title}</p>
            </div>

            <p className="mt-2 font-mono text-xs text-ink-faint">
              {role.period}
              <span className="mx-2">·</span>
              {role.location}
            </p>

            <p className="mt-5 max-w-3xl leading-relaxed text-ink">{role.blurb}</p>

            <ul className="mt-5 space-y-3.5">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                  <span aria-hidden className="mt-1.5 shrink-0 font-mono text-[10px] text-ink-faint">
                    ▸
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {role.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            {role.link ? <ExtLink href={role.link.href} className="mt-5">{role.link.label}</ExtLink> : null}
          </li>
        ))}
      </ol>
    </Section>
  )
}
