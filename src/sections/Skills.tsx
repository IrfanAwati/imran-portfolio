import type { CSSProperties } from 'react'
import { skillGroups, strengths } from '../content/skills'
import { certifications, clients, education } from '../content/work'
import { MarkerTitle, Reveal } from '../components/motion'
import { Arrow } from '../components/Doodles'

export function Skills() {
  return (
    <section className="panel skills" id="skills" aria-labelledby="skills-title">
      <div className="skills-main">
        <MarkerTitle a="Tools" b="& Skills" id="skills-title" />
        {skillGroups.map((g) => (
          <div className="tool-group" key={g.title}>
            <h3 className="tool-group-head">{g.title}</h3>
            <ul className="tool-row">
              {g.items.map((s, i) => (
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
          </div>
        ))}
      </div>
      <p className="mode-scribble" aria-hidden="true">
        <Arrow className="mode-arrow" size={50} />
        <span>Work mode:</span>
        <span>On</span>
      </p>

      <div className="skills-extra">
        <h3 className="mini-head">What I own</h3>
        <ul className="chips">
          {strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <h3 className="mini-head">Client standards</h3>
        <ul className="chips chips-strong">
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

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
