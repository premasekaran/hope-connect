import { useState, useRef, useEffect } from 'react';
import {
  FileText, MessageSquare, Download, Copy,
  Send, Sparkles, Wand2, CheckCircle,
  AlertCircle, RefreshCw, Users, BarChart3,
  Clock, ClipboardList, MapPin, Calendar,
  TrendingUp, Bot
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const AI_RESPONSES = {
  'Generate Donor Update': {
    title: 'Donor Update — October 2026',
    content: `This month, 86 students participated in digital literacy sessions across three learning centres. 72 students successfully completed the module, achieving a completion rate of 84%. 14 students are continuing with additional support sessions scheduled for next week.

The Yelahanka centre led with a completion rate of 91%, while the Hebbal centre onboarded 12 new students this month. Overall programme attendance is up 23% compared to last quarter.

Your support is directly enabling these outcomes. Thank you for your continued commitment to digital education.`,
  },
  'Create Programme Report': {
    title: 'Programme Report — Q3 2026',
    content: `**Digital Literacy Programme — Q3 Summary**

Total Reach: 286 students across 4 centres
Completion Rate: 82%
New Enrolments: 47
Volunteer Hours: 124 hrs contributed by 12 volunteers

Key Achievements:
• Yelahanka centre achieved highest completion rate (91%)
• 3 students successfully placed in tech internships
• Digital skills assessment scores improved by 34% YoY

Challenges & Actions:
• 5 students require additional learning support — sessions scheduled
• Infrastructure upgrade needed at Hebbal centre — proposal submitted`,
  },
  'Translate Feedback': {
    title: 'Translated Feedback (Kannada → English)',
    content: `Student Feedback — Yelahanka Centre

"The computer classes have been very helpful. Before I didn't know how to use the internet properly, but now I can search for jobs and create my resume online. My teacher Ananya is very patient and explains everything clearly. I want to continue learning more about programming." — Student, Age 19

"My daughter has become more confident since joining the digital skills programme. She helps her younger siblings with their studies using the computer. The programme has changed our family's perspective on education and technology." — Parent Testimonial`,
  },
  'Extract Action Items': {
    title: 'Action Items Extracted',
    content: `From Field Report — Yelahanka Visit, 24 Sep 2026:

✅ Schedule additional support sessions for 5 students by Oct 1
✅ Coordinate with Priya (Programme Coordinator) on assessment results
✅ Request infrastructure update for 3 computers at Hebbal centre
✅ Follow up with 2 students who missed last session
✅ Prepare Q3 impact summary for donor update by Oct 7
✅ Review curriculum for Module 4 — AI Basics`,
  },
};

const FIELD_REPORT_TEXT = `Today we visited the Yelahanka centre. 32 students attended. 27 completed the digital skills assessment. 5 students require additional support.`;

const FIELD_SUMMARY = {
  location: 'Yelahanka Centre',
  attendance: '32 students',
  completed: '27',
  support: '5',
  followups: [
    'Schedule support sessions for 5 students.',
    'Review assessment results with programme coordinator.',
    'Update programme coordinator by end of week.',
  ],
};

const PROGRAMME_TABLE = [
  { name: 'Digital Literacy', location: 'Yelahanka', beneficiaries: 142, status: 'Active', funding: '₹2.1L', volunteers: 8 },
  { name: 'Career Readiness', location: 'Hebbal', beneficiaries: 98, status: 'Active', funding: '₹1.8L', volunteers: 5 },
  { name: 'Women in Tech', location: 'Koramangala', beneficiaries: 67, status: 'Active', funding: '₹1.4L', volunteers: 4 },
  { name: 'Youth Mentorship', location: 'Whitefield', beneficiaries: 75, status: 'Pilot', funding: '₹0.9L', volunteers: 7 },
  { name: 'Senior Digital Skills', location: 'Jayanagar', beneficiaries: 43, status: 'Planning', funding: '₹0.7L', volunteers: 0 },
];

export default function EmployeePage() {
  const { addToast } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [aiResponse, setAiResponse] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  const [fieldText, setFieldText] = useState(FIELD_REPORT_TEXT);
  const [fieldSummary, setFieldSummary] = useState(null);
  const [summarising, setSummarising] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', content: "Hello Ananya! I'm HOPE AI, your programme operations assistant. I can help you summarise field reports, generate donor updates, create programme reports, and more. How can I help you today?" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  function handleAIAction(action) {
    setActiveAction(action);
    setAiLoading(true);
    setAiResponse(null);
    setTimeout(() => {
      setAiResponse(AI_RESPONSES[action]);
      setAiLoading(false);
    }, 1400);
  }

  function handleSummarise() {
    setSummarising(true);
    setFieldSummary(null);
    setTimeout(() => {
      setFieldSummary(FIELD_SUMMARY);
      setSummarising(false);
    }, 1600);
  }

  function handleCopy(text) {
    navigator.clipboard?.writeText(text);
    addToast({ type: 'success', title: 'Copied!', message: 'Content copied to clipboard.' });
  }

  function handleChatSend() {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setChatLoading(true);
    setTimeout(() => {
      const responses = {
        'report': 'I can help generate that! Based on recent field data, here is a summary: Programme attendance is at 84% this month, with 27 of 32 students completing their assessments at Yelahanka. Would you like me to generate a full donor update or programme report?',
        'donor': "Here's a draft donor update: This month, 86 students participated in digital literacy sessions across three learning centres, with a completion rate of 84%. Your support is enabling these outcomes. Shall I refine this further?",
        'volunteer': "You currently have 4 pending volunteer requests from Ananya, Rahul, Priya and 1 other. Would you like me to draft acceptance emails for all 4?",
        'default': "I understand you're asking about programme operations. Let me help — I can generate donor updates, summarise field reports, create programme reports, or translate beneficiary feedback. What would you like me to do?",
      };
      const key = userMsg.toLowerCase().includes('report') ? 'report'
        : userMsg.toLowerCase().includes('donor') ? 'donor'
          : userMsg.toLowerCase().includes('volunteer') ? 'volunteer'
            : 'default';
      setChatMessages(prev => [...prev, { role: 'ai', content: responses[key] }]);
      setChatLoading(false);
    }, 1200);
  }

  return (
    <div className="page-enter">
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--slate-900), var(--teal-900))', padding: '3rem 0' }}>
        <div className="container">
          <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="demo-label" style={{ display: 'inline-flex', marginBottom: '0.75rem', background: 'rgba(20,184,166,0.15)', border: '1px solid rgba(20,184,166,0.3)', color: 'var(--teal-300)' }}>
                Employee Hub
              </div>
              <h1 style={{ color: 'white', margin: '0 0 0.5rem' }}>Good morning, Ananya 👋</h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>Programme Operations · Digital Skills Team</p>
            </div>
            <div className="flex gap-2">
              <div className="stat-card" style={{ padding: '0.875rem 1.25rem', textAlign: 'left', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <div className="stat-value" style={{ color: 'var(--teal-300)', fontSize: '1.5rem' }}>8.5 hrs</div>
                <div className="stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Time Saved by AI</div>
              </div>
              <div className="stat-card" style={{ padding: '0.875rem 1.25rem', textAlign: 'left', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                <div className="stat-value" style={{ color: 'var(--amber-400)', fontSize: '1.5rem' }}>37</div>
                <div className="stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Reports Assisted</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs" style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.08)', maxWidth: 600 }}>
            {[
              { key: 'dashboard', label: '📋 Dashboard' },
              { key: 'ai', label: '🤖 HOPE AI' },
              { key: 'operations', label: '⚙️ Operations' },
            ].map(t => (
              <button key={t.key} className={`tab ${activeTab === t.key ? 'active' : ''}`}
                style={activeTab !== t.key ? { color: 'rgba(255,255,255,0.5)' } : {}}
                onClick={() => setActiveTab(t.key)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <section className="section-sm">
          <div className="container">
            <div className="grid-3" style={{ gap: '1.5rem' }}>
              {/* My Work */}
              <div className="card" style={{ gridColumn: 'span 2' }}>
                <h4 style={{ marginBottom: '1.25rem' }}>My Work</h4>
                <div className="grid-3" style={{ gap: '1rem' }}>
                  {[
                    { value: 12, label: 'Pending Reports', icon: <FileText size={20} />, color: 'var(--rose-500)', bg: '#ffe4e6' },
                    { value: 3, label: 'Upcoming Field Visits', icon: <MapPin size={20} />, color: '#2563eb', bg: '#eff6ff' },
                    { value: 4, label: 'Volunteer Requests', icon: <Users size={20} />, color: 'var(--teal-600)', bg: 'var(--teal-50)' },
                  ].map((s, i) => (
                    <div key={i} className="card-flat flex gap-3 items-center" style={{ padding: '1rem' }}>
                      <div style={{ width: 44, height: 44, background: s.bg, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, flexShrink: 0 }}>
                        {s.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--slate-800)', lineHeight: 1 }}>{s.value}</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginTop: 2 }}>{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="divider" />
                <h5 style={{ marginBottom: '1rem' }}>Recent Activity</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { action: 'Field visit completed', location: 'Yelahanka Centre', time: '2 hrs ago', dot: 'var(--emerald-500)' },
                    { action: 'Donor update generated by AI', location: 'Digital Literacy Programme', time: '4 hrs ago', dot: 'var(--teal-500)' },
                    { action: 'Volunteer request approved', location: 'Ananya Sharma — Python', time: 'Yesterday', dot: '#2563eb' },
                    { action: 'Assessment scores uploaded', location: 'Hebbal Centre', time: 'Yesterday', dot: 'var(--amber-500)' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center" style={{ padding: '0.75rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ width: 8, height: 8, background: item.dot, borderRadius: '50%', flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontWeight: 500, color: 'var(--slate-700)', fontSize: '0.9rem' }}>{item.action}</span>
                        <span style={{ color: 'var(--slate-400)', fontSize: '0.875rem' }}> · {item.location}</span>
                      </div>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--slate-400)', flexShrink: 0 }}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Productivity */}
              <div className="card">
                <h4 style={{ marginBottom: '1.25rem' }}>AI Productivity</h4>
                {[
                  { value: '8.5 hrs', label: 'Estimated Time Saved', color: 'var(--teal-600)' },
                  { value: 37, label: 'Reports Assisted', color: '#2563eb' },
                  { value: 24, label: 'Donor Updates Generated', color: '#7c3aed' },
                ].map((s, i) => (
                  <div key={i} style={{ marginBottom: '1.25rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.5rem', color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
                <button className="btn btn-primary btn-sm w-full" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setActiveTab('ai')}>
                  <Bot size={15} /> Open HOPE AI
                </button>
              </div>
            </div>
            <div className="demo-label" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Prototype • Demonstration Data</div>
          </div>
        </section>
      )}

      {/* AI Tab */}
      {activeTab === 'ai' && (
        <section className="section-sm">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">AI-Powered</div>
              <h2 className="section-title">HOPE AI Assistant</h2>
              <p className="section-subtitle">Your AI assistant for programme operations. Reduce admin work and focus on impact.</p>
            </div>

            <div className="grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
              {/* Left: Quick Actions */}
              <div>
                <h4 style={{ marginBottom: '1rem' }}>Suggested Actions</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {Object.keys(AI_RESPONSES).map(action => (
                    <button
                      key={action}
                      className={`card text-left ${activeAction === action ? 'selected' : ''}`}
                      style={{
                        border: activeAction === action ? '2px solid var(--teal-500)' : '2px solid var(--slate-200)',
                        padding: '0.875rem 1rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: activeAction === action ? 'var(--teal-50)' : 'white',
                      }}
                      onClick={() => handleAIAction(action)}
                    >
                      <Wand2 size={16} color={activeAction === action ? 'var(--teal-600)' : 'var(--slate-400)'} />
                      <span style={{ fontWeight: 500, color: activeAction === action ? 'var(--teal-700)' : 'var(--slate-700)' }}>{action}</span>
                    </button>
                  ))}
                </div>

                {/* AI Response */}
                {aiLoading && (
                  <div className="card text-center" style={{ padding: '2rem' }}>
                    <div className="spinner spinner-dark" style={{ margin: '0 auto 1rem' }} />
                    <p style={{ margin: 0 }}>Generating with HOPE AI...</p>
                  </div>
                )}
                {aiResponse && !aiLoading && (
                  <div className="card" style={{ border: '2px solid var(--teal-200)' }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
                      <h5 style={{ margin: 0, color: 'var(--teal-700)' }}>{aiResponse.title}</h5>
                      <div className="flex gap-2">
                        <button className="btn btn-ghost btn-sm" onClick={() => handleCopy(aiResponse.content)}>
                          <Copy size={13} /> Copy
                        </button>
                        <button className="btn btn-ghost btn-sm">
                          <Download size={13} /> Export
                        </button>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.75, whiteSpace: 'pre-line', margin: 0 }}>{aiResponse.content}</p>
                    <div className="demo-label" style={{ marginTop: '1rem', display: 'inline-flex' }}>AI-generated demonstration response</div>
                  </div>
                )}
              </div>

              {/* Right: Field Report Summarizer + Chat */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Field Report */}
                <div className="card">
                  <h4 style={{ marginBottom: '0.5rem' }}>Summarise Field Report</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Paste a field visit note and HOPE AI will extract key data and action items.</p>
                  <textarea
                    className="form-textarea"
                    value={fieldText}
                    onChange={e => setFieldText(e.target.value)}
                    rows={4}
                    style={{ marginBottom: '0.875rem' }}
                  />
                  <button className="btn btn-primary btn-sm" onClick={handleSummarise} disabled={summarising}>
                    {summarising ? <><div className="spinner" />Summarising...</> : <><Sparkles size={14} />Summarise</>}
                  </button>

                  {fieldSummary && (
                    <div style={{ marginTop: '1.25rem', padding: '1rem', background: 'var(--teal-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--teal-200)' }}>
                      <h5 style={{ marginBottom: '0.875rem', color: 'var(--teal-800)' }}>Field Visit Summary</h5>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                        {[
                          { label: 'Location', value: fieldSummary.location },
                          { label: 'Attendance', value: fieldSummary.attendance },
                          { label: 'Assessment Completed', value: fieldSummary.completed },
                          { label: 'Additional Support', value: fieldSummary.support },
                        ].map((item, i) => (
                          <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '0.625rem 0.75rem' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
                            <div style={{ fontWeight: 600, color: 'var(--slate-800)', marginTop: 2 }}>{item.value}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--slate-700)' }}>Recommended Follow-ups</div>
                      <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                        {fieldSummary.followups.map((f, i) => (
                          <li key={i} style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>{f}</li>
                        ))}
                      </ol>
                      <div className="demo-label" style={{ marginTop: '0.875rem', display: 'inline-flex' }}>AI-generated demonstration response</div>
                    </div>
                  )}
                </div>

                {/* Chat */}
                <div className="card" style={{ padding: '1.25rem' }}>
                  <div className="flex items-center gap-2" style={{ marginBottom: '1rem' }}>
                    <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, var(--teal-500), var(--emerald-500))', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Bot size={16} color="white" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>HOPE AI Chat</div>
                      <div className="flex items-center gap-1">
                        <span className="dot-active" />
                        <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>AI Demo</span>
                      </div>
                    </div>
                  </div>

                  <div className="chat-container">
                    <div className="chat-messages">
                      {chatMessages.map((msg, i) => (
                        <div key={i} className={`chat-message ${msg.role}`}>
                          {msg.role === 'ai' && (
                            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg, var(--teal-500), var(--emerald-500))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Bot size={14} color="white" />
                            </div>
                          )}
                          <div className={`chat-bubble ${msg.role === 'ai' ? 'chat-bubble-ai' : 'chat-bubble-user'}`}>
                            {msg.content}
                          </div>
                        </div>
                      ))}
                      {chatLoading && (
                        <div className="chat-message">
                          <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg, var(--teal-500), var(--emerald-500))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Bot size={14} color="white" />
                          </div>
                          <div className="chat-bubble chat-bubble-ai flex gap-1 items-center">
                            <div style={{ width: 6, height: 6, background: 'var(--slate-400)', borderRadius: '50%', animation: 'pulse 1s infinite' }} />
                            <div style={{ width: 6, height: 6, background: 'var(--slate-400)', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }} />
                            <div style={{ width: 6, height: 6, background: 'var(--slate-400)', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }} />
                          </div>
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>
                    <div className="chat-input-bar">
                      <input
                        className="chat-input"
                        placeholder="Ask HOPE AI anything..."
                        value={chatInput}
                        onChange={e => setChatInput(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') handleChatSend(); }}
                      />
                      <button
                        onClick={handleChatSend}
                        disabled={!chatInput.trim() || chatLoading}
                        style={{ border: 'none', background: 'var(--teal-600)', color: 'white', borderRadius: 'var(--radius-md)', padding: '0.375rem 0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600 }}
                      >
                        <Send size={13} /> Send
                      </button>
                    </div>
                  </div>
                  <div className="demo-label" style={{ marginTop: '0.875rem', display: 'inline-flex' }}>AI Demo</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Operations Tab */}
      {activeTab === 'operations' && (
        <section className="section-sm">
          <div className="container">
            <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ margin: 0 }}>Programme Operations</h3>
                <p style={{ margin: 0 }}>Active programmes and resource allocation</p>
              </div>
              <div className="demo-label">Prototype • Demonstration Data</div>
            </div>

            {/* Summary cards */}
            <div className="grid-4" style={{ marginBottom: '2rem' }}>
              {[
                { value: 5, label: 'Active Programmes', color: 'var(--teal-600)', bg: 'var(--teal-50)' },
                { value: 24, label: 'Active Volunteers', color: '#2563eb', bg: '#eff6ff' },
                { value: 7, label: 'Pending Requests', color: 'var(--amber-500)', bg: '#fffbeb' },
                { value: '1,842', label: 'Beneficiary Reach', color: '#7c3aed', bg: '#faf5ff' },
              ].map((s, i) => (
                <div key={i} className="stat-card">
                  <div style={{ width: 40, height: 40, background: s.bg, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
                    <span style={{ fontWeight: 800, color: s.color }}>{typeof s.value === 'number' && s.value < 100 ? s.value : ''}</span>
                  </div>
                  <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: '0' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--slate-200)' }}>
                <h4 style={{ margin: 0 }}>Programme Table</h4>
              </div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Programme</th>
                      <th>Location</th>
                      <th>Beneficiaries</th>
                      <th>Status</th>
                      <th>Funding</th>
                      <th>Volunteers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROGRAMME_TABLE.map((row, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600 }}>{row.name}</td>
                        <td>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} color="var(--slate-400)" />{row.location}
                          </span>
                        </td>
                        <td>{row.beneficiaries}</td>
                        <td>
                          <span className={`badge ${row.status === 'Active' ? 'badge-emerald' : row.status === 'Pilot' ? 'badge-blue' : 'badge-slate'}`}>
                            {row.status}
                          </span>
                        </td>
                        <td style={{ fontWeight: 600, color: 'var(--teal-700)' }}>{row.funding}</td>
                        <td>{row.volunteers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
