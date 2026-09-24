import { Link } from 'react-router-dom';
import {
  Gift, Lightbulb, Bot, BarChart3,
  ArrowRight, QrCode, Heart, Sparkles
} from 'lucide-react';

const DEMO_CARDS = [
  {
    icon: '🎉',
    title: 'Create an Impact Campaign',
    desc: 'Turn your birthday or special occasion into a fundraising campaign.',
    path: '/give',
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
    cta: 'Start a Campaign',
  },
  {
    icon: '🤝',
    title: 'Share Your Skill',
    desc: 'Join the Skill Bank and volunteer your professional expertise.',
    path: '/skills',
    color: '#2563eb',
    bg: '#eff6ff',
    cta: 'Join Skill Bank',
  },
  {
    icon: '🤖',
    title: 'Try HOPE AI',
    desc: 'Experience how AI helps HOPE employees save time on reporting.',
    path: '/employee',
    color: '#7c3aed',
    bg: '#faf5ff',
    cta: 'Open HOPE AI',
  },
  {
    icon: '📊',
    title: 'Explore Impact Dashboard',
    desc: 'See how contributions translate into measurable social outcomes.',
    path: '/impact',
    color: 'var(--amber-500)',
    bg: '#fffbeb',
    cta: 'View Dashboard',
  },
];

export default function DemoPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ background: 'linear-gradient(150deg, var(--slate-900) 0%, var(--teal-900) 60%, var(--slate-900) 100%)', padding: '5rem 0 4rem' }}>
        <div className="container text-center">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', background: 'rgba(20,184,166,0.15)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 'var(--radius-full)', marginBottom: '1.5rem', color: 'var(--teal-300)', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <Sparkles size={14} /> HOPE Impact Ideathon 2026 — Demo
          </div>
          <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Experience HOPE CONNECT
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
            Don't just hear about the idea. Experience it.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 560, margin: '0 auto 3rem' }}>
            This is a working prototype showcasing how HOPE CONNECT connects donors, volunteers, employees and beneficiaries in one unified digital ecosystem.
          </p>

          <div style={{ display: 'inline-flex', gap: '1.5rem', padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-xl)' }}>
            {['Money', 'Skills', 'Time', 'Ideas', 'AI', 'Impact'].map((item, i) => (
              <span key={i} style={{ color: 'var(--teal-300)', fontWeight: 700, fontSize: '0.9375rem', fontFamily: 'var(--font-display)' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Explore the Prototype</div>
            <h2 className="section-title">Pick your journey</h2>
            <p className="section-subtitle">Each path shows a different part of the HOPE CONNECT ecosystem. Click any card to experience it.</p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
            {DEMO_CARDS.map((card, i) => (
              <Link key={i} to={card.path} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ cursor: 'pointer', padding: '2rem', border: `2px solid ${card.color}18`, transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = card.color; e.currentTarget.style.background = card.bg; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${card.color}18`; e.currentTarget.style.background = 'white'; }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1 }}>{card.icon}</div>
                  <h3 style={{ color: 'var(--slate-900)', marginBottom: '0.75rem', fontSize: '1.375rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{card.desc}</p>
                  <div className="flex items-center gap-2" style={{ color: card.color, fontWeight: 700, fontSize: '0.9375rem' }}>
                    {card.cta} <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QR Placeholder */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container text-center">
          <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>Scan to Experience</div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Scan to Experience HOPE CONNECT</h2>
          <p style={{ color: 'var(--slate-500)', marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            The QR code will link directly to the deployed /demo prototype. Replace the placeholder below after deployment.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            {/* QR Placeholder */}
            <div className="qr-placeholder" style={{ width: 200, height: 200 }}>
              <QrCode size={48} color="var(--teal-500)" />
              <span style={{ fontWeight: 700, color: 'var(--teal-600)', fontSize: '0.875rem' }}>
                QR Code Placeholder
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--teal-500)', lineHeight: 1.4 }}>
                Replace after deployment
              </span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--slate-400)', maxWidth: 320, margin: 0 }}>
              To replace: add your QR image at <code style={{ background: 'var(--slate-100)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>public/qr.png</code> and update the QRPlaceholder component.
            </p>
            <div className="demo-label" style={{ display: 'inline-flex' }}>QR placeholder — replace after deployment</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--teal-600), var(--teal-800), var(--slate-900))', padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Every contribution creates impact.</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Money. Skills. Time. Ideas.</p>
          <Link to="/give" className="btn btn-white btn-lg">
            <Heart size={18} color="var(--teal-700)" fill="var(--teal-700)" />
            Create Impact
          </Link>
        </div>
      </section>
    </div>
  );
}
