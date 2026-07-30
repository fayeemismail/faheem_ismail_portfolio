import React, { useState, useEffect } from 'react';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

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
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(18, 3, 5, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 0, 46, 0.15)'
          : '1px solid transparent',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(-10px)',
      }}
    >
      <nav
        style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '18px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 16, fontWeight: 600, letterSpacing: '0.05em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
          }}>
            Faheem<span style={{ color: '#FF002E' }}>.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', gap: 32 }}>
          {NAV_ITEMS.map(n => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className={`nav-item${active === n.toLowerCase() ? ' active' : ''}`}
              style={{ color: active === n.toLowerCase() ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)' }}
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
            cursor: 'pointer', color: '#FFFFFF',
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
          background: '#120305',
          borderTop: '1px solid rgba(255, 0, 46, 0.15)',
          borderBottom: '1px solid rgba(255, 0, 46, 0.15)',
          padding: '16px 48px 24px',
        }}>
          {NAV_ITEMS.map(n => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 0, 46, 0.15)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#FF002E'}
              onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
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

