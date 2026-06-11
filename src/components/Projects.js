/* ============================================================
   Projects.js — Projects section
   Imports the data array and maps it to ProjectCard components.
   This component is intentionally thin — it owns the section
   layout and delegates card rendering to ProjectCard.
   ============================================================ */

import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Section header */}
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>

      {/* Map each project object to a ProjectCard.
          The key prop is required by React to efficiently
          re-render list items when the data changes. */}
      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
