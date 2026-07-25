import { formatDistance, formatDuration, formatPace, running } from '../data/running'
import { ExtLink, Section } from './ui'

export function Interests() {
  return (
    <Section
      id="interests"
      index="07"
      title="away from the stack"
      lead="Distance running, and the races that made it official."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="reveal">
          <p className="text-base leading-relaxed text-ink-dim">{running.intro}</p>

          <div className="mt-8 rounded-lg border border-line border-l-2 border-l-ink-faint bg-surface p-5">
            <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint">
              CURRENTLY TRAINING FOR
            </p>
            <p className="mt-2.5 text-base font-semibold text-ink">{running.training.name}</p>
            <ExtLink href={running.training.href} className="mt-3">
              race details
            </ExtLink>
          </div>
        </div>

        <div className="reveal">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="font-mono text-xs tracking-[0.16em] text-ink-faint">OFFICIAL RACES</p>
            <ExtLink href={running.stravaUrl}>every run on Strava</ExtLink>
          </div>

          <ul className="mt-5 divide-y divide-line/70 border-y border-line/70">
            {running.races.map((race) => (
              <li key={race.name} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-ink">{race.name}</h3>
                  <span className="font-mono text-[11px] text-ink-faint">{race.date}</span>
                </div>

                <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                  {[
                    { label: 'distance', value: formatDistance(race.km) },
                    { label: 'time', value: formatDuration(race.seconds) },
                    { label: 'pace', value: `${formatPace(race.km, race.seconds)} /km` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col-reverse gap-0.5">
                      <dt className="font-mono text-[10px] tracking-[0.14em] text-ink-faint">
                        {label.toUpperCase()}
                      </dt>
                      <dd className="font-mono text-sm text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>

                <ExtLink href={race.href} className="mt-3">
                  activity
                </ExtLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
