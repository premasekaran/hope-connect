import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, DollarSign, Lightbulb, Clock, Star,
  TrendingUp, Users, Activity, CheckCircle,
  BarChart3, ChevronRight, Heart, Globe, Target,
  Shield, Zap, Award
} from 'lucide-react';

const STATS = [
  { value: '₹24.8L', label: 'Funds Mobilised',      icon: <TrendingUp size={20} /> },
  { value: '1,842',  label: 'Beneficiaries Reached', icon: <Users size={20} /> },
  { value: '624',    label: 'Volunteers Active',      icon: <Heart size={20} /> },
  { value: '3,280',  label: 'Volunteer Hours',        icon: <Clock size={20} /> },
  { value: '47',     label: 'Active Campaigns',       icon: <Activity size={20} /> },
];

const CONTRIBUTION_TYPES = [
  {
    Icon: DollarSign,
    badge: 'Money',
    title: 'Give & Celebrate',
    desc: 'Turn a birthday, anniversary or milestone into a fundraising campaign. Supporters donate in your name to a cause that matters to you.',
    path: '/give',
    cta: 'Start a Campaign',
    accent: 'var(--navy-800)',
    bg: 'var(--navy-50)',
    border: 'var(--navy-200)',
  },
  {
    Icon: Lightbulb,
    badge: 'Skills',
    title: 'Skill Bank',
    desc: 'Share your professional expertise — from teaching coding to reviewing resumes. A few hours a month can open new doors for young people.',
    path: '/skills',
    cta: 'Offer Your Expertise',
    accent: 'var(--gold-600)',
    bg: 'var(--gold-50)',
    border: 'var(--gold-400)',
  },
  {
    Icon: Clock,
    badge: 'Time',
    title: 'Volunteer',
    desc: 'Join field visits, mentoring sessions or online programmes at a schedule that suits you. Every hour you give directly benefits a beneficiary.',
    path: '/skills',
    cta: 'Find Opportunities',
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    Icon: Star,
    badge: 'Ideas',
    title: 'Impact Lab',
    desc: 'Bring your thinking to HOPE programmes. Help us design better delivery models, reach more people and measure outcomes more effectively.',
    path: '/demo',
    cta: 'Contribute an Idea',
    accent: '#7c3aed',
    bg: '#faf5ff',
    border: '#e9d5ff',
  },
];

const ECOSYSTEM_NODES = [
  { label: 'Donors',      Icon: DollarSign, accent: 'var(--navy-800)', bg: 'var(--navy-50)',  border: 'var(--navy-200)' },
  { label: 'Volunteers',  Icon: Users,       accent: '#2563eb',         bg: '#eff6ff',         border: '#bfdbfe'         },
  { label: 'Employees',   Icon: Shield,      accent: 'var(--gold-600)', bg: 'var(--gold-50)',  border: 'var(--gold-400)' },
  { label: 'Corporates',  Icon: Award,       accent: '#7c3aed',         bg: '#faf5ff',         border: '#e9d5ff'         },
];

const SUSTAINABILITY_CHANNELS = [
  'Individual Donations', 'Recurring Giving', 'Celebration Fundraising',
  'Corporate CSR', 'Employee Volunteering', 'Skill Contributions', 'Strategic Partnerships',
];

const PHASES = [
  {
    num: '01', phase: 'Phase 1', period: '0–3 Months', label: 'Launch MVP',
    items: ['Celebration fundraising module', 'Skill Bank platform', 'Employee AI assistant', 'Impact dashboard'],
    accent: 'var(--navy-800)', bg: 'var(--navy-50)',
  },
  {
    num: '02', phase: 'Phase 2', period: '3–6 Months', label: 'Pilot & Measure',
    items: ['Pilot with 1–2 active programmes', 'Track fundraising uplift', 'Measure volunteer engagement', 'Quantify employee time saved'],
    accent: 'var(--gold-600)', bg: 'var(--gold-50)',
  },
  {
    num: '03', phase: 'Phase 3', period: '6–12 Months', label: 'Scale',
    items: ['Expand to all programmes', 'Onboard corporate partners', 'Live payment integration', 'Multilingual AI support', 'Advanced analytics & reporting'],
    accent: '#2563eb', bg: '#eff6ff',
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-enter">

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(150deg, #edf3fb 0%, #dae7f5 45%, #f5f7fc 100%)',
        padding: '5.5rem 0 4.5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -100, right: -80, width: 400, height: 400, background: 'radial-gradient(circle, rgba(26,52,97,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '0.4rem 1.25rem',
              background: 'white', border: '1px solid var(--navy-200)',
              borderRadius: 'var(--radius-full)',
              marginBottom: '2rem',
              boxShadow: '0 2px 12px rgba(26,52,97,0.1)',
              fontSize: '0.8125rem', fontWeight: 700,
              color: 'var(--navy-700)',
              textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>
              <Globe size={13} color="var(--navy-700)" />
              HOPE Impact Ideathon 2026 — Ideas into Action
            </div>

            <h1 style={{ marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Every contribution<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--navy-800), var(--navy-500))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                creates impact.
              </span>
            </h1>

            <p style={{ fontSize: '1.125rem', color: 'var(--slate-600)', maxWidth: 660, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              HOPE CONNECT brings <strong style={{ color: 'var(--slate-800)' }}>donors, volunteers, employees and corporate partners</strong> together
              in one digital platform — converting money, skills and time into measurable social outcomes.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/give" className="btn btn-primary btn-lg">
                Create an Impact Campaign
                <ArrowRight size={17} />
              </Link>
              <Link to="/impact" className="btn btn-outline btn-lg">
                <BarChart3 size={17} />
                View Impact Dashboard
              </Link>
            </div>

            {/* Flow strip */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              background: 'white', border: '1px solid var(--slate-200)',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)', flexWrap: 'wrap', justifyContent: 'center',
            }}>
              {['Give', '›', 'Contribute', '›', 'Deliver', '›', 'Measure', '›', 'Report Impact', '›', 'Give Again'].map((item, i) => (
                <span key={i} style={{
                  color: item === '›' ? 'var(--slate-300)' : 'var(--navy-700)',
                  fontWeight: item === '›' ? 400 : 700,
                  fontSize: '0.875rem',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ECOSYSTEM DIAGRAM ══════════════════════════════ */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="section-title">One platform connecting every stakeholder</h2>
            <p className="section-subtitle">
              A single digital ecosystem that links every type of contributor directly to every beneficiary,
              with transparent measurement at every step.
            </p>
          </div>

          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            {/* Contributor nodes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', width: '100%' }}>
              {ECOSYSTEM_NODES.map((node, i) => {
                const { Icon } = node;
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: 60, height: 60, background: node.bg,
                      border: `2px solid ${node.border}`,
                      borderRadius: 'var(--radius-xl)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <Icon size={22} color={node.accent} />
                    </div>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slate-600)' }}>{node.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Connector */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '5.5rem' }}>
                {[0,1,2,3].map(i => <div key={i} style={{ width: 2, height: 20, background: 'linear-gradient(to bottom, var(--navy-100), var(--navy-500))' }} />)}
              </div>
              <div style={{ width: '60%', height: 2, background: 'linear-gradient(to right, transparent, var(--navy-300), transparent)' }} />
              <div style={{ width: 2, height: 20, background: 'linear-gradient(to bottom, var(--navy-500), var(--navy-800))' }} />
            </div>

            {/* HOPE CONNECT hub */}
            <div style={{
              background: 'linear-gradient(135deg, var(--navy-800), var(--navy-900))',
              borderRadius: 'var(--radius-2xl)',
              padding: '1.5rem 3.5rem',
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(26,52,97,0.3)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <Globe size={24} color="white" strokeWidth={1.25} />
                <span style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.375rem', letterSpacing: '-0.01em' }}>
                  HOPE CONNECT
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                {['Money', 'Skills', 'Time', 'AI'].map((t, i) => (
                  <span key={i} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Connector down */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 2, height: 20, background: 'linear-gradient(to bottom, var(--navy-500), var(--gold-500))' }} />
              <div style={{ display: 'flex', gap: '4rem' }}>
                {[0,1].map(i => <div key={i} style={{ width: 2, height: 20, background: 'linear-gradient(to bottom, var(--gold-500), var(--gold-400))' }} />)}
              </div>
            </div>

            {/* Output nodes */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              {[
                { label: 'Programmes', Icon: Target, bg: 'var(--navy-50)', border: 'var(--navy-200)', accent: 'var(--navy-700)' },
                { label: 'Beneficiaries', Icon: Users, bg: '#f0fdf4', border: '#86efac', accent: '#15803d' },
              ].map((node, i) => {
                const { Icon } = node;
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: 60, height: 60, background: node.bg,
                      border: `2px solid ${node.border}`,
                      borderRadius: 'var(--radius-xl)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                    }}>
                      <Icon size={22} color={node.accent} />
                    </div>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slate-600)' }}>{node.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Return loop */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '0.625rem 1.25rem',
              background: 'var(--navy-50)', border: '1px solid var(--navy-200)',
              borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)',
            }}>
              <TrendingUp size={14} color="var(--navy-700)" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--navy-700)' }}>
                Measured Impact  ›  Impact Report  ›  Donor
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--navy-400)', fontStyle: 'italic' }}>Self-reinforcing cycle</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IMPACT NUMBERS ══════════════════════════════════ */}
      <section style={{ background: 'var(--slate-50)', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Cumulative Impact</div>
            <h2 className="section-title">The numbers tell the story</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card"
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,52,97,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-700)', margin: '0 auto 1rem' }}>
                  {s.icon}
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="demo-label" style={{ display: 'inline-flex' }}>Prototype — Demonstration Data</div>
          </div>
        </div>
      </section>

      {/* ══ FOUR WAYS TO CONTRIBUTE ══════════════════════════ */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Ways to Contribute</div>
            <h2 className="section-title">Everyone has something to give</h2>
            <p className="section-subtitle">
              Money is just one form of contribution. HOPE CONNECT enables you to give whatever you have —
              expertise, time, ideas — and see exactly where it goes.
            </p>
          </div>
          <div className="grid-4">
            {CONTRIBUTION_TYPES.map((c, i) => {
              const { Icon } = c;
              return (
                <div key={i} className="card"
                  style={{ cursor: 'pointer', border: `2px solid ${c.border}`, textAlign: 'center' }}
                  onClick={() => navigate(c.path)}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.background = c.bg; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.background = 'white'; }}>
                  <div style={{ width: 56, height: 56, background: c.bg, borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: c.accent, border: `1px solid ${c.border}` }}>
                    <Icon size={26} />
                  </div>
                  <span className="badge" style={{ background: c.bg, color: c.accent, border: `1px solid ${c.border}`, marginBottom: '0.75rem' }}>
                    {c.badge}
                  </span>
                  <h4 style={{ marginBottom: '0.75rem' }}>{c.title}</h4>
                  <p style={{ fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: 1.65 }}>{c.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', color: c.accent, fontWeight: 700, fontSize: '0.875rem' }}>
                    {c.cta} <ChevronRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WHY HOPE CONNECT ════════════════════════════════ */}
      <section style={{ background: 'var(--navy-900)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow" style={{ color: 'var(--navy-300)' }}>The Case for HOPE CONNECT</div>
            <h2 className="section-title" style={{ color: 'white' }}>Why this, why now?</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              {
                Icon: Zap, accentColor: '#fb7185', label: 'The Problem',
                title: 'Contributions are fragmented',
                text: 'Donors, volunteers, skills and organisational effort operate in separate silos. This makes it difficult to measure true impact, eliminate duplication and scale what works.',
              },
              {
                Icon: Globe, accentColor: 'var(--navy-300)', label: 'The Solution',
                title: 'One connected platform',
                text: 'HOPE CONNECT unifies every type of contribution. Every donor, volunteer and employee operates within the same ecosystem, linked to the same measurable outcomes.',
              },
              {
                Icon: Target, accentColor: 'var(--gold-400)', label: 'What Is Different',
                title: 'Money + Skills + Time + AI + Impact',
                text: 'No single platform currently combines donation fundraising, skill volunteering, employee operations and AI-assisted reporting in one place. This is that platform.',
              },
            ].map((c, i) => {
              const { Icon } = c;
              return (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--radius-xl)', padding: '2rem',
                  transition: 'all 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <Icon size={18} color={c.accentColor} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.accentColor }}>{c.label}</span>
                  </div>
                  <h4 style={{ color: 'white', marginBottom: '0.875rem' }}>{c.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem', lineHeight: 1.75, margin: 0 }}>{c.text}</p>
                </div>
              );
            })}
          </div>

          {/* Long-term journey */}
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(26,52,97,0.3)', border: '1px solid rgba(138,170,217,0.25)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <div className="section-eyebrow" style={{ color: 'var(--navy-300)', marginBottom: '1.25rem' }}>Long-term Ecosystem Vision</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {['Beneficiary', '›', 'Volunteer', '›', 'Mentor', '›', 'Donor', '›', 'Partner'].map((item, i) => (
                <span key={i} style={{
                  color: item === '›' ? 'rgba(255,255,255,0.2)' : 'var(--navy-200)',
                  fontWeight: item === '›' ? 400 : 700,
                  fontSize: '1rem',
                  fontFamily: 'var(--font-display)',
                }}>
                  {item}
                </span>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginTop: '0.75rem', marginBottom: 0 }}>
              Today's beneficiary becomes tomorrow's volunteer, then mentor, then donor and finally a partner.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SUSTAINABILITY ══════════════════════════════════ */}
      <section style={{ background: 'white', padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Financial Sustainability</div>
            <h2 className="section-title">Built for the long term</h2>
            <p className="section-subtitle">
              Diversified revenue channels mean HOPE programmes can grow and sustain impact year after year,
              without depending on any single source of funding.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            {SUSTAINABILITY_CHANNELS.map((c, i) => (
              <div key={i} className="chip" style={{ padding: '0.625rem 1.25rem', fontSize: '0.9375rem' }}>
                <CheckCircle size={13} color="var(--navy-600)" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ROADMAP ════════════════════════════════════════ */}
      <section style={{ background: 'var(--slate-50)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Implementation Plan</div>
            <h2 className="section-title">From prototype to scale</h2>
            <p className="section-subtitle">
              A phased approach that delivers measurable value at each stage before expanding further.
            </p>
          </div>
          <div className="grid-3">
            {PHASES.map((p, i) => (
              <div key={i} className="card" style={{ borderTop: `4px solid ${p.accent}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '3.5rem', color: p.accent, opacity: 0.07, lineHeight: 1 }}>
                  {p.num}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 700, color: p.accent, fontSize: '0.9375rem', marginBottom: '0.15rem' }}>{p.phase} — {p.period}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.label}</div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {p.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--slate-600)', lineHeight: 1.5 }}>
                      <CheckCircle size={14} color={p.accent} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy-800) 0%, var(--navy-900) 60%, #080f1e 100%)', padding: '5.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '8%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Every contribution creates impact.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
            Money. Skills. Time. Ideas. All of it matters.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/demo" className="btn btn-white btn-lg">
              Get Started
              <ArrowRight size={17} />
            </Link>
            <Link to="/impact" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
              <BarChart3 size={17} />
              View Impact Data
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
