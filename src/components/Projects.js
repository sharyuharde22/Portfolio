import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";

/* IMPORT IMAGES */
import chatbot from "../assets/AIChatbot.jpg";

import resume1 from "../assets/AIResume.jpg";
import resume2 from "../assets/AIResume1.jpg";
import resume3 from "../assets/AIResume2.jpg";
import resume4 from "../assets/AIResume3.jpg";

import threat from "../assets/AIThreat.jpg";

/* PROJECT DATA */
const projects = [
  {
    id: 1,
    title: "AI Chatbots",
    desc: "Conversational agents using NLP",
    images: [chatbot], // ✅ single
  },
  {
    id: 2,
    title: "AI Resume Screener",
    desc: "Resume screening tool using AI",
    images: [resume1, resume2, resume3, resume4], // ✅ multiple
  },
  {
    id: 3,
    title: "AI Driven Threat Detection",
    desc: "Threat detection using CSV/Excel",
    images: [threat], // ✅ single
  },
  {
    id: 4,
    title: "Speech Recognition",
    desc: "Voice to text system",
    images: [], // no images yet
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  return (
    <SectionWrapper>
      <section id="projects" className="projects">
        <h2>Real-World Projects</h2>

        <div className="grid">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="card"
              onClick={() => {
                setActiveProject(proj);
                setCurrentImage(0);
              }}
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activeProject && (
          <div className="modal" onClick={() => setActiveProject(null)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="close-btn"
                onClick={() => setActiveProject(null)}
              >
                ✖
              </span>

              <h3>{activeProject.title}</h3>

              {/* IMAGE */}
              <div className="image-container">
                <img
                src={activeProject?.images[currentImage]}
                alt="project"
                className="modal-img"
                />
                </div>
                
                {activeProject?.images.length > 1 && (
                  <div className="thumbnails">
                    {activeProject?.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`project-${index}`}
                        className={index === currentImage ? "active" : ""}
                        onClick={() => setCurrentImage(index)}
                      />
                    ))}
                  </div>
                )}

                {activeProject.images.length > 1 && (
                  <div className="slider-buttons">
                    <button onClick={prevImage}>←</button>
                    <button onClick={nextImage}>→</button>
                  </div>
                )}

              <p>{activeProject.desc}</p>
            </div>
          </div>
        )}
      </section>
    </SectionWrapper>
  );
}

export default Projects;