import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    {
      title: "The simplest example",
      subtitle: "kafka + golang",
      description: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '📱' },
    { name: 'Ubuntu', icon: '🐧' },
    { name: 'Git-Source-Control', icon: '📚' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'HTML&CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'MySQL', icon: '📊' },
    { name: 'AWS', icon: '☁️' }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="title-section">
          <h1 className="main-title">
            <span>Innovative Technologist</span>
            <span>Aspiring Robotics Engineer</span>
          </h1>
          <p className="subtitle">
          Welcome to my world of innovation and discovery! I'm an IT professional with a passion for creating smart solutions that connect technology with human needs. With a background in robotics programming, web development, and a knack for mathematical problem-solving, I thrive at the intersection of creativity and technology.
          </p>
        </div>

        <div className="projects-button">
          <Link to="/projects" className="button">
            Projects
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      <div className="social-links">
        <a href="https://github.com/jj-amogelang" target="_blank" rel="noopener noreferrer">
          <FaGithub /> Github
        </a>
        <a href="https://www.linkedin.com/in/amogelang-sehlako-b2246b281/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://x.com/Juss_Amo_" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> X
        </a>
        <a href="https://www.instagram.com/a.for.amo/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>

      <div className="slider-container">
        <button className="slider-arrow left" onClick={prevSlide}>←</button>
        <div className="slider-content">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
            >
              <div className="slide-image">
                {/* Add your slide image here */}
              </div>
              <div className="slide-text">
                <h3>{slide.title}</h3>
                <p>{slide.subtitle}</p>
                <p>{slide.description}</p>
                <Link to="/article" className="read-more">
                  Read more
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow right" onClick={nextSlide}>→</button>
      </div>

      <div className="skills-section">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img 
                  src={`/images/skills/${skill.name.toLowerCase().replace(/\s+/g, '-')}.png`} 
                  alt={skill.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = ''; // Clear the src to hide the broken image icon
                    e.target.parentNode.textContent = skill.icon; // Display the emoji icon
                  }}
                />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;