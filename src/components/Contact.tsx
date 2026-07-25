import { profile } from '../data/profile'

const channels = [
  { label: 'email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'linkedin', value: 'adedayo-a', href: profile.links.linkedin },
  { label: 'github', value: 'adedayoabiona', href: profile.links.github },
  { label: 'résumé', value: 'google docs', href: profile.links.resume },
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
          I&apos;m open to data engineering and platform roles, remote or Lagos-based. The fastest
          way to reach me is email.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="reveal mt-9 inline-block rounded border border-accent-deep bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
        >
          {profile.email}
        </a>

        <dl className="reveal mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {channels.map((channel) => (
            <div key={channel.label}>
              <dt className="font-mono text-[11px] tracking-[0.14em] text-ink-faint">
                {channel.label.toUpperCase()}
              </dt>
              <dd className="mt-2">
                <a
                  href={channel.href}
                  target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer noopener"
                  className="font-mono text-sm break-words text-ink-dim transition-colors hover:text-ink"
                >
                  {channel.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
