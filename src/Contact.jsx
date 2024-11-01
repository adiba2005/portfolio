import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
     
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/adiba-siddiqui-a705a1258/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        
        <a href="https://www.youtube.com/channel/your_youtube_channel" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="https://simpleicons.org/icons/youtube.svg" alt="YouTube" />
        </a>
        <a href="https://www.freecodecamp.org/fcc2a23eb56-bb4c-453b-98c5-1da64194f981" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="https://simpleicons.org/icons/freecodecamp.svg" alt="FreeCodeCamp" />
        </a>
        <a href="https://github.com/adiba2005" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="https://simpleicons.org/icons/github.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
