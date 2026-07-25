import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { SECTIONS } from '../data/sections'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Highlight whichever section currently occupies the upper half of the viewport. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-72px 0px -55% 0px' },
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-base/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold text-ink">
          adedayo
          <span className="text-accent">.</span>
          abiona
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Sections">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`font-mono text-xs transition-colors ${
                active === id ? 'text-accent' : 'text-ink-dim hover:text-ink'
              }`}
            >
              <span className="text-ink-faint">/</span>
              {label}
            </a>
          ))}
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded border border-accent-deep bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent/20"
          >
            résumé
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="font-mono text-xs text-ink-dim md:hidden"
        >
          {open ? '[ close ]' : '[ menu ]'}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-line bg-base px-5 pb-5 md:hidden"
          aria-label="Sections"
        >
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-line/60 py-3 font-mono text-sm text-ink-dim"
            >
              <span className="text-ink-faint">/</span>
              {label}
            </a>
          ))}
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-block rounded border border-accent-deep px-3 py-2 font-mono text-sm text-accent"
          >
            résumé ↗
          </a>
        </nav>
      ) : null}
    </header>
  )
}
