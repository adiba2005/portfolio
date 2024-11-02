// src/App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About';
import Projects from './Projects';
import AchievementsSkills from './AchievementsAndSkills';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="overlay"></div>
        <div className="card">
          <h1 className="title">PORTFOLIO</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#/about">About Me</a></li>
              <li><a href="#/projects">Projects</a></li>
              <li><a href="#/achievements-skills">Achievements-Skills</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements-skills" element={<AchievementsAndSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
