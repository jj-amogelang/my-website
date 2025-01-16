import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaBriefcase } from 'react-icons/fa';
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

const achievementData = {
  Education: {
    title: "Education",
    image: "/images/blog/pic.JPG",
    description: "Dual degree holder with expertise in both Technology and Property Development",
    degrees: [
      {
        title: "BSc Information Technology",
        image: "/images/blog/pic.JPG",
        description: "Graduated with distinction in Robotics Programming from Eduvos Institute",
        stats: {
          year: "2023",
          institution: "Eduvos, Pretoria",
          specialization: "Robotics"
        }
      },
      {
        title: "BSc Honors Property Studies",
        image: "/images/blog/pic5.jpg",
        description: "Successfully completed Property Studies at University of Witwatersrand",
        stats: {
          year: "2025",
          institution: "University of Witwatersrand, Johannesburg",
          specialization: "Property Development"
        }
      }
    ]
  },
  Experience: {
    title: "Old Mutual Grad Hackathon",
    image: "/images/blog/pic1.jpg",
    description: "Top 30 finalists developing application using AWS services",
    stats: {
      duration: "3 days",
      projects: "1",
      impact: "30% efficiency"
    }
  },
  Competitions: {
    title: "Github Constellation",
    image: "/images/blog/pic2.jpg",
    description: "Developing application using github co-pilot",
    stats: {
      participants: "300",
      ranking: "",
      prize: ""
    }
  },
  Innovations: {
    title: "TCS Sustainathon",
    image: "/images/blog/pic4.JPG",
    description: "Promoting water sustainability through innovation",
    stats: {
      participants: "15 groups",
      ranking: "3rd Place",
      prize: "R10,000"
    }
  }
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState('Education');

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

  const duplicatedSkills = [...skills, ...skills];

  const stats = {
    userInterface: {
      label: 'User Interface',
      values: [20, 35, 45, 60, 85], // Example progression values
    }
  };

  const currentAchievement = achievementData[selectedMenu];

  return (
    <div className="home-container">
      <div className="profile-header">
        <div className="profile-main">
          <h1>Welcome to my world of innovation and discovery! —</h1>
          <div className="profile-role">
            <span className="role-tag">
              <FaBriefcase className="role-icon" />
              <div className="role-selector">
                <span className="current-role">{selectedMenu}</span>
                <div className="role-options">
                  <button 
                    className={selectedMenu === 'Education' ? 'active' : ''} 
                    onClick={() => setSelectedMenu('Education')}
                  >
                    Education
                  </button>
                  <button 
                    className={selectedMenu === 'Experience' ? 'active' : ''} 
                    onClick={() => setSelectedMenu('Experience')}
                  >
                    Experience
                  </button>
                  <button 
                    className={selectedMenu === 'Competitions' ? 'active' : ''} 
                    onClick={() => setSelectedMenu('Competitions')}
                  >
                    Competitions
                  </button>
                  <button 
                    className={selectedMenu === 'Innovations' ? 'active' : ''} 
                    onClick={() => setSelectedMenu('Innovations')}
                  >
                    Innovations
                  </button>
                </div>
              </div>
            </span>
            <span className="role-separator">—</span>
            <span className="role-company">Yup, that's me!</span>
          </div>
        </div>
        <div className="profile-image">
          <img src="/images/profile.JPEG" alt="Profile" />
        </div>
      </div>

      <div className="stats-grid">
        {selectedMenu === 'Education' ? (
          currentAchievement.degrees.map((degree, index) => (
            <React.Fragment key={index}>
              <div className="stat-card achievement-title">
                <div className="stat-label">DEGREE {index + 1}</div>
                <div className="stat-content">
                  <h2>{degree.title}</h2>
                  <div className="achievement-stats">
                    {Object.entries(degree.stats).map(([key, value]) => (
                      <div key={key} className="stat-item">
                        <span className="stat-key">{key}</span>
                        <span className="stat-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="stat-card achievement-showcase">
                <div className="stat-label">SHOWCASE</div>
                <div className="stat-content">
                  <img 
                    src={degree.image} 
                    alt={degree.title}
                    className="achievement-image" 
                  />
                </div>
              </div>

              <div className="stat-card achievement-description">
                <div className="stat-label">OVERVIEW</div>
                <div className="stat-content">
                  <p>{degree.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))
        ) : (
          <>
            <div className="stat-card achievement-title">
              <div className="stat-label">ACHIEVEMENT</div>
              <div className="stat-content">
                <h2>{currentAchievement.title}</h2>
                <div className="achievement-stats">
                  {Object.entries(currentAchievement.stats).map(([key, value]) => (
                    <div key={key} className="stat-item">
                      <span className="stat-key">{key}</span>
                      <span className="stat-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="stat-card achievement-showcase">
              <div className="stat-label">SHOWCASE</div>
              <div className="stat-content">
                <img 
                  src={currentAchievement.image} 
                  alt={currentAchievement.title}
                  className="achievement-image" 
                />
              </div>
            </div>

            <div className="stat-card achievement-description">
              <div className="stat-label">OVERVIEW</div>
              <div className="stat-content">
                <p>{currentAchievement.description}</p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="hero-section">
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


      <div className="skills-section">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-slider-container">
          <div className="skills-track">
            {duplicatedSkills.map((skill, index) => (
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
    </div>
  );
};

export default HomePage;