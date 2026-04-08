import React from "react";
import SectionWrapper from "./SectionWrapper";

function Expertise() {
  return (
    <SectionWrapper>
      <section id = "expertise" className="expertise">
        <h2>Areas of Expertise</h2>

        <div className="flower-container">

          <div className="center-circle">AI</div>

          <div className="petal p1">Artificial Intelligence</div>
          <div className="petal p2">Cybersecurity</div>
          <div className="petal p3">Data Analytics</div>
          <div className="petal p4">Cloud</div>

        </div>

        <p className="expertise-text">
          Combining technical expertise with strategic thinking to build innovative solutions.
        </p>
      </section>
    </SectionWrapper>
  );
}

export default Expertise;