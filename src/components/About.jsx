import React, { useRef, useState, useEffect } from 'react';

const STATS = [
  ['2+',   'Years of\nExperience'],
  ['10+',  'Projects\nDelivered'],
  ['MERN', 'Primary\nStack'],
  ['KL',   'Based In\nKerala'],
];

const FEATURES = [
  {
    tag: '01 / CRAFT',
    title: 'Full-Stack Engineering',
    desc: 'Deeply focused on writing clean, scalable code and engineering systems that perform under real-world demands using React, Node.js, TypeScript & MongoDB.',
  },
  {
    tag: '02 / DESIGN',
    title: 'Craft-Driven UI / UX',
    desc: 'Crafting responsive digital experiences with micro-animations, high-contrast typography, and intuitive layouts that elevate product feel.',
  },
  {
    tag: '03 / VISION',
    title: 'Continuous Evolution',
    desc: 'Relentlessly testing modern technology stacks, refining architectural practices, and collaborating with teams driven to build impactful products.',
  },
];

const About = () => {
  const headingRef = useRef(null);
  const [visibleWords, setVisibleWords] = useState(0);

  // Dynamic scroll listener for real-time bidirectional "WHO AM I?" word reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;
      const rect = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the trigger zone
      const startPoint = windowHeight * 0.88;
      const endPoint = windowHeight * 0.32;

      let progress = (startPoint - rect.top) / (startPoint - endPoint);
      progress = Math.max(0, Math.min(1, progress));

      if (progress < 0.25) {
        setVisibleWords(0);
      } else if (progress < 0.58) {
        setVisibleWords(1);
      } else if (progress < 0.88) {
        setVisibleWords(2);
      } else {
        setVisibleWords(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      style={{
        padding: '160px 40px 140px',
        background: '#120305',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top subtle border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'rgba(255, 0, 46, 0.15)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* ═══ GIANT "WHO AM I?" SCROLL-DRIVEN HEADING ═══ */}
        <div
          ref={headingRef}
          style={{ marginBottom: 100, textAlign: 'center' }}
        >
          <h2 className="about-big-title-scroll">
            <span className={`scroll-word ${visibleWords >= 1 ? 'show' : ''}`} style={{ color: '#FFFFFF' }}>
              WHO
            </span>
            <span className={`scroll-word ${visibleWords >= 2 ? 'show' : ''}`} style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              AM
            </span>
            <span className={`scroll-word ${visibleWords >= 3 ? 'show' : ''}`} style={{ color: '#FF002E' }}>
              I?
            </span>
          </h2>

          {/* Animated accent divider line */}
          <div
            style={{
              width: visibleWords >= 1 ? 140 : 0,
              height: 2,
              background: 'linear-gradient(90deg, transparent, #FF002E, transparent)',
              margin: '36px auto 0',
              transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>

        {/* ═══ MODERN EDITORIAL DESCRIPTION CONTENT ═══ */}
        <div>
          {/* Section label */}
          <div style={{ marginBottom: 32 }}>
            <p className="section-label" style={{ color: '#FF002E' }}>About Me</p>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div
            className="about-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 60,
              alignItems: 'start',
            }}
          >
            {/* LEFT: Manifesto & Feature Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* Editorial Statement Quote Card */}
              <div
                style={{
                  background: '#180407',
                  border: '1px solid rgba(255, 0, 46, 0.2)',
                  borderLeft: '4px solid #FF002E',
                  padding: '36px 40px',
                  borderRadius: 12,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(20px, 2.4vw, 28px)',
                  lineHeight: 1.45,
                  color: '#FFFFFF',
                  marginBottom: 16,
                  fontWeight: 400,
                }}>
                  "I build digital products at the intersection of modern code and craft-driven user experience."
                </p>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.7)',
                }}>
                  Over the past two years, I’ve specialized in transforming complex technical requirements into elegant, high-speed web platforms. I care about micro-interactions and performance optimization—because detail is what transforms good software into great software.
                </p>
              </div>

              {/* 3 Pillar Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {FEATURES.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#180407',
                      border: '1px solid rgba(255, 0, 46, 0.15)',
                      padding: '28px 24px',
                      borderRadius: 10,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#FF002E';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.15)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      marginBottom: 8,
                    }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10, letterSpacing: '0.2em',
                        color: '#FF002E',
                        fontWeight: 600,
                      }}>
                        {item.tag}
                      </span>
                      <span style={{ height: 1, width: 24, background: 'rgba(255, 0, 46, 0.2)' }} />
                    </div>
                    <h3 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 18, fontWeight: 700,
                      color: '#FFFFFF', marginBottom: 8,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 14, lineHeight: 1.65,
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
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
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11, letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      display: 'inline-flex', alignItems: 'center',
                      gap: 8, transition: 'all 0.25s ease',
                      padding: '10px 20px',
                      background: '#180407',
                      border: '1px solid rgba(255, 0, 46, 0.2)',
                      borderRadius: 8,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#FF002E';
                      e.currentTarget.style.borderColor = '#FF002E';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.2)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    {label} <span>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: Metric Cards & Tech Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Metric Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}>
                {STATS.map(([num, label], i) => (
                  <div
                    key={i}
                    style={{
                      padding: '30px 24px',
                      background: '#180407',
                      border: '1px solid rgba(255, 0, 46, 0.15)',
                      borderRadius: 12,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#FF002E';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 14px 36px rgba(255, 0, 46, 0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.15)';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 42, fontWeight: 800,
                      color: '#FFFFFF', lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}>
                      {num}
                    </p>
                    <p style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10, letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginTop: 12, whiteSpace: 'pre-line',
                    }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Container */}
              <div
                style={{
                  padding: '24px 28px',
                  background: '#180407',
                  border: '1px solid rgba(255, 0, 46, 0.2)',
                  borderRadius: 12,
                }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: 16,
                }}>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11, letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#FF002E',
                    fontWeight: 600,
                  }}>
                    Primary Technical Stack
                  </p>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#FF002E',
                    boxShadow: '0 0 10px #FF002E',
                  }} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js', 'Express.js', 'AWS', 'Tailwind'].map(tech => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: '#FFFFFF',
                        background: '#120305',
                        border: '1px solid rgba(255, 0, 46, 0.2)',
                        padding: '6px 14px',
                        borderRadius: 6,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


