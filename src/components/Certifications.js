import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";

// import images
import IBMPFSC from "../assets/IBMPFSC.jpg";
import IBMDVWP from "../assets/IBMDVWP.jpg";
import IntroGenAI from "../assets/IntroGenAI.jpg";
import IBMDAWP from "../assets/IBMDAWP.jpg";
import LLM from "../assets/LLM.jpeg";
import RAI from "../assets/RAI.jpeg";
import RAIPrinciples from "../assets/RAIPrinciples.jpeg";
import cert8 from "../assets/Cisco.jpg";

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <SectionWrapper>
      <section id="certifications" className="certifications">
        <h2>Certifications</h2>

        <div className="cert-grid">

          <div className="cert-card" onClick={() => {
            console.log("clicked");
            setSelectedImage(IBMPFSC);
          }}>
            <h3>IBM Python for Data Science</h3>
            <p>Advanced Python for analytics</p>
          </div>

          <div className="cert-card" onClick={() => setSelectedImage(IBMDVWP)}>
            <h3>IBM Data Visualization using Python</h3>
            <p>Creating impactful visuals</p>
          </div>

          <div className="cert-card" onClick={() => setSelectedImage(IntroGenAI)}>
            <h3>Google Cloud Generative AI</h3>
            <p>Understanding AI models</p>
          </div>

          <div className="cert-card" onClick={() => setSelectedImage(IBMDAWP)}>
            <h3>IBM Data Analysis with Python</h3>
            <p>Statistical data handling</p>
          </div>

          <div className="cert-card" onClick={() => setSelectedImage(LLM)}>
            <h3>Google Cloud Introduction to LLMs</h3>
            <p>Basically tells what are LLMs?</p>
          </div>

          <div className="cert-card" onClick={() => setSelectedImage(RAI)}>
            <h3>Google Cloud Introduction to Responsible AI</h3>
            <p>Understanding ethical considerations in AI</p>
          </div>

          <div className="cert-card" onClick={() => setSelectedImage(RAIPrinciples)}>
            <h3>Google Cloud Responsible AI</h3>
            <p>Applying AI Principles with google cloud</p>
          </div>

          <div className="cert-card" onClick={() => setSelectedImage(cert8)}>
            <h3>Cisco Introduction to Modern AI</h3>
            <p>Exploring the latest advancements in artificial intelligence from Cisco</p>
          </div>

        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            >
              <span
              className="close-btn"
              onClick={() => setSelectedImage(null)}
              >
                ✖
                </span>
                <img
                src={selectedImage}
                alt="Certificate"
                className="modal-img"
                />
                </div>
          </div>
        )}
      </section>
    </SectionWrapper>
  );
}

export default Certifications;