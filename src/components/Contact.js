/* ============================================================
   Contact.js — Contact section

   Added:
   • Scroll reveal animation using IntersectionObserver
   • Contact content animates only when section enters viewport
   • Social media vector icons using react-icons
   ============================================================ */

   import { useEffect, useRef } from 'react';
   import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
   import { FaTiktok } from 'react-icons/fa6';
   import { MdEmail } from 'react-icons/md';
   import './Contact.css';
   
   const EMAIL = 'cruz.ethanlyle2003@email.com';
   const GITHUB = 'https://github.com/Ethanol-15';
   const LINKEDIN = 'https://www.linkedin.com/in/ethan-cruz-992730337/';
   const FACEBOOK = 'https://www.facebook.com/ethanlyle.cruz.1215/';
   const INSTAGRAM = 'https://www.instagram.com/ethanlcruz/';
   const TIKTOK = 'https://www.tiktok.com/ethanlcruz';
   
   function Contact() {
     // Reference to the Contact section for reveal animation
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
   
               // Run animation once only
               observer.disconnect();
             }
           });
         },
         {
           threshold: 0.15,
         }
       );
   
       observer.observe(section);
   
       // Cleanup observer when component unmounts
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
             Open to internships, junior AI/ML roles, freelance projects.
           </p>
   
           <div className="contact__links">
             <a
               href={`mailto:${EMAIL}`}
               className="contact__link contact__link--email"
             >
               <MdEmail />
               {EMAIL}
             </a>
   
             <a
               href={GITHUB}
               target="_blank"
               rel="noreferrer"
               className="contact__link contact__link--github"
             >
               <FaGithub />
               GitHub
             </a>
   
             <a
               href={LINKEDIN}
               target="_blank"
               rel="noreferrer"
               className="contact__link contact__link--linkedin"
             >
               <FaLinkedin />
               LinkedIn
             </a>
   
             <a
               href={FACEBOOK}
               target="_blank"
               rel="noreferrer"
               className="contact__link contact__link--facebook"
             >
               <FaFacebook />
               Facebook
             </a>
   
             <a
               href={INSTAGRAM}
               target="_blank"
               rel="noreferrer"
               className="contact__link contact__link--instagram"
             >
               <FaInstagram />
               Instagram
             </a>
   
             <a
               href={TIKTOK}
               target="_blank"
               rel="noreferrer"
               className="contact__link contact__link--tiktok"
             >
               <FaTiktok />
               TikTok
             </a>
           </div>
         </div>
       </section>
     );
   }
   
   export default Contact;