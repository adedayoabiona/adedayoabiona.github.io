import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Interests } from './components/Interests'
import { Nav } from './components/Nav'
import { Products } from './components/Products'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Stack } from './components/Stack'
import { useReveal } from './hooks/useReveal'
import { profile } from './data/profile'

export default function App() {
  useReveal()

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded focus:border focus:border-accent focus:bg-base focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-accent"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Products />
        <Projects />
        <Research />
        <Interests />
        <Contact />
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 font-mono text-[11px] text-ink-faint sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Built with React, TypeScript and Tailwind. Deployed on GitHub Pages.</p>
        </div>
      </footer>
    </>
  )
}
