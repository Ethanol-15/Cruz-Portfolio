/* Skills.js — section number updated to 02 */

import skills from '../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>

      <div className="skills__grid">
        {skills.map((group) => (
          <div key={group.id} className="skills__group">
            <p className="skills__group-label">{group.label}</p>
            <div className="skills__tags">
              {group.tags.map((tag) => (
                <span key={tag} className="skills__tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;