import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Users, Clock, Heart, Activity,
  ArrowRight, X, CheckCircle, Briefcase,
  BookOpen, Monitor, Stethoscope, Target
} from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const KPI_STATS = [
  { value: '₹24.8L', label: 'Funds Mobilised',      icon: <TrendingUp size={20} /> },
  { value: '1,842',  label: 'Beneficiaries Reached', icon: <Users size={20} /> },
  { value: '624',    label: 'Active Volunteers',      icon: <Heart size={20} /> },
  { value: '3,280',  label: 'Volunteer Hours',        icon: <Clock size={20} /> },
  { value: '47',     label: 'Active Campaigns',       icon: <Activity size={20} /> },
];

const FUNDS_DATA = [
  { month: 'Apr', funds: 1.8 }, { month: 'May', funds: 2.4 },
  { month: 'Jun', funds: 1.9 }, { month: 'Jul', funds: 3.2 },
  { month: 'Aug', funds: 3.8 }, { month: 'Sep', funds: 4.1 },
  { month: 'Oct', funds: 3.6 }, { month: 'Nov', funds: 4.8 },
  { month: 'Dec', funds: 2.9 }, { month: 'Jan', funds: 5.1 },
  { month: 'Feb', funds: 4.4 }, { month: 'Mar', funds: 6.2 },
];

const BENEFICIARY_DATA = [
  { programme: 'Education',     beneficiaries: 742, volunteers: 186 },
  { programme: 'Livelihood',    beneficiaries: 418, volunteers: 112 },
  { programme: 'Digital Skills', beneficiaries: 382, volunteers: 198 },
  { programme: 'Healthcare',    beneficiaries: 300, volunteers: 128 },
];

const PIE_DATA = [
  { name: 'Donations',           value: 48, color: 'var(--navy-700)' },
  { name: 'Volunteer Hours',     value: 28, color: '#2563eb'         },
  { name: 'Skill Contributions', value: 14, color: '#7c3aed'         },
  { name: 'Corporate CSR',       value: 10, color: 'var(--gold-500)' },
];

const PROGRAMMES = [
  { name: 'Education',     Icon: BookOpen,     accent: 'var(--navy-800)', bg: 'var(--navy-50)',  border: 'var(--navy-200)', beneficiaries: 742,  funds: '₹8.4L',  hours: '1,120' },
  { name: 'Livelihood',    Icon: Briefcase,    accent: '#2563eb',         bg: '#eff6ff',         border: '#bfdbfe',         beneficiaries: 418,  funds: '₹6.2L',  hours: '860'   },
  { name: 'Digital Skills', Icon: Monitor,     accent: '#7c3aed',         bg: '#faf5ff',         border: '#e9d5ff',         beneficiaries: 382,  funds: '₹5.8L',  hours: '920'   },
  { name: 'Healthcare',    Icon: Stethoscope,  accent: 'var(--gold-600)', bg: 'var(--gold-50)',  border: 'var(--gold-400)', beneficiaries: 300,  funds: '₹4.4L',  hours: '380'   },
];

const CSR_CHALLENGES = [
  {
    id: 1,
    title: 'Digital Skills for Youth',
    Icon: Monitor,
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    students: 500,
    duration: '6 months',
    funding: '₹2,00,000',
    problem: 'Young people in underserved communities lack the digital literacy skills needed for modern employment.',
    target: '500 students aged 16–24 across 5 learning centres',
    impact: '500 students gain job-ready digital skills; 200+ employment opportunities unlocked',
    skills: ['Digital Literacy Trainers', 'Corporate Mentors', 'Programme Coordinators'],
  },
  {
    id: 2,
    title: 'Education Support Programme',
    Icon: BookOpen,
    accent: 'var(--navy-800)',
    bg: 'var(--navy-50)',
    border: 'var(--navy-200)',
    students: 300,
    duration: '12 months',
    funding: '₹1,50,000',
    problem: 'First-generation learners struggle without academic support, structured guidance and learning resources.',
    target: '300 children aged 8–16 in government schools',
    impact: '300 children improve academic outcomes; 80% school retention rate targeted',
    skills: ['Subject Mentors', 'Content Designers', 'Assessment Specialists'],
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: 'white', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-md)', padding: '0.625rem 0.875rem', boxShadow: 'var(--shadow-lg)', fontSize: '0.875rem' }}>
        <p style={{ fontWeight: 600, margin: '0 0 0.25rem', color: 'var(--slate-800)' }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color, margin: 0 }}>
            {p.name}: {p.name === 'funds' ? `₹${p.value}L` : p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ImpactPage() {
  const [csrModal, setCsrModal] = useState(null);
  const [adoptDone, setAdoptDone] = useState(false);

  function handleAdopt() {
    setAdoptDone(true);
    setTimeout(() => { setCsrModal(null); setAdoptDone(false); }, 2500);
  }

  return (
    <div className="page-enter">

      {/* ══ HERO KPI ══════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(150deg, var(--navy-900) 0%, var(--navy-800) 60%, var(--navy-950) 100%)', padding: '4.5rem 0 3.5rem' }}>
        <div className="container text-center">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem 1rem', marginBottom: '1.5rem',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--navy-200)', fontSize: '0.8125rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            Impact Dashboard
          </div>
          <h1 style={{ color: 'white', marginBottom: '0.75rem' }}>HOPE Impact</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', maxWidth: 520, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            How contributions translate into measurable outcomes across all programmes.
          </p>

          {/* KPI Cards */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {KPI_STATS.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.25rem 1.75rem',
                textAlign: 'center', minWidth: 140,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
                <div style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'white', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.375rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="demo-label" style={{ marginTop: '1.75rem', display: 'inline-flex' }}>Prototype — Demonstration Data</div>
        </div>
      </section>

      {/* ══ CHARTS ════════════════════════════════════════ */}
      <section className="section-sm" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>

            {/* Funds Line Chart */}
            <div className="card">
              <div className="flex items-center justify-between" style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ margin: 0 }}>Funds Mobilised — Monthly Trend</h4>
                <span className="badge badge-navy">₹ Lakhs</span>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={FUNDS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="funds" stroke="var(--navy-700)" strokeWidth={2.5} dot={{ r: 3, fill: 'var(--navy-700)' }} activeDot={{ r: 5 }} name="funds" />
                </LineChart>
              </ResponsiveContainer>
              <div className="demo-label" style={{ marginTop: '0.75rem', display: 'inline-flex' }}>Demonstration Data</div>
            </div>

            {/* Beneficiaries Bar Chart */}
            <div className="card">
              <div className="flex items-center justify-between" style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ margin: 0 }}>Beneficiaries by Programme</h4>
                <span className="badge badge-blue">Count</span>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={BENEFICIARY_DATA} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                  <XAxis dataKey="programme" tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--slate-400)' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="beneficiaries" fill="var(--navy-700)" radius={[4,4,0,0]} name="Beneficiaries" />
                  <Bar dataKey="volunteers"    fill="var(--navy-300)" radius={[4,4,0,0]} name="Volunteers"    />
                </BarChart>
              </ResponsiveContainer>
              <div className="demo-label" style={{ marginTop: '0.75rem', display: 'inline-flex' }}>Demonstration Data</div>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {/* Contribution Mix Pie */}
            <div className="card">
              <h4 style={{ marginBottom: '1.25rem' }}>Contribution Mix</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <ResponsiveContainer width={180} height={180}>
                  <PieChart>
                    <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={48} outerRadius={80} paddingAngle={3} dataKey="value">
                      {PIE_DATA.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                    </Pie>
                    <Tooltip formatter={(val) => `${val}%`} />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ flex: 1 }}>
                  {PIE_DATA.map((d, i) => (
                    <div key={i} className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
                      <div style={{ width: 10, height: 10, background: d.color, borderRadius: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--slate-600)', flex: 1 }}>{d.name}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--slate-800)' }}>{d.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="demo-label" style={{ marginTop: '0.75rem', display: 'inline-flex' }}>Demonstration Data</div>
            </div>

            {/* Programme summary rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {PROGRAMMES.map((p, i) => {
                const PIcon = p.Icon;
                return (
                  <div key={i} className="card-flat flex items-center gap-4" style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ width: 44, height: 44, background: p.bg, border: `1px solid ${p.border}`, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.accent, flexShrink: 0 }}>
                      <PIcon size={20} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: 'var(--slate-800)' }}>{p.name}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>
                        {p.beneficiaries.toLocaleString()} beneficiaries · {p.funds} mobilised · {p.hours} hrs
                      </div>
                    </div>
                    <span className="badge" style={{ background: p.bg, color: p.accent, border: `1px solid ${p.border}` }}>Active</span>
                  </div>
                );
              })}
              <div className="demo-label" style={{ display: 'inline-flex' }}>Prototype — Demonstration Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROGRAMME DETAIL CARDS ════════════════════════ */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Programme Impact</div>
            <h2 className="section-title">Impact by programme</h2>
          </div>
          <div className="grid-4">
            {PROGRAMMES.map((p, i) => {
              const PIcon = p.Icon;
              return (
                <div key={i} className="card" style={{ borderTop: `4px solid ${p.accent}` }}>
                  <div style={{ width: 48, height: 48, background: p.bg, border: `1px solid ${p.border}`, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.accent, marginBottom: '0.875rem' }}>
                    <PIcon size={22} />
                  </div>
                  <h4 style={{ color: p.accent, marginBottom: '1rem' }}>{p.name}</h4>
                  {[
                    { label: 'Beneficiaries',    value: p.beneficiaries.toLocaleString() },
                    { label: 'Funds Mobilised',  value: p.funds },
                    { label: 'Volunteer Hours',  value: `${p.hours} hrs` },
                  ].map((row, j) => (
                    <div key={j} className="flex items-center justify-between" style={{ padding: '0.5rem 0', borderBottom: j < 2 ? '1px solid var(--slate-100)' : 'none' }}>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>{row.label}</span>
                      <span style={{ fontWeight: 700, color: 'var(--slate-800)' }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="text-center" style={{ marginTop: '1.5rem' }}>
            <div className="demo-label" style={{ display: 'inline-flex' }}>Prototype — Demonstration Data</div>
          </div>
        </div>
      </section>

      {/* ══ CSR CHALLENGE BANK ════════════════════════════ */}
      <section className="section" style={{ background: 'var(--navy-900)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow" style={{ color: 'var(--navy-300)' }}>CSR Challenge Bank</div>
            <h2 className="section-title" style={{ color: 'white' }}>Turn CSR commitments into measurable community outcomes.</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Partner with HOPE to adopt a structured challenge. Each challenge is designed with clear goals,
              timelines and success metrics so your organisation can demonstrate verified social impact.
            </p>
          </div>

          <div className="grid-2">
            {CSR_CHALLENGES.map(c => {
              const CIcon = c.Icon;
              return (
                <div key={c.id} className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
                    <div style={{ width: 52, height: 52, background: c.bg, border: `1px solid ${c.border}`, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.accent, flexShrink: 0 }}>
                      <CIcon size={22} />
                    </div>
                    <div>
                      <h4 style={{ color: 'white', margin: 0 }}>{c.title}</h4>
                      <span className="badge" style={{ background: c.bg, color: c.accent, border: `1px solid ${c.border}`, marginTop: 4 }}>{c.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-4" style={{ marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Participants', value: c.students },
                      { label: 'Funding Required', value: c.funding },
                      { label: 'Duration', value: c.duration },
                    ].map((d, i) => (
                      <div key={i}>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{d.label}</div>
                        <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9375rem' }}>{d.value}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem', marginBottom: '1.25rem', lineHeight: 1.65 }}>{c.problem}</p>
                  <button className="btn btn-outline" style={{ borderColor: c.accent, color: c.accent }}
                    onClick={() => { setCsrModal(c); setAdoptDone(false); }}>
                    Explore This Challenge <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CSR MODAL ════════════════════════════════════ */}
      {csrModal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget && !adoptDone) setCsrModal(null); }}>
          <div className="modal modal-lg">
            {!adoptDone ? (
              <>
                <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ width: 44, height: 44, background: csrModal.bg, border: `1px solid ${csrModal.border}`, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: csrModal.accent }}>
                      {(() => { const CIcon = csrModal.Icon; return <CIcon size={20} />; })()}
                    </div>
                    <h3 style={{ margin: 0 }}>{csrModal.title}</h3>
                  </div>
                  <button onClick={() => setCsrModal(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}>
                    <X size={20} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Problem Statement',    value: csrModal.problem },
                    { label: 'Target Beneficiaries', value: csrModal.target  },
                    { label: 'Funding Required',     value: csrModal.funding },
                    { label: 'Timeline',             value: csrModal.duration },
                    { label: 'Expected Impact',      value: csrModal.impact  },
                  ].map((row, i) => (
                    <div key={i} style={{ padding: '0.875rem 1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--slate-200)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--slate-500)', marginBottom: '0.375rem' }}>{row.label}</div>
                      <div style={{ color: 'var(--slate-700)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{row.value}</div>
                    </div>
                  ))}
                  <div style={{ padding: '0.875rem 1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--slate-200)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--slate-500)', marginBottom: '0.5rem' }}>Skills Required from Your Team</div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {csrModal.skills.map(s => <span key={s} className="chip">{s}</span>)}
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center', padding: '0.875rem' }} onClick={handleAdopt}>
                  Register Interest in This Challenge <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <div className="text-center" style={{ padding: '1.5rem 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle size={28} color="var(--navy-700)" />
                </div>
                <h3 style={{ color: 'var(--navy-800)', marginBottom: '0.75rem' }}>Interest Recorded</h3>
                <p>Thank you for your interest in the <strong>{csrModal.title}</strong>. The HOPE partnerships team will be in touch within 3 business days.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
