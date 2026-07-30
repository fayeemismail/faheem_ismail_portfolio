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
        confirmButtonColor: '#FF002E',
        background: '#120305',
        color: '#FFFFFF',
        confirmButtonText: 'Wonderful',
      });

      setForm({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS error:', error);
      Swal.fire({
        title: 'Something went wrong',
        text: 'Please try again or email me directly at faheemmuhammed703@gmail.com',
        icon: 'error',
        confirmButtonColor: '#FF002E',
        background: '#120305',
        color: '#FFFFFF',
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
        background: '#120305',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top border line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'rgba(255, 0, 46, 0.15)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Heading */}
        <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 48 }}>
          <p className="section-label" style={{ color: '#FF002E' }}>Get In Touch</p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            Let's build something<br />
            <span style={{ color: '#FF002E' }}>extraordinary</span>
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
                fontSize: 15, lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: 40, fontWeight: 400,
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
                  display: 'flex', alignItems: 'center', gap: 16,
                  marginBottom: 16, textDecoration: 'none',
                  padding: '16px 20px',
                  border: '1px solid rgba(255, 0, 46, 0.15)',
                  background: '#180407',
                  borderRadius: 8,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#FF002E';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.15)';
                }}
              >
                <div style={{
                  width: 32, height: 32,
                  border: '1px solid rgba(255, 0, 46, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  borderRadius: 4,
                }}>
                  <div style={{ width: 6, height: 6, background: '#FF002E', borderRadius: '50%' }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9, letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.5)', marginBottom: 4,
                  }}>
                    {label}
                  </p>
                  <p style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 600 }}>{val}</p>
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
                    width: 40, height: 40,
                    border: '1px solid rgba(255, 0, 46, 0.15)',
                    borderRadius: 6,
                    background: '#180407',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#FF002E';
                    e.currentTarget.style.color        = '#FF002E';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 0, 46, 0.15)';
                    e.currentTarget.style.color        = '#FFFFFF';
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
              background: '#180407',
              border: '1px solid rgba(255, 0, 46, 0.15)',
              borderRadius: 12,
              padding: '40px',
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 24 }}>
                <label htmlFor="name" style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.6)', marginBottom: 8, display: 'block',
                }}>Your Name</label>
                <input
                  id="name"
                  name="name"
                  className="luxury-input"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%', background: '#120305',
                    border: '1px solid rgba(255, 0, 46, 0.2)',
                    color: '#FFFFFF', padding: '14px 18px', borderRadius: 8,
                  }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label htmlFor="email" style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.6)', marginBottom: 8, display: 'block',
                }}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="luxury-input"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%', background: '#120305',
                    border: '1px solid rgba(255, 0, 46, 0.2)',
                    color: '#FFFFFF', padding: '14px 18px', borderRadius: 8,
                  }}
                />
              </div>

              <div style={{ marginBottom: 32 }}>
                <label htmlFor="message" style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.6)', marginBottom: 8, display: 'block',
                }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="luxury-input"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%', background: '#120305',
                    border: '1px solid rgba(255, 0, 46, 0.2)',
                    color: '#FFFFFF', padding: '14px 18px', borderRadius: 8,
                    resize: 'vertical', minHeight: 120,
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: '1px solid #FF002E',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  cursor: 'pointer',
                  borderRadius: 8,
                  transition: 'all 0.3s ease',
                  opacity: isLoading ? 0.7 : 1,
                }}
                disabled={isLoading}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#FF002E';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {isLoading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

