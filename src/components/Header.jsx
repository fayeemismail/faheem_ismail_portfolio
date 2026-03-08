import React, { useState, useEffect } from 'react';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

/**
 * Fixed top navigation.
 * - Transparent at top, frosted-glass when scrolled.
 * - Highlights the active section based on scroll position.
 * - Collapses to a hamburger on mobile.
 */
const Header = ({ loaded }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const ids = NAV_ITEMS.map(n => n.toLowerCase());
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10,14,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(201,168,76,0.08)'
          : '1px solid transparent',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
      }}
    >
      <nav
        style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '24px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22, fontWeight: 400, letterSpacing: '0.12em',
            color: 'var(--cream)',
          }}>
            M<span style={{ color: 'var(--gold)' }}>.</span>Faheem
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', gap: 40 }}>
          {NAV_ITEMS.map(n => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className={`nav-item${active === n.toLowerCase() ? ' active' : ''}`}
            >
              {n}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-toggle"
          style={{
            background: 'none', border: 'none',
            cursor: 'none', color: 'var(--gold)',
            display: 'none',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              : <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: 'var(--navy)',
          borderTop: '1px solid rgba(201,168,76,0.1)',
          padding: '20px 40px 30px',
        }}>
          {NAV_ITEMS.map(n => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                fontFamily: "'DM Mono', monospace",
                fontSize: 12, letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(201,168,76,0.06)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {n}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
