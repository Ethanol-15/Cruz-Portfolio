/* ============================================================
   Footer.js — Simple site footer
   No separate CSS file needed — styles are minimal enough
   to live inline here without cluttering a stylesheet.
   ============================================================ */

function Footer() {
  /* Get the current year dynamically so it never goes stale */
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '28px 2rem',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--muted)',
      }}
    >
      built by{' '}
      <span style={{ color: 'var(--cyan)' }}>lyle cruz</span>
      {' '}· Manila, PH · {year}
    </footer>
  );
}

export default Footer;
