import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4" style={{ gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div className="nav-logo" style={{ marginBottom: '1rem' }}>
              <div className="nav-logo-icon">
                <Heart size={18} color="white" fill="white" />
              </div>
              <span style={{ color: 'white', fontFamily: 'var(--font-display)' }}>HOPE CONNECT</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              A unified digital ecosystem connecting donors, volunteers, employees and partners to create measurable social impact.
            </p>
            <div className="flex gap-2" style={{ marginTop: '1.25rem' }}>
              <span className="badge" style={{ background: 'rgba(20,184,166,0.15)', color: 'var(--teal-300)', border: '1px solid rgba(20,184,166,0.3)' }}>
                Prototype
              </span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.15)' }}>
                HOPE Impact Ideathon 2026
              </span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h5 style={{ marginBottom: '1rem', color: 'white', fontSize: '0.9375rem' }}>Platform</h5>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Give & Celebrate', path: '/give' },
                { label: 'Skill Bank', path: '/skills' },
                { label: 'Employee Hub', path: '/employee' },
                { label: 'Impact Dashboard', path: '/impact' },
                { label: 'Demo Experience', path: '/demo' },
              ].map(item => (
                <Link key={item.path} to={item.path} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h5 style={{ marginBottom: '1rem', color: 'white', fontSize: '0.9375rem' }}>About</h5>
            <div className="flex flex-col gap-2">
              {['HOPE Foundation', 'Our Programmes', 'CSR Partners', 'Volunteer Stories', 'Annual Reports'].map(item => (
                <span key={item} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', cursor: 'default' }}>{item}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ marginBottom: '1rem', color: 'white', fontSize: '0.9375rem' }}>Contact</h5>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin size={14} color="var(--teal-400)" />
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} color="var(--teal-400)" />
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>connect@hopefoundation.in</span>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '0 0 1.5rem' }} />

        <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem', margin: 0 }}>
            © 2026 HOPE Foundation. HOPE CONNECT is a prototype developed for the HOPE Impact Ideathon 2026.
          </p>
          <div className="flex gap-4">
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem' }}>All statistics shown are demonstration data.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
