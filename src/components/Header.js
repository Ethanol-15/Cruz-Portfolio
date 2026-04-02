import React, { useState } from "react";
import "./Header.css";
import { FaLaptop, FaDumbbell } from "react-icons/fa";

function Navbar() {
  const [activeTab, setActiveTab] = useState("dev");

  return (
    <nav className="navbar">
      <div className="toggle-pill">
        <div className={`toggle-slider ${activeTab === "gym" ? "right" : ""}`}></div>

        <button
          className={`toggle-option ${activeTab === "dev" ? "active" : ""}`}
          onClick={() => setActiveTab("dev")}
        >
          <FaLaptop className="toggle-icon" />
          <span>Dev</span>
        </button>

        <button
          className={`toggle-option ${activeTab === "gym" ? "active" : ""}`}
          onClick={() => setActiveTab("gym")}
        >
          <FaDumbbell className="toggle-icon" />
          <span>Gym</span>
        </button>
      </div>

      <ul className="navbar-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;