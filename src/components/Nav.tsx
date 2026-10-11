import { useEffect, useState } from 'react'
import { nav, profile } from '../content/profile'
import { Crown } from './Doodles'

export function Nav() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#home" className="logo" aria-label={`${profile.first} ${profile.last}, home`}>
        <Crown className="logo-crown" size={26} />
        <span className="logo-word">
          {profile.first.slice(0, -1)}
          <em>{profile.first.slice(-1)}</em>
        </span>
      </a>
      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Sections">
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
      </nav>
      <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
