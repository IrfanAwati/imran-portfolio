import { profile } from '../content/profile'
import { Crown } from '../components/Doodles'
import { Reveal } from '../components/motion'

const year = new Date().getFullYear()

export function Contact() {
  return (
    <footer className="panel contact" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <h2 className="contact-title" id="contact-title">
          <span>Let's build</span>
          <span>
            something <em>great!</em>
          </span>
        </h2>
      </Reveal>

      <ul className="contact-lines">
        {profile.email && (
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        )}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          <span>{profile.location}</span>
        </li>
      </ul>

      <ul className="socials" aria-label="Profiles">
        <li>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                stroke="none"
                d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 105.3 6.9 1.96 1.96 0 005.25 3zM20.44 13.4c0-3.07-1.64-4.5-3.83-4.5a3.3 3.3 0 00-2.98 1.64V8.5h-3.38V20h3.38v-6.2c0-1.64.31-3.22 2.34-3.22 2 0 2.03 1.87 2.03 3.33V20h3.38l.06-6.6z"
              />
            </svg>
          </a>
        </li>
        {profile.links.youtube && (
          <li>
            <a href={profile.links.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
                <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" />
              </svg>
            </a>
          </li>
        )}
        {profile.email && (
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </li>
        )}
      </ul>

      <p className="stay" aria-hidden="true">
        <span>Stay</span>
        <span>Focused</span>
        <Crown size={30} />
      </p>
      <p className="copyright">
        © {year} {profile.first} {profile.last}
      </p>
    </footer>
  )
}
