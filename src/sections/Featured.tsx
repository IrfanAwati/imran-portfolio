import { useState } from 'react'
import { profile } from '../content/profile'
import { featured, stats } from '../content/work'
import { Ghost, Squiggle } from '../components/Doodles'
import { Reveal } from '../components/motion'

/** "Featured showreel" panel from the reference, reworked as a featured profile card. */
export function Featured() {
  const [imgOk, setImgOk] = useState(true)
  return (
    <section className="panel featured" id="featured" aria-labelledby="featured-title">
      <Reveal className="feat-copy">
        <h2 className="marker-stack" id="featured-title">
          <span>{featured.kicker}</span>
          <em>{featured.title.join(' ')}</em>
          <Squiggle className="feat-squiggle" size={120} />
        </h2>
        <p>{featured.text}</p>
        <a href="#experience" className="link-arrow">
          See the journey
          <span aria-hidden="true">→</span>
        </a>
      </Reveal>

      <Reveal className="feat-media" delay={0.1}>
        <div className="feat-frame">
          {imgOk ? (
            <img
              src={profile.images.portrait}
              alt={`${profile.first} ${profile.last}, professional portrait (AI-enhanced from his photo)`}
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="feat-missing" />
          )}
          <div className="feat-overlay">
            <p className="feat-words" aria-hidden="true">
              <span>Plan.</span>
              <span>Build.</span>
              <span>Deliver.</span>
              <span>Repeat.</span>
            </p>
            {stats.length > 0 && (
              <ul className="feat-stats">
                {stats.map((s) => (
                  <li key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal className="feat-side" delay={0.2}>
        <p className="sticky-note" aria-hidden="true">
          {featured.note.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>
        <Ghost className="feat-ghost" />
      </Reveal>
    </section>
  )
}
