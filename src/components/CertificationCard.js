/* ============================================================
   CertificationCard.js — Reusable certification badge card
   This component is available if you want to render certs
   as visual cards (e.g. in the Experience or a dedicated
   Certifications section).

   Usage:
     <CertificationCard
       name="AWS ML Basics"
       issuer="Amazon Web Services"
       year="2023"
       badgeColor="amber"   // "amber" | "blue" | "purple" | "cyan"
     />
   ============================================================ */

/* Maps a color name to CSS color values.
   Defined outside the component to avoid re-creation on render. */
const COLOR_MAP = {
  amber:  { bg: 'rgba(251,191,36,0.1)',  text: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
  blue:   { bg: 'rgba(96,165,250,0.1)',  text: '#60a5fa', border: 'rgba(96,165,250,0.25)' },
  purple: { bg: 'rgba(129,140,248,0.1)', text: 'var(--purple)', border: 'rgba(129,140,248,0.25)' },
  cyan:   { bg: 'rgba(34,211,238,0.1)',  text: 'var(--cyan)',   border: 'rgba(34,211,238,0.25)' },
};

function CertificationCard({ name, issuer, year, badgeColor = 'cyan' }) {
  /* Look up colors, fall back to cyan if an unknown key is passed */
  const colors = COLOR_MAP[badgeColor] ?? COLOR_MAP.cyan;

  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
      }}
    >
      {/* Color dot — visual indicator for the certification tier */}
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: colors.text,
          marginTop: 5,
          flexShrink: 0,
        }}
      />

      <div style={{ flex: 1 }}>
        {/* Cert name */}
        <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>
          {name}
        </p>

        {/* Issuer and year on the same line */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--muted2)' }}>{issuer}</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              padding: '2px 8px',
              borderRadius: 20,
              background: colors.bg,
              color: colors.text,
              border: `1px solid ${colors.border}`,
            }}
          >
            {year}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
