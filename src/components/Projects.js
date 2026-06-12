/* ============================================================
   Projects.js — Projects section

   Added:
   • Scroll reveal animation using IntersectionObserver
   • Project cards animate only when the Projects section enters view
   • Reveal wrapper avoids interfering with ProjectCard hover/click
   ============================================================ */

   import { useEffect, useRef } from 'react';

   import projects from '../data/projects';
   import ProjectCard from './ProjectCard';
   import './Projects.css';
   
   function Projects() {
     // Reference to the whole Projects section
     const sectionRef = useRef(null);
   
     useEffect(() => {
       const section = sectionRef.current;
       if (!section) return;
   
       // Selects the header and project card wrappers for animation
       const revealEls = section.querySelectorAll('.projects__reveal');
   
       // Watches when the Projects section enters the viewport
       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
             if (entry.isIntersecting) {
               // Adds CSS class that triggers the reveal animation
               revealEls.forEach((el) => el.classList.add('is-visible'));
   
               // Runs only once
               observer.disconnect();
             }
           });
         },
         {
           threshold: 0.15,
         }
       );
   
       observer.observe(section);
   
       // Cleanup when component unmounts
       return () => observer.disconnect();
     }, []);
   
     return (
       <section className="projects" id="projects" ref={sectionRef}>
         <div className="section-header projects__reveal">
           <span className="section-num">03</span>
           <h2 className="section-title">Projects</h2>
           <div className="section-line" />
         </div>
   
         <div className="projects__list">
           {projects.map((project) => (
             <div key={project.id} className="projects__reveal">
               <ProjectCard project={project} />
             </div>
           ))}
         </div>
       </section>
     );
   }
   
   export default Projects;