import React from "react";
import SectionWrapper from "./SectionWrapper";

function Hero() {
  return (
    <SectionWrapper>
    <section id = "hero" className="hero">
      <div className="hero-text">
        <h1>Sharyu Harde</h1>
        <p>
          Computer Engineering Student | AI & Cybersecurity Enthusiast | Web Development Lead
        </p>
        <a
          href=" https://www.linkedin.com/in/sharyu-harde-2a1a422b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">Contact Me</button>
        </a>
      </div>
    </section>
    </SectionWrapper>
  );
}

export default Hero;