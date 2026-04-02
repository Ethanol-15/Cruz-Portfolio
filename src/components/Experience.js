import React from "react";
import "./Experience.css";

// ✅ IMPORT IMAGES (THIS IS THE CORRECT WAY FOR src/assets)
import raksoLogo from "../assets/rakso-ct.png";
import experienceImg from "../assets/experience-illustration.png";

const experiences = [
  {
    company: "Rakso CT",
    role: "Web Developer",
    description: "Worked as a lead front end developer.",
    date: "January - March 2026",
    logo: raksoLogo,
  },
  {
    company: "Rakso CT",
    role: "UI/UX Designer",
    description: "Worked as a lead UI/UX designer.",
    date: "January - March 2026",
    logo: raksoLogo,
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">My Experience</h2>

      <div className="experience-content">
        <div className="experience-image-wrapper">
          <img
            src={experienceImg}   // ✅ FIXED
            alt="Experience Illustration"
            className="experience-image"
          />
        </div>

        <div className="experience-scroll-area">
          {experiences.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-card-left">
                <img
                  src={item.logo}   // ✅ FIXED
                  alt={item.company}
                  className="experience-logo"
                />
              </div>

              <div className="experience-card-right">
                <h3>{item.role}</h3>
                <p className="experience-description">
                  • {item.description}
                </p>
                <span className="experience-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}