import React, { useEffect, useState } from "react";
import { fetchProjects } from "../api/projects";
import "./Projects.css";
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await fetchProjects();
      setProjects(data);
    }

    loadProjects();
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <div className="project-image-placeholder">No Image</div>
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <p className="tech-stack">{project.techStack}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;