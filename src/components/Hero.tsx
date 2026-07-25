import { heroStats, profile } from '../data/profile'
import { stearsPipeline } from '../data/pipelines'
import { PipelineDiagram } from './PipelineDiagram'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Schematic grid, faded out toward the edges so it never competes with text. */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_35%,#000,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <p className="reveal mb-6 font-mono text-xs tracking-[0.2em] text-ink-dim">
          {profile.role.toUpperCase()}
        </p>

        <h1 className="reveal text-4xl leading-[1.08] font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim sm:text-xl">
          {profile.tagline}{' '}
          <span className="text-ink">
            I own the ELT pipelines, dbt warehouse and search infrastructure powering Stears, the
            data platform African private equity and VC funds use to evaluate deals.
          </span>
        </p>

        <div className="reveal mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#products"
            className="rounded border border-accent-deep bg-accent/10 px-5 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
          >
            see what I&apos;ve shipped
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded border border-line-bright px-5 py-2.5 font-mono text-sm text-ink-dim transition-colors hover:border-ink-faint hover:text-ink"
          >
            {profile.email}
          </a>
        </div>

        <dl className="reveal mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
          {heroStats.map(({ value, label }) => (
            /* Reversed so the value reads first visually while the DOM keeps
               the spec's dt-before-dd order. */
            <div key={label} className="flex flex-col-reverse gap-1.5">
              <dt className="font-mono text-[11px] leading-snug text-ink-faint">{label}</dt>
              <dd className="text-3xl font-semibold text-accent text-glow sm:text-4xl">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="reveal mt-20">
          <PipelineDiagram spec={stearsPipeline} />
        </div>
      </div>
    </section>
  )
}
