import React, { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const SKILL_CATEGORIES = [
  {
    num: '01',
    tag: 'Top performing',
    title: 'Web Engineering',
    desc: 'Engineering high-performance web applications focused on intuitive user experience, clean modular component patterns, pixel-perfect layout systems, cross-device responsiveness, and optimized client-side state management.',
    skills: ['React.js & Next.js', 'TypeScript & ES6+', 'Tailwind CSS', 'Redux Toolkit', 'HTML5 & CSS3 Grids', 'Axios & REST Integration'],
  },
  {
    num: '02',
    tag: 'MVP Go-to-market',
    title: 'Backend Systems',
    desc: 'Designing scalable backend microservices and RESTful API endpoints with Node.js and Express. Building secure authentication flows, real-time event streaming via WebSockets, server-side caching, and maintainable MVC clean architecture.',
    skills: ['Node.js & Express.js', 'RESTful API Design', 'WebSockets / Socket.IO', 'MVC Clean Architecture', 'Redis Caching', 'JWT & OAuth Security'],
  },
  {
    num: '03',
    tag: 'High-scale Data',
    title: 'Data & Storage',
    desc: 'Architecting production-grade database systems with strict schema modeling, query optimization, indexing, and aggregation pipelines across MongoDB and SQL databases to ensure fast response times under heavy data load.',
    skills: ['MongoDB & Mongoose', 'PostgreSQL & SQL', 'MySQL Database', 'Firebase Services', 'Data Schema Indexing'],
  },
  {
    num: '04',
    tag: 'Cloud Architecture',
    title: 'DevOps & Deployment',
    desc: 'Managing cloud hosting infrastructure, automated CI/CD deployment workflows, domain DNS, SSL encryption, Nginx reverse proxies, PM2 server uptime monitoring, and cloud storage bucket integrations.',
    skills: ['AWS (EC2, S3)', 'Nginx Reverse Proxy', 'PM2 Process Manager', 'Git & GitHub Actions', 'CI/CD Pipelines', 'Cloudinary Asset CDN'],
  },
  {
    num: '05',
    tag: 'Production Tooling',
    title: 'Tools & Integrations',
    desc: 'Integrating third-party APIs, payment processing systems, secure file uploads, automated unit testing, API documentation, and collaboration tools to streamline product engineering from design to production.',
    skills: ['Razorpay Gateway', 'Multer File Uploads', 'Postman API Testing', 'Figma Design System', 'Jest Testing Framework'],
  },
  {
    num: '06',
    tag: 'Core Leadership',
    title: 'Engineering Practice',
    desc: 'Applying structured software design principles, clean code standards, effective problem-solving strategies, code auditing, and collaborative product development practices across cross-functional engineering teams.',
    skills: ['Algorithmic Problem-Solving', 'Technical Leadership', 'Code Review & Audit', 'Agile Product Sprint', 'Time Management'],
  },
];

// Alternating rotation angles for fanned-out deck card stack effect
const ROTATIONS = [-3, 2.8, -2.2, 3.2, -2.5, 2];

const Skills = () => {
  const ref = useRef(null);
  const vis = useIntersection(ref);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: '100px 24px 120px',
        background: '#120305',
        position: 'relative',
        zIndex: 50,
        minHeight: '100vh',
        boxShadow: '0 -50px 140px rgba(0, 0, 0, 0.98), 0 -20px 60px rgba(255, 0, 46, 0.25)',
        borderTop: '2px solid rgba(255, 0, 46, 0.4)',
      }}
    >
      {/* Top Blanket Leading Edge Accent Line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent, #FF002E 50%, transparent)',
        boxShadow: '0 0 15px #FF002E',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* ═══ TWO-COLUMN LAYOUT: STICKY LEFT + SCROLLING STACKING RIGHT ═══ */}
        <div className="skills-stacked-layout">
          
          {/* ═══ LEFT COLUMN: 100% STICKY PINNED IN PLACE ═══ */}
          <div
            className="skills-sticky-left"
            style={{
              position: 'sticky',
              top: '90px',
              zIndex: 10,
            }}
          >
            {/* Section Heading on Left Column */}
            <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 24 }}>
              <p className="section-label" style={{ color: '#FF002E' }}>Expertise</p>
              <h2 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(26px, 3.2vw, 42px)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
              }}>
                Skills &amp;<br /><span style={{ color: '#FF002E' }}>Technologies</span>
              </h2>
            </div>

            {/* Sticky Portrait Card (bg-2.png) */}
            <div
              className="skills-portrait-card"
              style={{
                borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid rgba(255, 0, 46, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(255, 0, 46, 0.15)',
              background: '#180407',
              height: 'clamp(400px, 52vh, 520px)',
              position: 'relative',
            }}>
              <img
                src="/images/bg-2.png"
                alt="Faheem Ismail"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              {/* Dark Overlay Gradient & Name Tag */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '24px 20px 18px',
                background: 'linear-gradient(to top, rgba(18, 3, 5, 0.95) 20%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}>
                <h4 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 20,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}>
                  Faheem Ismail
                </h4>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10.5,
                  color: '#FF002E',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}>
                  Full-Stack MERN Engineer
                </p>
              </div>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN: ALTERNATING ROTATED STACKING SKILL CARDS ═══ */}
          <div className="skills-stack-right">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const rotDeg = ROTATIONS[idx % ROTATIONS.length];

              return (
                <div
                  key={cat.num}
                  className="skill-stack-card"
                  style={{
                    position: 'sticky',
                    top: `calc(90px + ${idx * 18}px)`,
                    background: '#180407',
                    border: '1px solid rgba(255, 0, 46, 0.25)',
                    borderRadius: 28,
                    padding: 'clamp(26px, 3.5vw, 38px)',
                    marginBottom: 48,
                    minHeight: 'clamp(380px, 50vh, 480px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.88), 0 0 25px rgba(255, 0, 46, 0.12)',
                    transform: `rotate(${rotDeg}deg)`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = `rotate(0deg) scale(1.02)`;
                    e.currentTarget.style.borderColor = '#FF002E';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = `rotate(${rotDeg}deg) scale(1)`;
                    e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.25)';
                  }}
                >
                  <div>
                    {/* Top Script Tag Line (High-contrast White) */}
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: 15,
                      color: '#FFFFFF',
                      marginBottom: 8,
                      fontWeight: 400,
                    }}>
                      {cat.tag}
                    </p>

                    {/* Card Number & Title (01. Web Engineering) */}
                    <h3 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(22px, 2.6vw, 32px)',
                      fontWeight: 900,
                      color: '#FF002E',
                      marginBottom: 10,
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                    }}>
                      {cat.num}. {cat.title}
                    </h3>

                    {/* Description (Reduced bottom margin to sit close to skills!) */}
                    <p style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.75)',
                      marginBottom: 14, // Reduced space between description and skills list!
                      fontWeight: 400,
                    }}>
                      {cat.desc}
                    </p>
                  </div>

                  {/* Bulleted Skill Items List */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                    gap: '8px 16px',
                  }}>
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          fontSize: 14,
                          fontFamily: "'Inter', sans-serif",
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        <span style={{ color: '#FF002E', fontSize: 16, lineHeight: 1 }}>•</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;







