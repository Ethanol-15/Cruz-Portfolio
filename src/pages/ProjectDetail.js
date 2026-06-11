/* ============================================================
   pages/ProjectDetail.js — Individual project detail page
   
   Rendered at route: /projects/:slug
   
   Flow:
   1. useParams() reads the :slug from the URL
   2. We find the matching project from the data array
   3. Render: back button → hero → media → description + sidebar
   ============================================================ */

import { useParams, useNavigate } from 'react-router-dom';
import Header  from '../components/Header';
import Footer  from '../components/Footer';
import projects from '../data/projects';
import './ProjectDetail.css';

function ProjectDetail() {
  /* useParams returns an object with URL parameters.
     For route /projects/:slug, it gives us { slug: 'coach-e' } */
  const { slug } = useParams();

  /* useNavigate returns a function we can call to change the route.
     navigate(-1) goes back one step in browser history — same as
     clicking the browser's back button. */
  const navigate = useNavigate();

  /* Find the project whose slug matches the URL parameter */
  const project = projects.find((p) => p.slug === slug);

  /* If no match (typo in URL, deleted project, etc.) show a
     simple not-found message instead of crashing. */
  if (!project) {
    return (
      <div className="detail">
        <Header />
        <div style={{ padding: '80px 2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--muted2)', fontFamily: 'var(--font-mono)' }}>
            project not found
          </p>
          <button
            className="detail__back-btn"
            onClick={() => navigate('/')}
            style={{ marginTop: 20 }}
          >
            ← back to portfolio
          </button>
        </div>
      </div>
    );
  }

  /* Destructure for clean JSX below */
  const {
    title, badge, description, longDesc,
    tags, highlights, images, videoUrl,
    liveUrl, repoUrl,
  } = project;

  /* Determine if we have any media to show at all */
  const hasVideo       = Boolean(videoUrl);
  const hasScreenshots = images && images.length > 0;
  const hasMedia       = hasVideo || hasScreenshots;

  return (
    <div className="detail">
      {/* Reuse the same sticky header from the home page */}
      <Header />

      {/* ── Back navigation ─────────────────────────────── */}
      <div className="detail__back-bar">
        <button
          className="detail__back-btn"
          /* navigate(-1) pops the history stack — goes back to wherever
             the user came from (usually the home page project list). */
          onClick={() => navigate(-1)}
        >
          ← back
        </button>
      </div>

      {/* ── Hero: badge, title, tags, action buttons ─────── */}
      <div className="detail__hero">
        <span className={`detail__badge detail__badge--${badge}`}>
          {badge}
        </span>

        <h1 className="detail__title">{title}</h1>

        <div className="detail__tags">
          {tags.map((tag) => (
            <span key={tag} className="detail__tag">{tag}</span>
          ))}
        </div>

        {/* Action buttons — only render if URLs are provided */}
        {(liveUrl || repoUrl) && (
          <div className="detail__actions">
            {liveUrl && (
              /* target="_blank" opens the live app in a new tab.
                 rel="noreferrer" prevents the new tab from accessing
                 window.opener — a security best practice. */
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="detail__action-btn detail__action-btn--live"
              >
                ↗ View Live
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="detail__action-btn detail__action-btn--repo"
              >
                ⌥ Source Code
              </a>
            )}
          </div>
        )}
      </div>

      {/* ── Media section ────────────────────────────────── */}
      {hasMedia && (
        <div className="detail__media">
          <div className="detail__media-inner">
            {/* VIDEO — shown first if a videoUrl is provided.
                The 16:9 aspect ratio trick uses padding-bottom: 56.25%
                on the wrapper and positions the iframe absolutely inside.
                This makes the iframe responsive at any container width. */}
            {hasVideo && (
              <div className="detail__video-wrap">
                <video
                  src={videoUrl}
                  controls
                  className="detail__video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* SCREENSHOTS — shown below the video (or alone if no video).
                If the image path exists → render the img.
                If the file doesn't exist yet → show a placeholder box so
                the layout doesn't collapse while you're adding screenshots. */}
            {hasScreenshots && (
              <div
                className="detail__screenshots"
                style={{ marginTop: hasVideo ? 24 : 0 }}
              >
                {images.map((src, i) => (
                  <div key={i} className="detail__screenshot">
                    {src ? (
                      <img src={src} alt={`${title} screenshot ${i + 1}`} />
                    ) : (
                      <div className="detail__screenshot-placeholder">
                        screenshot coming soon
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Body: long description + highlights sidebar ─── */}
      <div className="detail__body">
        {/* Left column: full description */}
        <div>
          <p className="detail__long-desc">
            {longDesc || description}
          </p>
        </div>

        {/* Right column: sticky highlights card */}
        {highlights && highlights.length > 0 && (
          <aside className="detail__sidebar">
            <p className="detail__sidebar-title">Highlights</p>
            <ul className="detail__highlights">
              {highlights.map((point, i) => (
                <li key={i} className="detail__highlight">
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
