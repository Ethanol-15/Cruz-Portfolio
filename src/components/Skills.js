/* ============================================================
   Skills.js — Skills section
   Reads from data/skills.js and renders each group as a card
   with tag pills. Adding a new skill group = add one object
   to the data file, nothing here needs to change.
   ============================================================ */

import skills from '../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      {/* Section header — shared layout from App.css */}
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>

      {/* Map over the skills array — one card per domain group */}
      <div className="skills__grid">
        {skills.map((group) => (
          <div key={group.id} className="skills__group">
            {/* Domain label e.g. "AI / ML" */}
            <p className="skills__group-label">{group.label}</p>

            {/* Tag pills — one per technology in this group */}
            <div className="skills__tags">
              {group.tags.map((tag) => (
                <span key={tag} className="skills__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
