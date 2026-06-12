/* ============================================================
   Hero.js — Landing section with typewriter animation (fixed)

   Bug that was happening:
   ─────────────────────────────────────────────────────────────
   When the last character was typed, the useEffect ran with
   displayed === currentRole. The old code set nextDisplayed =
   currentRole (no change), then set delay = PAUSE_AFTER, but
   still called setDisplayed(nextDisplayed) at the end of the
   timeout. That triggered ANOTHER render with the exact same
   state, which hit the same branch again — effectively
   double-firing the pause and causing the last letter to flash
   or vanish before the pause actually completed.

   Fix:
   ─────────────────────────────────────────────────────────────
   When fully typed, we schedule ONLY the mode flip (setIsDeleting)
   inside a setTimeout and return early — we do NOT call
   setDisplayed at all. This means:
     • No extra render is triggered mid-pause
     • The text stays visible for exactly PAUSE_AFTER ms
     • Deletion starts cleanly after the pause
   ============================================================ */

   import { useState, useEffect } from 'react';
   import './Hero.css';
   
   const ROLES = [
     'AI/ML Engineer',
     'Full-Stack Developer',
     'AI Researcher',
     'CS Student @ UST',
     'Gym Lifter',
     'Content Creator',
   ];
   
   const TYPE_SPEED   = 75;
   const DELETE_SPEED = 45;
   const PAUSE_AFTER  = 1800;
   
   function Hero() {
     const [displayed,  setDisplayed]  = useState('');
     const [isDeleting, setIsDeleting] = useState(false);
     const [roleIndex,  setRoleIndex]  = useState(0);
   
     useEffect(() => {
       const currentRole = ROLES[roleIndex];
   
       /* ── Fully typed: pause, then flip to delete mode ──
          Return early so we never call setDisplayed here.
          The ONLY thing that changes after PAUSE_AFTER ms is
          isDeleting → true. No intermediate renders, no flicker. */
       if (!isDeleting && displayed === currentRole) {
         const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER);
         return () => clearTimeout(t);
       }
   
       /* ── Fully deleted: move to next role ──
          Same pattern — flip state, don't touch displayed.        */
       if (isDeleting && displayed === '') {
         const t = setTimeout(() => {
           setIsDeleting(false);
           setRoleIndex((prev) => (prev + 1) % ROLES.length);
         }, 150); /* tiny pause between roles so it doesn't snap */
         return () => clearTimeout(t);
       }
   
       /* ── Normal typing / deleting: update one character ── */
       const nextDisplayed = isDeleting
         ? currentRole.slice(0, displayed.length - 1)  /* remove last char */
         : currentRole.slice(0, displayed.length + 1); /* add next char    */
   
       const t = setTimeout(
         () => setDisplayed(nextDisplayed),
         isDeleting ? DELETE_SPEED : TYPE_SPEED
       );
   
       return () => clearTimeout(t);
   
       /* All four state values are deps — the effect re-runs
          whenever any of them changes, driving the next step.    */
     }, [displayed, isDeleting, roleIndex]);
   
     const scrollTo = (id) =>
       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
   
     return (
       <section className="hero">
         <p className="hero__eyebrow">available for opportunities</p>
   
         <h1 className="hero__title">
           Hi, I'm <span>Ethan Lyle Cruz</span>
         </h1>
   
         <p className="hero__role">
           {displayed}
           <span className="hero__cursor" aria-hidden="true" />
         </p>
   
         <p className="hero__desc">
         Computer Science graduate from UST building AI-powered applications — 
         from NLP safety systems and fitness coaching apps to computer vision research. 
         I’m deeply curious about how systems work under the hood, not just how to make them run.
         </p>
   
         <div className="hero__actions">
           <button className="btn-primary"   onClick={() => scrollTo('projects')}>
             View my work
           </button>
           <button className="btn-secondary" onClick={() => scrollTo('contact')}>
             Get in touch
           </button>
         </div>
   
         <div className="hero__stats">
           <div>
             <p className="hero__stat-num">5<span>+</span></p>
             <p className="hero__stat-label">AI projects</p>
           </div>
           <div>
             <p className="hero__stat-num">3<span>+</span></p>
             <p className="hero__stat-label">years coding</p>
           </div>
           <div>
             <p className="hero__stat-num">UST</p>
             <p className="hero__stat-label">Manila, PH</p>
           </div>
         </div>
       </section>
     );
   }
   
   export default Hero;