import React, { useRef, useState, useEffect } from 'react';

const CARD_STEPS = [
  {
    num: '01',
    tag: '01 / CRAFT & ARCHITECTURE',
    title: 'Full-Stack MERN Engineering',
    quote: '"I build digital products at the intersection of modern code and craft-driven user experience."',
    desc: 'Deeply focused on writing clean, scalable code and engineering MERN stack systems that perform under real-world demands. Transforming complex backend requirements into intuitive web applications.',
    statNum: '2+',
    statLabel: 'Years of Engineering Exp.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'TypeScript'],
  },
  {
    num: '02',
    tag: '02 / USER EXPERIENCE',
    title: 'Craft-Driven UI / UX Precision',
    quote: '"Detail is what separates good software from unforgettable experiences."',
    desc: 'Building responsive digital experiences with micro-animations, pixel-perfect layout grids, high-contrast typography, and intuitive interfaces that elevate product feel.',
    statNum: '10+',
    statLabel: 'Projects Delivered',
    skills: ['Next.js', 'TailwindCSS', 'Figma', 'REST APIs'],
  },
  {
    num: '03',
    tag: '03 / PERFORMANCE',
    title: 'High-Performance & Scalability',
    quote: '"Optimizing speed, database queries, and clean system architecture."',
    desc: 'Optimizing web application speed through strategic code splitting, server-side caching, efficient MongoDB query optimization, and robust authentication security workflows.',
    statNum: 'MERN',
    statLabel: 'Primary Tech Stack',
    skills: ['Express.js', 'Redis', 'AWS (EC2/S3)', 'WebSockets'],
  },
  {
    num: '04',
    tag: '04 / VISION & IMPACT',
    title: 'Continuous Evolution & Impact',
    quote: '"Driven by technical curiosity and collaborative product engineering."',
    desc: 'Relentlessly testing modern technology stacks, refining architectural practices, and collaborating with teams driven to build impactful software.',
    statNum: 'KL',
    statLabel: 'Based in Kozhikode, Kerala',
    skills: ['CI/CD', 'Git', 'Clean Architecture', 'Problem-Solving'],
  },
];

const About = () => {
  const headingRef = useRef(null);
  const cardSectionRef = useRef(null);

  const [visibleWords, setVisibleWords] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Dynamic scroll listener for real-time bidirectional "WHO AM I?" word reveal & Sticky Card content swap
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // 1. "WHO AM I?" Scroll Reveal
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const startPoint = windowHeight * 0.90;
        const endPoint = windowHeight * 0.35;

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
      }

      // 2. Unified Sticky Scroll (WHO AM I + Card pinned together on screen)
      if (cardSectionRef.current) {
        const containerRect = cardSectionRef.current.getBoundingClientRect();
        const totalScrollable = containerRect.height - windowHeight;

        if (totalScrollable > 0) {
          const stickyTopOffset = 70; // Distance from top header
          const scrolled = stickyTopOffset - containerRect.top;
          let progress = scrolled / totalScrollable;
          progress = Math.max(0, Math.min(1, progress));

          if (progress < 0.25) {
            setActiveStep(0); // 01 / CRAFT & ARCHITECTURE
          } else if (progress < 0.50) {
            setActiveStep(1); // 02 / USER EXPERIENCE
          } else if (progress < 0.75) {
            setActiveStep(2); // 03 / PERFORMANCE
          } else {
            setActiveStep(3); // 04 / VISION & IMPACT
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentCard = CARD_STEPS[activeStep];

  return (
    <section
      id="about"
      style={{
        background: '#120305',
        position: 'relative',
      }}
    >
      {/* Top subtle border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'rgba(255, 0, 46, 0.15)',
      }} />

      {/* ═══ TALL STICKY SCROLL CONTAINER (PINNED WHO AM I + CARD TOGETHER) ═══ */}
      <div
        ref={cardSectionRef}
        style={{
          position: 'relative',
          minHeight: '260vh', // 260vh scroll track
        }}
      >
        {/* Sticky viewport frame pinning WHO AM I + Card together */}
        <div
          style={{
            position: 'sticky',
            top: '70px',
            paddingTop: '16px',
            paddingBottom: '16px',
            maxWidth: 1200,
            margin: '0 auto',
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          {/* ═══ GIANT "WHO AM I?" SCROLL-DRIVEN HEADING (ORIGINAL SIZE) ═══ */}
          <div
            ref={headingRef}
            style={{ marginBottom: 36, textAlign: 'center' }}
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
                width: visibleWords >= 1 ? 120 : 0,
                height: 2,
                background: 'linear-gradient(90deg, transparent, #FF002E, transparent)',
                margin: '14px auto 0',
                transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>

          {/* Section label */}
          <div style={{ marginBottom: 12 }}>
            <p className="section-label" style={{ color: '#FF002E' }}>About Me</p>
          </div>

          {/* ═══ CARD + PROGRESSION GRID ═══ */}
          <div
            className="about-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.25fr 0.75fr',
              gap: 28,
              alignItems: 'start',
            }}
          >
            {/* ═══ LEFT: SINGLE CARD ═══ */}
            <div
              style={{
                background: '#180407',
                border: '1px solid rgba(255, 0, 46, 0.25)',
                borderLeft: '4px solid #FF002E',
                borderRadius: 16,
                padding: 'clamp(16px, 2.2vw, 26px)',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                minHeight: 'clamp(280px, 35vh, 340px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Top Tag & Counter indicator inside Card */}
              <div key={activeStep} className="animate-dust-blur">
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: 10, flexWrap: 'wrap', gap: 10,
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10.5, letterSpacing: '0.2em',
                    color: '#FF002E',
                    fontWeight: 700,
                  }}>
                    {currentCard.tag}
                  </span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11, color: 'rgba(255, 255, 255, 0.4)',
                  }}>
                    {activeStep + 1} / {CARD_STEPS.length}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(16px, 1.8vw, 21px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: 8,
                  lineHeight: 1.25,
                }}>
                  {currentCard.title}
                </h3>

                {/* Editorial Quote */}
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(13px, 1.3vw, 16px)',
                  lineHeight: 1.45,
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: 10,
                  fontWeight: 400,
                }}>
                  {currentCard.quote}
                </p>

                {/* Description Text */}
                <p style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: 14,
                  fontWeight: 400,
                }}>
                  {currentCard.desc}
                </p>
              </div>

              {/* Bottom: Skills & Action buttons */}
              <div key={`bottom-${activeStep}`} className="animate-dust-blur">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                  {currentCard.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: '#FFFFFF',
                        background: '#120305',
                        border: '1px solid rgba(255, 0, 46, 0.25)',
                        padding: '3px 9px',
                        borderRadius: 6,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
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
                        fontSize: 10, letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center',
                        gap: 6, transition: 'all 0.25s ease',
                        padding: '6px 14px',
                        background: '#120305',
                        border: '1px solid rgba(255, 0, 46, 0.25)',
                        borderRadius: 8,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#FF002E';
                        e.currentTarget.style.borderColor = '#FF002E';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.25)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      {label} <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ═══ RIGHT / BOTTOM: INCREASING NUMBERS & DYNAMIC METRIC COUNTER ═══ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Vertical Step Number Track (01, 02, 03, 04) */}
              <div
                style={{
                  background: '#180407',
                  border: '1px solid rgba(255, 0, 46, 0.15)',
                  borderRadius: 16,
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9, letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.4)',
                }}>
                  SCROLL PROGRESSION
                </p>

                {CARD_STEPS.map((step, idx) => {
                  const isActive = idx === activeStep;
                  const isPast = idx < activeStep;

                  return (
                    <div
                      key={step.num}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => setActiveStep(idx)}
                    >
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isActive ? 26 : 17,
                          fontWeight: isActive ? 900 : 700,
                          color: isActive ? '#FF002E' : isPast ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)',
                          lineHeight: 1,
                          transition: 'all 0.3s ease',
                          minWidth: 30,
                        }}
                      >
                        {step.num}
                      </span>

                      <div style={{ flex: 1 }}>
                        <p style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isActive ? 12 : 10.5,
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? '#FFFFFF' : isPast ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
                          transition: 'all 0.3s ease',
                        }}>
                          {step.title}
                        </p>
                      </div>

                      {/* Active indicator bullet */}
                      <div style={{
                        width: isActive ? 7 : 4,
                        height: isActive ? 7 : 4,
                        borderRadius: '50%',
                        background: isActive ? '#FF002E' : isPast ? '#FFFFFF' : 'rgba(255, 255, 255, 0.2)',
                        boxShadow: isActive ? '0 0 8px #FF002E' : 'none',
                        transition: 'all 0.3s ease',
                      }} />
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Key Metric Counter Card (Updates as you scroll!) */}
              <div
                key={`metric-${activeStep}`}
                className="animate-dust-blur"
                style={{
                  background: '#180407',
                  border: '1px solid rgba(255, 0, 46, 0.2)',
                  borderRadius: 16,
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  transition: 'all 0.3s ease',
                }}
              >
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 32,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}>
                  {currentCard.statNum}
                </p>
                <div>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8.5,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#FF002E',
                    fontWeight: 600,
                    marginBottom: 2,
                  }}>
                    KEY HIGHLIGHT
                  </p>
                  <p style={{
                    fontSize: 11.5,
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 500,
                  }}>
                    {currentCard.statLabel}
                  </p>
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
