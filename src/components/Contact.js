import React from "react";
import "./Contact.css";
import linkedinIcon from "../assets/icons/LinkedIN.png";
import githubIcon from "../assets/icons/Github.png";
import gmailIcon from "../assets/icons/Gmail.png";
import facebookIcon from "../assets/icons/Facebook.png";
import instagramIcon from "../assets/icons/Instagram.png";
import tiktokIcon from "../assets/icons/Tiktok.png";
import contactImage from "../assets/contact-image.png";

function Contact() {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/ethan-cruz-992730337/",
    },
    {
      name: "Github",
      icon: githubIcon,
      link: "https://github.com",
    },
    {
      name: "Email",
      icon: gmailIcon,
      link: "mailto:cruz.ethanlyle2003@gmail.com",
    },
    {
      name: "Facebook",
      icon: facebookIcon,
      link: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: instagramIcon,
      link: "https://instagram.com",
    },
    {
      name: "Tiktok",
      icon: tiktokIcon,
      link: "https://tiktok.com",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-title">Let&apos;s Get in Touch!</h2>

          <p className="contact-description">
            For inquiries, suggestions, or concerns, please send me a message
            or leave me an email by clicking on the contact button. I will get
            back to you as soon as possible.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cruz.ethanlyle2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-main-button"
          >
            Contact Me Directly!
          </a>

          <div className="contact-links-grid">
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <img src={item.icon} alt={item.name} className="contact-icon" />
                <span className="contact-name">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-right">
          <img src={contactImage} alt="Contact illustration" />
        </div>
      </div>
    </section>
  );
}

export default Contact;