import React, { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3', 'Axios'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'WebSockets', 'MVC', 'Clean Architecture', 'Redis'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['AWS (EC2, S3)', 'Nginx', 'PM2', 'Git', 'GitHub Actions', 'Cloudinary', 'CI/CD', 'Load Balancing'],
  },
  {
    title: 'Tools & Integrations',
    skills: ['Socket.IO', 'JWT', 'OAuth', 'Razorpay', 'Multer', 'NodeMailer', 'Postman', 'Figma', 'Jest'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Communication', 'Leadership', 'Team Collaboration', 'Time Management'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const vis = useIntersection(ref);

  return (
    <section
      id="skills"
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
        backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Heading */}
        <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 72 }}>
          <p className="section-label">Expertise</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 300,
            color: 'var(--cream)', lineHeight: 1.1,
          }}>
            Skills &amp;<br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>
              Technologies
            </span>
          </h2>
        </div>

        {/* Category grid */}
        <div
          className="skills-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 2 }}
        >
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1}${vis ? ' visible' : ''}`}
              style={{
                padding: '36px 32px',
                background: 'var(--navy)',
                border: '1px solid rgba(201,168,76,0.08)',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
                e.currentTarget.style.background   = 'var(--navy-light)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.08)';
                e.currentTarget.style.background   = 'var(--navy)';
              }}
            >
              {/* Decorative large number */}
              <span className="deco-num">{String(i + 1).padStart(2, '0')}</span>

              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)', marginBottom: 20,
              }}>
                {cat.title}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
