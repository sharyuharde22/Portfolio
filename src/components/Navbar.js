import React, { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav id="navbar" className="navbar">
      <h2 className="nav-brand">Sharyu Harde</h2>

      {/* Hamburger button — only visible on mobile */}
      <button
        className={`nav-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <ul className={menuOpen ? "open" : ""}>
        <li className={active === "hero"     ? "active" : ""}><a href="#hero"     onClick={handleLinkClick}>Home</a></li>
        <li className={active === "about"    ? "active" : ""}><a href="#about"    onClick={handleLinkClick}>About</a></li>
        <li className={active === "skills"   ? "active" : ""}><a href="#skills"   onClick={handleLinkClick}>Skills</a></li>
        <li className={active === "projects" ? "active" : ""}><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li className={active === "contact"  ? "active" : ""}><a href="#contact"  onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;