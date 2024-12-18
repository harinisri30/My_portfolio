import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import profileImage from "./profile.jpg";
import leetcodeLogo from "./leet-logo2.png";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-image">
        <img src={profileImage} alt="Bolla Harini Sri" />
      </div>
      <div className="home-content">
        <h1 id="p2">Hello, I'm <span className="highlight">"Bolla Harini Sri"</span></h1>
        <p id="p1">And I'm good at "Front-end Development"<br /></p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/bolla-harini-sri-419a78258" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/harinisri30" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/harini_sri_30/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeLogo} alt="LeetCode" style={{ width: '35px', height: '35px' }} />
          </a>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=1N6adYGPU0brM4bD6nboCnpwlFVuSQv0q" download="Harini_Sri_Resume.pdf" className="btn btn-resume">Download Resume</a>
      </div>
    </section>
  );
}

export default Home;
