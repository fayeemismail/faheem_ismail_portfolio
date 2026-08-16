import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIntersection } from '../hooks/useIntersection';
import { useMediaQuery } from '../hooks/useMediaQuery';

const PROJECTS = [
  {
    num: '01',
    title: 'Ainorax',
    category: 'Company Website',
    description:
      'The official company website for Ainorax, designed in Figma and engineered with Next.js, Tailwind CSS, and Sanity CMS for dynamic content management, ultra-fluid Framer Motion animations, and optimal technical SEO performance.',
    technologies: ['Next.js', 'TailwindCSS', 'Sanity CMS', 'Framer Motion', 'Figma', 'React Icons'],
    github: 'https://github.com/fayeemismail/aino-temp',
    live: 'https://ainorax.com/',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    fallbackImage: '/images/hero-bg.png',
  },
  {
    num: '02',
    title: 'Pulse',
    category: 'Fitness & Social App',
    description:
      'A feature-packed workout management application created with Antigravity. Features intelligent daily workout recommendations (with Sunday rest day logic), custom workout personalization, interactive community feed to connect with gym enthusiasts, Google Authentication, Firebase DB, and Redux state management.',
    technologies: ['Next.js', 'Firebase', 'Google Auth', 'Redux', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/fayeemismail/work-tracker',
    live: 'https://fa-gym-tracker.vercel.app/',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    fallbackImage: '/images/thumb.PNG',
  },
  {
    num: '03',
    title: 'Celoura Travels',
    category: 'Full-Stack Web App',
    description:
      'A travel guide platform connecting users with verified local guides, featuring real-time chat, rich destination visuals, and secure payments — built with MERN stack and clean architecture principles.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Razorpay'],
    github: 'https://github.com/fayeemismail/celoura-server',
    live: null,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    fallbackImage: '/images/celoura.webp',
  },
  {
    num: '04',
    title: 'Netflix Clone',
    category: 'Frontend Application',
    description:
      'A Netflix-inspired streaming platform with clean code, responsive design, and real-world functionality. Showcases modern frontend practices, UI precision, and sophisticated development workflow.',
    technologies: ['React', 'Firebase', 'TMDb API', 'React Router', 'Firebase Auth'],
    github: 'https://github.com/fayeemismail/NETFLIX-clone-REACT',
    live: 'https://netflix-clone-app5.vercel.app/',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop',
    fallbackImage: '/images/netflix.webp',
  },
  {
    num: '05',
    title: 'Meehaf eCommerce',
    category: 'Full-Stack Platform',
    description:
      'A modern eCommerce web application for sports products with complete product management, user authentication, secure Razorpay payments, and a responsive shopping experience.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Razorpay', 'EJS'],
    github: 'https://github.com/fayeemismail/meehaf',
    live: 'https://meehaf.onrender.com/',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    fallbackImage: '/images/ecommerce.webp',
  },
  {
    num: '06',
    title: 'Truth or Dare',
    category: 'Interactive Web Game',
    description:
      'A fun and interactive web-based party game with a spin wheel, persistent localStorage state, responsive design for mobile and desktop, and a smooth modern UI for an engaging experience.',
    technologies: ['React', 'TailwindCSS', 'LocalStorage'],
    github: 'https://github.com/fayeemismail/truth-or-dare-application',
    live: 'https://truth-or-dare-fa.vercel.app/',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    fallbackImage: '/images/truthordare.webp',
  },
];

/* SVG Icons */
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const SafeImage = ({ src, fallback, alt, style, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
};

/* ── MOCKUP WINDOW FRAME WITH ALIGNED IMAGE ── */
const MockupBrowserFrame = ({ src, fallback, alt, liveUrl }) => {
  const displayUrl = liveUrl ? liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'app.faheem.dev';

  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '32px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at center, rgba(255, 0, 46, 0.06) 0%, transparent 75%), #120305',
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        maxHeight: 400,
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid rgba(255, 0, 46, 0.25)',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 0, 46, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        background: '#180407',
      }}>
        {/* Browser Top Header Bar */}
        <div style={{
          height: 34,
          background: '#0d0204',
          borderBottom: '1px solid rgba(255, 0, 46, 0.15)',
          padding: '0 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexShrink: 0,
        }}>
          {/* Window control dots */}
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />

          {/* Simulated address bar */}
          <div style={{
            marginLeft: 12,
            height: 20,
            flex: 1,
            maxWidth: 260,
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 5,
            border: '1px solid rgba(255, 0, 46, 0.12)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 10px',
          }}>
            <div style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#FF002E',
              marginRight: 8,
              boxShadow: '0 0 6px #FF002E',
            }} />
            <span style={{
              fontSize: 10,
              fontFamily: "'JetBrains Mono', monospace",
              color: 'rgba(255, 255, 255, 0.5)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              https://{displayUrl}
            </span>
          </div>
        </div>

        {/* Viewport frame with top-center aligned image */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#0a0103' }}>
          <SafeImage
            src={src}
            fallback={fallback}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* ── STICKY CARD COMPONENT FOR LARGE SCREENS (LG) ── */
const DesktopStickyCard = ({ project, index, total }) => {
  const containerRef = useRef(null);
  const isLast = index === total - 1;

  // Track scroll position as this section passes through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale down and dim when the NEXT project scrolls UP over this card
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isLast ? 1 : 0.92]
  );

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isLast ? 0 : 0.65]
  );

  return (
    <div
      ref={containerRef}
      style={{
        height: isLast ? 'auto' : '100vh',
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          position: 'sticky',
          top: 100,
          zIndex: index + 1,
          scale,
          transformOrigin: 'top center',
        }}
      >
        <div
          style={{
            position: 'relative',
            background: '#180407',
            border: '1px solid rgba(255, 0, 46, 0.25)',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 35px rgba(255, 0, 46, 0.12)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            minHeight: 'min(620px, 75vh)',
            alignItems: 'stretch',
          }}
        >
          {/* Dark Overlay mask when next card overlays on top of this card */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#0a0103',
              opacity: overlayOpacity,
              zIndex: 30,
              pointerEvents: 'none',
              borderRadius: 24,
            }}
          />

          {/* Left Column: Details */}
          <div style={{
            padding: '44px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 10,
          }}>
            <div>
              {/* Category & Number Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: '#120305',
                  border: '1px solid rgba(255, 0, 46, 0.3)',
                  color: '#FF002E',
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontWeight: 600,
                }}>
                  {project.category}
                </span>

                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 28,
                  fontWeight: 800,
                  color: 'rgba(255, 0, 46, 0.4)',
                  letterSpacing: '-0.02em',
                }}>
                  {project.num}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(26px, 2.5vw, 36px)',
                fontWeight: 900,
                color: '#FFFFFF',
                marginBottom: 16,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: 400,
                marginBottom: 28,
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: '#FFFFFF',
                      background: '#120305',
                      border: '1px solid rgba(255, 0, 46, 0.2)',
                      padding: '5px 12px',
                      borderRadius: 6,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              borderTop: '1px solid rgba(255, 0, 46, 0.18)',
              paddingTop: 24,
            }}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: '#120305',
                  border: '1px solid rgba(255, 0, 46, 0.3)',
                  padding: '10px 20px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  display: 'flex',
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
                  e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.3)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <GitHubIcon /> Source Code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: '#FF002E',
                    border: '1px solid #FF002E',
                    padding: '10px 22px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '0 0 15px rgba(255, 0, 46, 0.4)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 0, 46, 0.7)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 46, 0.4)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <ExternalLinkIcon /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Browser Showcase Frame with Aligned Image */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderLeft: '1px solid rgba(255, 0, 46, 0.15)',
          }}>
            <MockupBrowserFrame
              src={project.image}
              fallback={project.fallbackImage}
              alt={project.title}
              liveUrl={project.live}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ── MOBILE / TABLET CARD COMPONENT (< LG) ── */
const MobileProjectCard = ({ project, delay, visible }) => (
  <div
    className={`project-card reveal reveal-delay-${delay}${visible ? ' visible' : ''}`}
    style={{
      background: '#180407',
      border: '1px solid rgba(255, 0, 46, 0.15)',
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 24,
    }}
  >
    {/* Image Frame */}
    <div style={{ height: 260, position: 'relative', overflow: 'hidden', background: '#120305' }}>
      <SafeImage
        src={project.image}
        fallback={project.fallbackImage}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
        }}
      />
      {/* Category badge */}
      <div style={{ position: 'absolute', top: 16, left: 16 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          background: '#120305',
          border: '1px solid rgba(255, 0, 46, 0.2)',
          color: '#FF002E',
          padding: '4px 10px',
          borderRadius: 4,
        }}>
          {project.category}
        </span>
      </div>

      {/* Decorative number */}
      <div style={{ position: 'absolute', top: 16, right: 16 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          fontWeight: 500,
          color: 'rgba(255, 0, 46, 0.3)',
          lineHeight: 1,
        }}>
          {project.num}
        </span>
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '24px 24px 20px' }}>
      <h3 style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 22,
        fontWeight: 700,
        color: '#FFFFFF',
        marginBottom: 12,
        letterSpacing: '-0.01em',
      }}>
        {project.title}
      </h3>
      <p style={{
        fontSize: 14,
        lineHeight: 1.75,
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: 400,
        marginBottom: 20,
      }}>
        {project.description}
      </p>

      {/* Tech pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {project.technologies.map((t, j) => (
          <span
            key={j}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: '#FFFFFF',
              background: '#120305',
              border: '1px solid rgba(255, 0, 46, 0.2)',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action links */}
      <div style={{
        display: 'flex',
        gap: 16,
        borderTop: '1px solid rgba(255, 0, 46, 0.15)',
        paddingTop: 16,
      }}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <GitHubIcon /> Source
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FF002E',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginLeft: 'auto',
            }}
          >
            <ExternalLinkIcon /> Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const ref = useRef(null);
  const vis = useIntersection(ref);
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: isLg ? '120px 40px 160px' : '80px 24px',
        background: '#120305',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Section Header */}
        <div
          className={`reveal${vis ? ' visible' : ''}`}
          style={{
            marginBottom: isLg ? 60 : 40,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <p className="section-label" style={{ color: '#FF002E' }}>Portfolio</p>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}>
              Featured<br />
              <span style={{ color: '#FF002E' }}>Projects</span>
            </h2>
          </div>

          <div style={{ textAlign: isLg ? 'right' : 'left' }}>
            <p style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: 320,
              lineHeight: 1.7,
              fontWeight: 400,
              marginBottom: isLg ? 10 : 0,
            }}>
              A selection of my most impactful work, each built with care and precision.
            </p>
            {isLg && (
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: '#FF002E',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}>
                Scroll to explore ↓
              </span>
            )}
          </div>
        </div>

        {/* Cards Container */}
        {isLg ? (
          /* Desktop Sticky Overlay Stacked Section */
          <div style={{ position: 'relative' }}>
            {PROJECTS.map((project, i) => (
              <DesktopStickyCard
                key={project.num}
                project={project}
                index={i}
                total={PROJECTS.length}
              />
            ))}
          </div>
        ) : (
          /* Mobile Grid Section */
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <MobileProjectCard
                key={p.num}
                project={p}
                delay={(i % 2) + 1}
                visible={vis}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
