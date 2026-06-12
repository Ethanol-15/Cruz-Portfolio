/* ============================================================
   App.js — Root component
   Updated: added <About /> between <Hero /> and <Skills />
   ============================================================ */

   import './App.css';

   import { Routes, Route } from 'react-router-dom';
   
   import Header     from './components/Header';
   import Hero       from './components/Hero';
   import About      from './components/About';      /* ← new */
   import Skills     from './components/Skills';
   import Projects   from './components/Projects';
   import Experience from './components/Experience';
   import Contact    from './components/Contact';
   import Footer     from './components/Footer';
   import RainCanvas from './components/RainCanvas';
   
   import ProjectDetail from './pages/ProjectDetail';
   
   function HomePage() {
     return (
       <div id="top">
         <Header />
         <Hero />
         <About />       {/* ← new, sits between Hero and Skills */}
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
         <RainCanvas />
         <Routes>
           <Route path="/"               element={<HomePage />} />
           <Route path="/projects/:slug" element={<ProjectDetail />} />
         </Routes>
       </>
     );
   }
   
   export default App;