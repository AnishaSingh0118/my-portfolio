import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { FaBlogger } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-container">
      <div className="left-section">
        <div className="intro">
          <h1 className="name">Hi there, It's Anisha 👋....</h1>
          <p className="descriptionhome">
            I'm a passionate web developer with a love for creating interactive and dynamic user experiences.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.blogs.com/" target="_blank" rel="noopener noreferrer">
              <FaBlogger/>
            </a>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="image-container">
          <img src="/tree.jpg" alt="Profile" className="your-image-class" />
        </div>
      </div>
    </div>
  );
}

export default Home;
