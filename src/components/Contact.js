import React from "react";
import SectionWrapper from "./SectionWrapper";

function Contact() {
  return (
    <SectionWrapper>
    <section id = "contact" className="contact">
      <h2>Let's Connect</h2>

      <p>Open to internships, collaborations, and opportunities.</p>

      <a href="mailto:sharyu1harde@gmail.com">📧 Email Me</a>
      <p>Phone: +91 9689603112</p>
      <p>Take my follow ups from LinkedIn: </p> 
      <a
        href="https://www.linkedin.com/in/sharyu-harde-2a1a422b2/"
        target="_blank"
        rel="noopener noreferrer"
      >
       💼 LinkedIn
      </a>

      <p>Check out my code and projects on GitHub: </p> 
      <a
        href="https://github.com/sharyuharde22/"
        target="_blank"
        rel="noopener noreferrer"
      >
        💻 GitHub
      </a>
      <p>Location: Nagpur, Maharashtra, India</p>
    </section>
    </SectionWrapper>
  );
}

export default Contact;