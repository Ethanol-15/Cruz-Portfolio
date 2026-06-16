/* ============================================================
   App.js — Root component
   Updated: swapped RainCanvas → CircuitCanvas
   ============================================================ */

   import './App.css';

   import { Routes, Route } from 'react-router-dom';
   
   import Header        from './components/Header';
   import Hero          from './components/Hero';
   import About         from './components/About';
   import Skills        from './components/Skills';
   import Projects      from './components/Projects';
   import Experience    from './components/Experience';
   import Contact       from './components/Contact';
   import Footer        from './components/Footer';
   import CircuitCanvas from './components/CircuitCanvas';   /* ← swapped */
   import ScrollToTop   from './components/ScrollToTop';
   import ProjectDetail from './pages/ProjectDetail';
   
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
   
   function App() {
     return (
       <>
         {/* Circuit node background — fixed, behind all pages */}
         <CircuitCanvas />
   
         {/* Scrolls to top on every route change */}
         <ScrollToTop />
   
         <Routes>
           <Route path="/"               element={<HomePage />} />
           <Route path="/projects/:slug" element={<ProjectDetail />} />
         </Routes>
       </>
     );
   }
   
   export default App;