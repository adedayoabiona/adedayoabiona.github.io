import { coursework, projects } from '../data/projects'
import { awards } from '../data/skills'
import { ExtLink, Section, Tag } from './ui'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      index="05"
      title="projects"
      lead="Public code you can read end to end, picked for what each one shows rather than for stars."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {featured.map((project) => (
          <article
            key={project.name}
            className="reveal flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent-deep"
          >
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className="font-mono text-base font-semibold text-ink">{project.name}</h3>
              <span className="shrink-0 font-mono text-[11px] text-ink-faint">{project.year}</span>
            </div>

            <p className="text-sm leading-relaxed font-medium text-ink">{project.summary}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-dim">{project.detail}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4">
              <ExtLink href={project.repo}>source</ExtLink>
              {project.extraLink ? (
                <ExtLink href={project.extraLink.href}>{project.extraLink.label}</ExtLink>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {/* Secondary projects, denser presentation */}
      <ul className="reveal mt-6 divide-y divide-line/70 border-y border-line/70">
        {rest.map((project) => (
          <li key={project.name} className="py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h3 className="font-mono text-sm font-semibold text-ink">
                {project.name}
                <span className="ml-3 font-normal text-ink-faint">{project.year}</span>
              </h3>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <ExtLink href={project.repo}>source</ExtLink>
                {project.extraLink ? (
                  <ExtLink href={project.extraLink.href}>{project.extraLink.label}</ExtLink>
                ) : null}
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.summary}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-faint">{project.detail}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <p className="reveal mt-6 font-mono text-xs text-ink-faint">
        {coursework.label}:{' '}
        {coursework.repos.map((repo, i) => (
          <span key={repo.name}>
            {i > 0 ? <span className="text-ink-faint"> · </span> : null}
            <a
              href={repo.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-dim underline decoration-line-bright underline-offset-4 transition-colors hover:text-ink"
            >
              {repo.name}
            </a>
          </span>
        ))}
      </p>

      <div className="reveal mt-14">
        <p className="font-mono text-xs tracking-[0.16em] text-ink-faint">AWARDS</p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {awards.map((award) => (
            <li
              key={award.title}
              className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-line-bright"
            >
              <p className="font-mono text-xs text-ink">{award.placing}</p>
              <p className="mt-2 text-sm leading-snug font-medium text-ink">{award.title}</p>
              <p className="mt-1.5 font-mono text-[11px] text-ink-faint">{award.event}</p>
              <ExtLink href={award.href} className="mt-3">
                certificate
              </ExtLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
