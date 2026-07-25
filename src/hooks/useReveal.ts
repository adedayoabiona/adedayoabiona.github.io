import { useEffect } from 'react'

/**
 * If the observer hasn't delivered its initial callback within this window,
 * we assume it never will. IntersectionObserver always fires once for every
 * element it starts observing, so silence here means it isn't running.
 */
const FAILSAFE_MS = 1500

/**
 * Reveals `.reveal` elements as they scroll into view.
 *
 * Deliberately fail-open: the CSS that hides them is gated behind `.js-reveal`
 * on <html>, which this hook adds. If the observer never fires (unsupported
 * browser, throttled background tab, a thrown error) the failsafe drops the
 * gate and everything shows. A portfolio must never render blank.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement

    const revealAll = () => {
      root.classList.remove('js-reveal')
      document.querySelectorAll('.reveal').forEach((node) => node.classList.add('is-visible'))
    }

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      revealAll()
      return
    }

    root.classList.add('js-reveal')

    let observerAlive = false

    const observer = new IntersectionObserver(
      (entries) => {
        observerAlive = true
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node))

    /* Only bail out if the observer proved dead, otherwise leave the
       scroll-reveal effect intact. */
    const failsafe = window.setTimeout(() => {
      if (!observerAlive) revealAll()
    }, FAILSAFE_MS)

    return () => {
      window.clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])
}
