import React, { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const PARAGRAPHS = [
  "I'm a self-taught MERN Stack Developer with over two years of practical experience building scalable, high-performance web applications. My focus lies in crafting clean, maintainable code using modern development principles and clean architecture.",
  "I'm deeply passionate about creating intuitive, user-centric interfaces and developing robust backend systems that power seamless digital experiences. With a strong eye for detail and a problem-solving mindset, I turn complex challenges into elegant solutions.",
  "Always eager to learn, innovate, and grow — staying ahead with emerging technologies. Currently seeking exciting opportunities to contribute to forward-thinking teams and build impactful products.",
];

const STATS = [
  ['2+',   'Years of\nExperience'],
  ['10+',  'Projects\nDelivered'],
  ['MERN', 'Primary\nStack'],
  ['KL',   'Based\nIn Kerala'],
];

const About = () => {
  const ref = useRef(null);
  const vis = useIntersection(ref);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: 'var(--navy)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top border line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Heading */}
        <div className={`reveal${vis ? ' visible' : ''}`}>
          <p className="section-label">Who I Am</p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 300,
              color: 'var(--cream)',
              marginBottom: 60,
              lineHeight: 1.1,
            }}
          >
            A developer who cares<br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              about the craft
            </span>
          </h2>
        </div>

        {/* Two-column body */}
        <div
          className="about-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
        >
          {/* Paragraphs */}
          <div>
            {PARAGRAPHS.map((text, i) => (
              <p
                key={i}
                className={`reveal reveal-delay-${i + 1}${vis ? ' visible' : ''}`}
                style={{
                  fontSize: 16, lineHeight: 1.9,
                  color: 'rgba(242,237,215,0.7)',
                  marginBottom: 24, fontWeight: 300,
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Stats + links */}
          <div>
            {/* 2×2 stat grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginBottom: 40 }}>
              {STATS.map(([num, label], i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1}${vis ? ' visible' : ''}`}
                  style={{
                    padding: '32px 28px',
                    background: i % 2 === 0 ? 'var(--navy-light)' : 'rgba(201,168,76,0.05)',
                    border: '1px solid rgba(201,168,76,0.08)',
                  }}
                >
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 48, fontWeight: 300,
                    color: 'var(--gold)', lineHeight: 1,
                  }}>
                    {num}
                  </p>
                  <p style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10, letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginTop: 8, whiteSpace: 'pre-line',
                  }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div style={{ display: 'flex', gap: 20 }}>
              {[
                ['GitHub',   'https://github.com/fayeemismail'],
                ['LinkedIn', 'https://linkedin.com/in/faheemismail'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11, letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: label === 'GitHub' ? 'var(--gold)' : 'var(--muted)',
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center',
                    gap: 8, transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.gap = '14px';
                    e.currentTarget.style.color = 'var(--gold)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.gap = '8px';
                    e.currentTarget.style.color = label === 'GitHub' ? 'var(--gold)' : 'var(--muted)';
                  }}
                >
                  {label} <span>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
