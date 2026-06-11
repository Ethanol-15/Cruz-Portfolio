/* ============================================================
   Hero.js — Landing section with typewriter animation
   Uses useState + useEffect to drive the typing effect
   entirely inside this component — no external library needed.
   ============================================================ */

import { useState, useEffect } from 'react';
import './Hero.css';

/* The list of roles the typewriter cycles through.
   Add or remove strings here to change what gets typed. */
const ROLES = [
  'AI/ML Engineer',
  'Full-Stack Developer',
  'Gym Lifter',
  'NLP Researcher',
  'CS Student @ UST',
];

/* Timing constants (milliseconds) — tweak to change speed */
const TYPE_SPEED   = 75;   /* ms per character while typing */
const DELETE_SPEED = 45;   /* ms per character while deleting */
const PAUSE_AFTER  = 1800; /* ms to wait before starting to delete */

function Hero() {
  /* displayed  — the substring currently shown on screen
     isDeleting — whether we're in the deletion phase
     roleIndex  — which string in ROLES we're working on    */
  const [displayed, setDisplayed]   = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex]   = useState(0);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    /* Determine the next displayed value and the delay
       before the next character update fires. */
    let nextDisplayed;
    let delay;

    if (!isDeleting) {
      /* --- Typing phase: add one character --- */
      nextDisplayed = currentRole.slice(0, displayed.length + 1);
      delay = TYPE_SPEED;

      /* If we've finished typing the full string, pause
         then switch to deletion mode. */
      if (nextDisplayed === currentRole) {
        delay = PAUSE_AFTER;
        /* We schedule the state flip inside the timeout below */
      }
    } else {
      /* --- Deleting phase: remove one character --- */
      nextDisplayed = currentRole.slice(0, displayed.length - 1);
      delay = DELETE_SPEED;
    }

    const timeout = setTimeout(() => {
      setDisplayed(nextDisplayed);

      if (!isDeleting && nextDisplayed === currentRole) {
        /* Finished typing → start deleting */
        setIsDeleting(true);
      } else if (isDeleting && nextDisplayed === '') {
        /* Finished deleting → move to next role */
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, delay);

    /* Cleanup: cancel the previous timeout before scheduling
       the next one, preventing memory leaks and double-fires. */
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  /* Scroll helper — used by the CTA buttons */
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Small label above the name */}
      <p className="hero__eyebrow">available for opportunities</p>

      {/* Main heading with gradient name */}
      <h1 className="hero__title">
        Hi, I'm <span>Ethan Lyle Cruz</span>
      </h1>

      {/* Typewriter line — displays the animated role string
          plus a CSS-animated blinking cursor element */}
      <p className="hero__role">
        {displayed}
        <span className="hero__cursor" aria-hidden="true" />
      </p>

      {/* Short bio paragraph */}
      <p className="hero__desc">
        CS graduate from UST building AI-powered applications — from NLP safety
        systems and fitness coaching apps to computer vision research. I care
        about understanding how systems work, not just making them run.
      </p>

      {/* CTA buttons — scroll to relevant sections */}
      <div className="hero__actions">
        <button className="btn-primary" onClick={() => scrollTo('projects')}>
          View my work
        </button>
        <button className="btn-secondary" onClick={() => scrollTo('contact')}>
          Get in touch
        </button>
      </div>

      {/* Quick-glance stats strip */}
      <div className="hero__stats">
        <div>
          <p className="hero__stat-num">5<span>+</span></p>
          <p className="hero__stat-label">AI projects</p>
        </div>
        <div>
          <p className="hero__stat-num">3<span>+</span></p>
          <p className="hero__stat-label">years coding</p>
        </div>
        <div>
          <p className="hero__stat-num">UST</p>
          <p className="hero__stat-label">Manila, PH</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
