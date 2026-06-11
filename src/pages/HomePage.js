/* ============================================================
   pages/HomePage.js — The main single-page portfolio view
   Previously this was App.js. Moving it to a "page" component
   keeps App.js clean (routing only) and HomePage.js focused
   on layout (sections only).
   ============================================================ */

import Header     from '../components/Header';
import Hero       from '../components/Hero';
import Skills     from '../components/Skills';
import Projects   from '../components/Projects';
import Experience from '../components/Experience';
import Contact    from '../components/Contact';
import Footer     from '../components/Footer';

function HomePage() {
  return (
    <div id="top">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
