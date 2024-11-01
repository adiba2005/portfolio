import React from 'react';
import './About.css'; // Import the CSS file for styling
import profileImage from '/adiba_resume_image.png'; // Reference the image

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">Hello, I'm <span className="larger-name">Adiba!</span></h2>
        <p>
          I’m a passionate software developer excited to apply my programming skills and experience to create meaningful tech solutions. 
          I thrive in dynamic environments and love tackling challenges. With a strong work ethic and a keen eye for detail, I'm always eager to learn and grow.
        </p>
        

      </div>
      <div className="image-container">
        <img src={profileImage} alt="Adiba's Image" className="profile-image" />
      </div>
    </div>
  );
};

export default About;
