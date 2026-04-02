import React from "react";
import "./Skills.css";

import progImg from "../assets/programming.png";
import feImg from "../assets/frontend.png";
import beImg from "../assets/backend.png";
import dbImg from "../assets/database.png";
import mlImg from "../assets/ml.png";
import dsImg from "../assets/datascience.png";
import secImg from "../assets/security.png";
import uiImg from "../assets/uiux.png";
import toolsImg from "../assets/tools.png";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming Languages</h3>
            <div className="skill-image">
              <img src={progImg} alt="Programming" />
            </div>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Front-End</h3>
            <div className="skill-image">
              <img src={feImg} alt="Frontend" />
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Back-End</h3>
            <div className="skill-image">
              <img src={beImg} alt="Backend" />
            </div>
            <ul>
              <li>Node.js</li>
              <li>Laravel</li>
              <li>Strapi</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <div className="skill-image">
              <img src={dbImg} alt="Database" />
            </div>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Machine Learning</h3>
            <div className="skill-image">
              <img src={mlImg} alt="Machine Learning" />
            </div>
            <ul>
              <li>TensorFlow</li>
              <li>CNN, LSTM, RNN</li>
              <li>NLP</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Data Science</h3>
            <div className="skill-image">
              <img src={dsImg} alt="Data Science" />
            </div>
            <ul>
              <li>NumPy, Pandas</li>
              <li>Data Cleaning</li>
              <li>Data Visualization</li>
              <li>Model Evaluation</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Security Analyst</h3>
            <div className="skill-image">
              <img src={secImg} alt="Security" />
            </div>
            <ul>
              <li>Wireshark</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>UI/UX Designer</h3>
            <div className="skill-image">
              <img src={uiImg} alt="UI UX" />
            </div>
            <ul>
              <li>Figma</li>
              <li>Canva</li>
              <li>ibis Paint</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <div className="skill-image">
              <img src={toolsImg} alt="Tools" />
            </div>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Postman</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;