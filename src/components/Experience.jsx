import React, { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const ACHIEVEMENTS = [
  ['Architecture & Development',
    'Designed, developed, and deployed two scalable full-stack web applications using Next.js, Node.js, and TypeScript following clean architecture principles.'],
  ['Performance Engineering',
    'Achieved up to 25% faster page loads through strategic performance optimization including code splitting, lazy loading, and server-side caching.'],
  ['Frontend Excellence',
    'Built and optimized responsive, mobile-first UIs with pixel-perfect precision and cross-browser compatibility across all major platforms.'],
  ['API Integration',
    'Integrated complex backend services with RESTful APIs and managed data persistence using MongoDB with efficient query optimization.'],
  ['Security Implementation',
    'Implemented robust authentication workflows including JWT-based auth and OAuth integrations to enhance application security.'],
  ['Engineering Culture',
    'Conducted thorough code reviews, maintained Git-based version control with structured branching strategies, and mentored junior developers.'],
];

const Experience = () => {
  const ref = useRef(null);
  const vis = useIntersection(ref);

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: 'var(--navy)',
        position: 'relative',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Heading */}
        <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 72 }}>
          <p className="section-label">Career</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 300,
            color: 'var(--cream)', lineHeight: 1.1,
          }}>
            Work<br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Experience</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          className="experience-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}
        >
          {/* Left: sticky position card */}
          <div className={`reveal reveal-delay-1${vis ? ' visible' : ''}`}>
            <div style={{ position: 'sticky', top: 120 }}>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)', marginBottom: 12,
              }}>
                2025 — Present
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36, fontWeight: 400,
                color: 'var(--cream)', marginBottom: 8,
              }}>
                Full-Stack Developer
              </h3>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 13, color: 'var(--muted)', marginBottom: 4,
              }}>
                WebEyeCraft
              </p>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11, color: 'rgba(242,237,215,0.3)',
                marginBottom: 32,
              }}>
                Kozhikode, Kerala
              </p>
              <div style={{
                width: 1, height: 80,
                background: 'linear-gradient(to bottom, var(--gold), transparent)',
              }} />
            </div>
          </div>

          {/* Right: achievement list */}
          <div>
            {ACHIEVEMENTS.map(([title, desc], i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1}${vis ? ' visible' : ''}`}
                style={{
                  display: 'flex', gap: 24,
                  marginBottom: 40, paddingBottom: 40,
                  borderBottom: '1px solid rgba(201,168,76,0.07)',
                }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0, marginTop: 4 }}>
                  <div style={{
                    width: 8, height: 8,
                    border: '1.5px solid var(--gold)',
                    borderRadius: '50%',
                    background: 'var(--midnight)',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: 3, height: 3,
                      borderRadius: '50%', background: 'var(--gold)',
                    }} />
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: 600, color: 'var(--cream)', marginBottom: 8, fontSize: 15 }}>
                    {title}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(242,237,215,0.6)', fontWeight: 300 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
