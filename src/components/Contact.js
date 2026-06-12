/* ============================================================
   Contact.js — Contact section

   Added:
   • Scroll reveal animation using IntersectionObserver
   • Contact content animates only when section enters viewport
   ============================================================ */

   import { useEffect, useRef } from 'react';
   import './Contact.css';
   
   const EMAIL = 'cruz.ethanlyle2003@email.com';
   const GITHUB = 'https://github.com/Ethanol-15';
   const LINKEDIN = 'https://github.com/Ethanol-15';
   
   function Contact() {
     // Reference to the Contact section
     const sectionRef = useRef(null);
   
     useEffect(() => {
       const section = sectionRef.current;
       if (!section) return;
   
       // Select elements that should reveal
       const revealEls = section.querySelectorAll('.contact__reveal');
   
       // Triggers animation when Contact enters the viewport
       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
             if (entry.isIntersecting) {
               revealEls.forEach((el) => el.classList.add('is-visible'));
   
               // Run once only
               observer.disconnect();
             }
           });
         },
         {
           threshold: 0.15,
         }
       );
   
       observer.observe(section);
   
       // Cleanup observer
       return () => observer.disconnect();
     }, []);
   
     return (
       <section className="contact" id="contact" ref={sectionRef}>
         <div className="section-header contact__reveal">
           <span className="section-num">05</span>
           <h2 className="section-title">Contact</h2>
           <div className="section-line" />
         </div>
   
         <div className="contact__inner contact__reveal">
           <h3 className="contact__heading">Let's build something.</h3>
   
           <p className="contact__subtext">
             Open to internships, junior AI/ML roles, freelance projects, or just
             a good conversation about tech.
           </p>
   
           <div className="contact__links">
             <a
               href={`mailto:${EMAIL}`}
               className="contact__link contact__link--email"
             >
               ✉ {EMAIL}
             </a>
   
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