import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import HashRouter and Routes
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="overlay"></div>
        <div className="card">
          <h1 className="title">PORTFOLIO</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#achievements-skills">Achievements, Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <Routes>
          {/* Define your routes here if you have components to display */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/achievements-skills" element={<AchievementsAndSkills />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
