import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Users, Clock, Heart, Activity,
  BarChart2, Globe, ArrowRight, CheckCircle, X
} from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const KPI_STATS = [
  { value: '₹24.8L', label: 'Funds Mobilised', icon: <TrendingUp size={20} />, color: 'var(--teal-600)', bg: 'var(--teal-50)' },
  { value: '1,842', label: 'Beneficiaries', icon: <Users size={20} />, color: '#2563eb', bg: '#eff6ff' },
  { value: '624', label: 'Volunteers', icon: <Heart size={20} />, color: '#7c3aed', bg: '#faf5ff' },
  { value: '3,280', label: 'Volunteer Hours', icon: <Clock size={20} />, color: 'var(--amber-500)', bg: '#fffbeb' },
  { value: '47', label: 'Active Campaigns', icon: <Activity size={20} />, color: 'var(--emerald-600)', bg: '#f0fdf4' },
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
  { programme: 'Education', beneficiaries: 742, volunteers: 186 },
  { programme: 'Livelihood', beneficiaries: 418, volunteers: 112 },
  { programme: 'Digital Skills', beneficiaries: 382, volunteers: 198 },
  { programme: 'Healthcare', beneficiaries: 300, volunteers: 128 },
];

const PIE_DATA = [
  { name: 'Donations', value: 48, color: 'var(--teal-500)' },
  { name: 'Volunteer Hours', value: 28, color: '#2563eb' },
  { name: 'Skill Contributions', value: 14, color: '#7c3aed' },
  { name: 'Corporate CSR', value: 10, color: 'var(--amber-500)' },
];

const PROGRAMMES = [
  {
    name: 'Education',
    emoji: '📚',
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
    beneficiaries: 742,
    funds: '₹8.4L',
    hours: '1,120',
  },
  {
    name: 'Livelihood',
    emoji: '💼',
    color: '#2563eb',
    bg: '#eff6ff',
    beneficiaries: 418,
    funds: '₹6.2L',
    hours: '860',
  },
  {
    name: 'Digital Skills',
    emoji: '💻',
    color: '#7c3aed',
    bg: '#faf5ff',
    beneficiaries: 382,
    funds: '₹5.8L',
    hours: '920',
  },
  {
    name: 'Healthcare',
    emoji: '🏥',
    color: 'var(--rose-500)',
    bg: '#fff1f2',
    beneficiaries: 300,
    funds: '₹4.4L',
    hours: '380',
  },
];

const CSR_CHALLENGES = [
  {
    id: 1,
    title: 'Digital Skills for Youth',
    emoji: '💻',
    color: '#2563eb',
    bg: '#eff6ff',
    students: 500,
    duration: '6 months',
    funding: '₹2,00,000',
    problem: 'Youth in underserved communities lack digital literacy skills needed for modern employment.',
    target: '500 students aged 16–24 across 5 centres',
    impact: '500 students gain job-ready digital skills; 200+ employment opportunities unlocked',
    skills: ['Digital Literacy Trainers', 'Corporate Mentors', 'Programme Coordinators'],
  },
  {
    id: 2,
    title: 'Education Support Programme',
    emoji: '📚',
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
    students: 300,
    duration: '12 months',
    funding: '₹1,50,000',
    problem: 'First-generation learners struggle without academic support and learning resources.',
    target: '300 children aged 8–16 in government schools',
    impact: '300 children improve academic outcomes; 80% school retention rate targeted',
    skills: ['Subject Mentors', 'Content Designers', 'Assessment Specialists'],
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: 'white', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-md)', padding: '0.625rem 0.875rem', boxShadow: 'var(--shadow-lg)', fontSize: '0.875rem' }}>
        <p style={{ fontWeight: 600, margin: '0 0 0.25rem' }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color, margin: 0 }}>
            {p.name}: {typeof p.value === 'number' ? (p.name === 'funds' ? `₹${p.value}L` : p.value) : p.value}
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
      {/* Hero */}
      <section style={{ background: 'linear-gradient(150deg, var(--slate-900) 0%, var(--teal-900) 60%, var(--slate-900) 100%)', padding: '4rem 0 3rem' }}>
        <div className="container text-center">
          <div className="demo-label" style={{ marginBottom: '1.25rem', display: 'inline-flex', background: 'rgba(20,184,166,0.15)', border: '1px solid rgba(20,184,166,0.3)', color: 'var(--teal-300)' }}>
            Impact Dashboard
          </div>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>HOPE Impact</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', maxWidth: 560, margin: '0 auto 2rem' }}>
            See how contributions translate into measurable outcomes across all programmes.
          </p>

          {/* KPI Cards */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            {KPI_STATS.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-xl)', padding: '1.25rem 1.75rem', textAlign: 'center', minWidth: 140 }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'white', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.375rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="demo-label" style={{ marginTop: '1.5rem', display: 'inline-flex', background: 'rgba(254,243,199,0.1)', border: '1px solid rgba(253,230,138,0.3)', color: '#fde68a' }}>
            Prototype • Demonstration Data
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="section-sm" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
            {/* Line Chart */}
            <div className="card">
              <div className="flex items-center justify-between" style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ margin: 0 }}>Funds Mobilised Over Time</h4>
                <span className="badge badge-teal">₹ Lakhs</span>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={FUNDS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--slate-500)' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--slate-500)' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="funds"
                    stroke="var(--teal-600)"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: 'var(--teal-600)' }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="demo-label" style={{ marginTop: '0.75rem', display: 'inline-flex' }}>Demonstration Data</div>
            </div>

            {/* Bar Chart */}
            <div className="card">
              <div className="flex items-center justify-between" style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ margin: 0 }}>Beneficiaries by Programme</h4>
                <span className="badge badge-blue">Count</span>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={BENEFICIARY_DATA} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--slate-100)" />
                  <XAxis dataKey="programme" tick={{ fontSize: 11, fill: 'var(--slate-500)' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--slate-500)' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="beneficiaries" fill="var(--teal-500)" radius={[4, 4, 0, 0]} name="Beneficiaries" />
                  <Bar dataKey="volunteers" fill="#93c5fd" radius={[4, 4, 0, 0]} name="Volunteers" />
                </BarChart>
              </ResponsiveContainer>
              <div className="demo-label" style={{ marginTop: '0.75rem', display: 'inline-flex' }}>Demonstration Data</div>
            </div>
          </div>

          {/* Pie chart + Programme cards */}
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {/* Pie */}
            <div className="card">
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ margin: 0 }}>Contribution Mix</h4>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <ResponsiveContainer width={180} height={180}>
                  <PieChart>
                    <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={48} outerRadius={80} paddingAngle={3} dataKey="value">
                      {PIE_DATA.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
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

            {/* Programme cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {PROGRAMMES.map((p, i) => (
                <div key={i} className="card-flat flex items-center gap-4" style={{ padding: '1rem 1.25rem' }}>
                  <div style={{ width: 44, height: 44, background: p.bg, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.375rem', flexShrink: 0 }}>
                    {p.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: 'var(--slate-800)' }}>{p.name}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>
                      {p.beneficiaries.toLocaleString()} beneficiaries · {p.funds} mobilised · {p.hours} hrs
                    </div>
                  </div>
                  <span className="badge" style={{ background: p.bg, color: p.color }}>Active</span>
                </div>
              ))}
              <div className="demo-label" style={{ display: 'inline-flex' }}>Prototype • Demonstration Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Impact Details */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Programme Impact</div>
            <h2 className="section-title">Impact by programme</h2>
          </div>
          <div className="grid-4">
            {PROGRAMMES.map((p, i) => (
              <div key={i} className="card" style={{ borderTop: `4px solid ${p.color}` }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{p.emoji}</div>
                <h4 style={{ color: p.color, marginBottom: '1rem' }}>{p.name}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    { label: 'Beneficiaries', value: `${p.beneficiaries.toLocaleString()}` },
                    { label: 'Funds Mobilised', value: p.funds },
                    { label: 'Volunteer Hours', value: `${p.hours} hrs` },
                  ].map((row, j) => (
                    <div key={j} className="flex items-center justify-between" style={{ padding: '0.5rem 0', borderBottom: j < 2 ? '1px solid var(--slate-100)' : 'none' }}>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>{row.label}</span>
                      <span style={{ fontWeight: 700, color: 'var(--slate-800)' }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '1.5rem' }}>
            <div className="demo-label" style={{ display: 'inline-flex' }}>Prototype • Demonstration Data</div>
          </div>
        </div>
      </section>

      {/* CSR Challenge Bank */}
      <section className="section" style={{ background: 'var(--slate-900)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow" style={{ color: 'var(--teal-400)' }}>CSR Challenge Bank</div>
            <h2 className="section-title" style={{ color: 'white' }}>Turn CSR commitments into measurable outcomes.</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Partner with HOPE to adopt a structured challenge and deliver verified community impact.
            </p>
          </div>

          <div className="grid-2">
            {CSR_CHALLENGES.map(c => (
              <div key={c.id} className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
                  <div style={{ width: 52, height: 52, background: c.bg, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    {c.emoji}
                  </div>
                  <div>
                    <h4 style={{ color: 'white', margin: 0 }}>{c.title}</h4>
                    <span className="badge" style={{ background: c.bg, color: c.color, marginTop: 4 }}>{c.duration}</span>
                  </div>
                </div>
                <div className="flex gap-4" style={{ marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  {[
                    { label: 'Students', value: c.students },
                    { label: 'Funding', value: c.funding },
                    { label: 'Duration', value: c.duration },
                  ].map((d, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{d.label}</div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9375rem' }}>{d.value}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>{c.problem}</p>
                <button className="btn btn-outline" style={{ borderColor: c.color, color: c.color }} onClick={() => { setCsrModal(c); setAdoptDone(false); }}>
                  Explore Challenge <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Modal */}
      {csrModal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget && !adoptDone) setCsrModal(null); }}>
          <div className="modal modal-lg">
            {!adoptDone ? (
              <>
                <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: '2rem' }}>{csrModal.emoji}</span>
                    <h3 style={{ margin: 0 }}>{csrModal.title}</h3>
                  </div>
                  <button onClick={() => setCsrModal(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}>
                    <X size={20} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: '⚠️ Problem', value: csrModal.problem },
                    { label: '🎯 Target Beneficiaries', value: csrModal.target },
                    { label: '💰 Funding Required', value: csrModal.funding },
                    { label: '📅 Timeline', value: csrModal.duration },
                    { label: '✅ Expected Impact', value: csrModal.impact },
                  ].map((row, i) => (
                    <div key={i} style={{ padding: '0.875rem 1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--slate-500)', marginBottom: '0.375rem' }}>{row.label}</div>
                      <div style={{ color: 'var(--slate-700)', fontSize: '0.9375rem' }}>{row.value}</div>
                    </div>
                  ))}
                  <div style={{ padding: '0.875rem 1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--slate-500)', marginBottom: '0.375rem' }}>🛠️ Skills Required</div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {csrModal.skills.map(s => <span key={s} className="chip">{s}</span>)}
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center', padding: '0.875rem' }} onClick={handleAdopt}>
                  Adopt This Challenge <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <div className="text-center" style={{ padding: '1.5rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
                <h3 style={{ color: 'var(--teal-700)', marginBottom: '0.75rem' }}>Challenge Interest Recorded!</h3>
                <p>Thank you for your interest in adopting the <strong>{csrModal.title}</strong>. The HOPE partnerships team will contact you within 3 business days.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
