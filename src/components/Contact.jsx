import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useIntersection } from '../hooks/useIntersection';

// ── Replace with your real EmailJS credentials ──────────────────────────────
const EMAILJS_CONFIG = {
  SERVICE_ID:  'service_wfgju4t',
  TEMPLATE_ID: 'template_m959yg8',
  PUBLIC_KEY:  '6yo1uIgC59ZgvfsUu',
};

const SOCIAL_LINKS = [
  ['LI', 'https://linkedin.com/in/faheemismail',      'LinkedIn'],
  ['GH', 'https://github.com/fayeemismail',           'GitHub'],
  ['IG', 'https://instagram.com/faheem_ismail_',      'Instagram'],
  ['WA', 'https://wa.me/919562062494',                'WhatsApp'],
];

const Contact = () => {
  const ref = useRef(null);
  const vis = useIntersection(ref);

  const [form,      setForm]      = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    'Muhammed Faheem',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out. I\'ll get back to you soon.',
        icon: 'success',
        confirmButtonColor: '#C9A84C',
        background: '#0F1629',
        color: '#F2EDD7',
        confirmButtonText: 'Wonderful',
      });

      setForm({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS error:', error);
      Swal.fire({
        title: 'Something went wrong',
        text: 'Please try again or email me directly at faheemmuhammed703@gmail.com',
        icon: 'error',
        confirmButtonColor: '#C9A84C',
        background: '#0F1629',
        color: '#F2EDD7',
        confirmButtonText: 'Try Again',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: 'var(--navy)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Heading */}
        <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 72 }}>
          <p className="section-label">Get In Touch</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1,
          }}>
            Let's build something<br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>extraordinary</span>
          </h2>
        </div>

        <div
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}
        >
          {/* ── Left: contact info ── */}
          <div>
            <p
              className={`reveal reveal-delay-1${vis ? ' visible' : ''}`}
              style={{
                fontSize: 16, lineHeight: 1.9,
                color: 'rgba(242,237,215,0.65)',
                marginBottom: 48, fontWeight: 300,
              }}
            >
              I'm always open to discussing new opportunities, interesting projects,
              or just having a conversation about technology and development.
            </p>

            {/* Email & phone */}
            {[
              ['Email', 'faheemmuhammed703@gmail.com', 'mailto:faheemmuhammed703@gmail.com'],
              ['Phone', '+91 9562062494',              'tel:+919562062494'],
            ].map(([label, val, href], i) => (
              <a
                key={i}
                href={href}
                className={`reveal reveal-delay-${i + 2}${vis ? ' visible' : ''}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  marginBottom: 20, textDecoration: 'none',
                  padding: '20px 24px',
                  border: '1px solid rgba(201,168,76,0.1)',
                  background: 'rgba(10,14,26,0.3)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                  e.currentTarget.style.background   = 'rgba(201,168,76,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)';
                  e.currentTarget.style.background   = 'rgba(10,14,26,0.3)';
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{ width: 8, height: 8, background: 'var(--gold)', borderRadius: '50%' }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9, letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)', marginBottom: 4,
                  }}>
                    {label}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--cream)' }}>{val}</p>
                </div>
              </a>
            ))}

            {/* Social icon buttons */}
            <div
              className={`reveal reveal-delay-4${vis ? ' visible' : ''}`}
              style={{ display: 'flex', gap: 12, marginTop: 12 }}
            >
              {SOCIAL_LINKS.map(([abbr, href, label]) => (
                <a
                  key={abbr}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  style={{
                    width: 44, height: 44,
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10, letterSpacing: '0.05em',
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color        = 'var(--gold)';
                    e.currentTarget.style.background   = 'rgba(201,168,76,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
                    e.currentTarget.style.color        = 'var(--muted)';
                    e.currentTarget.style.background   = 'transparent';
                  }}
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            className={`reveal reveal-delay-2${vis ? ' visible' : ''}`}
            style={{
              background: 'rgba(10,14,26,0.5)',
              border: '1px solid rgba(201,168,76,0.1)',
              padding: '48px 40px',
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 28 }}>
                <label htmlFor="name" className="luxury-label">Your Name</label>
                <input
                  id="name"
                  name="name"
                  className="luxury-input"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label htmlFor="email" className="luxury-label">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="luxury-input"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: 36 }}>
                <label htmlFor="message" className="luxury-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="luxury-input"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{ resize: 'vertical', minHeight: 120 }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', opacity: isLoading ? 0.7 : 1 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <svg
                      style={{ animation: 'spinSlow 1s linear infinite' }}
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
