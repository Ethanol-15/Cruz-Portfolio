/* ============================================================
   Hero.js — Landing section with typewriter + reveal animation

   What this does:
   • Keeps the typewriter effect for ROLES
   • Adds reveal animation classes to the other hero elements
   • Typewriter text is not reveal-animated so it stays stable
   • Adds a Download CV button linked to public/Ethan-Lyle-Cruz-CV.pdf
   ============================================================ */

   import { useState, useEffect } from 'react';
   import './Hero.css';
   
   const ROLES = [
     'AI/ML Engineer',
     'Full-Stack Developer',
     'AI Researcher',
     'CS Graduate @ UST',
     'Gym Lifter',
     'Content Creator',
     'Pogi',
   ];
   
   const TYPE_SPEED = 75;
   const DELETE_SPEED = 45;
   const PAUSE_AFTER = 1800;
   
   function Hero() {
     const [displayed, setDisplayed] = useState('');
     const [isDeleting, setIsDeleting] = useState(false);
     const [roleIndex, setRoleIndex] = useState(0);
   
     useEffect(() => {
       const currentRole = ROLES[roleIndex];
   
       // When the full role is typed, pause before deleting
       if (!isDeleting && displayed === currentRole) {
         const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER);
         return () => clearTimeout(t);
       }
   
       // When the role is fully deleted, move to the next role
       if (isDeleting && displayed === '') {
         const t = setTimeout(() => {
           setIsDeleting(false);
           setRoleIndex((prev) => (prev + 1) % ROLES.length);
         }, 150);
   
         return () => clearTimeout(t);
       }
   
       // Adds or removes one character depending on typing/deleting mode
       const nextDisplayed = isDeleting
         ? currentRole.slice(0, displayed.length - 1)
         : currentRole.slice(0, displayed.length + 1);
   
       const t = setTimeout(
         () => setDisplayed(nextDisplayed),
         isDeleting ? DELETE_SPEED : TYPE_SPEED
       );
   
       return () => clearTimeout(t);
     }, [displayed, isDeleting, roleIndex]);
   
     // Smoothly scrolls to a section when button is clicked
     const scrollTo = (id) =>
       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
   
     return (
       <section className="hero">
         <p className="hero__eyebrow hero__reveal hero__reveal--1">
           available for opportunities
         </p>
   
         <h1 className="hero__title hero__reveal hero__reveal--2">
           Hi, I'm <span>Ethan Lyle Cruz</span>
         </h1>
   
         {/* Keep this stable for the typewriter effect */}
         <p className="hero__role">
           {displayed}
           <span className="hero__cursor" aria-hidden="true" />
         </p>
   
         <p className="hero__desc hero__reveal hero__reveal--3">
           Computer Science graduate from UST Manila, Philippines building AI applications by mastering system logic over syntax. 
           I leverage modern AI workflows to rapidly prototype everything from NLP safety systems to computer vision,
           focusing on modular architecture and debugging under the hood rather than just writing boilerplate code.
         </p>
   
         <div className="hero__actions hero__reveal hero__reveal--4">
           <button className="btn-primary" onClick={() => scrollTo('projects')}>
             View my work
           </button>
   
           <button className="btn-secondary" onClick={() => scrollTo('contact')}>
             Get in touch
           </button>
   
           {/* Download CV button
               The PDF must be placed inside the public folder:
               public/Ethan-Lyle-Cruz-CV.pdf */}
           <a
             href="/Ethan-Lyle-Cruz-CV.pdf"
             download="Ethan-Lyle-Cruz-CV.pdf"
             className="btn-secondary"
           >
             Download CV
           </a>
         </div>
   
         <div className="hero__stats hero__reveal hero__reveal--5">
           <div>
             <p className="hero__stat-num">
               5<span>+</span>
             </p>
             <p className="hero__stat-label">AI projects</p>
           </div>
   
           <div>
             <p className="hero__stat-num">
               3<span>+</span>
             </p>
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
