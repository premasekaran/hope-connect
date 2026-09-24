import { Link } from 'react-router-dom';
import {
  ArrowRight, Heart, QrCode, Sparkles,
  BarChart3, Users, Bot, Gift,
  CheckCircle, Globe, Zap
} from 'lucide-react';

const DEMO_CARDS = [
  {
    icon: '🎉',
    title: 'Create an Impact Campaign',
    desc: 'Turn your birthday or special occasion into a fundraising campaign. See how donation simulation works.',
    path: '/give',
    color: 'var(--teal-600)',
    bg: 'linear-gradient(135deg, var(--teal-50), #ecfeff)',
    border: 'var(--teal-200)',
    accentColor: 'var(--teal-700)',
    cta: 'Start a Campaign',
    tag: 'Give & Celebrate',
  },
  {
    icon: '🤝',
    title: 'Share Your Skill',
    desc: 'Join the Skill Bank and volunteer your professional expertise. See matching opportunities.',
    path: '/skills',
    color: '#2563eb',
    bg: 'linear-gradient(135deg, #eff6ff, #f0f9ff)',
    border: '#bfdbfe',
    accentColor: '#1d4ed8',
    cta: 'Join Skill Bank',
    tag: 'Skill Bank',
  },
  {
    icon: '🤖',
    title: 'Try HOPE AI',
    desc: 'Experience how AI helps HOPE employees reduce admin work — summarise reports, generate donor updates.',
    path: '/employee',
    color: '#7c3aed',
    bg: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
    border: '#e9d5ff',
    accentColor: '#6d28d9',
    cta: 'Open HOPE AI',
    tag: 'Employee Hub',
  },
  {
    icon: '📊',
    title: 'Explore Impact Dashboard',
    desc: 'See how contributions translate into measurable social outcomes. Live charts and programme data.',
    path: '/impact',
    color: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fefce8)',
    border: '#fde68a',
    accentColor: '#b45309',
    cta: 'View Dashboard',
    tag: 'Impact',
  },
];

const KEY_FEATURES = [
  { icon: '💚', title: 'Celebration Fundraising', desc: 'Turn personal milestones into community impact' },
  { icon: '💡', title: 'Skill Bank', desc: 'Match professional expertise to programme needs' },
  { icon: '🤖', title: 'HOPE AI', desc: 'Reduce employee admin time by up to 40%' },
  { icon: '📊', title: 'Impact Dashboard', desc: 'Real-time visibility into programme outcomes' },
  { icon: '🏢', title: 'CSR Challenge Bank', desc: 'Structured challenges for corporate partners' },
  { icon: '🔄', title: 'Virtuous Cycle', desc: 'Beneficiaries become volunteers become donors' },
];

export default function DemoPage() {
  return (
    <div className="page-enter">
      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(150deg, var(--slate-900) 0%, var(--teal-900) 55%, var(--slate-900) 100%)',
        padding: '5rem 0 4.5rem',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Decorative glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(20,184,166,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.25rem',
            background: 'rgba(20,184,166,0.12)',
            border: '1px solid rgba(20,184,166,0.3)',
            borderRadius: 'var(--radius-full)',
            marginBottom: '2rem',
            color: 'var(--teal-300)', fontSize: '0.8125rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.06em'
          }}>
            <Sparkles size={14} /> HOPE Impact Ideathon 2026 — Live Demo
          </div>

          <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
            Experience HOPE CONNECT
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
            Don't just hear about the idea. Experience it.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', maxWidth: 540, margin: '0 auto 3rem', lineHeight: 1.7 }}>
            This is a fully working prototype showcasing how HOPE CONNECT connects donors, volunteers, employees and beneficiaries in one unified digital ecosystem.
          </p>

          {/* Pill tags */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[
              { label: 'Money', icon: '💚', color: 'var(--teal-400)', border: 'rgba(20,184,166,0.3)' },
              { label: 'Skills', icon: '💡', color: '#a78bfa', border: 'rgba(124,58,237,0.3)' },
              { label: 'Time', icon: '⏰', color: '#93c5fd', border: 'rgba(37,99,235,0.3)' },
              { label: 'Ideas', icon: '🌟', color: '#fbbf24', border: 'rgba(217,119,6,0.3)' },
              { label: 'AI', icon: '🤖', color: '#c084fc', border: 'rgba(192,132,252,0.3)' },
              { label: 'Impact', icon: '📊', color: '#34d399', border: 'rgba(52,211,153,0.3)' },
            ].map((tag, i) => (
              <div key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.4rem 1rem',
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${tag.border}`,
                borderRadius: 'var(--radius-full)',
                color: tag.color, fontSize: '0.875rem', fontWeight: 700,
              }}>
                {tag.icon} {tag.label}
              </div>
            ))}
          </div>

          <Link to="/give" className="btn btn-primary btn-lg">
            <Heart size={18} fill="white" />
            Start Your Demo Journey
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════
          DEMO CARDS
      ══════════════════════════════════ */}
      <section style={{ background: 'var(--slate-50)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Explore the Prototype</div>
            <h2 className="section-title">Pick your journey</h2>
            <p className="section-subtitle">
              Each path showcases a different part of the HOPE CONNECT ecosystem. Click any card to experience it live.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem', maxWidth: 920, margin: '0 auto' }}>
            {DEMO_CARDS.map((card, i) => (
              <Link key={i} to={card.path} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: card.bg,
                  border: `2px solid ${card.border}`,
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.25rem 2rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = card.color; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = card.border; }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '3.25rem', lineHeight: 1 }}>{card.icon}</span>
                    <span style={{
                      padding: '0.25rem 0.875rem',
                      background: 'white',
                      border: `1px solid ${card.border}`,
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem', fontWeight: 700,
                      color: card.accentColor,
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 style={{ color: 'var(--slate-900)', marginBottom: '0.875rem', fontSize: '1.375rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '1rem', marginBottom: '1.75rem', lineHeight: 1.65, flex: 1, color: 'var(--slate-600)' }}>{card.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: card.accentColor, fontWeight: 700, fontSize: '0.9375rem' }}>
                    {card.cta} <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          KEY FEATURES QUICK VIEW
      ══════════════════════════════════ */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">What's in the Prototype</div>
            <h2 className="section-title">6 key capabilities</h2>
          </div>
          <div className="grid-3">
            {KEY_FEATURES.map((f, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                padding: '1.25rem',
                background: 'var(--slate-50)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--slate-200)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal-200)'; e.currentTarget.style.background = 'var(--teal-50)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--slate-200)'; e.currentTarget.style.background = 'var(--slate-50)'; }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--slate-800)', marginBottom: '0.25rem' }}>{f.title}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--slate-500)' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          QR PLACEHOLDER
      ══════════════════════════════════ */}
      <section style={{ background: 'var(--slate-50)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>Scan to Experience</div>
          <h2 className="section-title">Scan to Experience HOPE CONNECT</h2>
          <p style={{ color: 'var(--slate-500)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 3rem', lineHeight: 1.7 }}>
            The QR code will link directly to the deployed <code style={{ background: 'var(--slate-200)', padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.9em' }}>/demo</code> prototype page.
            Replace the placeholder below after deployment.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
            {/* QR Placeholder — visually designed */}
            <div style={{
              width: 220, height: 220,
              background: 'white',
              border: '2px solid var(--teal-200)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
            }}>
              {/* Corner brackets */}
              {[
                { top: 12, left: 12, borderTop: '3px solid var(--teal-500)', borderLeft: '3px solid var(--teal-500)' },
                { top: 12, right: 12, borderTop: '3px solid var(--teal-500)', borderRight: '3px solid var(--teal-500)' },
                { bottom: 12, left: 12, borderBottom: '3px solid var(--teal-500)', borderLeft: '3px solid var(--teal-500)' },
                { bottom: 12, right: 12, borderBottom: '3px solid var(--teal-500)', borderRight: '3px solid var(--teal-500)' },
              ].map((style, i) => (
                <div key={i} style={{ position: 'absolute', width: 24, height: 24, borderRadius: 2, ...style }} />
              ))}
              <QrCode size={56} color="var(--teal-500)" />
              <div style={{ textAlign: 'center', padding: '0 1rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--teal-700)', fontSize: '0.875rem' }}>QR Code Placeholder</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--teal-500)', marginTop: '0.25rem' }}>Replace after deployment</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <p style={{ fontSize: '0.8125rem', color: 'var(--slate-400)', maxWidth: 360, margin: 0, textAlign: 'center' }}>
                To replace: add your QR image at <code style={{ background: 'var(--slate-100)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>public/qr.png</code> and update the img tag in DemoPage.jsx
              </p>
              <div className="demo-label" style={{ display: 'inline-flex' }}>QR placeholder — replace after deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FINAL CTA
      ══════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--teal-700) 0%, var(--teal-800) 40%, var(--slate-900) 100%)',
        padding: '5rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Every contribution creates impact.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
            Money. Skills. Time. Ideas.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/give" className="btn btn-white btn-lg">
              <Heart size={18} color="var(--teal-700)" fill="var(--teal-700)" />
              Create Impact
            </Link>
            <Link to="/impact" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: 'white' }}>
              <BarChart3 size={18} />
              View Impact Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
