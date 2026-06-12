/* ============================================================
   Header.js — Fixed accessible nav links

   Added:
   • cruz.dev logo now redirects back to the homepage
   • If already on homepage, it simply scrolls to the top
   ============================================================ */

   import { useNavigate, useLocation } from 'react-router-dom';
   import './Header.css';
   
   function Header() {
     const navigate = useNavigate();
     const location = useLocation();
   
     const scrollTo = (event, id) => {
       event.preventDefault();
   
       const el = document.getElementById(id);
   
       if (el) {
         el.scrollIntoView({ behavior: 'smooth' });
       } else {
         // If user is on project detail page, go home first
         navigate('/');
   
         // Small delay so homepage sections exist before scrolling
         setTimeout(() => {
           document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
         }, 100);
       }
     };
   
     const goHome = (event) => {
       event.preventDefault();
   
       // If already on homepage, just scroll to top
       if (location.pathname === '/') {
         window.scrollTo({
           top: 0,
           behavior: 'smooth',
         });
         return;
       }
   
       // If on project detail page, go back to homepage
       navigate('/');
     };
   
     return (
       <header className="header">
         <a
           href="/"
           className="header__logo"
           onClick={goHome}
         >
           cruz.dev
         </a>
   
         <ul className="header__nav">
           <li>
             <a href="#about" onClick={(event) => scrollTo(event, 'about')}>
               about
             </a>
           </li>
   
           <li>
             <a href="#skills" onClick={(event) => scrollTo(event, 'skills')}>
               skills
             </a>
           </li>
   
           <li>
             <a href="#projects" onClick={(event) => scrollTo(event, 'projects')}>
               projects
             </a>
           </li>
   
           <li>
             <a href="#experience" onClick={(event) => scrollTo(event, 'experience')}>
               experience
             </a>
           </li>
   
           <li>
             <a href="#contact" onClick={(event) => scrollTo(event, 'contact')}>
               contact
             </a>
           </li>
         </ul>
       </header>
     );
   }
   
   export default Header;