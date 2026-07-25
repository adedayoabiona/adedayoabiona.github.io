import type { ReactNode } from 'react'

export function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string
  index: string
  title: string
  lead?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="border-t border-line/70 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="reveal mb-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-ink-faint">
            {index} / {title.toUpperCase()}
          </p>
          {lead ? (
            <h2 className="max-w-3xl text-2xl leading-snug font-semibold text-ink sm:text-3xl">
              {lead}
            </h2>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-line bg-surface px-2 py-1 font-mono text-[11px] text-ink-dim">
      {children}
    </span>
  )
}

/** External link with a trailing arrow that nudges on hover. */
export function ExtLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      /* Underline carries the link affordance now that colour can't. */
      className={`group inline-flex items-center gap-1.5 font-mono text-xs text-ink underline decoration-line-bright underline-offset-4 transition-colors hover:decoration-ink ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </a>
  )
}
