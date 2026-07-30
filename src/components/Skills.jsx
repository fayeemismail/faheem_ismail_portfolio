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
        background: '#120305',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Heading */}
        <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 48 }}>
          <p className="section-label" style={{ color: '#FF002E' }}>Expertise</p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            color: '#FFFFFF', lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            Skills &amp;<br />
            <span style={{ color: '#FF002E' }}>Technologies</span>
          </h2>
        </div>

        {/* Category grid */}
        <div
          className="skills-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}
        >
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1}${vis ? ' visible' : ''}`}
              style={{
                padding: '28px 24px',
                background: '#180407',
                border: '1px solid rgba(255, 0, 46, 0.15)',
                borderRadius: 8,
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FF002E';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.15)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Decorative large number */}
              <span className="deco-num" style={{ color: 'rgba(255, 0, 46, 0.08)' }}>{String(i + 1).padStart(2, '0')}</span>

              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FF002E', marginBottom: 20,
              }}>
                {cat.title}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
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
                    {skill}
                  </span>
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

