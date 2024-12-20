import React, { useState } from 'react';
import './Portfolio.css';
import Modal from './Modal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      image: '/images/projects/Lenses2.jpg',
      title: 'Standard Lenses',
      category: 'Logo Design',
      description: ' Some minimalist designs for a photography business, focusing on quality pictures and professional portraits.',
      task: 'I created and designed a modern and professional logo design that reflects the precision and quality of photography services.',
      idea: 'The design emphasizes clarity and professionalism through minimalist elements and a clean typography choice.',
      images: [
        '/images/projects/Lenses1.png',
        '/images/projects/Lenses3.png',
        '/images/projects/Lenses2.jpg'
      ]
    },
    {
      id: 2,
      image: '/images/projects/Logo2.png',
      title: 'SUR-MONTER',
      description: 'A simple logo and flyers for a Fast-Food Francise.',
      link: '/project/amazon-scrapper',
      category: 'Logo Design',
    },
    {
      id: 3,
      image: '/images/projects/phase2.JPG',
      title: 'PHASE Apparel',
      category: 'Apparel Design',
      description: 'Contemporary streetwear brand focusing on unique designs and quality materials.',
      task: ' ',
      idea: ' ',
      images: [
        '/images/projects/phaseA.png',
        '/images/projects/phaseB.jpg',
        '/images/projects/phaseC.jpg',
        '/images/projects/phaseD.png',
        '/images/projects/phaseE.png',
        '/images/projects/phaseF.JPG'
      ]
    },
    {
      id: 4,
      image: '/images/projects/aerogrow2.png',
      title: 'AeroGrow',
      category: 'Farming Education WebApp',
      description: 'Educational platform designed to teach modern farming techniques and sustainable practices.',
      link: '/project/aerogrow'
    },
    {
      id: 5,
      image: '/images/projects/dumelahealth2.png',
      title: 'DumelaHealth',
      category: 'Healthcare WebApp',
      description: 'Healthcare platform connecting patients with medical professionals for virtual consultations.',
      link: '/project/dumela-health'
    },
    {
      id: 6,
      image: '/images/projects/phase3.png',
      title: 'PHASE Apparel',
      category: 'E-Commerce Website',
      description: 'Full-featured e-commerce platform for PHASE Apparel with integrated payment processing.',
      link: '/project/phase-ecommerce'
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p className="category">{item.category}</p>
                  <p className="description">{item.description}</p>
                  <button 
                    className="see-more"
                    onClick={() => handleProjectClick(item)}
                  >
                    See More →
                  </button>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      {selectedProject && (
        <Modal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Portfolio;