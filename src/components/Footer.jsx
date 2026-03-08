import React from 'react';

const FOOTER_LINKS = [
  ['LinkedIn',  'https://linkedin.com/in/faheemismail'],
  ['GitHub',    'https://github.com/fayeemismail'],
  ['Instagram', 'https://instagram.com/faheem_ismail_'],
  ['WhatsApp',  'https://wa.me/919562062494'],
  ['Email',     'mailto:faheemmuhammed703@gmail.com'],
];

const Footer = () => (
  <footer style={{
    background: 'var(--midnight)',
    borderTop: '1px solid rgba(201,168,76,0.12)',
    padding: '48px 40px',
  }}>
    <div
      className="footer-inner"
      style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap', gap: 24,
      }}
    >
      {/* Brand */}
      <div>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 20, fontWeight: 400,
          letterSpacing: '0.1em',
          color: 'var(--cream)', marginBottom: 4,
        }}>
          M<span style={{ color: 'var(--gold)' }}>.</span>Faheem
        </p>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10, letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          MERN Stack Developer
        </p>
      </div>

      {/* Navigation links */}
      <div className="footer-links" style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {FOOTER_LINKS.map(([label, href]) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
            rel="noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10, letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10,
        color: 'rgba(242,237,215,0.25)',
        letterSpacing: '0.1em',
      }}>
        © {new Date().getFullYear()} · Crafted with precision
      </p>
    </div>
  </footer>
);

export default Footer;
