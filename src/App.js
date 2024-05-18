import React from 'react';
import './App.css';
import ParticlesBackground from './ParticlesBackground';
import Home from './Home';
import AboutMe from './AboutMe';
import Resume from './Resume';
import ContactInfo from './ContactInfo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesBackground />
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact Info</Link></li> 
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
