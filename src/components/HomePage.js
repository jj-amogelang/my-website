import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { 
  SiPython, 
  SiReact, 
  SiUbuntu, 
  SiGit, 
  SiMongodb, 
  SiHtml5, 
  SiJavascript, 
  SiFlask, 
  SiMysql, 
  SiAmazonaws 
} from 'react-icons/si';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Graduation',
      subtitle: 'BSc Information Technology specializing in Robotics Programming',
      description: 'Description for project one.',
      image: '/images/blog/pic.JPG',
      link: '/project-one'
    },
    {
      title: 'Old Mutual Grad Program',
      subtitle: 'Top 30 finalists developing application using AWS services',
      description: 'Description for project two.',
      image: '/images/blog/pic1.jpg',
      link: '/project-two'
    },
    {
      title: 'Github Constellation',
      subtitle: 'Developing application using github co-pilot',
      description: 'Description for project three.',
      image: '/images/blog/pic2.jpg',
      link: '/project-three'
    },
    {
      title: 'Geekulcha Annual Hackathon',
      subtitle: 'Developing innovating application for public service and administration',
      description: 'Description for project three.',
      image: '/images/blog/pic3.jpg',
      link: '/project-three'
    },
    {
      title: 'TCS Sustainathon',
      subtitle: 'Promoting water sustainability through innovation',
      description: 'Description for project three.',
      image: '/images/blog/pic4.JPG',
      link: '/project-three'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const skills = [
    { name: 'Python', icon: <SiPython /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Ubuntu', icon: <SiUbuntu /> },
    { name: 'Git Source Control', icon: <SiGit /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'HTML & CSS', icon: <SiHtml5 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'AWS', icon: <SiAmazonaws /> }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="title-section">
          <h1 className="main-title">
            <span>Creativity Meets</span>
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
          {projects.map((project, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
            >
              <div className="slide-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="slide-text">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <p>{project.description}</p>
                <Link to={project.link} className="read-more">
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
                {skill.icon}
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