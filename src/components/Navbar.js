import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Amogelang Sehlako</Link>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="https://evo-jj-amogelangs-projects.vercel.app/">Business</Link>
        <Link to="/ContactForm">Contacts</Link>
      </div>
      <div className="menu-icon" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar; 