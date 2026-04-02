import React from "react";
import profileImage from "../assets/profile.png";
import fccLogo from "../assets/fcc-logo.png";
import udemyLogo from "../assets/UDEMY.png";
import "./Hero.css";

function Header() {
  return (
    <section id="about" className="hero-section">
      <div className="glass-container">
        <div className="hero-left">
          <h1 className="hero-heading">Hi, I'm Ethan Lyle Cruz</h1>

          <p className="hero-paragraph">
            from Metro Manila, PH. I’m passionate in learning and I think that
            data-driven decisions are what works well the most.
          </p>

          <div className="certifications-block">
            <h2 className="certifications-title">Certifications:</h2>
            <div className="certifications-list">
              <div className="cert-card">
               <h3>Responsive Web Design</h3>
                <div className="cert-image">
                  <img src={fccLogo} alt="freeCodeCamp" />
                </div>
                <p>freeCodeCamp</p>

                <button>View</button>
              </div>

              <div className="cert-card">
              <h3>Python for Machine Learning & Data Science</h3>
                <div className="cert-image">
                  <img src={udemyLogo} alt="Udemy" />
                </div>
                <p>Udemy</p>

                <button>View</button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Ethan Lyle Cruz"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;