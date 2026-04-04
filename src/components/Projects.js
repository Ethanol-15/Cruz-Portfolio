import React, { useEffect, useState } from "react";
import { fetchProjects } from "../api/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    }

    loadProjects();
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;