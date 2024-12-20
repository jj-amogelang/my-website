import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: '/images/projects/Logo1.png',
      title: 'Standard Lenses',
      category: 'Logo Design',
      description: 'A minimalist logo design for an optometry business, focusing on clean lines and professional aesthetics.'
    },
    {
      id: 2,
      image: '/images/projects/Logo2.png',
      title: 'Amazon Scrapper',
      description: 'A simple blog which has user authentication such as Sign Up.',
      link: '/project/amazon-scrapper',
      category: 'Apparel Design'
    },
    {
      id: 3,
      image: '/images/projects/phase2.JPG',
      title: 'PHASE Apparel',
      category: 'Apparel Design',
      description: 'Contemporary streetwear brand focusing on unique designs and quality materials.',
      link: '/project/phase-apparel'
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
                  <a href={item.link} className="see-more">
                    See More →
                  </a>
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
    </div>
  );
};

export default Portfolio;