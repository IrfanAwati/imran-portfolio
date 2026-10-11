import { Analytics } from '@vercel/analytics/react'
import { MotionConfig } from 'motion/react'
import { Nav } from './components/Nav'
import { SmoothScroll } from './components/SmoothScroll'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Featured } from './sections/Featured'
import { Hero } from './sections/Hero'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SmoothScroll />
      <Nav />
      <main id="main">
        <Hero />
        <div className="panels">
          <Featured />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </div>
      </main>
      <Analytics />
    </MotionConfig>
  )
}
