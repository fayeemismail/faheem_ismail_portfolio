import React, { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const PROJECTS = [
  {
    num: '01',
    title: 'Celoura Travels',
    category: 'Full-Stack Web App',
    description:
      'A travel guide platform connecting users with verified local guides, featuring real-time chat, rich destination visuals, and secure payments — built with MERN stack and clean architecture principles.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Razorpay'],
    github: 'https://github.com/fayeemismail/celoura-server',
    live: null,
    image: '/images/celoura.webp',
  },
  {
    num: '02',
    title: 'Netflix Clone',
    category: 'Frontend Application',
    description:
      'A Netflix-inspired streaming platform with clean code, responsive design, and real-world functionality. Showcases modern frontend practices, UI precision, and sophisticated development workflow.',
    technologies: ['React', 'Firebase', 'TMDb API', 'React Router', 'Firebase Auth'],
    github: 'https://github.com/fayeemismail/NETFLIX-clone-REACT',
    live: 'https://netflix-clone-app5.vercel.app/',
    image: '/images/netflix.webp',
  },
  {
    num: '03',
    title: 'Meehaf eCommerce',
    category: 'Full-Stack Platform',
    description:
      'A modern eCommerce web application for sports products with complete product management, user authentication, secure Razorpay payments, and a responsive shopping experience.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Razorpay', 'EJS'],
    github: 'https://github.com/fayeemismail/meehaf',
    live: 'https://meehaf.onrender.com/',
    image: '/images/ecommerce.webp',
  },
  {
    num: '04',
    title: 'Truth or Dare',
    category: 'Interactive Web Game',
    description:
      'A fun and interactive web-based party game with a spin wheel, persistent localStorage state, responsive design for mobile and desktop, and a smooth modern UI for an engaging experience.',
    technologies: ['React', 'TailwindCSS', 'LocalStorage'],
    github: 'https://github.com/fayeemismail/truth-or-dare-application',
    live: 'https://truth-or-dare-fa.vercel.app/',
    image: '/images/truthordare.webp',
  },
];

/* GitHub icon SVG */
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project, delay, visible }) => (
  <div
    className={`project-card reveal reveal-delay-${delay}${visible ? ' visible' : ''}`}
  >
    {/* Image */}
    <div style={{ height: 240, position: 'relative', overflow: 'hidden', background: 'var(--navy-light)' }}>
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,14,26,0.95) 0%, rgba(10,14,26,0.4) 60%, transparent 100%)',
      }} />

      {/* Category badge */}
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10, letterSpacing: '0.15em',
          textTransform: 'uppercase',
          background: 'rgba(10,14,26,0.8)',
          border: '1px solid rgba(201,168,76,0.3)',
          color: 'var(--gold)',
          padding: '5px 12px', borderRadius: 2,
        }}>
          {project.category}
        </span>
      </div>

      {/* Large decorative number */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 48, fontWeight: 700,
          color: 'rgba(201,168,76,0.2)', lineHeight: 1,
        }}>
          {project.num}
        </span>
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '32px 32px 28px' }}>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 28, fontWeight: 400,
        color: 'var(--cream)', marginBottom: 12,
      }}>
        {project.title}
      </h3>
      <p style={{
        fontSize: 14, lineHeight: 1.8,
        color: 'rgba(242,237,215,0.6)',
        fontWeight: 300, marginBottom: 24,
      }}>
        {project.description}
      </p>

      {/* Tech pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
        {project.technologies.map((t, j) => (
          <span key={j} className="skill-pill" style={{ fontSize: 10 }}>{t}</span>
        ))}
      </div>

      {/* Action links */}
      <div style={{
        display: 'flex', gap: 20,
        borderTop: '1px solid rgba(201,168,76,0.08)',
        paddingTop: 24,
      }}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11, letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 8,
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          <GitHubIcon /> Source Code
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11, letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              display: 'flex', alignItems: 'center',
              gap: 8, marginLeft: 'auto',
              transition: 'gap 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.gap = '14px'}
            onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const ref = useRef(null);
  const vis = useIntersection(ref);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: 'var(--midnight)',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Header row */}
        <div
          className={`reveal${vis ? ' visible' : ''}`}
          style={{
            marginBottom: 72,
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap', gap: 20,
          }}
        >
          <div>
            <p className="section-label">Portfolio</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 300,
              color: 'var(--cream)', lineHeight: 1.1,
            }}>
              Featured<br />
              <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Projects</span>
            </h2>
          </div>
          <p style={{
            fontSize: 14, color: 'var(--muted)',
            maxWidth: 280, lineHeight: 1.7, fontWeight: 300,
          }}>
            A selection of my most impactful work, each built with care and precision.
          </p>
        </div>

        {/* Project cards */}
        <div
          className="projects-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))', gap: 2 }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              delay={(i % 2) + 1}
              visible={vis}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
