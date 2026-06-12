/* ============================================================
   Header.js — Fixed accessible nav links
   ============================================================ */

   import './Header.css';

   function Header() {
     const scrollTo = (event, id) => {
       event.preventDefault();
   
       const el = document.getElementById(id);
       if (el) {
         el.scrollIntoView({ behavior: 'smooth' });
       }
     };
   
     const scrollTop = (event) => {
       event.preventDefault();
   
       window.scrollTo({
         top: 0,
         behavior: 'smooth',
       });
     };
   
     return (
       <header className="header">
         <a
           href="#top"
           className="header__logo"
           onClick={scrollTop}
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