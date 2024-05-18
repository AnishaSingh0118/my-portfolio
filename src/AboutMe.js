import React, { useEffect, useRef } from 'react';
import './AboutMe.css';
import profilePic from './tree.jpg';
import { FaReact, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiJavascript, SiGooglecloud, SiKubernetes, SiTerraform, SiServerless, SiFlutter, SiDart, SiFigma } from 'react-icons/si';

const AboutMe = () => {
  const techStackRef = useRef();
  const socialMetricsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(socialMetricsRef.current);
    observer.observe(techStackRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const fillElement = entry.target.querySelector('.fill');
          if (entry.isIntersecting) {
            fillElement.classList.add('fill-animate');
          } else {
            fillElement.classList.remove('fill-animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    const bars = document.querySelectorAll('.metric-bar');
    bars.forEach(bar => barObserver.observe(bar));

    return () => {
      bars.forEach(bar => barObserver.unobserve(bar));
    };
  }, []);

  return (
    <div className="about-container">
      <div className="top-section">
        <div className="image-container">
          <img src={profilePic} alt="Anisha Singh" className="your-image-class" />
        </div>
        <div className="brief">
          <h1 className="about-name">Anisha Singh</h1>
          <p className="description">
            I am a <span className="highlight">DevOps Engineer</span> with a passion for automating workflows and optimizing infrastructure. With a strong background in <span className="highlight">cloud technologies</span> and <span className="highlight">CI/CD pipelines</span>, I strive to improve efficiency and drive innovation.
          </p>
        </div>
      </div>
      <div className="social-metrics" ref={socialMetricsRef}>
        <h2>Social Media Metrics</h2>
        <div className="metric-bar">
          <span className="metric-text linkedin">LinkedIn Post Impressions: 2,000+</span>
          <div className="bar">
            <div className="fill"></div>
          </div>
        </div>
        <div className="metric-bar">
          <span className="metric-text twitter">Twitter Post Impressions: 1,600+</span>
          <div className="bar">
            <div className="fill"></div>
          </div>
        </div>
      </div>
      <div className="tech-stack" ref={techStackRef}>
        <h1>Tech Stacks</h1>
        
        <h3>DevOps</h3>
        <div className="tech-stack-grid">
          <div className="tech-box aws">
            <FaAws className="tech-icon" />
            AWS
          </div>
          <div className="tech-box gcp">
            <SiGooglecloud className="tech-icon" />
            GCP
          </div>
          <div className="tech-box docker">
            <FaDocker className="tech-icon" />
            Docker
          </div>
          <div className="tech-box kubernetes">
            <SiKubernetes className="tech-icon" />
            Kubernetes
          </div>
          <div className="tech-box terraform">
            <SiTerraform className="tech-icon" />
            Terraform
          </div>
          <div className="tech-box serverless">
            <SiServerless className="tech-icon" />
            Serverless
          </div>
          <div className="tech-box python">
            <FaPython className="tech-icon" />
            Python
          </div>
        </div>

        <h3>Android Development</h3>
        <div className="tech-stack-grid">
          <div className="tech-box flutter">
            <SiFlutter className="tech-icon" />
            Flutter
          </div>
          <div className="tech-box dart">
            <SiDart className="tech-icon" />
            Dart
          </div>
        </div>

        <h3>Web Development</h3>
        <div className="tech-stack-grid">
          <div className="tech-box react">
            <FaReact className="tech-icon" />
            React.js
          </div>
          <div className="tech-box javascript">
            <SiJavascript className="tech-icon" />
            JavaScript
          </div>
        </div>

        <h3>UI/UX</h3>
        <div className="tech-stack-grid">
          <div className="tech-box figma">
            <SiFigma className="tech-icon" />
            Figma
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutMe;
