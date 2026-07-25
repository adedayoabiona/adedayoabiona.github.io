import { products } from '../data/products'
import { ExtLink, Section, Tag } from './ui'

export function Products() {
  return (
    <Section
      id="products"
      index="04"
      title="products"
      lead="Products whose data layer I built. The code sits in private company repos, so each shipped one links to its public launch."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {products.map((product, i) => (
          <article
            key={product.name}
            /* First card spans both columns; it's the strongest story. */
            className={`reveal flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-bright sm:p-7 ${
              i === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h3 className="text-lg leading-snug font-semibold text-ink">{product.name}</h3>
              <span className="shrink-0 font-mono text-[11px] text-ink-faint">{product.year}</span>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <p className="mb-1.5 font-mono text-[10px] tracking-[0.16em] text-ink-faint">
                  PROBLEM
                </p>
                <p className="text-ink-dim">{product.problem}</p>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-[10px] tracking-[0.16em] text-ink-dim">
                  WHAT I BUILT
                </p>
                <p className="text-ink">{product.contribution}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className="mt-6 border-t border-line pt-4">
              {product.href ? (
                <ExtLink href={product.href}>{product.linkLabel}</ExtLink>
              ) : (
                <span className="font-mono text-xs text-ink-faint">{product.status}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
