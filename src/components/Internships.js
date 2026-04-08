import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const data = [
  { id: 1, title: "TATA Cybersecurity", desc: "Security protocols & threat analysis" },
  { id: 2, title: "TATA Gen AI-Powered Data Analytics", desc: "ML for business intelligence" },
  { id: 3, title: "TATA ESG", desc: "Sustainability & corporate analysis" },
  { id: 4, title: "TATA Data Visualization", desc: "Visual storytelling" },
  { id: 5, title: "Deloitte Data Analysis", desc: "Consulting simulation" },
  { id: 6, title: "Deloitte Technology", desc: "Tech innovation & implementation" },
  { id: 7, title: "Eximius Software Solutions", desc: "C# and .NET Framework Basics with real-world applications." },
  { id: 8, title: "SoftSense TechnoServe", desc: "Worked on various digital forensic tools." },
];

function Internships() {
  return (
    <SectionWrapper>
    <section id = "internships" className="internships">
      <h2>Internships & Job Simulations</h2>

      <div className="timeline">
        {data.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="circle">{item.id}</div>

            <div className="line"></div>

            <div className="timeline-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </SectionWrapper>
  );
}

export default Internships;