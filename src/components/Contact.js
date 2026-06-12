/* Contact.js — section number updated to 05 */

import './Contact.css';

const EMAIL    = 'cruz.ethanlyle2003@email.com';
const GITHUB   = 'https://github.com/Ethanol-15';
const LINKEDIN = 'https://www.linkedin.com/in/ethan-cruz-992730337/';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>

      <div className="contact__inner">
        <h3 className="contact__heading">Let's build something.</h3>
        <p className="contact__subtext">
          Open to internships, junior AI/ML roles, freelance projects, or just
          a good conversation about tech.
        </p>

        <div className="contact__links">
          <a href={`mailto:${EMAIL}`} className="contact__link contact__link--email">
            ✉ {EMAIL}
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="contact__link contact__link--github">
            ⌥ GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="contact__link contact__link--linkedin">
            in LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
