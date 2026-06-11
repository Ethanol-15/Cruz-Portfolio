/* ============================================================
   App.js — Root component
   This is the top-level component React renders into index.js.

   Updated with React Router:
   - "/" renders the portfolio homepage
   - "/projects/:slug" renders an individual project detail page
   ============================================================ */

   import './App.css';

   import { Routes, Route } from 'react-router-dom';
   
   import Header  from './components/Header';
   import Hero    from './components/Hero';
   import Skills  from './components/Skills';
   import Projects from './components/Projects';
   import Experience from './components/Experience';
   import Contact from './components/Contact';
   import Footer  from './components/Footer';
   
   import ProjectDetail from './pages/ProjectDetail';
   
   /* HomePage is the normal portfolio landing page.
      We keep it inside App.js so your current structure stays simple. */
   function HomePage() {
     return (
       /* The outer div gives us a single root element.
          The id="top" lets the logo in the nav scroll back to the very top. */
       <div id="top">
         {/* Sticky navigation bar — always visible while scrolling */}
         <Header />
   
         {/* Full-viewport hero with typewriter animation */}
         <Hero />
   
         {/* Skills grouped by domain (AI/ML, Backend, etc.) */}
         <Skills />
   
         {/* Project cards with tech stack tags */}
         <Projects />
   
         {/* Education / OJT experience timeline */}
         <Experience />
   
         {/* Contact links — email, GitHub, LinkedIn */}
         <Contact />
   
         {/* Small footer with attribution */}
         <Footer />
       </div>
     );
   }
   
   function App() {
     return (
       /* Routes decides what page to show based on the URL. */
       <Routes>
         {/* Main portfolio homepage */}
         <Route path="/" element={<HomePage />} />
   
         {/* Individual project detail page.
             Example: /projects/coach-e */}
         <Route path="/projects/:slug" element={<ProjectDetail />} />
       </Routes>
     );
   }
   
   export default App;