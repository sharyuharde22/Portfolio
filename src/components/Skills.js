import React from "react";
import SectionWrapper from "./SectionWrapper";

function Skills() {
  return (
    <SectionWrapper>
    <section id = "skills" className="skills">
      <h2>Core Technical Skills</h2>

      <div className="grid">
        <div className="card">
          <h3>Programming Languages</h3>
          <p>C#, Python, Java, C, C++</p>
        </div>

        <div className="card">
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript, Node.js</p>
        </div>

        <div className="card">
          <h3>.NET Framework</h3>
          <p>Building applications using C# and .NET</p>
        </div>

        <div className="card">
          <h3>Database</h3>
          <p>SQL based database systems</p>
        </div>

        <div className="card">
          <h3>Strategic Thinking</h3>
          <p>Problem-solving and analytical skills</p>
        </div>

        <div className="card">
          <h3>Tools</h3>
          <p>VS Code, GitHub, SQL Server</p>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
}

export default Skills;