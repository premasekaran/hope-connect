import { Globe } from 'lucide-react';

/**
 * HopeLogo — renders the HOPE Foundation logo mark.
 * The globe from Lucide icons replaces the "O" in HOPE,
 * matching the original HOPE Foundation identity.
 *
 * Replace with <img src="/hope-logo.png" /> after adding
 * the actual logo image to the public/ folder.
 */
export default function HopeLogo({ size = 'nav', className = '' }) {
  const config = {
    nav:   { globeSize: 30, hopeFontSize: 32, subFontSize: 11, gap: 1 },
    large: { globeSize: 56, hopeFontSize: 60, subFontSize: 20, gap: 2 },
    small: { globeSize: 22, hopeFontSize: 24, subFontSize:  9, gap: 1 },
  };
  const c = config[size] || config.nav;

  return (
    <div className={className} style={{ lineHeight: 1, userSelect: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* HOPE with Globe replacing the O */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 800,
        fontSize: c.hopeFontSize,
        color: '#1d3461',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        gap: c.gap,
      }}>
        <span>H</span>
        <Globe
          size={c.globeSize}
          color="#1d3461"
          strokeWidth={1.25}
          style={{ flexShrink: 0, marginTop: size === 'large' ? 4 : 2 }}
        />
        <span>PE</span>
      </div>
      {/* "foundation" subtitle */}
      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: c.subFontSize,
        color: '#1d3461',
        letterSpacing: '0.18em',
        marginTop: size === 'large' ? 2 : 1,
        textTransform: 'lowercase',
        textAlign: 'center',
        width: '100%',
      }}>
        foundation
      </div>
    </div>
  );
}
