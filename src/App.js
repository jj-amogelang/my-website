import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
