import { motion, useReducedMotion } from 'motion/react'
import type { CSSProperties } from 'react'
import { roles } from '../content/work'
import { MarkerTitle, Reveal } from '../components/motion'
import { EASE } from '../components/ease'

/** "Our projects" row from the reference → one card per role. Click to expand the highlights. */
export function Experience() {
  const reduce = useReducedMotion()
  return (
    <section className="panel experience" id="experience" aria-labelledby="exp-title">
      <div className="panel-head">
        <MarkerTitle a="My" b="Journey" id="exp-title" />
        {roles.length > 4 && (
          <a href="#experience" className="link-arrow small">
            View all roles <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      <ol className="role-grid">
        {roles.map((r, i) => (
          <motion.li
            key={`${r.company}-${i}`}
            className="role-card"
            style={{ '--c': r.color } as CSSProperties}
            initial={reduce ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
          >
            <div className="role-cover">
              {r.image ? <img src={r.image} alt="" loading="lazy" /> : <span className="role-mono">{initials(r.company)}</span>}
              <span className="role-period">{r.period}</span>
            </div>
            <div className="role-body">
              <h3>{r.company}</h3>
              <p className="role-title">{r.title}</p>
              {r.place && <p className="role-place">{r.place}</p>}
              {r.points.length > 0 && (
                <details>
                  <summary>
                    Highlights <span aria-hidden="true">↗</span>
                  </summary>
                  <ul>
                    {r.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
      <Reveal>
        <span className="sr-only">End of experience list</span>
      </Reveal>
    </section>
  )
}

function initials(s: string) {
  return s
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}
