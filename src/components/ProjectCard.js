import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const BADGE_LABELS = {
  live: "live",
  thesis: "thesis",
  personal: "personal",
  school: "school",
  research: "research",
};

function ProjectCard({ project }) {
  const {
    slug,
    title,
    badge,
    description,
    tags,
    liveUrl,
    repoUrl,
  } = project;

  return (
    <Link
      to={`/projects/${slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <article className="project-card">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>

          <span
            className={`project-card__badge project-card__badge--${
              badge || "live"
            }`}
          >
            {BADGE_LABELS[badge] ?? badge}
          </span>
        </div>

        <p className="project-card__desc">{description}</p>

        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        {(liveUrl || repoUrl) && (
          <div className="project-card__links">
            {liveUrl && (
              <span className="project-card__link">
                ↗ live demo
              </span>
            )}

            {repoUrl && (
              <span className="project-card__link">
                <FaGithub aria-hidden="true" />
                source
              </span>
            )}
          </div>
        )}


      </article>
    </Link>
  );
}

export default ProjectCard;