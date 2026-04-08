import React, { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      let current = "hero";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className="navbar">
      <h2>Sharyu Harde</h2>

      <ul>
        <li className={active==="hero" ? "active" : ""}><a href="#hero">Home</a></li>
        <li className={active==="about" ? "active" : ""}><a href="#about">About</a></li>
        <li className={active==="skills" ? "active" : ""}><a href="#skills">Skills</a></li>
        <li className={active==="projects" ? "active" : ""}><a href="#projects">Projects</a></li>
        <li className={active==="contact" ? "active" : ""}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;