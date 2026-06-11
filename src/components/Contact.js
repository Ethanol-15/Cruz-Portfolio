/* ============================================================
   Contact.js — Contact section
   Simple centered card with email, GitHub, and LinkedIn links.
   Update the href values below with your actual details.
   ============================================================ */

import './Contact.css';

/* ⚠️  EDIT THESE — replace with your real contact info */
const EMAIL    = 'lyle@email.com';                          /* your email */
const GITHUB   = 'https://github.com/Ethanol-15';           /* your GitHub */
const LINKEDIN = 'https://www.linkedin.com/in/ethan-cruz-992730337/';    /* your LinkedIn */

function Contact() {
  return (
    <section className="contact" id="contact">
      {/* Section header */}
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>

      {/* Centered CTA card */}
      <div className="contact__inner">
        <h3 className="contact__heading">Let's build something.</h3>
        <p className="contact__subtext">
          Open to internships, junior AI/ML roles, freelance projects, or just
          a good conversation about tech.
        </p>

        <div className="contact__links">
          {/* mailto: link opens the user's default mail client */}
          <a
            href={`mailto:${EMAIL}`}
            className="contact__link contact__link--email"
          >
            ✉ {EMAIL}
          </a>

          {/* External links — target="_blank" opens a new tab
              rel="noreferrer" is a security best practice for
              external links (prevents the new tab from accessing
              window.opener on the originating page). */}
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="contact__link contact__link--github"
          >
            ⌥ GitHub
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="contact__link contact__link--linkedin"
          >
            in LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
