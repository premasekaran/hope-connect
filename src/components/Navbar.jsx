import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Heart, Bell, Search, Menu, X, ChevronDown,
  Sparkles, Users, BarChart3
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Give & Celebrate', path: '/give' },
  { label: 'Skill Bank', path: '/skills' },
  { label: 'Employee Hub', path: '/employee' },
  { label: 'Impact', path: '/impact' },
];

const SEARCH_RESULTS = {
  'python': [{ label: 'Python Mentor — Skill Bank', path: '/skills', icon: '💡' }],
  'education': [
    { label: 'Education Programme — Impact', path: '/impact', icon: '📚' },
    { label: "Prema's Birthday for Education", path: '/give', icon: '🎉' },
  ],
  'digital skills': [{ label: 'Digital Skills Challenge — CSR', path: '/impact', icon: '💻' }],
  'csr': [{ label: 'CSR Challenge Bank — Impact', path: '/impact', icon: '🏢' }],
  'volunteer': [
    { label: 'Skill Bank — Volunteer', path: '/skills', icon: '🤝' },
    { label: 'Employee Hub — Volunteers', path: '/employee', icon: '👩‍💼' },
  ],
};

function searchItems(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  for (const [key, results] of Object.entries(SEARCH_RESULTS)) {
    if (key.includes(q) || q.includes(key)) return results;
  }
  return [];
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { notifications, addToast } = useApp();
  const unreadCount = notifications.filter(n => !n.read).length;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  const notifRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleSearch(e) {
    const q = e.target.value;
    setSearchQuery(q);
    setSearchResults(searchItems(q));
    setSearchOpen(true);
  }

  function handleSearchSelect(path) {
    setSearchQuery('');
    setSearchOpen(false);
    navigate(path);
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">
            <Heart size={18} color="white" fill="white" />
          </div>
          HOPE CONNECT
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          {/* Search */}
          <div className="relative" ref={searchRef}>
            <div className="search-bar">
              <Search size={15} color="var(--slate-400)" />
              <input
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setSearchOpen(true)}
              />
            </div>
            {searchOpen && searchResults.length > 0 && (
              <div className="notification-panel" style={{ minWidth: 280 }}>
                {searchResults.map((r, i) => (
                  <div key={i} className="notification-item" onClick={() => handleSearchSelect(r.path)}>
                    <span style={{ fontSize: '1.25rem' }}>{r.icon}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--slate-700)', fontWeight: 500 }}>{r.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              className="nav-notification-btn"
              onClick={() => setNotifOpen(v => !v)}
              aria-label="Notifications"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
              )}
            </button>

            {notifOpen && (
              <div className="notification-panel">
                <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--slate-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, color: 'var(--slate-800)' }}>Notifications</span>
                  <span className="badge badge-teal">{unreadCount} new</span>
                </div>
                {notifications.map(n => (
                  <div key={n.id} className={`notification-item ${!n.read ? 'unread' : ''}`}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{n.icon}</span>
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-700)', margin: 0, lineHeight: 1.4 }}>{n.text}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--slate-400)', marginTop: 4 }}>{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            className="btn btn-ghost btn-sm"
            onClick={() => addToast({ type: 'info', title: 'Sign In', message: 'Authentication coming in Phase 2 — Prototype Demo' })}
          >
            Sign In
          </button>
          <Link to="/demo" className="btn btn-primary btn-sm">
            <Sparkles size={15} />
            Create Impact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{ justifyContent: 'flex-start' }}
            >
              {item.label}
            </Link>
          ))}
          <hr className="divider" />
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn btn-outline btn-sm" style={{ flex: 1 }}
              onClick={() => addToast({ type: 'info', title: 'Sign In', message: 'Authentication coming in Phase 2' })}>
              Sign In
            </button>
            <Link to="/demo" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
              Create Impact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
