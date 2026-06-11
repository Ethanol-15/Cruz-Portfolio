/* ============================================================
   ProjectCard.js — Project card (updated for project detail pages)
   
   CHANGE from external-link version:
   The card now uses React Router <Link> again.

   Why:
   We want clicking a card to open an internal detail page first:
   /projects/coach-e

   Then the detail page can show:
   - full project description
   - highlights
   - screenshots/video
   - View Live button
   - Source Code button
   ============================================================ */

   import { Link } from 'react-router-dom';

   const BADGE_LABELS = {
    live: 'live',
    thesis: 'thesis',
    personal: 'personal',
    school: 'school',
    research: 'research',
  };
   
   function ProjectCard({ project }) {
     const { slug, title, badge, description, tags, liveUrl, repoUrl } = project;
   
     return (
       /*  Link renders an <a> tag that React Router intercepts.
           Instead of opening the deployed project immediately,
           it navigates to the portfolio detail page.
   
           Example:
           Coach E card -> /projects/coach-e */
       <Link
         to={`/projects/${slug}`}
         style={{ textDecoration: 'none', display: 'block' }}
       >
         <article className="project-card">
           {/* ----- Top row: title + status badge ----- */}
           <div className="project-card__header">
             <h3 className="project-card__title">{title}</h3>
             <span className={`project-card__badge project-card__badge--${badge || 'live'}`}>
               {BADGE_LABELS[badge] ?? badge}
             </span>
           </div>
   
           {/* ----- Short description ----- */}
           <p className="project-card__desc">{description}</p>
   
           {/* ----- Tech stack tags ----- */}
           <div className="project-card__tags">
             {tags.map((tag) => (
               <span key={tag} className="project-card__tag">{tag}</span>
             ))}
           </div>
   
           {/* ----- External link indicators -----
               These are only visual labels here.
               The actual clickable live/repo buttons will be inside ProjectDetail.js. */}
           {(liveUrl || repoUrl) && (
             <div className="project-card__links">
               {liveUrl && (
                 <span className="project-card__link">
                   ↗ live demo
                 </span>
               )}
               {repoUrl && (
                 <span className="project-card__link">
                   ⌥ source
                 </span>
               )}
             </div>
           )}
   
           {/* "View details" hint — tells users this card opens a detail page */}
           <p className="project-card__hint">
             view details →
           </p>
         </article>
       </Link>
     );
   }
   
   export default ProjectCard;