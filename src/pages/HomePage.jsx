import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, Heart, Lightbulb, Clock, DollarSign,
  TrendingUp, Users, Activity, Globe, CheckCircle,
  BarChart3, Zap, Star, ChevronRight, Shield
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const STATS = [
  { value: '₹24.8L', label: 'Funds Mobilised', icon: <TrendingUp size={20} /> },
  { value: '1,842', label: 'Beneficiaries Reached', icon: <Users size={20} /> },
  { value: '624', label: 'Volunteers', icon: <Heart size={20} /> },
  { value: '3,280', label: 'Volunteer Hours', icon: <Clock size={20} /> },
  { value: '47', label: 'Active Campaigns', icon: <Activity size={20} /> },
];

const CONTRIBUTION_TYPES = [
  {
    icon: <DollarSign size={28} />,
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
    badge: 'MONEY',
    title: 'Give & Celebrate',
    desc: 'Turn birthdays and special occasions into fundraising campaigns that create lasting change.',
    path: '/give',
    cta: 'Start a Campaign',
  },
  {
    icon: <Lightbulb size={28} />,
    color: '#7c3aed',
    bg: '#faf5ff',
    badge: 'SKILLS',
    title: 'Skill Bank',
    desc: 'Share professional knowledge and expertise directly with students and communities.',
    path: '/skills',
    cta: 'Offer Your Skills',
  },
  {
    icon: <Clock size={28} />,
    color: '#2563eb',
    bg: '#eff6ff',
    badge: 'TIME',
    title: 'Volunteer',
    desc: 'Find meaningful opportunities that match your schedule and availability.',
    path: '/skills',
    cta: 'Find Opportunities',
  },
  {
    icon: <Star size={28} />,
    color: '#d97706',
    bg: '#fffbeb',
    badge: 'IDEAS',
    title: 'Impact Lab',
    desc: 'Help HOPE discover better ways to create impact through innovation and design.',
    path: '/demo',
    cta: 'Share Your Idea',
  },
];

const SUSTAINABILITY_CHANNELS = [
  'Individual Donations', 'Recurring Donations', 'Celebration Fundraising',
  'Corporate CSR', 'Employee Volunteering', 'Skill Contributions', 'Strategic Partnerships',
];

const PHASES = [
  {
    phase: 'Phase 1', period: '0–3 Months', label: 'MVP',
    items: ['Celebration fundraising', 'Skill Bank', 'Employee AI', 'Impact dashboard'],
    color: 'var(--teal-600)', bg: 'var(--teal-50)',
  },
  {
    phase: 'Phase 2', period: '3–6 Months', label: 'Pilot',
    items: ['Test with 1–2 programmes', 'Measure fundraising', 'Measure volunteer engagement', 'Measure employee time saved'],
    color: '#2563eb', bg: '#eff6ff',
  },
  {
    phase: 'Phase 3', period: '6–12 Months', label: 'Scale',
    items: ['More programmes', 'Corporate partners', 'Payment integration', 'Multilingual AI', 'Advanced analytics'],
    color: '#7c3aed', bg: '#faf5ff',
  },
];

const ECOSYSTEM_NODES = [
  { label: 'Donors', icon: '💚', color: 'var(--teal-600)', bg: 'var(--teal-50)' },
  { label: 'Volunteers', icon: '🤝', color: '#2563eb', bg: '#eff6ff' },
  { label: 'Employees', icon: '👩‍💼', color: '#7c3aed', bg: '#faf5ff' },
  { label: 'Corporates', icon: '🏢', color: '#d97706', bg: '#fffbeb' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { addToast } = useApp();

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section className="hero hero-gradient" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
            <div className="demo-label" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <span>🏆</span>
              HOPE Impact Ideathon 2026 — Ideas into Action
            </div>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Every contribution<br />
              <span className="hero-title-highlight">creates impact.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--slate-600)', maxWidth: 640, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              HOPE CONNECT brings donors, volunteers, employees and partners together in one digital ecosystem —
              turning <strong>money, skills and time</strong> into measurable social impact.
            </p>
            <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
              <Link to="/give" className="btn btn-primary btn-lg">
                Create an Impact Campaign
                <ArrowRight size={18} />
              </Link>
              <Link to="/impact" className="btn btn-outline btn-lg">
                Explore Impact
                <BarChart3 size={18} />
              </Link>
            </div>

            {/* Flow Ribbon */}
            <div className="flex items-center justify-center gap-2" style={{ marginTop: '3rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Give', '→', 'Contribute', '→', 'Deliver', '→', 'Measure', '→', 'Show Impact', '→', 'Give Again'].map((item, i) => (
                <span key={i} style={{
                  color: item === '→' ? 'var(--slate-300)' : 'var(--teal-700)',
                  fontWeight: item === '→' ? 400 : 600,
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-display)',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ecosystem Visual ── */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">The Ecosystem</div>
            <h2 className="section-title">One platform. Every stakeholder.</h2>
            <p className="section-subtitle">Connecting every contributor to every beneficiary through a unified digital experience.</p>
          </div>

          {/* Visual */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', padding: '1rem 0' }}>
            {/* Top nodes */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div className="grid-4" style={{ gap: '1rem' }}>
                {ECOSYSTEM_NODES.map((node, i) => (
                  <div key={i} className="ecosystem-node" style={{ animation: `floatDot ${6 + i}s ease-in-out infinite alternate` }}>
                    <div className="ecosystem-icon-wrapper" style={{ background: node.bg, border: `2px solid ${node.color}20` }}>
                      <span style={{ fontSize: '1.75rem' }}>{node.icon}</span>
                    </div>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slate-600)' }}>{node.label}</span>
                  </div>
                ))}
              </div>

              {/* Arrow down */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.5rem 0' }}>
                <div style={{ width: 2, height: 24, background: 'linear-gradient(var(--teal-300), var(--teal-500))' }} />
                <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid var(--teal-500)' }} />
              </div>

              {/* HOPE CONNECT Hub */}
              <div style={{ background: 'linear-gradient(135deg, var(--teal-600), var(--teal-800))', borderRadius: 'var(--radius-2xl)', padding: '1.5rem 3rem', textAlign: 'center', boxShadow: 'var(--shadow-glow)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                  <Heart size={24} color="white" fill="white" />
                  <span style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem' }}>HOPE CONNECT</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: '0.5rem 0 0', letterSpacing: '0.05em' }}>
                  MONEY · SKILLS · TIME · AI
                </p>
              </div>

              {/* Arrow down */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.5rem 0' }}>
                <div style={{ width: 2, height: 24, background: 'linear-gradient(var(--teal-500), var(--emerald-500))' }} />
                <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid var(--emerald-500)' }} />
              </div>

              {/* Bottom nodes */}
              <div style={{ display: 'flex', gap: '2rem' }}>
                {[
                  { label: 'Programmes', icon: '📋', bg: 'var(--teal-50)', border: 'var(--teal-200)' },
                  { label: 'Beneficiaries', icon: '🌱', bg: '#f0fdf4', border: '#86efac' },
                ].map((node, i) => (
                  <div key={i} className="ecosystem-node">
                    <div className="ecosystem-icon-wrapper" style={{ background: node.bg, border: `2px solid ${node.border}` }}>
                      <span style={{ fontSize: '1.75rem' }}>{node.icon}</span>
                    </div>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--slate-600)' }}>{node.label}</span>
                  </div>
                ))}
              </div>

              {/* Impact return arrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', padding: '0.5rem 1rem', background: 'var(--teal-50)', borderRadius: 'var(--radius-full)', border: '1px solid var(--teal-200)' }}>
                <TrendingUp size={14} color="var(--teal-600)" />
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--teal-700)' }}>Measured Impact → Impact Report → Donor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Numbers ── */}
      <section className="section-sm" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Impact to Date</div>
            <h2 className="section-title">Numbers that matter</h2>
          </div>
          <div className="grid-4" style={{ marginBottom: '1.5rem' }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--teal-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal-600)', margin: '0 auto 1rem' }}>
                  {s.icon}
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="demo-label" style={{ display: 'inline-flex' }}>
              Prototype • Demonstration Data
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Contribution Types ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Ways to Contribute</div>
            <h2 className="section-title">Contribute what you have</h2>
            <p className="section-subtitle">Whether you have money, skills, time or ideas — HOPE CONNECT has a way for you to create impact.</p>
          </div>
          <div className="grid-4">
            {CONTRIBUTION_TYPES.map((c, i) => (
              <div key={i} className="card" style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => navigate(c.path)}>
                <div style={{ width: 64, height: 64, background: c.bg, borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: c.color }}>
                  {c.icon}
                </div>
                <span className="badge" style={{ background: c.bg, color: c.color, marginBottom: '0.75rem' }}>{c.badge}</span>
                <h4 style={{ marginBottom: '0.75rem' }}>{c.title}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>{c.desc}</p>
                <Link to={c.path} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  {c.cta} <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem / Solution / Diff ── */}
      <section className="section" style={{ background: 'var(--slate-900)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow" style={{ color: 'var(--teal-400)' }}>The Opportunity</div>
            <h2 className="section-title" style={{ color: 'white' }}>Why HOPE CONNECT?</h2>
          </div>
          <div className="grid-3" style={{ gap: '2rem' }}>
            {[
              {
                emoji: '🔧', label: 'The Problem',
                title: 'Fragmented contributions',
                text: 'Donations, volunteering, skills and organisational effort operate in silos — making it hard to measure, manage and scale impact.',
                color: 'var(--rose-400)',
              },
              {
                emoji: '💡', label: 'The Solution',
                title: 'One digital ecosystem',
                text: 'HOPE CONNECT unifies every type of contribution into a single platform, connecting every contributor to measurable outcomes.',
                color: 'var(--teal-400)',
              },
              {
                emoji: '🚀', label: 'The Difference',
                title: 'Money + Skills + Time + AI + Impact',
                text: 'No other platform combines fundraising, skill volunteering, employee operations and AI-powered reporting in one unified experience.',
                color: 'var(--amber-400)',
              },
            ].map((c, i) => (
              <div key={i} className="card" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{c.emoji}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.color }}>{c.label}</span>
                </div>
                <h4 style={{ color: 'white', marginBottom: '0.75rem' }}>{c.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.925rem', lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>

          {/* Long-term journey */}
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-xl)' }}>
            <div className="section-eyebrow" style={{ color: 'var(--teal-400)', textAlign: 'center', marginBottom: '1.25rem' }}>Long-term Ecosystem Journey</div>
            <div className="flex items-center justify-center gap-2" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
              {['Beneficiary', '→', 'Volunteer', '→', 'Mentor', '→', 'Donor', '→', 'Partner'].map((item, i) => (
                <span key={i} style={{
                  color: item === '→' ? 'rgba(255,255,255,0.25)' : 'var(--teal-300)',
                  fontWeight: item === '→' ? 400 : 700,
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

      {/* ── Sustainability ── */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Sustainability Model</div>
            <h2 className="section-title">Built for long-term sustainability</h2>
            <p className="section-subtitle">Multiple channels ensure HOPE programmes can grow and sustain impact year over year.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {SUSTAINABILITY_CHANNELS.map((c, i) => (
              <div key={i} className="chip" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9375rem' }}>
                <CheckCircle size={14} /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Implementation Roadmap</div>
            <h2 className="section-title">From idea to impact</h2>
          </div>
          <div className="grid-3">
            {PHASES.map((p, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 44, height: 44, background: p.bg, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${p.color}20` }}>
                    <span style={{ fontWeight: 800, fontSize: '0.875rem', color: p.color }}>{i + 1}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: p.color, fontSize: '0.9375rem' }}>{p.phase} — {p.period}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>{p.label}</div>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2" style={{ fontSize: '0.9rem', color: 'var(--slate-600)' }}>
                      <CheckCircle size={14} color={p.color} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--teal-600), var(--teal-800), var(--slate-900))', padding: '5rem 0' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Every contribution creates impact.</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Money. Skills. Time. Ideas.</p>
          <Link to="/demo" className="btn btn-white btn-lg">
            Create Impact
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
