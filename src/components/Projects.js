/* Projects.js — section number updated to 03 */

import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>

      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;