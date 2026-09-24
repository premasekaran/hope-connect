import { Link } from 'react-router-dom';
import {
  ArrowRight, Heart, QrCode, Globe,
  BarChart3, Users, Bot, Gift,
  CheckCircle, DollarSign, Lightbulb,
  Clock, Target, Shield, Zap, Monitor
} from 'lucide-react';

const DEMO_CARDS = [
  {
    Icon: Gift,
    title: 'Create an Impact Campaign',
    desc: 'Turn your birthday or anniversary into a fundraising campaign for a cause you care about. See the full donation simulation in action.',
    path: '/give',
    accent: 'var(--navy-800)',
    bg: 'var(--navy-50)',
    border: 'var(--navy-200)',
    cta: 'Start a Campaign',
    tag: 'Give & Celebrate',
  },
  {
    Icon: Lightbulb,
    title: 'Share Your Professional Expertise',
    desc: 'Browse the Skill Bank, view open opportunities and submit a volunteer application — all within a few clicks.',
    path: '/skills',
    accent: '#7c3aed',
    bg: '#faf5ff',
    border: '#e9d5ff',
    cta: 'Join Skill Bank',
    tag: 'Skill Bank',
  },
  {
    Icon: Bot,
    title: 'Try the HOPE AI Assistant',
    desc: 'See how AI reduces the administrative burden on HOPE employees — summarising field reports and generating donor updates in seconds.',
    path: '/employee',
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    cta: 'Open HOPE AI',
    tag: 'Employee Hub',
  },
  {
    Icon: BarChart3,
    title: 'Explore the Impact Dashboard',
    desc: 'View live charts showing how donations, volunteer hours and skills are translating into measurable programme outcomes.',
    path: '/impact',
    accent: 'var(--gold-600)',
    bg: 'var(--gold-50)',
    border: 'var(--gold-400)',
    cta: 'View Dashboard',
    tag: 'Impact',
  },
];

const KEY_FEATURES = [
  { Icon: DollarSign, title: 'Celebration Fundraising',  desc: 'Turn personal milestones into community impact' },
  { Icon: Lightbulb,  title: 'Skill Bank',               desc: 'Match professional expertise to programme needs' },
  { Icon: Bot,        title: 'HOPE AI Assistant',        desc: 'Cut employee admin time by up to 40%' },
  { Icon: BarChart3,  title: 'Impact Dashboard',         desc: 'Real-time visibility into programme outcomes' },
  { Icon: Shield,     title: 'CSR Challenge Bank',       desc: 'Structured challenges for corporate partners' },
  { Icon: Users,      title: 'Virtuous Contribution Cycle', desc: 'Beneficiaries become volunteers, then donors' },
];

export default function DemoPage() {
  return (
    <div className="page-enter">

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(150deg, var(--navy-950) 0%, var(--navy-800) 55%, var(--navy-900) 100%)',
        padding: '5.5rem 0 5rem',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.25rem', marginBottom: '2rem',
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--navy-200)', fontSize: '0.8125rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            <Globe size={13} color="var(--navy-200)" />
            HOPE Impact Ideathon 2026 — Live Prototype
          </div>

          <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
            Experience HOPE CONNECT
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
            Don't just hear about the idea. Experience it.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', maxWidth: 540, margin: '0 auto 3rem', lineHeight: 1.75 }}>
            A fully working prototype demonstrating how HOPE CONNECT connects donors, volunteers, employees
            and corporate partners in one unified digital platform.
          </p>

          {/* Capability tags */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {['Fundraising', 'Skill Volunteering', 'Employee AI', 'Impact Tracking', 'CSR Partnerships'].map((tag, i) => (
              <div key={i} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '0.4rem 1rem',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--navy-200)', fontSize: '0.875rem', fontWeight: 600,
              }}>
                {tag}
              </div>
            ))}
          </div>

          <Link to="/give" className="btn btn-white btn-lg">
            Start Your Demo Journey
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* ══ DEMO CARDS ════════════════════════════════════ */}
      <section style={{ background: 'var(--slate-50)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Explore the Prototype</div>
            <h2 className="section-title">Choose where to start</h2>
            <p className="section-subtitle">
              Each card takes you into a different area of the HOPE CONNECT platform. All interactions are live — nothing is static.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem', maxWidth: 940, margin: '0 auto' }}>
            {DEMO_CARDS.map((card, i) => {
              const { Icon } = card;
              return (
                <Link key={i} to={card.path} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'white',
                    border: `2px solid ${card.border}`,
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.25rem 2rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    height: '100%', display: 'flex', flexDirection: 'column',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = card.bg; e.currentTarget.style.borderColor = card.accent; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = card.border; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div style={{ width: 56, height: 56, background: card.bg, border: `1px solid ${card.border}`, borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: card.accent }}>
                        <Icon size={24} />
                      </div>
                      <span style={{
                        padding: '0.25rem 0.875rem', background: card.bg, border: `1px solid ${card.border}`,
                        borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700,
                        color: card.accent, textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>
                        {card.tag}
                      </span>
                    </div>
                    <h3 style={{ color: 'var(--navy-900)', marginBottom: '0.875rem', fontSize: '1.25rem' }}>{card.title}</h3>
                    <p style={{ fontSize: '0.9375rem', marginBottom: '1.75rem', lineHeight: 1.7, flex: 1, color: 'var(--slate-600)' }}>{card.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: card.accent, fontWeight: 700, fontSize: '0.9375rem' }}>
                      {card.cta} <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ KEY FEATURES ══════════════════════════════════ */}
      <section style={{ background: 'white', padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">What Is in the Prototype</div>
            <h2 className="section-title">Six core capabilities</h2>
          </div>
          <div className="grid-3">
            {KEY_FEATURES.map((f, i) => {
              const FIcon = f.Icon;
              return (
                <div key={i} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1.25rem 1.5rem',
                  background: 'var(--slate-50)', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--slate-200)',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--navy-200)'; e.currentTarget.style.background = 'var(--navy-50)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--slate-200)'; e.currentTarget.style.background = 'var(--slate-50)'; }}>
                  <div style={{ width: 40, height: 40, background: 'var(--navy-100)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-700)', flexShrink: 0 }}>
                    <FIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--slate-800)', marginBottom: '0.25rem' }}>{f.title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--slate-500)' }}>{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ QR PLACEHOLDER ════════════════════════════════ */}
      <section style={{ background: 'var(--slate-50)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>Scan to Experience</div>
          <h2 className="section-title">Scan the QR code to open the prototype</h2>
          <p style={{ color: 'var(--slate-500)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 3rem', lineHeight: 1.75 }}>
            Replace this placeholder with a QR code linking to the deployed prototype URL
            once the site is live on your hosting platform.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
            {/* QR Placeholder */}
            <div style={{
              width: 220, height: 220,
              background: 'white', border: '2px solid var(--navy-200)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
              boxShadow: 'var(--shadow-lg)', position: 'relative',
            }}>
              {/* Corner brackets */}
              {[
                { top: 12, left: 12, borderTop: '3px solid var(--navy-700)', borderLeft: '3px solid var(--navy-700)' },
                { top: 12, right: 12, borderTop: '3px solid var(--navy-700)', borderRight: '3px solid var(--navy-700)' },
                { bottom: 12, left: 12, borderBottom: '3px solid var(--navy-700)', borderLeft: '3px solid var(--navy-700)' },
                { bottom: 12, right: 12, borderBottom: '3px solid var(--navy-700)', borderRight: '3px solid var(--navy-700)' },
              ].map((style, i) => (
                <div key={i} style={{ position: 'absolute', width: 24, height: 24, borderRadius: 2, ...style }} />
              ))}
              <QrCode size={56} color="var(--navy-700)" />
              <div style={{ textAlign: 'center', padding: '0 1rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--navy-800)', fontSize: '0.875rem' }}>QR Code Placeholder</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--navy-500)', marginTop: '0.25rem' }}>Replace after deployment</div>
              </div>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--slate-400)', maxWidth: 360, margin: 0, textAlign: 'center' }}>
              Add your QR image at <code style={{ background: 'var(--slate-200)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>public/qr.png</code> and replace the placeholder in <code style={{ background: 'var(--slate-200)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>DemoPage.jsx</code>
            </p>
            <div className="demo-label" style={{ display: 'inline-flex' }}>QR placeholder — replace after deployment</div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy-800) 0%, var(--navy-900) 60%, var(--navy-950) 100%)', padding: '5.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Every contribution creates impact.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
            Money. Skills. Time. Ideas. All of it matters.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/give" className="btn btn-white btn-lg">
              <Heart size={17} color="var(--navy-800)" fill="var(--navy-200)" />
              Create an Impact Campaign
            </Link>
            <Link to="/impact" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
              <BarChart3 size={17} />
              View Impact Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
