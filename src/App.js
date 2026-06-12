/* ============================================================
   App.js — Root component

   What this file does:
   • Sets up the main portfolio homepage sections
   • Sets up React Router pages
   • Adds the rain background effect
   • Adds ScrollToTop so project pages always load at the top
   ============================================================ */

   import './App.css';

   import { Routes, Route } from 'react-router-dom';
   
   import Header from './components/Header';
   import Hero from './components/Hero';
   import About from './components/About';
   import Skills from './components/Skills';
   import Projects from './components/Projects';
   import Experience from './components/Experience';
   import Contact from './components/Contact';
   import Footer from './components/Footer';
   import RainCanvas from './components/RainCanvas';
   import ScrollToTop from './components/ScrollToTop';
   
   import ProjectDetail from './pages/ProjectDetail';
   
   /* Homepage layout:
      This is the main one-page portfolio route: "/" */
   function HomePage() {
     return (
       <div id="top">
         <Header />
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Experience />
         <Contact />
         <Footer />
       </div>
     );
   }
   
   /* App:
      Controls global components and page routing */
   function App() {
     return (
       <>
         {/* Background rain animation, visible behind all pages */}
         <RainCanvas />
   
         {/* Scrolls to the top whenever the route changes */}
         <ScrollToTop />
   
         {/* Defines the available pages/routes */}
         <Routes>
           {/* Main homepage */}
           <Route path="/" element={<HomePage />} />
   
           {/* Individual project detail page, example: /projects/coach-e */}
           <Route path="/projects/:slug" element={<ProjectDetail />} />
         </Routes>
       </>
     );
   }
   
   export default App;