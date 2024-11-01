import React from 'react';
import './App.css';

function App() {
  return (
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
    </div>
  );
}

export default App;
