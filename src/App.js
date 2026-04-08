import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Internships from "./components/Internships";
import Expertise from "./components/Expertise";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Internships />
        <Expertise />
        <Contact />
      </div>
    </div>
  );
}

export default App;