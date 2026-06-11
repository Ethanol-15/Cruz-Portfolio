/* ============================================================
   Experience.js — Education & Work Experience timeline
   Timeline entries are defined inline here (vs a separate
   data file) since experience data changes rarely and is
   richer/more varied than projects or skills.
   ============================================================ */

   import './Experience.css';

   /* Timeline data — edit this array to update the section.
      Each entry: { id, date, role, org, bullets[], tags[] } */
   const ENTRIES = [
     {
       id: 1,
       date: '2022 — 2026',
       role: 'BS Computer Science Graduate',
       org: 'University of Santo Tomas, Manila',
       bullets: [
         'Graduated with a Bachelor of Science in Computer Science.',
         'Dean’s Lister during 3rd Year, 1st Semester and 4th Year, 2nd Semester.',
         'Served as thesis leader for EmoTox, leading the development of an emotion-aware toxicity detection system using NLP, sarcasm analysis, and hybrid deep learning models.',
         'Focused academic and project work on data, artificial intelligence, NLP, machine learning, and web development.',
         'Explored cybersecurity as a personal learning hobby through hands-on labs and blue team fundamentals.',
       ],
       tags: ['Computer Science', 'Thesis Leader', 'AI/ML', 'NLP', 'Data', 'Web Development'],
     },
     {
       id: 2,
       date: '2026',
       role: 'Front-End Development Lead — OJT Intern',
       org: 'Rakso Computer Technology Inc.',
       bullets: [
         'Led front-end development responsibilities for the internship project.',
         'Worked on user interface implementation, layout structure, and front-end functionality.',
         'Collaborated with teammates to translate project requirements into usable web application screens.',
         'Applied web development, UI/UX, and quality-checking practices in a professional tech environment.',
       ],
       tags: ['Internship', 'Front-End Development', 'UI/UX', 'React', 'Web Development'],
     },
     {
       id: 3,
       date: '2024',
       role: 'Web Designer & QA — SE2 Project',
       org: 'LRA Student Grading System',
       bullets: [
         'Designed dashboard layouts using HTML, CSS, and Figma to improve usability and visual structure.',
         'Conducted QA testing for grade reports, attendance input, and export features.',
         'Helped validate core system flows to ensure the grading system worked correctly for users.',
       ],
       tags: ['HTML', 'CSS', 'Figma', 'UI/UX', 'QA Testing'],
     },
     {
       id: 4,
       date: '2023 — 2024',
       role: 'Certifications & Self-Learning',
       org: 'AWS · Google Cloud · TryHackMe · Udemy',
       bullets: [
         'Completed learning modules in AWS, Google Cloud Skills Boost, and TryHackMe.',
         'Studied cloud fundamentals, machine learning basics, and introductory SOC / Blue Team concepts.',
         'Used cybersecurity labs mainly as a hobby to strengthen technical awareness and security fundamentals.',
       ],
       tags: ['AWS', 'GCP', 'TryHackMe', 'Cloud', 'Cybersecurity Hobby',],
     },
   ];
   
   function Experience() {
     return (
       <section className="experience" id="experience">
         {/* Section header */}
         <div className="section-header">
           <span className="section-num">04</span>
           <h2 className="section-title">Experience</h2>
           <div className="section-line" />
         </div>
   
         {/* Timeline — vertical line is drawn by the CSS border-left
             on .experience__timeline; dots come from ::before pseudo. */}
         <div className="experience__timeline">
           {ENTRIES.map((entry) => (
             <div key={entry.id} className="experience__entry">
               <p className="experience__date">{entry.date}</p>
               <h3 className="experience__role">{entry.role}</h3>
               <p className="experience__org">{entry.org}</p>
   
               {/* Bullet list of highlights */}
               <ul className="experience__desc">
                 {entry.bullets.map((bullet, i) => (
                   <li key={i}>{bullet}</li>
                 ))}
               </ul>
   
               {/* Tag pills */}
               {entry.tags.length > 0 && (
                 <div className="experience__tags">
                   {entry.tags.map((tag) => (
                     <span key={tag} className="experience__tag">{tag}</span>
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