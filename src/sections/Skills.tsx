import type { CSSProperties } from 'react'
import { skills, strengths } from '../content/skills'
import { certifications, education } from '../content/work'
import { MarkerTitle, Reveal } from '../components/motion'
import { Arrow } from '../components/Doodles'

export function Skills() {
  return (
    <section className="panel skills" id="skills" aria-labelledby="skills-title">
      <div className="skills-main">
        <MarkerTitle a="Tools" b="& Skills" id="skills-title" />
        <ul className="tool-row">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <li className="tool" style={{ '--c': s.color } as CSSProperties}>
                <span className="tool-tile">
                  {s.icon ? <img src={`/icons/${s.icon}.svg`} alt="" loading="lazy" /> : <b>{s.mono}</b>}
                </span>
                <span className="tool-name">{s.name}</span>
              </li>
            </Reveal>
          ))}
        </ul>
        {strengths.length > 0 && (
          <ul className="chips">
            {strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
      </div>
      <p className="mode-scribble" aria-hidden="true">
        <Arrow className="mode-arrow" size={50} />
        <span>Work mode:</span>
        <span>On</span>
      </p>

      {(education.length > 0 || certifications.length > 0) && (
        <div className="creds">
          {education.length > 0 && (
            <div>
              <h3 className="mini-head">Education</h3>
              <ul>
                {education.map((e) => (
                  <li key={e.school}>
                    <b>{e.degree}</b>
                    <span>
                      {e.school}
                      {e.period && ` · ${e.period}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {certifications.length > 0 && (
            <div>
              <h3 className="mini-head">Certifications</h3>
              <ul>
                {certifications.map((c) => (
                  <li key={c.name}>
                    <b>{c.name}</b>
                    <span>
                      {c.issuer}
                      {c.year && ` · ${c.year}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
