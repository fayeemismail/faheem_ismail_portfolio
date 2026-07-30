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
    background: '#120305',
    borderTop: '1px solid rgba(255, 0, 46, 0.15)',
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
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 15, fontWeight: 600,
          letterSpacing: '0.05em',
          color: '#FFFFFF', marginBottom: 4,
          textTransform: 'uppercase',
        }}>
          Faheem<span style={{ color: '#FF002E' }}>.</span>
        </p>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.5)',
        }}>
          Full-Stack Developer
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
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#FF002E'}
            onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        color: 'rgba(255, 255, 255, 0.3)',
        letterSpacing: '0.1em',
      }}>
        © {new Date().getFullYear()} · Crafted with precision
      </p>
    </div>
  </footer>
);

export default Footer;
