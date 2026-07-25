import { profile } from '../data/profile'

/* The label itself is the link, so no handles or host names are spelled out. */
const channels = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'GitHub', href: profile.links.github },
  { label: 'Résumé', href: profile.links.resume },
]

export function Contact() {
  return (
    /* overflow-hidden clips the decorative glow, which is wider than a phone
       viewport and would otherwise scroll the whole page sideways. */
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line/70 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <p className="reveal mb-3 font-mono text-xs tracking-[0.2em] text-ink-faint">
          08 / CONTACT
        </p>

        <h2 className="reveal max-w-2xl text-3xl leading-tight font-semibold text-ink sm:text-4xl">
          If you&apos;re building a data platform and want someone who&apos;ll own it end to end
          <span className="underline decoration-line-bright underline-offset-[6px]">
            , let&apos;s talk
          </span>
          <span
            aria-hidden
            className="ml-1 inline-block text-accent"
            style={{ animation: 'cursor-blink 1.1s step-end infinite' }}
          >
            _
          </span>
        </h2>

        <p className="reveal mt-6 max-w-xl leading-relaxed text-ink-dim">
          I&apos;m open to data engineering and platform roles, remote or on-site, and open to
          relocation. The fastest way to reach me is email.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="reveal mt-9 inline-block rounded border border-accent-deep bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
        >
          {profile.email}
        </a>

        <ul className="reveal mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
          {channels.map((channel) => {
            const external = !channel.href.startsWith('mailto:')
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer noopener' : undefined}
                  className="group inline-flex items-center gap-1.5 font-mono text-sm text-ink-dim underline decoration-line-bright underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                >
                  {channel.label}
                  {external ? (
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  ) : null}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
