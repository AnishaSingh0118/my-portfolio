import React, { useEffect } from 'react';
import './Resume.css';

const Resume = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.5
    });

    items.forEach(item => observer.observe(item));
    
    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="resume-container">
      <button className="download-btn" onClick={() => window.open('/path/to/your/resume.pdf', '_blank')}>
        Download Resume
      </button>
      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <h2>Intern</h2>
            <ul>
              <li>Worked on open source contributions.</li>
              <li>Collaborated with diverse teams.</li>
              <li>Gained valuable industry experience.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h2>DevOps Experience</h2>
            <ul>
              <li>2 years of experience in DevOps.</li>
              <li>Worked with CI/CD pipelines.</li>
              <li>Managed cloud infrastructure.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <h2>Project 1</h2>
            <ul>
              <li>Details about DevOps Project 1.</li>
              <li>Implemented automation scripts.</li>
              <li>Improved system efficiency.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h2>Project 2</h2>
            <ul>
              <li>Details about DevOps Project 2.</li>
              <li>Optimized deployment processes.</li>
              <li>Enhanced security protocols.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <h2>Project 3</h2>
            <ul>
              <li>Details about DevOps Project 3.</li>
              <li>Developed monitoring tools.</li>
              <li>Automated maintenance tasks.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h2>Project 4</h2>
            <ul>
              <li>Details about DevOps Project 4.</li>
              <li>Implemented scalable solutions.</li>
              <li>Ensured high availability.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
