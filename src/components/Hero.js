import React from "react";
import profileImage from "../assets/profile.png";
import fccLogo from "../assets/fcc-logo.png";
import udemyLogo from "../assets/UDEMY.png";
import thmLogo from "../assets/TryHackMe.png";

import fccCert from "../assets/FCC-certification-cruz-09-15-2023.pdf";
import udemyCert from "../assets/UC-dd16151c-4560-4e91-b62e-d40aead10386.pdf";
import thmCert from "../assets/THM-VNHV3WHK3S-5.pdf";

import "./Hero.css";

function Header() {
  const openPDF = (file) => {
    window.open(file, "_blank");
  };

  return (
    <section id="about" className="hero-section">
      <div className="glass-container">

        {/* LEFT */}
        <div className="hero-left">
          <h1 className="hero-heading">Hi, I'm Ethan Lyle Cruz</h1>

          <p className="hero-paragraph">
            from Metro Manila, PH. I’m passionate in learning and I think that
            data-driven decisions are what works well the most.
          </p>

          <div className="certifications-block">
            <h2 className="certifications-title">Certifications:</h2>

            <div className="certifications-list">

              {/* FCC */}
              <div className="cert-card">
                <h3>Responsive Web Design</h3>
                <div className="cert-image">
                  <img src={fccLogo} alt="freeCodeCamp" />
                </div>
                <p>freeCodeCamp</p>

                <button onClick={() => openPDF(fccCert)}>
                  View
                </button>
              </div>

              {/* UDEMY */}
              <div className="cert-card">
                <h3>Python for Machine Learning & Data Science</h3>
                <div className="cert-image">
                  <img src={udemyLogo} alt="Udemy" />
                </div>
                <p>Udemy</p>

                <button onClick={() => openPDF(udemyCert)}>
                  View
                </button>
              </div>

              {/* TRYHACKME */}
              <div className="cert-card">
                <h3>TryHackMe Cyber Security Training</h3>
                <div className="cert-image">
                  <img src={thmLogo} alt="TryHackMe" />
                </div>
                <p>TryHackMe</p>

                <button onClick={() => openPDF(thmCert)}>
                  View
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT */}
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