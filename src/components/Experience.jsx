import React, { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const EXPERIENCES = [
  {
    id: 'ainorax',
    role: 'Full-Stack Developer',
    company: 'Ainorax',
    location: 'Palakkad, Kerala',
    period: '2026 — Present',
    isCurrent: true,
    achievements: [
      {
        title: 'Next.js Expertise',
        highlight: 'Next.js',
        desc: 'Mastered the Next.js ecosystem by building scalable production applications with App Router, Server Components, API Routes, Server Actions, advanced routing, caching strategies, and performance optimization.'
      },
      {
        title: 'Company Website Development',
        highlight: 'Website',
        desc: 'Designed, developed, and launched the official Ainorax company website from the ground up, implementing a modern architecture focused on performance, SEO, accessibility, and maintainability.'
      },
      {
        title: 'CMS Architecture',
        highlight: 'CMS',
        desc: 'Implemented and integrated headless CMS solutions including Strapi and Sanity, creating reusable content structures, dynamic APIs, and efficient content management workflows for business websites.'
      },
      {
        title: 'Project Delivery',
        highlight: 'Delivery',
        desc: 'Successfully delivered 5+ client and company projects while actively contributing to additional ongoing applications, ensuring high-quality code, scalability, and timely releases.'
      },
      {
        title: 'Frontend Engineering',
        highlight: 'Frontend',
        desc: 'Built responsive, pixel-perfect user interfaces using Next.js, React, TypeScript, and Tailwind CSS with a strong emphasis on reusable components, accessibility, and cross-browser compatibility.'
      },
      {
        title: 'Backend Development',
        highlight: 'Backend',
        desc: 'Developed and integrated RESTful APIs using Node.js, Express.js, and MongoDB, implementing authentication, data validation, and optimized database queries for scalable applications.'
      },
      {
        title: 'UI/UX Design',
        highlight: 'UI/UX',
        desc: 'Expanded expertise into UI/UX design by creating modern interfaces, user flows, wireframes, design systems, and high-fidelity prototypes while collaborating closely with development workflows.'
      },
      {
        title: 'Brand Identity Design',
        highlight: 'Brand Identity',
        desc: 'Designed professional logos, brand assets, and visual identities for company and client projects, ensuring consistency across digital products and marketing materials.'
      },
      {
        title: 'Performance & SEO',
        highlight: 'Performance & SEO',
        desc: 'Improved website performance through image optimization, code splitting, lazy loading, metadata management, structured data, and technical SEO best practices.'
      },
      {
        title: 'Continuous Growth',
        highlight: 'Growth',
        desc: 'Continuously contribute to new company initiatives by researching modern technologies, improving development workflows, mentoring team members, and adopting industry best practices across frontend and backend development.'
      },
    ]
  },
  {
    id: 'webeyecraft',
    role: 'Full-Stack Developer',
    company: 'WebEyeCraft',
    location: 'Kozhikode, Kerala',
    period: '2025 — 2026',
    isCurrent: false,
    achievements: [
      {
        title: 'Architecture & Development',
        highlight: 'Architecture',
        desc: 'Designed, developed, and deployed two scalable full-stack web applications using Next.js, Node.js, and TypeScript following clean architecture principles.'
      },
      {
        title: 'Performance Engineering',
        highlight: 'Performance',
        desc: 'Achieved up to 25% faster page loads through strategic performance optimization including code splitting, lazy loading, and server-side caching.'
      },
      {
        title: 'Frontend Excellence',
        highlight: 'Frontend',
        desc: 'Built and optimized responsive, mobile-first UIs with pixel-perfect precision and cross-browser compatibility across all major platforms.'
      },
      {
        title: 'API Integration',
        highlight: 'API',
        desc: 'Integrated complex backend services with RESTful APIs and managed data persistence using MongoDB with efficient query optimization.'
      },
      {
        title: 'Security Implementation',
        highlight: 'Security',
        desc: 'Implemented robust authentication workflows including JWT-based auth and OAuth integrations to enhance application security.'
      },
      {
        title: 'Engineering Culture',
        highlight: 'Culture',
        desc: 'Conducted thorough code reviews, maintained Git-based version control with structured branching strategies, and mentored junior developers.'
      },
    ]
  }
];

const renderHighlightedTitle = (fullTitle, highlight) => {
  if (!highlight || !fullTitle.includes(highlight)) return fullTitle;
  const parts = fullTitle.split(highlight);
  return (
    <>
      {parts[0]}
      <span style={{ color: '#FF002E', fontWeight: 900 }}>{highlight}</span>
      {parts[1]}
    </>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const vis = useIntersection(ref);

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: '120px 24px',
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

        {/* Main Section Heading */}
        <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 60 }}>
          <p className="section-label" style={{ color: '#FF002E' }}>Career</p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
          }}>
            Work<br />
            <span style={{ color: '#FF002E' }}>Experience</span>
          </h2>
        </div>

        {/* Experience Companies Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className={`reveal${vis ? ' visible' : ''}`}>
              
              {/* ═══ COMPANY HEADING BAR AT TOP ═══ */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 16,
                marginBottom: 32,
                paddingBottom: 20,
                borderBottom: '1px solid rgba(255, 0, 46, 0.25)',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6, flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(26px, 3.2vw, 36px)',
                      fontWeight: 900,
                      color: '#FFFFFF',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                    }}>
                      {exp.company}
                    </h3>
                    {exp.isCurrent && (
                      <span style={{
                        fontSize: 11,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        color: '#FFFFFF',
                        background: '#FF002E',
                        padding: '4px 12px',
                        borderRadius: 20,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        boxShadow: '0 0 12px rgba(255, 0, 46, 0.6)',
                      }}>
                        Present
                      </span>
                    )}
                  </div>

                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    color: '#FF002E',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    flexWrap: 'wrap',
                  }}>
                    <span>{exp.role}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 500,
                    }}>
                      {exp.location}
                    </span>
                  </p>
                </div>

                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14,
                  color: '#FF002E',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  background: '#180407',
                  border: '1px solid rgba(255, 0, 46, 0.25)',
                  padding: '6px 16px',
                  borderRadius: 10,
                }}>
                  {exp.period}
                </span>
              </div>

              {/* ═══ ACHIEVEMENTS GRID CARDS SECTION WITH KEYWORD HIGHLIGHTS ═══ */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 24,
              }}>
                {exp.achievements.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#180407',
                      border: '1px solid rgba(255, 0, 46, 0.2)',
                      borderRadius: 18,
                      padding: '28px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#FF002E';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 20px rgba(255, 0, 46, 0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.6)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <div style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#FF002E',
                        boxShadow: '0 0 10px #FF002E',
                        flexShrink: 0,
                      }} />
                      <h4 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 17.5,
                        fontWeight: 800,
                        color: '#FFFFFF',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                      }}>
                        {renderHighlightedTitle(item.title, item.highlight)}
                      </h4>
                    </div>

                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontWeight: 400,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
