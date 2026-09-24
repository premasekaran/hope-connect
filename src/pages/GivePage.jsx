import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Share2, Copy, ArrowRight, CheckCircle,
  Users, Target, Gift, Cake, GraduationCap,
  Briefcase, Star, Sparkles, X, ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const OCCASIONS = [
  { id: 'birthday', label: 'Birthday', icon: '🎂', color: 'var(--rose-500)' },
  { id: 'anniversary', label: 'Anniversary', icon: '💍', color: '#7c3aed' },
  { id: 'wedding', label: 'Wedding', icon: '💒', color: 'var(--amber-500)' },
  { id: 'graduation', label: 'Graduation', icon: '🎓', color: '#2563eb' },
  { id: 'work-anniversary', label: 'Work Anniversary', icon: '💼', color: 'var(--teal-600)' },
  { id: 'festival', label: 'Festival', icon: '🎉', color: 'var(--emerald-600)' },
];

const CAUSES = [
  'Education', 'Livelihood', 'Healthcare', 'Digital Skills', 'Women Empowerment', 'Child Welfare',
];

const DONATION_AMOUNTS = [100, 250, 500, 1000];

const ALLOCATION = [
  { label: 'Education Resources', pct: 40, color: 'var(--teal-500)' },
  { label: 'Learning Support', pct: 30, color: '#2563eb' },
  { label: 'Digital Access', pct: 20, color: '#7c3aed' },
  { label: 'Programme Support', pct: 10, color: 'var(--amber-500)' },
];

export default function GivePage() {
  const { campaignData, donate, addToast } = useApp();
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showCampaign, setShowCampaign] = useState(true);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donateAmount, setDonateAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [donationDone, setDonationDone] = useState(false);
  const [donating, setDonating] = useState(false);
  const [createForm, setCreateForm] = useState({ name: '', occasion: '', goal: '', cause: '', message: '' });
  const [formSuccess, setFormSuccess] = useState(false);
  const [creating, setCreating] = useState(false);

  const progress = Math.min(100, Math.round((campaignData.raised / campaignData.goal) * 100));
  const finalAmount = customAmount ? parseInt(customAmount) || 0 : donateAmount;

  function handleDonate() {
    if (!finalAmount || finalAmount < 1) return;
    setDonating(true);
    setTimeout(() => {
      donate(finalAmount);
      setDonating(false);
      setDonationDone(true);
      setTimeout(() => {
        setShowDonateModal(false);
        setDonationDone(false);
        setDonateAmount(500);
        setCustomAmount('');
      }, 3000);
      addToast({ type: 'success', title: '🎉 Thank you!', message: `₹${finalAmount.toLocaleString('en-IN')} donated to ${campaignData.name}` });
    }, 1500);
  }

  function handleCreate(e) {
    e.preventDefault();
    setCreating(true);
    setTimeout(() => {
      setCreating(false);
      setFormSuccess(true);
      setShowCreateForm(false);
      setShowCampaign(true);
      addToast({ type: 'success', title: 'Campaign Created!', message: 'Your campaign is live and ready to share.' });
    }, 1600);
  }

  function handleShare() {
    navigator.clipboard?.writeText(window.location.href);
    addToast({ type: 'success', title: 'Link Copied!', message: 'Campaign link copied to clipboard.' });
  }

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero hero-gradient" style={{ paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="demo-label" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            Give &amp; Celebrate
          </div>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Celebrate by <span className="hero-title-highlight">giving hope.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', maxWidth: 580, margin: '0 auto 2.5rem' }}>
            Turn your special moments into opportunities to create meaningful change.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => setShowCreateForm(true)}>
            <Gift size={18} />
            Start My Campaign
          </button>
        </div>
      </section>

      {/* Occasion Cards */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Choose Your Occasion</div>
            <h2 className="section-title">What are you celebrating?</h2>
          </div>
          <div className="grid-3" style={{ gap: '1rem' }}>
            {OCCASIONS.map(occ => (
              <div
                key={occ.id}
                className={`occasion-card ${selectedOccasion === occ.id ? 'selected' : ''}`}
                onClick={() => { setSelectedOccasion(occ.id); setShowCreateForm(true); setCreateForm(f => ({ ...f, occasion: occ.label })); }}
              >
                <span style={{ fontSize: '2rem' }}>{occ.icon}</span>
                <span style={{ fontWeight: 600, color: 'var(--slate-700)', fontSize: '0.9375rem' }}>{occ.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Form Modal */}
      {showCreateForm && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setShowCreateForm(false); }}>
          <div className="modal modal-lg">
            <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0 }}>Create Your Campaign</h3>
              <button onClick={() => setShowCreateForm(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleCreate}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Campaign Name *</label>
                  <input className="form-input" required placeholder="e.g. Ananya's Birthday for Education"
                    value={createForm.name} onChange={e => setCreateForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Occasion</label>
                  <select className="form-select" value={createForm.occasion} onChange={e => setCreateForm(f => ({ ...f, occasion: e.target.value }))}>
                    <option value="">Select occasion</option>
                    {OCCASIONS.map(o => <option key={o.id} value={o.label}>{o.label}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Fundraising Goal (₹) *</label>
                  <input className="form-input" type="number" required placeholder="25000"
                    value={createForm.goal} onChange={e => setCreateForm(f => ({ ...f, goal: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Beneficiary Cause *</label>
                  <select className="form-select" required value={createForm.cause} onChange={e => setCreateForm(f => ({ ...f, cause: e.target.value }))}>
                    <option value="">Select cause</option>
                    {CAUSES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Short Message</label>
                  <textarea className="form-textarea" rows={3} placeholder="Tell supporters why this cause matters to you..."
                    value={createForm.message} onChange={e => setCreateForm(f => ({ ...f, message: e.target.value }))} />
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setShowCreateForm(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={creating}>
                  {creating ? <><div className="spinner" /> Creating...</> : <><Sparkles size={16} /> Create My Campaign</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Demo Campaign */}
      {showCampaign && (
        <section className="section-sm" style={{ background: 'var(--slate-50)' }}>
          <div className="container-sm">
            {formSuccess && (
              <div className="flex items-center gap-2" style={{ marginBottom: '1rem', padding: '0.875rem 1.25rem', background: '#d1fae5', border: '1px solid #6ee7b7', borderRadius: 'var(--radius-lg)', color: '#065f46' }}>
                <CheckCircle size={18} /> Campaign created successfully! Here's a demo of what your campaign looks like:
              </div>
            )}
            <div className="card" style={{ padding: '2rem' }}>
              <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>🎂 Birthday Campaign</span>
                  <h2 style={{ margin: 0 }}>{campaignData.name}</h2>
                </div>
                <div className="demo-label">Prototype • Demonstration Data</div>
              </div>

              <p style={{ marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.7 }}>{campaignData.message}</p>

              {/* Progress */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="flex items-center justify-between" style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--teal-700)' }}>
                    ₹{campaignData.raised.toLocaleString('en-IN')}
                  </span>
                  <span style={{ color: 'var(--slate-500)', fontSize: '0.9375rem' }}>
                    of ₹{campaignData.goal.toLocaleString('en-IN')} goal
                  </span>
                </div>
                <div className="progress-bar" style={{ height: 12, marginBottom: '0.75rem' }}>
                  <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex gap-6">
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--slate-800)' }}>{progress}%</span>
                    <span style={{ color: 'var(--slate-500)', fontSize: '0.875rem', marginLeft: '0.375rem' }}>funded</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--slate-800)' }}>{campaignData.supporters}</span>
                    <span style={{ color: 'var(--slate-500)', fontSize: '0.875rem', marginLeft: '0.375rem' }}>supporters</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3" style={{ flexWrap: 'wrap', marginBottom: '2rem' }}>
                <button className="btn btn-primary" onClick={() => setShowDonateModal(true)}>
                  <Heart size={16} /> Donate Now
                </button>
                <button className="btn btn-outline" onClick={handleShare}>
                  <Share2 size={16} /> Share Campaign
                </button>
                <button className="btn btn-ghost" onClick={handleShare}>
                  <Copy size={15} /> Copy Link
                </button>
              </div>

              {/* Allocation */}
              <div style={{ background: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
                <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
                  <h5 style={{ margin: 0 }}>Where your contribution goes</h5>
                  <span style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>Illustrative allocation — Demo only</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {ALLOCATION.map((a, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between" style={{ marginBottom: '0.3rem' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--slate-700)' }}>{a.label}</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: a.color }}>{a.pct}%</span>
                      </div>
                      <div className="progress-bar" style={{ height: 6 }}>
                        <div style={{ height: '100%', width: `${a.pct}%`, background: a.color, borderRadius: 'var(--radius-full)', transition: 'width 0.8s ease' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Donate Modal */}
      {showDonateModal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget && !donating) setShowDonateModal(false); }}>
          <div className="modal">
            {!donationDone ? (
              <>
                <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: 0 }}>Donate to Campaign</h3>
                  {!donating && (
                    <button onClick={() => setShowDonateModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}>
                      <X size={20} />
                    </button>
                  )}
                </div>
                <p style={{ marginBottom: '1.25rem', color: 'var(--slate-600)' }}>Supporting: <strong>{campaignData.name}</strong></p>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">Select Amount</label>
                  <div className="donation-chips" style={{ marginTop: '0.5rem' }}>
                    {DONATION_AMOUNTS.map(amt => (
                      <button
                        key={amt}
                        className={`donation-chip ${donateAmount === amt && !customAmount ? 'selected' : ''}`}
                        onClick={() => { setDonateAmount(amt); setCustomAmount(''); }}
                      >
                        ₹{amt.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Custom Amount (₹)</label>
                  <input
                    className="form-input"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={e => setCustomAmount(e.target.value)}
                    min={1}
                  />
                </div>

                <div style={{ padding: '0.875rem', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.8125rem', color: '#92400e' }}>
                  ⚠️ <strong>Payment simulation — prototype only.</strong> No real payment will be processed.
                </div>

                <button
                  className="btn btn-primary w-full"
                  style={{ justifyContent: 'center', width: '100%', padding: '0.875rem' }}
                  onClick={handleDonate}
                  disabled={donating || !finalAmount}
                >
                  {donating
                    ? <><div className="spinner" /> Processing...</>
                    : <>Donate ₹{finalAmount.toLocaleString('en-IN')} <ArrowRight size={16} /></>
                  }
                </button>
              </>
            ) : (
              <div className="text-center" style={{ padding: '1rem 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>❤️</div>
                <h3 style={{ color: 'var(--teal-700)', marginBottom: '0.75rem' }}>Thank you for creating impact!</h3>
                <p>Your contribution of <strong>₹{finalAmount.toLocaleString('en-IN')}</strong> has been added to the campaign.</p>
                <div className="demo-label" style={{ display: 'inline-flex', marginTop: '1.25rem' }}>
                  Simulated Payment — Prototype Only
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
