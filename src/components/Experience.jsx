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
        background: '#120305',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'rgba(255, 0, 46, 0.15)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Heading */}
        <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 48 }}>
          <p className="section-label" style={{ color: '#FF002E' }}>Career</p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            color: '#FFFFFF', lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            Work<br />
            <span style={{ color: '#FF002E' }}>Experience</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          className="experience-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}
        >
          {/* Left: sticky position card */}
          <div className={`reveal reveal-delay-1${vis ? ' visible' : ''}`}>
            <div style={{
              position: 'sticky', top: 120,
              background: '#180407',
              border: '1px solid rgba(255, 0, 46, 0.15)',
              padding: '24px',
              borderRadius: 10,
            }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11, letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FF002E', marginBottom: 8,
              }}>
                2025 — Present
              </p>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 24, fontWeight: 700,
                color: '#FFFFFF', marginBottom: 8,
                letterSpacing: '-0.01em',
              }}>
                Full-Stack Developer
              </h3>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13, color: '#FFFFFF', marginBottom: 4,
              }}>
                WebEyeCraft
              </p>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11, color: 'rgba(255, 255, 255, 0.6)',
              }}>
                Kozhikode, Kerala
              </p>
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
                  marginBottom: 24, padding: '24px',
                  background: '#180407',
                  border: '1px solid rgba(255, 0, 46, 0.15)',
                  borderRadius: 10,
                }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0, marginTop: 6 }}>
                  <div style={{
                    width: 8, height: 8,
                    border: '1.5px solid #FF002E',
                    borderRadius: '50%',
                    background: '#FF002E',
                  }} />
                </div>

                <div>
                  <p style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: 8, fontSize: 16 }}>
                    {title}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.7)', fontWeight: 400 }}>
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

