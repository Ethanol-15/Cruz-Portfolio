/* ============================================================
   Header.js — Sticky navigation bar
   Renders the logo and nav links. Each link uses a helper
   function to smoothly scroll to the target section by its
   DOM id rather than navigating to a new page (this is a
   single-page app, so everything is on one scroll).
   ============================================================ */

import './Header.css';

function Header() {
  /* scrollTo(id) — finds a section element by its id and
     calls scrollIntoView with smooth behavior.
     Using JS instead of <a href="#id"> gives us more control
     and avoids the URL hash changing on every click. */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      {/* Logo — clicking scrolls back to the very top */}
      <span
        className="header__logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        lyle_cruz.dev
      </span>

      {/* Navigation links — each calls scrollTo with the
          corresponding section's id attribute */}
      <ul className="header__nav">
        <li><a onClick={() => scrollTo('about')}>about</a></li>
        <li><a onClick={() => scrollTo('skills')}>skills</a></li>
        <li><a onClick={() => scrollTo('projects')}>projects</a></li>
        <li><a onClick={() => scrollTo('experience')}>experience</a></li>
        <li><a onClick={() => scrollTo('contact')}>contact</a></li>
      </ul>
    </header>
  );
}

export default Header;
