/* ============================================================
   About.js — Dedicated about section

   Layout: two-column grid
   • Left:  intro paragraph, body copy, trait pills
   • Right: two image frames (coding placeholder + gym GIF)
             with slight opposing tilts for an editorial feel

   Scroll reveal:
   • useRef + IntersectionObserver watches the section root
   • When it enters the viewport, .is-visible is added to each
     .about__reveal child — CSS handles the fade+slide transition
   • Observer disconnects after first trigger (no repeat)

   Images:
   • Gym media → imported from src/assets/gym-video.gif
   ============================================================ */

   import { useEffect, useRef } from 'react';
   import './About.css';
   import gymVideo from '../assets/gym-video.gif';
   
   const gymPhoto = gymVideo;
   
   function About() {
     /* sectionRef points to the outer <section> element.
        We pass it to IntersectionObserver to watch when it enters
        the viewport, then cascade .is-visible onto child elements. */
     const sectionRef = useRef(null);
   
     useEffect(() => {
       const section = sectionRef.current;
       if (!section) return;
   
       /* Grab all elements we want to animate in */
       const revealEls = section.querySelectorAll('.about__reveal');
   
       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
             if (entry.isIntersecting) {
               /* Add .is-visible to each child with a staggered delay.
                  The delay is already set in CSS via nth-child, but we
                  also set it inline here for fine-grained per-element
                  control if you ever want to adjust specific items. */
               revealEls.forEach((el) => el.classList.add('is-visible'));
   
               /* Disconnect after first trigger — no need to re-run
                  the animation every time the user scrolls past. */
               observer.disconnect();
             }
           });
         },
         {
           /* threshold: 0.15 means 15% of the section must be visible
              before the animation fires — prevents triggering too early
              when the section is just barely scrolled into view. */
           threshold: 0.15,
         }
       );
   
       observer.observe(section);
   
       /* Cleanup: disconnect if the component unmounts before firing */
       return () => observer.disconnect();
     }, []);
   
     return (
       <section className="about" id="about" ref={sectionRef}>
         {/* ── Section header ── */}
         <div className="section-header about__reveal">
           <span className="section-num">01</span>
           <h2 className="section-title">About</h2>
           <div className="section-line" />
         </div>
   
         <div className="about__grid">
           {/* ── Left: text ── */}
           <div className="about__text">
             {/* Intro — the punchy first line */}
             <p className="about__intro about__reveal">
               I don't just want things to work —
               I want to know <em>why</em> they work.
             </p>
   
             {/* Body copy — Lyle's actual personality */}
             <p className="about__body about__reveal">
               I'm a Computer Science graduate from the University of Santo Tomas
               focused on AI, data, and intelligent systems. Whether it's building
               attention mechanisms from scratch, tracing how a vision model
               processes image tokens, or wiring up a full RAG pipeline — I want
               to understand the system end-to-end, not just copy the pattern that
               works.
             </p>
   
             <p className="about__body about__reveal">
               Outside the terminal, I train at the gym with the same mindset:
               track everything, understand the variables, and make progress
               repeatable. I like building systems for both code and life — from
               AI-powered apps to training blocks, habits, and workflows.
             </p>
   
             {/* Trait pills — quick-scan personality summary */}
             <div className="about__traits about__reveal">
               {[
                 'systems thinker',
                 'lifts weights',
                 'time blocker',
                 'from-scratch builder',
                 'AI/ML focused',
                 'planner',
               ].map((trait) => (
                 <span key={trait} className="about__trait">
                   {trait}
                 </span>
               ))}
             </div>
           </div>
   
           {/* ── Right: images ── */}
           <div className="about__images about__reveal">
             {/* Image 1 — coding placeholder until you have a coding photo */}
             <div className="about__img-frame">
               <div className="about__img-placeholder">
                 <span className="about__img-placeholder-icon">💻</span>
                 <span className="about__img-placeholder-text">coming soon</span>
               </div>
               <div className="about__img-label">at the keyboard</div>
             </div>
   
             {/* Image 2 — gym GIF */}
             <div className="about__img-frame">
               <img src={gymPhoto} alt="Lyle at the gym" />
               <div className="about__img-label">at the gym</div>
             </div>
           </div>
         </div>
       </section>
     );
   }
   
   export default About;