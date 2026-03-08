import React from 'react';

/**
 * Hero / landing section.
 * Features: animated headline, gold shimmer text, profile photo
 * with spinning ring decoration, floating badges, and stat counters.
 */
const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        padding: '120px 40px 80px',
      }}
    >
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div
        className="hero-grid"
        style={{
          maxWidth: 1200, margin: '0 auto', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: 60, alignItems: 'center',
        }}
      >
        {/* ── Left: text ── */}
        <div>
          <p className="section-label animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            Portfolio 2025
          </p>

          <h1
            className="animate-fadeUp"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(52px, 7vw, 96px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--cream)',
              marginBottom: 8,
              animationDelay: '0.3s',
            }}
          >
            Muhammed<br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Faheem
            </span>
          </h1>

          {/* Role divider */}
          <div
            className="animate-fadeUp"
            style={{
              display: 'flex', alignItems: 'center', gap: 16,
              margin: '24px 0 32px',
              animationDelay: '0.45s',
            }}
          >
            <span style={{ height: 1, width: 50, background: 'var(--gold)', flexShrink: 0 }} />
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12, letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              MERN Stack · Full-Stack Developer
            </p>
          </div>

          <p
            className="animate-fadeUp"
            style={{
              fontSize: 17, lineHeight: 1.8,
              color: 'rgba(242,237,215,0.65)',
              maxWidth: 520, marginBottom: 48,
              fontWeight: 300,
              animationDelay: '0.55s',
            }}
          >
            Crafting scalable, high-performance web applications with 2+ years of
            hands-on experience. Clean code, elegant architecture, seamless experiences.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fadeUp"
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animationDelay: '0.65s' }}
          >
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Let's Work Together
            </button>
            <button className="btn-outline" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
          </div>

          {/* Stats row */}
          <div
            className="animate-fadeUp stats-row"
            style={{ display: 'flex', gap: 48, marginTop: 64, animationDelay: '0.75s' }}
          >
            {[
              ['2+', 'Years Experience'],
              ['10+', 'Projects Built'],
              ['5+', 'Technologies'],
            ].map(([num, label]) => (
              <div key={label}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 36, fontWeight: 300,
                  color: 'var(--gold)', lineHeight: 1,
                }}>
                  {num}
                </p>
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10, letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)', marginTop: 4,
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: profile photo ── */}
        <div className="animate-fadeIn" style={{ animationDelay: '0.5s', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: 280, height: 340 }}>
            {/* Spinning dashed ring */}
            <div
              className="animate-spinSlow"
              style={{
                position: 'absolute', inset: -24,
                border: '1px dashed rgba(201,168,76,0.2)',
                borderRadius: '50%',
              }}
            />
            <div style={{
              position: 'absolute', inset: -12,
              border: '1px solid rgba(201,168,76,0.08)',
              borderRadius: '50%',
            }} />

            {/* Photo */}
            <div style={{
              width: '100%', height: '100%',
              borderRadius: 4, overflow: 'hidden',
              border: '1px solid rgba(201,168,76,0.25)',
              position: 'relative',
            }}>
              <img
                src="/images/fayeem.webp"
                alt="Muhammed Faheem — MERN Stack Developer"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'top',
                  filter: 'contrast(1.05) brightness(0.9)',
                  transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,14,26,0.4) 0%, transparent 50%)',
              }} />
            </div>

            {/* Floating badges */}
            <div
              className="animate-float"
              style={{
                position: 'absolute', bottom: -16, right: -16,
                background: 'var(--midnight)',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '10px 18px', borderRadius: 2,
              }}
            >
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, color: 'var(--gold)', letterSpacing: '0.15em',
              }}>
                MERN · TS · AWS
              </p>
            </div>

            <div style={{
              position: 'absolute', top: -12, left: -16,
              background: 'var(--gold)',
              padding: '8px 14px', borderRadius: 2,
            }}>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, color: 'var(--midnight)',
                fontWeight: 600, letterSpacing: '0.1em',
              }}>
                AVAILABLE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* Scroll indicator — hidden on mobile */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        visibility: 'var(--scroll-indicator-visibility, visible)',
      }}>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 9, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          Scroll
        </p>
        <div style={{
          width: 1, height: 48,
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'fadeUp 1.5s ease infinite',
        }} />
      </div>
    </section>
  );
};

export default Hero;
