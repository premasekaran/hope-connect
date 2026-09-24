import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, Heart, Lightbulb, Clock, DollarSign,
  TrendingUp, Users, Activity, CheckCircle,
  BarChart3, Star, ChevronRight, Zap, Globe,
  Shield, Target, Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const STATS = [
  { value: '₹24.8L', label: 'Funds Mobilised', icon: <TrendingUp size={22} />, color: 'var(--teal-600)', bg: 'var(--teal-50)' },
  { value: '1,842', label: 'Beneficiaries Reached', icon: <Users size={22} />, color: '#2563eb', bg: '#eff6ff' },
  { value: '624', label: 'Volunteers', icon: <Heart size={22} />, color: '#7c3aed', bg: '#faf5ff' },
  { value: '3,280', label: 'Volunteer Hours', icon: <Clock size={22} />, color: 'var(--amber-500)', bg: '#fffbeb' },
  { value: '47', label: 'Active Campaigns', icon: <Activity size={22} />, color: 'var(--emerald-600)', bg: '#f0fdf4' },
];

const CONTRIBUTION_TYPES = [
  {
    icon: <DollarSign size={30} />,
    emoji: '💚',
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
    border: 'var(--teal-200)',
    badge: 'MONEY',
    title: 'Give & Celebrate',
    desc: 'Turn birthdays and special occasions into fundraising campaigns that create lasting change for communities.',
    path: '/give',
    cta: 'Start a Campaign',
  },
  {
    icon: <Lightbulb size={30} />,
    emoji: '💡',
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#e9d5ff',
    badge: 'SKILLS',
    title: 'Skill Bank',
    desc: 'Share your professional expertise with students and communities. Your knowledge creates opportunity.',
    path: '/skills',
    cta: 'Offer Your Skills',
  },
  {
    icon: <Clock size={30} />,
    emoji: '⏰',
    color: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    badge: 'TIME',
    title: 'Volunteer',
    desc: 'Find meaningful opportunities that match your schedule, passions and proximity.',
    path: '/skills',
    cta: 'Find Opportunities',
  },
  {
    icon: <Star size={30} />,
    emoji: '🌟',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    badge: 'IDEAS',
    title: 'Impact Lab',
    desc: 'Help HOPE discover better ways to create impact through innovation, research and design thinking.',
    path: '/demo',
    cta: 'Share Your Idea',
  },
];

const SUSTAINABILITY_CHANNELS = [
  { label: 'Individual Donations', icon: '💚' },
  { label: 'Recurring Donations', icon: '🔄' },
  { label: 'Celebration Fundraising', icon: '🎉' },
  { label: 'Corporate CSR', icon: '🏢' },
  { label: 'Employee Volunteering', icon: '👩‍💼' },
  { label: 'Skill Contributions', icon: '💡' },
  { label: 'Strategic Partnerships', icon: '🤝' },
];

const PHASES = [
  {
    phase: 'Phase 1', period: '0–3 Months', label: 'MVP',
    items: ['Celebration fundraising', 'Skill Bank launch', 'Employee AI assistant', 'Impact dashboard'],
    color: 'var(--teal-600)', bg: 'var(--teal-50)', num: '01',
  },
  {
    phase: 'Phase 2', period: '3–6 Months', label: 'Pilot',
    items: ['Test with 1–2 programmes', 'Measure fundraising lift', 'Measure volunteer engagement', 'Measure employee time saved'],
    color: '#2563eb', bg: '#eff6ff', num: '02',
  },
  {
    phase: 'Phase 3', period: '6–12 Months', label: 'Scale',
    items: ['Expand to more programmes', 'Corporate CSR partners', 'Payment gateway integration', 'Multilingual AI', 'Advanced analytics'],
    color: '#7c3aed', bg: '#faf5ff', num: '03',
  },
];

const ECOSYSTEM_NODES_TOP = [
  { label: 'Donors', icon: '💚', color: 'var(--teal-600)', bg: 'var(--teal-50)', border: 'var(--teal-200)' },
  { label: 'Volunteers', icon: '🤝', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  { label: 'Employees', icon: '👩‍💼', color: '#7c3aed', bg: '#faf5ff', border: '#e9d5ff' },
  { label: 'Corporates', icon: '🏢', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { addToast } = useApp();

  return (
    <div className="page-enter">
      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(150deg, #f0fdfa 0%, #e0f2fe 40%, #f0fdfa 80%, #fefce8 100%)',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative circles */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: 360, height: 360, background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: 280, height: 280, background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1.25rem',
              background: 'white',
              border: '1px solid var(--teal-200)',
              borderRadius: 'var(--radius-full)',
              marginBottom: '2rem',
              boxShadow: '0 2px 12px rgba(13,148,136,0.12)',
              fontSize: '0.8125rem', fontWeight: 700,
              color: 'var(--teal-700)',
              textTransform: 'uppercase', letterSpacing: '0.06em'
            }}>
              <span>🏆</span>
              HOPE Impact Ideathon 2026 — Ideas into Action
            </div>

            <h1 style={{ marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Every contribution<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--teal-600) 0%, #10b981 50%, #2563eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>creates impact.</span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: 'var(--slate-600)',
              maxWidth: 660,
              margin: '0 auto 2.5rem',
              lineHeight: 1.8
            }}>
              HOPE CONNECT brings <strong style={{ color: 'var(--slate-700)' }}>donors, volunteers, employees and partners</strong> together
              in one digital ecosystem — turning <strong style={{ color: 'var(--teal-700)' }}>money, skills and time</strong> into measurable social impact.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/give" className="btn btn-primary btn-lg">
                <Heart size={18} fill="white" />
                Create an Impact Campaign
                <ArrowRight size={18} />
              </Link>
              <Link to="/impact" className="btn btn-outline btn-lg">
                <BarChart3 size={18} />
                Explore Impact
              </Link>
            </div>

            {/* Flow ribbon */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'white',
              border: '1px solid var(--slate-200)',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)',
              flexWrap: 'wrap', justifyContent: 'center'
            }}>
              {['Give', '→', 'Contribute', '→', 'Deliver', '→', 'Measure', '→', 'Show Impact', '→', 'Give Again'].map((item, i) => (
                <span key={i} style={{
                  color: item === '→' ? 'var(--slate-300)' : 'var(--teal-700)',
                  fontWeight: item === '→' ? 400 : 700,
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-display)',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ECOSYSTEM VISUAL
      ══════════════════════════════════ */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">The Ecosystem</div>
            <h2 className="section-title">One platform. Every stakeholder.</h2>
            <p className="section-subtitle">A unified digital ecosystem connecting every contributor to every beneficiary through transparent, measurable impact.</p>
          </div>

          {/* Visual diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', maxWidth: 700, margin: '0 auto' }}>
            {/* Top row: stakeholder nodes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', width: '100%' }}>
              {ECOSYSTEM_NODES_TOP.map((node, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: 64, height: 64,
                    background: node.bg,
                    border: `2px solid ${node.border}`,
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.75rem',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    {node.icon}
                  </div>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: node.color }}>{node.label}</span>
                </div>
              ))}
            </div>

            {/* Converging arrows */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div style={{ display: 'flex', gap: '5.5rem' }}>
                {[0, 1, 2, 3].map(i => (
                  <div key={i} style={{ width: 2, height: 24, background: 'linear-gradient(to bottom, var(--teal-200), var(--teal-500))' }} />
                ))}
              </div>
              <div style={{ width: '60%', height: 2, background: 'linear-gradient(to right, transparent, var(--teal-300), transparent)' }} />
              <div style={{ width: 2, height: 24, background: 'linear-gradient(to bottom, var(--teal-500), var(--teal-700))' }} />
            </div>

            {/* HOPE CONNECT Hub */}
            <div style={{
              background: 'linear-gradient(135deg, var(--teal-600), var(--teal-800))',
              borderRadius: 'var(--radius-2xl)',
              padding: '1.75rem 3.5rem',
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(13, 148, 136, 0.3), 0 4px 12px rgba(13,148,136,0.2)',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)', borderRadius: 'var(--radius-2xl)', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <Heart size={26} color="white" fill="white" />
                <span style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.01em' }}>HOPE CONNECT</span>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                {['MONEY', 'SKILLS', 'TIME', 'AI'].map((tag, i) => (
                  <span key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Downward arrow */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 2, height: 24, background: 'linear-gradient(to bottom, var(--teal-500), var(--emerald-500))' }} />
              <div style={{ width: '40%', height: 2, background: 'linear-gradient(to right, transparent, var(--emerald-300), transparent)' }} />
              <div style={{ display: 'flex', gap: '4rem' }}>
                {[0, 1].map(i => (
                  <div key={i} style={{ width: 2, height: 24, background: 'linear-gradient(to bottom, var(--emerald-500), var(--emerald-400))' }} />
                ))}
              </div>
            </div>

            {/* Bottom row: output nodes */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              {[
                { label: 'Programmes', icon: '📋', bg: 'var(--teal-50)', border: 'var(--teal-200)', color: 'var(--teal-700)' },
                { label: 'Beneficiaries', icon: '🌱', bg: '#f0fdf4', border: '#86efac', color: '#15803d' },
              ].map((node, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: 64, height: 64,
                    background: node.bg,
                    border: `2px solid ${node.border}`,
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.75rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    {node.icon}
                  </div>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: node.color }}>{node.label}</span>
                </div>
              ))}
            </div>

            {/* Impact return loop */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '0.625rem 1.25rem',
              background: 'linear-gradient(135deg, var(--teal-50), #f0fdf4)',
              border: '1px solid var(--teal-200)',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <TrendingUp size={15} color="var(--teal-600)" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--teal-700)' }}>
                Measured Impact → Impact Report → Donor
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--teal-400)' }}>↺ Virtuous cycle</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          IMPACT NUMBERS
      ══════════════════════════════════ */}
      <section style={{ background: 'var(--slate-50)', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Impact to Date</div>
            <h2 className="section-title">Numbers that matter</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {STATS.map((s, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-xl)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 'var(--radius-lg)',
                  background: s.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: s.color,
                  margin: '0 auto 1rem'
                }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.875rem', color: s.color, lineHeight: 1, marginBottom: '0.375rem' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="demo-label" style={{ display: 'inline-flex' }}>
              📊 Prototype • Demonstration Data
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOUR CONTRIBUTION TYPES
      ══════════════════════════════════ */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Ways to Contribute</div>
            <h2 className="section-title">Contribute what you have</h2>
            <p className="section-subtitle">
              Whether you have money, skills, time or ideas — HOPE CONNECT has a way for you to create measurable impact.
            </p>
          </div>
          <div className="grid-4">
            {CONTRIBUTION_TYPES.map((c, i) => (
              <div
                key={i}
                className="card"
                style={{ cursor: 'pointer', border: `2px solid ${c.border}`, textAlign: 'center', transition: 'all 0.25s ease' }}
                onClick={() => navigate(c.path)}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.background = c.bg; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1 }}>{c.emoji}</div>
                <span className="badge" style={{ background: c.bg, color: c.color, marginBottom: '0.875rem', border: `1px solid ${c.border}` }}>{c.badge}</span>
                <h4 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>{c.title}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.65 }}>{c.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', color: c.color, fontWeight: 700, fontSize: '0.875rem' }}>
                  {c.cta} <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY HOPE CONNECT (dark section)
      ══════════════════════════════════ */}
      <section style={{ background: 'var(--slate-900)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow" style={{ color: 'var(--teal-400)' }}>The Opportunity</div>
            <h2 className="section-title" style={{ color: 'white' }}>Why HOPE CONNECT?</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              {
                emoji: '🔧', label: 'The Problem', labelColor: 'var(--rose-400)',
                title: 'Fragmented contributions',
                text: 'Donations, volunteering, skills and organisational effort operate in silos — making it hard to measure, manage and scale impact.',
              },
              {
                emoji: '💡', label: 'The Solution', labelColor: 'var(--teal-400)',
                title: 'One digital ecosystem',
                text: 'HOPE CONNECT unifies every type of contribution into a single platform, connecting every contributor to measurable outcomes.',
              },
              {
                emoji: '🚀', label: 'The Difference', labelColor: 'var(--amber-400)',
                title: 'Money + Skills + Time + AI + Impact',
                text: 'No other platform combines fundraising, skill volunteering, employee operations and AI-powered reporting in one unified experience.',
              },
            ].map((c, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{c.emoji}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.labelColor }}>{c.label}</span>
                </div>
                <h4 style={{ color: 'white', marginBottom: '0.875rem', fontSize: '1.0625rem' }}>{c.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>

          {/* Long-term journey */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(20,184,166,0.06)',
            border: '1px solid rgba(20,184,166,0.2)',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
          }}>
            <div className="section-eyebrow" style={{ color: 'var(--teal-400)', marginBottom: '1.25rem' }}>Long-term Ecosystem Journey</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.875rem', flexWrap: 'wrap' }}>
              {['Beneficiary', '→', 'Volunteer', '→', 'Mentor', '→', 'Donor', '→', 'Partner'].map((item, i) => (
                <span key={i} style={{
                  color: item === '→' ? 'rgba(255,255,255,0.2)' : 'var(--teal-300)',
                  fontWeight: item === '→' ? 400 : 800,
                  fontSize: '1.0625rem',
                  fontFamily: 'var(--font-display)',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SUSTAINABILITY
      ══════════════════════════════════ */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Sustainability Model</div>
            <h2 className="section-title">Built for long-term sustainability</h2>
            <p className="section-subtitle">Multiple diversified channels ensure HOPE programmes can grow and sustain impact year over year.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            {SUSTAINABILITY_CHANNELS.map((c, i) => (
              <div key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: 'var(--teal-50)',
                border: '1px solid var(--teal-200)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'var(--teal-700)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal-100)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal-50)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <span>{c.icon}</span> {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ROADMAP
      ══════════════════════════════════ */}
      <section style={{ background: 'var(--slate-50)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Implementation Roadmap</div>
            <h2 className="section-title">From idea to impact</h2>
            <p className="section-subtitle">A phased approach ensures responsible growth and measurable outcomes at every stage.</p>
          </div>
          <div className="grid-3">
            {PHASES.map((p, i) => (
              <div key={i} className="card" style={{ borderTop: `4px solid ${p.color}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  fontFamily: 'var(--font-display)', fontWeight: 900,
                  fontSize: '3rem', color: p.color, opacity: 0.08, lineHeight: 1,
                }}>
                  {p.num}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 800, color: p.color, fontSize: '0.9375rem', marginBottom: '0.2rem' }}>{p.phase} — {p.period}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.label}</div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {p.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.5 }}>
                      <CheckCircle size={15} color={p.color} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FINAL CTA
      ══════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--teal-700) 0%, var(--teal-800) 40%, var(--slate-900) 100%)',
        padding: '5rem 0',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-60px', right: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Every contribution creates impact.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
            Money. Skills. Time. Ideas.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/demo" className="btn btn-white btn-lg">
              Create Impact
              <ArrowRight size={18} />
            </Link>
            <Link to="/impact" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: 'white' }}>
              <BarChart3 size={18} />
              View Impact Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
