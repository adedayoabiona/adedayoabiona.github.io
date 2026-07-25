import { experience } from '../data/experience'
import { PipelineDiagram } from './PipelineDiagram'
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
              <h3 className="text-xl font-semibold text-ink">
                {role.companyHref ? (
                  <a
                    href={role.companyHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-baseline gap-1.5 underline decoration-line-bright underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {role.company}
                    <span
                      aria-hidden
                      className="text-sm font-normal text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  role.company
                )}
              </h3>
              <span className="text-ink-faint">·</span>
              <p className="text-base text-ink-dim">{role.title}</p>
            </div>

            <p className="mt-2 font-mono text-xs text-ink-faint">
              {role.period}
              {role.location ? (
                <>
                  <span className="mx-2">·</span>
                  {role.location}
                </>
              ) : null}
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

            {role.pipeline ? (
              <div className="mt-8 rounded-lg border border-line bg-surface/60 p-5 sm:p-6">
                <PipelineDiagram spec={role.pipeline} />
              </div>
            ) : null}

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
