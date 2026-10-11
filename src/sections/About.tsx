import type { CSSProperties } from 'react'
import { about, life, profile } from '../content/profile'
import { Crown, Ghost } from '../components/Doodles'
import { Reveal } from '../components/motion'

const ICONS: Record<string, string> = {
  // dumbbell
  gym: 'M3 10v4M6 7v10M18 7v10M21 10v4M6 12h12',
  // globe
  travel: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
  // fork + spoon
  food: 'M7 3v8M5 3v5a2 2 0 004 0V3M7 11v10M17 3c-2 0-3 2.5-3 5.5S15 13 17 13v8',
  // camera
  video: 'M3 7h12v10H3zM15 10l6-3v10l-6-3',
}

export function About() {
  return (
    <section className="panel about" id="about" aria-labelledby="about-title">
      <Reveal className="about-art">
        <div className="lime-splash" aria-hidden="true" />
        <p className="about-words" aria-hidden="true">
          {about.words.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </p>
        <Crown className="about-crown" size={44} />
        <img
          src={profile.images.about}
          alt={`Illustration of ${profile.first} smiling with arms crossed (AI-enhanced from his photo)`}
          loading="lazy"
        />
      </Reveal>

      <Reveal className="about-copy" delay={0.1}>
        <h2 className="marker-title plain" id="about-title">
          About <em>{profile.first}</em>
        </h2>
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className="about-links">
          {profile.links.youtube && (
            <a href={profile.links.youtube} className="yt-btn" target="_blank" rel="noreferrer">
              <img src="/icons/youtube.svg" alt="" width="20" height="20" />
              Watch my vlogs
            </a>
          )}
          {profile.links.resume && (
            <a href={profile.links.resume} className="link-arrow" download>
              Download résumé <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </Reveal>

      <div className="about-side" aria-hidden="true">
        <p className="grow-scribble">
          {about.scribble.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </p>
        <Ghost className="about-ghost" />
      </div>

      <div className="life">
        <h3 className="life-head">
          Off the <em>clock</em>
        </h3>
        <ul className="life-grid">
          {life.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.06}>
              <li className="life-card" style={{ '--c': l.color } as CSSProperties}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={ICONS[l.icon]} />
                </svg>
                <b>{l.title}</b>
                <span>{l.text}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
