import { interests } from '../data/interests'
import { Section } from './ui'

export function Interests() {
  return (
    <Section
      id="interests"
      index="07"
      title="away from the stack"
      lead="Two habits that shape how I think about pace and about trends."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {interests.map((interest) => (
          <div
            key={interest.key}
            className="reveal rounded-lg border border-line border-l-2 border-l-accent-deep bg-surface p-6 transition-colors hover:border-line-bright hover:border-l-ink-faint"
          >
            <h3 className="text-base font-semibold text-ink">{interest.headline}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">{interest.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
