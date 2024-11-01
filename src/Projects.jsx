import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3 className="project-title">PinMyStyle</h3>
          <p className="project-description">
            Developed a tailoring application inspired by Pinterest, utilizing the Pinterest API to fetch dress images. The platform allows users to chat with the tailor (admin) and create personalized wardrobes, similar to Pinterest boards, with features for adding items to the cart.
          </p>
          <p className="project-languages"><strong>Languages:</strong> JavaScript, React, Node.js, Express</p>
        </div>
        
        <div className="project-card">
          <h3 className="project-title">Art Gallery</h3>
          <p className="project-description">
            An interactive art gallery using React.js, featuring artwork exploration and filtering options for enhanced engagement. Users can discover art pieces and learn more about their history and context.
          </p>
          <p className="project-languages"><strong>Languages:</strong> JavaScript, React</p>
        </div>
        
        <div className="project-card">
          <h3 className="project-title">Coffee Shop</h3>
          <p className="project-description">
            A simple coffee shop website showcasing the menu and offering online ordering capabilities for customer convenience. Includes features like user reviews and order tracking for a seamless experience.
          </p>
          <p className="project-languages"><strong>Languages:</strong> HTML, CSS, JavaScript</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
