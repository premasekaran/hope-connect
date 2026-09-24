import { useState } from 'react';
import {
  Code, FileText, Megaphone, MessageSquare,
  CheckCircle, Clock, Users, Star, MapPin,
  ChevronRight, X, Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const OPPORTUNITIES = [
  {
    id: 1,
    title: 'Python Mentor',
    icon: '🐍',
    color: '#2563eb',
    bg: '#eff6ff',
    category: 'Youth Education',
    commitment: '2 hrs/week',
    students: 10,
    sessions: '4 sessions',
    description: 'Guide students in Python programming fundamentals, helping them build projects and develop technical thinking skills.',
    skills: ['Python', 'Programming', 'Teaching'],
    level: 'Intermediate',
  },
  {
    id: 2,
    title: 'Resume Mentor',
    icon: '📄',
    color: '#7c3aed',
    bg: '#faf5ff',
    category: 'Employability',
    commitment: '1 hr/week',
    students: 10,
    sessions: null,
    description: 'Help youth craft compelling resumes and prepare for job interviews, opening doors to employment opportunities.',
    skills: ['HR', 'Career Coaching', 'Communication'],
    level: 'Any',
  },
  {
    id: 3,
    title: 'Digital Marketing Support',
    icon: '📣',
    color: 'var(--amber-500)',
    bg: '#fffbeb',
    category: 'Fundraising',
    commitment: '3 hrs/month',
    students: null,
    sessions: null,
    description: "Support HOPE's fundraising efforts through social media strategy, content creation and campaign management.",
    skills: ['Digital Marketing', 'Social Media', 'Content'],
    level: 'Any',
  },
  {
    id: 4,
    title: 'Spoken English Mentor',
    icon: '🗣️',
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
    category: 'Education',
    commitment: '2 sessions/month',
    students: 15,
    sessions: '2 sessions/month',
    description: 'Build communication confidence in youth through structured spoken English sessions and practice conversations.',
    skills: ['Communication', 'English', 'Teaching'],
    level: 'Any',
  },
];

const DEMO_PROFILE = {
  name: 'Ananya Sharma',
  role: 'Software Engineer',
  skills: ['Python', 'AI/ML', 'Mentoring'],
  availability: '4 hours/month',
  stats: [
    { value: '12', label: 'Hours Contributed' },
    { value: '3', label: 'Sessions Completed' },
    { value: '18', label: 'Beneficiaries Reached' },
    { value: '2', label: 'Programmes Supported' },
  ],
};

export default function SkillsPage() {
  const { addToast } = useApp();
  const [formData, setFormData] = useState({
    name: '', profession: '', skills: '', experience: '',
    hours: '', cause: '', location: '', mode: 'Both',
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [applyModal, setApplyModal] = useState(null);
  const [applyDone, setApplyDone] = useState(false);

  function handleApply(opp) {
    setApplyModal(opp);
    setApplyDone(false);
  }

  function confirmApply() {
    setApplyDone(true);
    setTimeout(() => {
      setApplyModal(null);
      setApplyDone(false);
      addToast({ type: 'success', title: 'Application Submitted!', message: `You've applied to be a ${applyModal?.title}. HOPE team will reach out soon.` });
    }, 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
      addToast({ type: 'success', title: 'Welcome to Skill Bank!', message: 'Your profile is live. Matching opportunities are shown below.' });
    }, 1600);
  }

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero hero-gradient" style={{ paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container text-center">
          <div className="demo-label" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Skill Bank</div>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Don't just donate money.<br />
            <span className="hero-title-highlight">Donate what you know.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', maxWidth: 560, margin: '0 auto 2rem' }}>
            Your expertise can transform lives. Share your professional knowledge and skills with communities that need it most.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Open Opportunities</div>
            <h2 className="section-title">Skills needed right now</h2>
          </div>
          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {OPPORTUNITIES.map(opp => (
              <div key={opp.id} className="card" style={{ position: 'relative' }}>
                <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
                  <div style={{ width: 52, height: 52, background: opp.bg, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    {opp.icon}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.2rem' }}>{opp.title}</h4>
                    <span className="badge" style={{ background: opp.bg, color: opp.color }}>{opp.category}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>{opp.description}</p>

                <div className="flex gap-3" style={{ flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {opp.students && (
                    <div className="flex items-center gap-1" style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>
                      <Users size={13} /> {opp.students} students
                    </div>
                  )}
                  <div className="flex items-center gap-1" style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>
                    <Clock size={13} /> {opp.commitment}
                  </div>
                  {opp.sessions && (
                    <div className="flex items-center gap-1" style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>
                      <Star size={13} /> {opp.sessions}
                    </div>
                  )}
                </div>

                <div className="flex gap-2" style={{ flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {opp.skills.map(s => (
                    <span key={s} className="chip" style={{ fontSize: '0.75rem' }}>{s}</span>
                  ))}
                </div>

                <button className="btn btn-primary btn-sm" onClick={() => handleApply(opp)}>
                  I Can Help <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Profile Demo */}
      <section className="section-sm" style={{ background: 'var(--slate-50)' }}>
        <div className="container-sm">
          <div className="section-header">
            <div className="section-eyebrow">Volunteer Profile</div>
            <h2 className="section-title">Demo Volunteer</h2>
          </div>
          <div className="card">
            <div className="demo-label" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Prototype • Demo Profile</div>
            <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div className="avatar avatar-xl">
                {DEMO_PROFILE.name.split(' ').map(w => w[0]).join('')}
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.25rem' }}>{DEMO_PROFILE.name}</h3>
                <p style={{ margin: 0, fontWeight: 500, color: 'var(--teal-600)' }}>{DEMO_PROFILE.role}</p>
                <div className="flex gap-2" style={{ marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  {DEMO_PROFILE.skills.map(s => (
                    <span key={s} className="chip" style={{ fontSize: '0.75rem' }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--slate-500)' }}>
                  <Clock size={13} style={{ display: 'inline', marginRight: 4 }} />
                  {DEMO_PROFILE.availability}
                </span>
              </div>
            </div>
            <div className="grid-4" style={{ gap: '1rem' }}>
              {DEMO_PROFILE.stats.map((s, i) => (
                <div key={i} className="stat-card" style={{ padding: '1rem' }}>
                  <div className="stat-value" style={{ fontSize: '1.75rem' }}>{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offer Skill Form */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container-sm">
          <div className="section-header">
            <div className="section-eyebrow">Join the Skill Bank</div>
            <h2 className="section-title">Offer Your Skill</h2>
            <p className="section-subtitle">Share what you know and get matched with programmes that need your expertise.</p>
          </div>

          {formSuccess ? (
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={{ color: 'var(--teal-700)', marginBottom: '0.75rem' }}>You're now part of the HOPE Skill Bank.</h3>
              <p style={{ marginBottom: '2rem' }}>Your profile is live. Here are matching opportunities based on your skills:</p>
              <div className="grid-2" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                {OPPORTUNITIES.slice(0, 2).map(opp => (
                  <div key={opp.id} className="card-flat flex gap-3 items-center" style={{ padding: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{opp.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>{opp.title}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>{opp.commitment}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-outline" onClick={() => setFormSuccess(false)}>
                Update Profile
              </button>
            </div>
          ) : (
            <div className="card" style={{ padding: '2.5rem' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input className="form-input" required placeholder="Your full name" value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Profession *</label>
                    <input className="form-input" required placeholder="e.g. Software Engineer" value={formData.profession} onChange={e => setFormData(f => ({ ...f, profession: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Skills *</label>
                    <input className="form-input" required placeholder="e.g. Python, Teaching, Design" value={formData.skills} onChange={e => setFormData(f => ({ ...f, skills: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Experience (years)</label>
                    <input className="form-input" type="number" placeholder="5" value={formData.experience} onChange={e => setFormData(f => ({ ...f, experience: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Hours Available / Month</label>
                    <input className="form-input" type="number" placeholder="4" value={formData.hours} onChange={e => setFormData(f => ({ ...f, hours: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Cause</label>
                    <select className="form-select" value={formData.cause} onChange={e => setFormData(f => ({ ...f, cause: e.target.value }))}>
                      <option value="">Any cause</option>
                      {['Education', 'Livelihood', 'Healthcare', 'Digital Skills'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input className="form-input" placeholder="City" value={formData.location} onChange={e => setFormData(f => ({ ...f, location: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mode</label>
                    <select className="form-select" value={formData.mode} onChange={e => setFormData(f => ({ ...f, mode: e.target.value }))}>
                      <option>Online</option>
                      <option>In-person</option>
                      <option>Both</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center', padding: '0.875rem' }} disabled={submitting}>
                  {submitting ? <><div className="spinner" /> Submitting...</> : <><Sparkles size={16} /> Join Skill Bank</>}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Apply Modal */}
      {applyModal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget && !applyDone) setApplyModal(null); }}>
          <div className="modal">
            {!applyDone ? (
              <>
                <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: '1.75rem' }}>{applyModal.icon}</span>
                    <div>
                      <h3 style={{ margin: 0 }}>{applyModal.title}</h3>
                      <span className="badge" style={{ background: applyModal.bg, color: applyModal.color }}>{applyModal.category}</span>
                    </div>
                  </div>
                  <button onClick={() => setApplyModal(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}>
                    <X size={20} />
                  </button>
                </div>
                <p style={{ marginBottom: '1.25rem' }}>{applyModal.description}</p>
                <div className="flex gap-4" style={{ marginBottom: '1.5rem' }}>
                  {applyModal.students && (
                    <div className="flex items-center gap-1 text-sm text-muted"><Users size={14} />{applyModal.students} students</div>
                  )}
                  <div className="flex items-center gap-1 text-sm text-muted"><Clock size={14} />{applyModal.commitment}</div>
                </div>
                <button className="btn btn-primary w-full" style={{ justifyContent: 'center', width: '100%' }} onClick={confirmApply}>
                  Confirm Application
                </button>
              </>
            ) : (
              <div className="text-center" style={{ padding: '1rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                <h3 style={{ color: 'var(--teal-700)' }}>Application Submitted!</h3>
                <p>The HOPE team will reach out to you within 2 business days.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
