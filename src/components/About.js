/* ============================================================
   About.js — About section

   Layout:
   • Row 1 pairs CS/AI text with coding image
   • Row 2 pairs gym/system mindset text with gym GIF
   • Uses IntersectionObserver for scroll reveal animation
   ============================================================ */

import { useEffect, useRef } from 'react';
import './About.css';
import gymVideo from '../assets/gym-video.gif';

// Imported GIF used in the gym image frame
const gymPhoto = gymVideo;

function About() {
  // Stores a reference to the About section for the reveal animation
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Selects all elements that should fade/slide in
    const revealEls = section.querySelectorAll('.about__reveal');

    // Watches when the About section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Triggers the CSS reveal animation
            revealEls.forEach((el) => el.classList.add('is-visible'));

            // Runs only once for better performance
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    // Cleans up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      {/* Section title */}
      <div className="section-header about__reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">About</h2>
        <div className="section-line" />
      </div>

      {/* Main intro statement */}
      <p className="about__intro about__reveal">
        I don't just want things to work —
        I want to know <em>why</em> they work.
      </p>

      {/* Row 1: CS/AI text paired with coding image */}
      <div className="about__pair about__reveal">
        <div className="about__copy">
          <p className="about__body">
            I'm a Computer Science graduate from the University of Santo Tomas
            focused on AI, data, and intelligent systems. Whether it's building
            attention mechanisms from scratch, tracing how a vision model
            processes image tokens, or wiring up a full RAG pipeline — I want
            to understand the system end-to-end, not just copy the pattern that
            works.
          </p>
        </div>

        <div className="about__img-frame about__img-frame--coding">
          <div className="about__img-placeholder">
            <span className="about__img-placeholder-icon">💻</span>
            <span className="about__img-placeholder-text">coming soon</span>
          </div>
          <div className="about__img-label">at the keyboard</div>
        </div>
      </div>

      {/* Row 2: Gym text paired with gym GIF */}
      <div className="about__pair about__pair--reverse about__reveal">
        <div className="about__copy">
          <p className="about__body">
            Outside the terminal, I train at the gym with the same mindset:
            track everything, understand the variables, and make progress
            repeatable. I like building systems for both code and life — from
            AI-powered apps to training blocks, habits, and workflows.
          </p>
        </div>

        <div className="about__img-frame about__img-frame--gym">
          <img src={gymPhoto} alt="Lyle at the gym" />
          <div className="about__img-label">at the gym</div>
        </div>
      </div>

      {/* Personality / skill tags */}
      <div className="about__traits about__reveal">
        {[
          'systems thinker',
          'lifts weights',
          'time blocker',
          'from-scratch builder',
          'AI/ML focused',
          'planner',
        ].map((trait) => (
          <span key={trait} className="about__trait">
            {trait}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;