/* ============================================================
   pages/ProjectDetail.js — Individual project detail page
   ============================================================ */

   import { FaGithub } from "react-icons/fa6";
   import { useNavigate, useParams } from "react-router-dom";
   
   import Footer from "../components/Footer";
   import Header from "../components/Header";
   import projects from "../data/projects";
   import "./ProjectDetail.css";
   
   function ProjectDetail() {
     const { slug } = useParams();
     const navigate = useNavigate();
   
     const project = projects.find((p) => p.slug === slug);
   
     if (!project) {
       return (
         <div className="detail">
           <Header />
   
           <div style={{ padding: "80px 2rem", textAlign: "center" }}>
             <p
               style={{
                 color: "var(--muted2)",
                 fontFamily: "var(--font-mono)",
               }}
             >
               project not found
             </p>
   
             <button
               className="detail__back-btn"
               onClick={() => navigate("/")}
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
           <button
             className="detail__back-btn"
             onClick={() => navigate(-1)}
           >
             ← back
           </button>
         </div>
   
         {/* Hero */}
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
                   <FaGithub
                     className="detail__action-icon"
                     aria-hidden="true"
                   />
                   Source Code
                 </a>
               )}
             </div>
           )}
         </div>
   
         {/* Media */}
         {hasMedia && (
           <div className="detail__media detail__reveal detail__reveal--3">
             <div className="detail__media-inner">
               <div className="detail__media-scroll">
                 {hasVideo && (
                   <div className="detail__media-item detail__media-item--video">
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
   
                 {hasScreenshots &&
                   images.map((src, index) => (
                     <div
                       key={index}
                       className="detail__media-item detail__media-item--image"
                     >
                       {src ? (
                         <img
                           src={src}
                           alt={`${title} screenshot ${index + 1}`}
                         />
                       ) : (
                         <div className="detail__screenshot-placeholder">
                           screenshot coming soon
                         </div>
                       )}
                     </div>
                   ))}
               </div>
   
               <p className="detail__media-hint">scroll media →</p>
             </div>
           </div>
         )}
   
         {/* Description and highlights */}
         <div className="detail__body detail__reveal detail__reveal--4">
           <div>
             <p className="detail__long-desc">
               {longDesc || description}
             </p>
           </div>
   
           {highlights && highlights.length > 0 && (
             <aside className="detail__sidebar">
               <p className="detail__sidebar-title">Highlights</p>
   
               <ul className="detail__highlights">
                 {highlights.map((point, index) => (
                   <li key={index} className="detail__highlight">
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