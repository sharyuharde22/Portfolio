import React from "react";
import "../App.css";
import profile from "../assets/profile.jpeg";
import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <SectionWrapper>
      <section id = "about" className="about">
        <h2>About Me</h2>

      <div className="about-container">
        <div className="about-text">
          <p>
            I am a Computer Engineering student at Cummins College of Engineering for Women,
            passionate about AI, cybersecurity, data analytics, and cloud technologies.
          </p>

          <p>
            I love building practical, real-world projects that help me apply my skills in Python,
            Flask, Java, and modern frameworks.
          </p>

          <p>
            I’m deeply committed to continuous growth and always open to internships,
            collaborations, and innovative tech solutions.
          </p>

          <p><strong>Location:</strong> Nagpur, Maharashtra, India</p>
          <p><strong>Education:</strong> Cummins College of Engineering for Women</p>
        </div>

      {/* RIGHT: IMAGE */}
      <div className="about-image">
        <img src={profile} alt="profile" />
      </div>
      </div>
    </section>
    </SectionWrapper>
  );
}

export default About;