/* ============================================================
   Header.js — Sticky navigation bar
   Renders the logo and nav links. Each link uses a helper
   function to smoothly scroll to the target section by its
   DOM id rather than navigating to a new page (this is a
   single-page app, so everything is on one scroll).
   ============================================================ */

   import './Header.css';

   function Header() {
     /* scrollTo(id) — finds a section element by its id and
        calls scrollIntoView with smooth behavior.
        Using JS instead of normal anchor jumping gives us more
        control over the scroll behavior.
   
        preventDefault() stops the browser from instantly jumping
        to the href target before our smooth scroll runs. */
     const scrollTo = (event, id) => {
       event.preventDefault();
   
       const el = document.getElementById(id);
       if (el) el.scrollIntoView({ behavior: 'smooth' });
     };
   
     return (
       <header className="header">
         {/* Logo — clicking scrolls back to the very top */}
         <a
           href="#top"
           className="header__logo"
           onClick={(event) => {
             event.preventDefault();
             window.scrollTo({ top: 0, behavior: 'smooth' });
           }}
         >
           lyle_cruz.dev
         </a>
   
         {/* Navigation links — each has a real href for accessibility
             and also calls scrollTo for smooth scrolling */}
         <ul className="header__nav">
           <li><a href="#about" onClick={(event) => scrollTo(event, 'about')}>about</a></li>
           <li><a href="#skills" onClick={(event) => scrollTo(event, 'skills')}>skills</a></li>
           <li><a href="#projects" onClick={(event) => scrollTo(event, 'projects')}>projects</a></li>
           <li><a href="#experience" onClick={(event) => scrollTo(event, 'experience')}>experience</a></li>
           <li><a href="#contact" onClick={(event) => scrollTo(event, 'contact')}>contact</a></li>
         </ul>
       </header>
     );
   }
   
   export default Header;