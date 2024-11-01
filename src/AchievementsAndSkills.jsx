import React from 'react';
import './AchievementsAndSkills.css'; // Import the CSS file for styling

const AchievementsAndSkills = () => {
  return (
    <div id="achievements-skills" className="achievements-skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        <div className="skills-card">
          <h3 className="skills-title">Programming Languages</h3>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3 className="skills-title">Frontend Development</h3>
          <ul className="skills-list">
            <li>React.js</li>
            <li>Angular.js</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3 className="skills-title">Backend Development & Databases</h3>
          <ul className="skills-list">
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
      <div className="achievements-section">
        <h3 className="achievements-title">Achievements</h3>
        <ul className="achievements-list">
          <li>Secured a scholarship for academic excellence at MKES Khandwala College.</li>
          <li>Completed certification in JavaScript Algorithms and Data Structures from FreeCodeCamp, covering variables, arrays, objects, functions, object-oriented programming, and functional programming.</li>
        </ul>
      </div>
    </div>
  );
};

export default AchievementsAndSkills;
