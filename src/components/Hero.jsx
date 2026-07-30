import React from 'react';

/**
 * Hero — Clean 3-Color Modern Editorial Layout
 * Background: #120305 (Deep Dark Red)
 * Accent: #FF002E (Pure Red)
 * Text: #FFFFFF (White)
 */
const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        background: '#120305',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 0 220px',
      }}
    >
      <div className="hero-split">
        {/* ═══ LEFT: Image with Abstract Pure Red Organic Blob BEHIND ═══ */}
        <div className="hero-image-side">
          <div className="hero-image-wrapper">
            {/* Irregular Fluid Organic Red Blob Shape — strictly behind (zIndex: 1) */}
            <svg
              className="hero-organic-blob"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '130%',
                height: '130%',
                zIndex: 1,
                pointerEvents: 'none',
                filter: 'drop-shadow(0 0 60px rgba(255, 0, 46, 0.6))',
                animation: 'blobPulse 12s ease-in-out infinite alternate',
              }}
            >
              <defs>
                <radialGradient id="pureRedBlobGrad" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#FF002E" />
                  <stop offset="70%" stopColor="#C40023" />
                  <stop offset="100%" stopColor="#800017" />
                </radialGradient>
              </defs>
              <path
                d="M430,320 Q480,180 370,100 Q260,20 150,90 Q40,160 70,300 Q100,440 230,460 Q360,480 430,320 Z"
                fill="url(#pureRedBlobGrad)"
              />
            </svg>

            {/* Subject image cutout — strictly in front (zIndex: 2, NO mask overlay) */}
            <img
              src="/images/hero-bg.png"
              alt="Muhammed Faheem Ismail — Full-Stack Developer"
              className="hero-image animate-fadeUp"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom',
                maskImage: 'none',
                WebkitMaskImage: 'none',
                filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.6))',
                animationDelay: '0.2s',
              }}
            />
          </div>
        </div>

        {/* ═══ RIGHT: Minimal 3-Color Editorial Content ═══ */}
        <div className="hero-content-side">
          {/* Serif callout */}
          <div
            className="animate-fadeRight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: 4,
              animationDelay: '0.25s',
            }}
          >
            I'm
          </div>

          {/* Name */}
          <h1
            className="animate-fadeRight"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(44px, 6vw, 76px)',
              fontWeight: 900,
              lineHeight: 1.02,
              color: '#FFFFFF',
              marginBottom: 16,
              animationDelay: '0.35s',
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
            }}
          >
            MUHAMMED<br />
            <span style={{ color: '#FF002E' }}>
              FAHEEM
            </span>
          </h1>

          {/* Role line */}
          <div
            className="animate-fadeRight"
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              marginBottom: 24,
              animationDelay: '0.45s',
            }}
          >
            <span style={{ height: 1, width: 36, background: '#FF002E', flexShrink: 0 }} />
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#FF002E',
              fontWeight: 600,
            }}>
              Product Builder &amp; Full-Stack Developer
            </p>
          </div>

          {/* Description */}
          <p
            className="animate-fadeRight"
            style={{
              fontSize: 16, lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: 490, marginBottom: 36,
              fontWeight: 400,
              animationDelay: '0.55s',
            }}
          >
            Crafting high-performance web applications with modern architecture,
            clean code, and craft-driven user experiences. Engineering scalable products
            with the MERN stack.
          </p>

          {/* CTA Buttons — Clean Transparent 3-Color Aesthetics */}
          <div
            className="animate-fadeRight"
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animationDelay: '0.65s' }}
          >
            <button
              onClick={() => scrollTo('contact')}
              style={{
                background: 'transparent',
                border: '1px solid #FF002E',
                color: '#FFFFFF',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                cursor: 'pointer',
                borderRadius: 8,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#FF002E';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 0, 46, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Let's Work Together
              <span style={{ fontSize: 16 }}>→</span>
            </button>

            <button
              onClick={() => scrollTo('projects')}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                cursor: 'pointer',
                borderRadius: 8,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FF002E';
                e.currentTarget.style.color = '#FF002E';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'none';
              }}
            >
              View Work
            </button>
          </div>

          {/* Stats row */}
          <div
            className="animate-fadeRight stats-row"
            style={{
              display: 'flex', gap: 44, marginTop: 52,
              animationDelay: '0.75s',
            }}
          >
            {[
              ['2+', 'Years Exp.'],
              ['10+', 'Projects Built'],
              ['100%', 'Commitment'],
            ].map(([num, label]) => (
              <div key={label}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 32, fontWeight: 800,
                  color: '#FFFFFF', lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}>
                  {num}
                </p>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.5)', marginTop: 8,
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 8, zIndex: 4,
        }}
      >
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.5)',
        }}>
          Scroll
        </p>
        <div style={{
          width: 1, height: 32,
          background: 'linear-gradient(to bottom, #FF002E, transparent)',
          animation: 'fadeUp 1.8s ease infinite',
        }} />
      </div>
    </section>
  );
};

export default Hero;


