import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { profile } from '../content/profile'
import { Arrow, Bolt, Brush, Crown, Plane, Smiley, Splat, Star } from '../components/Doodles'
import { EASE } from '../components/ease'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const [imgOk, setImgOk] = useState(true)

  const up = (d: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: EASE, delay: d } }

  const name = profile.first.toUpperCase()

  return (
    <section className="hero" id="home" ref={ref} aria-labelledby="hero-name">
      <Splat className="hero-splat s1" />
      <Splat className="hero-splat s2" />
      <Splat className="hero-splat s3" />

      <div className="hero-copy">
        <motion.p className="hero-hey" {...up(0.05)}>
          Hey,
          <Arrow className="hey-arrow" size={54} />
        </motion.p>
        <motion.h1 id="hero-name" className="hero-name" {...up(0.15)}>
          <span className="im">I'm</span>
          <Crown className="name-crown" size={70} />
          <span className="nm">
            {name.slice(0, -1)}
            <em>{name.slice(-1)}</em>
          </span>
          <Brush className="name-brush" />
        </motion.h1>

        <motion.ul className="hero-tags" {...up(0.3)}>
          {profile.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </motion.ul>

        <motion.p className="hero-loc" {...up(0.36)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          Based in <b>{profile.location}</b>
          <span className="live-dot" aria-hidden="true" />
        </motion.p>

        <motion.div className="hero-ctas" {...up(0.42)}>
          <a href="#experience" className="btn btn-primary">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M7 4l13 8-13 8z" fill="currentColor" />
            </svg>
            Explore my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's talk
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </motion.div>

        <motion.p className="hero-note" {...up(0.6)} aria-hidden="true">
          <Arrow className="note-arrow" size={46} />
          {profile.heroNote.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </motion.p>

        <a href="#featured" className="scroll-cue">
          <span className="mouse" aria-hidden="true" />
          Scroll down
        </a>
      </div>

      <div className="hero-art">
        <motion.div
          className="bubble"
          initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: -14 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        >
          {profile.bubble}
        </motion.div>
        <Star className="d d-star" />
        <Star className="d d-star2" size={22} />
        <Bolt className="d d-bolt" />
        <Bolt className="d d-bolt2" size={30} />
        <Smiley className="d d-smile" />
        <Crown className="d d-crown" size={40} />
        <Plane className="d d-plane" />

        <motion.div className="avatar-wrap" style={{ y: avatarY }}>
          <div className="avatar-glow" aria-hidden="true" />
          {imgOk ? (
            <img
              className="avatar"
              src={profile.images.hero}
              alt={`Illustrated portrait of ${profile.first} ${profile.last} in a navy suit, making a peace sign (AI-enhanced from his photo)`}
              onError={() => setImgOk(false)}
              fetchPriority="high"
            />
          ) : (
            <div className="avatar avatar-missing">Portrait coming soon</div>
          )}
        </motion.div>

        <p className="side-scribble" aria-hidden="true">
          {profile.sideScribble.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
      </div>
    </section>
  )
}
