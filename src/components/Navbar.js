import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Amogelang Sehlako</Link>
      </div>
      <div className="nav-links">
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/articles">Q&A</Link>
        <Link to="/ContactForm">Contacts</Link>
      </div>
    </nav>
  );
};

export default Navbar; 