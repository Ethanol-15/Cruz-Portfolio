import React from "react";

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card stagger"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      ) : (
        <div className="project-image-placeholder">No Image</div>
      )}

      <div className="project-content">
        <h3>{project.title}</h3>
        {project.subtitle && (
          <p>
            <i>{project.subtitle}</i>
          </p>
        )}
        <p>{project.description}</p>
        <p className="tech-stack">{project.techStack}</p>
      </div>

      {project.link && (
        <a
          href={project.link}
          className="project-btn"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;