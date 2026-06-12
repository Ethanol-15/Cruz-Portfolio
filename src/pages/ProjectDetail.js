/* ============================================================
   pages/ProjectDetail.js — Individual project detail page

   Added:
   • Reveal animation classes for back button, hero, media, body
   • Animation is CSS-only because this page loads from the top
   ============================================================ */

   import { useParams, useNavigate } from 'react-router-dom';
   import Header from '../components/Header';
   import Footer from '../components/Footer';
   import projects from '../data/projects';
   import './ProjectDetail.css';
   
   function ProjectDetail() {
     // Gets the project slug from the URL: /projects/:slug
     const { slug } = useParams();
   
     // Lets us go back or navigate to another route
     const navigate = useNavigate();
   
     // Finds the project data that matches the URL slug
     const project = projects.find((p) => p.slug === slug);
   
     // Fallback if the slug does not match any project
     if (!project) {
       return (
         <div className="detail">
           <Header />
   
           <div style={{ padding: '80px 2rem', textAlign: 'center' }}>
             <p style={{ color: 'var(--muted2)', fontFamily: 'var(--font-mono)' }}>
               project not found
             </p>
   
             <button
               className="detail__back-btn"
               onClick={() => navigate('/')}
               style={{ marginTop: 20 }}
             >
               ← back to portfolio
             </button>
           </div>
         </div>
       );
     }
   
     const {
       title,
       badge,
       description,
       longDesc,
       tags,
       highlights,
       images,
       videoUrl,
       liveUrl,
       repoUrl,
     } = project;
   
     const hasVideo = Boolean(videoUrl);
     const hasScreenshots = images && images.length > 0;
     const hasMedia = hasVideo || hasScreenshots;
   
     return (
       <div className="detail">
         <Header />
   
         {/* Back navigation */}
         <div className="detail__back-bar detail__reveal detail__reveal--1">
           <button className="detail__back-btn" onClick={() => navigate(-1)}>
             ← back
           </button>
         </div>
   
         {/* Hero section */}
         <div className="detail__hero detail__reveal detail__reveal--2">
           <span className={`detail__badge detail__badge--${badge}`}>
             {badge}
           </span>
   
           <h1 className="detail__title">{title}</h1>
   
           <div className="detail__tags">
             {tags.map((tag) => (
               <span key={tag} className="detail__tag">
                 {tag}
               </span>
             ))}
           </div>
   
           {(liveUrl || repoUrl) && (
             <div className="detail__actions">
               {liveUrl && (
                 <a
                   href={liveUrl}
                   target="_blank"
                   rel="noreferrer"
                   className="detail__action-btn detail__action-btn--live"
                 >
                    View Live
                 </a>
               )}
   
               {repoUrl && (
                 <a
                   href={repoUrl}
                   target="_blank"
                   rel="noreferrer"
                   className="detail__action-btn detail__action-btn--repo"
                 >
                   ⌥ Source Code
                 </a>
               )}
             </div>
           )}
         </div>
   
         {/* Media section */}
         {hasMedia && (
           <div className="detail__media detail__reveal detail__reveal--3">
             <div className="detail__media-inner">
               {hasVideo && (
                 <div className="detail__video-wrap">
                   <video
                     src={videoUrl}
                     controls
                     preload="metadata"
                     className="detail__video"
                   >
                     Your browser does not support the video tag.
                   </video>
                 </div>
               )}
   
               {hasScreenshots && (
                 <div
                   className="detail__screenshots"
                   style={{ marginTop: hasVideo ? 24 : 0 }}
                 >
                   {images.map((src, i) => (
                     <div key={i} className="detail__screenshot">
                       {src ? (
                         <img src={src} alt={`${title} screenshot ${i + 1}`} />
                       ) : (
                         <div className="detail__screenshot-placeholder">
                           screenshot coming soon
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
               )}
             </div>
           </div>
         )}
   
         {/* Description + highlights */}
         <div className="detail__body detail__reveal detail__reveal--4">
           <div>
             <p className="detail__long-desc">{longDesc || description}</p>
           </div>
   
           {highlights && highlights.length > 0 && (
             <aside className="detail__sidebar">
               <p className="detail__sidebar-title">Highlights</p>
   
               <ul className="detail__highlights">
                 {highlights.map((point, i) => (
                   <li key={i} className="detail__highlight">
                     {point}
                   </li>
                 ))}
               </ul>
             </aside>
           )}
         </div>
   
         <Footer />
       </div>
     );
   }
   
   export default ProjectDetail;