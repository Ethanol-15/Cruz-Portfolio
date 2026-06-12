/* ============================================================
   Experience.js — Experience section

   Added:
   • Scroll reveal animation using IntersectionObserver
   • Experience entries animate only when the section enters view
   ============================================================ */

   import { useEffect, useRef } from 'react';
   import './Experience.css';
   
   const ENTRIES = [
     {
       id: 1,
       date: '2022 — present',
       role: 'BS Computer Science',
       org: 'University of Santo Tomas, Manila',
       bullets: [
         'Focus on AI, NLP, Data engineering, & Data Researching.',
         'Led thesis project EmoTox — a hybrid CNN–LSTM / BiLSTM ensemble for toxicity detection via emotion and sarcasm analysis.',
         'Active in machine learning and data science',
       ],
       tags: ['AI/ML', 'NLP', 'Data Engineering', 'Cybersecurity'],
     },
     {
       id: 2,
       date: '2024',
       role: 'OJT Intern',
       org: 'Rakso Computer Technology Inc.',
       bullets: [
         'Hands-on experience in a professional tech environment.',
         'Contributed to internal tooling and software development tasks.',
         'Front End lead during my internship',
       ],
       tags: ['Internship', 'Software Development'],
     },
     {
       id: 3,
       date: '2023 — 2024',
       role: 'Certifications',
       org: 'AWS · Google Cloud · TryHackMe',
       bullets: [
         'AWS: ML Basics, Cloud Game Development.',
         'Google Cloud Skills Boost — data and ML track.',
         'TryHackMe — SOC / Blue Team pathway.',
       ],
       tags: ['AWS', 'GCP', 'TryHackMe', 'Udemy'],
     },
   ];
   
   function Experience() {
     // Reference to the whole Experience section
     const sectionRef = useRef(null);
   
     useEffect(() => {
       const section = sectionRef.current;
       if (!section) return;
   
       // Selects the header and each experience entry for animation
       const revealEls = section.querySelectorAll('.experience__reveal');
   
       // Watches when the Experience section enters the viewport
       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
             if (entry.isIntersecting) {
               // Adds CSS class that triggers the animation
               revealEls.forEach((el) => el.classList.add('is-visible'));
   
               // Runs the animation only once
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
       <section className="experience" id="experience" ref={sectionRef}>
         <div className="section-header experience__reveal">
           <span className="section-num">04</span>
           <h2 className="section-title">Experience</h2>
           <div className="section-line" />
         </div>
   
         <div className="experience__timeline">
           {ENTRIES.map((entry) => (
             <div key={entry.id} className="experience__entry experience__reveal">
               <p className="experience__date">{entry.date}</p>
               <h3 className="experience__role">{entry.role}</h3>
               <p className="experience__org">{entry.org}</p>
   
               <ul className="experience__desc">
                 {entry.bullets.map((bullet, i) => (
                   <li key={i}>{bullet}</li>
                 ))}
               </ul>
   
               {entry.tags.length > 0 && (
                 <div className="experience__tags">
                   {entry.tags.map((tag) => (
                     <span key={tag} className="experience__tag">
                       {tag}
                     </span>
                   ))}
                 </div>
               )}
             </div>
           ))}
         </div>
       </section>
     );
   }
   
   export default Experience;