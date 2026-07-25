import { research } from '../data/research'
import { ExtLink, Section } from './ui'

export function Research() {
  return (
    <Section
      id="research"
      index="06"
      title="research"
      lead="Peer-reviewed work on making deep-learning forecasts small enough to run on constrained hardware."
    >
      <article className="reveal rounded-lg border border-line bg-surface p-6 sm:p-9">
        <p className="font-mono text-xs text-ink-dim">
          {research.journal}
          <span className="mx-2 text-ink-faint">·</span>
          {research.published}
        </p>

        <h3 className="mt-4 max-w-3xl text-xl leading-snug font-semibold text-ink sm:text-2xl">
          {research.title}
        </h3>

        <p className="mt-5 text-sm leading-relaxed text-ink-dim">
          {research.authors.map((author, i) => (
            <span key={author}>
              {i > 0 ? ', ' : ''}
              {i === research.meAt ? (
                <span className="font-semibold text-ink underline decoration-line-bright underline-offset-4">
                  {author}
                </span>
              ) : (
                author
              )}
            </span>
          ))}
        </p>

        <p className="mt-6 max-w-3xl leading-relaxed text-ink">{research.abstract}</p>

        <ul className="mt-6 space-y-1.5">
          {research.affiliations.map((affiliation) => (
            <li key={affiliation} className="font-mono text-[11px] leading-relaxed text-ink-faint">
              {affiliation}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5">
          <ExtLink href={research.href}>read the paper</ExtLink>
          <ExtLink href={research.repo}>model source</ExtLink>
        </div>
      </article>
    </Section>
  )
}
