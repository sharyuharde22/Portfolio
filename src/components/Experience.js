import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

function Experience() {
  return (
    <SectionWrapper>
      <section id="experience" className="experience">
        <h2>Professional Experience</h2>

        <div className="timeline-vertical">

          {/* LEFT */}
          <motion.div
            className="timeline-row left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>

            <div className="card">
              <h3>Web Developer Lead</h3>
              <p>GDSC (Google Developer Student Clubs)</p>
              <p>Sept 2025 - Present</p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="timeline-row right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>

            <div className="card">
              <h3>Assistant Technical Co-Head</h3>
              <p>Computer Society of India</p>
              <p>Aug 2025 - Present</p>
            </div>
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Experience;