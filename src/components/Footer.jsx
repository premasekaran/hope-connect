import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import HopeLogo from './HopeLogo';

const FOOTER_LINKS = [
  {
    heading: 'Contribute',
    links: [
      { label: 'Give & Celebrate', path: '/give' },
      { label: 'Skill Bank',       path: '/skills' },
      { label: 'Volunteer',        path: '/skills' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'Employee Hub',       path: '/employee' },
      { label: 'Impact Dashboard',   path: '/impact' },
      { label: 'CSR Partnerships',   path: '/impact' },
    ],
  },
  {
    heading: 'Prototype',
    links: [
      { label: 'Demo Overview', path: '/demo' },
      { label: 'Home',          path: '/' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand column */}
          <div>
            <HopeLogo size="nav" className="mb-4" />
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem', lineHeight: 1.75, marginTop: '1rem', maxWidth: 300 }}>
              HOPE CONNECT is a unified digital ecosystem connecting donors, volunteers, employees
              and corporate partners to create measurable, sustained social impact.
            </p>
            <div className="demo-label" style={{ marginTop: '1.25rem', display: 'inline-flex', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}>
              Prototype — Ideathon 2026
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col, i) => (
            <div key={i}>
              <h5 style={{ marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                {col.heading}
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.path} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © {year} HOPE Foundation. HOPE CONNECT is a prototype created for the HOPE Impact Ideathon 2026.
            All data shown is for demonstration purposes only.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            Prototype — Not for production use
          </p>
        </div>
      </div>
    </footer>
  );
}
